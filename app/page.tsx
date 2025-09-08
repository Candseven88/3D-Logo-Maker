"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-upload";
import { MobileWarning } from "@/components/mobile-warning";
import { useMobileDetection } from "@/hooks/use-mobile-detection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Loader2, 
  Play, 
  CheckCircle, 
  Upload,
  Palette,
  Download,
  Eye,
  Zap,
  Users,
  Star,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Script from "next/script";

export default function Home() {
  const [svgData, setSvgData] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const router = useRouter();
  const { isMobile, continueOnMobile, handleContinueOnMobile } = useMobileDetection();

  const handleFileUpload = (data: string, name: string) => {
    setSvgData(data);
    setFileName(name);

    setTimeout(() => {
      const element = document.getElementById("continue-button-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  };

  const handleIconSelect = (iconName: string) => {
    setSelectedIcon(iconName);

    setTimeout(() => {
      const element = document.getElementById("continue-button-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 500);
  };

  const handleContinue = async () => {
    if (svgData) {
      setIsLoading(true);

      try {
        localStorage.setItem("svgData", svgData);
        localStorage.setItem("fileName", fileName);
        localStorage.setItem("selectedIcon", selectedIcon);

        if (isMobile) {
          localStorage.setItem("continueOnMobile", "true");
        }

        // Remove unnecessary delay for faster navigation
        router.push("/edit");
      } catch (error) {
        console.error("Error during navigation:", error);
        setIsLoading(false);
      }
    }
  };

  const features = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Any SVG",
      description: "Drag & drop your logo files instantly"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "AI-Powered Materials",
      description: "Professional textures and lighting"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Preview",
      description: "See changes as you make them"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Anywhere",
      description: "STL, GLB, GLTF, PNG formats"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      company: "TechFlow Solutions",
      content: "This tool completely transformed our logo creation process. We can now create professional 3D logos in-house in minutes. The quality rivals top design agencies.",
      rating: 5,
      avatar: "SC",
      benefit: "Streamlined design workflow by 80%"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Brand Designer",
      company: "Innovate Labs",
      content: "I've tried Blender, Cinema 4D, and other expensive tools, but nothing beats this for speed and simplicity. My clients are amazed by the professional results.",
      rating: 5,
      avatar: "MR",
      benefit: "Increased client satisfaction by 40%"
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager", 
      company: "StartupXYZ",
      content: "As a non-designer, I was worried about creating professional logos. This tool made it so easy that I created our entire brand identity in one afternoon!",
      rating: 5,
      avatar: "EW",
      benefit: "Created 12 logos in 2 hours"
    },
    {
      name: "David Kim",
      role: "Freelance Designer", 
      company: "Independent",
      content: "Game-changer for my freelance business. I can now offer 3D logos to clients without the learning curve of complex 3D software. My clients love the professional results.",
      rating: 5,
      avatar: "DK",
      benefit: "Expanded service offerings with 3D designs"
    },
    {
      name: "Lisa Thompson",
      role: "Small Business Owner", 
      company: "Eco Beauty Co.",
      content: "Perfect for entrepreneurs who need professional results quickly. This tool gave us stunning 3D logos that perfectly represent our brand identity.",
      rating: 5,
      avatar: "LT",
      benefit: "Created professional brand identity in hours"
    }
  ];

  const stats = [
    { number: "100K+", label: "Logos Created" },
    { number: "50K+", label: "Happy Users" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9★", label: "User Rating" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "3D Designer",
    "description": "Free online 3D logo maker and SVG to 3D converter. Create professional 3D logos instantly with no signup required.",
    "url": "https://3dlogo.site",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "3D Designer"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250",
      "bestRating": "5"
    },
    "featureList": [
      "SVG to 3D conversion",
      "Professional materials library",
      "Real-time 3D preview",
      "Multiple export formats",
      "No registration required",
      "Browser-based processing"
    ]
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-xl font-medium">Preparing your 3D model...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-8 pb-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge 
                  variant="secondary" 
                  className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Free 3D Logo Creator
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Transform Your Logo into{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Stunning 3D
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional 3D logos in seconds. Upload your SVG, customize with AI-powered materials, 
                and export for any platform. No design experience required.
              </motion.p>

              <motion.div
                className="flex flex-col gap-6 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Main CTA - Single prominent button */}
                <Link href="#upload">
                  <RainbowButton className="h-auto px-12 py-6 text-xl font-semibold">
                    Start Creating Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </RainbowButton>
                </Link>
                
                {/* Secondary CTAs - Smaller, less prominent */}
                <div className="flex flex-col sm:flex-row gap-3 items-center text-sm">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                  <span className="text-muted-foreground">•</span>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                    <Link href="#examples">Try with Examples</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See 3D Designer in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how simple it is to transform your flat logo into a stunning 3D masterpiece
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-background to-muted/50 border-border/50 shadow-2xl">
              <div className="aspect-video rounded-lg overflow-hidden relative group">
                <video 
                  className="w-full h-full object-cover"
                  preload="metadata"
                  poster="/demo-poster.svg"
                  id="demo-video"
                  controls={false}
                  playsInline
                  muted
                >
                  {/* H.264 MP4 format for maximum compatibility */}
                  <source src="/pic/3D guide.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
                  {/* WebM format for modern browsers - fallback to MP4 until WebM version is created */}
                  <source src="/pic/3D guide.mp4" type="video/mp4" />
                  {/* Fallback message with better styling */}
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-primary/5 text-center">
                    <div className="p-8">
                      <div className="text-lg font-medium mb-2">Video Not Supported</div>
                      <div className="text-muted-foreground mb-4">Your browser doesn't support video playback</div>
                      <Button variant="outline" asChild>
                        <Link href="/features">View Features Instead</Link>
                      </Button>
                    </div>
                  </div>
                </video>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                  <button 
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-3xl"
                    onClick={(event) => {
                      const video = document.getElementById('demo-video') as HTMLVideoElement;
                      if (video.paused) {
                        video.play();
                        (event.target as HTMLElement).closest('.absolute')?.classList.add('opacity-0', 'pointer-events-none');
                      }
                    }}
                    aria-label="Play demo video"
                  >
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </button>
                </div>
                
                {/* Video Controls (appears when playing) */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">3D Logo Creation Demo</span>
                    <div className="flex items-center gap-2">
                      <button 
                        className="text-white hover:text-gray-300 transition-colors pointer-events-auto"
                        onClick={() => {
                          const video = document.getElementById('demo-video') as HTMLVideoElement;
                          video.currentTime = 0;
                          video.pause();
                          document.querySelector('.absolute.inset-0.flex')?.classList.remove('opacity-0', 'pointer-events-none');
                        }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Three-Step Guide */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Create Your 3D Logo in 3 Simple Steps
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional 3D logos in minutes, no design experience needed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload SVG",
                  description: "Drag & drop your logo file or try our examples",
                  icon: <Upload className="h-8 w-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "2",
                  title: "Choose Material",
                  description: "Select from metal, glass, plastic, and more professional materials",
                  icon: <Palette className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "3",
                  title: "Export & Share",
                  description: "Download in multiple formats: PNG, STL, GLB, GLTF",
                  icon: <Download className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/50">
                    {/* Step connector line */}
                    {index < 2 && (
                      <div className="absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent hidden md:block z-10" />
                    )}
                    
                    {/* Step number badge */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                      {step.step}
                    </div>
                    
                    {/* Step icon */}
                    <div className="text-primary mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    
                    {/* Step content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-lg">
                <Link href="#upload">
                  Start Your First Logo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Creating Your 3D Logo
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Upload your SVG logo and watch it transform into professional 3D in real-time
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {isMobile && !continueOnMobile ? (
                <motion.div
                  key="mobile-warning"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <MobileWarning onContinue={handleContinueOnMobile} />
                </motion.div>
              ) : (
                <motion.div
                  key="desktop-content"
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    fileName={fileName}
                    selectedIcon={selectedIcon}
                    onIconSelect={handleIconSelect}
                  />
                  
                  <div className="text-center mt-6 mb-8">
                    <p className="text-sm text-muted-foreground">
                      Works best with SVGs having simple geometry and transparent background
                    </p>
                  </div>

                  {/* Example SVGs Section */}
                  <motion.div
                    className="mt-8 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    id="examples"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">Try with Example SVGs</h3>
                      <p className="text-sm text-muted-foreground">
                        Get started instantly with these popular logos
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      {[
                        {
                          name: "Simple Shield",
                          svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 10 L80 25 L80 60 Q80 80 50 90 Q20 80 20 60 L20 25 Z" fill="currentColor"/>
                          </svg>`,
                          color: "text-blue-600"
                        },
                        {
                          name: "Hexagon Logo",
                          svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="currentColor"/>
                            <circle cx="50" cy="50" r="15" fill="white"/>
                          </svg>`,
                          color: "text-purple-600"
                        },
                        {
                          name: "Star Badge",
                          svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 65 L30 75 L35 55 L20 40 L40 40 Z" fill="currentColor"/>
                          </svg>`,
                          color: "text-yellow-600"
                        }
                      ].map((example, index) => (
                        <motion.div
                          key={example.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="group"
                        >
                          <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border-border/50 bg-background/50 backdrop-blur-sm">
                            <div 
                              className="flex flex-col items-center gap-3"
                              onClick={() => {
                                handleFileUpload(example.svg, `${example.name}.svg`);
                                toast.success(`${example.name} loaded! Scroll down to continue.`);
                              }}
                            >
                              <div className={`w-12 h-12 ${example.color} flex items-center justify-center`}>
                                <div 
                                  dangerouslySetInnerHTML={{ __html: example.svg }}
                                  className="w-full h-full"
                                />
                              </div>
                              <div className="text-center">
                                <div className="text-sm font-medium">{example.name}</div>
                                <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                  Click to try
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <div
                    id="continue-button-section"
                    className="h-20 flex items-center justify-center"
                  >
                    <AnimatePresence>
                      {svgData && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                          className="w-full flex justify-center"
                        >
                          <RainbowButton
                            className="max-w-md w-full text-lg py-6 px-8"
                            onClick={handleContinue}
                            disabled={isLoading}
                          >
                            <span className="flex items-center gap-2">
                              {isLoading ? (
                                <>
                                  <Loader2 size={20} className="animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Continue to 3D Editor
                                  <ArrowRight size={20} />
                                </>
                              )}
                            </span>
                          </RainbowButton>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Perfect 3D Logos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools that make 3D logo creation simple and accessible to everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What's Possible
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real 3D logos created with our platform. Transform your designs into stunning 3D masterpieces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "GitHub",
                category: "Tech",
                image: "/pic/github_animated (1).gif"
              },
              {
                title: "Chat App",
                category: "Creative",
                image: "/pic/chat_app_animated (1).gif"
              },
              {
                title: "Vercel",
                category: "Business",
                image: "/pic/vercel_animated (1).gif"
              }
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                                 <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                   <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 gif-container">
                                         <img 
                      src={example.image} 
                      alt={`${example.title} 3D logo animation - ${example.category} design example`}
                      className="animated-gif"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <Badge variant="secondary" className="mb-2">{example.category}</Badge>
                    <h3 className="font-semibold">{example.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">
                View More Examples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Designers Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who trust 3D Designer for their creative projects
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border-border/50">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Rating */}
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg mb-4 text-muted-foreground italic leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                      
                      {/* Benefit Badge */}
                      <div className="mb-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          ✓ {testimonials[currentTestimonial].benefit}
                        </Badge>
                      </div>
                      
                      {/* Author */}
                      <div>
                        <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                        <div className="text-muted-foreground">
                          {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about creating 3D logos
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What file formats are supported?",
                  answer: "We support SVG files for input. For export, you can download PNG (high-resolution images), STL (3D printing), GLB/GLTF (3D models), and animated GIF formats."
                },
                {
                  question: "Is my data private and secure?",
                  answer: "Absolutely! All processing happens locally in your browser. Your files never leave your device, ensuring complete privacy and security of your designs."
                },
                {
                  question: "Do you retain rights to my logos?",
                  answer: "No, you retain full ownership and copyright of your designs. We don't claim any rights to your uploaded files or created 3D logos."
                },
                {
                  question: "Can I use logos commercially?",
                  answer: "Yes! You can use your created 3D logos for any purpose including commercial use. Perfect for businesses, marketing materials, and client projects."
                },
                {
                  question: "What if my SVG doesn't work well?",
                  answer: "SVGs with simple geometry and solid fills work best. Avoid complex gradients, patterns, or text. Try our example SVGs first to see what works great!"
                },
                {
                  question: "How long does it take to create a 3D logo?",
                  answer: "Most logos are ready in under a minute! Simply upload your SVG, choose your preferred material and lighting, then export. The entire process is designed to be fast and intuitive."
                },
                {
                  question: "Do I need design experience?",
                  answer: "Not at all! Our tool is designed for everyone. Just upload an SVG file and our system handles the complex 3D conversion automatically. You can then customize materials and lighting with simple controls."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/50">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Amazing 3D Logos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of designers and businesses who've transformed their branding with 3D Designer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                <Link href="#upload">
                  Start Creating Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-lg">
                <Link href="/features">
                  Explore Features
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
