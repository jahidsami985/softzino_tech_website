import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { mobileAppDevelopmentService } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Mobile App Development | Softzino Technologies",
  description:
    "Build high-performance native and cross-platform mobile apps with Softzino's mobile app development team.",
};

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage data={mobileAppDevelopmentService} />;
}
