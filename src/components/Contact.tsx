import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Visit Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Get In <span className="italic font-light text-primary">Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Address</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Shop No. 7, Ami Darshan,<br />
                Santoshi Mata Rd, Opp. HDFC Bank,<br />
                Kalyan West, Maharashtra 421301
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Contact</h3>
              <p className="text-foreground/70 font-light mb-2">
                <a href="tel:+919820985559" className="hover:text-primary transition-colors">+91 9820985559</a>
              </p>
              <p className="text-foreground/70 font-light">
                <a href="https://wa.me/919820985559" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp Available</a>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="sm:col-span-2 bg-muted p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Business Hours</h3>
              <div className="flex justify-between text-foreground/70 font-light border-b border-border pb-2 mb-2">
                <span>Monday – Saturday</span>
                <span>10:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between text-foreground/70 font-light">
                <span>Sunday</span>
                <span>11:00 AM – 6:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px] lg:h-full min-h-[400px] w-full rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.192306771891!2d73.1362!3d19.2435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE0JzM2LjYiTiA3M8KwMDgnMTAuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
