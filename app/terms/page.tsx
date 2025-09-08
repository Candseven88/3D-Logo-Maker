import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service | 3D Designer Legal",
  description: "Terms of service and usage conditions for 3D Designer - free online 3D logo maker and SVG converter platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using 3D Designer ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer is a free, web-based tool that allows users to convert SVG files into 3D models. 
                The service includes features for customizing 3D models, applying materials, and exporting 
                in various formats including STL, GLB, GLTF, and PNG.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Users agree to:</p>
              <ul>
                <li>Use the service only for lawful purposes</li>
                <li>Not upload copyrighted content without proper authorization</li>
                <li>Not attempt to hack, disrupt, or damage the service</li>
                <li>Not use the service to create offensive, illegal, or harmful content</li>
                <li>Respect intellectual property rights of others</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Users retain full ownership of the content they upload and create using our service. 
                3D Designer does not claim any ownership rights over user-generated content. However, 
                users are responsible for ensuring they have the right to use any uploaded SVG files.
              </p>
              <p>
                The 3D Designer platform, including its design, code, and functionality, is protected 
                by copyright and other intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer processes all data locally in your browser. We do not store, collect, 
                or transmit your uploaded files or created 3D models to our servers. For detailed 
                information about data handling, please refer to our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                While we strive to maintain high availability, 3D Designer is provided "as is" without 
                any guarantees of uptime or performance. We reserve the right to modify, suspend, 
                or discontinue the service at any time without notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer and its operators shall not be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of the service. 
                This includes but is not limited to damages for loss of profits, data, or other intangibles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Free Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D Designer is provided free of charge. We reserve the right to introduce paid features 
                in the future, but core functionality will remain free. Users will be notified of any 
                changes to the service structure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You may not use the service to:</p>
              <ul>
                <li>Create content that infringes on intellectual property rights</li>
                <li>Generate offensive, defamatory, or illegal material</li>
                <li>Attempt to reverse engineer or copy the service</li>
                <li>Use automated tools to access the service excessively</li>
                <li>Interfere with the security or functionality of the platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Export and Commercial Use</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                3D models created with 3D Designer may be used for personal and commercial purposes, 
                provided that the original SVG content used was legally obtained and you have the 
                right to use it. Users are responsible for ensuring compliance with applicable laws 
                and regulations in their jurisdiction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes through the platform. Continued use of the service after such 
                modifications constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. 
                Any disputes arising from these terms or use of the service shall be resolved through 
                appropriate legal channels.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: legal@3ddesigner.com<br />
                Website: https://3dlogo.site/contact
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>14. Severability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If any provision of these terms is found to be unenforceable or invalid, that provision 
                shall be limited or eliminated to the minimum extent necessary so that the remaining 
                terms shall remain in full force and effect.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <p className="text-muted-foreground">
            These terms ensure fair and responsible use of 3D Designer while protecting both users and 
            the platform. By using our service, you agree to respect intellectual property rights, 
            use the platform responsibly, and understand that your data remains private and secure.
          </p>
        </div>
      </div>
    </div>
  );
} 