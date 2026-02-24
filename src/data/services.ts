import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "Intelligent AI agents built for enterprise scale",
    heroTitle: "Custom AI Agents Built for Enterprise Scale",
    heroDescription:
      "Deploy production-ready AI agents with built-in governance, guardrails, and seamless legacy integration. We turn the 95% failure rate on its head - delivering measurable ROI in 90 days.",
    metaTitle: "Agentic AI Solutions & Custom AI Agents for Enterprise",
    metaDescription:
      "Deploy custom AI agents that deliver ROI. Workforce Next builds agentic AI solutions with governance, guardrails, and seamless legacy integration for enterprise.",
    keywords: [
      "agentic AI solutions",
      "AI agents for enterprise",
      "custom AI agents for business",
    ],
    painPointStat: "95%",
    painPointDescription:
      "of enterprise AI projects fail to show ROI within 6 months. Our clients see measurable returns in 90 days.",
    features: [
      {
        icon: "brain",
        title: "Custom Agent Design",
        description:
          "Purpose-built AI agents tailored to your specific workflows, data, and business rules - not generic chatbots.",
      },
      {
        icon: "network",
        title: "Multi-Agent Orchestration",
        description:
          "Coordinate teams of specialized agents that collaborate, delegate, and escalate - handling complex business processes end-to-end.",
      },
      {
        icon: "database",
        title: "RAG Implementation",
        description:
          "Ground your agents in your proprietary data with retrieval-augmented generation. Accurate, contextual, hallucination-resistant.",
      },
      {
        icon: "shield",
        title: "Guardrails & Governance",
        description:
          "Built-in safety cards, audit trails, role-based access, and compliance frameworks. Deploy AI responsibly at scale.",
      },
      {
        icon: "users",
        title: "Human-in-the-Loop",
        description:
          "Configurable approval workflows that keep humans in control for high-stakes decisions while automating routine tasks.",
      },
      {
        icon: "plug",
        title: "Legacy Integration",
        description:
          "Connect AI agents to your existing ERP, CRM, and data systems. No rip-and-replace - we work with what you have.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Assess",
        description:
          "We audit your workflows, data architecture, and pain points to identify high-impact agent opportunities.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Architect agent topology, guardrails, data pipelines, and integration points with your existing systems.",
      },
      {
        step: 3,
        title: "Deploy",
        description:
          "Build, test, and launch production-ready agents with monitoring, logging, and rollback capabilities.",
      },
      {
        step: 4,
        title: "Optimize",
        description:
          "Continuously refine agent performance with feedback loops, A/B testing, and expanding agent capabilities.",
      },
    ],
    useCases: [
      {
        industry: "Finance",
        title: "Automated Compliance Review",
        description:
          "AI agents that review regulatory filings, flag anomalies, and generate compliance reports - reducing review time by 80%.",
      },
      {
        industry: "Healthcare",
        title: "Clinical Documentation",
        description:
          "Agents that assist clinicians with documentation, coding, and prior authorization - freeing 2+ hours per provider per day.",
      },
      {
        industry: "Manufacturing",
        title: "Supply Chain Intelligence",
        description:
          "Multi-agent systems that monitor suppliers, predict disruptions, and auto-negotiate alternative sourcing.",
      },
      {
        industry: "Logistics",
        title: "Route Optimization",
        description:
          "Dynamic routing agents that factor in real-time traffic, weather, capacity, and delivery windows.",
      },
    ],
    techStack: [
      "LangChain",
      "AutoGen",
      "CrewAI",
      "OpenAI",
      "Azure AI",
      "AWS Bedrock",
      "Python",
      "Vector DBs",
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    tagline: "End-to-end workflow automation that integrates with everything",
    heroTitle:
      "Workflow Automation That Integrates with Everything You Already Use",
    heroDescription:
      "Stop wrestling with disconnected tools and manual handoffs. We design and implement end-to-end workflow automation that connects your entire tech stack - reducing manual processing by 70%.",
    metaTitle: "Workflow Automation & Business Process Automation Services",
    metaDescription:
      "End-to-end workflow automation consulting and implementation. Reduce manual processes by 70% with intelligent automation that integrates with your existing systems.",
    keywords: [
      "workflow automation company",
      "business process automation",
      "intelligent automation services",
      "workflow automation consulting",
    ],
    painPointStat: "70%",
    painPointDescription:
      "average reduction in manual processing time for our clients. From months of manual work to minutes of automated execution.",
    features: [
      {
        icon: "workflow",
        title: "End-to-End Workflow Design",
        description:
          "Map, model, and optimize your business processes before automating. We fix the workflow, not just digitize the mess.",
      },
      {
        icon: "robot",
        title: "RPA Integration",
        description:
          "Robotic process automation for legacy systems that lack APIs. Automate screen-based tasks without changing your core systems.",
      },
      {
        icon: "api",
        title: "API Orchestration",
        description:
          "Connect SaaS platforms, internal tools, and databases with reliable, monitored API integrations that handle errors gracefully.",
      },
      {
        icon: "document",
        title: "Document Processing",
        description:
          "AI-powered extraction from invoices, contracts, forms, and emails. Structured data, zero manual entry.",
      },
      {
        icon: "decision",
        title: "Decision Automation",
        description:
          "Rule engines and ML models that route, approve, and escalate based on your business logic - consistently and instantly.",
      },
      {
        icon: "monitor",
        title: "Real-time Monitoring",
        description:
          "Dashboards and alerts for every automated workflow. Know instantly when something needs attention.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Map",
        description:
          "Document current workflows, identify bottlenecks, and quantify the cost of manual processes.",
      },
      {
        step: 2,
        title: "Automate",
        description:
          "Design and build automated workflows with error handling, retry logic, and fallback paths.",
      },
      {
        step: 3,
        title: "Integrate",
        description:
          "Connect to your existing tools - ERP, CRM, HRIS, email, databases - with secure, monitored integrations.",
      },
      {
        step: 4,
        title: "Scale",
        description:
          "Expand automation across departments, add new workflows, and continuously improve with usage analytics.",
      },
    ],
    useCases: [
      {
        industry: "HR & Operations",
        title: "Employee Onboarding",
        description:
          "Automate the entire onboarding journey - from offer letter to Day 1 setup - across HR, IT, and facilities systems.",
      },
      {
        industry: "Finance",
        title: "Invoice Processing",
        description:
          "Extract, validate, route, and approve invoices automatically. Reduce processing time from days to minutes.",
      },
      {
        industry: "Supply Chain",
        title: "Order Fulfillment",
        description:
          "End-to-end order automation from receipt to delivery, with real-time status updates and exception handling.",
      },
      {
        industry: "Customer Service",
        title: "Ticket Routing & Resolution",
        description:
          "Auto-classify, route, and resolve support tickets with intelligent escalation and SLA tracking.",
      },
    ],
    techStack: [
      "n8n",
      "Power Automate",
      "Camunda",
      "Zapier",
      "Make",
      "Python",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    slug: "iot",
    name: "IoT - CloudIQ",
    tagline: "Vendor-agnostic IoT cloud platform built for scale",
    heroTitle: "CloudIQ: The IoT Cloud Platform That Scales Beyond the Pilot",
    heroDescription:
      "Most IoT platforms fail after pilots due to data volume, security gaps, and rising costs. CloudIQ is our vendor-agnostic IoT cloud platform - built for real-time analytics, edge computing, and enterprise-grade security from day one.",
    metaTitle: "CloudIQ - Industrial IoT Cloud Platform & Solutions",
    metaDescription:
      "CloudIQ is a vendor-agnostic IoT cloud platform built for manufacturing, energy, and logistics. Real-time analytics, edge computing, and enterprise-grade security.",
    keywords: [
      "IoT cloud platform",
      "industrial IoT solutions",
      "IoT platform for manufacturing",
    ],
    painPointStat: "82%",
    painPointDescription:
      "of enterprise IoT programs demand real-time analytics. CloudIQ delivers sub-second insights with edge-to-cloud architecture.",
    features: [
      {
        icon: "device",
        title: "Device Management",
        description:
          "Provision, monitor, and update thousands of IoT devices from a single dashboard. OTA updates, health monitoring, and lifecycle management.",
      },
      {
        icon: "analytics",
        title: "Real-time Analytics",
        description:
          "Sub-second data processing with streaming analytics. Detect anomalies, trigger alerts, and visualize trends as they happen.",
      },
      {
        icon: "edge",
        title: "Edge Computing",
        description:
          "Process data at the edge for low-latency decisions. Reduce bandwidth costs and maintain operations even when connectivity drops.",
      },
      {
        icon: "lock",
        title: "Security & Compliance",
        description:
          "End-to-end encryption, device authentication, and audit logging. SOC 2, ISO 27001, and industry-specific compliance built in.",
      },
      {
        icon: "scale",
        title: "Scalable Architecture",
        description:
          "From 100 devices to 100,000 - our architecture scales linearly without performance degradation or cost explosions.",
      },
      {
        icon: "openlock",
        title: "Vendor-Agnostic",
        description:
          "No lock-in. CloudIQ works with any hardware, any protocol, and any cloud provider. Your data stays yours.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Connect",
        description:
          "Onboard devices with our protocol-agnostic gateway. MQTT, HTTP, CoAP, LoRaWAN - we speak every IoT language.",
      },
      {
        step: 2,
        title: "Collect",
        description:
          "Ingest, normalize, and store telemetry data with configurable retention and compression policies.",
      },
      {
        step: 3,
        title: "Analyze",
        description:
          "Apply streaming analytics, ML models, and custom rules to extract actionable insights in real time.",
      },
      {
        step: 4,
        title: "Act",
        description:
          "Trigger automated responses, send alerts, update dashboards, and feed insights into your business systems.",
      },
    ],
    useCases: [
      {
        industry: "Smart Manufacturing",
        title: "Predictive Maintenance",
        description:
          "Monitor equipment health in real time, predict failures before they happen, and schedule maintenance proactively.",
      },
      {
        industry: "Energy Management",
        title: "Smart Grid Optimization",
        description:
          "Balance energy distribution, monitor consumption patterns, and optimize renewable energy integration.",
      },
      {
        industry: "Fleet & Logistics",
        title: "Asset Tracking",
        description:
          "Real-time location tracking, route optimization, cold chain monitoring, and delivery confirmation.",
      },
      {
        industry: "Facilities",
        title: "Smart Buildings",
        description:
          "HVAC optimization, occupancy management, energy monitoring, and environmental sensing for modern workplaces.",
      },
    ],
    techStack: [
      "AWS IoT",
      "Azure IoT Hub",
      "MQTT",
      "LoRaWAN",
      "Kafka",
      "TimescaleDB",
      "Grafana",
      "Kubernetes",
    ],
  },
];
