import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/config/services";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Comprehensive home solutions in ${siteConfig.city} handled by verified professionals.`,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Services</h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              We connect you with the best professionals in the industry across {siteConfig.city}. From concept to completion, we ensure premium quality for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-10 md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={images.services[service.imageKey]}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pb-4">
                    <li className="flex items-center text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      Verified Professionals
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      Premium Quality Assurance
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      End-to-End Support
                    </li>
                  </ul>
                  <Link href={`/contact?service=${service.id}`}>
                    <Button size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90">
                      Request this Service
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
