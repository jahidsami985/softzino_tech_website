import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { productManagementService } from "@/lib/batch3-service-data";

export const metadata = createPageMetadata("/services/product-management");

export default function ProductManagementPage() {
  return <BatchServicePage data={productManagementService} />;
}
