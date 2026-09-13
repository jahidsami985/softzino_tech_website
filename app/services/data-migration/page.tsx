import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { dataMigrationService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/data-migration");

export default function DataMigrationPage() {
  return <BatchServicePage data={dataMigrationService} />;
}
