import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { apiDevelopmentService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/api-development");

export default function ApiDevelopmentPage() {
  return <BatchServicePage data={apiDevelopmentService} />;
}
