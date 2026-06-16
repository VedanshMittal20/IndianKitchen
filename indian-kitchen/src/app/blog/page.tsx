"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import PageHero from "@/components/ui/PageHero";

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-cream text-espresso">
      <PageHero
        label="From the Spice Trail"
        title="Tales from the Kitchen"
        subtitle="Stories, recipes, and behind-the-scenes from the world of Indian Kitchen."
        image="/images/real_interior.jpeg"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Featured post */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 md:mb-16"
          >
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-terracotta/20 bg-parchment overflow-hidden rounded-[32px] shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden bg-cream">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-105 will-change-transform"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-parchment border border-terracotta/20 overflow-hidden rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-52 overflow-hidden bg-cream">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover img-warm group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 bg-cream text-espresso px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider shadow-sm">
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
