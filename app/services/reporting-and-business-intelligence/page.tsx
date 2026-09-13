import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { reportingBusinessIntelligenceService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/reporting-and-business-intelligence");

export default function ReportingAndBusinessIntelligencePage() {
  return <BatchServicePage data={reportingBusinessIntelligenceService} />;
}
