"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

export default function GalleryPage() {
  // Set page metadata dynamically
  useEffect(() => {
    document.title = "Gallery | 3D Logo Examples & Inspiration";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore stunning 3D logos created with our free online 3D logo maker. Get inspired by professional designs and see what\'s possible with SVG to 3D conversion.');
    }
  }, []);

  const categories = [
    { name: "Business", count: 4 },
    { name: "Tech", count: 3 },
    { name: "Creative", count: 3 },
    { name: "E-commerce", count: 2 },
    { name: "Healthcare", count: 2 },
    { name: "Finance", count: 2 },
  ];

  const examples = [
    {
      title: "Simple Shield",
      category: "Security",
      description: "Clean and professional security badge design",
      difficulty: "Beginner",
      image: "/pic/Simple_Shield_animated-min.gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L80 25 L80 60 Q80 80 50 90 Q20 80 20 60 L20 25 Z" fill="currentColor"/>
        <path d="M35 45 L45 55 L65 35" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      title: "Star Badge",
      category: "Awards",
      description: "Premium award and achievement badge",
      difficulty: "Intermediate",
      image: "/pic/Star_Badge_animated-min.gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 65 L30 75 L35 55 L20 40 L40 40 Z" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Hexagon Design",
      category: "Modern",
      description: "Contemporary hexagonal logo with inner accent",
      difficulty: "Intermediate",
      image: "/pic/Hexagon_Logo_animated-min.gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="currentColor"/>
        <circle cx="50" cy="50" r="15" fill="white"/>
      </svg>`
    },
    {
      title: "Vercel Deployment",
      category: "Business",
      description: "Professional cloud platform identity",
      difficulty: "Beginner",
      image: "/pic/vercel_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20 L80 70 L20 70 Z" fill="currentColor"/>
      </svg>`
    },
    {
      title: "X Social Platform",
      category: "Business",
      description: "Minimalist social media brand design",
      difficulty: "Beginner",
      image: "/pic/x_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 25 L75 75 M75 25 L25 75" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
      </svg>`
    },
    {
      title: "3D Cube Design",
      category: "Creative",
      description: "Geometric cube with dynamic materials",
      difficulty: "Intermediate",
      image: "/pic/cube-outline-svgrepo-com_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="40" height="40" fill="currentColor"/>
        <polygon points="60,20 80,10 80,50 60,60" fill="currentColor" opacity="0.7"/>
        <polygon points="20,60 60,60 80,50 40,50" fill="currentColor" opacity="0.8"/>
      </svg>`
    },
    {
      title: "Chat Interface",
      category: "Creative",
      description: "Modern messaging and communication app design",
      difficulty: "Intermediate",
      image: "/pic/chat_app_animated-min.gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="25" width="60" height="40" rx="8" fill="currentColor"/>
        <circle cx="35" cy="45" r="3" fill="white"/>
        <circle cx="50" cy="45" r="3" fill="white"/>
        <circle cx="65" cy="45" r="3" fill="white"/>
        <path d="M35 65 L20 75 L30 65 Z" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Medical Cross",
      category: "Healthcare",
      description: "Clean medical and healthcare branding",
      difficulty: "Beginner",
      image: "/pic/vercel_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="20" height="60" fill="currentColor"/>
        <rect x="20" y="40" width="60" height="20" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Dollar Symbol",
      category: "Finance",
      description: "Financial services and banking logo",
      difficulty: "Intermediate",
      image: "/pic/chat_app_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L50 20 Q70 20 70 35 Q70 45 50 45 Q30 45 30 55 Q30 65 50 65 Q70 65 70 80 L50 80 L50 90" stroke="currentColor" stroke-width="6" fill="none"/>
        <path d="M30 35 Q30 20 50 20 Q70 20 70 35" stroke="currentColor" stroke-width="6" fill="none"/>
        <path d="M30 65 Q30 80 50 80 Q70 80 70 65" stroke="currentColor" stroke-width="6" fill="none"/>
      </svg>`
    },
    {
      title: "Shopping Cart",
      category: "E-commerce",
      description: "E-commerce and retail business logo",
      difficulty: "Intermediate",
      image: "/pic/cube-outline-svgrepo-com_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20 L30 20 L35 50 L75 50 L80 30 L40 30" stroke="currentColor" stroke-width="4" fill="none"/>
        <circle cx="40" cy="65" r="5" fill="currentColor"/>
        <circle cx="65" cy="65" r="5" fill="currentColor"/>
        <rect x="35" y="45" width="40" height="10" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Heart Symbol",
      category: "Healthcare",
      description: "Healthcare and wellness branding",
      difficulty: "Beginner",
      image: "/pic/x_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 75 Q20 50 20 35 Q20 20 35 20 Q50 20 50 35 Q50 20 65 20 Q80 20 80 35 Q80 50 50 75 Z" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Rocket Launch",
      category: "Tech",
      description: "Startup and innovation technology logo",
      difficulty: "Advanced",
      image: "/pic/v0.dev_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 Q45 15 45 25 L45 65 L55 65 L55 25 Q55 15 50 10 Z" fill="currentColor"/>
        <path d="M35 50 L45 55 L45 65 L30 70 Z" fill="currentColor"/>
        <path d="M65 50 L55 55 L55 65 L70 70 Z" fill="currentColor"/>
        <circle cx="50" cy="35" r="3" fill="white"/>
        <path d="M45 75 L55 75 L50 85 Z" fill="currentColor"/>
      </svg>`
    },
    {
      title: "Corporate Building",
      category: "Business",
      description: "Corporate and professional services",
      difficulty: "Intermediate",
      image: "/pic/github_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="40" height="50" fill="currentColor"/>
        <rect x="35" y="35" width="6" height="6" fill="white"/>
        <rect x="44" y="35" width="6" height="6" fill="white"/>
        <rect x="54" y="35" width="6" height="6" fill="white"/>
        <rect x="35" y="45" width="6" height="6" fill="white"/>
        <rect x="44" y="45" width="6" height="6" fill="white"/>
        <rect x="54" y="45" width="6" height="6" fill="white"/>
        <rect x="44" y="65" width="12" height="15" fill="white"/>
      </svg>`
    },
    {
      title: "Diamond Luxury",
      category: "Creative",
      description: "Luxury and premium brand identity",
      difficulty: "Advanced",
      image: "/pic/chat_app_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20 L70 35 L60 65 L50 80 L40 65 L30 35 Z" fill="currentColor"/>
        <path d="M30 35 L70 35 L50 50 Z" fill="white" opacity="0.3"/>
      </svg>`
    },
    {
      title: "Graph Analytics",
      category: "Finance",
      description: "Data analytics and financial reporting",
      difficulty: "Intermediate",
      image: "/pic/vercel_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="60" width="8" height="20" fill="currentColor"/>
        <rect x="35" y="45" width="8" height="35" fill="currentColor"/>
        <rect x="50" y="30" width="8" height="50" fill="currentColor"/>
        <rect x="65" y="40" width="8" height="40" fill="currentColor"/>
        <path d="M25 55 L40 40 L55 25 L70 35" stroke="currentColor" stroke-width="3" fill="none"/>
      </svg>`
    },
    {
      title: "Shopping Bag",
      category: "E-commerce",
      description: "Retail and shopping experience logo",
      difficulty: "Beginner",
      image: "/pic/cube-outline-svgrepo-com_animated (1).gif",
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="35" width="50" height="45" rx="5" fill="currentColor"/>
        <path d="M35 35 Q35 25 50 25 Q65 25 65 35" stroke="currentColor" stroke-width="4" fill="none"/>
        <rect x="30" y="30" width="40" height="5" fill="currentColor"/>
      </svg>`
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Design Gallery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            3D Logo <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover amazing 3D logos created with our platform. From simple icons to complex designs, 
            see what's possible when you transform 2D SVGs into stunning 3D models.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Badge variant="default" className="cursor-pointer">All</Badge>
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="cursor-pointer">
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 gif-container relative">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="animated-gif"
                  loading="lazy"
                />
                {/* Overlay with Try Template button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/edit">
                    <Button 
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() => {
                        // Store SVG data and redirect to editor
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('svgData', example.svg);
                          localStorage.setItem('fileName', `${example.title}.svg`);
                        }
                      }}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Try This Template
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{example.category}</Badge>
                  <Badge variant="outline">{example.difficulty}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{example.description}</p>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <Link href="/edit" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => {
                        // Store SVG data and redirect to editor
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('svgData', example.svg);
                          localStorage.setItem('fileName', `${example.title}.svg`);
                        }
                      }}
                    >
                      Use Template
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      // Download SVG file
                      const blob = new Blob([example.svg], { type: 'image/svg+xml' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${example.title}.svg`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    Download SVG
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Create Your Own 3D Logo</h2>
              <p className="text-muted-foreground mb-6">
                Inspired by these examples? Transform your own SVG designs into stunning 3D logos 
                using our free online 3D logo maker. It's easy, fast, and completely free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/edit">
                    Start Creating Now
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/features">
                    Explore Features
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Submit Your Work</h3>
            <p className="text-sm text-muted-foreground">
              Share your amazing 3D logos with the community and inspire others.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Download SVGs</h3>
            <p className="text-sm text-muted-foreground">
              Get access to sample SVG files to practice and learn from.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Rate & Review</h3>
            <p className="text-sm text-muted-foreground">
              Help others discover the best designs through community ratings.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
} 