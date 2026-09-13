import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { mvpDevelopmentService } from "@/lib/batch3-service-data";

export const metadata = createPageMetadata("/services/mvp-development");

export default function MvpDevelopmentPage() {
  return <BatchServicePage data={mvpDevelopmentService} />;
}
