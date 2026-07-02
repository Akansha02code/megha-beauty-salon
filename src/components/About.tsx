import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden relative z-10 border-8 border-background shadow-2xl">
              <img 
                src="/images/about.png" 
                alt="Megha Salon Reception" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Glass Card */}
            <div className="absolute -bottom-8 -right-8 bg-background/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl z-20 border border-white/20 max-w-[240px]">
              <p className="font-serif text-4xl text-primary font-bold mb-2">10+</p>
              <p className="text-sm text-foreground/80 font-medium">Years of creating beauty and building confidence</p>
            </div>
            
            {/* Outline decorative shape */}
            <div className="absolute top-8 -left-8 w-full h-full border border-primary/30 rounded-t-full rounded-b-[2rem] -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              A Sacred Space for Your <span className="italic font-light text-primary">Transformation</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed font-light">
              Located in the heart of Kalyan West, Megha Beauty Salon & Medispa is your premier destination for high-end beauty and clinical skin treatments. We blend the precision of modern medispa techniques with the luxurious comfort of a Parisian atelier.
            </p>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed font-light">
              Our mission is to help women feel beautiful, confident, and entirely transformed. With unhurried appointments, personalized care, and premium products, we ensure every visit is an unforgettable experience.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Experienced Professionals",
                "Premium Products",
                "Hygienic Environment",
                "Personalized Care",
                "Luxury Experience",
                "Medispa Precision"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
