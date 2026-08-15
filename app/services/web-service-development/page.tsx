import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { webServiceDevelopmentService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${webServiceDevelopmentService.title} | Softzino Technologies`,
  description: webServiceDevelopmentService.description,
};

export default function WebServiceDevelopmentPage() {
  return <BatchServicePage data={webServiceDevelopmentService} />;
}
