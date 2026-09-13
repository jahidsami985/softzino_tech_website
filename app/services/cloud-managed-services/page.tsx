import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { cloudManagedServicesService } from "@/lib/batch2-service-data";

export const metadata = createPageMetadata("/services/cloud-managed-services");

export default function CloudManagedServicesPage() {
  return <BatchServicePage data={cloudManagedServicesService} />;
}
