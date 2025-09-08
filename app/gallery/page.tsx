import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | 3D Logo Examples & Inspiration",
  description: "Explore stunning 3D logos created with our free online 3D logo maker. Get inspired by professional designs and see what's possible with SVG to 3D conversion.",
  keywords: [
    "3d logo gallery",
    "logo design examples",
    "3d logo inspiration",
    "svg to 3d examples",
    "professional 3d logos"
  ],
  openGraph: {
    title: "Gallery | 3D Logo Examples & Inspiration",
    description: "Explore stunning 3D logos created with our free online 3D logo maker.",
    type: "website",
  },
};

export default function GalleryPage() {
  const categories = [
    { name: "Business", count: 2 },
    { name: "Tech", count: 2 },
    { name: "Creative", count: 2 },
  ];

  const examples = [
    {
      title: "GitHub Logo",
      category: "Tech",
      description: "Iconic developer platform logo with metallic finish",
      difficulty: "Beginner",
      image: "/pic/github_animated (1).gif"
    },
    {
      title: "Chat App Interface",
      category: "Creative",
      description: "Modern messaging app icon with vibrant colors",
      difficulty: "Intermediate",
      image: "/pic/chat_app_animated (1).gif"
    },
    {
      title: "V0.dev Platform",
      category: "Tech",
      description: "AI-powered development tool branding",
      difficulty: "Advanced",
      image: "/pic/v0.dev_animated (1).gif"
    },
    {
      title: "Vercel Deployment",
      category: "Business",
      description: "Professional cloud platform identity",
      difficulty: "Beginner",
      image: "/pic/vercel_animated (1).gif"
    },
    {
      title: "X Social Platform",
      category: "Business",
      description: "Minimalist social media brand design",
      difficulty: "Beginner",
      image: "/pic/x_animated (1).gif"
    },
    {
      title: "3D Cube Design",
      category: "Creative",
      description: "Geometric cube with dynamic materials",
      difficulty: "Intermediate",
      image: "/pic/cube-outline-svgrepo-com_animated (1).gif"
    },
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
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 gif-container">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="animated-gif"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{example.category}</Badge>
                  <Badge variant="outline">{example.difficulty}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground text-sm">{example.description}</p>
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