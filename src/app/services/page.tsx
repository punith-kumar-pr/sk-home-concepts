import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/config/services";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Star, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Premium home services and solutions in ${siteConfig.city} handled by verified professionals.`,
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
              We connect you with the best professionals in the industry across {siteConfig.city}. Select a service below to request a tailored quote.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section (Writing common characteristics once) */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center sm:text-left">
              Our Service Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary flex-shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Verified Professionals</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every service partner in our network undergoes rigorous background checks and skill verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Premium Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We maintain high standards so you receive exceptional service and outstanding results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary flex-shrink-0">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">End-to-End Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team acts as your single point of contact, ensuring a seamless experience from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 scroll-mt-24 group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={images.services[service.imageKey]}
                    alt={service.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Render sub-services if they exist */}
                    {service.subServices && (
                      <ul className="mt-4 space-y-2 border-t border-border pt-4">
                        {service.subServices.map((sub, i) => (
                          <li key={i} className="flex items-center text-sm text-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-6 mt-auto">
                    <Link href={`/contact?service=${service.id}`}>
                      <Button className="w-full bg-cta text-cta-foreground hover:bg-cta/90 transition-colors">
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
