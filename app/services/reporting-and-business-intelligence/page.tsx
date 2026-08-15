import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { reportingBusinessIntelligenceService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${reportingBusinessIntelligenceService.title} | Softzino Technologies`,
  description: reportingBusinessIntelligenceService.description,
};

export default function ReportingAndBusinessIntelligencePage() {
  return <BatchServicePage data={reportingBusinessIntelligenceService} />;
}
