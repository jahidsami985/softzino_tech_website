import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { pluginDevelopmentService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${pluginDevelopmentService.title} | Softzino Technologies`,
  description: pluginDevelopmentService.description,
};

export default function PluginDevelopmentPage() {
  return <BatchServicePage data={pluginDevelopmentService} />;
}
