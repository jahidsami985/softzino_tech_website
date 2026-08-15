import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { qualityEngineeringService } from "@/lib/batch3-service-data";

export const metadata: Metadata = {
  title: `${qualityEngineeringService.title} | Softzino Technologies`,
  description: qualityEngineeringService.description,
};

export default function QualityEngineeringPage() {
  return <BatchServicePage data={qualityEngineeringService} />;
}
