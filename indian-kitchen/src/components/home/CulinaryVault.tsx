"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Info } from "lucide-react";
import { useState } from "react";

const tabs = ["STARTERS", "MAINS", "BIRYANI", "DESSERTS"];

const menuItems = [
  {
    title: "BUTTER CHICKEN",
    description: "Old Delhi style smoked chicken in creamy tomato sauce.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    isSpicy: true,
  },
  {
    title: "PANEER TIKKA",
    description: "Clay oven roasted cottage cheese, hung curd marination.",
    price: "$18.00",
    image: "https://images.unsplash.com/photo-1599487405270-8e715d97d025?auto=format&fit=crop&q=80&w=800",
    isSpicy: false,
  },
  {
    title: "LAMB BIRYANI",
    description: "Awadhi style slow-cooked rice, saffron, whole spices.",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    isSpicy: true,
  },
  {
    title: "GULAB JAMUN",
    description: "Milk dumplings in cardamom syrup, silver vark.",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1589115901300-84c1767675f9?auto=format&fit=crop&q=80&w=800",
    isSpicy: false,
  }
];

export default function CulinaryVault() {
  const [activeTab, setActiveTab] = useState("STARTERS");

  return (
    <section className="bg-brand-warm-cream text-surface-dark py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 spice-pattern"></div>
      
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-4xl md:text-6xl text-brand-deep-forest tracking-wider uppercase inline-block border-b-4 border-brand-accent-green pb-2">
            THE CULINARY VAULT
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-1 border-b border-brand-deep-forest/20 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-label-lg px-8 py-3 uppercase tracking-widest text-sm transition-colors ${
                activeTab === tab 
                  ? "bg-brand-golden text-surface-dark border-b-2 border-brand-golden" 
                  : "bg-brand-deep-forest text-brand-warm-cream hover:bg-brand-accent-green hover:text-surface-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white border border-brand-sandy flex flex-col hover-glow"
            >
              <div className="relative h-56 w-full overflow-hidden bg-brand-deep-forest">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {item.isSpicy && (
                  <div className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold tracking-widest px-2 py-1 rounded-sm uppercase z-10">
                    SPICY
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-sm text-brand-deep-forest tracking-wide uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-surface-variant text-sm mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto border-t border-brand-sandy/20 pt-4">
                  <span className="font-headline-sm text-brand-accent-green text-xl">{item.price}</span>
                  <button className="text-brand-sandy hover:text-brand-deep-forest transition-colors">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
