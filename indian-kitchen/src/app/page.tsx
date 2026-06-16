import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import HomeFounderNote from "@/components/home/HomeFounderNote";
import HomeThemesStrip from "@/components/home/HomeThemesStrip";
import HomeChefPhilosophy from "@/components/home/HomeChefPhilosophy";
import HomeCommitmentStrip from "@/components/home/HomeCommitmentStrip";
import HomeSignaturePreview from "@/components/home/HomeSignaturePreview";
import HomeBentoGrid from "@/components/home/HomeBentoGrid";
import HomePressAwards from "@/components/home/HomePressAwards";
import Testimonials from "@/components/home/Testimonials";
import MenuQRSection from "@/components/home/MenuQRSection";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <HomeFounderNote />
      <HomeThemesStrip />
      <HomeChefPhilosophy />
      <HomeCommitmentStrip />
      <HomeSignaturePreview />
      <HomeBentoGrid />
      <HomePressAwards />
      <Testimonials />
      <MenuQRSection />
      <HomeNewsletter />
      <HomeCTA />
    </>
  );
}
