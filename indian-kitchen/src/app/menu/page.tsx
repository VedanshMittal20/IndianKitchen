import MenuHero from "@/components/menu/MenuHero";
import TerrestrialSection from "@/components/menu/TerrestrialSection";
import AquaticSection from "@/components/menu/AquaticSection";

export default function MenuPage() {
  return (
    <div className="relative pt-[160px]">
      <MenuHero />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32 flex flex-col gap-32">
        <TerrestrialSection />
        <AquaticSection />
      </main>
    </div>
  );
}
