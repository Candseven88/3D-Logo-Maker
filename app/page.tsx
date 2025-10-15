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
import { AdSenseBanner, AdSenseInFeed } from "@/components/google-adsense";
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
      company: "TechFlow",
      content: "This tool completely transformed our logo creation process. The 3D results are incredibly professional.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Brand Designer",
      company: "Innovate Labs",
      content: "I've tried many 3D tools, but this one is by far the most intuitive and produces stunning results.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager", 
      company: "StartupXYZ",
      content: "Finally, a tool that makes 3D logo creation accessible to everyone. Love the real-time preview!",
      rating: 5
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

  return (
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
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
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
                  poster="/opengraph-image-v1.png"
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
                    value="image-to-svg" 
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 rounded-md py-3 px-4 font-medium"
                  >
                    <ImageIcon className="w-4 h-4" />
                    Image to SVG
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="svg-to-3d" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Transform SVG to 3D</h3>
                    <p className="text-muted-foreground">
                      Already have an SVG? Upload it directly and watch it transform into professional 3D
                    </p>
                  </div>

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
                </TabsContent>

                <TabsContent value="image-to-svg" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Convert Image to SVG</h3>
                    <p className="text-muted-foreground">
                      Have a JPG or PNG image? Convert it to SVG first, then create your 3D logo
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

      {/* Advertisement */}
      <AdSenseInFeed className="my-16" />

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

      {/* Bottom Advertisement */}
      <AdSenseBanner className="mb-8" />
    </div>
  );
}
