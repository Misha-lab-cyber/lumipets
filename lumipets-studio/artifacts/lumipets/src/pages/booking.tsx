import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

const bookingSchema = z.object({
  ownerName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(8, { message: "Valid phone number is required." }),
  email: z.string().email({ message: "Invalid email address." }).optional().or(z.literal('')),
  petName: z.string().min(1, { message: "Pet name is required." }),
  petType: z.string().min(1, { message: "Please select pet type." }),
  breed: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Preferred date is required." }),
  time: z.string().min(1, { message: "Preferred time is required." }),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ownerName: "",
      phone: "",
      email: "",
      petName: "",
      petType: "",
      breed: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    const bookingEntry = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      ...data
    };

    const existingBookings = JSON.parse(localStorage.getItem("lumipets_bookings") || "[]");
    existingBookings.push(bookingEntry);
    localStorage.setItem("lumipets_bookings", JSON.stringify(existingBookings));

    const message = `Hello Lumipets Studio, I would like to book an appointment.
Owner Name: ${data.ownerName}
Phone: ${data.phone}
Pet Name: ${data.petName}
Pet Type: ${data.petType}
Breed: ${data.breed || 'N/A'}
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Notes: ${data.notes || 'None'}
Please confirm my booking.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/601119591599?text=${encodedMessage}`, '_blank');
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">Schedule your pet's spa day or boarding stay. We will confirm via WhatsApp.</p>
        </div>

        <Card className="border-none shadow-lg bg-card">
          <CardContent className="p-6 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold border-b pb-2">Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="ownerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="012-345 6789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Email Address (Optional)</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold border-b pb-2">Pet Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="petName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pet's Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Bella" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="petType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pet Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Dog">Dog</SelectItem>
                              <SelectItem value="Cat">Cat</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="breed"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Breed (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Golden Retriever, Persian, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold border-b pb-2">Appointment Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Service Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Basic Grooming">Basic Grooming</SelectItem>
                              <SelectItem value="Full Grooming">Full Grooming</SelectItem>
                              <SelectItem value="Cat Grooming">Cat Grooming</SelectItem>
                              <SelectItem value="Pet Boarding">Pet Boarding</SelectItem>
                              <SelectItem value="Day Care">Day Care</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time *</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special requests, medical conditions, or behavioral notes?" 
                              className="resize-none" 
                              rows={4}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full text-lg h-14">
                  Request Booking via WhatsApp
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}