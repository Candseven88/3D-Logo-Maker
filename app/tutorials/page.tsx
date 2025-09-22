import type { Metadata } from "next";
import { AdsterraBanner, AdsterraSidebar, AdsterraContentAd, AdsterraNativeAd } from "@/components/adsterra-ad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, User, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutorials | Learn 3D Logo Design & SVG Conversion",
  description: "Learn how to create stunning 3D logos with our comprehensive tutorials. Master SVG to 3D conversion, materials, lighting, and export techniques.",
  keywords: [
    "3d logo tutorial",
    "svg to 3d guide",
    "logo design tutorial",
    "3d modeling tutorial",
    "logo creation guide"
  ],
  openGraph: {
    title: "Tutorials | Learn 3D Logo Design & SVG Conversion",
    description: "Learn how to create stunning 3D logos with our comprehensive tutorials.",
    type: "website",
  },
};

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with 3D Designer",
      description: "Learn the basics of uploading SVGs and creating your first 3D logo",
      level: "Beginner",
      duration: "5 min",
      views: "12.5K",
      topics: ["Upload", "Interface", "Basic Controls"],
      gif: "/pic/Simple_Shield_animated-min.gif"
    },
    {
      title: "Understanding Materials and Textures",
      description: "Master the material system to create realistic metal, glass, and plastic effects",
      level: "Intermediate",
      duration: "8 min",
      views: "8.2K",
      topics: ["Materials", "Textures", "Lighting"],
      gif: "/pic/Star_Badge_animated-min.gif"
    },
    {
      title: "Advanced Lighting Techniques",
      description: "Create professional lighting setups with environment maps and custom illumination",
      level: "Advanced",
      duration: "12 min",
      views: "5.4K",
      topics: ["Lighting", "Environments", "Shadows"],
      gif: "/pic/Hexagon_Logo_animated-min.gif"
    },
    {
      title: "Optimizing SVGs for 3D Conversion",
      description: "Learn how to prepare your SVG files for the best 3D results",
      level: "Beginner",
      duration: "6 min",
      views: "9.8K",
      topics: ["SVG Prep", "Optimization", "Best Practices"],
      gif: "/pic/chat_app_animated_(1)-min.gif"
    },
    {
      title: "Exporting for Different Use Cases",
      description: "Choose the right export format for 3D printing, web, or presentations",
      level: "Intermediate",
      duration: "7 min",
      views: "6.7K",
      topics: ["Export", "Formats", "Quality"],
      gif: "/pic/vercel_animated (1).gif"
    },
    {
      title: "Creating Complex Logo Animations",
      description: "Add dynamic animations and effects to make your logos stand out",
      level: "Advanced",
      duration: "15 min",
      views: "3.9K",
      topics: ["Animation", "Effects", "Advanced"],
      gif: "/pic/github_animated (1).gif"
    }
  ];

  const quickGuides = [
    {
      title: "SVG File Requirements",
      description: "What makes a good SVG for 3D conversion",
      readTime: "2 min"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Speed up your workflow with essential shortcuts",
      readTime: "1 min"
    },
    {
      title: "Common Issues & Solutions",
      description: "Troubleshoot the most frequent problems",
      readTime: "3 min"
    },
    {
      title: "Material Library Guide",
      description: "Complete guide to all available materials",
      readTime: "4 min"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <>
      <AdsterraSidebar />
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Learn & Master
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            3D Logo <span className="text-primary">Tutorials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of 3D logo design with our comprehensive tutorials. From basic SVG upload 
            to advanced lighting techniques, we'll guide you every step of the way.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge variant="default" className="cursor-pointer">All Tutorials</Badge>
          <Badge variant="outline" className="cursor-pointer">Beginner</Badge>
          <Badge variant="outline" className="cursor-pointer">Intermediate</Badge>
          <Badge variant="outline" className="cursor-pointer">Advanced</Badge>
          <Badge variant="outline" className="cursor-pointer">Quick Guides</Badge>
        </div>

        {/* Main Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 gif-container relative">
                  <img 
                    src={tutorial.gif} 
                    alt={`${tutorial.title} tutorial preview`}
                    className="animated-gif"
                    loading="lazy"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-gray-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getLevelColor(tutorial.level)}>
                      {tutorial.level}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {tutorial.views} views
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Quick Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{guide.readTime}</Badge>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center mb-16">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">More Tutorials Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                We're continuously creating new content to help you master 3D logo design. 
                Stay tuned for advanced techniques, industry tips, and user-submitted tutorials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/edit">
                    Start Practicing
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Request Tutorial
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Start with Basics</h3>
              <p className="text-muted-foreground text-sm">
                Learn the interface, upload your first SVG, and understand the basic controls.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Materials</h3>
              <p className="text-muted-foreground text-sm">
                Explore different materials and lighting to create professional-looking results.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Techniques</h3>
              <p className="text-muted-foreground text-sm">
                Learn complex lighting, animations, and optimization for different output formats.
              </p>
            </Card>
          </div>
        </div>
        <AdsterraBanner className="mt-16" />
      </div>
    </div>
    </>
  );
} 