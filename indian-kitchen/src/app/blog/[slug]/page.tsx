import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | Indian Kitchen" };
  }

  return {
    title: `${post.title} | Indian Kitchen Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-parchment pt-24 pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover sepia-[0.1] saturate-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-void/30 to-void/50" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block bg-gold text-void text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
              {post.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4 drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-cream/80 text-sm">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            // Handle blockquotes
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-gold pl-6 py-2 my-8 italic text-xl font-display text-crimson/90"
                >
                  {paragraph.replace("> ", "").replace(/"/g, "")}
                </blockquote>
              );
            }

            return (
              <p
                key={i}
                className="text-text-dark/90 text-lg leading-relaxed mb-6 font-light"
              >
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-border-gold flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-crimson/20 flex items-center justify-center">
            <span className="font-display text-2xl text-crimson">IK</span>
          </div>
          <div>
            <p className="font-medium text-text-dark text-lg">{post.author}</p>
            <p className="text-text-muted text-sm">
              Stories from the heart of Indian Kitchen&apos;s immersive dining world.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-crimson mb-12">
            Continue the Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block bg-white border border-border-gold rounded-sm overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.1] saturate-[1.1]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    {related.tag}
                  </span>
                  <h3 className="font-display text-lg text-crimson mt-2 group-hover:text-terracotta transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
