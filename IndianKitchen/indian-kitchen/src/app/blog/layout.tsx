import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Indian Kitchen — Dispatches from the Spice Trail",
  description: "Stories, recipes, and behind-the-scenes from Indian Kitchen's immersive dining world.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
