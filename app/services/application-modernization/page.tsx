import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { applicationModernizationService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/application-modernization");

export default function ApplicationModernizationPage() {
  return <BatchServicePage data={applicationModernizationService} />;
}
