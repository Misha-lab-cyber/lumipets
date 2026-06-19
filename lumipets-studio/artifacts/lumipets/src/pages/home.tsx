import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Scissors, Cat, Home as HomeIcon, Heart } from "lucide-react";

import heroImg from "@/assets/hero.png";
import beforeImg from "@/assets/before-grooming.png";
import afterImg from "@/assets/after-grooming.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Lumipets Studio Luxury Pet Spa" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent dark:from-background/95 dark:via-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6 text-foreground">
              Premium Pet Grooming & <span className="text-primary">Boarding</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional grooming, comfortable boarding, and loving care for your furry family members in Bandar Rimbayu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="rounded-full text-base w-full sm:w-auto px-8 py-6 h-auto">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/601119591599" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="rounded-full text-base w-full sm:w-auto px-8 py-6 h-auto border-2">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
            <Card className="bg-card shadow-lg border-none hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-8 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Scissors className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Professional Grooming</h3>
                <p className="text-muted-foreground text-sm">Expert styling, relaxing baths, and full spa treatments for your dogs.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-none hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-8 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Cat className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Specialized Cat Grooming</h3>
                <p className="text-muted-foreground text-sm">Calm environments and specialized dryers designed specifically for felines.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-none hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-8 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <HomeIcon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Safe Pet Boarding</h3>
                <p className="text-muted-foreground text-sm">Comfortable sleeping areas, supervised play, and daily updates.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-none hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-8 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Loving & Experienced Care</h3>
                <p className="text-muted-foreground text-sm">Treated like our own family. Every pet receives personalized attention.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img src={beforeImg} alt="Before Grooming" className="w-1/2 h-full object-cover absolute left-0" />
              <img src={afterImg} alt="After Grooming" className="w-1/2 h-full object-cover absolute right-0 border-l-4 border-white" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white text-primary font-bold py-2 px-6 rounded-full shadow-lg text-sm uppercase tracking-wider">
                  Before & After
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-full -z-10 blur-3xl opacity-50" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                Why Pet Owners Trust <span className="text-primary">Lumipets Studio</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe that grooming shouldn't be stressful. Our premium studio is designed to be a calming, hygienic, and luxurious environment where your pets feel safe and loved.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Professional, certified groomers",
                "Immaculately clean and hygienic environment",
                "Comfortable, climate-controlled boarding spaces",
                "Personalized care tailored to your pet's needs",
                "Daily updates with photos and videos available"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/gallery">
              <Button variant="outline" size="lg" className="rounded-full px-8 mt-4">
                View Our Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our services.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-background rounded-xl mb-4 px-6 border-none shadow-sm">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline py-6">Do I need to book in advance?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Yes, we highly recommend booking at least 3-5 days in advance as our slots fill up quickly, especially on weekends and public holidays. Walk-ins are subject to availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-xl mb-4 px-6 border-none shadow-sm">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline py-6">What vaccinations are required for boarding?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                For the safety of all pets, we require up-to-date vaccinations (DHPPi/Lepto for dogs, FVRCP for cats), Rabies, and Bordetella. Please bring your pet's vaccination card on your first visit. Flea & tick prevention is also mandatory.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-xl mb-4 px-6 border-none shadow-sm">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline py-6">How long does full grooming take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                A full grooming session typically takes between 2 to 3 hours depending on the size of your pet, their coat condition, and their temperament. We will call you 30 minutes before your pet is ready for pickup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-xl mb-4 px-6 border-none shadow-sm">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline py-6">Do you provide updates while my pet is boarding?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Absolutely! We understand how much you miss them. We send daily updates via WhatsApp including photos and short videos of their meals, playtime, and resting periods.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to pamper your pet?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book an appointment today and experience the Lumipets Studio difference. Your furry friend deserves the best.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 py-6 h-auto text-primary font-bold hover:bg-white transition-colors">
              Book Their Spa Day
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}