// Shape for each Services column: a heading plus its child service names.
export type ServiceColumn = {
  title: string;
  items: string[];
};

// Source of truth for the Services mega-menu (header dropdown) and the
// standalone /services listing page. Slugs are placeholders for this phase.
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
