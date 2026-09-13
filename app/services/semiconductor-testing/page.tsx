import { createPageMetadata } from "@/lib/seo";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { semiconductorTestingService } from "@/lib/service-detail-data";

export const metadata = createPageMetadata("/services/semiconductor-testing");

export default function SemiconductorTestingPage() {
  return <ServiceDetailPage data={semiconductorTestingService} />;
}
