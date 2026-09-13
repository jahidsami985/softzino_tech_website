import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudConsultingService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/cloud-consulting");

export default function CloudConsultingPage() {
  return <BatchServicePage data={cloudConsultingService} />;
}
