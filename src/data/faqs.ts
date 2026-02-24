import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  // --- Agentic AI (6) ---
  {
    question: "What is agentic AI and how is it different from traditional chatbots?",
    answer: "Agentic AI refers to AI systems that can autonomously plan, reason, and execute multi-step tasks - unlike traditional chatbots that only respond to individual prompts. An agentic AI system can break down a complex business request into sub-tasks, call APIs, query databases, and coordinate with other agents to complete the work end-to-end. Traditional chatbots are stateless and reactive; agentic AI is goal-directed and proactive.",
    category: "ai",
    categoryLabel: "AI Agents",
  },
  {
    question: "How much does it cost to build a custom AI agent for enterprise use?",
    answer: "Enterprise AI agent projects typically range from $25,000 for a focused single-agent proof of concept to $150,000+ for multi-agent production systems with full governance and legacy integration. The primary cost drivers are complexity of integration with existing systems (ERP, CRM, databases), the number of specialized agents needed, data pipeline requirements, and compliance overhead. At Workforce Next, we structure engagements so clients see measurable ROI within 90 days of deployment.",
    category: "ai",
    categoryLabel: "AI Agents",
  },
  {
    question: "What is retrieval-augmented generation (RAG) and why do enterprise AI agents need it?",
    answer: "Retrieval-augmented generation (RAG) is a technique where an AI agent retrieves relevant information from your proprietary data sources (documents, databases, knowledge bases) before generating a response. This grounds the AI's output in your actual business data rather than relying solely on its training data. Enterprise agents need RAG because generic AI models hallucinate when asked about company-specific processes, products, or policies. RAG reduces hallucination rates by 60-80% and ensures agents provide accurate, contextual answers based on your real data.",
    category: "ai",
    categoryLabel: "AI Agents",
  },
  {
    question: "Can AI agents integrate with legacy ERP and CRM systems that don't have modern APIs?",
    answer: "Yes. Integrating AI agents with legacy systems is one of the most common requirements we handle. For systems without REST APIs, we use a combination of approaches: database-level integration (read/write directly to the underlying database), RPA bridges (robotic process automation that interacts with the legacy UI), file-based integration (processing exports/imports), and middleware adapters. The key is building a reliable abstraction layer so the AI agent interacts through a clean interface regardless of how the underlying system works.",
    category: "ai",
    categoryLabel: "AI Agents",
  },
  {
    question: "What guardrails and safety measures should enterprise AI agents have?",
    answer: "Production enterprise AI agents require multiple layers of guardrails: (1) Safety documentation outlining each agent's capabilities, limitations, and approved actions; (2) Role-based access control determining what data and systems each agent can access; (3) Human-in-the-loop approval workflows for high-stakes decisions like financial transactions or customer-facing communications; (4) Output validation filters that catch hallucinations, PII leakage, and off-topic responses; (5) Comprehensive audit logging of every action and decision; and (6) Kill switches and rollback capabilities.",
    category: "ai",
    categoryLabel: "AI Agents",
  },
  {
    question: "How long does it take to deploy an AI agent from concept to production?",
    answer: "A focused AI agent deployment typically takes 8-12 weeks from concept to production using our four-phase methodology: Assessment (1-2 weeks) to map workflows and identify high-impact opportunities; Design (2-3 weeks) to architect agent topology, guardrails, and integration points; Deployment (3-4 weeks) to build, test, and launch with monitoring; and initial Optimization (2-3 weeks) for feedback loops and performance tuning. More complex multi-agent orchestration systems may take 4-6 months. The critical factor is scope - starting with a specific, measurable use case rather than attempting enterprise-wide transformation.",
    category: "ai",
    categoryLabel: "AI Agents",
  },

  // --- Workflow Automation (6) ---
  {
    question: "What is the difference between workflow automation and robotic process automation (RPA)?",
    answer: "Workflow automation orchestrates entire business processes end-to-end by connecting systems through APIs, event triggers, and business logic - it redesigns how work flows through your organization. RPA, by contrast, mimics human interactions with software interfaces (clicking buttons, copying data between screens) without changing the underlying workflow. Think of RPA as automating individual tasks within a process, while workflow automation redesigns the entire process. In practice, the best solutions combine both: workflow automation for the overall orchestration, with RPA handling specific legacy system interactions where APIs are unavailable.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Which business processes should we automate first for maximum ROI?",
    answer: "The highest-ROI automation candidates share three characteristics: high volume (processed frequently), high touch (require multiple manual handoffs between people or systems), and high cost of error (mistakes are expensive to fix). Common starting points include: invoice processing and accounts payable (often yields 70%+ time reduction), employee onboarding across HR/IT/facilities systems, customer support ticket routing, sales order processing and fulfillment, and compliance reporting. We recommend starting with one process that involves at least 3 systems and 5+ manual steps - this is where automation delivers the most dramatic improvement.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "How does workflow automation handle exceptions and edge cases?",
    answer: "Well-designed workflow automation includes explicit exception handling at every decision point: fallback paths for when an API call fails or times out (with configurable retry logic), escalation rules that route unusual cases to human reviewers instead of failing silently, validation checks that catch data quality issues before they propagate downstream, alerting and notification systems that flag stuck or failed workflows in real time, and dead-letter queues that capture unprocessable items for manual review. The goal is not to automate 100% of cases - it is to automate the 80% that follow the happy path while gracefully handling the 20% that need human judgment.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can workflow automation connect tools like Salesforce, SAP, and Microsoft 365 together?",
    answer: "Absolutely. Connecting disparate enterprise tools is the core value of workflow automation. Modern automation platforms have pre-built connectors for hundreds of enterprise applications including Salesforce, SAP, Microsoft 365, HubSpot, Jira, Slack, Google Workspace, Oracle, and many more. For custom or legacy applications, we build API integrations or use webhook-based triggers. A typical enterprise automation connects 5-10 different systems in a single workflow - for example, a new deal closing in Salesforce automatically triggers contract generation, project setup in Jira, resource allocation in your ERP, and a welcome sequence in your email platform.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "How do you measure the ROI of business process automation?",
    answer: "We measure automation ROI across four dimensions: (1) Time savings - hours freed per week/month by eliminating manual steps (our clients average 70% reduction in manual processing time); (2) Error reduction - decrease in data entry mistakes, missed steps, and rework costs; (3) Speed improvement - reduction in cycle time from process start to completion (e.g., invoice processing from 5 days to 4 hours); and (4) Scalability gain - ability to handle 3-5x volume without adding headcount. We establish baseline metrics before automation begins, then track these KPIs continuously. Most clients see full payback within 3-6 months.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Is workflow automation secure enough for handling sensitive financial or healthcare data?",
    answer: "Yes, when properly architected. Enterprise workflow automation platforms support end-to-end encryption (TLS 1.3 in transit, AES-256 at rest), role-based access controls, detailed audit logging, and compliance with frameworks including SOC 2, HIPAA, GDPR, and PCI-DSS. Critical security measures include: never storing credentials in workflow definitions (use secrets managers instead), implementing least-privilege access for each automation, maintaining immutable audit trails, encrypting sensitive fields at the application layer, and conducting regular security reviews. We design every automation with the assumption that it will be audited.",
    category: "automation",
    categoryLabel: "Automation",
  },

  // --- IoT Cloud Platform (6) ---
  {
    question: "What is an IoT cloud platform and why can't we just use AWS or Azure directly?",
    answer: "An IoT cloud platform is a specialized layer built on top of cloud infrastructure (like AWS or Azure) that handles the unique challenges of IoT: device provisioning and management, protocol translation (MQTT, CoAP, HTTP, LoRaWAN), time-series data ingestion at scale, edge computing orchestration, and real-time analytics. While you could build this directly on AWS IoT Core or Azure IoT Hub, you would spend 12-18 months building the device management, analytics, alerting, and visualization layers that an IoT platform provides out of the box. CloudIQ is vendor-agnostic, meaning it runs on any cloud provider and avoids the lock-in of using a single vendor's proprietary IoT stack.",
    category: "iot",
    categoryLabel: "IoT",
  },
  {
    question: "How many IoT devices can a cloud platform handle before performance degrades?",
    answer: "CloudIQ's architecture scales linearly from hundreds to hundreds of thousands of devices without performance degradation. The key architectural decisions that enable this are: message broker clustering that partitions device data across nodes, time-series databases optimized for high-write IoT workloads, edge computing that pre-processes data locally to reduce cloud ingestion volume by 60-80%, and auto-scaling compute for analytics pipelines. The typical bottleneck in IoT platforms is not device count but data velocity - a factory with 1,000 sensors each reporting every second generates 86 million data points per day. Our architecture handles this through stream processing rather than batch.",
    category: "iot",
    categoryLabel: "IoT",
  },
  {
    question: "What is edge computing in IoT and when should we use it instead of cloud processing?",
    answer: "Edge computing processes IoT data locally on gateways or edge devices rather than sending everything to the cloud. You should use edge computing when: (1) Low latency is critical - factory equipment needing sub-100ms response times cannot afford a round-trip to the cloud; (2) Bandwidth is limited or expensive - remote sites with satellite connectivity; (3) Reliability is essential - operations must continue even when internet connectivity drops; (4) Data volume is massive - pre-filtering at the edge can reduce cloud data transfer by 60-80%; (5) Privacy regulations require data to stay on-premises. Most production IoT deployments use a hybrid approach: edge for real-time decisions, cloud for historical analytics and ML model training.",
    category: "iot",
    categoryLabel: "IoT",
  },
  {
    question: "How does predictive maintenance with IoT actually work in a manufacturing plant?",
    answer: "Predictive maintenance uses IoT sensors attached to manufacturing equipment to detect early signs of failure before breakdowns occur. The process works in four stages: (1) Data collection - vibration sensors, temperature probes, current monitors, and acoustic sensors continuously stream equipment health data; (2) Baseline establishment - ML models learn normal operating patterns for each piece of equipment over 2-4 weeks; (3) Anomaly detection - real-time analytics compare current readings against baselines, flagging deviations that historically precede failures; (4) Actionable alerts - maintenance teams receive prioritized alerts with predicted time-to-failure and recommended action. Typical results: 25-40% reduction in unplanned downtime and 15-25% reduction in maintenance costs.",
    category: "iot",
    categoryLabel: "IoT",
  },
  {
    question: "What IoT communication protocols should we use for our industrial deployment?",
    answer: "The choice depends on your requirements. MQTT is the most popular for industrial IoT - lightweight, supports publish/subscribe messaging, and handles intermittent connectivity well. For low-power, long-range deployments (smart agriculture, utility metering), LoRaWAN provides 2-5km urban range on battery-powered devices lasting 5-10 years. HTTP/REST works for devices with reliable connectivity that send data infrequently. CoAP is optimized for constrained devices on unreliable networks. For high-frequency industrial sensors, OPC-UA is the standard for factory floor integration. CloudIQ is protocol-agnostic - our gateway translates any protocol into a normalized format, so you can mix protocols across your deployment.",
    category: "iot",
    categoryLabel: "IoT",
  },
  {
    question: "How do you secure thousands of IoT devices from cyber attacks?",
    answer: "IoT security requires a defense-in-depth strategy across four layers: (1) Device layer - unique cryptographic identity per device, secure boot, hardware security modules for key storage, and automatic certificate rotation; (2) Network layer - TLS/DTLS encryption for all data in transit, network segmentation to isolate IoT traffic, and VPN tunnels for edge-to-cloud communication; (3) Platform layer - device authentication before any data is accepted, rate limiting, anomaly detection to flag compromised devices, and automatic quarantine of suspicious devices; (4) Operational layer - OTA firmware updates with rollback capability, vulnerability scanning, and regular penetration testing. The biggest risk in IoT security is unpatched firmware - our OTA update system ensures devices stay current.",
    category: "iot",
    categoryLabel: "IoT",
  },
];

export const faqCategories = [
  { value: "all", label: "All Questions" },
  { value: "ai", label: "AI Agents" },
  { value: "automation", label: "Automation" },
  { value: "iot", label: "IoT & CloudIQ" },
] as const;
