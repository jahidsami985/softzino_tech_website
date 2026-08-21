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
          title: "Head Office Bangladesh",
          body: "23, Tropical Akhand Tower (Level # 03 & 04), Garib-e-Newaz Ave, Sector # 11, Uttara, Dhaka - 1230.",
        },
        {
          title: "Singapore Office",
          body: "60 Paya Lebar Raod, # 06 - 33, Paya Lebar Square, Singapore 409051.",
        },
        {
          title: "USA Office",
          body: "92 Cabot Ave, Santa Clara, CA 95051, USA.",
        },
        {
          title: "Australia Office",
          body: "3/23 Hull Street, Hawthorn 3122, Australia.",
        },
        {
          title: "Business Inquiries",
          body: "Phone: +880 1855 25 53 42. Email: info@softzino.com. Website: www.softzino.com.",
        },
        {
          title: "Company Materials",
          body: "Brand, press, and company-profile materials can be requested directly from the Softzino team.",
        },
      ]}
    />
  );
}
