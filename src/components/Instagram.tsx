import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InstagramSection() {
  const placeholders = [
    '/images/gallery-1.png',
    '/images/gallery-3.png',
    '/images/gallery-5.png',
    '/images/gallery-6.png',
  ];

  return (
    <section className="py-20 bg-muted border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white mb-6"
        >
          <Instagram size={32} />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
        >
          Follow Our Journey
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/70 font-light mb-10 max-w-lg mx-auto"
        >
          Join our community on Instagram for daily beauty inspiration, tips, and behind-the-scenes transformations.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          {placeholders.map((src, idx) => (
            <motion.a
              href="https://www.instagram.com/meghabeautysalon/"
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group aspect-square rounded-xl overflow-hidden bg-background"
            >
              <img src={src} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram size={24} />
              </div>
            </motion.a>
          ))}
        </div>

        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          asChild
        >
          <a href="https://www.instagram.com/meghabeautysalon/" target="_blank" rel="noreferrer">
            @meghabeautysalon
          </a>
        </Button>
      </div>
    </section>
  );
}
