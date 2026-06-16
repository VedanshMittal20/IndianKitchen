import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import BrandIntro from "@/components/home/BrandIntro";
import ThemesShowcase from "@/components/home/ThemesShowcase";
import SignatureDishes from "@/components/home/SignatureDishes";
import MenuQRSection from "@/components/home/MenuQRSection";
import OurCommitment from "@/components/home/OurCommitment";
import PrivateDining from "@/components/home/PrivateDining";
import ReservationForm from "@/components/home/ReservationForm";
import SocialMedia from "@/components/home/SocialMedia";
import Testimonials from "@/components/home/Testimonials";
import FindUs from "@/components/home/FindUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <BrandIntro />
      <ThemesShowcase />
      <SignatureDishes />
      <MenuQRSection />
      <OurCommitment />
      <PrivateDining />
      <ReservationForm />
      <SocialMedia />
      <Testimonials />
      <FindUs />
    </>
  );
}
