import type { Metadata } from "next";
import { IndexNowPanel } from "@/components/indexnow-panel";

export const metadata: Metadata = {
  title: "IndexNow Management | 3D Designer Admin",
  description: "Manage search engine indexing and boost your site's visibility with IndexNow protocol",
  robots: "noindex, nofollow", // Admin page should not be indexed
};

export default function IndexNowAdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <IndexNowPanel />
      </div>
    </div>
  );
} 