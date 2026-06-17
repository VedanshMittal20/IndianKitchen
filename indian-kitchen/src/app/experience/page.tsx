"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";

// A reusable CSS parallax image component
function ParallaxImage({ src, className = "" }: { src: string, className?: string }) {
  return (
    <div 
      className={`relative overflow-hidden bg-fixed bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute inset-0 bg-void/20" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-paper min-h-screen">
      <PageHero
        label="About Us"
        title="A Tale of Spice & Time"
        subtitle="Where every meal tells a story."
        image="/images/real/kandy_hero_night.jpg"
      />

      {/* Intro Row */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl text-center">
          <div className="animate-fade-in-up">
            <SectionLabel className="mb-6 justify-center">About Indian Kitchen</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-display text-forest mb-8 leading-tight">
              Transporting Guests Through Heritage
            </h2>
            <p className="text-text-dark/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Indian Kitchen is an immersive theme dining experience that brings India&apos;s soul
              to life through food, culture, and profound storytelling. Every intricate detail—from 
              the hand-carved woodwork to the aroma of freshly ground spices—is meticulously crafted to
              transport guests directly into the heart of India&apos;s rich, diverse culinary heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Break 1 */}
      <ParallaxImage 
        src="/images/real/kandy_hero_night.jpg" 
        className="h-[50vh] md:h-[70vh] w-full"
      />

      {/* The Origin Story Row */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/real/colombo_ceremony.jpg"
                  alt="Colombo Ceremony"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <SectionLabel className="mb-6">Our Origin Story</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-display text-forest mb-8">
                A Bold Vision Born in Crisis
              </h2>
              <p className="text-text-dark/80 text-lg font-light leading-relaxed mb-6">
                Born during the unprecedented global hospitality crisis of 2019, Indian Kitchen emerged 
                from a defiant, bold vision: to fundamentally transform dining from a passive transaction 
                into an experiential, memorable journey rooted deeply in authenticity.
              </p>
              <p className="text-text-dark/80 text-lg font-light leading-relaxed mb-6">
                Founded in Sri Lanka, we launched our flagship outlet in 2020 in Colombo, introducing 
                our signature &quot;Pondicherry Street&quot; concept. Since then, we expanded to the historic 
                city of Kandy with our tranquil &quot;Kerala Houseboat&quot; experience. 
              </p>
              <p className="text-text-dark/80 text-lg font-light leading-relaxed">
                When the world paused, our founders used the silence to build. We traveled the spice routes, 
                consulted with generational chefs, and brought back authentic cooking vessels. The result is a 
                dining experience that defies convention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Row */}
      <section className="bg-void text-cream py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <SectionLabel light className="mb-6">Our Vision</SectionLabel>
              <h3 className="text-2xl md:text-4xl font-display leading-tight mb-6">
                To establish Indian Kitchen as the globally recognized pinnacle of theme dining.
              </h3>
              <div className="h-[1px] w-12 bg-gold mb-6" />
              <p className="text-cream/60 font-light text-lg">
                We envision a future where the rich, untold stories of regional Indian cuisines are 
                accessible worldwide, completely redefining how global audiences perceive, taste, and 
                experience Indian food.
              </p>
            </div>

            <div>
              <SectionLabel light className="mb-6">Our Mission</SectionLabel>
              <h3 className="text-2xl md:text-4xl font-display leading-tight mb-6">
                To deliver a dining experience unique in taste, deeply immersive in ambience, and authentic.
              </h3>
              <div className="h-[1px] w-12 bg-gold mb-6" />
              <p className="text-cream/60 font-light text-lg">
                We are on a mission to celebrate India&apos;s culinary heritage with every single plate 
                we serve, ensuring that our guests leave not just satiated, but inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break 2 */}
      <ParallaxImage 
        src="/images/real/kandy_hero_day.jpg" 
        className="h-[60vh] w-full"
      />

      {/* Founder's Note Row */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
          <div className="text-center">
            <SectionLabel className="mb-6 justify-center">Founder&apos;s Note</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display text-forest mb-8">
              Building Experiences Through Passion
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/extracted/page15_img2.png" 
                alt="Vincent Renold" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="md:col-span-7">
              <p className="text-text-dark/80 text-lg font-light leading-relaxed mb-6">
                <strong className="text-forest font-semibold">Vincent Renold</strong> brings over two decades of 
                elite hospitality excellence. His career is defined by prestigious leadership roles across 
                the tourism sectors of Sri Lanka and India, having worked closely with luxury brands like 
                Radisson, ITC, Banyan Tree, and the renowned Zuri Kumarakom Kerala Resort & Spa.
              </p>
              <p className="text-text-dark/80 text-lg font-light leading-relaxed mb-8">
                It was his deep involvement in inbound tourism that sparked a profound realization. He saw firsthand 
                how travelers craved the *destination experience*. He wanted to capture the magic of dining on a 
                Kerala houseboat or walking the streets of Pondicherry, and bring it directly to Colombo and Kandy.
              </p>

              <blockquote className="border-l-2 border-terracotta pl-6 py-2">
                <p className="font-display italic text-2xl text-forest mb-4 leading-relaxed">
                  &quot;Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants. We aren&apos;t just serving food; we are curating memories rooted in heritage.&quot;
                </p>
                <footer className="text-sm uppercase tracking-[0.2em] text-terracotta font-semibold">
                  — Vincent Renold, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
