"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function SocialMediaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="social">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-label-sm tracking-widest text-brand-golden font-bold uppercase mb-4">
            INDIAN KITCHEN<br/>THEME DINING
          </p>
          <h2 className="font-display-lg text-5xl md:text-7xl lg:text-[100px] text-brand-golden uppercase m-0 leading-none mb-12">
            SOCIAL MEDIA
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-1 space-y-12 flex flex-col justify-center h-full pt-10"
        >
          <div className="flex items-center gap-4">
            <FaInstagram className="w-8 h-8 text-brand-warm-cream" />
            <span className="font-headline-sm text-2xl text-brand-warm-cream font-bold">indian.kitchen_</span>
          </div>
          <div className="flex items-center gap-4">
            <FaTiktok className="w-8 h-8 text-brand-warm-cream" />
            <span className="font-headline-sm text-2xl text-brand-warm-cream font-bold">@ikthemedining</span>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebook className="w-8 h-8 text-brand-warm-cream" />
            <span className="font-headline-sm text-2xl text-brand-warm-cream font-bold">Indian Kitchen</span>
          </div>
        </motion.div>

        {/* Right Images */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-[4/7] shadow-xl rounded-xl overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/extracted/page9_img2.jpeg"
              alt="Instagram Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[4/7] shadow-xl rounded-xl overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/extracted/page9_img3.jpeg"
              alt="TikTok Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full aspect-[4/7] shadow-xl rounded-xl overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/extracted/page9_img4.jpeg"
              alt="Facebook Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
