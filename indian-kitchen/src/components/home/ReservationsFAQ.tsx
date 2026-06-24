"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";

const faqItems = [
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, our menu features extensive vegetarian and vegan options. Please inform us of any specific allergies or dietary requirements when making your reservation."
  },
  {
    question: "What is the dress code?",
    answer: "Smart casual is recommended. For our Sherlock Mystery Dining, guests are welcome to dress to the Victorian theme, though it is not strictly required."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for all dine-in guests at our Colombo location."
  },
  {
    question: "How long is the Sherlock Mystery experience?",
    answer: "The interactive dining experience typically lasts 2 to 2.5 hours. We recommend arriving 15 minutes before your reserved time."
  }
];

export default function ReservationsFAQ() {
  return (
    <SectionShell variant="void" id="faq" className="border-t border-gold/10">
      <SectionHeader 
        label="Common Questions" 
        title="Before You Arrive" 
        subtitle="Everything you need to know to prepare for your journey with us."
        align="center"
        lightMode
      />
      <div className="mt-12">
        <FAQAccordion items={faqItems} />
      </div>
    </SectionShell>
  );
}
