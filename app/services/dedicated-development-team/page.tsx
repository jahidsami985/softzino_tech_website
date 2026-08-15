import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { dedicatedDevelopmentTeamService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${dedicatedDevelopmentTeamService.title} | Softzino Technologies`,
  description: dedicatedDevelopmentTeamService.description,
};

export default function DedicatedDevelopmentTeamPage() {
  return <BatchServicePage data={dedicatedDevelopmentTeamService} />;
}
