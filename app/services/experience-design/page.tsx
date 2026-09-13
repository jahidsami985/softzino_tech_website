import { createPageMetadata } from "@/lib/seo";
import BatchServicePage from "@/components/BatchServicePage";
import { experienceDesignService } from "@/lib/batch1-service-data";

export const metadata = createPageMetadata("/services/experience-design");

export default function ExperienceDesignPage() {
  return <BatchServicePage data={experienceDesignService} />;
}
