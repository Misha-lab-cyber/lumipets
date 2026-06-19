import { Link } from "wouter";
import { Moon, Sun, Menu, MessageCircle } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-primary">Lumipets</span>
          <span className="font-serif text-2xl text-foreground">Studio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
          <Link href="/gallery" className="transition-colors hover:text-primary">Gallery</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link href="/booking">
            <Button className="rounded-full px-6">Book Now</Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">Home</Link>
              <Link href="/services" className="text-lg font-medium">Services</Link>
              <Link href="/pricing" className="text-lg font-medium">Pricing</Link>
              <Link href="/gallery" className="text-lg font-medium">Gallery</Link>
              <Link href="/contact" className="text-lg font-medium">Contact</Link>
              <Link href="/booking">
                <Button className="w-full mt-4">Book Now</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}