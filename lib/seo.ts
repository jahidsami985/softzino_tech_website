import type { Metadata } from "next";
import {
  defaultOgImage,
  productionOrigin,
  siteName,
} from "@/lib/site-config.mjs";
import { isSearchIndexingAllowed } from "@/lib/indexing.mjs";

export { defaultOgImage, isSearchIndexingAllowed, productionOrigin, siteName };

export type SeoEntry = {
  title: string;
  description: string;
  image?: string;
};

export const robotsMeta = isSearchIndexingAllowed()
  ? { index: true, follow: true }
  : { index: false, follow: false };

export const pageSeo: Record<string, SeoEntry> = {
  "/": {
    title: "Software Development Company | Softzino Technologies",
    description:
      "Softzino Technologies builds custom software, cloud, AI, data, and dedicated engineering teams for startups and enterprises.",
    image: "/img1/homepage-banner.jpeg",
  },
  "/about": {
    title: "About Softzino Technologies | Software Engineering Company",
    description:
      "Learn about Softzino Technologies, its software engineering services, delivery approach, and company information.",
    image: "/img1/planning-session.jpeg",
  },
  "/services": {
    title: "Software Development Services | Softzino Technologies",
    description:
      "Explore Softzino's software development, cloud, data, AI, QA, mobile, web, and dedicated engineering team services.",
    image: "/img1/team-desks.jpeg",
  },
  "/hire-developers": {
    title: "Hire Developers | Dedicated Software Engineers | Softzino",
    description:
      "Hire vetted frontend, backend, mobile, QA, DevOps, and full-stack developers from Softzino for flexible team scaling.",
    image: "/images/hiring-process.png",
  },
  "/off-the-shelf-solutions": {
    title: "Business Software Solutions | ERP, POS, EdTech | Softzino",
    description:
      "Explore Softzino portfolio solutions including ERP, POS, education, and automotive workflow products built for real businesses.",
    image: "/images/solutions-erp-wide.png",
  },
  "/solutions/custom-software-solutions": {
    title: "Custom Software Development Company | Softzino",
    description:
      "Build secure, scalable software around your business requirements. Softzino provides end-to-end custom software development, testing, deployment and support.",
    image: "/img1/planning-session.jpeg",
  },
  "/services/api-development": {
    title: "API Development Company | Secure API Services | Softzino",
    description:
      "Build secure, scalable APIs and integrations for SaaS products, enterprise systems, partners, and internal platforms.",
  },
  "/services/application-modernization": {
    title: "Application Modernization Services | Softzino Technologies",
    description:
      "Modernize legacy applications with cloud-ready architecture, refactoring, integration, performance improvement, and delivery planning.",
  },
  "/services/artificial-intelligence": {
    title: "AI Development Company | Custom AI Solutions | Softzino",
    description:
      "Build custom AI, machine learning, generative AI, chatbot, NLP, and computer vision solutions for real business workflows.",
  },
  "/services/cloud-consulting": {
    title: "Cloud Consulting Services | AWS, Azure, GCP | Softzino",
    description:
      "Plan secure, scalable cloud architecture, migration, cost optimization, and operating models across AWS, Azure, and GCP.",
  },
  "/services/cloud-managed-services": {
    title: "Cloud Managed Services | Monitoring & Reliability | Softzino",
    description:
      "Keep cloud environments secure, reliable, backed up, monitored, and optimized with Softzino managed cloud services.",
  },
  "/services/cloud-migration": {
    title: "Cloud Migration Services | Softzino Technologies",
    description:
      "Move applications, data, and workloads to the cloud with migration planning, execution, validation, and risk control.",
  },
  "/services/data-migration": {
    title: "Data Migration Services | Secure Data Transfer | Softzino",
    description:
      "Migrate, cleanse, map, and validate business data across modern platforms while protecting integrity and continuity.",
  },
  "/services/data-platform-engineering": {
    title: "Data Engineering Services | Data Platforms | Softzino",
    description:
      "Design scalable data platforms, warehouses, lakes, pipelines, and real-time analytics foundations with Softzino engineers.",
  },
  "/services/data-strategy-and-governance": {
    title: "Data Strategy & Governance Consulting | Softzino",
    description:
      "Build trusted data strategy, ownership, quality, governance, and operating models for reliable analytics and decisions.",
  },
  "/services/dedicated-development-team": {
    title: "Dedicated Development Team | Softzino Technologies",
    description:
      "Build an autonomous dedicated software development team with product, design, engineering, QA, and delivery support.",
  },
  "/services/devops": {
    title: "DevOps Consulting Services | CI/CD & Cloud Automation | Softzino",
    description:
      "Improve deployment speed, reliability, automation, infrastructure, and CI/CD pipelines with Softzino DevOps engineers.",
  },
  "/services/embedded-systems": {
    title: "Embedded Software Development Company | Softzino",
    description:
      "Build embedded software, firmware, RTOS, drivers, connectivity, and secure device workflows for hardware products.",
  },
  "/services/experience-design": {
    title: "Experience Design Services | Research & Service Design | Softzino",
    description:
      "Design better digital journeys with user research, interaction strategy, service design, and experience optimization.",
  },
  "/services/forward-deployed-ai-engineering": {
    title: "Forward Deployed AI Engineering | Softzino Technologies",
    description:
      "Embed AI engineers with your team to design, build, integrate, and operationalize custom AI workflows.",
  },
  "/services/iot-wearable-solutions": {
    title: "IoT Development Company | Wearable & Cloud Solutions | Softzino",
    description:
      "Build connected IoT and wearable products with firmware, sensors, cloud platforms, analytics, and secure integrations.",
  },
  "/services/it-staffing": {
    title: "IT Staffing Services for Software Teams | Softzino",
    description:
      "Find vetted technical talent for software, product, QA, cloud, and delivery roles with Softzino staffing support.",
  },
  "/services/managed-engineering-team": {
    title: "Managed Software Development Team | Softzino Technologies",
    description:
      "Run software delivery with a managed engineering team, governance, reporting, QA, DevOps, and delivery accountability.",
  },
  "/services/marketing-automation": {
    title: "Marketing Automation Services | CRM & Lead Workflows | Softzino",
    description:
      "Automate lead management, CRM workflows, campaigns, integrations, and reporting across modern marketing platforms.",
  },
  "/services/mobile-app-development": {
    title: "Mobile App Development Company | iOS, Android, Flutter | Softzino",
    description:
      "Design and build native and cross-platform mobile apps for startups, enterprises, and industry-specific workflows.",
    image: "/images/service-mobile-app-hero.png",
  },
  "/services/mvp-development": {
    title: "MVP Development Company | Softzino Technologies",
    description:
      "Launch a focused MVP with product strategy, UX, engineering, QA, and scalable architecture from Softzino.",
  },
  "/services/physical-ai": {
    title: "Physical AI Development | Robotics & Edge AI | Softzino",
    description:
      "Integrate AI with robotics, edge devices, sensors, and physical systems for real-time autonomous action.",
  },
  "/services/plugin-development": {
    title: "Plugin Development Services | Custom Extensions | Softzino",
    description:
      "Build custom plugins, browser extensions, CMS modules, CRM add-ons, and integrations that extend existing platforms.",
  },
  "/services/product-management": {
    title: "Product Management Consulting | Strategy & Roadmaps | Softzino",
    description:
      "Align product strategy, roadmaps, requirements, delivery planning, and engineering execution with Softzino product experts.",
  },
  "/services/quality-engineering": {
    title: "QA Testing Services | Quality Engineering | Softzino",
    description:
      "Improve release confidence with manual testing, automation testing, performance testing, QA strategy, and CI/CD quality workflows.",
  },
  "/services/reporting-and-business-intelligence": {
    title: "Business Intelligence Consulting Services | Softzino",
    description:
      "Turn business data into dashboards, reporting systems, predictive insights, and operational decision support.",
  },
  "/services/semiconductor-testing": {
    title: "Semiconductor Testing Services | Validation & ATE | Softzino",
    description:
      "Support semiconductor validation, DFT, ATE engineering, reliability testing, and test automation for next-generation silicon.",
  },
  "/services/skill-development": {
    title: "Software Engineering Training & Skill Development | Softzino",
    description:
      "Upskill engineering teams with technical training, agile coaching, leadership development, and AI adoption workshops.",
  },
  "/services/staff-augmentation": {
    title: "IT Staff Augmentation Services | Softzino Technologies",
    description:
      "Augment your software team with vetted engineers, QA, cloud, and product specialists who integrate into your workflows.",
  },
  "/services/system-integration": {
    title: "System Integration Company | Enterprise Software Integration | Softzino",
    description:
      "Connect software, data, APIs, hardware, and business workflows into reliable enterprise systems.",
  },
  "/services/team-extension": {
    title: "Software Development Team Extension | Softzino",
    description:
      "Extend your engineering team with remote specialists who work inside your tools, process, and delivery cadence.",
  },
  "/services/ui-ux-design": {
    title: "UI/UX Design Services | Product Design | Softzino",
    description:
      "Design intuitive web and mobile product experiences with research, prototyping, visual design, testing, and design systems.",
  },
  "/services/web-application-development": {
    title: "Web Application Development Company | Softzino",
    description:
      "Build secure, scalable, high-performance web applications with modern frontend, backend, cloud, and QA engineering.",
  },
  "/services/web-service-development": {
    title: "Backend Development Services | Web Service Engineering | Softzino",
    description:
      "Build reliable backend services, APIs, data layers, and microservice architectures for modern applications.",
  },
  "/privacy-notice": {
    title: "Privacy Notice | Softzino Technologies",
    description:
      "Read Softzino Technologies privacy notice for information about data collection, processing, and rights.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Softzino Technologies",
    description:
      "Read the terms and conditions for using Softzino Technologies website and services information.",
  },
  "/cookie-notice": {
    title: "Cookie Notice | Softzino Technologies",
    description:
      "Read how Softzino Technologies describes website cookie use and related visitor preferences.",
  },
  "/imprint": {
    title: "Imprint / Impressum | Softzino Technologies",
    description:
      "Find Softzino Technologies office and business inquiry information for company reference.",
  },
  "/press-kit": {
    title: "Press Kit | Softzino Technologies",
    description:
      "Access Softzino Technologies company overview, service areas, office locations, and media request information.",
  },
};

export const indexablePaths = Object.keys(pageSeo);

export function absoluteUrl(path = "/") {
  return new URL(path, productionOrigin).toString();
}

export function createPageMetadata(path: string): Metadata {
  const entry = pageSeo[path] ?? pageSeo["/"];
  const image = entry.image ?? defaultOgImage;

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    robots: robotsMeta,
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: absoluteUrl(path),
      siteName,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [image],
    },
  };
}

export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: productionOrigin,
    logo: absoluteUrl("/images/brand/softzino-logo.png"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: productionOrigin,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: siteName,
      url: productionOrigin,
    },
  };
}
