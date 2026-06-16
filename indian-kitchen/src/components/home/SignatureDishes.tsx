"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const signatureMenu = [
  {
    name: "Bamboo Biryani",
    desc: "Tribal recipe cooked inside bamboo over charcoal, infused with earthy sweetness.",
    price: "LKR 1,950",
    image: "/images/bamboo_biryani.png",
    tag: "Signature",
  },
  {
    name: "Tender Coconut Prawn Curry",
    desc: "Malabar coastal flavours infused with fresh coconut milk and curry leaves.",
    price: "LKR 2,500",
    image: "/images/banana_leaf.png",
    tag: "Seafood",
  },
  {
    name: "Pineapple Butter Chicken",
    desc: "A tropical twist on the classic. Slow-roasted tomatoes with subtle pineapple zest.",
    price: "LKR 2,100",
    image: "/images/slide_4.png",
    tag: "Popular",
  },
  {
    name: "Kadai Paneer",
    desc: "Cottage cheese wok-tossed with bell peppers and freshly ground whole spices.",
    price: "LKR 1,976",
    image: "/images/slide_8.png",
    tag: "Vegetarian",
  },
];

export default function SignatureDishes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-cream-dark py-32 md:py-48" id="menu">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row justify-between gap-16"
        >
          {/* Left: Title */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium block mb-4">
                La Carte
              </span>
              <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-forest mb-8">
                Les Plats<br />
                <span className="italic">Signature</span>
              </h2>
              <p className="text-text-muted font-light mb-8 max-w-sm">
                Authentic regional recipes prepared without shortcuts. Every spice ground fresh, every marinade crafted by hand.
              </p>
              <button className="text-[10px] tracking-[0.2em] uppercase text-yellow hover:text-forest transition-colors link-underline pb-1 font-medium">
                View Full Menu
              </button>
            </div>
          </div>

          {/* Right: Menu Items */}
          <div className="w-full lg:w-3/5 flex flex-col gap-12">
            {signatureMenu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-wood pb-8 flex flex-col md:flex-row gap-6 md:items-center justify-between"
              >
                <div className="flex-1 pr-0 md:pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-forest group-hover:text-yellow transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-text-muted font-light text-sm md:text-base leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-wood border border-wood/30 px-2 py-1">
                      {item.tag}
                    </span>
                    <span className="font-sans text-sm font-medium text-forest">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-32 h-40 md:h-24 relative overflow-hidden shrink-0 mt-4 md:mt-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover img-warm group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
