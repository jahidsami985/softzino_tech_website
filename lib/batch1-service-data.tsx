import {
  Activity,
  Award,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Briefcase,
  Building2,
  Cable,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Globe2,
  GraduationCap,
  Headphones,
  Heart,
  Landmark,
  Layers,
  LineChart,
  Mail,
  Monitor,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  PanelsTopLeft,
  Plane,
  PlayCircle,
  Plug,
  Puzzle,
  RefreshCw,
  Rocket,
  Route,
  Search,
  Server,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Tag,
  Truck,
  Users2,
  Webhook,
  Workflow,
  Wrench,
} from "lucide-react";
import type { BatchServiceData } from "@/components/BatchServicePage";

const hireHref = "/hire-developers#request-talent";

export const physicalAiService: BatchServiceData = {
  title: "Physical AI",
  slug: "physical-ai",
  route: "/services/physical-ai",
  description:
    "Integrate AI with robotics, edge devices, and physical systems for real-time autonomous action.",
  designFile: "batch1/Jahid Sami's team library (2)/Main.png",
  assetFiles: [
    "/images/batch1/physical-ai-hero.png",
    "/images/batch1/physical-ai-industries.png",
  ],
  hero: {
    theme: "light",
    layout: "split",
    eyebrow: "Service Offering",
    title:
      "Bridging the Gap Between Intelligence and Action. Integrating AI with physical systems like robotics and edge devices.",
    media: {
      src: "/images/batch1/physical-ai-hero.png",
      alt: "Robotic arm operating in an intelligent automation lab",
      overlayTitle: "Real-Time",
      overlayText: "Autonomous decision making at the edge.",
    },
    primary: { label: "Discuss Your Project", href: hireHref, variant: "dark" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      label: "What is it?",
      body: [
        "Physical AI involves embedding artificial intelligence directly into hardware and machinery. It moves AI from the cloud to the physical world, enabling machines to perceive, reason, and interact with their environments autonomously.",
      ],
      cards: [
        {
          icon: Bot,
          title: "Enhanced Automation",
          desc: "Automating complex physical tasks previously requiring human oversight.",
          tone: "gray",
        },
        {
          icon: ShieldCheck,
          title: "Reduced Risk",
          desc: "Deploying intelligent machines in hazardous environments to protect human life.",
          tone: "gray",
        },
        {
          icon: Cpu,
          title: "Precision Operations",
          desc: "Executing tasks with sub-millimeter accuracy and high repeatability.",
          tone: "gray",
        },
        {
          icon: BrainCircuit,
          title: "AI Meets Reality",
          desc: "Autonomous intelligence embedded in real machines and edge devices.",
          tone: "black",
        },
      ],
    },
    {
      type: "overview",
      theme: "white",
      label: "Why you need it",
      body: [
        "Traditional cloud-based AI suffers from latency and connectivity issues. Physical AI enables real-time autonomous decision-making in physical environments, crucial for scenarios where immediate action is required without human intervention.",
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "dark",
      eyebrow: "Capabilities",
      title: "Our Offerings",
      intro: "Comprehensive solutions for integrating intelligence into physical hardware.",
      columns: 4,
      cards: [
        {
          icon: Cpu,
          title: "Edge AI",
          desc: "Deploying machine learning models directly onto hardware devices for immediate, localized processing.",
        },
        {
          icon: Bot,
          title: "Robotics Control",
          desc: "Developing sophisticated control systems for articulated arms, mobile robots, and automated machinery.",
        },
        {
          icon: Network,
          title: "Sensory Fusion",
          desc: "Integrating data from multiple sensors to build comprehensive environmental understanding.",
        },
        {
          icon: Route,
          title: "Autonomous Navigation",
          desc: "Implementing SLAM and path planning algorithms for mobile robots and drones operating in dynamic spaces.",
        },
      ],
    },
    {
      type: "overview",
      theme: "muted",
      title: "Industries Transformed",
      intro: "Where Physical AI is making the most significant impact today.",
      image: {
        src: "/images/batch1/physical-ai-industries.png",
        alt: "Physical AI industry examples across manufacturing, agriculture, healthcare robotics, and drones",
      },
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      intro: "The tools powering our Physical AI solutions.",
      technologies: ["ROS2", "NVIDIA Jetson", "C++", "Python", "OpenCV", "TensorFlow Lite"],
    },
    {
      type: "related",
      theme: "muted",
      services: [
        {
          title: "IoT & Wearable Solutions",
          desc: "Connecting physical devices to the digital ecosystem for data collection.",
        },
        {
          title: "Artificial Intelligence",
          desc: "Enterprise-grade machine learning models and predictive systems.",
        },
        {
          title: "Embedded Systems",
          desc: "Low-level firmware and hardware integration for specialized devices.",
        },
      ],
    },
    {
      type: "cta",
      theme: "black",
      title: "Ready to make your hardware intelligent?",
      text: "Let's discuss how Physical AI can automate your operations and unlock new capabilities for your business.",
      button: { label: "Schedule a Consultation", href: hireHref, variant: "gold" },
    },
  ],
};

export const systemIntegrationService: BatchServiceData = {
  title: "System Integration",
  slug: "system-integration",
  route: "/services/system-integration",
  description:
    "Unify enterprise software, hardware, and data flows into one cohesive operating ecosystem.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-1.png",
  assetFiles: ["/images/batch1/system-integration-hero.png"],
  hero: {
    theme: "dark",
    layout: "background",
    backgroundImage: "/images/batch1/system-integration-hero.png",
    title: "System Integration",
    subtitle: "Unified Systems for Seamless Enterprise Operations.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      eyebrow: "Overview",
      title: "Connecting disparate software and hardware systems into a cohesive ecosystem.",
      cards: [
        {
          icon: Blocks,
          title: "Enterprise Application Integration (EAI)",
          desc: "We architect centralized hubs that allow independent applications to communicate, ensuring data consistency across your entire technical landscape.",
          tone: "gray",
        },
        {
          icon: RefreshCw,
          title: "Eliminate Data Silos",
          desc: "Streamline cross-departmental workflows by ensuring that HR, Finance, Operations, and Sales are all operating from a single source of truth.",
          tone: "gray",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "dark",
      eyebrow: "Our Offerings",
      title: "Comprehensive Integration Services",
      columns: 4,
      cards: [
        {
          icon: Network,
          title: "ERP/CRM Integration",
          desc: "Seamlessly connect major platforms like SAP, Salesforce, and Oracle to unify business processes.",
        },
        {
          icon: Cpu,
          title: "Legacy System Connectivity",
          desc: "Bridge the gap between aging infrastructure and modern cloud applications without disruptive overhauls.",
        },
        {
          icon: RefreshCw,
          title: "Data Sync",
          desc: "Real-time and batch data synchronization ensuring consistency across distributed databases.",
        },
        {
          icon: Layers,
          title: "Middleware Solutions",
          desc: "Implementation of robust ESB and API gateways to orchestrate complex message routing.",
        },
        {
          icon: Activity,
          title: "Operational Transparency",
          desc: "Gain clear visibility into end-to-end processes across disparate systems.",
        },
        {
          icon: Database,
          title: "Centralized Data",
          desc: "Create a master data management strategy that serves the entire enterprise.",
        },
        {
          icon: Gauge,
          title: "Efficiency Gains",
          desc: "Automate manual data entry and reduce reconciliation efforts significantly.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies We Master",
      technologies: ["MuleSoft", "Dell Boomi", "Apache Kafka", "SAP", "Oracle"],
      industryTitle: "Industries Served",
      industries: [
        { icon: Monitor, title: "Enterprise IT" },
        { icon: Truck, title: "Supply Chain" },
        { icon: Landmark, title: "Finance" },
        { icon: ShieldCheck, title: "Healthcare" },
      ],
    },
    {
      type: "related",
      theme: "white",
      services: [
        { title: "API Development", desc: "Secure, scalable REST and GraphQL APIs." },
        { title: "Application Modernization", desc: "Refactoring legacy apps for the cloud era." },
        { title: "Cloud Migration", desc: "Strategic lift-and-shift or re-platforming." },
      ],
    },
  ],
};

export const applicationModernizationService: BatchServiceData = {
  title: "Application Modernization",
  slug: "application-modernization",
  route: "/services/application-modernization",
  description:
    "Refactor, re-platform, and modernize legacy applications for resilient cloud-native delivery.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-2.png",
  assetFiles: [
    "/images/batch1/application-modernization-hero.png",
    "/images/batch1/application-modernization-why.png",
  ],
  hero: {
    theme: "dark",
    layout: "split",
    breadcrumb: true,
    title: "Application Modernization",
    subtitle: "Revitalize Your Legacy Systems for the Cloud Era.",
    media: {
      src: "/images/batch1/application-modernization-hero.png",
      alt: "Application modernization transformation engine illustration",
    },
    primary: { label: "Schedule a Call", href: hireHref, variant: "gold" },
    secondary: { label: "Explore Offerings", href: "#offerings", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      title: "End-to-End Legacy Transformation",
      intro: "Focus on refactoring, re-platforming, and modernizing monolithic applications into microservices.",
      cards: [
        {
          icon: Settings,
          title: "What it is",
          desc: "Comprehensive modernization of outdated legacy software. We assess, architect, and migrate your applications to resilient, cloud-native environments, ensuring they are built for the future.",
          tone: "black",
        },
        {
          icon: Activity,
          title: "Why you need it",
          desc: "Reduce technical debt that hinders growth. Outdated systems pose security risks, block integration with modern tools, and limit scalability. Modernization unlocks agility and efficiency.",
          tone: "black",
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
          icon: Rocket,
          title: "Faster Time-to-Market",
          desc: "Accelerate feature delivery through modern CI/CD and agile architectures.",
          tone: "mint",
        },
        {
          icon: Briefcase,
          title: "Lower TCO",
          desc: "Reduce maintenance costs and optimize resource utilization via cloud scale.",
          tone: "mint",
        },
        {
          icon: RefreshCw,
          title: "Enhanced Agility",
          desc: "Pivot quickly to market demands with modular, decoupled systems.",
          tone: "mint",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      centered: true,
      title: "Our Offerings",
      intro: "Strategic modernization paths tailored to your specific legacy footprint and business goals.",
      columns: 4,
      cards: [
        {
          icon: RefreshCw,
          title: "Cloud-Native Refactoring",
          desc: "Re-architecting legacy code to fully leverage cloud-native services, auto-scaling, and managed databases.",
          tone: "gray",
        },
        {
          icon: Database,
          title: "Database Migration",
          desc: "Seamlessly moving from monolithic RDBMS to distributed, NoSQL, or modern cloud databases with zero downtime.",
          tone: "gray",
        },
        {
          icon: Workflow,
          title: "Monolith to Microservices",
          desc: "Decoupling massive monolithic applications into independent, scalable, and manageable microservices.",
          tone: "gray",
        },
        {
          icon: Wrench,
          title: "UI/UX Modernization",
          desc: "Revamping outdated user interfaces with modern frameworks to improve user adoption and operational efficiency.",
          tone: "gray",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "dark",
      title: "Technologies We Master",
      technologies: ["Kubernetes", "Docker", "Java Spring Boot", "Node.js", "AWS", "Azure"],
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Industries We Serve",
      columns: 4,
      cards: [
        { icon: Landmark, title: "Finance", tone: "gray" },
        { icon: Activity, title: "Healthcare", tone: "gray" },
        { icon: ShoppingBag, title: "Retail", tone: "gray" },
        { icon: Factory, title: "Manufacturing", tone: "gray" },
      ],
    },
    {
      type: "split-list",
      theme: "white",
      title: "Why Choose Softzino",
      intro:
        "We combine deep technical expertise with a pragmatic business approach to deliver modern software that drives real value.",
      bullets: [
        {
          title: "Enterprise-Grade Maturity",
          desc: "Proven methodologies and rigorous quality standards for mission-critical systems.",
        },
        {
          title: "Transparent Communication",
          desc: "Clear, honest updates and proactive problem-solving throughout the project lifecycle.",
        },
        {
          title: "Scalable Delivery Teams",
          desc: "Access to a deep bench of senior engineers capable of scaling up or down as needed.",
        },
      ],
      image: {
        src: "/images/batch1/application-modernization-why.png",
        alt: "Modernization strategy session in an enterprise meeting room",
        stat: "15+",
        statLabel: "Years of enterprise delivery excellence",
      },
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Engagement Models",
      intro: "Flexible partnership structures designed to align with your project requirements and internal capabilities.",
      columns: 3,
      cards: [
        {
          title: "Dedicated Team",
          desc: "An autonomous, cross-functional team integrating fully with your strategic goals.",
          bullets: ["Long-term partnership", "Full control over backlog", "Scalable resources"],
        },
        {
          title: "Staff Augmentation",
          desc: "Bridge specific skill gaps by integrating our senior engineers into your existing workflow.",
          bullets: ["Rapid onboarding", "Specialized expertise", "Direct management"],
        },
        {
          title: "Fixed Price",
          desc: "End-to-end delivery for well-defined projects with clear scope and deliverables.",
          bullets: ["Predictable budget", "Defined timeline", "Minimized risk"],
        },
      ],
    },
    {
      type: "process",
      theme: "white",
      title: "Our Process",
      steps: [
        {
          title: "Discovery",
          desc: "Deep dive into technical requirements, business goals, and architecture planning.",
        },
        {
          title: "Design",
          desc: "UI/UX prototyping and robust technical system design tailored for scalability.",
        },
        {
          title: "Development",
          desc: "Agile engineering sprints with continuous integration and transparent reporting.",
        },
        {
          title: "Deployment",
          desc: "Rigorous QA, secure deployment, and ongoing operational support.",
        },
      ],
    },
    {
      type: "related",
      theme: "muted",
      services: [
        { title: "Cloud Consulting", desc: "Strategic guidance for cloud adoption and optimization." },
        { title: "DevOps", desc: "Automating workflows for faster, more reliable delivery." },
        {
          title: "Quality Engineering",
          desc: "Ensuring software reliability through rigorous testing.",
        },
      ],
    },
  ],
};

export const experienceDesignService: BatchServiceData = {
  title: "Experience Design",
  slug: "experience-design",
  route: "/services/experience-design",
  description:
    "Design human-centric digital experiences through user research, interaction design, and service design.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-3.png",
  assetFiles: ["/images/batch1/experience-design-hero.png"],
  hero: {
    theme: "dark",
    layout: "split",
    eyebrow: "Experience Design",
    title: "Human-Centric Design for Digital Excellence",
    highlight: "Design",
    subtitle:
      "Deep focus on user journeys, behavioral psychology, and high-fidelity interaction design to craft digital experiences that resonate and convert.",
    media: {
      src: "/images/batch1/experience-design-hero.png",
      alt: "Experience design workspace showing interface flows and analytics",
      overlayTitle: "3x",
      overlayText: "Higher retention",
    },
    primary: { label: "Start a Project", href: hireHref, variant: "gold" },
    secondary: { label: "View Portfolio", href: "#related", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      eyebrow: "Overview",
      label: "Holistic Design Strategy Beyond UI",
      body: [
        "Experience Design (XD) transcends traditional user interface design. It is a comprehensive approach that considers every touchpoint a user has with your brand. We blend behavioral psychology, deep user research, and high-fidelity interaction design to create systems that feel intuitive and inevitable.",
        "By aligning human needs with business objectives, we deliver holistic design strategies that increase user retention, foster brand loyalty, and drive measurable outcomes across complex digital ecosystems.",
      ],
    },
    {
      type: "cards",
      theme: "white",
      centered: true,
      title: "The Business Impact of Design",
      intro:
        "Strategic experience design directly influences the bottom line, turning casual users into brand advocates.",
      columns: 3,
      cards: [
        {
          icon: LineChart,
          title: "Improved Conversion",
          desc: "Frictionless user journeys and persuasive interaction design significantly boost conversion rates across critical funnels.",
        },
        {
          icon: Headphones,
          title: "Reduced Support Costs",
          desc: "Intuitive interfaces and clear information architecture drastically reduce user confusion and reliance on customer support.",
        },
        {
          icon: Tag,
          title: "Brand Loyalty",
          desc: "Delightful, empathetic experiences foster deep emotional connections, transforming users into long-term brand loyalists.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "dark",
      eyebrow: "Our Offerings",
      title: "End-to-End Design Capabilities",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Search,
          title: "User Research",
          desc: "Deep qualitative and quantitative analysis to uncover true user needs, behaviors, and pain points. We map the entire ecosystem before we draw a single wireframe.",
          bullets: ["User Interviews & Contextual Inquiry", "Usability Testing", "Persona & Journey Mapping"],
          span: "wide",
        },
        {
          icon: MousePointerClick,
          title: "Interaction Design",
          desc: "Crafting intuitive micro-interactions and logical flows that make complex tasks feel effortless. We prototype extensively to perfect the feel.",
        },
        {
          icon: Workflow,
          title: "Service Design",
          desc: "Orchestrating people, infrastructure, and communication behind the scenes.",
        },
        {
          icon: MonitorSmartphone,
          title: "Brand Identity",
          desc: "Translating brand values into cohesive visual and interaction systems.",
          tone: "mint",
        },
      ],
    },
    {
      type: "cards",
      theme: "muted",
      eyebrow: "Industries",
      title: "Tailored Expertise",
      intro:
        "We apply our human-centric design methodology across diverse sectors, understanding the unique contexts and constraints of each.",
      columns: 4,
      cards: [
        { icon: GraduationCap, title: "EdTech", tone: "white" },
        { icon: ShoppingCart, title: "E-commerce", tone: "gray" },
        { icon: Cloud, title: "SaaS", tone: "black" },
        { icon: PlayCircle, title: "Media", tone: "white" },
      ],
    },
    {
      type: "tech-industries",
      theme: "white",
      title: "Technologies & Tools We Master",
      technologies: ["Figma", "Principle", "Framer", "Adobe CC", "Protopie"],
    },
    {
      type: "related",
      id: "related",
      theme: "muted",
      services: [
        { title: "UI/UX Design", desc: "Visual design and interface optimization." },
        { title: "MVP Development", desc: "Rapid prototyping and market validation." },
        { title: "Web Application Development", desc: "Scalable enterprise web applications." },
      ],
    },
  ],
};

export const marketingAutomationService: BatchServiceData = {
  title: "Marketing Automation",
  slug: "marketing-automation",
  route: "/services/marketing-automation",
  description:
    "Streamline marketing workflows and lead management through data-driven automation.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-4.png",
  assetFiles: ["/images/batch1/marketing-automation-hero.png"],
  hero: {
    theme: "light",
    layout: "background",
    backgroundImage: "/images/batch1/marketing-automation-hero.png",
    eyebrow: "Services / Marketing Automation",
    title: "Scale Your Growth with Intelligent Automation",
    subtitle:
      "Streamlining marketing workflows and lead management through data-driven automation.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "dark" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      cards: [
        {
          icon: Network,
          title: "What is it?",
          desc: "Integration of marketing tools into a unified growth engine. We connect disparate systems to create a seamless flow of data, enabling automated, targeted campaigns that adapt to user behavior in real-time.",
          tone: "gray",
        },
        {
          icon: LineChart,
          title: "Why you need it?",
          desc: "Optimize marketing ROI and personalized customer engagement. Manual processes limit scale. Automation ensures the right message reaches the right person at the right time, maximizing conversion rates while freeing your team for strategic initiatives.",
          tone: "navy",
        },
      ],
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      title: "Business Outcomes",
      intro: "Measurable impact on your bottom line through intelligent system design.",
      columns: 3,
      cards: [
        {
          icon: BarChart3,
          title: "Higher Lead Conversion",
          desc: "Identify and prioritize high-value prospects automatically to focus sales efforts where they matter most.",
          tone: "mint",
        },
        {
          icon: RefreshCw,
          title: "Automated Nurturing",
          desc: "Keep prospects engaged with automated, personalized content sequences that move them through the funnel.",
          tone: "gray",
        },
        {
          icon: Sparkles,
          title: "Data-Driven Insights",
          desc: "Gain clear visibility into campaign performance and customer behavior to continuously optimize strategies.",
          tone: "gold",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      title: "Our Offerings",
      intro: "Comprehensive automation solutions tailored to your growth objectives.",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Workflow,
          title: "Campaign Automation",
          desc: "Design and execute complex, multi-channel marketing campaigns that trigger based on user behavior, demographics, and real-time events.",
          span: "wide",
          tone: "gray",
        },
        {
          icon: Sparkles,
          title: "Lead Scoring",
          desc: "Implement intelligent scoring models to identify sales-ready leads automatically.",
          tone: "black",
        },
        {
          icon: RefreshCw,
          title: "CRM Integration",
          desc: "Seamless bidirectional syncing between your marketing automation platform and CRM.",
          tone: "gray",
        },
        {
          icon: Mail,
          title: "Email Marketing",
          desc: "Create dynamic, personalized email sequences that adapt content based on recipient engagement and historical data.",
          span: "wide",
          tone: "gray",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "dark",
      title: "Technologies We Master",
      technologies: ["HubSpot", "Salesforce", "Marketo", "Mailchimp", "Segment"],
      industryTitle: "Industries",
      industries: [
        { title: "Real Estate" },
        { title: "Retail" },
        { title: "Finance" },
        { title: "Travel" },
      ],
    },
    {
      type: "related",
      theme: "muted",
      services: [
        { title: "Data Analytics", desc: "Turn marketing data into actionable business intelligence." },
        {
          title: "API Development",
          desc: "Custom integrations to connect your entire tech stack.",
        },
        {
          title: "Web Application Development",
          desc: "High-performance platforms that capture and convert leads.",
        },
      ],
    },
  ],
};

export const artificialIntelligenceService: BatchServiceData = {
  title: "Artificial Intelligence",
  slug: "artificial-intelligence",
  route: "/services/artificial-intelligence",
  description:
    "Build machine learning, NLP, computer vision, and generative AI systems for enterprise outcomes.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-5.png",
  assetFiles: ["/images/batch1/artificial-intelligence-hero.png"],
  hero: {
    theme: "black",
    layout: "background",
    backgroundImage: "/images/batch1/artificial-intelligence-hero.png",
    eyebrow: "Service Offering",
    title: "Artificial Intelligence",
    subtitle: "Transforming Business with Predictive Intelligence.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
    secondary: { label: "View Case Studies", href: "#related", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      label: "Overview",
      intro:
        "Deploying advanced algorithms to solve complex business problems. We build intelligent systems that learn, adapt, and drive strategic value across your organization.",
      cards: [
        {
          icon: CheckCircle2,
          title: "Predictive Capabilities",
          desc: "Anticipate market trends and customer needs before they arise.",
          tone: "white",
        },
        {
          icon: CheckCircle2,
          title: "Operational Efficiency",
          desc: "Automate complex decision-making processes and reduce manual overhead.",
          tone: "white",
        },
        {
          icon: BarChart3,
          title: "Intelligent Decisions",
          desc: "Data-backed strategic direction.",
          tone: "navy",
        },
        {
          icon: Workflow,
          title: "Automated Workflows",
          desc: "Streamlined complex operations.",
          tone: "navy",
        },
        {
          icon: Wrench,
          title: "Predictive Maintenance",
          desc: "Prevent issues before failure.",
          tone: "navy",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      centered: true,
      title: "Our Offerings",
      intro: "Comprehensive artificial intelligence solutions tailored to your enterprise architecture.",
      columns: 4,
      cards: [
        {
          icon: BrainCircuit,
          title: "Machine Learning Models",
          desc: "Custom predictive algorithms and classification systems designed for your specific datasets.",
          tone: "gray",
        },
        {
          icon: Headphones,
          title: "NLP & Chatbots",
          desc: "Intelligent conversational interfaces and text analysis for enhanced customer engagement.",
          tone: "gray",
        },
        {
          icon: Search,
          title: "Computer Vision",
          desc: "Automated image and video analysis systems for quality control and spatial awareness.",
          tone: "gray",
        },
        {
          icon: Sparkles,
          title: "Generative AI",
          desc: "Cutting-edge content generation and contextual synthesis leveraging LLMs.",
          tone: "gray",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "black",
      title: "Technologies We Master",
      intro:
        "Our AI engineers leverage the industry's most robust frameworks and platforms to build scalable, production-ready intelligent systems.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
      industryTitle: "Industries",
      industries: [
        { title: "Healthcare", desc: "Diagnostic imaging & patient outcome prediction." },
        { title: "Finance", desc: "Fraud detection & algorithmic trading models." },
        { title: "Logistics", desc: "Route optimization & supply chain forecasting." },
        { title: "Cybersecurity", desc: "Threat detection & anomaly identification." },
      ],
    },
    {
      type: "related",
      id: "related",
      theme: "white",
      intro: "Explore integrated solutions across our practice areas.",
      services: [
        {
          title: "Data Analytics",
          desc: "Extract actionable insights from raw business data.",
        },
        {
          title: "Physical AI",
          desc: "Bridging the gap between software intelligence and hardware robotics.",
        },
        {
          title: "System Integration",
          desc: "Seamlessly embed AI capabilities into existing legacy systems.",
        },
      ],
    },
  ],
};

export const webApplicationDevelopmentService: BatchServiceData = {
  title: "Web Application Development",
  slug: "web-application-development",
  route: "/services/web-application-development",
  description:
    "Build scalable, secure, responsive web applications for enterprise operations and digital growth.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-6.png",
  assetFiles: [
    "/images/batch1/web-application-hero.png",
    "/images/batch1/web-application-overview.png",
  ],
  hero: {
    theme: "dark",
    layout: "background",
    backgroundImage: "/images/batch1/web-application-hero.png",
    eyebrow: "Core Service",
    title: "High-Performance Web Solutions for Enterprise",
    subtitle:
      "Building scalable, secure, and responsive web applications that drive digital transformation and operational efficiency.",
    primary: { label: "Schedule Consultation", href: hireHref, variant: "teal" },
    secondary: { label: "Explore Offerings", href: "#offerings", variant: "outlineLight" },
  },
  sections: [
    {
      type: "overview",
      theme: "white",
      eyebrow: "What is it?",
      title: "Custom web engineering from architecture to deployment.",
      body: [
        "We architect and build robust web platforms tailored to your specific enterprise needs. Our full-lifecycle approach ensures that every layer of the application is optimized for performance, security, and scalability, delivering a seamless experience across all devices.",
        "Extend your digital reach with robust web platforms. In a digital-first economy, an agile and powerful web presence is non-negotiable. Custom web applications allow you to streamline complex workflows, engage broader audiences, and adapt rapidly to changing market demands without the constraints of off-the-shelf software.",
      ],
      image: {
        src: "/images/batch1/web-application-overview.png",
        alt: "Web application architecture review in a collaborative workspace",
        overlayTitle: "Architectural Excellence",
        overlayText: "Building foundational structures designed for long-term scalability and resilience.",
      },
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      eyebrow: "Business Outcomes",
      title: "Strategic advantages of modern web solutions.",
      columns: 3,
      cards: [
        {
          icon: BarChart3,
          title: "Scalable Growth",
          desc: "Architectures designed to handle increasing traffic and data loads seamlessly, ensuring your platform grows with your business.",
          tone: "mint",
        },
        {
          icon: MonitorSmartphone,
          title: "Cross-Platform Accessibility",
          desc: "Responsive designs that deliver a consistent, high-quality user experience across desktops, tablets, and mobile devices.",
          tone: "gray",
        },
        {
          icon: Gauge,
          title: "High Performance",
          desc: "Optimized codebases and efficient resource delivery mechanisms ensuring rapid load times and smooth interactions.",
          tone: "gray",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      eyebrow: "Our Offerings",
      title: "Comprehensive Web Development Services",
      intro: "End-to-end solutions tailored to complex enterprise requirements.",
      columns: 2,
      cardStyle: "numbered",
      cards: [
        {
          icon: Code2,
          title: "Full-stack Development",
          desc: "End-to-end development of custom web applications, encompassing both robust backend architectures and intuitive frontend interfaces, ensuring seamless data flow and user experiences.",
        },
        {
          icon: Gauge,
          title: "Progressive Web Apps (PWA)",
          desc: "Bridging the gap between web and mobile with PWAs that offer offline capabilities, push notifications, and app-like performance directly through the browser.",
        },
        {
          icon: PanelsTopLeft,
          title: "CMS Development",
          desc: "Custom Content Management Systems designed for flexibility and ease of use, empowering your team to manage digital content efficiently without technical bottlenecks.",
        },
        {
          icon: Building2,
          title: "Enterprise Portals",
          desc: "Secure, centralized platforms for B2B interactions, employee intranets, or customer self-service, integrating disparate enterprise systems into a unified interface.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "dark",
      title: "Modern stack for modern demands.",
      intro:
        "We leverage industry-leading frameworks and robust database technologies to construct web applications that are performant, secure, and easily maintainable.",
      technologies: ["React", "Angular", "Vue.js", "Node.js", "Python", "PostgreSQL"],
      industryTitle: "Technology Focus",
      industries: [
        { icon: Code2, title: "Frontend Frameworks" },
        { icon: Server, title: "Backend Environments" },
        { icon: Database, title: "Relational Databases" },
        { icon: Blocks, title: "RESTful APIs" },
      ],
    },
  ],
};

export const webServiceDevelopmentService: BatchServiceData = {
  title: "Web Service Development",
  slug: "web-service-development",
  route: "/services/web-service-development",
  description:
    "Build reliable backend services, APIs, and data layers for modern software ecosystems.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-7.png",
  assetFiles: ["/images/batch1/web-service-hero.png"],
  hero: {
    theme: "dark",
    layout: "background",
    backgroundImage: "/images/batch1/web-service-hero.png",
    eyebrow: "Service Profile",
    title: "Building Seamless Backends for Modern Apps",
    subtitle:
      "Developing robust web services and back-end architectures that power your applications with reliability, security, and scale.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "gold" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      label: "What is Web Service Development?",
      intro: "Server-side engineering and data management.",
      title:
        "Web services form the critical connective tissue of modern software ecosystems, ensuring seamless communication between distinct applications, databases, and user interfaces across diverse platforms.",
      cards: [
        {
          title: "Why You Need It",
          desc: "In an era of distributed systems, a robust back-end architecture is non-negotiable. Web services provide the reliable data flow and secure application logic required to operate smoothly at scale.",
          tone: "gray",
        },
      ],
    },
    {
      type: "cards",
      theme: "white",
      eyebrow: "Impact",
      title: "Strategic Business Outcomes",
      columns: 3,
      cards: [
        {
          icon: Server,
          title: "System Stability",
          desc: "Build resilient architectures designed for high availability and fault tolerance, ensuring uninterrupted service operation even under peak loads.",
        },
        {
          icon: ShieldCheck,
          title: "Secure Data Handling",
          desc: "Implement enterprise-grade security protocols, encryption, and authentication mechanisms to protect sensitive data across all endpoints.",
        },
        {
          icon: Network,
          title: "Seamless Integrations",
          desc: "Enable effortless communication between legacy systems, modern microservices, and third-party APIs through standardized service interfaces.",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "dark",
      centered: true,
      title: "Our Engineering Capabilities",
      intro: "Comprehensive back-end development services tailored to enterprise requirements.",
      columns: 2,
      cardStyle: "numbered",
      cards: [
        {
          title: "RESTful Web Services",
          desc: "Design and development of stateless, scalable REST APIs for broad interoperability and efficient client-server communication.",
        },
        {
          title: "SOAP Services",
          desc: "Implementation of highly structured, protocol-based web services for environments requiring strict security and transactional reliability.",
        },
        {
          title: "Serverless Backends",
          desc: "Architecting cloud-native, event-driven backends that automatically scale with demand while optimizing operational costs.",
        },
        {
          title: "Database Design",
          desc: "Strategic structuring of relational and NoSQL databases for optimal performance, data integrity, and complex querying efficiency.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "muted",
      title: "Technologies We Master",
      technologies: ["Java", "Go", ".NET", "Python", "GraphQL", "AWS Lambda", "Node.js", "PostgreSQL"],
      industryTitle: "Architecting for Scale Across Sectors",
      industries: [
        { icon: Landmark, title: "Banking & Finance" },
        { icon: Truck, title: "Logistics" },
        { icon: Cloud, title: "SaaS" },
        { icon: ShieldCheck, title: "Healthcare" },
      ],
    },
    {
      type: "related",
      theme: "white",
      services: [
        {
          title: "API Development",
          desc: "Designing clean, documented, and secure APIs for external consumption.",
        },
        {
          title: "Cloud Engineering",
          desc: "Deploying and optimizing back-end infrastructure on AWS, Azure, or GCP.",
        },
        {
          title: "System Integration",
          desc: "Connecting disparate enterprise systems into a unified workflow.",
        },
      ],
    },
    {
      type: "cta",
      theme: "dark",
      title: "Ready to Fortify Your Back-End?",
      text: "Schedule a consultation with our architecture team to discuss your next web service initiative.",
      button: { label: "Schedule a Call", href: hireHref, variant: "gold" },
    },
  ],
};

export const apiDevelopmentService: BatchServiceData = {
  title: "API Development",
  slug: "api-development",
  route: "/services/api-development",
  description:
    "Design secure, scalable API architectures that connect products, partners, and enterprise systems.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-8.png",
  hero: {
    theme: "black",
    layout: "plain",
    eyebrow: "Service Offering",
    title: "Connect Your Ecosystem with Powerful APIs",
    subtitle:
      "Designing and building secure, scalable API architectures to power modern digital experiences.",
    primary: { label: "Discuss Your Integration", href: hireHref, variant: "teal" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      cards: [
        {
          icon: Network,
          title: "What is it?",
          desc: "Standardized interfaces for system interoperability. API Development involves creating robust, well-documented endpoints that allow disparate software systems to communicate, share data, and execute functions seamlessly across boundaries.",
          tone: "black",
        },
        {
          icon: LineChart,
          title: "Why you need it?",
          desc: "Enable third-party integrations and internal modularity. In a composable enterprise, APIs are the connective tissue. They break down silos, accelerate time-to-market for new features, and allow your business to participate in broader digital ecosystems.",
          tone: "navy",
        },
      ],
    },
    {
      type: "cards",
      theme: "muted",
      centered: true,
      eyebrow: "Value Delivered",
      title: "Strategic Impact",
      columns: 2,
      cardStyle: "mosaic",
      cards: [
        {
          icon: Workflow,
          title: "Ecosystem Growth",
          desc: "Expand your digital footprint by allowing partners and developers to build on top of your platform securely.",
          span: "wide",
        },
        {
          icon: BarChart3,
          title: "Monetized Data",
          desc: "Turn core data assets into new revenue streams through metered and premium API access.",
          tone: "black",
        },
        {
          icon: Activity,
          title: "Improved Connectivity",
          desc: "Streamline internal operations by connecting legacy systems with modern cloud infrastructure.",
        },
        {
          title: "Target Industries",
          desc: "FinTech, E-commerce, Social Media, and Logistics.",
          span: "wide",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "muted",
      title: "Our Capabilities",
      intro:
        "Comprehensive API lifecycle management, from initial strategy and design to deployment, security, and ongoing developer support.",
      columns: 1,
      cards: [
        {
          icon: Braces,
          title: "API Strategy",
          desc: "Defining the roadmap, monetization models, and architectural patterns (REST, GraphQL, gRPC) aligned with business objectives.",
        },
        {
          icon: Wrench,
          title: "Custom API Design",
          desc: "Crafting intuitive, developer-friendly interfaces with consistent naming conventions, versioning, and payload structures.",
        },
        {
          icon: Webhook,
          title: "API Gateway Management",
          desc: "Implementing and configuring enterprise gateways for routing, rate limiting, analytics, and policy enforcement.",
        },
        {
          icon: ShieldCheck,
          title: "Security & Documentation",
          desc: "Securing endpoints with OAuth/JWT and generating interactive, comprehensive developer portals using OpenAPI specifications.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "black",
      title: "Technologies We Master",
      intro: "We leverage industry-leading tools to design, test, and manage high-performance APIs.",
      technologies: ["Postman", "Swagger", "Kong", "Apigee", "Node.js"],
    },
    {
      type: "related",
      theme: "muted",
      title: "Related Expertise",
      services: [
        {
          title: "System Integration",
          desc: "Connecting disparate systems to function as a cohesive whole.",
        },
        {
          title: "Web Service Development",
          desc: "Building scalable backend services to power front-end applications.",
        },
        {
          title: "Cloud Engineering",
          desc: "Designing and deploying cloud-native architectures for maximum resilience.",
        },
      ],
    },
  ],
};

export const pluginDevelopmentService: BatchServiceData = {
  title: "Plugin Development",
  slug: "plugin-development",
  route: "/services/plugin-development",
  description:
    "Create custom extensions, browser plugins, CMS modules, CRM add-ons, and integrations for existing platforms.",
  designFile: "batch1/Jahid Sami's team library (2)/Main-9.png",
  assetFiles: ["/images/batch1/plugin-strategy.png"],
  hero: {
    theme: "light",
    layout: "plain",
    eyebrow: "Service Offering",
    title: "Extend Your Software Capabilities with Custom Plugins",
    subtitle:
      "Creating extensions and plugins for popular platforms and software. We build modular functionality that integrates seamlessly into existing ecosystems, empowering your tools to work exactly how you need them to.",
    primary: { label: "Talk to an Expert", href: hireHref, variant: "dark" },
    secondary: { label: "Explore Offerings", href: "#offerings", variant: "outline" },
  },
  sections: [
    {
      type: "overview",
      theme: "muted",
      label: "Strategic Advantage",
      intro: "Why building modular plugins is often smarter than custom ground-up development.",
      image: {
        src: "/images/batch1/plugin-strategy.png",
        alt: "Custom plugin ecosystem architecture illustration",
      },
      cards: [
        {
          icon: Puzzle,
          title: "What is it?",
          desc: "Modular functionality added to existing ecosystems. We develop specialized modules that attach to platforms like WordPress, Shopify, Chrome, or custom enterprise software, expanding their native capabilities without altering the core codebase.",
        },
        {
          icon: Braces,
          title: "Why you need it",
          desc: "To achieve custom features without altering core platforms. When off-the-shelf software falls short, plugins bridge the gap, preventing vendor lock-in while maintaining the stability and update path of the base platform.",
          tone: "mint",
        },
        {
          icon: BarChart3,
          title: "Business Outcomes",
          desc: "Tailored user experience and increased platform utility. By injecting targeted features exactly where they are needed, you improve workflow efficiency, automate niche tasks, and create proprietary value on top of standard platforms, all at a fraction of the cost of building a full custom application.",
          span: "wide",
        },
      ],
    },
    {
      type: "cards",
      id: "offerings",
      theme: "white",
      eyebrow: "Our Expertise",
      title: "Plugin Offerings",
      columns: 4,
      cardStyle: "numbered",
      cards: [
        {
          icon: Plug,
          title: "Browser Extensions",
          desc: "Powerful tools operating directly in Chrome, Firefox, or Edge to automate workflows, scrape data, or augment web interfaces for your workforce.",
        },
        {
          icon: PanelsTopLeft,
          title: "CMS Plugins",
          desc: "Custom modules for WordPress, Drupal, or headless CMS setups, adding bespoke functionality, complex data types, or third-party API integrations.",
        },
        {
          icon: Network,
          title: "CRM Add-ons",
          desc: "Enhancing Salesforce, HubSpot, or custom CRMs with specialized reporting, automated data synchronization, and bespoke user interface panels.",
        },
        {
          icon: Blocks,
          title: "Custom Integrations",
          desc: "Middleware and connector plugins that allow disparate enterprise systems to communicate securely and share data in real-time.",
        },
      ],
    },
    {
      type: "tech-industries",
      theme: "dark",
      title: "Engineered for Performance Across Environments",
      technologies: ["JavaScript / TS", "PHP", "C#", "Python", "Chrome Extension API", "WebExtensions API", "REST / GraphQL"],
      industryTitle: "Targeted Industries",
      industries: [
        { title: "E-commerce", meta: "Shopify, Magento, WooCommerce" },
        { title: "Content Management", meta: "WordPress, Drupal, Ghost" },
        { title: "Development Tools", meta: "IDEs, CI/CD pipelines, DevOps tooling" },
      ],
    },
  ],
};

export const batch1Services = [
  physicalAiService,
  systemIntegrationService,
  applicationModernizationService,
  experienceDesignService,
  marketingAutomationService,
  artificialIntelligenceService,
  webApplicationDevelopmentService,
  webServiceDevelopmentService,
  apiDevelopmentService,
  pluginDevelopmentService,
];

export const batch1ServiceBySlug = Object.fromEntries(
  batch1Services.map((service) => [service.slug, service]),
);
