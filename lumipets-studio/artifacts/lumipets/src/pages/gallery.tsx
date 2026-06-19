import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.png";
import img4 from "@/assets/gallery-4.png";
import img5 from "@/assets/gallery-5.png";
import img6 from "@/assets/gallery-6.png";
import img7 from "@/assets/gallery-7.png";

const images = [
  { id: 1, src: img1, category: "Grooming", aspect: "aspect-[3/4]" },
  { id: 2, src: img2, category: "Boarding", aspect: "aspect-[4/3]" },
  { id: 3, src: img3, category: "Dogs", aspect: "aspect-square" },
  { id: 4, src: img4, category: "Grooming", aspect: "aspect-square" },
  { id: 5, src: img5, category: "Cats", aspect: "aspect-[3/4]" },
  { id: 6, src: img6, category: "Grooming", aspect: "aspect-square" },
  { id: 7, src: img7, category: "Dogs", aspect: "aspect-[4/3]" },
];

const categories = ["All", "Grooming", "Boarding", "Dogs", "Cats"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Gallery</h1>
        <p className="text-lg text-muted-foreground">Take a look inside our premium pet studio.</p>
      </div>

      <div className="flex justify-center mb-12 overflow-x-auto pb-4">
        <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-max">
          <TabsList className="bg-secondary/50 rounded-full">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.aspect} break-inside-avoid`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={`Gallery image ${img.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none p-0 shadow-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <DialogDescription className="sr-only">A full size preview of the selected gallery image</DialogDescription>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}