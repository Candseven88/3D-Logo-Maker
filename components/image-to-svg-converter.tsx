"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Upload, Download, RefreshCw, Image as ImageIcon, FileType } from 'lucide-react';
import { toast } from 'sonner';

// ImageTracer types
interface ImageTracerOptions {
  ltres?: number;
  qtres?: number;
  pathomit?: number;
  colorsampling?: number;
  numberofcolors?: number;
  mincolorratio?: number;
  colorquantcycles?: number;
  scale?: number;
  strokewidth?: number;
  blurradius?: number;
  blurdelta?: number;
  linefilter?: boolean;
  [key: string]: any; // Allow additional properties
}

interface ImageTracerPresets {
  [key: string]: ImageTracerOptions;
}

// 优化的预设配置 - 修复黑色输出问题
const presets: ImageTracerPresets = {
  'default': {
    ltres: 1,
    qtres: 1,
    pathomit: 8,
    colorsampling: 1,
    numberofcolors: 16,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    scale: 1,
    strokewidth: 1,
    linefilter: false,
    blurradius: 0,
    blurdelta: 20
  },
  'posterized1': { 
    colorsampling: 1, 
    numberofcolors: 4,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    ltres: 1,
    qtres: 1,
    pathomit: 8
  },
  'posterized2': { 
    numberofcolors: 8, 
    colorquantcycles: 3,
    colorsampling: 1,
    mincolorratio: 0.02,
    ltres: 1,
    qtres: 1,
    pathomit: 8
  },
  'posterized3': { 
    numberofcolors: 16,
    colorsampling: 1,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    ltres: 1,
    qtres: 1,
    pathomit: 8
  },
  'curvy': { 
    ltres: 0.01, 
    linefilter: true,
    colorsampling: 1,
    numberofcolors: 16,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    qtres: 1,
    pathomit: 8
  },
  'sharp': { 
    ltres: 1, 
    qtres: 1,
    colorsampling: 1,
    numberofcolors: 16,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    pathomit: 8
  },
  'detailed': { 
    pathomit: 0, 
    ltres: 0.5, 
    qtres: 0.5,
    colorsampling: 1,
    numberofcolors: 32,
    mincolorratio: 0.01,
    colorquantcycles: 5
  },
  'smoothed': { 
    ltres: 0.01, 
    qtres: 1,
    colorsampling: 1,
    numberofcolors: 16,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    pathomit: 8,
    blurradius: 1,
    blurdelta: 20
  },
  'grayscale': { 
    colorsampling: 0, 
    numberofcolors: 7,
    mincolorratio: 0.02,
    colorquantcycles: 3,
    ltres: 1,
    qtres: 1,
    pathomit: 8
  }
};

declare global {
  interface Window {
    ImageTracer: any;
  }
}

export default function ImageToSvgConverter() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [svgResult, setSvgResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>('posterized2');
  const [scale, setScale] = useState([3]);
  const [colors, setColors] = useState([8]);
  const [previewZoom, setPreviewZoom] = useState(1);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 检查是否有从主页传递过来的图片
  useEffect(() => {
    const pendingImageData = sessionStorage.getItem('pendingImageFile');
    const pendingImageName = sessionStorage.getItem('pendingImageName');
    
    if (pendingImageData && pendingImageName) {
      setImagePreview(pendingImageData);
      
      // 创建File对象
      fetch(pendingImageData)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], pendingImageName, { type: blob.type });
          setSelectedImage(file);
        });
      
      // 清除临时数据
      sessionStorage.removeItem('pendingImageFile');
      sessionStorage.removeItem('pendingImageName');
      
      toast.success('Image loaded from homepage, ready to convert!');
    }
  }, []);

  // 加载ImageTracer库
  const loadImageTracer = useCallback(async () => {
    if (window.ImageTracer) {
      return window.ImageTracer;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/imagetracerjs@1.2.6/imagetracer_v1.2.6.js';
      script.onload = () => {
        resolve(window.ImageTracer);
      };
      script.onerror = () => {
        reject(new Error('Failed to load ImageTracer library'));
      };
      document.head.appendChild(script);
    });
  }, []);

  // 处理文件选择
  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast.error('Image file size cannot exceed 10MB');
      return;
    }

    setSelectedImage(file);
    
    // 创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImagePreview(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
    
    toast.success('Image loaded, click "Convert to SVG" to start processing');
  }, []);

  // 处理拖拽上传
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  // 转换图片为SVG
  const convertToSvg = useCallback(async () => {
    if (!selectedImage || !imagePreview) {
      toast.error('Please select an image first');
      return;
    }

    setIsLoading(true);
    
    try {
      // 加载ImageTracer库
      const ImageTracer = await loadImageTracer();
      
      // 创建图片元素
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imagePreview;
      });

      // 创建canvas并绘制图片
      const canvas = canvasRef.current;
      if (!canvas) {
        throw new Error('Canvas not found');
      }
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Cannot get canvas context');
      }

      // 设置canvas尺寸 - 限制最大尺寸以提升性能
      const maxSize = 800;
      let { width, height } = img;
      
      if (width > maxSize || height > maxSize) {
        const ratio = Math.min(maxSize / width, maxSize / height);
        width = Math.floor(width * ratio);
        height = Math.floor(height * ratio);
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // 使用高质量缩放
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // 清除背景为白色（避免透明背景导致的问题）
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      
      // 绘制图片
      ctx.drawImage(img, 0, 0, width, height);

      // 获取ImageData
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // 配置转换选项 - 优化参数以避免黑色输出
      const basePreset = presets[selectedPreset];
      const options = {
        ...basePreset,
        // 用户自定义参数覆盖预设
        scale: scale[0],
        numberofcolors: colors[0],
        // 确保关键参数设置正确
        colorsampling: basePreset.colorsampling !== undefined ? basePreset.colorsampling : 1,
        mincolorratio: basePreset.mincolorratio || 0.02,
        colorquantcycles: basePreset.colorquantcycles || 3,
        strokewidth: 1,
        // 路径优化参数
        ltres: basePreset.ltres !== undefined ? basePreset.ltres : 1,
        qtres: basePreset.qtres !== undefined ? basePreset.qtres : 1,
        pathomit: basePreset.pathomit !== undefined ? basePreset.pathomit : 8,
      };

      // 执行转换
      console.log('Converting with options:', options);
      console.log('Image data:', { width: canvas.width, height: canvas.height });
      
      const svgString = ImageTracer.imagedataToSVG(imageData, options);
      
      // 检查转换结果
      if (!svgString || svgString.trim() === '') {
        throw new Error('Conversion resulted in empty SVG');
      }
      
      // 检查SVG是否包含实际内容
      if (!svgString.includes('<path') && !svgString.includes('<polygon') && !svgString.includes('<circle')) {
        console.warn('SVG may not contain visible content');
      }
      
      console.log('SVG conversion successful, length:', svgString.length);
      
      // 优化SVG用于显示
      const optimizedSvg = optimizeSvgForDisplay(svgString);
      console.log('SVG optimized for display');
      
      setSvgResult(optimizedSvg);
      setPreviewZoom(1); // 重置缩放
      toast.success('SVG conversion completed!');
      
    } catch (error) {
      console.error('Conversion error:', error);
      toast.error('Conversion failed: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [selectedImage, imagePreview, selectedPreset, scale, colors, loadImageTracer]);

  // 下载SVG
  const downloadSvg = useCallback(() => {
    if (!svgResult) {
      toast.error('No SVG available to download');
      return;
    }

    const blob = new Blob([svgResult], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted-${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('SVG file downloaded successfully');
  }, [svgResult]);

  // 优化SVG显示 - 确保SVG有正确的viewBox
  const optimizeSvgForDisplay = useCallback((svgString: string) => {
    try {
      // 创建一个临时DOM元素来解析SVG
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgString, 'image/svg+xml');
      const svgElement = doc.querySelector('svg');
      
      if (!svgElement) {
        return svgString;
      }

      // 获取SVG的实际尺寸
      const width = svgElement.getAttribute('width');
      const height = svgElement.getAttribute('height');
      const viewBox = svgElement.getAttribute('viewBox');
      
      // 如果没有viewBox，尝试根据width和height创建
      if (!viewBox && width && height) {
        const w = parseFloat(width);
        const h = parseFloat(height);
        if (!isNaN(w) && !isNaN(h)) {
          svgElement.setAttribute('viewBox', `0 0 ${w} ${h}`);
        }
      }
      
      // 确保SVG可以自适应容器
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // 返回优化后的SVG字符串
      return new XMLSerializer().serializeToString(doc);
    } catch (error) {
      console.warn('Failed to optimize SVG for display:', error);
      return svgString;
    }
  }, []);



  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* 隐藏的canvas用于图片处理 */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      {/* 标题 */}
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="mb-4">
          <ImageIcon className="w-4 h-4 mr-2" />
          Image to SVG
        </Badge>
        <h1 className="text-4xl font-bold">
          Convert Images to <span className="text-primary">SVG Vectors</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Transform JPG, PNG and other raster images into scalable SVG vector graphics, then use directly for 3D logo creation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 左侧：上传和设置 */}
        <div className="space-y-6 h-fit">
          {/* 文件上传 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Image
              </CardTitle>
              <CardDescription>
                Support JPG, PNG formats, max 10MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                  }}
                  className="hidden"
                />
                
                {imagePreview ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full max-h-48 mx-auto rounded-lg shadow-sm"
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedImage?.name} ({Math.round((selectedImage?.size || 0) / 1024)}KB)
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">Click to upload or drag image here</p>
                      <p className="text-sm text-muted-foreground">JPG, PNG formats</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 转换设置 */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Settings</CardTitle>
              <CardDescription>
                Adjust parameters for optimal SVG output quality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 预设模式 */}
              <div className="space-y-2">
                <Label>Preset Mode</Label>
                <Select value={selectedPreset} onValueChange={setSelectedPreset}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="posterized2">Poster Style (Recommended)</SelectItem>
                    <SelectItem value="posterized1">Simple Poster</SelectItem>
                    <SelectItem value="posterized3">Rich Poster</SelectItem>
                    <SelectItem value="detailed">Detailed Mode</SelectItem>
                    <SelectItem value="smoothed">Smooth Mode</SelectItem>
                    <SelectItem value="sharp">Sharp Mode</SelectItem>
                    <SelectItem value="curvy">Curved Mode</SelectItem>
                    <SelectItem value="grayscale">Grayscale Mode</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 缩放比例 */}
              <div className="space-y-2">
                <Label>Scale: {scale[0]}x</Label>
                <Slider
                  value={scale}
                  onValueChange={setScale}
                  min={1}
                  max={10}
                  step={0.5}
                  className="w-full"
                />
              </div>

              {/* 颜色数量 */}
              <div className="space-y-2">
                <Label>Colors: {colors[0]}</Label>
                <Slider
                  value={colors}
                  onValueChange={setColors}
                  min={2}
                  max={64}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* 转换按钮 */}
              <Button
                onClick={convertToSvg}
                disabled={!selectedImage || isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <FileType className="w-4 h-4 mr-2" />
                    Convert to SVG
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 右侧：结果显示 */}
        <div className="space-y-6">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>SVG Preview</CardTitle>
              <CardDescription>
                Vector graphics preview after conversion
              </CardDescription>
            </CardHeader>
            <CardContent>
              {svgResult ? (
                <div className="space-y-4">
                  <div 
                    className="w-full border rounded-lg overflow-hidden bg-white relative"
                    style={{ 
                      minHeight: '320px',
                      maxHeight: '500px',
                      aspectRatio: '1',
                      background: 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)',
                      backgroundSize: '16px 16px',
                      backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                    }}
                  >
                    {/* SVG容器 */}
                    <div 
                      className="absolute inset-0 p-4 flex items-center justify-center"
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <div 
                        className="w-full h-full flex items-center justify-center overflow-auto"
                        style={{
                          transform: `scale(${previewZoom})`,
                          transformOrigin: 'center',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: svgResult }}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* 缩放控制 */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={() => setPreviewZoom(Math.max(0.25, previewZoom - 0.25))}
                        className="bg-black/70 text-white text-xs px-2 py-1 rounded hover:bg-black/80 transition-colors"
                        disabled={previewZoom <= 0.25}
                      >
                        −
                      </button>
                      <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {Math.round(previewZoom * 100)}%
                      </div>
                      <button
                        onClick={() => setPreviewZoom(Math.min(3, previewZoom + 0.25))}
                        className="bg-black/70 text-white text-xs px-2 py-1 rounded hover:bg-black/80 transition-colors"
                        disabled={previewZoom >= 3}
                      >
                        +
                      </button>
                      <button
                        onClick={() => setPreviewZoom(1)}
                        className="bg-black/70 text-white text-xs px-2 py-1 rounded hover:bg-black/80 transition-colors ml-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                  
                  {/* SVG信息 */}
                  <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span>SVG Size: {Math.round(svgResult.length / 1024 * 10) / 10}KB</span>
                      <span>Zoom: {Math.round(previewZoom * 100)}%</span>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex justify-center">
                    <Button
                      onClick={downloadSvg}
                      variant="default"
                      className="px-8"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download SVG
                    </Button>
                  </div>
                  
                  {/* 使用提示 */}
                  <div className="text-center text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
                    <p className="mb-1">✨ <strong>Next Step:</strong></p>
                    <p>Use the downloaded SVG file on our <a href="/#upload" className="text-primary hover:underline font-medium">home page</a> to create your 3D logo!</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-80 border rounded-lg flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <FileType className="w-12 h-12 mx-auto opacity-50" />
                    <p>SVG result will be displayed here</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 使用提示 */}
          <Card className="h-fit">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Usage Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2 pt-0">
              <div className="space-y-1">
                <p className="font-medium text-foreground">🎯 Preset Modes:</p>
                <p>• <strong>Poster Style</strong>: Best for logos and simple graphics</p>
                <p>• <strong>Detailed Mode</strong>: Preserves fine details (larger files)</p>
                <p>• <strong>Smooth Mode</strong>: Creates smoother, curved lines</p>
                <p>• <strong>Sharp Mode</strong>: Maintains crisp edges</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">⚙️ Settings:</p>
                <p>• <strong>Scale</strong>: Higher = larger output size</p>
                <p>• <strong>Colors</strong>: Fewer = simpler, cleaner result</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">💡 Best Results:</p>
                <p>• Use high contrast images</p>
                <p>• Simple shapes work better than photos</p>
                <p>• Try different presets for your image type</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 