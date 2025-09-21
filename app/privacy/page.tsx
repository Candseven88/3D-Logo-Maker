import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | 3D Designer Data Protection",
  description: "Privacy policy for 3D Designer. Learn how we protect your data and maintain your privacy while using our free 3D logo maker.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Local Processing",
      description: "All file processing happens directly in your browser"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Data Collection",
      description: "We don't store or collect your uploaded files"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "No Tracking",
      description: "Your creative work remains completely private"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "No Server Storage",
      description: "Files never leave your device"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Privacy First
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Privacy Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer is committed to protecting your privacy. This policy explains how we handle 
                information when you use our free online 3D logo maker and SVG converter service. 
                Our privacy-first approach ensures that your data remains secure and private.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Information We Do NOT Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>3D Designer does NOT collect, store, or transmit:</p>
              <ul>
                <li>Your uploaded SVG files</li>
                <li>Your created 3D models</li>
                <li>Your design modifications or customizations</li>
                <li>Your exported files or images</li>
                <li>Personal identification information</li>
                <li>Account information (no accounts required)</li>
              </ul>
              <p>
                All file processing occurs entirely within your web browser using WebGL and JavaScript. 
                Your files never leave your device.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Technical Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We may collect minimal technical information for service improvement:</p>
              <ul>
                <li>Browser type and version (for compatibility)</li>
                <li>Device type and screen resolution (for responsive design)</li>
                <li>Geographic region (country level only, for performance optimization)</li>
                <li>Page views and session duration (for analytics)</li>
              </ul>
              <p>
                This information is collected anonymously and cannot be used to identify individual users.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. How We Protect Your Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4>Local Processing</h4>
              <p>
                All SVG processing, 3D model generation, and file exports happen entirely in your 
                browser using client-side technologies. No data is sent to our servers.
              </p>
              
              <h4>No Registration Required</h4>
              <p>
                3D Designer works without requiring user accounts, email addresses, or personal information.
              </p>
              
              <h4>Secure Connection</h4>
              <p>
                Our website uses HTTPS encryption to protect your connection and ensure data integrity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>3D Designer may use the following third-party services:</p>
              
              <h4>Vercel Analytics</h4>
              <p>
                We use Vercel Analytics for anonymous usage statistics. This service does not 
                track individual users or collect personal information.
              </p>
              
              <h4>Web Fonts</h4>
              <p>
                We may load fonts from Google Fonts or similar services to enhance the user interface. 
                These services may log your IP address as part of their normal operation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Local Storage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>3D Designer uses minimal browser storage:</p>
              
              <h4>Local Storage</h4>
              <p>
                We may store user preferences (such as theme settings) locally in your browser. 
                This data never leaves your device.
              </p>
              
              <h4>No Tracking Cookies</h4>
              <p>
                We do not use tracking cookies or any form of cross-site tracking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Since we don't collect user data or files, there is no data retention policy needed. 
                Any temporary data used during processing is immediately discarded when you close 
                the browser tab or navigate away from the site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer does not knowingly collect information from children under 13. Since we 
                don't collect personal information from any users, the service is safe for users of all ages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. International Users</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer is available worldwide. Since all processing happens locally in your browser, 
                your data remains in your jurisdiction and is subject to your local privacy laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on 
                this page with an updated revision date. Continued use of the service after such 
                changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If you have questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <p>
                Email: privacy@3ddesigner.com<br />
                Website: https://3dlogo.site/contact
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Compliance</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our privacy-first approach ensures compliance with major privacy regulations including:
              </p>
              <ul>
                <li>GDPR (General Data Protection Regulation)</li>
                <li>CCPA (California Consumer Privacy Act)</li>
                <li>PIPEDA (Personal Information Protection and Electronic Documents Act)</li>
              </ul>
              <p>
                Since we don't collect personal data, most privacy regulations don't apply to our service.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">
            Privacy Summary
          </h3>
          <p className="text-green-700 dark:text-green-300">
            3D Designer is designed with privacy by default. Your files never leave your device, 
            we don't track your activity, and no personal information is required or collected. 
            You can use our service with complete confidence in your privacy.
          </p>
        </div>
      </div>
    </div>
  );
} 