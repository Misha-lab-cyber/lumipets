import { Link } from "wouter";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-2xl text-primary">Lumipets</span>
            <span className="font-serif text-2xl">Studio</span>
          </Link>
          <p className="text-muted-foreground">
            Premium pet grooming and boarding services in Bandar Rimbayu. Where every visit feels like a spa day for your pet.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <span>2A-1, Uptown 2 Square, 2/8, Persiaran Rimbayu, Bandar Rimbayu, 42500 Selangor</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 shrink-0" />
              <span>011-1959 1599</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 shrink-0" />
              <span>hello@lumipets.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg">Business Hours</h3>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <p>Monday - Sunday</p>
            <p className="font-medium text-foreground">9:00 AM – 7:00 PM</p>
            <p className="text-sm mt-2">Public Holidays: Open as usual</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Lumipets Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}