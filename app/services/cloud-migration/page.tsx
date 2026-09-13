import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudMigrationService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/cloud-migration");

export default function CloudMigrationPage() {
  return <BatchServicePage data={cloudMigrationService} />;
}
