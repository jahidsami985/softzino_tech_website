import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { physicalAiService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${physicalAiService.title} | Softzino Technologies`,
  description: physicalAiService.description,
};

export default function PhysicalAiPage() {
  return <BatchServicePage data={physicalAiService} />;
}
