import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { dedicatedDevelopmentTeamService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/dedicated-development-team");

export default function DedicatedDevelopmentTeamPage() {
  return <BatchServicePage data={dedicatedDevelopmentTeamService} />;
}
