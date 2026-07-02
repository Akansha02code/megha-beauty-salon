import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919820985559"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </a>

          {/* Call Button */}
          <a
            href="tel:+919820985559"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Call Us"
          >
            <Phone size={24} />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-background border border-border text-foreground shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
