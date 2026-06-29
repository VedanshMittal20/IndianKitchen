import FindUs from "@/components/home/FindUs";
import SocialMedia from "@/components/home/SocialMedia";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Indian Kitchen",
  description:
    "Find Indian Kitchen in Colombo. View opening hours, get directions, and connect with us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Visit Us"
        title="Find the Experience"
        subtitle="357 R.A. De Mel Mawatha, Colombo 00300 — open daily from 12:30 PM. Late nights on Fridays and Saturdays."
        image="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real/colombo_ceremony"
      />
      <FindUs />
      <SocialMedia />
    </>
  );
}
