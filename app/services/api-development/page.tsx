import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { apiDevelopmentService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${apiDevelopmentService.title} | Softzino Technologies`,
  description: apiDevelopmentService.description,
};

export default function ApiDevelopmentPage() {
  return <BatchServicePage data={apiDevelopmentService} />;
}
