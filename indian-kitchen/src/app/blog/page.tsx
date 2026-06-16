"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-parchment pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-sans tracking-[0.2em] uppercase text-sm mb-4">
            From the Spice Trail
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-crimson mb-6">
            Dispatches from the Spice Trail
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">
            Stories, recipes, and behind-the-scenes from the world of Indian Kitchen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-white border border-border-gold rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(200,135,42,0.06)] hover:shadow-[0_8px_30px_rgba(200,135,42,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.1] saturate-[1.1]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold text-void text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                    {post.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="font-display text-xl md:text-2xl text-crimson mb-3 group-hover:text-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-muted uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-gold">
                    <span className="text-sm font-medium text-terracotta group-hover:text-gold transition-colors uppercase tracking-wider">
                      Read the Full Story &rarr;
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
