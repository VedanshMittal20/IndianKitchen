import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

// SSG configuration
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get 3 related posts
  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-cream pt-24 pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover img-warm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <span className="bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-forest/20 inline-block mb-6">
              {post.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4 drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-cream/80 text-sm font-sans">
              <span className="tracking-[0.1em] uppercase">{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
              <span className="tracking-[0.1em] uppercase">{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-wood hover:text-forest transition-colors link-underline pb-1">
            <ArrowLeft className="w-4 h-4" /> Back to All Stories
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-xl border border-wood/20">
          <div className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-p:text-text-muted prose-p:font-light prose-p:leading-relaxed prose-a:text-yellow prose-a:no-underline prose-a:border-b-2 prose-a:border-yellow/30 hover:prose-a:border-yellow prose-strong:text-forest prose-strong:font-medium prose-blockquote:border-wood prose-blockquote:bg-cream/50 prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:text-forest prose-blockquote:font-light prose-blockquote:not-italic prose-blockquote:py-4 max-w-none">
            {post.content}
          </div>
          
          {/* Share Block */}
          <div className="mt-16 pt-8 border-t border-wood/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="font-display text-2xl text-forest">Share this story</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-wood/30 flex items-center justify-center text-wood hover:bg-forest hover:text-cream hover:border-forest transition-all" aria-label="Share on Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-wood/30 flex items-center justify-center text-wood hover:bg-forest hover:text-cream hover:border-forest transition-all" aria-label="Share on Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/></svg>
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-forest">More from the Kitchen</h2>
              <div className="flex-1 h-px bg-wood/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white border border-wood/20 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover img-warm group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] text-wood uppercase tracking-[0.2em] font-sans font-medium block mb-2">
                      {related.tag}
                    </span>
                    <h3 className="font-display text-xl text-forest group-hover:text-yellow transition-colors line-clamp-2 leading-snug">
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
