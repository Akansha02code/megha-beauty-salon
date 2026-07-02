import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background/80 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl text-white font-bold mb-2">Megha</h3>
            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-6">Salon & Medispa</p>
            <p className="font-light text-sm leading-relaxed text-white/60 mb-6">
              A sacred space where women come to feel transformed. Experience clinical precision and feminine luxury in Kalyan West.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/meghabeautysalon/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><button onClick={() => scrollToSection('#home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('#about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('#gallery')} className="hover:text-primary transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollToSection('#testimonials')} className="hover:text-primary transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('#contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-3 font-light text-sm">
              <li>Hair Styling & Spa</li>
              <li>Bridal & Party Makeup</li>
              <li>Facials & Cleanups</li>
              <li>Medispa Skin Treatments</li>
              <li>Manicure & Pedicure</li>
              <li>Waxing & Threading</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Shop No. 7, Ami Darshan, Santoshi Mata Rd, Opp. HDFC Bank, Kalyan West 421301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919820985559" className="hover:text-primary transition-colors">+91 9820985559</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
          <p>&copy; {new Date().getFullYear()} Megha Beauty Salon & Medispa. All rights reserved.</p>
          <p>Designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
}
