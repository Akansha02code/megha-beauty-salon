import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    text: "Absolutely phenomenal experience! The staff is so professional and the ambiance is pure luxury. My hair feels completely transformed.",
    rating: 5
  },
  {
    name: "Anjali Desai",
    role: "Bridal Client",
    text: "Got my bridal makeup done here and I couldn't be happier. The products used were top-notch and the attention to detail was incredible. Highly recommend!",
    rating: 5
  },
  {
    name: "Sneha Patil",
    role: "Medispa Client",
    text: "The facial treatments are out of this world. You can tell they use premium clinical products. The glow lasted for weeks!",
    rating: 5
  },
  {
    name: "Roshni Mehta",
    role: "Regular Client",
    text: "Best salon in Kalyan West! The hygiene standards are impeccable and the staff always makes you feel like royalty.",
    rating: 5
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-muted to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Client Love
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Words of <span className="italic font-light text-primary">Praise</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 pr-4 md:px-12">
                  <div className="bg-white border border-border shadow-xl rounded-2xl p-8 md:p-12 text-center">
                    <div className="flex justify-center gap-1 mb-6 text-primary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
                      "{review.text}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl mb-3">
                        {review.name.charAt(0)}
                      </div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-foreground/60">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            <button onClick={() => emblaApi?.scrollPrev()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors">
              ←
            </button>
            <button onClick={() => emblaApi?.scrollNext()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
