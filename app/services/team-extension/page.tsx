import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { teamExtensionService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/team-extension");

export default function TeamExtensionPage() {
  return <BatchServicePage data={teamExtensionService} />;
}
