import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { pluginDevelopmentService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/plugin-development");

export default function PluginDevelopmentPage() {
  return <BatchServicePage data={pluginDevelopmentService} />;
}
