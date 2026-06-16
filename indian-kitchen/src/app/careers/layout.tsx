import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Indian Kitchen — Join the World-Builders",
  description:
    "Join Indian Kitchen's team of storytellers, chefs, and hosts. View current openings in Colombo and Kandy.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
