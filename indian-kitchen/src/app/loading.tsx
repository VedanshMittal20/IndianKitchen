"use client";

import { motion } from "framer-motion";
import { ChefHat, Utensils, Flame } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-container-lowest">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-32 h-32 rounded-full border border-brand-sandy/20 border-t-brand-accent-green"
        />
        
        <div className="flex items-center gap-4 text-brand-golden">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
          >
            <ChefHat size={32} />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
          >
            <Flame size={32} className="text-brand-red" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
          >
            <Utensils size={32} />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute mt-48 font-label-lg tracking-widest text-brand-warm-cream uppercase text-sm"
      >
        Preparing your experience...
      </motion.div>
    </div>
  );
}
