import type { Metadata } from "next";
import BatchServicePage from "@/components/BatchServicePage";
import { embeddedSystemsService } from "@/lib/batch3-service-data";

export const metadata: Metadata = {
  title: `${embeddedSystemsService.title} | Softzino Technologies`,
  description: embeddedSystemsService.description,
};

export default function EmbeddedSystemsPage() {
  return <BatchServicePage data={embeddedSystemsService} />;
}
