import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { dataMigrationService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${dataMigrationService.title} | Softzino Technologies`,
  description: dataMigrationService.description,
};

export default function DataMigrationPage() {
  return <BatchServicePage data={dataMigrationService} />;
}
