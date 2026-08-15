import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { staffAugmentationService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${staffAugmentationService.title} | Softzino Technologies`,
  description: staffAugmentationService.description,
};

export default function StaffAugmentationPage() {
  return <BatchServicePage data={staffAugmentationService} />;
}
