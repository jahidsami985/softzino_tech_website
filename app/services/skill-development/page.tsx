import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { skillDevelopmentService } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Skill Development | Softzino Technologies",
  description:
    "Upskill engineering teams through technical training, agile coaching, leadership development, and AI adoption workshops.",
};

export default function SkillDevelopmentPage() {
  return <ServiceDetailPage data={skillDevelopmentService} />;
}
