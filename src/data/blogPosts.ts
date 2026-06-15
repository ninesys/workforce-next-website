import type { BlogPost, BlogFAQ } from "./blog/types";

import twelveParametersAiMatchingToolsShouldEvaluate from "./blog/12-parameters-ai-matching-tools-should-evaluate";
import howDoesAiDeveloperMatchingActuallyWork from "./blog/how-does-ai-developer-matching-actually-work";
import bestAiDeveloperMatchingTools2026 from "./blog/best-ai-developer-matching-tools-2026";
import whatIsLifestyleFitMatchingInDeveloperHiring from "./blog/what-is-lifestyle-fit-matching-in-developer-hiring";
import whyOffshoreDevelopersKeepLeaving from "./blog/why-offshore-developers-keep-leaving";
import vibeCodingExplainedWhenToUseIt from "./blog/vibe-coding-explained-when-to-use-it";
import contextFirstMatchingWhyTechStackIsNotEnough from "./blog/context-first-matching-why-tech-stack-is-not-enough";
import realCostOfSwitchingTechPartners from "./blog/real-cost-of-switching-tech-partners";
import howToBuildAiMvp4WeeksOffshoreDeveloper from "./blog/how-to-build-ai-mvp-4-weeks-offshore-developer";
import dedicatedDeveloperVsFreelancerVsAgencyTotalCost from "./blog/dedicated-developer-vs-freelancer-vs-agency-total-cost";
import aiDeveloperInterviewQuestionsWhatToAsk from "./blog/ai-developer-interview-questions-what-to-ask";
import ragVsFineTuningWhenToUseWhich from "./blog/rag-vs-fine-tuning-when-to-use-which";
import howToChooseAiAgentFramework from "./blog/how-to-choose-ai-agent-framework";
import doYouStillNeedAPromptEngineerIn2026 from "./blog/do-you-still-need-a-prompt-engineer-in-2026";
import bestWorkflowAutomationTools2026 from "./blog/best-workflow-automation-tools-2026";
import aiMvpTechStack2026 from "./blog/ai-mvp-tech-stack-2026";
import staffAugmentationVsEorVsIndiaEntity2026 from "./blog/staff-augmentation-vs-eor-vs-india-entity-2026";
import toptalVsAndelaVsTuringVsWorkforcenextComparison2026 from "./blog/toptal-vs-andela-vs-turing-vs-workforcenext-comparison-2026";
import seniorIndianDeveloperSalary2026 from "./blog/senior-indian-developer-salary-2026";
import verifyIndianDeveloperExperienceChecklist2026 from "./blog/verify-indian-developer-experience-checklist-2026";
import mostOutsourcedDevelopersUsCompanies2026 from "./blog/most-outsourced-developers-us-companies-2026";
import mcpExplainedHowToHireMcpDevelopers from "./blog/mcp-explained-how-to-hire-mcp-developers";
import kotlinVsJavaAndroid2026 from "./blog/kotlin-vs-java-android-2026";
import hireSoftwareTestingTeam2026 from "./blog/hire-software-testing-team-2026";
import shortTermIndianDevelopersEuropeanProjects2026 from "./blog/short-term-indian-developers-european-projects-2026";
import androidAppDeveloperHiringGuide2026 from "./blog/android-app-developer-hiring-guide-2026";
import hireNodejsDevelopersFromIndia2026 from "./blog/hire-nodejs-developers-from-india-2026";
import hireReactjsDevelopersFromIndia2026 from "./blog/hire-reactjs-developers-from-india-2026";
import hireMobileAppDevelopersCrossPlatform2026 from "./blog/hire-mobile-app-developers-cross-platform-2026";
import hireRemoteMobileAppTestingTeam2026 from "./blog/hire-remote-mobile-app-testing-team-2026";
import owaspLlmTop10ImplementationChecklist2026 from "./blog/owasp-llm-top-10-implementation-checklist-2026";
import promptInjectionDefenseProductionLlmApps2026 from "./blog/prompt-injection-defense-production-llm-apps-2026";
import nodejsDeveloperRoleEnterpriseApplications2026 from "./blog/nodejs-developer-role-enterprise-applications-2026";
import nodejsVsJavaVsGoEnterpriseBackend2026 from "./blog/nodejs-vs-java-vs-go-enterprise-backend-2026";
import nodejsMicroservicesArchitectureEnterpriseGuide2026 from "./blog/nodejs-microservices-architecture-enterprise-guide-2026";
import nodejsPerformanceScalingProductionChecklist2026 from "./blog/nodejs-performance-scaling-production-checklist-2026";
import nodejsSecurityEnterpriseChecklistOwasp2026 from "./blog/nodejs-security-enterprise-checklist-owasp-2026";
import expressjsVsFastifyVsNestjs2026 from "./blog/expressjs-vs-fastify-vs-nestjs-2026";
import enterpriseWebApplicationDevelopmentCompleteGuide2026 from "./blog/enterprise-web-application-development-complete-guide-2026";
import outsourceEnterpriseWebApplicationDevelopment2026 from "./blog/outsource-enterprise-web-application-development-2026";
import aiEnabledRemoteStaffingCompleteGuide2026 from "./blog/ai-enabled-remote-staffing-complete-guide-2026";
import automateStaffingAgencyWithN8nCaseStudy2026 from "./blog/automate-staffing-agency-with-n8n-case-study-2026";
import recruiterAdminCostCalculator2026 from "./blog/recruiter-admin-cost-calculator-2026";
import tenWorkflowsEveryStaffingAgencyShouldAutomate2026 from "./blog/10-workflows-every-staffing-agency-should-automate-2026";
import automateBullhornWithN8nStaffingAgencyGuide from "./blog/automate-bullhorn-with-n8n-staffing-agency-guide";
import bullhornJobadderCrelateAutomationComparison2026 from "./blog/bullhorn-jobadder-crelate-automation-comparison-2026";
import aiWorkflowAutomationFleetCompanies2026 from "./blog/ai-workflow-automation-fleet-companies-2026";
import hrDocumentAutomationSmallBusiness2026 from "./blog/hr-document-automation-small-business-2026";
import saasWebApplicationDevelopmentGuideStartups2026 from "./blog/saas-web-application-development-guide-startups-2026";
import securingRagApplicationsDataIsolationPatterns2026 from "./blog/securing-rag-applications-data-isolation-patterns-2026";
import aiCodeReviewSecurityEnterprisePipelines2026 from "./blog/ai-code-review-security-enterprise-pipelines-2026";
import bestTechStackSaasMvp2026 from "./blog/best-tech-stack-saas-mvp-2026";

export type { BlogPost, BlogFAQ };

export const blogCategories = [
  { value: "all", label: "All Posts" },
  { value: "hiring", label: "Hiring & Teams" },
  { value: "engineering", label: "Engineering" },
  { value: "leadership", label: "Leadership" },
  { value: "product", label: "Product" },
] as const;

// Order is preserved from the pre-split single-file layout. The blog listing
// page applies its own sort if needed; this is the canonical order for any
// caller that iterates the array directly (sitemap, etc.).
export const blogPosts: BlogPost[] = [
  twelveParametersAiMatchingToolsShouldEvaluate,
  howDoesAiDeveloperMatchingActuallyWork,
  bestAiDeveloperMatchingTools2026,
  whatIsLifestyleFitMatchingInDeveloperHiring,
  whyOffshoreDevelopersKeepLeaving,
  vibeCodingExplainedWhenToUseIt,
  contextFirstMatchingWhyTechStackIsNotEnough,
  realCostOfSwitchingTechPartners,
  howToBuildAiMvp4WeeksOffshoreDeveloper,
  dedicatedDeveloperVsFreelancerVsAgencyTotalCost,
  aiDeveloperInterviewQuestionsWhatToAsk,
  ragVsFineTuningWhenToUseWhich,
  howToChooseAiAgentFramework,
  doYouStillNeedAPromptEngineerIn2026,
  bestWorkflowAutomationTools2026,
  aiMvpTechStack2026,
  staffAugmentationVsEorVsIndiaEntity2026,
  toptalVsAndelaVsTuringVsWorkforcenextComparison2026,
  seniorIndianDeveloperSalary2026,
  verifyIndianDeveloperExperienceChecklist2026,
  mostOutsourcedDevelopersUsCompanies2026,
  mcpExplainedHowToHireMcpDevelopers,
  kotlinVsJavaAndroid2026,
  hireSoftwareTestingTeam2026,
  shortTermIndianDevelopersEuropeanProjects2026,
  androidAppDeveloperHiringGuide2026,
  hireNodejsDevelopersFromIndia2026,
  hireReactjsDevelopersFromIndia2026,
  hireMobileAppDevelopersCrossPlatform2026,
  hireRemoteMobileAppTestingTeam2026,
  owaspLlmTop10ImplementationChecklist2026,
  promptInjectionDefenseProductionLlmApps2026,
  nodejsDeveloperRoleEnterpriseApplications2026,
  nodejsVsJavaVsGoEnterpriseBackend2026,
  nodejsMicroservicesArchitectureEnterpriseGuide2026,
  nodejsPerformanceScalingProductionChecklist2026,
  nodejsSecurityEnterpriseChecklistOwasp2026,
  expressjsVsFastifyVsNestjs2026,
  enterpriseWebApplicationDevelopmentCompleteGuide2026,
  outsourceEnterpriseWebApplicationDevelopment2026,
  aiEnabledRemoteStaffingCompleteGuide2026,
  automateStaffingAgencyWithN8nCaseStudy2026,
  recruiterAdminCostCalculator2026,
  tenWorkflowsEveryStaffingAgencyShouldAutomate2026,
  automateBullhornWithN8nStaffingAgencyGuide,
  bullhornJobadderCrelateAutomationComparison2026,
  aiWorkflowAutomationFleetCompanies2026,
  hrDocumentAutomationSmallBusiness2026,
  saasWebApplicationDevelopmentGuideStartups2026,
  securingRagApplicationsDataIsolationPatterns2026,
  aiCodeReviewSecurityEnterprisePipelines2026,
  bestTechStackSaasMvp2026,
];
