import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { devopsService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${devopsService.title} | Softzino Technologies`,
  description: devopsService.description,
};

export default function DevopsPage() {
  return <BatchServicePage data={devopsService} />;
}
