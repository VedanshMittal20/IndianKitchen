"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import MenuCategoryPills from "@/components/ui/MenuCategoryPills";
import MenuQRSection from "@/components/home/MenuQRSection";
import PageHero from "@/components/ui/PageHero";

const menuData = [
  {
    category: "Breads & Rotis",
    id: "breads",
    items: [
      { name: "Garlic Naan", price: "LKR 350", desc: "Soft, pillowy naan infused with roasted garlic and butter.", tags: ["VEG"], image: "/images/banana_leaf.png" },
      { name: "Missi Roti", price: "LKR 380", desc: "Traditional gram flour flatbread spiced with ajwain and herbs.", tags: ["VEGAN"], image: "/images/banana_leaf.png" },
      { name: "Tandoori Roti", price: "LKR 320", desc: "Whole wheat bread baked in our traditional clay oven.", tags: ["VEGAN"], image: "/images/banana_leaf.png" },
      { name: "Puff Parotta", price: "LKR 290", desc: "Flaky, multi-layered flatbread from Tamil Nadu.", tags: ["VEG"], image: "/images/banana_leaf.png" },
      { name: "Naan Roti Basket", price: "LKR 2,431", desc: "A selection of 6 assorted traditional breads.", tags: ["VEG"], image: "/images/banana_leaf.png" },
    ]
  },
  {
    category: "Biryani",
    id: "biryani",
    items: [
      { name: "Bamboo Biryani (Chicken)", price: "LKR 1,950", desc: "Our signature biryani slow-cooked inside bamboo over charcoal.", tags: ["NON-VEG", "SPICY"], image: "/images/bamboo_biryani.png" },
      { name: "Bamboo Biryani (Veg)", price: "LKR 1,600", desc: "Aromatic basmati and vegetables steamed in bamboo.", tags: ["VEG", "SPICY"], image: "/images/bamboo_biryani.png" },
      { name: "Chicken Dum Biryani", price: "from LKR 1,200", desc: "Classic dum-cooked biryani with tender chicken pieces.", tags: ["NON-VEG"], image: "/images/bamboo_biryani.png" },
      { name: "Pot Biryani", price: "LKR 2,200", desc: "Served in a traditional clay pot to seal in the aromas.", tags: ["NON-VEG"], image: "/images/bamboo_biryani.png" },
    ]
  },
  {
    category: "Curries \u2014 Chicken",
    id: "chicken",
    items: [
      { name: "Butter Chicken", price: "from LKR 1,450", desc: "Tender tikkas simmered in a rich, velvety tomato gravy.", tags: ["NON-VEG"], image: "/images/pineapple_chicken.png" },
      { name: "Chicken Tikka Masala", price: "from LKR 1,400", desc: "Smoky chicken cooked in a robust, spiced masala.", tags: ["NON-VEG", "SPICY"], image: "/images/pineapple_chicken.png" },
      { name: "Pineapple Butter Chicken", price: "LKR 2,100", desc: "A tropical twist on our classic butter chicken.", tags: ["NON-VEG"], image: "/images/pineapple_chicken.png" },
      { name: "Tender Coconut Prawn Curry", price: "LKR 2,500", desc: "Malabar coastal flavours infused with fresh coconut.", tags: ["NON-VEG", "SPICY"], image: "/images/banana_leaf.png" },
    ]
  },
  {
    category: "Curries \u2014 Veg & Paneer",
    id: "veg",
    items: [
      { name: "Kadai Paneer", price: "LKR 1,976", desc: "Cottage cheese cooked with bell peppers and whole spices.", tags: ["VEG", "SPICY"], image: "/images/banana_leaf.png" },
      { name: "Dhal Fry", price: "from LKR 800", desc: "Yellow lentils tempered with cumin, garlic, and ghee.", tags: ["VEG"], image: "/images/banana_leaf.png" },
      { name: "Kadai Veg Curry", price: "LKR 1,450", desc: "Mixed seasonal vegetables tossed in a dry spice mix.", tags: ["VEGAN"], image: "/images/banana_leaf.png" },
    ]
  },
  {
    category: "Starters / Tandoor",
    id: "starters",
    items: [
      { name: "Chicken Tikka", price: "LKR 1,800", desc: "Classic yogurt and spice marinated chicken chunks.", tags: ["NON-VEG"], image: "/images/private_dining.png" },
      { name: "Seekh Kebab", price: "LKR 1,900", desc: "Spiced minced meat skewers roasted in the tandoor.", tags: ["NON-VEG", "SPICY"], image: "/images/private_dining.png" },
    ]
  },
  {
    category: "Desserts & Drinks",
    id: "desserts",
    items: [
      { name: "Jigarthanda", price: "LKR 650", desc: "The famous coolant of Madurai, rich and refreshing.", tags: ["VEG"], image: "/images/real/kandy_hero_night.jpg" },
      { name: "Ilaneer Cake", price: "LKR 850", desc: "Tender coconut reimagined as a delicate dessert.", tags: ["VEG"], image: "/images/real/kandy_hero_night.jpg" },
      { name: "Mango Lassi", price: "LKR 550", desc: "Sweet, creamy yogurt blended with ripe mangoes.", tags: ["VEG"], image: "/images/real/kandy_hero_night.jpg" },
      { name: "Hot Gulab Jamun", price: "LKR 420", desc: "Deep-fried milk dumplings soaked in rose syrup.", tags: ["VEG"], image: "/images/real/kandy_hero_night.jpg" },
    ]
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  const handleCategorySelect = (categoryName: string) => {
    setActiveCategory(categoryName);
    const data = menuData.find(c => c.category === categoryName);
    if (data && categoryRefs.current[data.id]) {
      categoryRefs.current[data.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let active = menuData[0].category;
      for (const cat of menuData) {
        const el = categoryRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            active = cat.category;
          }
        }
      }
      setActiveCategory(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-parchment text-void min-h-screen" onMouseMove={handleMouseMove}>
      <PageHero
        label="La Carte"
        title={<>The Culinary<br />Passport</>}
        subtitle="Explore our diverse menu featuring regional specialties, street food favorites, and reimagined classics."
        image="/images/bamboo_biryani.png"
        light
      />

      <SectionShell variant="parchment" className="py-16">
        {/* Floating Custom Image Preview (Desktop Only) */}
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed z-[9999] pointer-events-none w-[180px] h-[240px] gold-frame rounded-[2px] overflow-hidden bg-void-light hidden lg:block shadow-2xl"
              style={{
                left: mousePos.x,
                top: mousePos.y,
              }}
            >
              <Image
                src={hoveredImage}
                alt="Dish Preview"
                fill
                className="object-cover img-warm"
                sizes="180px"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT COLUMN: Sticky Categories Rail (Desktop Only) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 hidden lg:flex flex-col gap-6 pr-4 border-r border-gold/15">
            <span className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold">
              Culinary Sanctums
            </span>
            <ul className="space-y-4 font-sans text-xs uppercase tracking-widest font-semibold">
              {menuData.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategorySelect(cat.category)}
                    className={`text-left transition-all duration-300 ${
                      activeCategory === cat.category 
                        ? "text-gold translate-x-2 font-bold" 
                        : "text-void/50 hover:text-void"
                    }`}
                  >
                    {cat.category}
                  </button>
                </li>
              ))}
            </ul>

            {/* Premium Dietary Switch */}
            <div className="pt-6 border-t border-gold/15 mt-4">
              <span className="text-[8px] tracking-[0.2em] uppercase text-text-muted font-bold block mb-3">Dietary Compass</span>
              <button
                onClick={() => setShowVegOnly(!showVegOnly)}
                className={`flex items-center gap-3 px-4 py-2 border rounded-full transition-all text-[10px] uppercase font-bold tracking-widest ${
                  showVegOnly 
                    ? "bg-sage/10 border-sage text-sage" 
                    : "border-gold/30 text-text-muted hover:border-gold hover:text-void"
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${showVegOnly ? "border-sage" : "border-text-muted"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${showVegOnly ? "bg-sage" : "bg-transparent"}`} />
                </div>
                Veg / Vegan
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Scrolling Menu List */}
          <div className="lg:col-span-9 space-y-16">
            {/* Mobile Only: Category Slide Bar */}
            <div className="lg:hidden sticky top-14 z-30 bg-parchment/95 backdrop-blur-md py-4 border-b border-gold/10 -mx-6 px-6 mb-6">
              <MenuCategoryPills 
                categories={menuData.map(c => c.category)} 
                activeCategory={activeCategory} 
                onSelect={handleCategorySelect} 
              />
              <button
                onClick={() => setShowVegOnly(!showVegOnly)}
                className={`flex items-center justify-center gap-2 px-4 py-1.5 border rounded-full text-[9px] uppercase font-bold tracking-widest mt-4 mx-auto ${
                  showVegOnly 
                    ? "bg-sage/10 border-sage text-sage" 
                    : "border-gold/30 text-text-muted"
                }`}
              >
                Veg Only
              </button>
            </div>

            {/* Menu Groups */}
            {menuData.map((category) => {
              const filteredItems = category.items.filter(item => 
                showVegOnly ? (item.tags.includes("VEG") || item.tags.includes("VEGAN")) : true
              );

              if (filteredItems.length === 0) return null;

              return (
                <div 
                  key={category.id}
                  id={category.id}
                  ref={(el) => { categoryRefs.current[category.id] = el; }}
                  className="scroll-mt-32 border-b border-gold/10 pb-12"
                >
                  <h2 className="font-display text-3xl md:text-4xl text-void uppercase tracking-wide mb-8 border-l-2 border-gold pl-4">
                    {category.category}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {filteredItems.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-start pb-4 border-b border-gold/5 group relative"
                        onMouseEnter={() => setHoveredImage(item.image)}
                        onMouseLeave={() => setHoveredImage(null)}
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                            <h3 className="font-display text-lg md:text-xl text-void group-hover:text-gold transition-colors duration-300">
                              {item.name}
                            </h3>
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className={`text-[8px] uppercase tracking-[0.15em] px-1.5 py-0.5 border font-bold ${
                                  tag === "VEG" ? "border-sage/40 text-sage" :
                                  tag === "NON-VEG" ? "border-crimson/40 text-crimson" :
                                  tag === "VEGAN" ? "border-sage/40 text-sage bg-sage/5" :
                                  "border-gold/40 text-gold"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-text-muted text-xs leading-relaxed font-sans font-light">
                            {item.desc}
                          </p>
                        </div>

                        <div className="shrink-0 pt-0.5 text-right flex flex-col items-end">
                          <span className="font-sans text-xs font-bold tracking-widest text-gold group-hover:scale-105 transition-transform duration-300">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-16 text-center max-w-xl mx-auto border-t border-gold/10 pt-8">
          <p className="text-text-muted text-[10px] uppercase tracking-widest font-sans">
            Full menu is updated daily. Prices are subject to dynamic changes. For allergy advice or custom menu requests, please speak to your host directly.
          </p>
        </div>
      </SectionShell>

      <MenuQRSection />
    </main>
  );
}
