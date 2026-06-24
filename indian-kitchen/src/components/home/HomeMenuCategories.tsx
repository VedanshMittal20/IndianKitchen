"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import MenuCategoryPills from "@/components/ui/MenuCategoryPills";
import DishCard from "@/components/ui/DishCard";
import { ArrowRight } from "lucide-react";

const menuData = {
  Biryani: [
    { name: "Bamboo Chicken Biryani", price: "LKR 3,400", image: "/images/real/gallery_1.jpg", tag: "Signature" },
    { name: "Mutton Dum Biryani", price: "LKR 4,200", image: "/images/real/gallery_3.jpg" },
    { name: "Prawns Biryani", price: "LKR 3,800", image: "/images/real/gallery_4.jpg" },
    { name: "Vegetable Biryani", price: "LKR 2,400", image: "/images/real/gallery_6.jpg", tag: "Veg" },
  ],
  Curries: [
    { name: "Butter Chicken Masala", price: "LKR 2,800", image: "/images/real/gallery_7.jpg", tag: "Popular" },
    { name: "Kadai Paneer", price: "LKR 2,200", image: "/images/real/gallery_1.jpg", tag: "Veg" },
    { name: "Mutton Rogan Josh", price: "LKR 3,600", image: "/images/real/gallery_2.jpg" },
    { name: "Goan Fish Curry", price: "LKR 3,200", image: "/images/real/gallery_3.jpg" },
  ],
  Tandoor: [
    { name: "Tandoori Chicken", price: "LKR 3,000", image: "/images/real/gallery_4.jpg" },
    { name: "Paneer Tikka", price: "LKR 2,400", image: "/images/real/gallery_5.jpg", tag: "Veg" },
    { name: "Seekh Kebab", price: "LKR 3,400", image: "/images/real/gallery_6.jpg" },
    { name: "Malai Tikka", price: "LKR 2,900", image: "/images/real/gallery_7.jpg" },
  ],
};

type Category = keyof typeof menuData;

export default function HomeMenuCategories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<Category>("Biryani");

  const categories = Object.keys(menuData) as Category[];

  return (
    <SectionShell variant="void" id="menu-categories">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
      >
        <SectionHeader 
          label="The Culinary Passport" 
          title="Browse Our Menu" 
          className="mb-0 md:mb-0"
        />
        <Link
          href="/menu"
          className="text-[10px] tracking-[0.2em] uppercase text-saffron-gold hover:text-on-surface transition-colors inline-flex items-center gap-2 mb-2 group"
        >
          View Full Menu
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="mb-6">
        <MenuCategoryPills 
          categories={categories} 
          activeCategory={activeTab} 
          onSelect={(cat) => setActiveTab(cat as Category)} 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {menuData[activeTab].map((dish, index) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <DishCard {...dish} />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
