import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { forwardDeployedAiEngineeringService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/forward-deployed-ai-engineering");

export default function ForwardDeployedAiEngineeringPage() {
  return <BatchServicePage data={forwardDeployedAiEngineeringService} />;
}
