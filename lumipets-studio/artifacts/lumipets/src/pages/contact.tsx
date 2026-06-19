import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    const existing = JSON.parse(localStorage.getItem("lumipets_messages") || "[]");
    existing.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem("lumipets_messages", JSON.stringify(existing));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">We'd love to hear from you and your furry friend.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="border-none shadow-md bg-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-muted-foreground">2A-1, Uptown 2 Square, 2/8, Persiaran Rimbayu, Bandar Rimbayu, 42500 Selangor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone / WhatsApp</h4>
                    <p className="text-muted-foreground">011-1959 1599</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="Your email" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl><Textarea placeholder="How can we help?" rows={4} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9!2d101.5!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb0fa6a9e6b7b%3A0x0!2sBandar%20Rimbayu!5e0!3m2!1sen!2smy!4v1" 
            className="w-full h-full border-0" 
            allowFullScreen 
            loading="lazy"
            title="Lumipets Studio Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}