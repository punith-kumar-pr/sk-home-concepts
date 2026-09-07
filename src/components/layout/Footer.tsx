import Link from "next/link";
import { navigationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-primary mr-1">SK</span>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="hover:text-foreground transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="max-w-[200px]">{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
