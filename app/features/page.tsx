import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Palette, 
  Download, 
  Settings, 
  Eye, 
  Zap,
  Shield,
  Globe,
  Layers,
  Lightbulb,
  Box,
  Image,
  FileType,
  Smartphone,
  Heart
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features | Professional 3D Logo Maker & SVG Converter",
  description: "Discover all features of our free 3D logo maker. Convert SVG to 3D, customize materials, export in multiple formats. Professional results in minutes.",
  keywords: [
    "3d logo maker features",
    "svg to 3d conversion",
    "3d model customization",
    "logo design tools",
    "3d export formats",
    "professional logo creator",
    "free design software"
  ],
  openGraph: {
    title: "Features | Professional 3D Logo Maker & SVG Converter",
    description: "Discover all features of our free 3D logo maker. Convert SVG to 3D, customize materials, export in multiple formats.",
    type: "website",
  },
};

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "SVG Upload & Parsing",
      description: "Upload any SVG file and our advanced parser instantly converts it into 3D-ready geometry.",
      details: [
        "Supports all standard SVG elements",
        "Automatic path optimization",
        "Preserves original design integrity",
        "Handles complex vector graphics"
      ]
    },
    {
      icon: <Box className="h-8 w-8" />,
      title: "3D Extrusion Engine",
      description: "Transform flat designs into stunning 3D models with customizable depth and beveling.",
      details: [
        "Adjustable extrusion depth",
        "Smooth or sharp beveling",
        "Real-time geometry updates",
        "Optimized mesh generation"
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Material System",
      description: "Apply professional materials including metal, glass, plastic, and custom textures.",
      details: [
        "10+ pre-built materials",
        "Custom color selection",
        "Metallic and roughness controls",
        "Realistic material preview"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Dynamic Lighting",
      description: "Professional lighting setups with environment maps and custom illumination.",
      details: [
        "Studio lighting presets",
        "HDRI environment maps",
        "Adjustable light intensity",
        "Shadow and reflection control"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Real-time Preview",
      description: "See your changes instantly with our high-performance 3D rendering engine.",
      details: [
        "60fps real-time updates",
        "Interactive 3D viewport",
        "Multiple viewing angles",
        "Zoom and pan controls"
      ]
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Multi-format Export",
      description: "Export your 3D logos in industry-standard formats for any use case.",
      details: [
        "STL for 3D printing",
        "GLB/GLTF for web use",
        "High-res PNG images",
        "Multiple resolution options"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized WebGL rendering for instant feedback and smooth interactions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy First",
      description: "All processing happens in your browser. Your designs never leave your device."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cross-Platform",
      description: "Works on any modern browser - Windows, Mac, Linux, or mobile devices."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Layer Support",
      description: "Handles complex SVGs with multiple layers and grouped elements."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Advanced Controls",
      description: "Fine-tune every aspect of your 3D model with professional-grade tools."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Always Free",
      description: "Core features remain completely free with no hidden costs or subscriptions."
    }
  ];

  const exportFormats = [
    {
      format: "STL",
      icon: <FileType className="h-6 w-6" />,
      description: "Perfect for 3D printing",
      useCases: ["3D Printing", "Prototyping", "Manufacturing"]
    },
    {
      format: "GLB/GLTF",
      icon: <Globe className="h-6 w-6" />,
      description: "Optimized for web and AR/VR",
      useCases: ["Websites", "AR/VR", "Game Engines"]
    },
    {
      format: "PNG Images",
      icon: <Image className="h-6 w-6" />,
      description: "High-resolution renders",
      useCases: ["Presentations", "Marketing", "Social Media"]
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Upload Your SVG",
      description: "Drag and drop or select your SVG file. Our parser handles the rest automatically."
    },
    {
      step: "02",
      title: "Customize in 3D",
      description: "Adjust depth, materials, lighting, and colors to match your vision."
    },
    {
      step: "03",
      title: "Preview & Refine",
      description: "View your 3D logo from all angles and make final adjustments."
    },
    {
      step: "04",
      title: "Export & Use",
      description: "Download in your preferred format and start using your 3D logo immediately."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          Platform Features
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Everything You Need for <span className="text-primary">3D Logo Creation</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Professional-grade 3D design tools, completely free and running entirely in your browser. 
          No downloads, no sign-ups, no compromises.
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-primary mb-4">{feature.icon}</div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Export Formats */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Export Formats</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {exportFormats.map((format, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="text-primary mb-4 flex justify-center">{format.icon}</div>
                <CardTitle className="text-2xl font-bold">{format.format}</CardTitle>
                <CardDescription>{format.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {format.useCases.map((useCase, useCaseIndex) => (
                    <Badge key={useCaseIndex} variant="secondary">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Examples Showcase */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">See the Results</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These animated examples showcase the quality and variety of 3D logos you can create with our platform.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "X Platform",
              image: "/pic/x_animated (1).gif",
              description: "Social media branding"
            },
            {
              title: "V0.dev",
              image: "/pic/v0.dev_animated (1).gif",
              description: "AI development tool"
            },
            {
              title: "3D Cube",
              image: "/pic/cube-outline-svgrepo-com_animated (1).gif",
              description: "Geometric design"
            }
          ].map((example, index) => (
                         <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
               <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 gif-container">
                 <img 
                   src={example.image} 
                   alt={`${example.title} 3D logo animation`}
                   className="animated-gif"
                   loading="lazy"
                 />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Ready to Create Your 3D Logo?</CardTitle>
            <CardDescription className="text-lg">
              Experience all these features for yourself. Start creating professional 3D logos in minutes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/edit">
                  Start Creating Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gallery">
                  View Examples
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 