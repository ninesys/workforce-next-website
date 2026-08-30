export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  minSalary?: number;
  maxSalary?: number;
}

export const jobOpenings: JobOpening[] = [
  {
    slug: "full-stack-developer",
    title: "Full-Stack Developer (React / Node.js)",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-5 years",
    summary:
      "Build and ship full-stack features across React/Next.js frontends and Node.js backends for real client products.",
    responsibilities: [
      "Own features end-to-end, from database schema to shipped UI",
      "Build responsive, accessible interfaces with React and Next.js",
      "Design and maintain REST/GraphQL APIs with Node.js",
      "Write tests, review code, and keep deployments healthy",
      "Collaborate directly with clients and product owners on scope",
    ],
    requirements: [
      "Strong hands-on experience with React and Node.js in production",
      "Comfortable with TypeScript and modern tooling",
      "Working knowledge of SQL or NoSQL databases",
      "Can debug across the stack without hand-holding",
    ],
    niceToHave: ["Next.js App Router experience", "AWS or GCP exposure", "CI/CD pipeline experience"],
    minSalary: 1500000,
    maxSalary: 4000000,
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-6 years",
    summary:
      "Design and ship production AI agents, RAG pipelines, and LLM-powered workflows for client projects.",
    responsibilities: [
      "Build agentic workflows using LangChain, CrewAI, or similar frameworks",
      "Design and evaluate RAG pipelines and retrieval systems",
      "Fine-tune and evaluate LLM prompts for accuracy and cost",
      "Integrate AI features into production applications",
      "Monitor and improve model performance in live systems",
    ],
    requirements: [
      "Hands-on experience shipping LLM-powered features to production",
      "Strong Python skills",
      "Understanding of embeddings, vector databases, and retrieval",
      "Familiarity with OpenAI, Anthropic, or open-source model APIs",
    ],
    niceToHave: ["Fine-tuning experience", "MLOps or model evaluation pipeline experience"],
    minSalary: 2000000,
    maxSalary: 5500000,
  },
  {
    slug: "data-engineer",
    title: "Data Engineer (Spark / Airflow)",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-6 years",
    summary:
      "Build reliable data pipelines and infrastructure that power analytics and AI systems for client teams.",
    responsibilities: [
      "Design and maintain ETL/ELT pipelines using Spark and Airflow",
      "Build and optimize data warehouses and lakehouse architectures",
      "Ensure data quality, lineage, and monitoring across pipelines",
      "Partner with AI/ML engineers to prepare training and retrieval data",
    ],
    requirements: [
      "Production experience with Apache Spark and Airflow",
      "Strong SQL and Python skills",
      "Experience with cloud data platforms (AWS, GCP, or Azure)",
      "Understanding of data modeling and warehouse design",
    ],
    niceToHave: ["dbt experience", "Kafka or streaming pipeline experience"],
    minSalary: 1800000,
    maxSalary: 4500000,
  },
  {
    slug: "vibe-code-engineer",
    title: "Vibe-Code Optimisation Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    summary:
      "Take AI-generated codebases from vibe-coded prototypes to production-ready, maintainable systems.",
    responsibilities: [
      "Audit AI-generated codebases for security, performance, and correctness issues",
      "Refactor prototype code into scalable, maintainable architecture",
      "Set up testing, CI/CD, and monitoring for previously untested code",
      "Work directly with founders to harden MVPs for real users",
    ],
    requirements: [
      "Strong full-stack engineering background",
      "Experience reviewing and refactoring unfamiliar codebases",
      "Comfortable working with AI coding tools (Cursor, Copilot, Claude Code)",
      "Security and performance-minded by default",
    ],
    minSalary: 1500000,
    maxSalary: 4000000,
  },
  {
    slug: "cloud-devops-engineer",
    title: "Cloud & DevOps Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-6 years",
    summary:
      "Own infrastructure, deployments, and cloud cost efficiency for client applications running on AWS/GCP.",
    responsibilities: [
      "Design and manage cloud infrastructure with IaC (Terraform/CDK)",
      "Build and maintain CI/CD pipelines",
      "Monitor system health, uptime, and cloud costs",
      "Implement security best practices across environments",
    ],
    requirements: [
      "Production experience with AWS or GCP",
      "Hands-on with Docker, Kubernetes, and infrastructure-as-code",
      "Experience with CI/CD tooling (GitHub Actions, GitLab CI, etc.)",
    ],
    niceToHave: ["Cloud cost optimization experience", "Terraform certification"],
    minSalary: 1800000,
    maxSalary: 4500000,
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer (React Native / Flutter)",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-5 years",
    summary:
      "Build cross-platform mobile applications for client products, from prototype through App Store launch.",
    responsibilities: [
      "Build and maintain iOS/Android apps with React Native or Flutter",
      "Integrate with backend APIs and third-party SDKs",
      "Optimize app performance and handle App Store/Play Store releases",
      "Collaborate with design on native-feeling UI implementations",
    ],
    requirements: [
      "Shipped production apps with React Native or Flutter",
      "Comfortable with native build tooling (Xcode, Android Studio)",
      "Understanding of mobile performance and offline-first patterns",
    ],
    minSalary: 1400000,
    maxSalary: 3500000,
  },
  {
    slug: "qa-engineer",
    title: "QA / Test Automation Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-4 years",
    summary:
      "Build automated test suites and quality processes that keep client releases reliable.",
    responsibilities: [
      "Design and maintain automated test suites (unit, integration, e2e)",
      "Set up test automation frameworks for web and API testing",
      "Perform manual exploratory testing on new features",
      "Work with engineers to catch issues before release",
    ],
    requirements: [
      "Experience with test automation frameworks (Playwright, Cypress, Selenium, etc.)",
      "Understanding of API testing and CI-integrated test suites",
      "Strong attention to detail and bug reporting skills",
    ],
    minSalary: 1000000,
    maxSalary: 2800000,
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    summary:
      "Design clean, usable interfaces for client web and mobile products, from wireframes to shipped UI.",
    responsibilities: [
      "Design wireframes, prototypes, and high-fidelity UI for web and mobile",
      "Maintain and evolve design systems across client projects",
      "Collaborate closely with engineers during implementation",
      "Conduct lightweight user research to validate design decisions",
    ],
    requirements: [
      "Strong portfolio of shipped product design work",
      "Proficiency in Figma",
      "Understanding of responsive and accessible design principles",
    ],
    minSalary: 1000000,
    maxSalary: 2800000,
  },
  {
    slug: "seo-specialist",
    title: "SEO Specialist",
    department: "Growth",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1+ years",
    summary:
      "Drive organic search and AI-search visibility for Workforce Next and client sites through technical and content SEO.",
    responsibilities: [
      "Run keyword research and content gap analysis",
      "Implement technical SEO fixes (schema, sitemaps, Core Web Vitals)",
      "Optimize content for both traditional search and AI answer engines",
      "Track rankings, traffic, and search visibility over time",
    ],
    requirements: [
      "1+ years of hands-on SEO experience",
      "Familiarity with technical SEO fundamentals and structured data",
      "Comfortable working with analytics and search console tooling",
    ],
    minSalary: 180000,
    maxSalary: 300000,
  },
  {
    slug: "social-media-content-creator",
    title: "Social Media Content Creator",
    department: "Growth",
    location: "Remote (India)",
    type: "Full-time / Internship",
    experience: "Experienced or Intern",
    summary:
      "Create and manage social content that builds Workforce Next's presence across LinkedIn, X, and other channels.",
    responsibilities: [
      "Plan and create social content calendars",
      "Write and design posts for LinkedIn, X, and Instagram",
      "Track engagement and iterate on what performs",
      "Collaborate with the team on brand voice and messaging",
    ],
    requirements: [
      "Strong writing skills and an eye for what performs on social",
      "Basic design skills (Canva or similar)",
      "Interest in tech, AI, or startup content",
    ],
    minSalary: 180000,
    maxSalary: 300000,
  },
];

export function getJobOpening(slug: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.slug === slug);
}