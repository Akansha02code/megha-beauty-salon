import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="text-center relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-primary">Megha</h1>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] mt-2 text-foreground/70">Beauty Salon & Medispa</p>
            </motion.div>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] w-12 h-[2px] bg-secondary/30 overflow-hidden"
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
