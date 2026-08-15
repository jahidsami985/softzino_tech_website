import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { applicationModernizationService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${applicationModernizationService.title} | Softzino Technologies`,
  description: applicationModernizationService.description,
};

export default function ApplicationModernizationPage() {
  return <BatchServicePage data={applicationModernizationService} />;
}
