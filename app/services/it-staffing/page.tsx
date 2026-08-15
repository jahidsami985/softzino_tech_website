import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { itStaffingService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${itStaffingService.title} | Softzino Technologies`,
  description: itStaffingService.description,
};

export default function ItStaffingPage() {
  return <BatchServicePage data={itStaffingService} />;
}
