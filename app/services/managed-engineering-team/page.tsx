import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { managedEngineeringTeamService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${managedEngineeringTeamService.title} | Softzino Technologies`,
  description: managedEngineeringTeamService.description,
};

export default function ManagedEngineeringTeamPage() {
  return <BatchServicePage data={managedEngineeringTeamService} />;
}
