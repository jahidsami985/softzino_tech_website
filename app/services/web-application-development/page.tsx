import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { webApplicationDevelopmentService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/web-application-development");

export default function WebApplicationDevelopmentPage() {
  return <BatchServicePage data={webApplicationDevelopmentService} />;
}
