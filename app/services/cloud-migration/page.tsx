import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudMigrationService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${cloudMigrationService.title} | Softzino Technologies`,
  description: cloudMigrationService.description,
};

export default function CloudMigrationPage() {
  return <BatchServicePage data={cloudMigrationService} />;
}
