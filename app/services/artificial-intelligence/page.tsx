import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { artificialIntelligenceService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${artificialIntelligenceService.title} | Softzino Technologies`,
  description: artificialIntelligenceService.description,
};

export default function ArtificialIntelligencePage() {
  return <BatchServicePage data={artificialIntelligenceService} />;
}
