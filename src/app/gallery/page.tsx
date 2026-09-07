import Image from "next/image";
import { Metadata } from "next";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our portfolio of completed projects and premium service delivery.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Gallery</h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              A glimpse into the quality and dedication our partners bring to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-background flex-1">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.gallery.map((imgSrc, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden bg-muted group"
              >
                <Image
                  src={imgSrc}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg tracking-wide bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
