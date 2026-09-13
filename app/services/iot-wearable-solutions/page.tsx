import { createPageMetadata } from "@/lib/seo";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { iotWearableService } from "@/lib/service-detail-data";

export const metadata = createPageMetadata("/services/iot-wearable-solutions");

export default function IoTWearableSolutionsPage() {
  return <ServiceDetailPage data={iotWearableService} />;
}
