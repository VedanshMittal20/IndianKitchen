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
        image="/images/hero_main.png"
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
                to life through food, culture, and profound storytelling. Every intricate detail—from 
                the hand-carved woodwork to the aroma of freshly ground spices—is meticulously crafted to
                transport guests directly into the heart of India&apos;s rich, diverse culinary heritage.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed mb-6">
                Founded in Sri Lanka in 2019, we proudly launched our first flagship outlet in 2020 on 
                R.A. De Mel Mawatha in Kollupitiya, Colombo. This location introduced the city to our 
                signature &quot;Pondicherry Street&quot; concept—a loving homage to the French colonial 
                charm and vibrant coastal flavors of South India.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed">
                Since then, we have expanded our footprint to the historic city of Kandy, bringing the 
                tranquil &quot;Kerala Houseboat&quot; dining experience to life. Our spaces are not just 
                restaurants; they are cultural sanctuaries.
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
                Born during the unprecedented global hospitality crisis of 2019, Indian Kitchen emerged 
                from a defiant, bold vision: to fundamentally transform dining from a passive transaction 
                into an experiential, memorable journey rooted deeply in authenticity.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed mb-6">
                When the world paused, our founders used the silence to build. Drawing inspiration from 
                the lush backwaters of Kerala and the enchanting colonial streets of Pondicherry, the 
                team conceptualized a narrative-driven dining model. It wasn&apos;t enough to just serve 
                food; we needed to serve the *story* of the food.
              </p>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed">
                We traveled the spice routes, consulted with generational chefs, and brought back authentic 
                cooking vessels like copper pots and bamboo tubes. The result is a dining experience that 
                defies convention, offering a true bridge between Sri Lankan hospitality and Indian tradition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento */}
      <section className="bg-void section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
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
                To establish Indian Kitchen as the globally recognized pinnacle of theme dining.
              </h3>
              <p className="text-cream/70 font-light leading-relaxed text-base">
                We envision a future where the rich, untold stories of regional Indian cuisines are 
                accessible worldwide, completely redefining how global audiences perceive, taste, and 
                experience Indian food.
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
                To deliver a dining experience unique in taste, deeply immersive in ambience, and uncompromisingly authentic.
              </h3>
              <p className="text-cream/70 font-light leading-relaxed text-base">
                We are on a mission to celebrate India&apos;s culinary heritage with every single plate 
                we serve, ensuring that our guests leave not just satiated, but inspired.
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
                <strong className="text-forest">Vincent Renold</strong> brings over two decades of 
                elite hospitality excellence. His career is defined by prestigious leadership roles across 
                the tourism sectors of Sri Lanka and India, having worked closely with luxury brands like 
                Radisson, ITC, Banyan Tree, and the renowned Zuri Kumarakom Kerala Resort & Spa.
              </p>

              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 font-light">
                It was his deep involvement in inbound tourism and travel initiatives—such as his work with 
                Spiceland Holidays—that sparked a profound realization. He saw firsthand how travelers craved 
                not just food, but the *destination experience*. He wanted to capture the magic of dining on a 
                tranquil Kerala houseboat or walking the French-colonial streets of Pondicherry, and bring it 
                directly to the heart of Colombo.
              </p>

              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 font-light">
                His expertise in brand conceptualization and international expansion laid the foundation for 
                Indian Kitchen. Vincent&apos;s ultimate vision extends far beyond a single restaurant; he is 
                building a complete global ecosystem of authentic Indian culinary experiences.
              </p>

              <div className="bg-sage/10 border-l-2 border-sage p-6 rounded-r-3xl">
                <p className="font-display italic text-xl text-forest/90 mb-3">
                  &quot;Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants. We aren&apos;t just serving food; we are curating memories rooted in heritage.&quot;
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
