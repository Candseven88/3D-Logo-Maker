import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Box, Camera, ChevronDown, Printer, Loader2, Video, Share2, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { File, Image } from "lucide-react";
import { PNG_RESOLUTIONS } from "@/lib/constants";
import { handleExport, handlePrint, handleGIFExport } from "@/lib/exporters";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { checkIsUSLocation } from "@/lib/utils";

interface ExportButtonsProps {
  fileName: string;
  modelGroupRef: React.RefObject<THREE.Group | null>;
  autoRotate?: boolean;
}

export function ExportButtons({ fileName, modelGroupRef, autoRotate = false }: ExportButtonsProps) {
  const [isUS, setIsUS] = useState<boolean | null>(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isCreatingGIF, setIsCreatingGIF] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const isUSLocation = await checkIsUSLocation();
        console.log("Location check result:", isUSLocation);
        setIsUS(isUSLocation);
      } catch (error) {
        console.error("Error in location check:", error);
        setIsUS(false);
      }
    };
    checkLocation();
  }, []);

  const handlePrintClick = async () => {
    setIsPrinting(true);
    try {
      await handlePrint("stl", modelGroupRef, fileName, "m3d");
    } finally {
      setIsPrinting(false);
    }
  };

  const handleGIFClick = async () => {
    setIsCreatingGIF(true);
    try {
      await handleGIFExport(modelGroupRef, fileName, 3000, 15, 512);
    } finally {
      setIsCreatingGIF(false);
    }
  };

  const handleShareClick = async () => {
    setIsSharing(true);
    try {
      // Create a shareable link by capturing the current 3D model state
      // In a real implementation, this would upload the model to a cloud service
      // For now, we'll create a preview URL with the current settings
      const currentSvgData = localStorage.getItem('svgData');
      const currentFileName = localStorage.getItem('fileName');
      
      if (currentSvgData && currentFileName) {
        // Create a base64 encoded version of the SVG data for the URL
        const encodedSvg = btoa(encodeURIComponent(currentSvgData));
        const encodedFileName = encodeURIComponent(currentFileName);
        
        // Generate share URL
        const baseUrl = window.location.origin;
        const previewUrl = `${baseUrl}/preview?svg=${encodedSvg}&name=${encodedFileName}`;
        
        setShareUrl(previewUrl);
      }
    } catch (error) {
      console.error('Error creating share link:', error);
    } finally {
      setIsSharing(false);
    }
  };

  const handleCopyLink = async () => {
    if (shareUrl) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy link:', error);
      }
    }
  };

  const handleSocialShare = (platform: string) => {
    if (!shareUrl) {
      handleShareClick().then(() => {
        setTimeout(() => shareToPlatform(platform), 1000);
      });
      return;
    }
    shareToPlatform(platform);
  };

  const shareToPlatform = (platform: string) => {
    const shareText = `🎨 Check out my amazing 3D logo created with 3D Designer! 

✨ From flat SVG to stunning 3D in seconds
🚀 Professional results, completely free
🎯 Perfect for branding and marketing

Try it yourself: ${shareUrl}

#3DDesign #LogoDesign #Branding #Design #Free`;

    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl || '');
    
    let shareLink = '';
    
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent('Check out my 3D logo created with 3D Designer!')}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodeURIComponent('Amazing 3D Logo Created with 3D Designer')}&summary=${encodeURIComponent('Professional 3D logos from SVG files, completely free!')}`;
        break;
      case 'reddit':
        shareLink = `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent('Check out this 3D logo I made with a free online tool!')}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodedText}`;
        break;
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent('Check out my 3D logo created with 3D Designer!')}`;
        break;
      case 'email':
        const emailSubject = encodeURIComponent('Check out my 3D logo!');
        const emailBody = encodeURIComponent(`Hi!

I just created this amazing 3D logo using 3D Designer - a free online tool that converts SVG files into stunning 3D models.

Check it out: ${shareUrl}

You can create your own 3D logos at: https://3dlogo.site

Best regards!`);
        shareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="flex items-center gap-1">
            <Camera className="h-4 w-4 mr-0.5" />
            <span className="hidden sm:inline">Export Image</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          {PNG_RESOLUTIONS.map((resolution) => (
            <DropdownMenuItem
              key={resolution.multiplier}
              onSelect={() =>
                handleExport(
                  "png",
                  modelGroupRef,
                  fileName,
                  resolution.multiplier,
                )
              }>
              <Image className="h-4 w-4 ml-1" aria-label="Export as PNG" />
              {resolution.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="flex items-center gap-1">
            <Box className="h-4 w-4" />
            <span className="hidden sm:inline">Export 3D</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44" side="bottom">
          <DropdownMenuItem
            onSelect={() => handleExport("stl", modelGroupRef, fileName)}>
            <File className="h-4 w-4 mr-0.5" />
            Export as STL
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => handleExport("glb", modelGroupRef, fileName)}>
            <File className="h-4 w-4 mr-0.5" />
            Export as GLB
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => handleExport("gltf", modelGroupRef, fileName)}>
            <File className="h-4 w-4 mr-0.5" />
            Export as GLTF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {autoRotate && (
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-1"
          onClick={handleGIFClick}
          disabled={isCreatingGIF}>
          {isCreatingGIF ? (
            <Loader2 className="h-4 w-4 mr-0.5 animate-spin" />
          ) : (
            <Video className="h-4 w-4 mr-0.5" />
          )}
          <span className="hidden sm:inline">
            {isCreatingGIF ? "Creating..." : "Export GIF"}
          </span>
        </Button>
      )}

      {isUS === true && (
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-1"
          onClick={handlePrintClick}
          disabled={isPrinting}>
          {isPrinting ? (
            <Loader2 className="h-4 w-4 mr-0.5 animate-spin" />
          ) : (
            <Printer className="h-4 w-4 mr-0.5" />
          )}
          <span className="hidden sm:inline">
            {isPrinting ? "Processing..." : "3D Print"}
          </span>
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1"
            disabled={isSharing}>
            {isSharing ? (
              <Loader2 className="h-4 w-4 mr-0.5 animate-spin" />
            ) : (
              <Share2 className="h-4 w-4 mr-0.5" />
            )}
            <span className="hidden sm:inline">
              {isSharing ? "Creating..." : "Share"}
            </span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onSelect={handleShareClick}>
            <Share2 className="h-4 w-4 mr-2" />
            Create Share Link
          </DropdownMenuItem>
          {shareUrl && (
            <DropdownMenuItem onSelect={handleCopyLink}>
              {copied ? (
                <Check className="h-4 w-4 mr-2 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? "Copied!" : "Copy Link"}
            </DropdownMenuItem>
          )}
          
          {/* Social Media Sharing */}
          <div className="border-t border-border/40 mt-1 pt-1">
            <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Share to Social Media
            </div>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('twitter')}>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Share on X (Twitter)
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('facebook')}>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Share on Facebook
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('linkedin')}>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Share on LinkedIn
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('whatsapp')}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Share on WhatsApp
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('telegram')}>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Share on Telegram
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('reddit')}>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              Share on Reddit
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => handleSocialShare('email')}>
              <Mail className="h-4 w-4 mr-2" />
              Share via Email
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
