import {
  Award,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Terminal,
  Users2,
  Wrench,
} from "lucide-react";
import type { ServiceDetailData } from "@/components/ServiceDetailPage";

const standardWhyChoose = [
  { icon: Users2, title: "Engineering Teams" },
  { icon: Rocket, title: "Agile Methodology" },
  { icon: Globe2, title: "Global Delivery" },
  { icon: Award, title: "Scalable Engagement" },
  { icon: CheckCircle2, title: "Rigorous QA" },
  { icon: ShieldCheck, title: "Security First" },
];

const standardEngagementModels = [
  {
    title: "Fixed Price",
    desc: "Best for well-defined projects with clear requirements and scope.",
    points: ["Predictable budget", "Defined timeline"],
    accent: "teal" as const,
  },
  {
    title: "Dedicated Team",
    desc: "Best for long-term projects needing continuous development and iteration.",
    points: ["Full control", "Scalable resources"],
    accent: "teal" as const,
  },
  {
    title: "Staff Augmentation",
    desc: "Best for supplementing your existing team with specific expertise.",
    points: ["Rapid onboarding", "Niche skills"],
    accent: "teal" as const,
  },
  {
    title: "Managed Delivery",
    desc: "Best for end-to-end project execution handled by our experts.",
    points: ["Shared risk", "Guaranteed outcomes"],
    accent: "teal" as const,
  },
];

export const mobileAppDevelopmentService = {
  variant: "standard",
  title: "Mobile App Development",
  category: "Digital Transformation",
  categoryHref: "/services#digital-transformation",
  eyebrow: "Mobile App Development",
  headline: "Building High-Performance Native & Cross-Platform Experiences",
  intro:
    "From concept to launch, we engineer scalable, secure, and user-centric mobile applications that drive business growth.",
  image: "/img1/engineering-floor.jpeg",
  imageAlt: "Softzino mobile app development showcase",
  summary: [
    {
      title: "What it is",
      desc: "End-to-end development of custom software for mobile devices, encompassing robust architecture, intuitive design, and seamless performance across all platforms.",
    },
    {
      title: "Why you need it",
      desc: "To meet your customers where they are. A powerful mobile presence enhances engagement, drives operational efficiency, and creates new revenue channels.",
    },
    {
      title: "Business Outcomes",
      desc: "Increased user retention, higher conversion rates, streamlined internal operations, and a significant competitive advantage in a digital-first marketplace.",
    },
    {
      title: "Industries",
      desc: "FinTech, Healthcare, E-commerce, Logistics, Education, Real Estate, and Enterprise IT solutions.",
    },
  ],
  offerings: [
    {
      icon: Smartphone,
      title: "Native iOS",
      desc: "High-performance applications tailored specifically for the Apple ecosystem, leveraging Swift and Objective-C.",
      tone: "navy",
    },
    {
      icon: Terminal,
      title: "Native Android",
      desc: "Robust Android solutions built with Kotlin and Java, ensuring optimal performance on a wide range of devices.",
      tone: "teal",
    },
    {
      icon: Code2,
      title: "Cross-Platform",
      desc: "Cost-effective solutions using React Native and Flutter, delivering native-like experiences across platforms.",
      tone: "gold",
    },
    {
      icon: Briefcase,
      title: "Enterprise Apps",
      desc: "Secure, scalable mobile applications designed to optimize internal workflows and employee productivity.",
      tone: "navy",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      desc: "User-centric interface design and prototyping that ensures intuitive navigation and engaging user journeys.",
      tone: "teal",
    },
    {
      icon: RefreshCw,
      title: "Modernization",
      desc: "Upgrading legacy mobile applications with modern architectures, improved UI, and enhanced security.",
      tone: "gold",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      desc: "Ongoing technical support, performance monitoring, and bug fixes to ensure app stability and longevity.",
      tone: "navy",
    },
    {
      icon: Cloud,
      title: "Deployment",
      desc: "Seamless app store submission and deployment strategies, ensuring compliance with all guidelines.",
      tone: "teal",
    },
  ],
  whyChoose: [
    ...standardWhyChoose,
    { icon: RefreshCw, title: "Long-term Partnership" },
  ],
  engagementModels: [
    { ...standardEngagementModels[0], accent: "navy" as const },
    standardEngagementModels[1],
    { ...standardEngagementModels[2], accent: "gold" as const },
    { ...standardEngagementModels[3], accent: "navy" as const },
  ],
  technologies: [
    "Flutter",
    "React Native",
    "Kotlin",
    "Swift",
    "Java",
    "Firebase",
    "AWS",
    "Azure",
    "REST APIs",
    "GraphQL",
  ],
  processSteps: [
    { title: "Discovery", desc: "Requirement analysis and technical feasibility." },
    { title: "Design", desc: "Prototyping and UI/UX design creation." },
    { title: "Development", desc: "Agile coding and regular sprint reviews." },
    { title: "Testing", desc: "Rigorous QA and performance testing." },
    { title: "Support", desc: "Deployment and ongoing maintenance." },
  ],
  relatedServices: [
    { title: "Application Modernization", desc: "Revitalize legacy systems." },
    { title: "Web Application Development", desc: "Scalable web solutions." },
    { title: "API Development", desc: "Robust integration layers." },
    { title: "Experience Design", desc: "Engaging user interfaces." },
  ],
  ctaTitle: "Ready to build your next mobile app?",
  ctaText:
    "Let's discuss your vision and see how Softzino can bring it to life with cutting-edge mobile technology.",
} satisfies ServiceDetailData;

export const iotWearableService = {
  variant: "standard",
  title: "IoT & Wearable Solutions",
  category: "Product Engineering",
  categoryHref: "/services#product-engineering",
  eyebrow: "IoT & Wearable Solutions",
  headline: "Connecting the Physical and Digital Worlds",
  intro:
    "Custom IoT solutions for industrial, healthcare, and consumer sectors, focusing on data connectivity and smart device ecosystems.",
  image: "/img1/open-office-collaboration.jpeg",
  imageAlt: "IoT and wearable device ecosystem illustration",
  summary: [
    {
      title: "What it is",
      desc: "End-to-end development of interconnected systems, bridging physical devices with cloud infrastructure for real-time data collection, processing, and control.",
    },
    {
      title: "Why you need it",
      desc: "To unlock operational visibility, automate complex workflows, and create entirely new product ecosystems that continuously generate actionable insights.",
    },
    {
      title: "Business Outcomes",
      desc: "Real-time monitoring, operational efficiency, predictive maintenance, and enhanced data-driven decision making across the enterprise.",
    },
    {
      title: "Industries",
      desc: "Manufacturing, IoT, Healthcare, Smart Cities, Logistics, Agriculture, and Consumer Electronics.",
    },
  ],
  offerings: [
    {
      icon: Search,
      title: "IoT Strategy",
      desc: "Comprehensive roadmap development aligning hardware selection, architecture design, and business goals.",
      tone: "navy",
    },
    {
      icon: Terminal,
      title: "Firmware Development",
      desc: "Secure, optimized low-level programming for microcontrollers and edge devices to ensure reliable operation.",
      tone: "teal",
    },
    {
      icon: Smartphone,
      title: "Wearable Integration",
      desc: "Seamless connection of consumer and medical wearables into unified data platforms and mobile apps.",
      tone: "gold",
    },
    {
      icon: Database,
      title: "Sensor Data Analytics",
      desc: "Transforming raw telemetry into actionable insights through edge computing and cloud-based analytics.",
      tone: "muted",
    },
    {
      icon: Cloud,
      title: "IoT Cloud Platforms",
      desc: "Architecting scalable cloud backends using AWS IoT or Azure IoT for robust device management.",
      tone: "teal",
    },
  ],
  whyChoose: standardWhyChoose,
  engagementModels: standardEngagementModels,
  technologies: [
    "MQTT",
    "BLE",
    "Embedded Linux",
    "AWS IoT",
    "Azure IoT",
    "ESP32",
    "Zigbee",
    "C/C++",
    "Python",
  ],
  processSteps: [
    { title: "Discovery", desc: "Requirement analysis and hardware feasibility." },
    { title: "Design", desc: "Architecture design and component selection." },
    { title: "Development", desc: "Firmware coding and cloud backend integration." },
    { title: "Testing", desc: "Rigorous hardware and security penetration testing." },
    { title: "Support", desc: "Deployment and ongoing fleet management." },
  ],
  relatedServices: [
    { title: "Embedded Systems", desc: "Low-level programming and hardware optimization." },
    { title: "Cloud Engineering", desc: "Scalable infrastructure for connected devices." },
    { title: "Data Analytics", desc: "Deriving insights from massive sensor datasets." },
  ],
  ctaTitle: "Ready to build your next IoT solution?",
  ctaText:
    "Let's discuss your vision and see how Softzino can bring it to life with cutting-edge connected technologies.",
} satisfies ServiceDetailData;

export const semiconductorTestingService = {
  variant: "standard",
  title: "Semiconductor Testing",
  category: "Product Engineering",
  categoryHref: "/services#product-engineering",
  eyebrow: "Hardware Validation",
  headline: "Precision Testing for Next-Generation Silicon",
  intro:
    "Advanced semiconductor validation and testing services ensuring silicon reliability and performance for modern chipsets.",
  image: "/img1/team-desks.jpeg",
  imageAlt: "Semiconductor validation and silicon testing lab",
  summary: [
    {
      title: "What it is",
      desc: "Comprehensive post-silicon validation, DFT, and ATE engineering services designed to guarantee the functional and structural integrity of integrated circuits.",
    },
    {
      title: "Why you need it",
      desc: "To mitigate the enormous costs of silicon re-spins, ensure mission-critical reliability, and accelerate the complex journey from prototype to mass production.",
    },
    {
      title: "Business Outcomes",
      desc: "Faster silicon yield, reduced time-to-market for chipsets, guaranteed silicon reliability, and cost-effective validation.",
    },
    {
      title: "Industries",
      desc: "Semiconductors, Electronics, Automotive Electronics, AI Hardware, Aerospace, Telecommunications.",
    },
  ],
  offerings: [
    {
      icon: Database,
      title: "Post-silicon Validation",
      desc: "Rigorous functional testing of prototype silicon to identify design flaws and ensure adherence to architectural specifications before volume manufacturing.",
      tone: "navy",
    },
    {
      icon: Code2,
      title: "Design for Testability (DFT)",
      desc: "Integration of test infrastructure directly into the chip design to enable high-coverage manufacturing tests.",
      tone: "teal",
    },
    {
      icon: Terminal,
      title: "ATE Engineering",
      desc: "Development of highly optimized test programs and hardware interfaces for Automated Test Equipment.",
      tone: "gold",
    },
    {
      icon: CheckCircle2,
      title: "Reliability Testing",
      desc: "Accelerated life testing, burn-in, and environmental stress screening to guarantee long-term operational stability.",
      tone: "muted",
    },
  ],
  whyChoose: [
    { icon: Users2, title: "Expert Hardware Teams" },
    { icon: Rocket, title: "Accelerated Validation" },
    { icon: Globe2, title: "Global Facilities" },
    { icon: Award, title: "Yield Optimization" },
    { icon: ShieldCheck, title: "Rigorous Methodologies" },
  ],
  engagementModels: [
    {
      title: "Turnkey Validation",
      desc: "End-to-end management of the validation cycle, from test plan creation to final silicon qualification.",
      points: ["Predictable budget", "Defined timeline"],
      accent: "teal" as const,
    },
    {
      title: "Dedicated Lab Team",
      desc: "A persistent team of test engineers integrated with your silicon development lifecycle.",
      points: ["Full control", "Scalable resources"],
      accent: "teal" as const,
    },
    {
      title: "Specialist Augmentation",
      desc: "Niche expertise injected into your existing teams for complex ATE or DFT challenges.",
      points: ["Rapid onboarding", "Niche skills"],
      accent: "teal" as const,
    },
    {
      title: "Managed Services",
      desc: "Ongoing oversight and optimization of high-volume manufacturing test floors.",
      points: ["Shared risk", "Guaranteed yields"],
      accent: "teal" as const,
    },
  ],
  technologies: [
    "VERILOG",
    "VHDL",
    "SYSTEMVERILOG",
    "LABVIEW",
    "PYTHON",
    "UVM",
    "JTAG/BOUNDARY SCAN",
    "ADVANTEST",
    "TERADYNE",
  ],
  processSteps: [
    { title: "Test Planning", desc: "Defining test architecture and coverage metrics." },
    { title: "DFT Insertion", desc: "Integrating scan chains and BIST IP into RTL." },
    { title: "Pattern Generation", desc: "Developing ATPG patterns for high fault coverage." },
    { title: "ATE Development", desc: "Writing hardware-specific test programs." },
    { title: "Silicon Bring-up", desc: "First-silicon debug and yield optimization." },
  ],
  relatedServices: [
    { title: "Embedded Systems", desc: "Firmware and bare-metal software development." },
    { title: "IoT & Wearable Solutions", desc: "Connected device engineering and validation." },
    { title: "Quality Engineering", desc: "Automated software and hardware testing." },
  ],
  ctaTitle: "Ensure Silicon Perfection?",
  ctaText:
    "Let's discuss your validation strategy and how our hardware engineering teams can accelerate your time to market with uncompromising reliability.",
} satisfies ServiceDetailData;

export const skillDevelopmentService = {
  variant: "training",
  title: "Skill Development",
  category: "Consultancy",
  categoryHref: "/services#consultancy",
  headline: "Empower Your Engineering Workforce.",
  intro:
    "Accelerate organizational growth through targeted technical upskilling, leadership development, and strategic AI adoption workshops.",
  approachText:
    "Our consultancy-first approach to skill development goes beyond standard training. It is the deliberate transfer of intellectual property, engineering rigor, and technical culture to your internal teams.",
  ecosystemTitle: "Continuous Learning Ecosystems",
  ecosystemText:
    "Skill development at the enterprise level requires continuous learning programs designed to bridge the gap between legacy expertise and modern AI-driven engineering practices. We design bespoke curricula that align with your strategic technology roadmap, ensuring your workforce evolves alongside your architecture.",
  ecosystemImage: "/img1/team-meeting.jpeg",
  outcomes: [
    {
      icon: Rocket,
      title: "Accelerated Innovation Cycles",
      desc: "Empower teams to adopt new frameworks rapidly, reducing time-to-market for critical internal and external applications.",
      tone: "navy",
    },
    {
      icon: Briefcase,
      title: "Improved Employee Retention",
      desc: "Top engineering talent stays where they can grow. Investment in their skills translates directly to loyalty and institutional knowledge retention.",
      tone: "navy",
    },
    {
      icon: Code2,
      title: "Reduced Technical Debt",
      desc: "Better architectural decisions and modern coding practices inherently lead to cleaner, more maintainable codebases.",
      tone: "navy",
    },
  ],
  domains: ["Enterprise IT", "Finance", "Healthcare", "Manufacturing"],
  offerings: [
    {
      icon: Users2,
      title: "Technical Upskilling",
      desc: "Deep-dive technical sessions focusing on Cloud Modernization, advanced AI implementation, and modern DevOps pipelines.",
      tone: "muted",
    },
    {
      icon: RefreshCw,
      title: "Agile Coaching & Workshops",
      desc: "Transform delivery mechanisms through practical engineering workshops that embed Agile methodologies directly into daily workflows.",
      tone: "muted",
    },
    {
      icon: Award,
      title: "Leadership Development",
      desc: "Strategic coaching designed specifically for CTOs and VPs of Engineering to navigate organizational scaling and technology strategy.",
      tone: "muted",
    },
    {
      icon: ShieldCheck,
      title: "AI Adoption & Governance",
      desc: "Equip your teams with the knowledge to safely and effectively deploy generative AI tools within enterprise security guardrails.",
      tone: "muted",
    },
  ],
  technologies: [
    "AWS / Azure / GCP",
    "Kubernetes",
    "Terraform",
    "LangChain",
    "Python",
    "Java Enterprise",
    "React / Node.js",
  ],
  whyImage: "/img1/planning-session.jpeg",
  whyChoose: [
    {
      title: "Practitioners, Not Just Trainers",
      desc: "Your teams learn from senior engineers and architects who actively build enterprise systems daily.",
    },
    {
      title: "Bespoke Curriculum",
      desc: "We do not do off-the-shelf. Every module is tailored to your organization's specific tech stack and strategic goals.",
    },
    {
      title: "Measurable Outcomes",
      desc: "We tie our engagements to tangible metrics like deployment frequency, code quality, and certification pass rates.",
    },
  ],
  engagementModels: [
    {
      title: "Immersive Bootcamps",
      desc: "Intensive 1-2 week full-time sessions designed to rapidly skill up teams on a net-new technology stack.",
      points: ["Focused delivery", "Rapid capability lift"],
      accent: "teal" as const,
    },
    {
      title: "Continuous Coaching",
      desc: "Weekly paired programming, architecture reviews, and mentorship sessions spanning 3-6 months.",
      points: ["Embedded coaching", "Long-term iteration"],
      accent: "gold" as const,
    },
    {
      title: "Executive Workshops",
      desc: "High-level 1-2 day strategic alignment and capability mapping sessions for technical leadership.",
      points: ["Leadership alignment", "Technology roadmap"],
      accent: "black" as const,
    },
  ],
  processSteps: [
    { title: "Assess", desc: "Evaluate current team capabilities against strategic objectives." },
    { title: "Design", desc: "Create customized curricula tailored to your environment." },
    { title: "Deliver", desc: "Execute workshops, bootcamps, and coaching sessions." },
    { title: "Evaluate", desc: "Measure progress, gather feedback, and iterate for continuous improvement." },
  ],
  relatedServices: [
    { title: "Cloud Consulting", desc: "Architect and migrate to scalable cloud infrastructure." },
    { title: "Artificial Intelligence", desc: "Custom ML models and generative AI enterprise integrations." },
    { title: "Data Strategy & Governance", desc: "Secure and structure your organizational data for AI readiness." },
  ],
  ctaTitle: "Ready to upskill your engineering teams?",
  ctaText:
    "Connect with our senior architects to design a bespoke training curriculum that accelerates your technology roadmap.",
} satisfies ServiceDetailData;
