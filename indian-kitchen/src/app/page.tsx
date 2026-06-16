import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import HomeThemesStrip from "@/components/home/HomeThemesStrip";
import HomeCommitmentStrip from "@/components/home/HomeCommitmentStrip";
import HomeSignaturePreview from "@/components/home/HomeSignaturePreview";
import HomeBentoGrid from "@/components/home/HomeBentoGrid";
import Testimonials from "@/components/home/Testimonials";
import MenuQRSection from "@/components/home/MenuQRSection";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <HomeThemesStrip />
      <HomeCommitmentStrip />
      <HomeSignaturePreview />
      <Testimonials />
      <HomeBentoGrid />
      <MenuQRSection />
      <HomeCTA />
    </>
  );
}
