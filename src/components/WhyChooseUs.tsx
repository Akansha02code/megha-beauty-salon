import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, Sparkles, Gem, Clock } from 'lucide-react';

const reasons = [
  { icon: Gem, title: "Premium Products", desc: "We use only the highest-grade international brands." },
  { icon: Award, title: "Certified Experts", desc: "Highly trained professionals with years of clinical experience." },
  { icon: Sparkles, title: "Luxury Ambience", desc: "A serene, Parisian-inspired environment to relax and unwind." },
  { icon: ShieldCheck, title: "100% Hygiene", desc: "Strict sterilization and single-use tools wherever possible." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Over 200+ 5-star reviews from transformed clients." },
  { icon: Clock, title: "Unhurried Care", desc: "We take our time to give you the personalized attention you deserve." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        Excellence
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              The Megha Standard
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Why Choose <br/><span className="italic font-light text-primary">Us?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-background/70 text-lg font-light mb-8"
            >
              We don't just provide services; we craft experiences. Every detail of our salon is designed with your ultimate comfort and satisfaction in mind.
            </motion.p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-2 text-white">{item.title}</h3>
                    <p className="text-background/60 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
