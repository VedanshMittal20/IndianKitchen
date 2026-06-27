import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-headline-md text-headline-md mb-4">Story Not Found</h1>
      <p className="text-on-surface-variant mb-8 max-w-md">
        This tale from the kitchen doesn&apos;t exist yet. Browse our other stories instead.
      </p>
      <Link
        href="/blog"
        className="btn-primary"
      >
        Back to Blog
      </Link>
    </main>
  );
}
