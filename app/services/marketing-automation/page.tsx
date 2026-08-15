import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { marketingAutomationService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${marketingAutomationService.title} | Softzino Technologies`,
  description: marketingAutomationService.description,
};

export default function MarketingAutomationPage() {
  return <BatchServicePage data={marketingAutomationService} />;
}
