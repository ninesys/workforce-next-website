import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  // --- Hiring & Remote Teams ---
  {
    question: "How much does it cost to hire a dedicated developer from India?",
    answer:
      "Junior developers (1 to 3 years experience) typically cost $1,200 to $2,000 per month. Mid-level (3 to 5 years) ranges from $2,000 to $3,500, and senior developers (6+ years) cost $3,500 to $6,000 per month. That is 40 to 70% less than equivalent talent in the US or UK. Our pricing is all-inclusive. One monthly rate covers the developer, infrastructure, HR, and management. No hidden fees.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How quickly can you match me with a developer?",
    answer:
      "SethAI delivers matched profiles within 48 hours of receiving your requirements. The full timeline from requirement to a developer starting work is usually 5 to 7 business days. Days 1 to 2 we shortlist 2 to 3 candidates. Days 3 to 4 you interview them. Days 5 to 7 the selected developer onboards into your tools and codebase. For urgent needs, we can get someone working within 3 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between hiring a freelancer and a dedicated developer?",
    answer:
      "A freelancer typically works on multiple projects, sets their own schedule, and can leave whenever they want. A dedicated developer from Workforce Next works exclusively on your project full-time. They attend your standups, follow your processes, and function as part of your team. If they ever leave, we provide an immediate replacement at no extra cost and the context docs ensure the new person ramps up in days, not months.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do you handle time zone differences with Indian developers?",
    answer:
      "India is 9.5 hours ahead of US Eastern and 4.5 hours ahead of UK time. Our developers maintain 4 to 6 hours of overlap with your business hours for standups, code reviews, and real-time collaboration. Outside the overlap, they have uninterrupted focus time. Many clients say this actually increases velocity because development continues while they sleep. You wake up to completed work and PRs ready for review.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is it safe to share proprietary code with offshore developers?",
    answer:
      "Yes, with the right safeguards. Every engagement includes NDAs covering all proprietary information, IP assignment agreements so all code belongs to you, secure infrastructure with company-approved machines and endpoint security, and access control following least-privilege principles. We have worked with clients in fintech, healthcare, and defense where data security is non-negotiable.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What happens if a developer leaves mid-project?",
    answer:
      "This is exactly what our Context Continuity Guarantee covers. We maintain documentation of your codebase, domain glossary, and architecture decisions throughout the engagement. If a developer ever leaves, we use these context docs to onboard their replacement in days instead of months. SethAI already knows your culture, stack, and team dynamics, so the new match is faster and more accurate than the first one.",
    category: "hiring",
    categoryLabel: "Hiring",
  },

  // --- SethAI & Matching ---
  {
    question: "What is SethAI and how does it match developers?",
    answer:
      "SethAI is our AI-powered recruiter that screens developers for two things: technical skills and longevity signals. Technical skills means actual depth, not just keywords on a resume. Longevity signals means ownership mindset, career alignment, and communication reliability. For each candidate, SethAI generates a one-page match report with a match score, strengths, red flags, and recommended interview questions.",
    category: "ai",
    categoryLabel: "SethAI",
  },
  {
    question: "What does context-first matching mean?",
    answer:
      "Most staffing companies match on technology. You need Java, they send a Java developer. But a Java developer who built banking systems thinks completely differently from one who built logistics software. Same language, different universe. Context-first matching means SethAI considers industry experience, product type, and domain knowledge when selecting candidates. A fintech startup gets someone who understands payment rails, not just someone who writes Java.",
    category: "ai",
    categoryLabel: "SethAI",
  },
  {
    question: "How is SethAI different from job boards and ATS systems?",
    answer:
      "Job boards match keywords. ATS systems match years of experience. Neither tells you whether a developer has ownership mindset, whether they will stay for 12 months, or whether they actually understand what a RAG pipeline does in production. SethAI screens for technical depth and the behavioral signals that predict long-term retention. The result is a match report, not a stack of resumes.",
    category: "ai",
    categoryLabel: "SethAI",
  },
  {
    question: "What is the Context Continuity Guarantee?",
    answer:
      "If a developer ever leaves your engagement, the context docs we maintain throughout (codebase walkthrough, domain glossary, architecture decision log) allow their replacement to get productive in days instead of months. Workforce Next keeps copies of all documentation. Context compounds, so your team gets more valuable over time, and that value is protected even if an individual leaves.",
    category: "ai",
    categoryLabel: "SethAI",
  },

  // --- Product Engineering & Vibe Coding ---
  {
    question: "What is vibe coding and should I use it for my project?",
    answer:
      "Vibe coding means using AI-assisted tools like Cursor, GitHub Copilot, and similar code generators to write software faster. The developer prompts the AI, reviews what it generates, catches bugs, and ships production-ready code in roughly half the time. It works well for MVPs, rapid prototyping, and feature sprints. For regulated industries or complex systems where precision matters more than speed, traditional engineering is better. Most of our teams use a hybrid approach: AI for boilerplate and scaffolding, hand-crafted code for business logic and critical paths.",
    category: "automation",
    categoryLabel: "Engineering",
  },
  {
    question: "What is a product engineer and how are they different from a regular developer?",
    answer:
      "A product engineer thinks about the user, not just the ticket. They ask why before writing code, push back on specs that do not make sense, and care about what happens after deploy. A regular developer often focuses on completing assigned tasks. Product engineers take ownership of outcomes. At Workforce Next, we screen for this mindset specifically because it is the difference between someone who builds features and someone who builds products.",
    category: "automation",
    categoryLabel: "Engineering",
  },
  {
    question: "What is a vibe-code optimisation engineer?",
    answer:
      "A vibe-code optimisation engineer reviews and productionises AI-generated code. When your team uses Cursor, Copilot, or similar tools, the output needs someone who can audit it for security vulnerabilities, performance issues, edge cases the AI missed, and code that looks right but behaves wrong at scale. This is a new role that very few companies offer. It sits between code review and quality engineering.",
    category: "automation",
    categoryLabel: "Engineering",
  },

  // --- Engagement Models ---
  {
    question: "What is the MVP Sprint and who is it for?",
    answer:
      "The MVP Sprint is for founders building their first AI product. You get one senior developer for 4 weeks at a fixed scope and fixed price (1.2 to 1.8 lakh INR or $1,500 to $2,200). The deliverable is a working, deployable prototype, not a promise. SethAI matches the developer, you interview, and there is a one-week paid trial. The developer stays with you beyond the sprint if you want them to.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is an Engineering Pod and how does it work?",
    answer:
      "An Engineering Pod is for funded startups that need to scale their product team fast. You get 3 to 8 dedicated developers (typically 1 AI or backend lead, 2 to 3 full-stack, 1 QA, and optionally a data engineer). We deliver profiles within 48 hours, each developer gets a one-week paid trial, and the team comes with structured onboarding and our Context Continuity Guarantee. The key difference from agencies: your pod does not rotate between clients.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you offer a free trial or risk-free engagement?",
    answer:
      "Every engagement starts with a one-week paid trial. Real work on your actual codebase. You see how the developer thinks, communicates, and ships. If it is not the right fit, we rematch at no cost. There are no recruitment fees, no setup fees, and no long-term lock-in. You can scale up, scale down, or end the engagement with reasonable notice.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What does the monthly engineering advisory include?",
    answer:
      "Once a month, we sit down with you and ask: what does this team need in the next 90 days that it does not have yet? It is a proactive conversation about team health, upcoming technical challenges, skill gaps, and whether the current team composition still makes sense for where your product is heading. It is not a status report. It is strategic support to make sure your team keeps getting better.",
    category: "ai",
    categoryLabel: "SethAI",
  },
];

export const faqCategories = [
  { value: "all", label: "All Questions" },
  { value: "hiring", label: "Hiring & Teams" },
  { value: "ai", label: "SethAI & Matching" },
  { value: "automation", label: "Engineering & Vibe Coding" },
] as const;
