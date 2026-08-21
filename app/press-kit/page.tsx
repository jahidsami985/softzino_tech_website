import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Press Kit | Softzino Technologies",
  description: "Softzino Technologies press kit and media information.",
};

export default function PressKitPage() {
  return (
    <InfoPage
      eyebrow="Media"
      title="Press Kit"
      intro="A quick reference page for media, partner, and company-profile requests related to Softzino Technologies."
      sections={[
        {
          title: "Company Overview",
          body: "Softzino Technologies is a Bangladesh-based software development company founded in 2015 with a diverse team of 100+ skilled professionals.",
        },
        {
          title: "Service Areas",
          body: "Core capabilities include custom software development, web and mobile app development, WordPress development, UI/UX design, QA and testing, and enterprise solutions such as ERP and POS systems.",
        },
        {
          title: "Office Locations",
          body: "Softzino lists offices in Bangladesh, Singapore, the USA, and Australia, and serves clients across the USA, Denmark, Japan, and Malaysia.",
        },
        {
          title: "Media Requests",
          body: "Contact the Softzino team for official logos, executive bios, case studies, or interview coordination.",
        },
      ]}
    />
  );
}
