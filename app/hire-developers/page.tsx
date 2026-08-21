import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Hire Developers | Softzino Technologies",
  description:
    "Hire skilled developers from Softzino Technologies for web, mobile, UI/UX, QA, cloud, and enterprise software projects.",
};

export default function HireDevelopersPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="Hire Developers" />
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
