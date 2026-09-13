import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { embeddedSystemsService } from "@/lib/batch3-service-data";

export const metadata = createPageMetadata("/services/embedded-systems");

export default function EmbeddedSystemsPage() {
  return <BatchServicePage data={embeddedSystemsService} />;
}
