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
    <main className="min-h-screen bg-void text-cream">
      <PageHero
        label="From the Spice Trail"
        title={<>Tales from<br />the Kitchen</>}
        subtitle="Stories, recipes, and behind-the-scenes insights from the world of Indian Kitchen."
        image="/images/real_interior.jpeg"
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
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/15 bg-void-light overflow-hidden gold-frame rounded-sm shadow-xl hover:shadow-[0_0_30px_rgba(200,135,42,0.15)] transition-all duration-500"
            >
              <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-void">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-gold text-void px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                  Featured Article
                </span>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[9px] tracking-[0.25em] uppercase text-gold mb-3 font-bold">
                  {featured.tag}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream mb-4 group-hover:text-gold transition-colors duration-300 uppercase leading-tight">
                  {featured.title}
                </h2>
                <p className="text-cream/60 font-sans font-light text-sm leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between text-[9px] text-text-muted uppercase tracking-[0.2em] font-bold pt-4 border-t border-cream/10">
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
              className="group bg-void-light border border-gold/15 overflow-hidden rounded-sm shadow-xl hover:border-gold hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-void shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover img-warm group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 bg-void-light border border-gold/25 text-gold px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest shadow-lg">
                    {post.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display text-xl md:text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-300 uppercase leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-cream/60 font-sans font-light text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[9px] text-text-muted uppercase tracking-[0.2em] font-bold pt-4 border-t border-cream/10">
                    <span>{post.date}</span>
                    <span className="text-gold group-hover:text-cream transition-colors duration-300">
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
