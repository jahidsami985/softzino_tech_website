import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Imprint / Impressum | Softzino Technologies",
  description: "Softzino Technologies company imprint and office information.",
};

export default function ImprintPage() {
  return (
    <InfoPage
      eyebrow="Company"
      title="Imprint / Impressum"
      intro="Reference information for Softzino Technologies offices and company contact paths."
      sections={[
        {
          title: "Singapore Office",
          body: "10 Anson Road, #22-02 International Plaza, Singapore 079903.",
        },
        {
          title: "Dhaka Office",
          body: "House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh.",
        },
        {
          title: "Business Inquiries",
          body: "For business or partnership inquiries, use the consultation and contact forms linked throughout the website.",
        },
        {
          title: "Company Materials",
          body: "Brand, press, and partnership materials can be requested directly from the Softzino team.",
        },
      ]}
    />
  );
}
