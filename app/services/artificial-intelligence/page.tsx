import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { artificialIntelligenceService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/artificial-intelligence");

export default function ArtificialIntelligencePage() {
  return <BatchServicePage data={artificialIntelligenceService} />;
}
