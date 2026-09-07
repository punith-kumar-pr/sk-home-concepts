import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/config/services";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={images.hero}
            alt="Modern home interior" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Premium Home Services, Delivered by Experts.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[500px]">
              We connect you with trusted, top-rated professionals in {siteConfig.city} for interior design, renovations, cleaning, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-white/10 text-white hover:bg-white/20 border-white/20">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Our Services</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive home solutions handled by verified professionals.
              </p>
            </div>
            <Link href="/services" className="flex items-center text-foreground font-medium hover:underline">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden border-transparent shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden bg-muted">
                  <Image 
                    src={images.services[service.imageKey]} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Why SK Home Concepts?</h2>
            <p className="text-muted-foreground text-lg">
              We take the hassle out of finding reliable home service professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="h-16 w-16 flex items-center justify-center text-foreground mb-4">
                <ShieldCheck className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold">Verified Professionals</h3>
              <p className="text-muted-foreground">Every service partner in our network undergoes strict vetting to ensure quality and reliability.</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="h-16 w-16 flex items-center justify-center text-foreground mb-4">
                <Star className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">We maintain high standards so you receive exceptional service and outstanding results.</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="h-16 w-16 flex items-center justify-center text-foreground mb-4">
                <Users className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold">Dedicated Support</h3>
              <p className="text-muted-foreground">Our team acts as your single point of contact, ensuring a seamless experience from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-2xl text-center space-y-8 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Ready to transform your space?</h2>
          <p className="text-xl text-muted-foreground">
            Contact us today. We&apos;ll connect you with the perfect professionals for your project requirements.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="text-base h-14 px-8">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
