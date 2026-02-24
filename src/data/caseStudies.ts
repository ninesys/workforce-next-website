import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    industry: "Financial Services",
    challenge:
      "Manual compliance reviews taking 40+ hours per week with inconsistent results and regulatory risk.",
    solution:
      "Deployed multi-agent AI system with human-in-the-loop for complex decisions and automated audit trails.",
    result:
      "Review time cut by 80%, zero compliance incidents in 12 months, team reallocated to strategic advisory.",
    metric: "80% faster reviews",
  },
  {
    industry: "Manufacturing",
    challenge:
      "15,000 IoT sensors generating data with no real-time visibility. Reactive maintenance costing $3M+ annually.",
    solution:
      "Implemented CloudIQ platform with edge analytics and predictive maintenance ML models across 12 facilities.",
    result:
      "Unplanned downtime reduced by 60%, $2M annual savings in maintenance costs, 99.9% platform uptime.",
    metric: "$2M annual savings",
  },
  {
    industry: "Healthcare",
    challenge:
      "Patient intake process spanning 6 disconnected systems, averaging 45 minutes per patient with frequent errors.",
    solution:
      "End-to-end workflow automation connecting EHR, insurance verification, scheduling, and billing systems.",
    result:
      "Intake time reduced to 12 minutes, 90% reduction in data entry errors, staff satisfaction up 40%.",
    metric: "73% faster intake",
  },
];
