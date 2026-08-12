import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Softzino Technologies",
  description: "Softzino Technologies terms and engagement overview.",
};

export default function TermsAndConditionsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Terms & Conditions"
      intro="These terms provide a high-level overview of how Softzino frames website use, consultation requests, and service discussions."
      sections={[
        {
          title: "Website Use",
          body: "The website content is provided for general informational purposes about Softzino services, products, and company capabilities.",
        },
        {
          title: "Service Engagements",
          body: "Specific project scope, pricing, delivery responsibilities, and acceptance terms are defined in written proposals or service agreements.",
        },
        {
          title: "Intellectual Property",
          body: "Softzino and client intellectual property rights are handled according to the written agreement for each engagement.",
        },
        {
          title: "Updates",
          body: "Softzino may update website content, service descriptions, or public policies as offerings and operations evolve.",
        },
      ]}
    />
  );
}
