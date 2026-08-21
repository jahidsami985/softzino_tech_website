import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code2,
  Compass,
  Database,
  FlaskConical,
  Globe2,
  Hammer,
  HeartHandshake,
  LifeBuoy,
  MessageSquare,
  PenTool,
  RefreshCw,
  Repeat2,
  Rocket,
  Search,
  ShieldCheck,
  Terminal,
  UserPlus,
  Users2,
} from "lucide-react";

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TechnologyGroup = {
  icon: LucideIcon;
  title: string;
  technologies: string[];
};

export type DeveloperRole = {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  cta: string;
};

export type TeamRole = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type EngagementModel = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  featured?: boolean;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ExpertiseService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type WorkflowStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const trustIndicators = [
  "Experienced Engineers",
  "Flexible Engagement",
  "Scalable Teams",
  "Transparent Collaboration",
];

export const whySoftzinoItems: IconCard[] = [
  {
    icon: Users2,
    title: "Experienced Engineers",
    description: "Developers experienced across modern software technologies and product environments.",
  },
  {
    icon: Repeat2,
    title: "Flexible Hiring",
    description: "Hire one developer or assemble a complete multidisciplinary team.",
  },
  {
    icon: Rocket,
    title: "Fast Team Scaling",
    description: "Expand engineering capacity when project requirements grow.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Collaboration",
    description: "Maintain visibility through structured communication and development workflows.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "Continue working with Softzino beyond launch for maintenance and product evolution.",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    icon: Code2,
    title: "Frontend",
    technologies: ["React", "Vue", "Next.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    technologies: ["Ruby on Rails", "PHP", "Laravel", "Python", "Node.js", "Spring Boot"],
  },
  {
    icon: Terminal,
    title: "Mobile",
    technologies: ["Jetpack Compose", "Java", "Kotlin", "SwiftUI", "XCode", "Objective C"],
  },
  {
    icon: Code2,
    title: "Full Stack",
    technologies: ["React + Node.js", "Next.js", "Laravel + Vue", "API-driven web apps"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    icon: FlaskConical,
    title: "QA",
    technologies: [
      "Manual Testing",
      "Automation Testing",
      "Performance Testing",
      "Software Quality Assurance",
    ],
  },
];

export const developerRoles: DeveloperRole[] = [
  {
    icon: Code2,
    title: "Frontend Developer",
    description: "Build responsive, performant product interfaces with modern frontend stacks.",
    skills: ["React", "Next.js", "TypeScript"],
    cta: "Hire Frontend Developer",
  },
  {
    icon: Database,
    title: "Backend Developer",
    description: "Engineer secure APIs, business logic, integrations, and data-backed services.",
    skills: ["Node.js", "Laravel", "Python"],
    cta: "Hire Backend Developer",
  },
  {
    icon: Terminal,
    title: "Full-Stack Developer",
    description: "Move across frontend, backend, and API layers for end-to-end product delivery.",
    skills: ["React", "Node.js", "APIs"],
    cta: "Hire Full-Stack Developer",
  },
  {
    icon: Code2,
    title: "Mobile App Developer",
    description: "Create native mobile experiences for product teams.",
    skills: ["Kotlin", "Java", "SwiftUI"],
    cta: "Hire Mobile Developer",
  },
  {
    icon: PenTool,
    title: "UI/UX Engineer",
    description: "Bridge interaction design and frontend implementation for polished user flows.",
    skills: ["UI Design", "Prototyping", "Frontend"],
    cta: "Hire UI/UX Engineer",
  },
  {
    icon: FlaskConical,
    title: "SQA Engineer",
    description: "Improve release confidence through manual, automated, and performance testing.",
    skills: ["Automation", "Manual QA", "Regression"],
    cta: "Hire SQA Engineer",
  },
  {
    icon: Cloud,
    title: "DevOps / Cloud Engineer",
    description: "Support deployment pipelines, cloud environments, observability, and releases.",
    skills: ["AWS", "Docker", "Kubernetes"],
    cta: "Hire DevOps Engineer",
  },
];

export const teamRoles: TeamRole[] = [
  {
    icon: ClipboardList,
    title: "Project / Delivery Manager",
    description: "Coordinates delivery cadence, scope, and stakeholder communication.",
  },
  {
    icon: PenTool,
    title: "UI/UX Designer",
    description: "Shapes journeys, wireframes, product flows, and design systems.",
  },
  {
    icon: Code2,
    title: "Software Engineer",
    description: "Builds application features, services, and product workflows.",
  },
  {
    icon: Database,
    title: "Tech Lead Engineer",
    description: "Guides architecture decisions, code quality, and technical direction.",
  },
  {
    icon: Terminal,
    title: "Mobile App Engineer",
    description: "Creates mobile experiences across device ecosystems.",
  },
  {
    icon: FlaskConical,
    title: "SQA Engineer",
    description: "Validates quality, regression coverage, and release readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Security Tester",
    description: "Reviews security risk, defects, and release confidence.",
  },
];

export const hireBenefits: IconCard[] = [
  {
    icon: Search,
    title: "Carefully Selected Talent",
    description: "Softzino aligns developer skills with your technology, product stage, and collaboration needs.",
  },
  {
    icon: Users2,
    title: "Flexible Team Size",
    description: "Start with a specialist and expand into a cross-functional team as your roadmap grows.",
  },
  {
    icon: Rocket,
    title: "Faster Engineering Capacity",
    description: "Add development momentum without reshaping your internal organization.",
  },
  {
    icon: MessageSquare,
    title: "Direct Collaboration",
    description: "Work with engineers through structured rituals, shared tools, and clear communication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Development",
    description: "Build with code review, testing habits, documentation, and release discipline.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Continue after launch with maintenance, product evolution, and engineering support.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    icon: UserPlus,
    title: "Single Hire",
    description: "Best for companies needing one specialist working alongside their existing team.",
    benefits: [
      "Dedicated resource",
      "Flexible duration",
      "Direct collaboration",
      "Scalable engagement",
    ],
    cta: "Start Single Hire",
  },
  {
    icon: Users2,
    title: "Recruit",
    description: "A flexible recruitment-style model for assembling talent around your delivery needs.",
    benefits: [
      "Multidisciplinary team",
      "Team coordination",
      "Flexible composition",
      "Continuous development",
    ],
    cta: "Recruit Talent",
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Project Hire",
    description: "Best for businesses wanting Softzino to handle a defined software delivery.",
    benefits: [
      "Defined scope",
      "Structured delivery",
      "Engineering ownership",
      "QA and deployment support",
    ],
    cta: "Start Project Hire",
  },
];

export const hiringSteps: ProcessStep[] = [
  {
    title: "Tell Us What You Need",
    description: "Share your product goals, technology stack, role needs, and collaboration model.",
  },
  {
    title: "Talent Matching",
    description: "Softzino reviews the required skills and identifies a practical team composition.",
  },
  {
    title: "Interview & Select",
    description: "Meet suitable developers and confirm the right technical and communication fit.",
  },
  {
    title: "Start Collaboration",
    description: "Begin work through agreed workflows, communication channels, and delivery rituals.",
  },
  {
    title: "Scale When Needed",
    description: "Adjust the team as priorities, product scope, or delivery goals evolve.",
  },
];

export const expertiseServices: ExpertiseService[] = [
  {
    icon: Code2,
    title: "Web Application Development",
    description: "Scalable web products, dashboards, portals, and customer-facing platforms.",
  },
  {
    icon: Terminal,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development for growing products.",
  },
  {
    icon: Hammer,
    title: "Application Modernization",
    description: "Modernize legacy systems, architecture, user experience, and delivery pipelines.",
  },
  {
    icon: Globe2,
    title: "Plugin Development",
    description: "WordPress, plugin, and theme-oriented web extensions for commercial launches.",
  },
  {
    icon: Cloud,
    title: "Cloud Consulting",
    description: "Architecture guidance for cloud adoption, scalability, security, and optimization.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Research-driven product interfaces that support usability and conversion.",
  },
  {
    icon: FlaskConical,
    title: "Quality Engineering",
    description: "Manual, automated, performance, and release-focused quality practices.",
  },
  {
    icon: Users2,
    title: "Dedicated Development Team",
    description: "Cross-functional engineering teams built around product lifecycle ownership.",
  },
];

export const industries: Industry[] = [
  {
    icon: HeartHandshake,
    title: "Healthcare",
    description: "Patient, provider, and operations-focused digital systems.",
  },
  {
    icon: BarChart3,
    title: "Retail & eCommerce",
    description: "Commerce platforms, POS workflows, and customer journeys.",
  },
  {
    icon: Globe2,
    title: "Food & Beverage",
    description: "Restaurant, ordering, and eCommerce systems for food businesses.",
  },
  {
    icon: Compass,
    title: "Logistics",
    description: "Operations, tracking, and supply-chain coordination systems.",
  },
  {
    icon: Award,
    title: "Education Technology",
    description: "Learning platforms, training systems, and digital classrooms.",
  },
  {
    icon: Hammer,
    title: "Construction Engineering",
    description: "Digital systems for construction engineering and project operations.",
  },
  {
    icon: Terminal,
    title: "Hospitality",
    description: "Guest, service, and operations-focused hospitality systems.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Solutions",
    description: "Reliable internal systems for complex business operations.",
  },
  {
    icon: Cloud,
    title: "Travel",
    description: "Booking, service, and customer-facing travel platforms.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    icon: Search,
    title: "Plan",
    description: "Clarify goals, scope, team setup, and delivery expectations.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Shape user flows, architecture, and implementation details.",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Build features through structured engineering workflows.",
  },
  {
    icon: CheckCircle2,
    title: "Review",
    description: "Use code review and stakeholder feedback to improve quality.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Validate behavior, stability, performance, and regression risk.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Release through controlled deployment and monitoring practices.",
  },
  {
    icon: RefreshCw,
    title: "Improve",
    description: "Iterate through product feedback, analytics, and roadmap changes.",
  },
];

export const collaborationPractices = [
  "Agile Development",
  "Sprint Planning",
  "Version Control",
  "Code Review",
  "Testing & QA",
  "CI/CD",
  "Documentation",
  "Regular Communication",
];

export const faqItems: FaqItem[] = [
  {
    question: "How can I hire a developer from Softzino?",
    answer:
      "Share your requirements through the hire developers form. Softzino reviews your needs, discusses the role or team structure, and helps identify a suitable engagement approach.",
  },
  {
    question: "Can I hire only one developer?",
    answer:
      "Yes. You can hire an individual developer or assemble a larger team depending on your product requirements and collaboration model.",
  },
  {
    question: "Can I scale my development team later?",
    answer:
      "Yes. Team size can be adjusted as your roadmap, workload, and required expertise change.",
  },
  {
    question: "Can I interview developers before hiring?",
    answer:
      "Yes. Interview and selection discussions can be part of the matching process so you can assess technical and communication fit.",
  },
  {
    question: "Can Softzino developers work with our existing team?",
    answer:
      "Yes. Softzino developers can collaborate with your internal team using shared tools, communication channels, sprint rituals, and development workflows.",
  },
  {
    question: "What types of developers can I hire?",
    answer:
      "You can request frontend, backend, full-stack, mobile, UI/UX, SQA, cloud, and other software engineering expertise based on your needs.",
  },
  {
    question: "How quickly can developers start?",
    answer:
      "The onboarding timeline depends on the required technology, experience level, team size and current resource availability. Softzino can provide an estimated timeline after reviewing your requirements.",
  },
];

export const leadFormBenefits = [
  "Individual developers",
  "Recruit support",
  "Flexible engagement",
  "Technical expertise",
  "Long-term development support",
];
