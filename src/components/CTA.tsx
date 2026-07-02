import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CalendarHeart } from 'lucide-react';

export function CTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Book Your <span className="text-primary italic font-light">Luxury</span> Beauty Experience Today
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Ready for your transformation? Schedule an appointment with our expert stylists and therapists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              <CalendarHeart className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full px-8 py-6 text-lg transition-colors"
              asChild
            >
              <a href="tel:+919820985559">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 9820985559
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
