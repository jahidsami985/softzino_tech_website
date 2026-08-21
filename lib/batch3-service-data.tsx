import {
  Activity,
  Award,
  BarChart3,
  Blocks,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  LineChart,
  Monitor,
  Network,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Users2,
  Wrench,
} from "lucide-react";
import type { BatchIconCard, BatchServiceData } from "@/components/BatchServicePage";

const hireHref = "/hire-developers#request-talent";
const batch3Root = "batch3";
const cssNotes = "Batch 3 exported Figma CSS notes";

const talkToExpert = { label: "Talk to an Expert", href: hireHref, variant: "dark" as const };
const getQuote = { label: "Get a Quote", href: hireHref, variant: "outline" as const };
const scheduleConsultation = {
  label: "Schedule a Consultation",
  href: hireHref,
  variant: "gold" as const,
};
const contactUs = { label: "Contact Us", href: hireHref, variant: "outlineLight" as const };

const productEngineeringStrengths: BatchIconCard[] = [
  { icon: Users2, title: "Engineering Teams" },
  { icon: Gauge, title: "Agile Methodology" },
  { icon: Globe2, title: "Global Delivery" },
  { icon: Blocks, title: "Scalable Engagement" },
  { icon: Award, title: "Rigorous QA" },
  { icon: ShieldCheck, title: "Security First" },
  { icon: Briefcase, title: "Long-term Partnership" },
];

const standardEngagementModels: BatchIconCard[] = [
  {
    title: "Fixed Price",
    desc: "Best for well-defined projects with clear requirements and scope.",
    bullets: ["Predictable budget", "Defined timeline"],
  },
  {
    title: "Dedicated Team",
    desc: "Best for long-term projects needing continuous development and iteration.",
    bullets: ["Full control", "Scalable resources"],
  },
  {
    title: "Staff Augmentation",
    desc: "Best for supplementing your existing team with specific expertise.",
    bullets: ["Rapid onboarding", "Niche skills"],
  },
  {
    title: "Managed Delivery",
    desc: "Best for end-to-end project execution handled by our experts.",
    bullets: ["Outcome ownership", "Delivery governance"],
  },
];

const designBuildProcess = [
  {
    title: "Discovery",
    desc: "Requirement analysis and technical feasibility.",
  },
  {
    title: "Design",
    desc: "Prototyping and UI/UX design creation.",
  },
  {
    title: "Development",
    desc: "Agile coding and regular sprint reviews.",
  },
  {
    title: "Testing",
    desc: "Rigorous QA and performance testing.",
  },
];

export const uiUxDesignService: BatchServiceData = {
  title: "UI/UX Design",
  slug: "ui-ux-design",
  route: "/services/ui-ux-design",
  description:
    "Research-driven UI/UX design services for intuitive, conversion-focused, and scalable digital experiences.",
  designFile: `${batch3Root}/Jahid Sami's team library3/UI/UX Design _ Softzino Technologies.png`,
  cssFile: `${cssNotes}: UI/UX Design | Softzino Technologies`,
  assetFiles: ["/img1/planning-session.jpeg"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "UI/UX Design",
    title: "Crafting Intuitive and Impactful Digital Experiences",
    subtitle:
      "From concept to launch, we engineer scalable, secure, and user-centric interfaces that drive engagement and business growth.",
    media: {
      src: "/img1/planning-session.jpeg",
      alt: "UI and analytics dashboards displayed across design workstation screens",
    },
    primary: talkToExpert,
    secondary: getQuote,
  },
  sections: [
    {
      type: "cards",
      theme: "white",
      columns: 4,
      cardStyle: "icons",
      cards: [
        {
          title: "What it is",
          desc: "Focus on user-centric design, research-driven interfaces, and seamless interactions across web and mobile platforms.",
        },
        {
          title: "Why you need it",
          desc: "To meet your customers where they are. A powerful intuitive interface enhances engagement, drives operational efficiency, and creates new revenue channels.",
        },
        {
          title: "Business Outcomes",
          desc: "Enhanced user engagement, reduced churn, increased conversion rates, improved brand loyalty, and a significant competitive advantage.",
        },
        {
          title: "Industries",
          desc: "FinTech, HealthTech, E-commerce, SaaS, Enterprise, Logistics, Education, and Real Estate.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      columns: 3,
      cards: [
        {
          icon: Search,
          title: "User Research",
          desc: "Deep-dive qualitative and quantitative research to understand user behaviors, needs, and pain points.",
        },
        {
          icon: Blocks,
          title: "Wireframing & Prototyping",
          desc: "Creating structural blueprints and interactive models to validate concepts before full-scale development.",
        },
        {
          icon: Sparkles,
          title: "Visual Design",
          desc: "Crafting aesthetically pleasing, brand-aligned interfaces that evoke emotion and trust.",
        },
        {
          icon: Activity,
          title: "Interaction Design",
          desc: "Designing fluid micro-interactions and transitions that make digital products feel alive and responsive.",
        },
        {
          icon: Award,
          title: "Usability Testing",
          desc: "Rigorous testing methodologies to identify friction points and iteratively improve the user experience.",
        },
        {
          icon: Settings,
          title: "Design Systems",
          desc: "Building comprehensive, scalable design systems ensuring consistency across all digital touchpoints.",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Why Choose Softzino",
      columns: 4,
      cardStyle: "icons",
      cards: productEngineeringStrengths,
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Engagement Models",
      columns: 4,
      cards: standardEngagementModels,
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      centered: true,
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Storybook", "Framer"],
    },
    {
      type: "process",
      theme: "muted",
      title: "Our Process",
      steps: designBuildProcess,
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "Application Modernization",
          desc: "Revitalize legacy systems.",
        },
        {
          title: "Web Application Development",
          desc: "Scalable web solutions.",
        },
        {
          title: "Experience Design",
          desc: "Engaging user interfaces.",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to build your next digital experience?",
      text: "Let's discuss your vision and see how Softzino can bring it to life with cutting-edge design.",
      button: scheduleConsultation,
      secondary: contactUs,
    },
  ],
};

export const qualityEngineeringService: BatchServiceData = {
  title: "Quality Engineering",
  slug: "quality-engineering",
  route: "/services/quality-engineering",
  description:
    "Comprehensive QA and quality engineering services across automation, manual, security, performance, mobile, and CI/CD testing.",
  designFile: `${batch3Root}/Jahid Sami's team library4/Quality Engineering _ Softzino Technologies.png`,
  cssFile: `${cssNotes}: Quality Engineering | Softzino Technologies`,
  assetFiles: ["/img1/team-desks.jpeg"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "Quality Engineering",
    title: "Ensuring Uncompromising Digital Excellence",
    subtitle:
      "Comprehensive QA and testing strategies that shift quality left and ensure high-performance, secure software delivery. From automated frameworks to rigorous manual testing, we guarantee flawless execution.",
    media: {
      src: "/img1/team-desks.jpeg",
      alt: "Quality engineering dashboard showing automated QA flows and test signals",
    },
    primary: talkToExpert,
    secondary: getQuote,
  },
  sections: [
    {
      type: "cards",
      theme: "white",
      columns: 4,
      cardStyle: "icons",
      cards: [
        {
          title: "What it is",
          desc: "Comprehensive quality assurance services encompassing automated, manual, security, and performance testing methodologies designed to shift quality left in the development lifecycle.",
        },
        {
          title: "Why you need it",
          desc: "To mitigate risk, ensure flawless user experiences, and accelerate time-to-market by identifying and resolving defects early in the software development process.",
        },
        {
          title: "Business Outcomes",
          desc: "Reduced time-to-market, lower maintenance costs, superior user experience, and near zero-defect production releases ensuring brand reputation.",
        },
        {
          title: "Industries",
          desc: "BFSI, Retail, Technology, Media & Entertainment, Healthcare, and Enterprise IT solutions requiring mission-critical stability.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      columns: 3,
      cards: [
        {
          icon: Activity,
          title: "Automated Testing",
          desc: "Robust automated test suites designed to increase coverage, accelerate release cycles, and ensure regression stability across platforms.",
        },
        {
          icon: Search,
          title: "Manual Testing",
          desc: "Exploratory and scenario-based manual testing to evaluate user experience, edge cases, and complex workflows that automation might miss.",
        },
        {
          icon: ShieldCheck,
          title: "Security Testing",
          desc: "Vulnerability assessments and penetration testing to identify and remediate security risks before they impact your business.",
        },
        {
          icon: Gauge,
          title: "Performance Testing",
          desc: "Load, stress, and scalability testing to ensure your applications perform flawlessly under peak user demands and data volumes.",
        },
        {
          icon: Monitor,
          title: "Mobile App Testing",
          desc: "Comprehensive testing across a vast matrix of devices, OS versions, and network conditions to guarantee mobile excellence.",
        },
        {
          icon: RefreshCw,
          title: "CI/CD Integration",
          desc: "Seamlessly embedding continuous testing into your deployment pipelines for rapid, reliable, and automated quality checks.",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Why Choose Softzino",
      columns: 4,
      cardStyle: "icons",
      cards: [
        { icon: Users2, title: "Expert QA Teams" },
        { icon: Gauge, title: "Shift-Left Approach" },
        { icon: Globe2, title: "Global Delivery" },
        { icon: Award, title: "Rigorous Standards" },
      ],
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Engagement Models",
      columns: 4,
      cards: [
        {
          title: "Fixed Price",
          desc: "Best for well-defined testing projects with clear requirements and scope.",
          bullets: ["Predictable budget", "Defined timeline"],
        },
        {
          title: "Dedicated Team",
          desc: "Best for long-term projects needing continuous QA integration.",
          bullets: ["Full control", "Scalable resources"],
        },
        {
          title: "Staff Augmentation",
          desc: "Best for supplementing your existing team with specific testing expertise.",
          bullets: ["Rapid onboarding", "Niche skills"],
        },
        {
          title: "Managed Delivery",
          desc: "Best for end-to-end testing execution handled by our experts.",
          bullets: ["Outcome ownership", "Quality governance"],
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      centered: true,
      technologies: ["Selenium", "Playwright", "Cypress", "JUnit", "Appium", "JMeter", "Postman"],
    },
    {
      type: "process",
      theme: "muted",
      title: "Our Process",
      steps: [
        {
          title: "Discovery",
          desc: "Test strategy definition and requirements analysis.",
        },
        {
          title: "Planning",
          desc: "Test case design and environment setup.",
        },
        {
          title: "Execution",
          desc: "Automated and manual test execution.",
        },
        {
          title: "Reporting",
          desc: "Detailed defect tracking and quality metrics analysis.",
        },
      ],
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "DevOps",
          desc: "Streamline delivery pipelines.",
        },
        {
          title: "Product Management",
          desc: "Strategic product direction.",
        },
        {
          title: "MVP Development",
          desc: "Rapid prototype launching.",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to elevate your software quality?",
      text: "Let's discuss your QA strategy and see how Softzino can ensure your digital products perform flawlessly.",
      button: scheduleConsultation,
      secondary: contactUs,
    },
  ],
};

export const productManagementService: BatchServiceData = {
  title: "Product Management",
  slug: "product-management",
  route: "/services/product-management",
  description:
    "Strategic product management services that align business goals, user needs, technical feasibility, and product delivery.",
  designFile: `${batch3Root}/Jahid Sami's team library3/Product Management _ Softzino Technologies.png`,
  cssFile: `${cssNotes}: Product Management | Softzino Technologies`,
  assetFiles: ["/img1/team-meeting.jpeg"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "Product Management",
    title: "Strategic Product Vision from Concept to Scale",
    subtitle:
      "Bridging the gap between business goals, user needs, and technical feasibility through expert product orchestration.",
    media: {
      src: "/img1/team-meeting.jpeg",
      alt: "Product management roadmap and growth dashboard visualization",
    },
    primary: talkToExpert,
    secondary: getQuote,
  },
  sections: [
    {
      type: "cards",
      theme: "white",
      columns: 4,
      cardStyle: "icons",
      cards: [
        {
          title: "What it is",
          desc: "Comprehensive oversight of the product lifecycle. We define strategy, prioritize features, and coordinate cross-functional teams to deliver solutions that solve real user problems and achieve business objectives.",
        },
        {
          title: "Why you need it",
          desc: "To ensure development efforts align with market demands. Effective product management minimizes wasted resources, ensures product-market fit, and accelerates time-to-value for your investments.",
        },
        {
          title: "Business Outcomes",
          desc: "Accelerated ROI, market-aligned features, optimized development cycles, clear strategic alignment, and increased user adoption metrics.",
        },
        {
          title: "Industries",
          desc: "Startups, Scale-ups, Enterprise, E-commerce, SaaS, FinTech, and Digital Media.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      columns: 3,
      cards: [
        {
          icon: Search,
          title: "Product Discovery",
          desc: "Identifying user needs, validating hypotheses, and defining core problems before investing in development.",
        },
        {
          icon: GitBranch,
          title: "Roadmap Strategy",
          desc: "Creating clear, actionable timelines that align feature releases with strategic business milestones.",
        },
        {
          icon: Briefcase,
          title: "Backlog Management",
          desc: "Rigorous grooming and structuring of tasks to ensure engineering teams are always working on high-impact items.",
        },
        {
          icon: BarChart3,
          title: "Market Research",
          desc: "In-depth competitive analysis and market trend evaluation to position your product for competitive advantage.",
        },
        {
          icon: RefreshCw,
          title: "Agile Orchestration",
          desc: "Facilitating sprints, leading stand-ups, and driving continuous delivery through established Agile methodologies.",
        },
        {
          icon: Gauge,
          title: "Feature Prioritization",
          desc: "Applying frameworks like RICE or MoSCoW to objectively determine what builds maximum value first.",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Why Choose Softzino",
      columns: 3,
      cardStyle: "icons",
      cards: [
        { icon: Users2, title: "Expert Teams" },
        { icon: Gauge, title: "Agile Methodology" },
        { icon: Globe2, title: "Global Perspective" },
        { icon: BarChart3, title: "Data-Driven" },
        { icon: Blocks, title: "Proven Frameworks" },
        { icon: Briefcase, title: "Strategic Partnership" },
      ],
    },
    {
      type: "process",
      theme: "muted",
      title: "Our Process",
      steps: [
        {
          title: "Discovery",
          desc: "Market analysis, user research, and defining product vision.",
        },
        {
          title: "Strategy",
          desc: "Roadmap creation, goal setting, and prioritizing initiatives.",
        },
        {
          title: "Planning",
          desc: "Backlog structuring, resource allocation, and sprint planning.",
        },
        {
          title: "Execution",
          desc: "Agile orchestration, cross-functional collaboration, and delivery.",
        },
        {
          title: "Iteration",
          desc: "Data analysis, feedback loops, and continuous improvement.",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Engagement Models",
      columns: 4,
      cards: [
        {
          title: "Fractional PM",
          desc: "Part-time expert guidance for startups or specific project phases needing strategic direction without a full-time hire.",
          bullets: ["Cost-effective expertise", "Flexible hours"],
        },
        {
          title: "Dedicated PM",
          desc: "Full-time product leadership seamlessly integrated into your team for long-term product ownership and continuous iteration.",
          bullets: ["Deep product focus", "Team alignment"],
        },
        {
          title: "Product Audit",
          desc: "A comprehensive review of your existing product strategy, identifying bottlenecks and areas for immediate improvement.",
          bullets: ["Actionable insights", "Process optimization"],
        },
        {
          title: "Project-Based",
          desc: "End-to-end management for a specific, well-defined product initiative, from initial discovery through to successful launch.",
          bullets: ["Clear deliverables", "Defined timeline"],
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "muted",
      title: "Technologies We Master",
      centered: true,
      technologies: ["Jira", "Confluence", "Miro", "Productboard", "Amplitude", "Figma", "Mixpanel", "Notion"],
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "MVP Development",
          desc: "Rapid prototyping and build.",
        },
        {
          title: "UI/UX Design",
          desc: "User-centric interface design.",
        },
        {
          title: "Digital Consultancy",
          desc: "High-level technical advisory.",
          href: "/services#consultancy",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to build your product strategy?",
      text: "Let's discuss your vision and see how Softzino can bring it to life with expert product management.",
      button: scheduleConsultation,
      secondary: contactUs,
    },
  ],
};

export const mvpDevelopmentService: BatchServiceData = {
  title: "MVP Development",
  slug: "mvp-development",
  route: "/services/mvp-development",
  description:
    "Launch a focused minimum viable product faster with lean engineering, market validation, and scalable foundations.",
  designFile: `${batch3Root}/Jahid Sami's team library4/MVP Development _ Softzino Technologies.png`,
  cssFile: `${cssNotes}: MVP Development | Softzino Technologies`,
  assetFiles: ["/img1/engineering-floor.jpeg"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "MVP Development",
    title: "Accelerate Your Path to Market with Precision MVPs",
    subtitle:
      "Fast-track product validation with high-quality Minimum Viable Products built for scalability and user feedback.",
    media: {
      src: "/img1/engineering-floor.jpeg",
      alt: "MVP product launch visualization with a laptop, mobile screens, and connected feature blocks",
    },
    primary: talkToExpert,
    secondary: getQuote,
  },
  sections: [
    {
      type: "cards",
      theme: "white",
      columns: 4,
      cardStyle: "icons",
      cards: [
        {
          title: "What it is",
          desc: "End-to-end development of minimum viable products, focusing on the essential feature set, launch readiness, and fast customer validation.",
        },
        {
          title: "Why you need it",
          desc: "To validate business assumptions quickly, reduce initial investment, and learn from real users before scaling the product.",
        },
        {
          title: "Business Outcomes",
          desc: "Faster market entry, reduced initial investment, data-backed validation, and a scalable foundation.",
        },
        {
          title: "Industries",
          desc: "Startups, Innovation Labs, Venture Studios.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      columns: 4,
      cards: [
        {
          icon: Rocket,
          title: "Rapid Prototyping",
          desc: "Quickly visualize and test core concepts before full-scale development.",
        },
        {
          icon: GitBranch,
          title: "MVP Roadmap",
          desc: "Strategic planning to prioritize features and define the path to market.",
        },
        {
          icon: Gauge,
          title: "Feature Scoping",
          desc: "Identifying and isolating the essential features required for launch.",
        },
        {
          icon: Wrench,
          title: "Core Functionality Build",
          desc: "Engineering the foundational elements of your product with precision.",
        },
        {
          icon: RefreshCw,
          title: "Feedback Loop Integration",
          desc: "Building systems to capture and analyze user feedback efficiently.",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Why Choose Softzino",
      columns: 4,
      cardStyle: "icons",
      cards: productEngineeringStrengths,
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Engagement Models",
      columns: 4,
      cards: standardEngagementModels,
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      centered: true,
      technologies: ["React", "Node.js", "Python", "Flutter", "Firebase", "AWS"],
    },
    {
      type: "process",
      theme: "muted",
      title: "Our Process",
      steps: designBuildProcess,
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "UI/UX Design",
          desc: "User-centric interface design and prototyping.",
        },
        {
          title: "Product Management",
          desc: "Strategic oversight to guide product lifecycle.",
        },
        {
          title: "Agile Methodology",
          desc: "Iterative development for flexible delivery.",
          href: "/services#co-creation",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to build your next MVP?",
      text: "Let's discuss your vision and see how Softzino can bring it to life with a focused, scalable MVP.",
      button: scheduleConsultation,
      secondary: contactUs,
    },
  ],
};

export const embeddedSystemsService: BatchServiceData = {
  title: "Embedded Systems",
  slug: "embedded-systems",
  route: "/services/embedded-systems",
  description:
    "End-to-end embedded software, firmware, RTOS, driver, HAL, and embedded security engineering for specialized hardware.",
  designFile: `${batch3Root}/Jahid Sami's team library2/Embedded Systems _ Softzino Technologies.png`,
  cssFile: `${cssNotes}: Embedded Systems | Softzino Technologies`,
  assetFiles: ["/img1/open-office-wide.jpeg"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "Embedded Systems",
    title: "Powering Hardware with Intelligent Software",
    subtitle:
      "End-to-end embedded software development for specialized hardware, ensuring performance, reliability, and security from bare-metal to OS level.",
    media: {
      src: "/img1/open-office-wide.jpeg",
      alt: "Embedded systems circuit board in a lab environment",
    },
    primary: talkToExpert,
    secondary: getQuote,
  },
  sections: [
    {
      type: "cards",
      theme: "white",
      columns: 4,
      cardStyle: "icons",
      cards: [
        {
          title: "What it is",
          desc: "End-to-end embedded software development for specialized hardware, encompassing firmware, RTOS, and low-level drivers to ensure peak performance and reliability.",
        },
        {
          title: "Why you need it",
          desc: "To bridge the gap between complex hardware and application layers. Robust embedded systems drive operational efficiency, product reliability, and unlock new hardware capabilities.",
        },
        {
          title: "Business Outcomes",
          desc: "High hardware performance, optimized power consumption, robust system security, and seamless hardware-software integration across complex operational environments.",
        },
        {
          title: "Industries",
          desc: "Automotive, Industrial Automation, Medical Devices, Aerospace, Telecommunications, and Consumer Electronics.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      columns: 3,
      cards: [
        {
          icon: Cpu,
          title: "RTOS Development",
          desc: "Real-Time Operating System implementation ensuring deterministic behavior and precise timing for mission-critical applications.",
        },
        {
          icon: Code2,
          title: "Bare-metal Programming",
          desc: "Low-level software development directly on hardware, optimizing for extreme performance and minimal resource footprint.",
        },
        {
          icon: Server,
          title: "Device Drivers",
          desc: "Custom driver development enabling seamless communication between hardware peripherals and the operating system.",
        },
        {
          icon: Settings,
          title: "Firmware Engineering",
          desc: "Secure, updatable firmware architectures supporting over-the-air updates and long-term device maintenance.",
        },
        {
          icon: Network,
          title: "Hardware Abstraction (HAL)",
          desc: "Developing robust HALs to decouple software from underlying hardware, improving portability across different silicon vendors.",
        },
        {
          icon: ShieldCheck,
          title: "Embedded Security",
          desc: "Implementing secure boot, hardware cryptography, and intrusion detection to protect IoT and embedded devices.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      centered: true,
      technologies: ["C / C++", "FreeRTOS", "Zephyr RTOS", "ARM Cortex", "Yocto Project", "Linux Kernel", "QEMU", "JTAG / SWD"],
    },
    {
      type: "process",
      theme: "muted",
      title: "Our Process",
      steps: [
        {
          title: "Discovery",
          desc: "Hardware constraints analysis and architectural feasibility study.",
        },
        {
          title: "Architecture",
          desc: "System design, component selection, and RTOS configuration.",
        },
        {
          title: "Development",
          desc: "Firmware coding, driver implementation, and bare-metal programming.",
        },
        {
          title: "Testing",
          desc: "Hardware-in-the-loop testing and extreme performance validation.",
        },
        {
          title: "Deployment",
          desc: "Secure flashing, OTA configuration, and ongoing maintenance.",
        },
      ],
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "IoT & Wearable Solutions",
          desc: "Connect your specialized hardware to robust cloud infrastructures.",
        },
        {
          title: "Semiconductor Testing",
          desc: "Automated validation frameworks for new silicon designs.",
        },
        {
          title: "Digital Transformation",
          desc: "Integrate smart embedded devices into enterprise data pipelines.",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to power your hardware?",
      text: "Let's discuss your embedded systems requirements and architect a secure, high-performance solution.",
      button: scheduleConsultation,
      secondary: contactUs,
    },
  ],
};

export const batch3Services = [
  uiUxDesignService,
  qualityEngineeringService,
  productManagementService,
  mvpDevelopmentService,
  embeddedSystemsService,
];

export const batch3ServiceBySlug = Object.fromEntries(
  batch3Services.map((service) => [service.slug, service]),
);
