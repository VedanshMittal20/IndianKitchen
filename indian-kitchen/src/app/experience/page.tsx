"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <main className="bg-paper min-h-screen">
      <PageHero
        label="About Us"
        title="A Tale of Spice & Time"
        subtitle="Where every meal tells a story."
        image="/images/luxury_indian_kitchen_hero_1781595277163.png"
      />

      {/* About Indian Kitchen & Origin Story */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <SectionLabel className="mb-4">About Indian Kitchen</SectionLabel>
              <h2 className="heading-presentation mb-6">Transporting Guests Through Heritage</h2>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed mb-6">
                Indian Kitchen is an immersive theme dining experience that brings India&apos;s soul
                to life through food, culture, and storytelling. Every detail is crafted to
                transport guests into the heart of India&apos;s rich culinary heritage.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed">
                Founded in Sri Lanka in 2019, we launched our first outlet in 2020 in Kollupitiya,
                Colombo, introducing the city to our signature Pondicherry Street concept.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <SectionLabel className="mb-4">Our Origin Story</SectionLabel>
              <h2 className="heading-presentation mb-6">A Bold Vision Born in Crisis</h2>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed mb-6">
                Born during the global hospitality crisis of 2019, Indian Kitchen emerged from a bold
                vision: to transform dining into experiential journeys rooted in authenticity.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed">
                Inspired by Pondicherry&apos;s enchanting French colonial charm, we created a
                narrative-driven concept where every meal tells a story of India&apos;s rich cultural
                heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento */}
      <section className="bg-void section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-void via-void to-sage/5 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6 }}
              className="bg-parchment/5 border border-sage/15 p-8 md:p-12 rounded-[32px] backdrop-blur-sm"
            >
              <SectionLabel light className="mb-4">Our Vision</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-display text-cream leading-snug mb-6 uppercase tracking-wide">
                To establish and expand Indian Kitchen as a globally recognized theme dining brand.
              </h3>
              <p className="text-cream/70 font-light leading-relaxed text-base">
                Redefining Indian cuisine experiences worldwide.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-parchment/5 border border-sage/15 p-8 md:p-12 rounded-[32px] backdrop-blur-sm"
            >
              <SectionLabel light className="mb-4">Our Mission</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-display text-cream leading-snug mb-6 uppercase tracking-wide">
                To deliver a dining experience that is unique in taste, immersive in ambience, and authentic.
              </h3>
              <p className="text-cream/70 font-light leading-relaxed text-base">
                Celebrating India&apos;s culinary heritage with every plate we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section-padding bg-parchment">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <SectionLabel className="mb-5">Founder&apos;s Note</SectionLabel>
              <h2 className="heading-presentation mb-8 text-forest">
                Building Experiences<br />Through Passion
              </h2>
              <div className="w-12 h-1 bg-terracotta mb-8 rounded-full" />
              
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 font-light">
                <strong className="text-forest">Vincent Renold</strong> brings over 20 years of
                hospitality excellence, having worked with prestigious brands including Radisson, ITC,
                and Banyan Tree.
              </p>

              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 font-light">
                His expertise spans brand conceptualization, operations management, revenue
                optimization, and international expansion. Vincent&apos;s vision extends beyond
                restaurants, to create a complete ecosystem of authentic Indian culinary experiences
                worldwide.
              </p>

              <div className="bg-sage/10 border-l-2 border-sage p-6 rounded-r-3xl">
                <p className="font-display italic text-xl text-forest/90 mb-3">
                  &quot;Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants.&quot;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage">
                  — Vincent Renold, Founder
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[32px] border border-sage/15 shadow-xl">
                <Image 
                  src="/images/extracted/page15_img2.png" 
                  alt="Vincent Renold" 
                  fill 
                  className="object-cover img-warm"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
