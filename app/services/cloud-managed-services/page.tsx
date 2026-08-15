import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudManagedServicesService } from "@/lib/batch2-service-data";

export const metadata: Metadata = {
  title: `${cloudManagedServicesService.title} | Softzino Technologies`,
  description: cloudManagedServicesService.description,
};

export default function CloudManagedServicesPage() {
  return <BatchServicePage data={cloudManagedServicesService} />;
}
