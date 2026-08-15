import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { dataStrategyGovernanceService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${dataStrategyGovernanceService.title} | Softzino Technologies`,
  description: dataStrategyGovernanceService.description,
};

export default function DataStrategyAndGovernancePage() {
  return <BatchServicePage data={dataStrategyGovernanceService} />;
}
