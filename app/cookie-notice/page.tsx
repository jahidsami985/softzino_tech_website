import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Cookie Notice | Softzino Technologies",
  description: "Softzino Technologies cookie notice and preference overview.",
};

export default function CookieNoticePage() {
  return (
    <InfoPage
      eyebrow="Cookies"
      title="Cookie Notice"
      intro="This page explains the intended cookie and preference approach for the Softzino website."
      sections={[
        {
          title: "Essential Cookies",
          body: "Essential cookies may be used to support core website behavior, security, and user preference handling.",
        },
        {
          title: "Analytics",
          body: "Analytics tools, when enabled, help Softzino understand site performance and improve content for visitors.",
        },
        {
          title: "Preferences",
          body: "Cookie preference controls can be expanded as analytics or marketing tools are connected to the website.",
        },
        {
          title: "Third Parties",
          body: "Some embedded services or deployment tools may set their own cookies according to their respective policies.",
        },
      ]}
    />
  );
}
