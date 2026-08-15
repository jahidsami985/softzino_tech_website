import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { forwardDeployedAiEngineeringService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${forwardDeployedAiEngineeringService.title} | Softzino Technologies`,
  description: forwardDeployedAiEngineeringService.description,
};

export default function ForwardDeployedAiEngineeringPage() {
  return <BatchServicePage data={forwardDeployedAiEngineeringService} />;
}
