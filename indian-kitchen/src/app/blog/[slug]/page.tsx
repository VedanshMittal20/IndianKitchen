import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import BlogContent from "@/components/blog/BlogContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | Indian Kitchen" };
  return {
    title: `${post.title} | Indian Kitchen Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="relative w-full h-[45vh] md:h-[55vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover img-warm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-espresso/20" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="container mx-auto max-w-4xl">
            <span className="bg-saffron/90 text-espresso text-[9px] font-bold uppercase tracking-wider px-3 py-1 inline-block mb-4">
              {post.tag}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-cream/75 text-[10px] font-sans uppercase tracking-wider">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-saffron" />
              <span>{post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-saffron" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta hover:text-espresso transition-colors link-underline pb-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Stories
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white p-7 md:p-12 shadow-lg border border-terracotta/12">
          <BlogContent content={post.content} />

          <div className="mt-12 pt-6 border-t border-terracotta/15 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="font-display text-xl text-espresso">Share this story</h3>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://indiankitchen.lk/blog/${slug}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta hover:bg-espresso hover:text-cream hover:border-espresso transition-all"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta hover:bg-espresso hover:text-cream hover:border-espresso transition-all"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-14 md:mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-2xl md:text-3xl text-espresso">More from the Kitchen</h2>
              <div className="flex-1 h-px bg-terracotta/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white border border-terracotta/12 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover img-warm group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] text-terracotta uppercase tracking-[0.2em] font-sans font-medium block mb-1.5">
                      {related.tag}
                    </span>
                    <h3 className="font-display text-lg text-espresso group-hover:text-saffron transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
