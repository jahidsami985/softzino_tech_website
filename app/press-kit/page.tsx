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
          body: "Softzino Technologies builds custom software, cloud, data, product engineering, and technical talent solutions for global organizations.",
        },
        {
          title: "Service Areas",
          body: "Core capabilities include product engineering, digital transformation, cloud engineering, data analytics, consultancy, and co-creation teams.",
        },
        {
          title: "Office Locations",
          body: "Softzino operates with office presence in Singapore and Dhaka, supporting clients across global delivery models.",
        },
        {
          title: "Media Requests",
          body: "Contact the Softzino team for official logos, executive bios, case studies, or interview coordination.",
        },
      ]}
    />
  );
}
