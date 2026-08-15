import {
  Activity,
  Award,
  BarChart3,
  Blocks,
  BrainCircuit,
  Braces,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Globe2,
  GraduationCap,
  Landmark,
  LineChart,
  Monitor,
  Network,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users2,
  Wrench,
} from "lucide-react";
import type { BatchServiceData } from "@/components/BatchServicePage";

const hireHref = "/hire-developers#request-talent";
const batch2Root = "batch2/Jahid Sami's team library";
const cssNotes = "Batch 2 exported Figma CSS notes";

export const cloudConsultingService: BatchServiceData = {
  title: "Cloud Consulting",
  slug: "cloud-consulting",
  route: "/services/cloud-consulting",
  description:
    "Navigate cloud adoption with architectural guidance, operating-roadmap clarity, and vendor-neutral modernization strategy.",
  designFile: `${batch2Root}/Main.png`,
  cssFile: `${cssNotes}: Cloud Consulting | Softzino Technologies`,
  assetFiles: [
    "/images/batch2/cloud-consulting-overview.png",
    "/images/batch2/cloud-consulting-case.png",
  ],
  hero: {
    theme: "light",
    layout: "plain",
    breadcrumb: true,
    eyebrow: "Service Offering",
    title: "Strategic Cloud Consulting",
    subtitle:
      "Navigate your cloud journey with expert architectural guidance. We provide the strategic clarity and technical roadmap required to transform your infrastructure into a scalable, secure, and cost-efficient foundation.",
    primary: { label: "Schedule Assessment", href: hireHref, variant: "dark" },
  },
  sections: [
    {
      type: "stats",
      theme: "dark",
      stats: [
        { value: "40%", label: "Average Cost Reduction" },
        { value: "100+", label: "Enterprise Migrations" },
        { value: "99.9%", label: "Uptime Reliability" },
        { value: "3x", label: "Faster Deployment" },
      ],
    },
    {
      type: "overview",
      theme: "white",
      title: "Foundational Strategy for the Digital Enterprise",
      body: [
        "Moving to the cloud is more than a technological shift; it is a fundamental business transformation. Our Cloud Consulting practice delivers expert assessment, strategy development, and roadmap planning to ensure your cloud adoption aligns perfectly with your long-term business objectives.",
        "We strip away the complexity of modern cloud ecosystems, providing clear, actionable intelligence that mitigates risk while maximizing operational agility.",
      ],
      image: {
        src: "/images/batch2/cloud-consulting-overview.png",
        alt: "Abstract cloud architecture model used for cloud consulting strategy",
        overlayTitle: "Expert Architectural Guidance",
      },
    },
    {
      type: "cards",
      theme: "muted",
      eyebrow: "Business Outcomes",
      title: "Quantifiable Impact on Operations",
      columns: 3,
      cards: [
        {
          icon: Gauge,
          title: "Reduced Infrastructure Costs",
          desc: "Identify and eliminate waste, optimize resource allocation, and implement FinOps best practices to significantly lower your total cost of ownership.",
        },
        {
          icon: BarChart3,
          title: "Improved Scalability",
          desc: "Architect systems that automatically scale with demand, ensuring high performance during peak loads while minimizing idle resource expenditure.",
        },
        {
          icon: Rocket,
          title: "Accelerated Time-to-Market",
          desc: "Streamline deployment pipelines and modernize application architectures to deliver new features and products to your customers faster.",
        },
      ],
    },
    {
      type: "quote",
      theme: "dark",
      quote:
        "True cloud transformation isn't just about changing where your applications run; it's about fundamentally changing how your business operates at scale.",
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      eyebrow: "Our Offerings",
      title: "Comprehensive Cloud Capabilities",
      columns: 2,
      cardStyle: "numbered",
      cards: [
        {
          icon: Cloud,
          title: "Cloud Strategy & Roadmap",
          desc: "We align your IT strategy with business goals, assessing readiness and defining a comprehensive migration or modernization roadmap that minimizes disruption.",
        },
        {
          icon: Search,
          title: "Architecture Audit",
          desc: "Deep-dive analysis of your existing infrastructure against Well-Architected Framework principles to identify bottlenecks, single points of failure, and technical debt.",
        },
        {
          icon: Gauge,
          title: "Cost Optimization",
          desc: "Implementation of FinOps methodologies, right-sizing resources, and purchasing strategies to bring immediate and sustained financial efficiency to your cloud spend.",
        },
        {
          icon: ShieldCheck,
          title: "Security & Compliance",
          desc: "Rigorous security posture assessments and compliance mapping to ensure your cloud environments meet industry regulations (HIPAA, PCI-DSS, SOC2) and zero-trust standards.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "muted",
      title: "Tools of the Trade",
      intro:
        "We maintain deep expertise across all major cloud providers and infrastructure-as-code ecosystems to deliver vendor-neutral, optimal solutions.",
      technologies: ["AWS", "Azure", "Google Cloud", "CloudFormation", "Terraform", "Kubernetes"],
      industryTitle: "Tailored for Complex Environments",
      industries: [
        {
          icon: Building2,
          title: "Enterprise IT",
          desc: "Legacy modernization and hybrid-cloud architectural alignment.",
        },
        {
          icon: Landmark,
          title: "Finance",
          desc: "High-frequency throughput with stringent regulatory compliance.",
        },
        {
          icon: ShieldCheck,
          title: "Healthcare",
          desc: "HIPAA-compliant data lakes and secure interoperability networks.",
        },
        {
          icon: Truck,
          title: "Retail",
          desc: "Elastic scalability to seamlessly handle seasonal traffic spikes.",
        },
      ],
    },
    {
      type: "process",
      theme: "white",
      title: "Our Engagement Methodology",
      steps: [
        {
          title: "Discovery",
          desc: "Stakeholder interviews and current-state infrastructure analysis.",
        },
        {
          title: "Assessment",
          desc: "Gap analysis against best practices and security frameworks.",
        },
        {
          title: "Strategy",
          desc: "Formulation of the target architecture and operational model.",
        },
        {
          title: "Roadmap",
          desc: "Phased execution plan with risk mitigation and cost projections.",
        },
      ],
    },
    {
      type: "overview",
      theme: "muted",
      eyebrow: "Featured Success",
      title: "Global Logistics Provider Reduces IT Spend by 35%",
      body: [
        "Through a comprehensive architecture audit and right-sizing strategy, we restructured their AWS environment, unlocking massive capital while improving systemic resilience.",
      ],
      image: {
        src: "/images/batch2/cloud-consulting-case.png",
        alt: "Cloud consulting case study visual for a logistics provider",
      },
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "Cloud Migration",
          desc: "Execute seamless transitions from on-premise to cloud infrastructure.",
        },
        {
          title: "DevOps",
          desc: "Implement CI/CD pipelines and infrastructure as code to accelerate delivery.",
        },
        {
          title: "Application Modernization",
          desc: "Refactor legacy monolithic applications into cloud-native microservices.",
        },
      ],
    },
    {
      type: "cta",
      theme: "black",
      title: "Ready to optimize your cloud architecture?",
      text: "Connect with our senior cloud architects to discuss your infrastructure challenges and chart a path to technological maturity.",
      button: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
    },
  ],
};

export const cloudMigrationService: BatchServiceData = {
  title: "Cloud Migration",
  slug: "cloud-migration",
  route: "/services/cloud-migration",
  description:
    "Move workloads, applications, and data to modern cloud environments with risk-controlled migration architecture.",
  designFile: `${batch2Root}/Main-1.png`,
  cssFile: `${cssNotes}: Cloud Migration | Softzino Technologies`,
  assetFiles: [
    "/images/batch2/cloud-migration-hero.png",
    "/images/batch2/cloud-migration-industries.png",
  ],
  hero: {
    theme: "light",
    layout: "stacked",
    breadcrumb: true,
    title: "Seamless Cloud Migration",
    subtitle: "Modernize your infrastructure with risk-free data and application migration.",
    media: {
      src: "/images/batch2/cloud-migration-hero.png",
      alt: "Cloud migration visual showing data moving from servers into cloud infrastructure",
    },
    primary: { label: "Talk to an Expert", href: hireHref, variant: "dark" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      title: "Service Overview",
      body: [
        "Transitioning to the cloud is a critical step in achieving operational agility and scalability. Our end-to-end cloud migration services are designed to minimize risk and maximize value. We guide you through the complexities of moving workloads, applications, and data to modern cloud environments, ensuring a secure and efficient transition.",
      ],
      cards: [
        {
          icon: RefreshCw,
          title: "Rehosting",
          desc: 'Rapid "lift-and-shift" to cloud infrastructure with minimal changes.',
          tone: "gray",
        },
        {
          icon: Rocket,
          title: "Replatforming",
          desc: "Modifying applications to leverage cloud-native capabilities efficiently.",
          tone: "gray",
        },
        {
          icon: Wrench,
          title: "Refactoring",
          desc: "Re-architecting applications entirely for optimal cloud performance.",
          tone: "gray",
        },
      ],
    },
    {
      type: "cards",
      theme: "dark",
      centered: true,
      title: "Business Outcomes",
      intro:
        "Migrating to the cloud is not just an IT upgrade; it's a strategic business enabler designed to unlock new levels of performance and flexibility.",
      columns: 3,
      cards: [
        {
          icon: Gauge,
          title: "Zero Downtime",
          desc: "Execute migrations smoothly without disrupting ongoing business operations or customer experiences.",
        },
        {
          icon: Activity,
          title: "Enhanced Performance",
          desc: "Leverage scalable resources to significantly boost application responsiveness and data processing speeds.",
        },
        {
          icon: Blocks,
          title: "Operational Flexibility",
          desc: "Adapt quickly to market changes with flexible infrastructure that scales precisely to your needs.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      title: "Our Offerings",
      intro: "Comprehensive solutions tailored to navigate the complexities of your unique migration journey.",
      columns: 4,
      cards: [
        {
          icon: Rocket,
          title: "Lift & Shift",
          desc: "Fast and reliable rehosting of existing applications and data sets to modern cloud environments without altering underlying architecture.",
        },
        {
          icon: Database,
          title: "Database Migration",
          desc: "Securely migrate complex relational and non-relational databases with minimal downtime and zero data loss.",
        },
        {
          icon: Wrench,
          title: "Application Refactoring",
          desc: "Modernize legacy codebases to adopt cloud-native features, microservices architecture, and serverless computing.",
        },
        {
          icon: ShieldCheck,
          title: "Post-Migration Validation",
          desc: "Rigorous testing and optimization post-migration to ensure security compliance, performance tuning, and operational readiness.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      intro: "Leveraging industry-leading platforms and tools to orchestrate flawless cloud migrations.",
      technologies: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Docker", "Kubernetes", "Terraform", "Ansible"],
      industryTitle: "Industries We Empower",
      industries: [
        { icon: Factory, title: "Manufacturing", desc: "Optimizing supply chains and production with connected infrastructure." },
        { icon: Truck, title: "Logistics", desc: "Real-time tracking and scalable operations powered by elastic cloud." },
        { icon: Cloud, title: "SaaS", desc: "Ensuring high availability and global scale for multi-tenant platforms." },
        { icon: Landmark, title: "Banking", desc: "Secure, compliant migrations meeting stringent financial requirements." },
      ],
    },
    {
      type: "related",
      theme: "muted",
      services: [
        {
          title: "Cloud Consulting",
          desc: "Strategic guidance to align your cloud adoption roadmap with business objectives and compliance requirements.",
        },
        {
          title: "Cloud Managed Services",
          desc: "Ongoing monitoring, maintenance, and optimization of your cloud infrastructure to ensure continuous performance.",
        },
        {
          title: "Application Modernization",
          desc: "Transforming monolithic applications into agile, microservices-based architectures ready for the cloud era.",
        },
      ],
    },
    {
      type: "cta",
      theme: "black",
      title: "Ready to migrate with confidence?",
      text: "Connect with our cloud architects to discuss your current infrastructure and discover how we can design a seamless, zero-downtime migration strategy.",
      button: { label: "Schedule a Discovery Call", href: hireHref, variant: "gold" },
    },
  ],
};

export const cloudManagedServicesService: BatchServiceData = {
  title: "Cloud Managed Services",
  slug: "cloud-managed-services",
  route: "/services/cloud-managed-services",
  description:
    "Operate cloud platforms with proactive monitoring, security management, backup, recovery, and performance optimization.",
  designFile: `${batch2Root}/Main-2.png`,
  cssFile: `${cssNotes}: Cloud Managed Services | Softzino Technologies`,
  assetFiles: [
    "/images/batch2/cloud-managed-overview.png",
    "/images/batch2/cloud-managed-industries.png",
  ],
  hero: {
    theme: "black",
    layout: "plain",
    breadcrumb: true,
    title: "Cloud Managed Services",
    subtitle:
      "24/7 proactive monitoring and management of your cloud ecosystem. Ensure high availability, security, and peak performance of your critical workloads.",
    primary: { label: "Schedule a Consultation", href: hireHref, variant: "gold" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Comprehensive Management",
      body: [
        "We take the complexity out of cloud operations. Our managed services guarantee high availability, strict security compliance, and peak performance for your enterprise workloads, allowing your internal teams to focus on strategic initiatives rather than daily maintenance.",
      ],
      image: {
        src: "/images/batch2/cloud-managed-overview.png",
        alt: "Cloud operations command center monitoring managed cloud workloads",
      },
    },
    {
      type: "cards",
      theme: "muted",
      eyebrow: "Outcomes",
      title: "Measurable Impact",
      columns: 3,
      cards: [
        {
          icon: Gauge,
          title: "99.9% Uptime Guarantee",
          desc: "Continuous monitoring and automated failover protocols ensure your applications remain online and accessible.",
        },
        {
          icon: Activity,
          title: "Reduced Internal Overhead",
          desc: "Free up your IT staff from routine maintenance tasks, lowering operational costs and improving strategic focus.",
        },
        {
          icon: ShieldCheck,
          title: "Continuous Security",
          desc: "Proactive vulnerability scanning and continuous security patching keep your data safe from emerging threats.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "black",
      title: "Our Managed Offerings",
      columns: 2,
      cards: [
        {
          icon: Monitor,
          title: "24/7 Monitoring & Support",
          desc: "Round-the-clock surveillance of your cloud environment with rapid incident response and resolution by certified engineers.",
        },
        {
          icon: ShieldCheck,
          title: "Security Management",
          desc: "Identity and access management, firewall configuration, compliance auditing, and threat detection.",
        },
        {
          icon: Cloud,
          title: "Backup & Disaster Recovery",
          desc: "Automated backup schedules, robust data retention policies, and rapid failover mechanisms to prevent data loss.",
        },
        {
          icon: Settings,
          title: "Performance Optimization",
          desc: "Continuous right-sizing of resources, cost optimization strategies, and bottleneck resolution.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "muted",
      title: "Technologies We Master",
      intro: "We leverage industry-leading tools to provide granular visibility and control over your cloud infrastructure.",
      technologies: ["Prometheus", "Grafana", "AWS CloudWatch", "Azure Monitor", "Datadog"],
      industryTitle: "Industry Expertise",
      industries: [
        { icon: ShoppingBag, title: "E-commerce" },
        { icon: Globe2, title: "Media" },
        { icon: ShieldCheck, title: "Healthcare" },
        { icon: Landmark, title: "Finance" },
      ],
    },
    {
      type: "related",
      theme: "white",
      title: "Explore Related Services",
      services: [
        { title: "Cloud Consulting", desc: "Plan the operating model and architecture before managed operations begin." },
        { title: "DevOps", desc: "Automate delivery and operational workflows across your cloud estate." },
        { title: "Quality Engineering", desc: "Automated testing and QA integration." },
      ],
    },
  ],
};

export const devopsService: BatchServiceData = {
  title: "DevOps",
  slug: "devops",
  route: "/services/devops",
  description:
    "Bridge development and operations with CI/CD automation, infrastructure as code, orchestration, and reliability engineering.",
  designFile: `${batch2Root}/Main-3.png`,
  cssFile: `${cssNotes}: DevOps | Softzino Technologies`,
  hero: {
    theme: "light",
    layout: "plain",
    breadcrumb: true,
    eyebrow: "Service Offering",
    title: "DevOps & CI/CD Engineering",
    subtitle:
      "Bridge the gap between development and operations with automated pipelines. We implement robust DevOps practices to accelerate delivery and improve software quality through automation.",
    primary: { label: "Schedule a Call", href: hireHref, variant: "dark" },
    secondary: { label: "Explore Offerings", href: "#offerings", variant: "outline" },
  },
  sections: [
    {
      type: "cards",
      theme: "muted",
      title: "Why Invest in DevOps?",
      intro: "Transforming operational overhead into strategic advantage.",
      columns: 3,
      cards: [
        {
          icon: Gauge,
          title: "Faster Release Cycles",
          desc: "Automated testing and deployment pipelines reduce time-to-market and enable continuous delivery of value.",
        },
        {
          icon: Users2,
          title: "Improved Collaboration",
          desc: "Break down silos between development, QA, and operations teams with unified tooling and shared responsibilities.",
        },
        {
          icon: Blocks,
          title: "Automated Scaling",
          desc: "Infrastructure as code and container orchestration ensure systems scale dynamically to meet demand.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      centered: true,
      eyebrow: "Our Expertise",
      title: "Comprehensive DevOps Solutions",
      intro: "End-to-end engineering practices designed to optimize your software development lifecycle.",
      columns: 2,
      cards: [
        {
          icon: GitBranch,
          title: "CI/CD Pipeline Automation",
          desc: "Design and implementation of continuous integration and continuous deployment pipelines to automate testing, building, and release processes.",
          bullets: ["Automated Testing Integration", "Zero-downtime Deployments", "Release Management"],
        },
        {
          icon: Server,
          title: "Infrastructure as Code (IaC)",
          desc: "Provision and manage infrastructure through machine-readable definition files rather than physical hardware configuration or interactive configuration tools.",
          bullets: ["Terraform & CloudFormation", "Immutable Infrastructure", "Configuration Management"],
        },
        {
          icon: Cpu,
          title: "Container Orchestration",
          desc: "Deployment, management, scaling, and networking of containers to ensure application reliability and portability across environments.",
          bullets: ["Kubernetes Cluster Management", "Docker Containerization", "Microservices Architecture"],
        },
        {
          icon: LineChart,
          title: "Site Reliability Engineering (SRE)",
          desc: "Applying software engineering approaches to system administration to create highly reliable and scalable software systems.",
          bullets: ["Observability & Monitoring", "Incident Response Automation", "SLOs & Error Budgets"],
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "black",
      title: "Tech Stack",
      intro: "We utilize industry-leading technologies to build resilient, scalable, and secure operational pipelines.",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform"],
      industryTitle: "Industries We Serve",
      industries: [
        { title: "SaaS" },
        { title: "FinTech" },
        { title: "EdTech" },
      ],
    },
    {
      type: "related",
      theme: "white",
      title: "Related Services",
      services: [
        { title: "Cloud Managed Services", desc: "Ongoing cloud optimization and support." },
        { title: "Quality Engineering", desc: "Automated testing and QA integration." },
        { title: "Cloud Consulting", desc: "Plan scalable cloud architecture and operating practices." },
      ],
    },
  ],
};

export const dataStrategyGovernanceService: BatchServiceData = {
  title: "Data Strategy & Governance",
  slug: "data-strategy-and-governance",
  route: "/services/data-strategy-and-governance",
  description:
    "Define trusted data policies, ownership models, quality controls, and governance frameworks for modern enterprise data.",
  designFile: `${batch2Root}/Main-4.png`,
  cssFile: `${cssNotes}: Data Strategy & Governance | Softzino Technologies`,
  assetFiles: ["/images/batch2/data-strategy-hero.png"],
  hero: {
    theme: "black",
    layout: "split",
    eyebrow: "Enterprise Data Services",
    title: "Data Strategy & Governance Engineering",
    subtitle:
      "Align your data assets with business goals through robust frameworks and ethical compliance. We build the foundation for trusted, high-quality data that drives definitive decision-making.",
    media: {
      src: "/images/batch2/data-strategy-hero.png",
      alt: "Data strategy and governance design reference panel",
    },
    primary: { label: "Schedule a Consultation", href: hireHref, variant: "gold" },
    secondary: { label: "Explore Offerings", href: "#definition", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      eyebrow: "Overview",
      title: "The Foundation of Trusted Data",
      body: [
        "Data Strategy & Governance is the cornerstone of any modern data-driven enterprise. It defines the policies, processes, and architectures necessary to ensure that data is accurate, accessible, secure, and compliant.",
        "Without a robust governance framework, data silos emerge, quality degrades, and the risk of regulatory non-compliance skyrockets. Our approach establishes clear ownership, standardized metadata, and rigorous quality controls, transforming raw data into a trusted asset for strategic decision-making.",
      ],
    },
    {
      type: "cards",
      id: "definition",
      theme: "muted",
      centered: true,
      eyebrow: "Definition",
      title: "What is Data Strategy & Governance?",
      columns: 3,
      cards: [
        {
          icon: Network,
          title: "Strategic Frameworks",
          desc: "Developing long-term roadmaps for data architecture, infrastructure, and utilization aligned strictly with overarching business objectives.",
        },
        {
          icon: ShieldCheck,
          title: "Data Ownership",
          desc: "Establishing clear roles (stewards, custodians) and responsibilities to ensure accountability for data quality and security across the lifecycle.",
        },
        {
          icon: Sparkles,
          title: "Quality Management",
          desc: "Implementing proactive monitoring, cleansing processes, and validation rules to maintain high data integrity and reliability.",
        },
      ],
    },
  ],
};

export const dataMigrationService: BatchServiceData = {
  title: "Data Migration",
  slug: "data-migration",
  route: "/services/data-migration",
  description:
    "Transfer enterprise data between platforms with mapping, cleansing, validation, integrity protection, and modernization readiness.",
  designFile: `${batch2Root}/Main-5.png`,
  cssFile: `${cssNotes}: Data Migration | Softzino Technologies`,
  hero: {
    theme: "dark",
    layout: "plain",
    breadcrumb: true,
    title: "Seamless Data Migration Services.",
    subtitle:
      "Transition your data assets to modern cloud platforms with zero downtime and total integrity. We architect risk-free pathways from legacy to future-state data ecosystems.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Strategic Movement. Absolute Integrity.",
      body: [
        "Data migration isn't just about moving bits - it's the strategic restructuring of your enterprise's most valuable asset. We focus on selecting, preparing, extracting, and transforming data for permanent transfer with mathematical precision.",
      ],
      cards: [
        {
          icon: Blocks,
          title: "What is it?",
          desc: "The rigorous process of mapping, cleaning, and transferring data between diverse systems and platforms.",
        },
        {
          icon: Rocket,
          title: "Why you need it",
          desc: "Essential for legacy modernization, secure cloud adoption, or consolidating disparate data silos after M&A.",
        },
      ],
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Business Outcomes",
      columns: 3,
      cards: [
        {
          icon: ShieldCheck,
          title: "Minimized Risk",
          desc: "Automated validation and fallback mechanisms ensure zero data loss and strict compliance continuity.",
        },
        {
          icon: Gauge,
          title: "Enhanced Performance",
          desc: "Refactored schemas and optimized indexing during migration lead to lightning-fast query times.",
        },
        {
          icon: LineChart,
          title: "Accelerated Transformation",
          desc: "Unlock AI, advanced analytics, and microservices architectures by democratizing your legacy data.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      title: "Core Migration Offerings",
      columns: 4,
      cards: [
        {
          icon: Cloud,
          title: "Cloud Data Migration",
          desc: "Seamless transition to AWS, Azure, or GCP with minimal downtime architectures.",
        },
        {
          icon: Database,
          title: "Database Refactoring",
          desc: "Schema redesign from monolithic relational DBs to modern NoSQL or distributed SQL.",
        },
        {
          icon: Sparkles,
          title: "Validation & Cleaning",
          desc: "Automated data profiling, deduplication, and anomaly detection prior to movement.",
        },
        {
          icon: Server,
          title: "Legacy Extraction",
          desc: "Custom parsing and extraction from mainframes and deprecated proprietary formats.",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to Modernize?",
      text: "Schedule a discovery call with our migration architects to assess your current data landscape.",
      button: { label: "Schedule a Call", href: hireHref, variant: "gold" },
    },
  ],
};

export const reportingBusinessIntelligenceService: BatchServiceData = {
  title: "Reporting & Business Intelligence",
  slug: "reporting-and-business-intelligence",
  route: "/services/reporting-and-business-intelligence",
  description:
    "Convert raw data into dashboards, analytical narratives, predictive reporting, and operational transparency.",
  designFile: `${batch2Root}/Main-6.png`,
  cssFile: `${cssNotes}: Reporting & Business Intelligence | Softzino Technologies`,
  assetFiles: ["/images/batch2/reporting-bi-overview.png"],
  hero: {
    theme: "light",
    layout: "plain",
    breadcrumb: true,
    title: "Actionable Business Intelligence & Reporting",
    subtitle: "Transform raw data into strategic foresight with immersive visualizations and predictive reporting.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "dark" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Synthesizing Complexity into Clarity.",
      body: [
        "Describing the synthesis of data into meaningful business narratives and dashboards. We don't just present numbers; we build interactive analytical environments that empower decision-makers to explore, query, and understand their operational realities in real-time.",
        "By layering predictive models onto historical data, we transition your reporting from a rear-view mirror into a strategic compass.",
      ],
      image: {
        src: "/images/batch2/reporting-bi-overview.png",
        alt: "Business intelligence dashboard being reviewed in a meeting",
        overlayTitle: "Clarity From Data",
      },
    },
    {
      type: "cards",
      theme: "muted",
      title: "The Visual Data Layer",
      intro:
        "Creating the visual layer where stakeholders interact with data to derive insights. It is the crucial translation mechanism between raw database architectures and human cognition, transforming rows and columns into intuitive visual narratives.",
      columns: 2,
      cards: [
        {
          icon: BarChart3,
          title: "What is it?",
          desc: "The crucial translation mechanism between raw database architectures and human cognition.",
          tone: "gray",
        },
        {
          icon: LineChart,
          title: "Strategic Foresight",
          desc: "To identify market trends, optimize operational efficiency, and drive ROI. Without robust BI, organizations operate on intuition rather than empirical evidence, risking misallocation of resources and missed market opportunities.",
          tone: "black",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "Business Outcomes",
      columns: 3,
      cards: [
        {
          icon: Blocks,
          title: "Data-Driven Culture",
          desc: "Empower every level of the organization to base decisions on democratized, trusted data sources rather than departmental silos.",
        },
        {
          icon: LineChart,
          title: "Increased Profitability",
          desc: "Identify cost-saving opportunities and revenue leakage through granular visibility into operational metrics.",
        },
        {
          icon: Activity,
          title: "Operational Transparency",
          desc: "Establish a single source of truth across the enterprise, aligning disparate departments around unified KPIs.",
        },
      ],
    },
  ],
};

export const staffAugmentationService: BatchServiceData = {
  title: "Staff Augmentation",
  slug: "staff-augmentation",
  route: "/services/staff-augmentation",
  description:
    "Integrate vetted senior engineers into your existing workflows to close skill gaps and accelerate delivery.",
  designFile: `${batch2Root}/Main-7.png`,
  cssFile: `${cssNotes}: Staff Augmentation | Softzino Technologies`,
  assetFiles: ["/images/batch2/staff-augmentation-hero.png"],
  hero: {
    theme: "light",
    layout: "split",
    eyebrow: "Service Offering",
    title: "Staff Augmentation",
    subtitle:
      "Seamlessly scale your technical capability. We integrate top-tier engineering talent into your existing workflows to close skill gaps and accelerate project delivery, without the overhead of traditional hiring.",
    media: {
      src: "/images/batch2/staff-augmentation-hero.png",
      alt: "Augmented engineering team joining an implementation workshop",
      overlayTitle: "Rapid Deployment",
      overlayText: "Experts integrated in under 14 days.",
    },
    primary: { label: "Augment Your Team", href: hireHref, variant: "dark" },
    secondary: { label: "View Engineering Bench", href: "#tech", variant: "outline" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Strategic Scale, Tactical Precision.",
      body: [
        "Softzino's Staff Augmentation model bypasses the traditional constraints of recruitment. Whether you need niche expertise for a critical migration or a surge of resources to meet a tight deadline, we provide vetted, senior-level engineers who adapt instantly to your technical environment and culture.",
        "Unlike outsourced project teams, augmented staff operate directly under your management, using your tools and methodologies. This ensures total control over the development lifecycle while benefiting from our rigorous talent acquisition and retention frameworks.",
      ],
      cards: [
        {
          icon: Gauge,
          title: "Velocity",
          desc: "Bypass months of hiring. Deploy proven talent immediately.",
        },
        {
          icon: Settings,
          title: "Flexibility",
          desc: "Scale up or down precisely based on project demands.",
        },
        {
          icon: Landmark,
          title: "Control",
          desc: "Direct management integration. Your team, your rules.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "black",
      eyebrow: "Core Capabilities",
      title: "Targeted Augmentation Offerings",
      columns: 4,
      cards: [
        {
          icon: Code2,
          title: "On-demand Technical Expertise",
          desc: "Access highly specialized engineers - from cloud architects to niche frontend developers - exactly when your project requires them, without long-term commitments.",
        },
        {
          icon: Rocket,
          title: "Rapid Scale-up",
          desc: "Instantly inject critical mass into your development cycles. We assemble and deploy coordinated groups of engineers to accelerate stalled projects or meet aggressive deadlines.",
        },
        {
          icon: Briefcase,
          title: "Flexible Contract Terms",
          desc: "Dynamic engagement models tailored to your financial and operational realities. Adjust team sizes month-to-month based on evolving product roadmaps.",
        },
        {
          icon: GraduationCap,
          title: "Knowledge Transfer",
          desc: "Structured handoffs and documentation are built into every engagement, ensuring your internal team retains full domain knowledge and technical capability upon completion.",
        },
      ],
    },
    {
      type: "tech-industries",
      id: "tech",
      theme: "muted",
      title: "Engineering Excellence Stack",
      intro:
        "Our talent pool represents deep mastery across modern enterprise technologies. We augment teams with senior engineers fluent in the Softzino core stack.",
      technologies: ["React Ecosystem", "Node.js", "Python", "Java Enterprise", "Kubernetes", "AWS / Azure / GCP", "PostgreSQL", "GraphQL", "Terraform"],
    },
    {
      type: "process",
      theme: "white",
      title: "Integration Process",
      steps: [
        {
          title: "Requirement Analysis",
          desc: "Deep dive into technical needs, culture fit, and project timeline.",
        },
        {
          title: "Talent Selection",
          desc: "Curated presentation of pre-vetted senior engineers matching your criteria.",
        },
        {
          title: "Onboarding",
          desc: "Seamless integration into your communication channels, repos, and agile rituals.",
        },
        {
          title: "Continuous Delivery",
          desc: "Ongoing performance monitoring and administrative support by Softzino.",
        },
      ],
    },
    {
      type: "cta",
      theme: "gold",
      title: "Ready to accelerate your engineering roadmap?",
      text: "Speak with our technical engagement managers to identify the exact expertise required to hit your milestones.",
      button: { label: "Schedule a Capability Review", href: hireHref, variant: "dark" },
    },
    {
      type: "related",
      theme: "muted",
      title: "Related Engagement Models",
      services: [
        { title: "Dedicated Development Team", desc: "Long-term autonomous squads for product lifecycle ownership." },
        { title: "Team Extension", desc: "A native extension of your engineering workflow and sprint rituals." },
        { title: "IT Staffing", desc: "Consulting and search support for strategic technical hiring." },
      ],
    },
  ],
};

export const dedicatedDevelopmentTeamService: BatchServiceData = {
  title: "Dedicated Development Team",
  slug: "dedicated-development-team",
  route: "/services/dedicated-development-team",
  description:
    "Build autonomous, full-cycle product squads that operate as a long-term engineering extension of your organization.",
  designFile: `${batch2Root}/Main-8.png`,
  cssFile: `${cssNotes}: Dedicated Development Team | Softzino Technologies`,
  assetFiles: ["/images/batch2/dedicated-team-hero.png"],
  hero: {
    theme: "light",
    layout: "split",
    eyebrow: "Service Offering",
    title: "Dedicated Development Team",
    subtitle:
      "Scale your engineering capacity with autonomous, full-cycle product teams that function as a seamless extension of your organization. Built for long-term strategic execution.",
    media: {
      src: "/images/batch2/dedicated-team-hero.png",
      alt: "Dedicated development team working in a collaborative engineering office",
    },
    primary: { label: "Build Your Squad", href: hireHref, variant: "dark" },
    secondary: { label: "View Engagement Models", href: "#capabilities", variant: "outline" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      title: "Seamless Engineering Extension",
      body: [
        "Our Dedicated Development Team model provides complete, cross-functional squads equipped to take full ownership of your product lifecycle. We bypass the friction of traditional outsourcing by embedding directly into your culture, toolchain, and strategic roadmap.",
      ],
      cards: [
        {
          icon: RefreshCw,
          title: "Full-Cycle Product Ownership",
          desc: "From architecture design to deployment and continuous iteration, our teams take holistic responsibility for deliverables, removing micro-management overhead from your internal leadership.",
        },
        {
          icon: Users2,
          title: "Cross-Functional Autonomy",
          desc: "We assemble squads comprising architects, developers, QA engineers, and Agile delivery managers tailored precisely to your technology stack and business domain.",
        },
        {
          icon: ShieldCheck,
          title: "Cultural & Operational Alignment",
          desc: "Our engineers adapt to your time zone, communication rhythms, and security protocols, ensuring the partnership feels like a true extension of your headquarters.",
        },
      ],
    },
    {
      type: "stats",
      theme: "white",
      stats: [
        {
          value: "40%",
          label: "Average Acceleration vs Traditional Hiring",
          desc: "Faster time-to-market.",
        },
      ],
    },
    {
      type: "cards",
      id: "capabilities",
      theme: "white",
      centered: true,
      title: "Dedicated Capabilities",
      intro: "Comprehensive engineering disciplines combined into high-performing, self-sufficient squads.",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Code2,
          title: "Full-Stack Development Squads",
          desc: "End-to-end engineering teams capable of handling complex microservices architectures, robust backend systems, and highly responsive frontend applications simultaneously.",
          bullets: ["Frontend (React/Angular)", "Backend (Java/.NET/Node)", "Database Architecture"],
          span: "wide",
        },
        {
          icon: ShieldCheck,
          title: "Quality Assurance",
          desc: "Embedded automation and manual testing engineers ensuring zero-defect deployments and maintaining rigorous quality standards throughout the CI/CD pipeline.",
          tone: "black",
        },
        {
          icon: GitBranch,
          title: "Agile Project Management",
          desc: "Certified Scrum Masters and Delivery Managers who drive sprint velocity, manage backlog prioritization, and facilitate transparent reporting via Jira/Confluence.",
        },
        {
          icon: Sparkles,
          title: "Strategic Tech Consulting",
          desc: "Senior Technical Leads and System Architects providing high-level guidance on cloud modernization, scalability bottlenecks, and technology stack optimization.",
        },
      ],
    },
  ],
};

export const itStaffingService: BatchServiceData = {
  title: "IT Staffing",
  slug: "it-staffing",
  route: "/services/it-staffing",
  description:
    "Secure top-tier technical talent through rigorous vetting, specialized sourcing, executive search, and flexible staffing models.",
  designFile: `${batch2Root}/Main-9.png`,
  cssFile: `${cssNotes}: IT Staffing | Softzino Technologies`,
  assetFiles: [
    "/images/batch2/it-staffing-network.png",
    "/images/batch2/it-staffing-metrics.png",
  ],
  hero: {
    theme: "black",
    layout: "plain",
    eyebrow: "Services / IT Staffing",
    title: "Securing Top-Tier Technical Talent for Market Leaders.",
    subtitle:
      "We bridge the gap between visionary enterprises and elite engineering talent. Our rigorous vetting process ensures you build highly capable teams aligned with your strategic objectives.",
    primary: { label: "Consult Our Experts", href: hireHref, variant: "gold" },
    secondary: { label: "View Candidate Profiles", href: "#models", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      title: "Precision Engineering Meets Human Capital.",
      body: [
        "In today's competitive landscape, finding the right technical expertise is the primary bottleneck for innovation. We don't just match keywords on a resume; we evaluate deep technical competency, problem-solving capability, and cultural fit.",
      ],
      image: {
        src: "/images/batch2/it-staffing-network.png",
        alt: "Technical talent network visualization for IT staffing",
        overlayTitle: "94%",
        overlayText: "Retention rate for placements after 18 months.",
      },
      cards: [
        {
          icon: BrainCircuit,
          title: "Rigorous Technical Vetting",
          desc: "Every candidate is assessed by our own senior engineering bench before they reach your desk.",
        },
        {
          icon: Gauge,
          title: "Accelerated Time-to-Hire",
          desc: "Leveraging our pre-vetted talent pool to reduce hiring cycles by up to 40%.",
        },
      ],
    },
    {
      type: "cards",
      id: "models",
      theme: "white",
      title: "Staffing Models",
      intro: "Flexible engagement frameworks designed to scale with your specific resource requirements.",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Briefcase,
          title: "Permanent Placement",
          desc: "For long-term strategic roles. We act as an extension of your talent acquisition team to source, evaluate, and secure specialized full-time employees who align with your core vision and technical stack.",
          bullets: ["Comprehensive behavioral & technical assessment", "Market intelligence & compensation advisory"],
          span: "wide",
        },
        {
          icon: Users2,
          title: "Contract-to-Hire",
          desc: "Mitigate hiring risks by evaluating performance, cultural fit, and technical delivery on-the-job before committing to a full-time offer.",
          tone: "black",
        },
        {
          icon: Search,
          title: "Specialized Sourcing",
          desc: "Targeted recruitment for niche or high-demand skill sets (e.g., AI/ML Engineers, Blockchain Architects, Kubernetes Specialists).",
        },
        {
          icon: Award,
          title: "Executive Search",
          desc: "Confidential, targeted search for C-suite and VP-level technical leadership (CTO, VP of Engineering, CISO) who can drive strategic transformation.",
        },
      ],
    },
    {
      type: "process",
      theme: "black",
      title: "Our Technical Validation Engine",
      intro:
        "We process thousands of candidates, but only the top 3% pass our rigorous standard. Here is how we separate exceptional talent from the rest.",
      steps: [
        {
          title: "Algorithmic Sourcing",
          desc: "We utilize proprietary data models to identify passive candidates across global tech hubs who match your specific criteria.",
        },
        {
          title: "Technical Screening",
          desc: "Live coding challenges and architecture discussions conducted by our internal senior developers, tailored to your tech stack.",
        },
        {
          title: "Behavioral Indexing",
          desc: "Assessment of communication skills, problem-solving under pressure, and alignment with your organizational culture.",
        },
        {
          title: "Final Presentation",
          desc: "You receive a curated shortlist of 2-4 highly qualified candidates, complete with detailed technical dossiers and interview recordings.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Domains We Staff",
      intro:
        "Our recruiters are domain specialists. We maintain active pipelines across these critical technology vectors.",
      technologies: [
        "AWS/Azure/GCP Architects",
        "DevOps Engineers",
        "Site Reliability (SRE)",
        "Cloud Security Experts",
        "Machine Learning Engineers",
        "Data Scientists",
        "Data Engineers",
        "LLM/GenAI Specialists",
        "Full-Stack Developers",
        "Mobile (iOS/Android)",
        "Frontend Architecture",
        "Backend Systems",
      ],
      industryTitle: "Tech Stack Agnostic",
      industries: [
        {
          icon: Braces,
          title: "Tech Stack Agnostic",
          desc: "From legacy modernization (Java, .NET) to bleeding-edge (Rust, Go, Web3), we map talent to your specific environment.",
        },
      ],
    },
    {
      type: "stats",
      theme: "muted",
      title: "The Cost of a Bad Hire is Extraordinary.",
      intro:
        "We mitigate risk through precision. Our placements consistently outperform industry averages in retention, ramp-up time, and technical contribution.",
      stats: [
        { value: "14d", label: "Average Time to First Submission" },
        { value: "3:1", label: "Interview to Offer Ratio" },
        { value: "10k+", label: "Pre-Vetted Engineering Network" },
      ],
    },
    {
      type: "related",
      theme: "white",
      title: "Alternative Engagement Models",
      intro: "Looking for team-level scale rather than individual placements?",
      services: [
        {
          title: "Staff Augmentation",
          desc: "Quickly scale your existing team with specialized engineers who integrate directly into your workflows and sprint cycles.",
        },
        {
          title: "Team Extension",
          desc: "Establish a dedicated, co-managed engineering pod that operates alongside your core team to accelerate roadmap delivery.",
        },
        {
          title: "Managed Engineering Team",
          desc: "End-to-end project delivery where we provide the full cross-functional team and take responsibility for outcomes.",
        },
      ],
    },
    {
      type: "cta",
      theme: "black",
      title: "Stop Settling for Average Talent.",
      text: "Discuss your technical hiring pipeline with our enterprise staffing specialists today. We are ready to deploy elite engineering capability to your hardest problems.",
      button: { label: "Start a Search", href: hireHref, variant: "gold" },
    },
  ],
};

export const forwardDeployedAiEngineeringService: BatchServiceData = {
  title: "Forward Deployed AI Engineering",
  slug: "forward-deployed-ai-engineering",
  route: "/services/forward-deployed-ai-engineering",
  description:
    "Embed specialized AI engineers into your operations to deploy custom LLM, ML, data, and edge AI solutions.",
  designFile: `${batch2Root}/Main-10.png`,
  cssFile: `${cssNotes}: Forward Deployed AI Engineering | Softzino Technologies`,
  assetFiles: ["/images/batch2/forward-ai-hero.png"],
  hero: {
    theme: "light",
    layout: "background",
    backgroundImage: "/images/batch2/forward-ai-hero.png",
    eyebrow: "Service Overview",
    title: "Forward Deployed AI Engineering",
    subtitle:
      "Accelerate your AI initiatives by embedding elite engineering talent directly into your organization. We bridge the gap between strategic vision and technical reality, deploying custom LLM and ML solutions that integrate seamlessly with your core systems.",
    primary: { label: "Explore Models", href: "#capabilities", variant: "dark" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Embedding Intelligence into Your Core Operations",
      body: [
        "Forward Deployed Engineering is not traditional consulting. It is a partnership model where our specialized AI engineers work alongside your internal teams, operating within your infrastructure and cultural context to solve complex problems rapidly.",
      ],
      cards: [
        {
          icon: Gauge,
          title: "Accelerated Delivery",
          desc: "Bypass the traditional hiring curve. Instantly augment your capabilities with deployment-ready AI expertise.",
        },
        {
          icon: Users2,
          title: "Seamless Integration",
          desc: "Engineers who understand both advanced ML models and enterprise software architecture constraints.",
        },
      ],
    },
    {
      type: "cards",
      id: "capabilities",
      theme: "muted",
      title: "Specialized Capabilities",
      columns: 2,
      cards: [
        {
          icon: Cpu,
          title: "AI Model Implementation",
          desc: "From fine-tuning pre-trained models to developing bespoke architectures from scratch, we deploy models that are optimized for your specific latency, throughput, and accuracy requirements.",
        },
        {
          icon: Database,
          title: "Data Engineering for AI",
          desc: "AI is only as good as the data fueling it. We design robust pipelines that ingest, clean, and structure unstructured enterprise data, making it ready for complex machine learning tasks.",
        },
        {
          icon: BrainCircuit,
          title: "Generative AI Strategy",
          desc: "We help you navigate the Generative AI landscape, identifying high-impact use cases and implementing secure, scalable LLM applications using LangChain and modern orchestration frameworks.",
        },
        {
          icon: Cpu,
          title: "Edge AI Deployment",
          desc: "Bring intelligence closer to the source. We optimize and deploy machine learning models on edge devices for real-time processing, reduced latency, and enhanced privacy.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "black",
      title: "Our Tech Stack",
      intro:
        "We leverage the latest frameworks and APIs to deliver state-of-the-art AI solutions. Our engineers are constantly evaluating emerging tools to ensure you stay ahead of the curve.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"],
    },
  ],
};

export const managedEngineeringTeamService: BatchServiceData = {
  title: "Managed Engineering Team",
  slug: "managed-engineering-team",
  route: "/services/managed-engineering-team",
  description:
    "Scale delivery through autonomous, managed engineering pods with technical leadership, SLAs, and performance transparency.",
  designFile: `${batch2Root}/Main-11.png`,
  cssFile: `${cssNotes}: Managed Engineering Team | Softzino Technologies`,
  assetFiles: ["/images/batch2/managed-team-hero.png"],
  hero: {
    theme: "black",
    layout: "split",
    eyebrow: "End-to-End Delivery",
    title: "Managed Engineering Team",
    subtitle:
      "Accelerate your roadmap with fully managed, autonomous delivery pods. We take complete ownership of technical execution, agile processes, and measurable outcomes, allowing your leadership to focus on strategic vision.",
    media: {
      src: "/images/batch2/managed-team-hero.png",
      alt: "Managed engineering delivery flow covering plan, build, test, deploy, monitor, and scale",
    },
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
    secondary: { label: "Explore Methodology", href: "#capabilities", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      eyebrow: "The Model",
      title: "Outcome-Driven Autonomy",
      body: [
        "Unlike traditional staff augmentation where you manage the day-to-day, our Managed Engineering Teams provide a turnkey solution for software delivery. We assemble cross-functional pods led by experienced Technical Leads who own the entire lifecycle - from architecture to deployment.",
        "This model is designed for organizations that need to scale delivery capacity rapidly without increasing management overhead. We integrate seamlessly with your product owners, establishing clear SLAs and KPIs to ensure predictable, high-quality results. Our proprietary delivery framework guarantees alignment with your architectural standards while injecting our best practices into the process.",
      ],
    },
    {
      type: "cards",
      id: "capabilities",
      theme: "muted",
      centered: true,
      eyebrow: "Core Capabilities",
      title: "Comprehensive Delivery Management",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Users2,
          title: "Managed Delivery Pods",
          desc: "Pre-configured, high-performing teams consisting of engineers, QA, DevOps, and a dedicated Delivery Manager. These pods operate autonomously to deliver complex initiatives on schedule.",
          span: "wide",
        },
        {
          icon: BarChart3,
          title: "SLA-Based Outcomes",
          desc: "We operate on strict Service Level Agreements governing velocity, quality, and uptime, ensuring predictable and measurable ROI for your engineering spend.",
        },
        {
          icon: Award,
          title: "Technical Leadership",
          desc: "Every team is guided by a seasoned Principal Engineer who ensures architectural integrity, mentors the pod, and aligns technical decisions with your long-term business goals.",
        },
        {
          icon: LineChart,
          title: "Real-Time Performance Monitoring",
          desc: "Complete transparency through customized dashboards. Track sprint velocity, code quality metrics, bug resolution times, and overall project health in real-time.",
          tone: "black",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Ecosystems We Master",
      intro:
        "Our managed teams are fluent in enterprise-grade technologies, ensuring robust, scalable, and secure deliverables across your entire stack.",
      technologies: ["Kubernetes", "React / Next.js", "Java Spring Boot", "Node.js / NestJS", "AWS / Azure / GCP", "PostgreSQL", "Terraform", "Datadog", "Snowflake"],
    },
    {
      type: "related",
      theme: "black",
      title: "Explore Other Approaches",
      services: [
        {
          title: "Dedicated Development Team",
          desc: "Expand your internal capacity with hand-picked engineers who integrate directly into your existing management model.",
        },
        {
          title: "IT Staffing",
          desc: "Rapidly acquire specialized talent for short-term projects or niche technical requirements.",
        },
        {
          title: "Cloud Managed Services",
          desc: "Outsource the day-to-day management, optimization, and security of your cloud infrastructure.",
        },
      ],
    },
  ],
};

export const teamExtensionService: BatchServiceData = {
  title: "Team Extension",
  slug: "team-extension",
  route: "/services/team-extension",
  description:
    "Augment engineering departments with specialized talent that integrates into your sprint rituals, tooling, and delivery cadence.",
  designFile: `${batch2Root}/Main-12.png`,
  cssFile: `${cssNotes}: Team Extension | Softzino Technologies`,
  assetFiles: ["/images/batch2/team-extension-hero.png"],
  hero: {
    theme: "black",
    layout: "background",
    backgroundImage: "/images/batch2/team-extension-hero.png",
    eyebrow: "Service Profile",
    title: "Team Extension",
    subtitle:
      "Augment your existing engineering departments with specialized skills. Boost development velocity and scale agile practices without the overhead of traditional hiring.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      title: "Strategic Augmentation.",
      body: [
        "Team Extension is not just outsourcing; it is the seamless integration of our elite engineering talent into your existing workflows. We provide the precise skills you need, exactly when you need them, functioning as a native extension of your internal team.",
      ],
      cards: [
        {
          icon: Wrench,
          title: "The Softzino Difference",
          desc: "We align culturally and technically, adopting your CI/CD pipelines, communication cadences, and quality standards to ensure zero friction from day one.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      title: "Core Offerings",
      intro: "Precision capabilities injected directly into your sprint cycles.",
      columns: 2,
      cards: [
        {
          icon: BrainCircuit,
          title: "Specialized Skill Injection",
          desc: "Access niche expertise - from Cloud Architects to AI Specialists - without the protracted recruitment cycle. Bridge critical skill gaps immediately.",
        },
        {
          icon: RefreshCw,
          title: "Continuous Integration",
          desc: "Our engineers plug directly into your existing CI/CD pipelines, adhering to your commit standards and deployment rhythms for uninterrupted delivery.",
        },
        {
          icon: Users2,
          title: "Collaborative Development",
          desc: "Fostering a unified team culture. We participate in daily standups, sprint planning, and retrospectives just like your internal staff.",
        },
        {
          icon: LineChart,
          title: "Agile Scaling",
          desc: "Scale your team size up or down dynamically based on project demands. Maintain agility without the constraints of fixed internal headcount.",
        },
      ],
    },
    {
      type: "process",
      theme: "black",
      title: "Engagement Pipeline",
      intro:
        "From requirement analysis to full integration, our methodology is designed for speed and alignment.",
      steps: [
        {
          title: "Scope & Skill Matrix",
          desc: "Identifying precise technical requirements and cultural fit criteria.",
        },
        {
          title: "Talent Alignment",
          desc: "Selecting the optimal engineers from our curated technical bench.",
        },
        {
          title: "Onboarding & Setup",
          desc: "Integrating into your communication channels, repos, and agile boards.",
        },
        {
          title: "Continuous Delivery",
          desc: "Executing sprints, participating in reviews, and driving velocity.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Tech Ecosystem.",
      intro: "We operate fluently across modern, cloud-native enterprise environments.",
      technologies: [
        "Jira / Confluence",
        "GitHub / GitLab",
        "AWS / Azure / GCP",
        "Docker / Kubernetes",
        "React / Angular / Vue",
        "Node.js / Python / Java / Go",
        "Jenkins / CircleCI",
        "Slack / Teams",
      ],
    },
    {
      type: "related",
      theme: "muted",
      title: "Explore Related Models",
      services: [
        {
          title: "Staff Augmentation",
          desc: "Short-term injection of specific talent for targeted project milestones.",
        },
        {
          title: "Dedicated Development Team",
          desc: "A fully managed, autonomous team handling end-to-end product delivery.",
        },
        {
          title: "Quality Engineering",
          desc: "Comprehensive testing and QA integration to ensure enterprise-grade stability.",
        },
      ],
    },
    {
      type: "cta",
      theme: "black",
      title: "Ready to scale your engineering?",
      text: "Discuss your technical requirements with our experts and construct the ideal team extension model for your current sprint.",
      button: { label: "Schedule a Consultation", href: hireHref, variant: "gold" },
    },
  ],
};

export const dataPlatformEngineeringService: BatchServiceData = {
  title: "Data Platform Engineering",
  slug: "data-platform-engineering",
  route: "/services/data-platform-engineering",
  description:
    "Build scalable, high-performance data architectures, lakes, warehouses, and real-time processing foundations.",
  designFile: `${batch2Root}/Main-13.png`,
  cssFile: `${cssNotes}: Data Platform Engineering | Softzino Technologies`,
  assetFiles: ["/images/batch2/data-platform-hero.png"],
  hero: {
    theme: "light",
    layout: "split",
    breadcrumb: true,
    eyebrow: "Service Offering",
    title: "Modern Data Platform Engineering",
    subtitle:
      "Build scalable, high-performance data architectures to power your enterprise intelligence. We engineer modern data stacks, lakes, and warehouses for real-time processing.",
    media: {
      src: "/images/batch2/data-platform-hero.png",
      alt: "Blurred data platform page reference showing why, engagement, and technology panels",
    },
    primary: { label: "Talk to an Expert", href: hireHref, variant: "dark" },
  },
  sections: [],
};

export const batch2Services = [
  cloudConsultingService,
  cloudMigrationService,
  cloudManagedServicesService,
  devopsService,
  dataStrategyGovernanceService,
  dataMigrationService,
  reportingBusinessIntelligenceService,
  staffAugmentationService,
  dedicatedDevelopmentTeamService,
  itStaffingService,
  forwardDeployedAiEngineeringService,
  managedEngineeringTeamService,
  teamExtensionService,
  dataPlatformEngineeringService,
];

export const batch2ServiceBySlug = Object.fromEntries(
  batch2Services.map((service) => [service.slug, service]),
);
