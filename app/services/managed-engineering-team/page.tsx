import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { managedEngineeringTeamService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/managed-engineering-team");

export default function ManagedEngineeringTeamPage() {
  return <BatchServicePage data={managedEngineeringTeamService} />;
}
