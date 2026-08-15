import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { experienceDesignService } from "@/lib/batch1-service-data";

export const metadata: Metadata = {
  title: `${experienceDesignService.title} | Softzino Technologies`,
  description: experienceDesignService.description,
};

export default function ExperienceDesignPage() {
  return <BatchServicePage data={experienceDesignService} />;
}
