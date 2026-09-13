import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { webServiceDevelopmentService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/web-service-development");

export default function WebServiceDevelopmentPage() {
  return <BatchServicePage data={webServiceDevelopmentService} />;
}
