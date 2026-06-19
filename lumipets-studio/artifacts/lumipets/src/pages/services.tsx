import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Scissors, Cat, Home as HomeIcon, HeartHandshake, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">Premium care tailored to your pet's specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card className="border-none shadow-md bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Scissors className="h-6 w-6" />
              </div>
              <CardTitle className="font-serif text-2xl">Dog Grooming</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Bath & Blow Dry</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Haircut & Styling</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Nail Trimming</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Ear Cleaning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Cat className="h-6 w-6" />
              </div>
              <CardTitle className="font-serif text-2xl">Cat Grooming</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Gentle Bath</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Fur Trimming & Deshedding</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Nail Care</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Specialized Quiet Cat Dryer</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <HomeIcon className="h-6 w-6" />
              </div>
              <CardTitle className="font-serif text-2xl">Pet Boarding</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Premium Daily Feeding</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Comfortable Sleeping Area</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Supervised Play Time</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Daily Updates & Photos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <CardTitle className="font-serif text-2xl">Day Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Active Play Sessions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Social Interaction</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Feeding Support</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Safe Environment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Grooming Packages Comparison</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Service Included</TableHead>
                  <TableHead className="text-center">Basic Grooming</TableHead>
                  <TableHead className="text-center">Full Grooming</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Premium Spa Bath</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Blow Dry & Brushing</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nail Trimming</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ear Cleaning</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Full Haircut & Styling</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sanitary Trim</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center"><Check className="h-4 w-4 text-primary mx-auto" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}