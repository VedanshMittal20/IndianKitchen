import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import BlogContent from "@/components/blog/BlogContent";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
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
    <main className="min-h-screen bg-surface-container-lowest text-on-surface">
      {/* Sticky Reading Progress Indicator */}
      <ReadingProgressBar />

      {/* Hero Header */}
      <div className="relative w-full h-[50vh] md:h-[65vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover img-warm"
          priority
        />
        <div className="absolute inset-0 bg-surface-container-lowest/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/10" />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-12 md:pb-16 z-10">
          <div className="container mx-auto max-w-4xl">
            <span className="bg-saffron-gold text-on-surface text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4 shadow-lg">
              {post.tag}
            </span>
            <h1 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-6 uppercase tracking-wide">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-on-surface/70 text-[9px] font-body-md uppercase tracking-[0.15em] font-bold">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-gold" />
              <span>{post.readTime}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-gold" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Section */}
      <SectionShell variant="void" className="pt-10 md:pt-14 pb-24">
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] font-body-md font-bold tracking-[0.25em] uppercase text-brand-golden hover:text-on-surface transition-colors link-underline pb-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Chronicles
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-surface-container-low p-6 md:p-14 shadow-2xl border border-outline-variant/30 rounded-sm">
          <BlogContent content={post.content} />

          <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-6">
            <h3 className="font-headline-md text-xl text-on-surface uppercase tracking-wide">Share this story</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://indiankitchen.lk/blog/${slug}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-brand-golden hover:bg-saffron-gold hover:text-on-surface hover:border-saffron-gold transition-all duration-300 shadow-md"
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
                className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-brand-golden hover:bg-saffron-gold hover:text-on-surface hover:border-saffron-gold transition-all duration-300 shadow-md"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-28 border-t border-outline-variant/30 pt-16">
            <SectionHeader label="Recommendations" title="More from the Kitchen" lightMode className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-xl hover:border-saffron-gold hover:-translate-y-1 transition-all duration-300 rounded-sm"
                >
                  <div className="relative h-44 overflow-hidden bg-surface-container-lowest">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover img-warm group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[8px] text-brand-golden uppercase tracking-[0.2em] font-body-md font-bold block mb-2">
                      {related.tag}
                    </span>
                    <h3 className="font-headline-md text-xl text-on-surface group-hover:text-brand-golden transition-colors duration-300 uppercase leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </SectionShell>
    </main>
  );
}
