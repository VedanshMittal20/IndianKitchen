"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  {
    category: "Starters / Tandoor",
    items: [
      { name: "Chicken Tikka", price: "LKR 1,800", desc: "Classic yogurt and spice marinated chicken chunks.", tags: ["NON-VEG"] },
      { name: "Seekh Kebab", price: "LKR 1,900", desc: "Spiced minced meat skewers roasted in the tandoor.", tags: ["NON-VEG", "SPICY"] },
    ]
  },
  {
    category: "Biryani",
    items: [
      { name: "Bamboo Biryani (Chicken)", price: "LKR 1,950", desc: "Our signature biryani slow-cooked inside bamboo over charcoal.", tags: ["NON-VEG", "SPICY"] },
      { name: "Bamboo Biryani (Veg)", price: "LKR 1,600", desc: "Aromatic basmati and vegetables steamed in bamboo.", tags: ["VEG", "SPICY"] },
      { name: "Chicken Dum Biryani", price: "from LKR 1,200", desc: "Classic dum-cooked biryani with tender chicken pieces.", tags: ["NON-VEG"] },
      { name: "Pot Biryani", price: "LKR 2,200", desc: "Served in a traditional clay pot to seal in the aromas.", tags: ["NON-VEG"] },
    ]
  },
  {
    category: "Curries — Chicken",
    items: [
      { name: "Butter Chicken", price: "from LKR 1,450", desc: "Tender tikkas simmered in a rich, velvety tomato gravy.", tags: ["NON-VEG"] },
      { name: "Chicken Tikka Masala", price: "from LKR 1,400", desc: "Smoky chicken cooked in a robust, spiced masala.", tags: ["NON-VEG", "SPICY"] },
      { name: "Pineapple Butter Chicken", price: "LKR 2,100", desc: "A tropical twist on our classic butter chicken.", tags: ["NON-VEG"] },
      { name: "Tender Coconut Prawn Curry", price: "LKR 2,500", desc: "Malabar coastal flavours infused with fresh coconut.", tags: ["NON-VEG", "SPICY"] },
    ]
  },
  {
    category: "Curries — Veg & Paneer",
    items: [
      { name: "Kadai Paneer", price: "LKR 1,976", desc: "Cottage cheese cooked with bell peppers and whole spices.", tags: ["VEG", "SPICY"] },
      { name: "Dhal Fry", price: "from LKR 800", desc: "Yellow lentils tempered with cumin, garlic, and ghee.", tags: ["VEG"] },
      { name: "Kadai Veg Curry", price: "LKR 1,450", desc: "Mixed seasonal vegetables tossed in a dry spice mix.", tags: ["VEGAN"] },
    ]
  },
  {
    category: "Breads & Staples",
    items: [
      { name: "Tandoori Roti", price: "LKR 320", desc: "Whole wheat bread baked in our traditional clay oven.", tags: ["VEGAN"] },
      { name: "Puff Parotta", price: "LKR 290", desc: "Flaky, multi-layered flatbread from Tamil Nadu.", tags: ["VEG"] },
      { name: "Naan Roti Basket", price: "LKR 2,431", desc: "A selection of 6 assorted traditional breads.", tags: ["VEG"] },
    ]
  },
  {
    category: "Desserts & Drinks",
    items: [
      { name: "Jigarthanda", price: "LKR 650", desc: "The famous coolant of Madurai, rich and refreshing.", tags: ["VEG"] },
      { name: "Ilaneer Cake", price: "LKR 850", desc: "Tender coconut reimagined as a delicate dessert.", tags: ["VEG"] },
      { name: "Mango Lassi", price: "LKR 550", desc: "Sweet, creamy yogurt blended with ripe mangoes.", tags: ["VEG"] },
      { name: "Hot Gulab Jamun", price: "LKR 420", desc: "Deep-fried milk dumplings soaked in rose syrup.", tags: ["VEG"] },
    ]
  }
];

export default function FullMenuCatalog() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <section aria-labelledby="full-catalog-heading" className="relative mt-24 md:mt-40 border-t border-outline-variant pt-16">
      <div className="mb-12">
        <span className="font-label-sm text-label-sm-sm text-primary-container block mb-4">Fig. 03</span>
        <h2 className="font-display-lg text-display-lg-lg-mobile md:text-display-lg text-on-surface" id="full-catalog-heading">Full Catalog</h2>
        <p className="font-body-md text-body-md-md mt-4 text-on-surface-variant max-w-xl">
          The complete compendium of our culinary heritage. A passport through regional specialties, street food favorites, and reimagined classics.
        </p>
      </div>

      {/* Sticky Category Filter */}
      <div className="sticky top-20 z-40 bg-surface/90 py-4 mb-12 border-b border-outline-variant/50 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
        <div className="flex overflow-x-auto gap-4 hide-scrollbar">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-label-sm text-label-sm-sm tracking-wider transition-all duration-300 ${
                activeCategory === cat.category
                  ? "bg-surface-dark text-brand-golden shadow-lg"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        <AnimatePresence mode="popLayout">
          {menuData
            .find((c) => c.category === activeCategory)
            ?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex justify-between items-start border-b border-outline-variant/30 pb-6 group"
              >
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-headline-md text-headline-md-md text-on-surface group-hover:text-primary-container transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className={`font-label-sm text-[9px] px-2 py-0.5 rounded border ${
                            tag === "VEG" ? "border-emerald-600/30 text-emerald-700" :
                            tag === "NON-VEG" ? "border-red-800/30 text-red-800" :
                            tag === "VEGAN" ? "border-emerald-800/30 text-emerald-800" :
                            "border-saffron-gold/50 text-brand-golden"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="font-body-md text-body-md-md text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-4 shrink-0">
                  <span className="font-label-sm text-label-sm-sm text-on-surface">
                    {item.price}
                  </span>
                  <a
                    href={`https://wa.me/94117112334?text=I'd%20like%20to%20order:%20${item.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-primary-container/40 flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-on-primary transition-colors"
                    aria-label={`Order ${item.name}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </a>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="mt-20 pt-8 border-t border-outline-variant/30 text-center">
        <p className="font-label-sm text-label-sm-sm text-on-surface-variant italic">
          Full menu is updated regularly. Prices may vary by outlet. For the most current menu, scan the QR code or visit us in-store.
        </p>
      </div>
    </section>
  );
}
