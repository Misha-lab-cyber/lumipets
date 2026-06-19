import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const reviews = [
  {
    name: "Sarah Lim",
    text: "My dog stayed here for one week and was very happy during the entire stay. Clean, spacious and caring environment.",
    initials: "SL",
    bg: "bg-orange-100 text-orange-700"
  },
  {
    name: "Ahmad Faizal",
    text: "The groomer is super professional and patient. Specialized dryer for cats is amazing. My cat usually hates dryers but was so calm here.",
    initials: "AF",
    bg: "bg-blue-100 text-blue-700"
  },
  {
    name: "Michelle Tan",
    text: "Super patient, clean and professional. Fully recommended. They even sent me videos of my puppy playing.",
    initials: "MT",
    bg: "bg-green-100 text-green-700"
  }
];

export default function Testimonials() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("lumipets_newsletter", email);
    toast({
      title: "Subscribed successfully!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Happy Pets, Happy Owners</h1>
        <p className="text-lg text-muted-foreground">See what our customers have to say about their Lumipets Studio experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full border-none shadow-md bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${review.bg}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold font-serif">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary/10 rounded-[2rem] p-8 md:p-16 text-center"
      >
        <h2 className="text-3xl font-serif font-bold mb-4">Join Our Pack</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for pet care tips, exclusive promotions, and updates from Lumipets Studio.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="rounded-full bg-white h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="rounded-full h-12 px-8">Subscribe</Button>
        </form>
      </motion.div>
    </div>
  );
}