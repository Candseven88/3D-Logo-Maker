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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Loader2, 
  Play, 
  CheckCircle, 
  Upload,
  Palette,
  Download,
  Image as ImageIcon,
  Eye,
  Zap,
  Users,
  Star,
  Sparkles
} from "lucide-react";
import Link from "next/link";

import { AdsterraAd, AdsterraBanner, AdsterraSidebar, AdsterraFloating } from "@/components/adsterra-ad";

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

        await new Promise((resolve) => setTimeout(resolve, 100));
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
      description: "See changes instantly as you design"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Multi-format Export",
      description: "STL, GLB, GLTF, and high-res PNG"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Create 3D logos in under 30 seconds"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "No Account Required",
      description: "Start creating immediately, no signup"
    }
  ];

  const stats = [
    { number: "50K+", label: "Logos Created" },
    { number: "25K+", label: "Happy Users" },
    { number: "4.9/5", label: "User Rating" },
    { number: "100%", label: "Free to Use" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      company: "TechFlow",
      content: "This tool transformed our branding process. Creating professional 3D logos has never been this simple!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "As a non-designer, I was amazed by how easy it was to create stunning 3D logos for my startup.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Brand Designer",
      company: "Creative Studio",
      content: "The quality and speed are incredible. My clients love the 3D logos we create with this platform.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (isMobile && !continueOnMobile) {
    return <MobileWarning onContinue={handleContinueOnMobile} />;
  }

  return (
    <>
      <AdsterraSidebar />
      <AdsterraFloating />
      <div className="relative">
        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                <p className="text-lg font-medium">Preparing your 3D workspace...</p>
                <p className="text-sm text-muted-foreground">This will just take a moment</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
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
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    <Link href="#upload">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg" onClick={() => {
                    const videoSection = document.getElementById('demo-video-section');
                    if (videoSection) {
                      videoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
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

        {/* See What's Possible Section - Moved after Hero */}
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
                        alt={`${example.title} 3D logo`}
                        className="animated-gif"
                        loading="lazy"
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

        {/* Features Section - Moved after See What's Possible */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

        {/* Product Demo Section - Moved after Features */}
        <section id="demo-video-section" className="py-24 bg-muted/30">
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
                    poster="/pic/preview-poster.jpg"
                    id="demo-video"
                  >
                    <source src="/pic/3D guide.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
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

        {/* Upload Section */}
        <section id="upload" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Creating Your 3D Logo
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose your preferred workflow to create stunning 3D logos
                </p>
              </motion.div>

              {/* Workflow Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Tabs defaultValue="svg-to-3d" className="w-full">
                  <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8 bg-muted/30 p-2 rounded-lg">
                    <TabsTrigger 
                      value="svg-to-3d" 
                      className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 rounded-md py-3 px-4 font-medium"
                    >
                      <Upload className="w-4 h-4" />
                      SVG to 3D
                    </TabsTrigger>
                    <TabsTrigger 
                      value="image-to-3d"
                      className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 rounded-md py-3 px-4 font-medium"
                    >
                      <ImageIcon className="w-4 h-4" />
                      Image to 3D
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="svg-to-3d" className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Upload Your SVG Logo</h3>
                      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Already have an SVG file? Perfect! Upload it directly and start creating your 3D logo in seconds.
                      </p>
                    </div>

                    <FileUpload 
                      onFileUpload={handleFileUpload} 
                      onIconSelect={handleIconSelect}
                      fileName={fileName}
                      selectedIcon={selectedIcon}
                    />

                    {(svgData || selectedIcon) && (
                      <motion.div
                        id="continue-button-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center pt-8"
                      >
                        <div className="max-w-md mx-auto">
                          <RainbowButton
                            onClick={handleContinue}
                            disabled={isLoading}
                            className="w-full h-16 text-lg font-semibold"
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                                Loading 3D Editor...
                              </>
                            ) : (
                              <>
                                <Zap className="w-6 h-6 mr-3" />
                                Create 3D Logo Now
                                <ArrowRight className="w-5 h-5 ml-3" />
                              </>
                            )}
                          </RainbowButton>
                          <p className="text-center text-sm text-muted-foreground mt-4">
                            {fileName ? `Selected: ${fileName}` : selectedIcon ? `Selected: ${selectedIcon}` : "Ready to create your 3D logo"}
                          </p>
                        </div>

                        {/* Quick Feature Highlights */}
                        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
                          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm">Instant 3D conversion</span>
                          </div>
                          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm">Professional materials</span>
                          </div>
                          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm">Multiple export formats</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </TabsContent>

                  <TabsContent value="image-to-3d" className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Convert Image to SVG First</h3>
                      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Have a JPG, PNG, or other image format? No problem! Use our built-in converter to transform 
                        your image into an SVG, then create stunning 3D logos.
                      </p>
                    </div>

                    <div className="max-w-md mx-auto">
                      <Link href="/convert">
                        <Button size="lg" className="w-full h-16 text-lg">
                          <ImageIcon className="w-6 h-6 mr-3" />
                          Start Image Conversion
                          <ArrowRight className="w-5 h-5 ml-3" />
                        </Button>
                      </Link>
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        Supports JPG, PNG, BMP and other image formats
                      </p>
                    </div>

                    {/* Features of Image to SVG */}
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
                      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Multiple preset modes</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Real-time preview</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">High-quality output</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Direct 3D workflow</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADSTERRA Banner Ad */}
        <AdsterraBanner className="my-8" />

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
                  <Card className="p-8 text-center bg-gradient-to-br from-background to-muted/30 border-border/50">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl mb-6 text-muted-foreground italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Stunning 3D Logos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already transforming their designs with our free 3D logo maker.
              </p>
              <Button size="lg" asChild className="px-8 py-6 text-lg">
                <Link href="#upload">
                  Start Creating Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
