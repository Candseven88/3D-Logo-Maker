import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Heart } from "lucide-react";
import { VercelIcon } from "@/components/ui/example-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Gallery", href: "/gallery" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Pricing", href: "/pricing" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
    tools: [
      { name: "SVG to 3D Converter", href: "/tools/svg-converter" },
      { name: "Logo Generator", href: "/tools/logo-generator" },
      { name: "3D Model Viewer", href: "/tools/model-viewer" },
      { name: "Design Templates", href: "/templates" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  3D Designer
                </span>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
                Transform your 2D designs into stunning 3D models with our powerful, 
                free online 3D logo maker. Perfect for designers, businesses, and creatives.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:contact@3ddesigner.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Tools</h3>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} 3D Designer.</span>
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>for creative professionals</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Hosted on</span>
              <Link
                href="https://vercel.com"
                className="font-medium text-primary hover:underline flex items-center gap-1 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VercelIcon size={14} />
                Vercel
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section (Hidden but crawlable) */}
        <div className="sr-only">
          <p>
            Keywords: 3D logo maker, free logo creator, SVG converter, online logo designer, 
            3D model generator, logo design tool, convert SVG to 3D, professional logo maker, 
            custom 3D logos, business logo creator, brand identity design, vector to 3D converter
          </p>
        </div>

        {/* External Links */}
        <div className="py-2 border-t border-border/40">
          <div className="flex justify-center">
            <a target="_blank" href="https://goodaitools.com">
              <img src="https://goodaitools.com/assets/images/badge.png" alt="Good AI Tools" height="54" className="h-6 w-auto opacity-70 hover:opacity-90 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 