"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-paper text-text-dark">
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-paper border-b border-sage/10">
        <div className="absolute inset-0 opacity-[0.12]">
          <Image src="/images/slide_7.png" alt="" fill className="object-cover object-top" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sage font-sans tracking-[0.25em] uppercase text-[10px] mb-4 pipe-item inline-block">
              From the Spice Trail
            </p>
            <h1 className="heading-presentation mb-4">Tales from the Kitchen</h1>
            <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg font-light">
              Stories, recipes, and behind-the-scenes from the world of Indian Kitchen.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Featured post */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 md:mb-16"
          >
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-terracotta/15 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden bg-parchment">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-saffron text-espresso px-3 py-1 text-[9px] font-medium uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta mb-3">
                  {featured.tag}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-espresso mb-4 group-hover:text-saffron transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] text-text-muted uppercase tracking-wider">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
          {rest.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="group bg-white border border-terracotta/12 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-52 overflow-hidden bg-parchment">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover img-warm group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 bg-cream/90 backdrop-blur-sm text-espresso px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider">
                    {post.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="font-display text-xl text-espresso mb-2 group-hover:text-saffron transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-text-muted uppercase tracking-wider pt-3 border-t border-terracotta/10">
                    <span>{post.date}</span>
                    <span className="text-espresso group-hover:text-saffron transition-colors">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
