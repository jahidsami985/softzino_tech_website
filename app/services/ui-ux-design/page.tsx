import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { uiUxDesignService } from "@/lib/batch3-service-data";

export const metadata: Metadata = {
  title: `${uiUxDesignService.title} | Softzino Technologies`,
  description: uiUxDesignService.description,
};

export default function UiUxDesignPage() {
  return <BatchServicePage data={uiUxDesignService} />;
}
