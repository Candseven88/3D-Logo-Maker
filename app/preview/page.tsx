"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Note: Removed ModelPreviews import as we're using a simple placeholder
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function PreviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [svgData, setSvgData] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("Shared 3D Logo");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const encodedSvg = searchParams.get('svg');
      const encodedFileName = searchParams.get('name');

      if (!encodedSvg) {
        setError("No design data found in the share link");
        setIsLoading(false);
        return;
      }

      // Decode the SVG data
      const decodedSvg = decodeURIComponent(atob(encodedSvg));
      setSvgData(decodedSvg);

      if (encodedFileName) {
        setFileName(decodeURIComponent(encodedFileName));
      }

      setIsLoading(false);
    } catch (err) {
      console.error("Error decoding share link:", err);
      setError("Invalid share link");
      setIsLoading(false);
    }
  }, [searchParams]);

  const handleCreateYourOwn = () => {
    // Store the SVG data for editing
    if (svgData) {
      localStorage.setItem('svgData', svgData);
      localStorage.setItem('fileName', fileName);
    }
    router.push('/edit');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading shared design...</p>
        </div>
      </div>
    );
  }

  if (error || !svgData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Oops!</h1>
          <p className="text-muted-foreground mb-6">
            {error || "We couldn't load this shared design. The link might be invalid or expired."}
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Homepage
                </Link>
              </Button>
              <div>
                <h1 className="text-lg font-semibold">{fileName}</h1>
                <p className="text-sm text-muted-foreground">Shared 3D Design</p>
              </div>
            </div>
            <Badge variant="secondary">
              Made with 3D Designer
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 3D Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">3D Preview</h2>
                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      3D
                    </div>
                    <h3 className="text-lg font-semibold mb-2">3D Model Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      {fileName}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Full 3D preview available in editor
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Interactive 3D model - drag to rotate, scroll to zoom
                </p>
              </Card>
            </motion.div>

            {/* Info & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Design Info */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Design Information</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">File Name:</span>
                    <span className="font-medium">{fileName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">3D Logo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-medium">SVG to 3D</span>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Create Your Own</h2>
                <p className="text-muted-foreground mb-6">
                  Love this design? Use our free 3D logo maker to create your own stunning 3D logos in minutes.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    onClick={handleCreateYourOwn}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Edit This Design
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/">
                      Start From Scratch
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">What You Can Do</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Upload any SVG design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Choose from professional materials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Export in multiple formats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Share your creations
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              This design was created with{" "}
              <Link href="/" className="text-primary hover:underline font-medium">
                3D Designer
              </Link>
              {" "}- Free Online 3D Logo Maker
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">Create Your Own</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
} 