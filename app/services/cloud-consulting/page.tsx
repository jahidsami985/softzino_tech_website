import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudConsultingService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${cloudConsultingService.title} | Softzino Technologies`,
  description: cloudConsultingService.description,
};

export default function CloudConsultingPage() {
  return <BatchServicePage data={cloudConsultingService} />;
}
