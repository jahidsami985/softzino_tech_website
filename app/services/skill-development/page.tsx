import { createPageMetadata } from "@/lib/seo";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { skillDevelopmentService } from "@/lib/service-detail-data";

export const metadata = createPageMetadata("/services/skill-development");

export default function SkillDevelopmentPage() {
  return <ServiceDetailPage data={skillDevelopmentService} />;
}
