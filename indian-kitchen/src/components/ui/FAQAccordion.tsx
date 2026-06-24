"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-outline-variant/30 pb-4"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex items-center justify-between w-full py-4 text-left group"
            >
              <h3 className="font-headline-md text-xl text-on-surface group-hover:text-saffron-gold transition-colors">
                {item.question}
              </h3>
              <div className="ml-4 shrink-0 bg-surface-container-lowest border border-outline-variant/30 w-8 h-8 rounded-full flex items-center justify-center text-saffron-gold transition-transform duration-300">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-on-surface/70 font-light leading-relaxed pr-12">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
