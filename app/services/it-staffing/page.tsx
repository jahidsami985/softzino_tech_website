import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { itStaffingService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/it-staffing");

export default function ItStaffingPage() {
  return <BatchServicePage data={itStaffingService} />;
}
