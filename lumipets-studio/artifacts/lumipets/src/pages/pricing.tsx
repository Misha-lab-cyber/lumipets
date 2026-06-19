import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium care with straightforward pricing. Final quotes are provided in-studio based on your pet's specific requirements.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="h-full flex flex-col border-none shadow-md bg-card hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Basic Grooming</CardTitle>
              <CardDescription>Essential maintenance</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold text-primary mb-6">RM 60<span className="text-lg text-muted-foreground font-normal">+</span></div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Spa Bath</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Professional Drying</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Brushing</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Nail Trimming</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full rounded-full" variant="outline">Book Basic</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="h-full flex flex-col border-primary shadow-lg bg-card relative hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Full Grooming</CardTitle>
              <CardDescription>Complete spa treatment</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold text-primary mb-6">RM 120<span className="text-lg text-muted-foreground font-normal">+</span></div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Everything in Basic</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Full Body Haircut & Styling</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Ear Cleaning</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Sanitary Trim</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full rounded-full">Book Full Grooming</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="h-full flex flex-col border-none shadow-md bg-card hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Cat Grooming</CardTitle>
              <CardDescription>Gentle feline care</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold text-primary mb-6">RM 80<span className="text-lg text-muted-foreground font-normal">+</span></div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Gentle Bath</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Quiet Drying</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Brushing</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Nail Trim</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full rounded-full" variant="outline">Book Cat Grooming</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card className="h-full flex flex-col border-none shadow-md bg-card hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Pet Boarding</CardTitle>
              <CardDescription>Luxury overnight stay</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold text-primary mb-6">RM 40<span className="text-lg text-muted-foreground font-normal">/day</span></div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Comfortable Sleep Area</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Supervised Playtime</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Daily Feeding</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Photo & Video Updates</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full rounded-full" variant="outline">Book Boarding</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <div className="text-center p-6 bg-secondary/50 rounded-2xl max-w-3xl mx-auto">
        <p className="text-muted-foreground text-sm italic">
          Disclaimer: Final pricing depends on breed, size, coat condition, and specific grooming requirements. Aggressive or heavily matted pets may incur additional handling fees. Prices subject to change without prior notice.
        </p>
      </div>
    </div>
  );
}