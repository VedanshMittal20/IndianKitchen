import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import HomeThemesStrip from "@/components/home/HomeThemesStrip";
import HomeMenuCategories from "@/components/home/HomeMenuCategories";
import HomeSignaturePreview from "@/components/home/HomeSignaturePreview";
import HomeCommitmentStrip from "@/components/home/HomeCommitmentStrip";
import HomeGallery from "@/components/home/HomeGallery";
import Testimonials from "@/components/home/Testimonials";
import MenuQRSection from "@/components/home/MenuQRSection";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <HomeThemesStrip />
      <HomeMenuCategories />
      <HomeSignaturePreview />
      <HomeCommitmentStrip />
      <HomeGallery />
      <Testimonials />
      <MenuQRSection />
      <HomeCTA />
    </>
  );
}
