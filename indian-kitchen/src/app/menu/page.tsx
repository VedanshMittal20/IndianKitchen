"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  {
    category: "Breads & Rotis",
    items: [
      { name: "Garlic Naan", price: "LKR 350", desc: "Soft, pillowy naan infused with roasted garlic and butter.", tags: ["VEG"] },
      { name: "Missi Roti", price: "LKR 380", desc: "Traditional gram flour flatbread spiced with ajwain and herbs.", tags: ["VEGAN"] },
      { name: "Tandoori Roti", price: "LKR 320", desc: "Whole wheat bread baked in our traditional clay oven.", tags: ["VEGAN"] },
      { name: "Puff Parotta", price: "LKR 290", desc: "Flaky, multi-layered flatbread from Tamil Nadu.", tags: ["VEG"] },
      { name: "Naan Roti Basket", price: "LKR 2,431", desc: "A selection of 6 assorted traditional breads.", tags: ["VEG"] },
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
    category: "Curries \u2014 Chicken",
    items: [
      { name: "Butter Chicken", price: "from LKR 1,450", desc: "Tender tikkas simmered in a rich, velvety tomato gravy.", tags: ["NON-VEG"] },
      { name: "Chicken Tikka Masala", price: "from LKR 1,400", desc: "Smoky chicken cooked in a robust, spiced masala.", tags: ["NON-VEG", "SPICY"] },
      { name: "Pineapple Butter Chicken", price: "LKR 2,100", desc: "A tropical twist on our classic butter chicken.", tags: ["NON-VEG"] },
      { name: "Tender Coconut Prawn Curry", price: "LKR 2,500", desc: "Malabar coastal flavours infused with fresh coconut.", tags: ["NON-VEG", "SPICY"] },
    ]
  },
  {
    category: "Curries \u2014 Veg & Paneer",
    items: [
      { name: "Kadai Paneer", price: "LKR 1,976", desc: "Cottage cheese cooked with bell peppers and whole spices.", tags: ["VEG", "SPICY"] },
      { name: "Dhal Fry", price: "from LKR 800", desc: "Yellow lentils tempered with cumin, garlic, and ghee.", tags: ["VEG"] },
      { name: "Kadai Veg Curry", price: "LKR 1,450", desc: "Mixed seasonal vegetables tossed in a dry spice mix.", tags: ["VEGAN"] },
    ]
  },
  {
    category: "Starters / Tandoor",
    items: [
      { name: "Chicken Tikka", price: "LKR 1,800", desc: "Classic yogurt and spice marinated chicken chunks.", tags: ["NON-VEG"] },
      { name: "Seekh Kebab", price: "LKR 1,900", desc: "Spiced minced meat skewers roasted in the tandoor.", tags: ["NON-VEG", "SPICY"] },
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

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [showVegOnly, setShowVegOnly] = useState(false);

  const activeCategoryData = menuData.find((c) => c.category === activeCategory);
  const filteredItems = activeCategoryData?.items.filter(item => 
    showVegOnly ? (item.tags.includes("VEG") || item.tags.includes("VEGAN")) : true
  ) || [];

  return (
    <>
      <main className="min-h-screen bg-cream text-text-dark pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
              A Culinary Passport Through India
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">
              Explore our diverse menu featuring regional specialties, street food favorites, and reimagined classics.
            </p>
          </motion.div>

          {/* Sticky Category & Dietary Filter */}
          <div className="sticky top-20 z-40 bg-cream/95 backdrop-blur-md py-4 mb-12 border-b border-wood -mx-6 px-6 md:mx-0 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex overflow-x-auto gap-3 hide-scrollbar w-full md:w-auto pb-2 md:pb-0">
              {menuData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                      activeCategory === cat.category
                        ? "bg-forest text-cream"
                        : "border border-wood/30 text-forest hover:bg-forest hover:text-cream"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
            
            {/* Dietary Toggle */}
            <button
              onClick={() => setShowVegOnly(!showVegOnly)}
              className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                showVegOnly 
                  ? "bg-sage/20 border-forest text-forest" 
                  : "border-wood/30 text-text-muted hover:border-forest hover:text-forest"
              }`}
            >
              <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${showVegOnly ? "border-forest" : "border-text-muted"}`}>
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${showVegOnly ? "bg-forest" : "bg-transparent"}`} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider">Veg / Vegan Only</span>
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 min-h-[40vh]">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex justify-between items-start border-b border-wood/20 pb-6 group"
                  >
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl md:text-2xl text-forest group-hover:text-yellow transition-colors">
                          {item.name}
                        </h3>
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm border font-medium ${
                              tag === "VEG" ? "border-forest/50 text-forest" :
                              tag === "NON-VEG" ? "border-wood/50 text-wood" :
                              tag === "VEGAN" ? "border-forest/50 text-forest" :
                              "border-wood/50 text-wood"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <span className="font-sans text-sm font-bold tracking-wide text-wood whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="mt-20 pt-8 border-t border-wood text-center">
            <p className="text-text-muted text-sm italic">
              Full menu is updated regularly. Prices may vary by outlet. For the most current menu, scan the QR code or visit us in-store.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
