import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { marketingAutomationService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/marketing-automation");

export default function MarketingAutomationPage() {
  return <BatchServicePage data={marketingAutomationService} />;
}
