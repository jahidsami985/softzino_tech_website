import { createPageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import RecognitionSection from "@/components/about/RecognitionSection";
import {
  DedicatedTeamSection,
  DeveloperRolesSection,
  EngagementModelsSection,
  HireBenefitsSection,
  HireDevelopersHero,
  HiringProcessSection,
  TechnologyDevelopersSection,
  WhyBusinessesChooseSection,
} from "@/components/hire-developers/HireDevelopersCoreSections";
import HireDevelopersFaq from "@/components/hire-developers/HireDevelopersFaq";
import HireDevelopersLeadSection from "@/components/hire-developers/HireDevelopersLeadSection";
import {
  DevelopmentExpertiseSection,
  HireDevelopersCta,
  IndustriesSection,
  WorkflowSection,
} from "@/components/hire-developers/HireDevelopersSupportSections";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = createPageMetadata("/hire-developers");

export default function HireDevelopersPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="Hire Developers" schemaPath="/hire-developers" />
      </div>

      <HireDevelopersHero />
      <WhyBusinessesChooseSection />
      <TechnologyDevelopersSection />
      <DeveloperRolesSection />
      <DedicatedTeamSection />
      <HireBenefitsSection />
      <EngagementModelsSection />
      <HiringProcessSection />
      <DevelopmentExpertiseSection />
      <IndustriesSection />
      <WorkflowSection />
      <TestimonialsSection />
      <RecognitionSection />
      <HireDevelopersFaq />
      <HireDevelopersCta />
      <HireDevelopersLeadSection />
    </>
  );
}
