import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { productManagementService } from "@/lib/batch3-service-data";

export const metadata: Metadata = {
  title: `${productManagementService.title} | Softzino Technologies`,
  description: productManagementService.description,
};

export default function ProductManagementPage() {
  return <BatchServicePage data={productManagementService} />;
}
