import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { dataPlatformEngineeringService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/data-platform-engineering");

export default function DataPlatformEngineeringPage() {
  return <BatchServicePage data={dataPlatformEngineeringService} />;
}
