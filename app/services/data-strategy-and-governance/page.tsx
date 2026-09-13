import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { dataStrategyGovernanceService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/data-strategy-and-governance");

export default function DataStrategyAndGovernancePage() {
  return <BatchServicePage data={dataStrategyGovernanceService} />;
}
