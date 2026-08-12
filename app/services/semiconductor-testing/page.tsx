import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { semiconductorTestingService } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Semiconductor Testing | Softzino Technologies",
  description:
    "Advanced semiconductor validation, DFT, ATE engineering, and reliability testing services for next-generation silicon.",
};

export default function SemiconductorTestingPage() {
  return <ServiceDetailPage data={semiconductorTestingService} />;
}
