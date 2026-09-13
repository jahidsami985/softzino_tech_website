import { createPageMetadata } from "@/lib/seo";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { mobileAppDevelopmentService } from "@/lib/service-detail-data";

export const metadata = createPageMetadata("/services/mobile-app-development");

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage data={mobileAppDevelopmentService} />;
}
