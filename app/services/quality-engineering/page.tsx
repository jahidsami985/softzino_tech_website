import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { qualityEngineeringService } from "@/lib/batch3-service-data";

export const metadata = createPageMetadata("/services/quality-engineering");

export default function QualityEngineeringPage() {
  return <BatchServicePage data={qualityEngineeringService} />;
}
