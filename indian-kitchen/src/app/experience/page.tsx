import BrandIntro from "@/components/home/BrandIntro";
import OurCommitment from "@/components/home/OurCommitment";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Experience | Indian Kitchen",
  description:
    "Discover the Indian Kitchen philosophy — immersive theme dining with village-trained chefs and family-rooted recipes.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Our Philosophy"
        title="The Indian Kitchen Experience"
        subtitle="We don't serve food. We serve journeys — transporting you through India's culinary soul, one themed world at a time."
        image="/images/real_storefront.jpeg"
      />
      <BrandIntro compact />
      <OurCommitment />
    </>
  );
}
