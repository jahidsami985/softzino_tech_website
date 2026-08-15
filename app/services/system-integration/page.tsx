import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { systemIntegrationService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${systemIntegrationService.title} | Softzino Technologies`,
  description: systemIntegrationService.description,
};

export default function SystemIntegrationPage() {
  return <BatchServicePage data={systemIntegrationService} />;
}
