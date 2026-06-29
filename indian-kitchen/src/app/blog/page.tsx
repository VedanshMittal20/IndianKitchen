"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-surface-container-lowest text-on-surface">
      <PageHero
        label="From the Spice Trail"
        title={<>Tales from<br />the Kitchen</>}
        subtitle="Stories, recipes, and behind-the-scenes insights from the world of Indian Kitchen."
        image="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_interior"
      />

      <SectionShell variant="void" className="py-20">
        {/* Featured post */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 max-w-7xl mx-auto"
          >
            <Link 
              href={`/blog/${featured.slug}`} 
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-outline-variant/30 bg-surface-container-low overflow-hidden rounded-sm shadow-xl hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-surface-container-lowest">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-saffron-gold text-on-surface px-3 py-1 text-[8px] font-bold">
                  Featured Article
                </span>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[9px] tracking-[0.25em] text-brand-golden mb-3 font-bold">
                  {featured.tag}
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-brand-golden transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-on-surface/60 font-body-md font-light text-sm leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between text-[9px] text-on-surface-variant tracking-[0.2em] font-bold pt-4 border-t border-outline-variant/30">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <SectionHeader
            label="Chronicles"
            title="Culinary Insights"
            lightMode
            className="mb-0!"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {rest.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-surface-container-low border border-outline-variant/30 overflow-hidden rounded-sm shadow-xl hover:border-saffron-gold hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-surface-container-lowest shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover img-warm group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 bg-surface-container-low border border-outline-variant/30 text-brand-golden px-2.5 py-1 text-[8px] font-bold shadow-lg">
                    {post.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-brand-golden transition-colors duration-300 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-on-surface/60 font-body-md font-light text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[9px] text-on-surface-variant tracking-[0.2em] font-bold pt-4 border-t border-outline-variant/30">
                    <span>{post.date}</span>
                    <span className="text-brand-golden group-hover:text-on-surface transition-colors duration-300">
                      Read Entry →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
