import type { Metadata } from "next";
import ImageToSvgConverter from "@/components/image-to-svg-converter";

export const metadata: Metadata = {
  title: "Image to SVG Converter | Convert Photos to Vector Graphics",
  description: "Convert JPG, PNG, and other raster images to scalable SVG vector graphics for 3D logo creation. Free online image vectorizer with professional quality output.",
  keywords: [
    "image to svg",
    "png to svg",
    "jpg to svg",
    "vector converter",
    "image vectorizer",
    "raster to vector",
    "svg converter",
    "logo vectorizer"
  ],
  openGraph: {
    title: "Image to SVG Converter | Convert Photos to Vector Graphics",
    description: "Convert raster images to SVG vectors for 3D logo creation",
    type: "website",
  },
};

export default function ConvertPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ImageToSvgConverter />
    </div>
  );
} 