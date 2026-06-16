import ThemesShowcase from "@/components/home/ThemesShowcase";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Themes | Indian Kitchen",
  description:
    "Explore Pondicherry Street, Kerala Houseboat, and Sherlock Mystery Dining — three immersive worlds across Colombo and Kandy.",
};

export default function ThemesPage() {
  return (
    <>
      <PageHero
        label="Immersive Worlds"
        title="Three Themed Dining Experiences"
        subtitle="Each outlet is a painstakingly crafted universe — from Indo-French nostalgia to Victorian mystery."
        image="/images/real_interior.jpeg"
      />
      <ThemesShowcase />
    </>
  );
}
