import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { iotWearableService } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "IoT & Wearable Solutions | Softzino Technologies",
  description:
    "Connect physical devices, wearable products, cloud platforms, and analytics with Softzino's IoT engineering team.",
};

export default function IoTWearableSolutionsPage() {
  return <ServiceDetailPage data={iotWearableService} />;
}
