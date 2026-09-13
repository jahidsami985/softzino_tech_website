import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { staffAugmentationService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/staff-augmentation");

export default function StaffAugmentationPage() {
  return <BatchServicePage data={staffAugmentationService} />;
}
