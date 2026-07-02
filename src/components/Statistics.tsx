import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 203, suffix: '+', label: 'Happy Clients' },
  { value: 4.8, suffix: '★', label: 'Google Rating', isFloat: true },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
];

function Counter({ value, isFloat }: { value: number; isFloat?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 30;
      const steps = duration / incrementTime;
      const stepValue = end / steps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-20 border-y border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 flex justify-center items-center">
                <Counter value={stat.value} isFloat={stat.isFloat} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-foreground/70 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
