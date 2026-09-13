import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { uiUxDesignService } from "@/lib/batch3-service-data";

export const metadata = createPageMetadata("/services/ui-ux-design");

export default function UiUxDesignPage() {
  return <BatchServicePage data={uiUxDesignService} />;
}
