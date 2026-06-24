import ReservationForm from "@/components/home/ReservationForm";
import PrivateDining from "@/components/home/PrivateDining";
import ReservationsFAQ from "@/components/home/ReservationsFAQ";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations | Indian Kitchen",
  description:
    "Reserve your table at Indian Kitchen — book Pondicherry Street, Kerala Houseboat, or Sherlock Mystery Dining.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        label="Book Your Table"
        title={<>Reserve Your<br />Journey</>}
        subtitle="Secure your passport to an immersive culinary experience. We recommend booking in advance, especially for Sherlock Mystery Dining."
        image="/images/real/gallery_6.jpg"
      />
      <ReservationForm showHeader={false} />
      <PrivateDining />
      <ReservationsFAQ />
    </>
  );
}
