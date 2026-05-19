export interface HirePageData {
  slug: string;
  badge: string;
  title: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  painPoints: {
    title: string;
    description: string;
    icon: "clock" | "money" | "quality" | "scale";
  }[];
  whyUs: {
    title: string;
    description: string;
  }[];
  skills: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
}

export const hirePages: HirePageData[] = [
  {
    slug: "hire-dedicated-developers",
    badge: "DEDICATED DEVELOPERS",
    title: "Hire Dedicated Developers Who Ship Production Code from Day One",
    heroDescription:
      "Stop wasting months on hiring, onboarding, and hoping your new developer works out. Get pre-vetted, full-time dedicated developers who integrate with your team and start delivering results within the first week.",
    metaTitle:
      "Hire Dedicated Developers | Remote Development Teams - Workforce Next",
    metaDescription:
      "Hire dedicated developers and remote development teams from India. Pre-vetted engineers for full-time, part-time, or contract engagement. Start within 48 hours.",
    keywords: [
      "hire dedicated developers",
      "hire remote developers",
      "hire dedicated developers india",
      "hire dedicated remote developers",
      "hire offshore development team",
      "dedicated developers for hire",
      "hire remote development team",
    ],
    painPoints: [
      {
        title: "Hiring Takes Too Long",
        description:
          "Your project is stalling because it takes 3-6 months to find, interview, and onboard the right developer. Deadlines slip, competitors move faster, and your backlog keeps growing.",
        icon: "clock",
      },
      {
        title: "Freelancers Keep Disappearing",
        description:
          "You have tried freelancers who ghost mid-project, deliver inconsistent code, or juggle too many clients. You need reliability without the overhead of full-time hiring.",
        icon: "quality",
      },
      {
        title: "Scaling Costs Are Out of Control",
        description:
          "Building a local team means office space, benefits, HR overhead, and six-figure salaries. You need senior talent at a price that does not eat your entire runway.",
        icon: "money",
      },
      {
        title: "Hard to Find Specialized Skills",
        description:
          "Your project needs niche expertise in AI, cloud architecture, or specific frameworks. Local talent pools are shallow, and generalists cannot deliver the precision you need.",
        icon: "scale",
      },
    ],
    whyUs: [
      {
        title: "48-Hour Developer Matching",
        description:
          "Share your requirements and we match you with pre-vetted developers within 48 hours. No months of interviewing - start your trial immediately.",
      },
      {
        title: "Dedicated, Full-Time Focus",
        description:
          "Your developers work exclusively on your project - no split attention, no other clients. They attend your standups, follow your processes, and feel like your own team.",
      },
      {
        title: "Transparent & Flexible Engagement",
        description:
          "Monthly billing with no long-term lock-in. Scale your team up or down as your project demands. Replace a developer if the fit is not right - no questions asked.",
      },
      {
        title: "Senior-Level Talent, Proven Track Record",
        description:
          "Every developer in our network has 4+ years of production experience and has been through our technical assessment. We do not send juniors with padded resumes.",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "TypeScript",
      "Next.js",
      "Angular",
      "Vue.js",
      "AWS",
      "Azure",
      "DevOps",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Go",
      "Rust",
      ".NET",
      "PHP",
      "Ruby on Rails",
      "Flutter",
    ],
    process: [
      {
        step: 1,
        title: "Share Your Needs",
        description:
          "Tell us about your project, tech stack, team culture, and timeline. The more context, the better the match.",
      },
      {
        step: 2,
        title: "Review Matched Profiles",
        description:
          "We shortlist 2-3 developers who match your requirements. Review their portfolios, conduct your own interviews, and pick the best fit.",
      },
      {
        step: 3,
        title: "Start Building",
        description:
          "Your developer joins your team with the tools, access, and context they need. One B2B contract, one monthly invoice, so you can focus on shipping.",
      },
      {
        step: 4,
        title: "Scale as You Grow",
        description:
          "Need more developers? A different skill set? Scale your team in days, not months. We grow with you.",
      },
    ],
    ctaTitle: "Stop Waiting. Start Building.",
    ctaDescription:
      "Tell us what you are building and we will match you with dedicated developers in 48 hours. No recruitment fees, no long-term contracts, no risk.",
  },
  {
    slug: "hire-ai-developers",
    badge: "AI & ML DEVELOPERS",
    title: "Hire AI Developers Who Build Solutions That Actually Work in Production",
    heroDescription:
      "Most AI projects die in the POC stage. Our AI and ML developers have shipped production systems - from LLM-powered agents to computer vision pipelines - that deliver measurable business outcomes, not just impressive demos.",
    metaTitle:
      "Hire AI Developers | LLM, ML & Generative AI Engineers - Workforce Next",
    metaDescription:
      "Hire expert AI developers, LLM engineers, and ML specialists. Build production-ready AI agents, chatbots, NLP systems, and generative AI solutions with Workforce Next.",
    keywords: [
      "hire ai developers",
      "hire llm developers",
      "hire machine learning developers",
      "hire ai developer india",
      "hire generative ai developers",
      "hire chatbot developers",
      "hire nlp developers",
      "ai developers for hire",
    ],
    painPoints: [
      {
        title: "Your AI POC Never Made It to Production",
        description:
          "You have spent months on a proof-of-concept that impressed the boardroom but fell apart under real-world data, latency requirements, and edge cases. You need engineers who build for production, not just notebooks.",
        icon: "quality",
      },
      {
        title: "AI Talent Is Impossibly Expensive",
        description:
          "Senior AI engineers command $200K-$400K in the US. Even at those rates, most have only done academic work or Kaggle competitions - not production ML systems that handle millions of requests.",
        icon: "money",
      },
      {
        title: "You Cannot Tell Who Actually Knows AI",
        description:
          "Everyone claims to be an AI expert now. Half the resumes you see list ChatGPT as a skill. You need developers who understand embeddings, fine-tuning, RAG architectures, and model evaluation - not prompt wrappers.",
        icon: "scale",
      },
      {
        title: "Integration with Existing Systems Is a Nightmare",
        description:
          "Your AI solution needs to work with your CRM, ERP, data warehouse, and legacy APIs - not run in isolation. Most AI developers build standalone experiments that never connect to the real business.",
        icon: "clock",
      },
    ],
    whyUs: [
      {
        title: "Production-Proven AI Engineers",
        description:
          "Our developers have deployed LLM-based agents, recommendation engines, NLP pipelines, and computer vision systems in production. They know the difference between a demo and a scalable system.",
      },
      {
        title: "Full-Stack AI Capability",
        description:
          "From data engineering and model training to API deployment and monitoring - we cover the entire AI development lifecycle. No handoffs between teams.",
      },
      {
        title: "LLM & Generative AI Specialists",
        description:
          "Fine-tuning, RAG implementation, prompt engineering, multi-agent orchestration, guardrails - we have hands-on expertise with the latest AI architectures and frameworks.",
      },
      {
        title: "Business-First Approach",
        description:
          "We do not chase the latest model release. We start with your business problem, evaluate the right approach (sometimes it is not even AI), and build a solution that delivers ROI.",
      },
    ],
    skills: [
      "Python",
      "LangChain",
      "OpenAI",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "AWS Bedrock",
      "Azure AI",
      "CrewAI",
      "AutoGen",
      "Pinecone",
      "Weaviate",
      "RAG",
      "NLP",
      "Computer Vision",
      "MLOps",
      "FastAPI",
      "Kubernetes",
      "Docker",
      "Spark",
    ],
    process: [
      {
        step: 1,
        title: "Define the Problem",
        description:
          "We start with your business challenge, not a technology. What decision are you trying to automate? What data do you have? What does success look like?",
      },
      {
        step: 2,
        title: "Match AI Specialists",
        description:
          "Based on your problem domain (NLP, vision, agents, analytics), we match developers with the right specialization and production experience.",
      },
      {
        step: 3,
        title: "Build & Validate",
        description:
          "Your AI developers build with production constraints from day one - latency, cost, accuracy thresholds, and integration requirements baked in.",
      },
      {
        step: 4,
        title: "Deploy & Monitor",
        description:
          "Launch with proper monitoring, model performance tracking, and feedback loops. AI systems improve with use - we make sure yours does.",
      },
    ],
    ctaTitle: "Build AI That Actually Ships",
    ctaDescription:
      "Tell us about your AI challenge and we will match you with developers who have done it before. From chatbots to autonomous agents - we have the expertise.",
  },
  {
    slug: "hire-mobile-app-developers",
    badge: "MOBILE APP DEVELOPERS",
    title: "Hire Mobile App Developers Who Build Apps Users Actually Love",
    heroDescription:
      "Your app is not just code - it is your customer experience. Our mobile developers build high-performance Android, iOS, and cross-platform apps with clean architecture, smooth UX, and the reliability that earns 5-star ratings.",
    metaTitle:
      "Hire Mobile App Developers | Android, iOS & Cross-Platform - Workforce Next",
    metaDescription:
      "Hire expert mobile app developers for Android, iOS, Unity, React Native, and Flutter. Build high-performance apps with dedicated developers from Workforce Next.",
    keywords: [
      "hire mobile app developers",
      "hire android developer",
      "hire android developers india",
      "hire unity developer",
      "hire react native developers",
      "hire flutter developers",
      "hire ios developers",
      "mobile developers for hire",
    ],
    painPoints: [
      {
        title: "Your App Crashes More Than It Converts",
        description:
          "Users uninstall apps within 72 hours if they crash or lag. Your current app has performance issues, memory leaks, or UI jank that is costing you users and revenue every single day.",
        icon: "quality",
      },
      {
        title: "Building for Two Platforms Is Doubling Your Budget",
        description:
          "Maintaining separate Android and iOS codebases means double the developers, double the bugs, and feature parity that is always out of sync. You need a smarter approach.",
        icon: "money",
      },
      {
        title: "Your App Store Ratings Are Tanking",
        description:
          "Slow load times, poor offline support, and clunky navigation are driving 1-star reviews. Your competitors have smoother apps, and users are noticing.",
        icon: "clock",
      },
      {
        title: "Finding Developers Who Know Mobile Is Hard",
        description:
          "Mobile development is not web development with a smaller screen. You need engineers who understand platform-specific patterns, native APIs, performance profiling, and app store guidelines.",
        icon: "scale",
      },
    ],
    whyUs: [
      {
        title: "Native & Cross-Platform Expertise",
        description:
          "Whether you need native Android (Kotlin/Java), native iOS (Swift), React Native, Flutter, or Unity for gaming - we have specialists in every mobile stack.",
      },
      {
        title: "Performance-Obsessed Engineering",
        description:
          "Our developers profile memory, optimize rendering, implement lazy loading, and tune every animation. The result: apps that feel instant and never stutter.",
      },
      {
        title: "End-to-End Mobile Team",
        description:
          "From UI/UX design and frontend to backend APIs and DevOps - get a complete mobile team, not just a developer who needs a designer, a backend engineer, and a QA tester to be useful.",
      },
      {
        title: "App Store Launch Support",
        description:
          "We handle app store submissions, review guidelines compliance, beta testing setup, and post-launch monitoring. Your app launches right the first time.",
      },
    ],
    skills: [
      "Kotlin",
      "Swift",
      "React Native",
      "Flutter",
      "Java",
      "Unity",
      "Jetpack Compose",
      "SwiftUI",
      "Firebase",
      "GraphQL",
      "REST APIs",
      "SQLite",
      "Room",
      "Core Data",
      "ARKit",
      "ARCore",
      "CI/CD",
      "Fastlane",
      "TestFlight",
      "App Store Connect",
    ],
    process: [
      {
        step: 1,
        title: "Define Your App Vision",
        description:
          "Share your app concept, target users, platform priorities, and business goals. We help you choose the right tech stack and engagement model.",
      },
      {
        step: 2,
        title: "Meet Your Developers",
        description:
          "We match you with mobile developers who have shipped apps in your industry. Review their portfolio, interview them, and pick your team.",
      },
      {
        step: 3,
        title: "Design, Build, Test",
        description:
          "Your dedicated team follows agile sprints with regular demos. Every feature is tested on real devices across OS versions before it ships.",
      },
      {
        step: 4,
        title: "Launch & Iterate",
        description:
          "Go live with confidence. Your team handles app store submissions, crash monitoring, and feature updates based on user feedback and analytics.",
      },
    ],
    ctaTitle: "Build the App Your Users Deserve",
    ctaDescription:
      "Tell us about your mobile app project and we will match you with developers who have shipped apps with millions of downloads.",
  },
  {
    slug: "hire-software-developers-india",
    badge: "DEVELOPERS IN INDIA",
    title: "Hire Software Developers in India Without the Outsourcing Headaches",
    heroDescription:
      "India has the world's largest pool of engineering talent. But finding reliable, senior developers through traditional outsourcing is a minefield. We give you direct access to top-tier Indian developers - with the quality control, communication, and transparency that outsourcing usually lacks.",
    metaTitle:
      "Hire Software Developers in India | Python, React, Full-Stack - Workforce Next",
    metaDescription:
      "Hire top software developers in India for Python, React, full-stack, frontend, and backend development. Transparent pricing, no middlemen, direct team access.",
    keywords: [
      "hire software developers india",
      "hire developers india",
      "hire python developers india",
      "hire frontend developers india",
      "how to hire developers in india",
      "cost to hire a software developer",
      "it staffing companies in india",
      "hire full stack developer india",
      "hire react developers india",
    ],
    painPoints: [
      {
        title: "Previous Outsourcing Burned You",
        description:
          "You have tried offshoring before and got junior developers masked as seniors, missed deadlines, poor communication, and code that had to be rewritten. You are skeptical - and rightfully so.",
        icon: "quality",
      },
      {
        title: "US/UK Developer Costs Are Unsustainable",
        description:
          "At $150-$250/hour for senior developers locally, your burn rate is eating through funding faster than you can ship features. You need the same quality at a sustainable cost structure.",
        icon: "money",
      },
      {
        title: "Time Zone Gaps Kill Productivity",
        description:
          "You have experienced the frustration of waiting 24 hours for a response from offshore teams. Async communication turns 2-day tasks into 2-week tasks.",
        icon: "clock",
      },
      {
        title: "You Cannot Verify Quality from a Portfolio",
        description:
          "Every agency shows the same polished portfolio. But you have no way to tell if the developers who built those projects are the ones who will work on yours.",
        icon: "scale",
      },
    ],
    whyUs: [
      {
        title: "No Middlemen, Direct Access",
        description:
          "Your developers report to you, not to an account manager. Join their standups, review their PRs, and communicate directly on Slack. No telephone game.",
      },
      {
        title: "IST Overlap with Your Business Hours",
        description:
          "Our developers work with 4-6 hours of overlap with US and European business hours. Real-time collaboration when you need it, async progress while you sleep.",
      },
      {
        title: "Transparent, All-Inclusive Pricing",
        description:
          "One monthly rate per developer. No hidden fees for project management, infrastructure, or communication tools. What you see is what you pay.",
      },
      {
        title: "Rigorous Technical Vetting",
        description:
          "Less than 5% of applicants pass our technical assessment. We test system design, code quality, debugging ability, and communication - not just algorithm puzzles.",
      },
    ],
    skills: [
      "Python",
      "React",
      "Node.js",
      "Java",
      "TypeScript",
      "Angular",
      "Vue.js",
      "Django",
      "FastAPI",
      "Spring Boot",
      ".NET",
      "PHP",
      "Laravel",
      "AWS",
      "Azure",
      "GCP",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    process: [
      {
        step: 1,
        title: "Share Your Requirements",
        description:
          "Tell us the roles, tech stack, experience level, and engagement model (full-time, part-time, or contract) you need.",
      },
      {
        step: 2,
        title: "Interview Your Shortlist",
        description:
          "We send 2-3 pre-vetted profiles within 48 hours. You interview them directly - technical rounds, culture fit, whatever your process requires.",
      },
      {
        step: 3,
        title: "Risk-Free Trial",
        description:
          "Start with a 1-week trial period. If the developer is not the right fit, we replace them immediately at no additional cost.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "One B2B contract, one monthly invoice in your currency, predictable pricing. You focus on building your product. Scale the team up or down as needed.",
      },
    ],
    ctaTitle: "Get Started with Zero Risk",
    ctaDescription:
      "Tell us what you need and we will send you matched developer profiles within 48 hours. Start with a risk-free trial - no long-term commitment required.",
  },
  {
    slug: "hire-software-testers",
    badge: "QA & SOFTWARE TESTERS",
    title: "Hire Software Testers Who Catch the Bugs Your Developers Cannot See",
    heroDescription:
      "Shipping untested code is shipping a liability. Our QA engineers and software testers specialize in manual testing, automation, mobile QA, performance testing, and AI/LLM evaluation - so your product launches with confidence, not crossed fingers.",
    metaTitle:
      "Hire Software Testers | QA, Mobile, AI & LLM Testing - Workforce Next",
    metaDescription:
      "Hire expert software testers and QA engineers for manual testing, test automation, mobile QA, performance testing, and AI/LLM quality evaluation. Start in 48 hours.",
    keywords: [
      "hire software testers",
      "hire qa testers",
      "hire mobile testers",
      "hire performance testing experts",
      "hire security testers",
      "hire qa tester",
      "hire mobile app testers",
      "hire tester for security testing",
      "software testers for hire",
    ],
    painPoints: [
      {
        title: "Bugs Keep Reaching Production",
        description:
          "Your developers are writing code and testing their own work. Critical bugs slip through every sprint, users report issues before your team does, and hotfixes have become a weekly routine.",
        icon: "quality",
      },
      {
        title: "Your AI Output Has No Quality Gate",
        description:
          "Your LLM-powered features hallucinate, your agentic AI workflows break on edge cases, and there is no systematic way to evaluate output quality. You need testers who understand how to validate AI systems - not just traditional software.",
        icon: "scale",
      },
      {
        title: "Manual Testing Cannot Keep Up with Releases",
        description:
          "Your release cycle has accelerated but your testing has not. Manual regression takes days, blocks deployments, and still misses issues. You need automation that actually works.",
        icon: "clock",
      },
      {
        title: "Mobile Testing Is an Afterthought",
        description:
          "Your app works on the two devices your team owns. But users are on hundreds of device-OS combinations, and your 1-star reviews prove it. You need systematic mobile QA across real devices.",
        icon: "money",
      },
    ],
    whyUs: [
      {
        title: "Traditional + AI Testing Expertise",
        description:
          "Our testers cover the full spectrum - from functional and regression testing to LLM output evaluation, prompt testing, agentic workflow validation, and AI guardrail verification.",
      },
      {
        title: "Test Automation That Pays for Itself",
        description:
          "We build maintainable automation suites using Selenium, Playwright, Cypress, and Appium. Regression that took days now runs in minutes on every commit.",
      },
      {
        title: "Real Device Mobile Testing",
        description:
          "We test on real Android and iOS devices across OS versions, screen sizes, and network conditions. No emulator-only testing that misses real-world issues.",
      },
      {
        title: "Security & Performance Specialists",
        description:
          "From OWASP vulnerability scanning and penetration testing to load testing and API stress testing - we find the issues that break under pressure.",
      },
    ],
    skills: [
      "Selenium",
      "Playwright",
      "Cypress",
      "Appium",
      "JMeter",
      "Postman",
      "OWASP ZAP",
      "BrowserStack",
      "Jest",
      "PyTest",
      "Robot Framework",
      "Gatling",
      "K6",
      "LLM Evaluation",
      "Prompt Testing",
      "AI Guardrails",
      "API Testing",
      "Mobile QA",
      "CI/CD Integration",
      "JIRA",
    ],
    process: [
      {
        step: 1,
        title: "Assess Your QA Gaps",
        description:
          "Tell us about your product, tech stack, release frequency, and current testing pain points. We identify the biggest quality risks.",
      },
      {
        step: 2,
        title: "Match QA Specialists",
        description:
          "We match testers with the right expertise - manual QA, automation engineers, mobile testers, security specialists, or AI evaluation experts.",
      },
      {
        step: 3,
        title: "Integrate & Test",
        description:
          "Your testers plug into your sprint cycle, set up test frameworks, and start catching bugs from day one. No months of ramp-up.",
      },
      {
        step: 4,
        title: "Continuous Quality",
        description:
          "As your product evolves, your QA team scales test coverage, builds automation, and ensures every release is production-ready.",
      },
    ],
    ctaTitle: "Ship with Confidence, Not Hope",
    ctaDescription:
      "Tell us about your testing challenges and we will match you with QA specialists who catch bugs before your users do. Software, mobile, and AI testing covered.",
  },
];
