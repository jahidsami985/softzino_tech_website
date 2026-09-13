import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { systemIntegrationService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/system-integration");

export default function SystemIntegrationPage() {
  return <BatchServicePage data={systemIntegrationService} />;
}
