import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { devopsService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/devops");

export default function DevopsPage() {
  return <BatchServicePage data={devopsService} />;
}
