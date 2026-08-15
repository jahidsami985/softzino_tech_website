import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { dataPlatformEngineeringService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${dataPlatformEngineeringService.title} | Softzino Technologies`,
  description: dataPlatformEngineeringService.description,
};

export default function DataPlatformEngineeringPage() {
  return <BatchServicePage data={dataPlatformEngineeringService} />;
}
