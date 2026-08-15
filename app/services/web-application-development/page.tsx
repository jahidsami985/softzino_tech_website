import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { webApplicationDevelopmentService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${webApplicationDevelopmentService.title} | Softzino Technologies`,
  description: webApplicationDevelopmentService.description,
};

export default function WebApplicationDevelopmentPage() {
  return <BatchServicePage data={webApplicationDevelopmentService} />;
}
