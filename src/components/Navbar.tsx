import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex flex-col items-center">
          <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>Megha</span>
          <span className={`text-[0.6rem] uppercase tracking-widest ${isScrolled ? 'text-foreground/70' : 'text-white/80'}`}>Salon & Medispa</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6 transition-all hover:scale-105"
            onClick={() => scrollToSection('#contact')}
          >
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <ul className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="block text-lg font-medium text-foreground py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <Button 
                className="w-full mt-4 bg-primary text-primary-foreground font-medium rounded-full"
                onClick={() => scrollToSection('#contact')}
              >
                Book Appointment
              </Button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Ensure AnimatePresence is imported in the same file if used, we missed it above. Adding it now:
import { AnimatePresence } from 'framer-motion';
