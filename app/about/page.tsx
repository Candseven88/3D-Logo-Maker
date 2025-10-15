import type { Metadata } from "next";
import { AdsterraBanner, AdsterraSidebar } from "@/components/adsterra-ad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Globe, Palette, Download, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About 3D Designer | Free Online 3D Logo Maker",
  description: "Learn about 3D Designer, the leading free online 3D logo maker. Discover our mission to democratize 3D design and help businesses create professional logos instantly.",
  keywords: [
    "about 3d logo maker",
    "free logo design tool",
    "svg to 3d converter",
    "online design platform",
    "3d modeling software",
    "logo creation story"
  ],
  openGraph: {
    title: "About 3D Designer | Free Online 3D Logo Maker",
    description: "Learn about 3D Designer, the leading free online 3D logo maker. Create professional 3D logos instantly.",
    type: "website",
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Convert SVG to 3D models in seconds with our optimized rendering engine."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web-Based",
      description: "No downloads required. Works directly in your browser on any device."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Fully Customizable",
      description: "Adjust materials, lighting, colors, and geometry to match your vision."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Export in STL, GLB, GLTF formats for 3D printing and web use."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy First",
      description: "Your designs never leave your browser. Complete privacy guaranteed."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Always Free",
      description: "Core features remain free forever. No hidden costs or subscriptions."
    }
  ];

  const stats = [
    { number: "100K+", label: "Logos Created" },
    { number: "50K+", label: "Happy Users" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <>
      <AdsterraSidebar />
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          About 3D Designer
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Democratizing <span className="text-primary">3D Design</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We believe everyone should have access to professional 3D design tools. 
          Our mission is to make 3D logo creation simple, fast, and completely free.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2023, 3D Designer emerged from a simple observation: creating 3D logos was too complicated and expensive. 
              Traditional 3D software required extensive learning curves, expensive licenses, and powerful hardware that many 
              small businesses and individual creators couldn't afford.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of experienced web developers and 3D graphics specialists decided to change that. Using cutting-edge 
              web technologies like Three.js and WebGL, we built a platform that brings professional 3D design capabilities 
              directly to your browser, making it accessible to everyone regardless of their technical background or budget.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based in San Francisco, California, our mission is to democratize 3D design and empower creators worldwide. 
              We believe that great design tools should be accessible to everyone, not just large corporations with big budgets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, 3D Designer serves thousands of designers, entrepreneurs, and businesses worldwide, 
              helping them create stunning 3D logos without any technical expertise or upfront costs. Our platform 
              has been featured in design publications and continues to grow as more creators discover the power of accessible 3D design.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose 3D Designer?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              3D Designer is built by a passionate team of developers, designers, and 3D graphics specialists 
              who share a common vision: making professional design tools accessible to everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">👨‍💻</span>
                </div>
                <h4 className="font-semibold mb-1">Engineering Team</h4>
                <p className="text-sm text-muted-foreground">Full-stack developers with expertise in 3D graphics and web technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">🎨</span>
                </div>
                <h4 className="font-semibold mb-1">Design Team</h4>
                <p className="text-sm text-muted-foreground">UX/UI designers focused on creating intuitive and beautiful interfaces</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">🚀</span>
                </div>
                <h4 className="font-semibold mb-1">Product Team</h4>
                <p className="text-sm text-muted-foreground">Product managers and strategists driving innovation and user experience</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center">
              We're a remote-first company with team members across the globe, united by our passion for democratizing design.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technology Section */}
      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Built with Modern Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>Next.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Three.js</Badge>
                  <Badge>WebGL</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">SVG Parsing</Badge>
                  <Badge variant="secondary">3D Extrusion</Badge>
                  <Badge variant="secondary">Real-time Rendering</Badge>
                  <Badge variant="secondary">Material System</Badge>
                  <Badge variant="secondary">Export Engine</Badge>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our platform leverages the latest web technologies to deliver desktop-class 3D modeling 
              capabilities directly in your browser, with no plugins or downloads required.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Ready to Get Started?</CardTitle>
            <CardDescription className="text-lg">
              Join thousands of designers and businesses who trust 3D Designer 
              for their logo creation needs.
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
                <Link href="/features">
                  Explore Features
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <AdsterraBanner className="mt-16" />
    </div>
    </>
  );
} 