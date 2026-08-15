import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { teamExtensionService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${teamExtensionService.title} | Softzino Technologies`,
  description: teamExtensionService.description,
};

export default function TeamExtensionPage() {
  return <BatchServicePage data={teamExtensionService} />;
}
