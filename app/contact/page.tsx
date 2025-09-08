import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Twitter, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | 3D Designer Support & Help",
  description: "Get help with 3D Designer. Contact our support team, report issues, or provide feedback for our free 3D logo maker and SVG converter.",
  keywords: [
    "3d designer contact",
    "logo maker support",
    "svg converter help",
    "3d design assistance",
    "technical support"
  ],
  openGraph: {
    title: "Contact Us | 3D Designer Support & Help",
    description: "Get help with 3D Designer. Contact our support team, report issues, or provide feedback.",
    type: "website",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "For general inquiries and support",
      contact: "support@3ddesigner.com",
      link: "mailto:support@3ddesigner.com",
      response: "Usually within 24 hours"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub Issues",
      description: "Report bugs or request features",
      contact: "github.com/3ddesigner/issues",
      link: "https://github.com",
      response: "Community driven"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Social Media",
      description: "Follow us for updates and news",
      contact: "@3DDesignerApp",
      link: "https://twitter.com",
      response: "Regular updates"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Community Forum",
      description: "Connect with other users",
      contact: "community.3ddesigner.com",
      link: "#",
      response: "Peer support"
    }
  ];

  const supportTopics = [
    {
      title: "Technical Issues",
      items: [
        "SVG upload problems",
        "3D rendering errors",
        "Export failures",
        "Browser compatibility",
        "Performance issues"
      ]
    },
    {
      title: "Feature Requests",
      items: [
        "New material types",
        "Additional export formats",
        "UI improvements",
        "Mobile optimizations",
        "Advanced controls"
      ]
    },
    {
      title: "General Questions",
      items: [
        "How to use 3D Designer",
        "Best practices",
        "File format support",
        "Commercial usage",
        "Privacy concerns"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-primary">3D Designer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help! Whether you have questions, need support, or want to provide feedback, 
            we'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary mb-4 flex justify-center">{method.icon}</div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={method.link}
                  className="text-primary font-medium hover:underline block mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {method.contact}
                </Link>
                <p className="text-sm text-muted-foreground">{method.response}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What We Can Help With</h2>
            <div className="space-y-6">
              {supportTopics.map((topic, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topic.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Quick Help</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Before Contacting Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Check if your browser supports WebGL
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Ensure your SVG file is valid
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Try refreshing the page
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Clear your browser cache
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Try a different browser
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Is 3D Designer really free?</h4>
                      <p className="text-muted-foreground">Yes, core features are completely free with no hidden costs.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Do you store my files?</h4>
                      <p className="text-muted-foreground">No, all processing happens locally in your browser.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">What file formats are supported?</h4>
                      <p className="text-muted-foreground">SVG input, STL/GLB/GLTF/PNG output formats.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Business Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Business Inquiries</CardTitle>
              <CardDescription>
                For partnerships, integrations, or business-related questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">business@3ddesigner.com</p>
                    <p className="text-sm text-muted-foreground">Partnership opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Legal & Privacy</CardTitle>
              <CardDescription>
                For legal matters, privacy concerns, or compliance questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">legal@3ddesigner.com</p>
                    <p className="text-sm text-muted-foreground">Legal and privacy matters</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Global Service</p>
                    <p className="text-sm text-muted-foreground">Available worldwide</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Still Have Questions?</CardTitle>
              <CardDescription className="text-lg">
                Don't hesitate to reach out. We're committed to providing excellent support 
                for all 3D Designer users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="mailto:support@3ddesigner.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
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
      </div>
    </div>
  );
} 