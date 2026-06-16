"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PipeList from "@/components/ui/PipeList";

interface BrandIntroProps {
  compact?: boolean;
}

export default function BrandIntro({ compact = false }: BrandIntroProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`section-padding bg-paper ${compact ? "pt-12 md:pt-14" : ""}`} id="experience">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {!compact && <SectionLabel className="mb-5">Indian Kitchen Theme Dining</SectionLabel>}
            <h2 className="heading-presentation mb-6">
              {compact ? "Our Philosophy" : "About Indian Kitchen"}
            </h2>
            <p className="text-text-dark/85 font-light leading-relaxed mb-5 text-base">
              Indian Kitchen is an immersive theme dining experience that brings India&apos;s soul to
              life through food, culture, and storytelling. Founded in Sri Lanka in 2019, we
              launched our first outlet with the Pondicherry Street concept in 2020.
            </p>
            <p className="text-text-dark/85 font-light leading-relaxed mb-8 text-base">
              We don&apos;t just serve food — we serve experiences. Each outlet is a journey into
              India&apos;s rich cultural tapestry.
            </p>
            <SectionLabel>Where Every Meal Tells a Story</SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-sage/10 shadow-md">
              <Image
                src="/images/real_storefront.jpeg"
                alt="Indian Kitchen Pondicherry Street outlet"
                fill
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <PipeList
              items={[
                "Concept: An immersive theme dining experience",
                "Origin: Kollupitiya, Colombo",
                "Founded: 2019 · First outlet 2020",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
