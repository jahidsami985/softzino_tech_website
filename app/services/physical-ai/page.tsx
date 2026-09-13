import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { physicalAiService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/physical-ai");

export default function PhysicalAiPage() {
  return <BatchServicePage data={physicalAiService} />;
}
