// Shape for each Services column: a heading plus its child service names.
export type ServiceColumn = {
  title: string;
  items: string[];
};

// Source of truth for the Services mega-menu (header dropdown), route map,
// and standalone /services listing page.
export const serviceColumns: ServiceColumn[] = [
  {
    title: "Product Engineering",
    items: [
      "UI/UX Design",
      "IoT & Wearable Solutions",
      "Quality Engineering",
      "Product Management",
      "MVP Development",
      "Embedded Systems",
      "Semiconductor Testing",
    ],
  },
  {
    title: "Digital Transformation",
    items: [
      "Application Modernization",
      "Mobile App Development",
      "Experience Design",
      "Marketing Automation",
      "Artificial Intelligence",
      "Web Application Development",
      "Web Service Development",
      "API Development",
      "Plugin Development",
      "Physical AI",
      "System Integration",
    ],
  },
  {
    title: "Cloud Engineering",
    items: ["Cloud Consulting", "Cloud Migration", "Cloud Managed Services", "DevOps"],
  },
  {
    title: "Data Analytics",
    items: [
      "Data Strategy & Governance",
      "Data Platform Engineering",
      "Data Migration",
      "Reporting & Business Intelligence",
    ],
  },
  {
    title: "Co-Creation",
    items: [
      "Staff Augmentation",
      "Dedicated Development Team",
      "IT Staffing",
      "Forward Deployed AI Engineering",
      "Team Extension",
      "Managed Engineering Team",
    ],
  },
  {
    title: "Consultancy",
    items: ["Skill Development"],
  },
];

// Converts service titles into URL-safe anchors like "Cloud Migration" -> "cloud-migration".
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Detail pages that exist as real routes instead of just anchors on /services.
const serviceDetailRoutes: Record<string, string> = {
  "API Development": "/services/api-development",
  "Application Modernization": "/services/application-modernization",
  "Artificial Intelligence": "/services/artificial-intelligence",
  "Cloud Consulting": "/services/cloud-consulting",
  "Cloud Managed Services": "/services/cloud-managed-services",
  "Cloud Migration": "/services/cloud-migration",
  "Data Migration": "/services/data-migration",
  "Data Platform Engineering": "/services/data-platform-engineering",
  "Data Strategy & Governance": "/services/data-strategy-and-governance",
  "Dedicated Development Team": "/services/dedicated-development-team",
  "DevOps": "/services/devops",
  "Experience Design": "/services/experience-design",
  "Embedded Systems": "/services/embedded-systems",
  "Forward Deployed AI Engineering": "/services/forward-deployed-ai-engineering",
  "IoT & Wearable Solutions": "/services/iot-wearable-solutions",
  "IT Staffing": "/services/it-staffing",
  "Marketing Automation": "/services/marketing-automation",
  "Managed Engineering Team": "/services/managed-engineering-team",
  "Mobile App Development": "/services/mobile-app-development",
  "MVP Development": "/services/mvp-development",
  "Physical AI": "/services/physical-ai",
  "Plugin Development": "/services/plugin-development",
  "Product Management": "/services/product-management",
  "Quality Engineering": "/services/quality-engineering",
  "Reporting & Business Intelligence": "/services/reporting-and-business-intelligence",
  "Semiconductor Testing": "/services/semiconductor-testing",
  "Skill Development": "/services/skill-development",
  "Staff Augmentation": "/services/staff-augmentation",
  "System Integration": "/services/system-integration",
  "Team Extension": "/services/team-extension",
  "UI/UX Design": "/services/ui-ux-design",
  "Web Application Development": "/services/web-application-development",
  "Web Service Development": "/services/web-service-development",
};

// Gives each service item the right destination for menus and listing links.
export function getServiceHref(value: string): string {
  return serviceDetailRoutes[value] ?? `/services#${slugify(value)}`;
}
