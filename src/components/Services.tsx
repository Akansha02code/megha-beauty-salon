import { motion } from 'framer-motion';
import {  Droplet, Star, Sun, Shield, Flower2 } from 'lucide-react';

const services = [
  { icon: Droplet, title: 'Hair Color & Spa', desc: 'Premium coloring, highlights, and nourishing spa treatments.' },
  { icon: Star, title: 'Bridal Makeup', desc: 'Flawless, long-lasting bridal looks for your special day.' },
  { icon: Sun, title: 'Waxing & Threading', desc: 'Gentle, hygienic hair removal solutions.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Services
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Indulge in <span className="italic font-light text-primary">Luxury</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            Explore our curated menu of beauty and clinical treatments designed to rejuvenate your body and elevate your spirit.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-muted/50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-2xl border border-transparent hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">{service.desc}</p>
                
                {/* Decorative hover line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
