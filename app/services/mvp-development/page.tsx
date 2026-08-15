import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { mvpDevelopmentService } from "@/lib/batch3-service-data";

export const metadata: Metadata = {
  title: `${mvpDevelopmentService.title} | Softzino Technologies`,
  description: mvpDevelopmentService.description,
};

export default function MvpDevelopmentPage() {
  return <BatchServicePage data={mvpDevelopmentService} />;
}
