import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, Phone } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <span className="inline-block text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Welcome to Megha
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Where Beauty <br />
            <span className="italic font-light text-primary/90">Meets Luxury</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience premium beauty treatments and personalized care at Megha Beauty Salon & Medispa. A sacred space designed for your transformation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg transition-all hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              Book Appointment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm rounded-full px-8 py-6 text-lg transition-all"
              asChild
            >
              <a href="tel:+919820985559">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Instagram Link */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute left-8 bottom-12 hidden lg:flex items-center gap-4 z-20"
      >
        <div className="w-[1px] h-12 bg-white/30" />
        <a 
          href="https://www.instagram.com/meghabeautysalon/" 
          target="_blank" 
          rel="noreferrer"
          className="text-white hover:text-primary transition-colors flex items-center gap-2"
        >
          <Instagram size={20} />
          <span className="text-sm font-medium tracking-widest uppercase origin-left rotate-90 translate-y-12">Instagram</span>
        </a>
      </motion.div>
    </section>
  );
}
