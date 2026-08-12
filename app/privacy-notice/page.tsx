import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Notice | Softzino Technologies",
  description: "Softzino Technologies privacy notice and data handling overview.",
};

export default function PrivacyNoticePage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Privacy Notice"
      intro="This page summarizes how Softzino approaches privacy, confidentiality, and responsible handling of business information."
      sections={[
        {
          title: "Information We Handle",
          body: "We may receive contact details, project requirements, company context, and technical materials when clients request services or consultations.",
        },
        {
          title: "How We Use Information",
          body: "Information is used to respond to inquiries, scope engagements, provide services, and maintain clear communication with clients and partners.",
        },
        {
          title: "Protection Practices",
          body: "We apply practical security controls, limited access, and confidentiality-minded workflows when handling client information.",
        },
        {
          title: "Your Requests",
          body: "Clients can contact Softzino to update, correct, or request details about information shared with our team.",
        },
      ]}
    />
  );
}
