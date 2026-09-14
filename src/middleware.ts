import { NextResponse, type NextRequest } from "next/server";

const AI_DEV = "/hire/ai-developers/";
const FRONTEND = "/hire/frontend-engineers/";
const BACKEND = "/hire/backend-engineers/";
const UNITY = "/hire/unity-developers/";
// EPI = legacy Employee Productivity Intelligence product. Removed 2026-05-15.
// All inbound traffic redirects to the SethAI product page (the active product).
const EPI = "/products/seth-ai-recruiter/";

// Exact-match legacy paths. Keys are stored without trailing slash; lookup
// strips the slash from the incoming request so both /foo and /foo/ hit.
const EXACT: Record<string, string> = {
  // Old hire slugs
  "/how-to-hire-developers-in-india": AI_DEV,
  "/hire-ai-developers": AI_DEV,
  "/hire-dedicated-developers": AI_DEV,
  "/hire-mobile-app-developers": FRONTEND,
  "/hire-software-developers-india": BACKEND,
  "/hire-software-testers": BACKEND,
  "/hire-an-ai-developer": AI_DEV,
  "/hire-dedicated-llm-developers": AI_DEV,
  "/hire-android-developer": "/hire/android-developers/",
  "/hire-unity-developer": UNITY,
  "/how-to-hire-mobile-app-developers": FRONTEND,
  "/it-staffing-companies-in-india": BACKEND,
  "/cost-to-hire-a-software-developer": BACKEND,
  "/how-to-hire-a-full-stack-developer": BACKEND,
  "/hire-python-developers": BACKEND,
  "/hire-react-developers": FRONTEND,
  "/hire-remote-developers": AI_DEV,
  "/hire-specialized-developers": AI_DEV,
  "/complete-guide-to-hiring-developers": AI_DEV,
  "/hire-data-and-ai-experts": AI_DEV,
  "/hire-frontend-developers": FRONTEND,

  // Retired talent-shop differentiator pages (deleted 2026-06-20 in 4-service repositioning)
  "/ai-native-india": "/india-handled/",
  "/not-another-body-shop": "/why-teams-stay/",
  "/cost-of-switching": "/blog/dedicated-developer-vs-freelancer-vs-agency-total-cost/",
  "/context-continuity-guarantee": "/how-we-work/",

  // Old .html pages
  "/pricing.html": EPI,
  "/clients.html": "/",
  "/contact.html": "/contact/",
  "/workforce-analytics.html": EPI,
  "/employee-productivity-analytics.html": EPI,
  "/how-employee-monitoring-works.html": EPI,
  "/about.html": "/",
  "/privacy-policy.html": "/privacy-policy/",
  "/terms.html": "/terms-of-use/",
  "/cancellation-refund.html": "/terms-of-use/",
  "/careers.html": "/careers/",
  "/book-demo.html": "/contact/",
  "/features.html": "/",
  "/security.html": "/",
  "/use-cases.html": "/",
  "/blog.html": "/blog/",
  "/employeemonitoring-faq.html": "/faq/",
  "/workforce-analytics-software.html": EPI,
  "/fieldforce-analytics-software.html": EPI,
  "/time-tracking-software.html": EPI,
  "/why-workforce-next.html": "/why-teams-stay/",
  "/task-management.html": EPI,
  "/labs.html": "/",
  "/employee-monitoring.html": EPI,

  // /topics pages
  "/topics/monitoring.html": EPI,
  "/topics/automated-timesheets.html": EPI,
  "/topics/productivity-analytics.html": EPI,
  "/topics/workforce-analytics.html": EPI,
  "/topics/dlp.html": EPI,
  "/topics/how-to-create-work-culture.html": "/blog/",
  "/topics/sofware.html": "/",

  // Old blog posts
  "/blog/ai-driven-soil-testing-spectroscopy-iot": "/blog/",
  "/blog/convert-electronic-product-to-iot-smart-device": "/blog/",
  "/blog/how-to-hire-developers-in-india":
    "/blog/dedicated-developer-vs-freelancer-vs-agency-total-cost/",
  "/blog/why-enterprise-ai-projects-fail": "/blog/",
  "/blog/agentic-ai-vs-traditional-automation":
    "/blog/vibe-coding-explained-when-to-use-it/",
  "/blog/workflow-automation-upgrade-signs": "/blog/",
  "/blog/iot-platform-vendor-lock-in": "/blog/",
  "/blog/real-time-analytics-manufacturing": "/blog/",
  "/blog/hidden-cost-legacy-integration":
    "/blog/dedicated-developer-vs-freelancer-vs-agency-total-cost/",

  // Retired zero-traffic posts from the pre-4-service-positioning era (removed 2026-09-13)
  "/blog/best-ai-developer-matching-tools-2026":
    "/blog/toptal-vs-andela-vs-turing-vs-workforcenext-comparison-2026/",
  "/blog/context-first-matching-why-tech-stack-is-not-enough":
    "/blog/ai-developer-interview-questions-what-to-ask/",
  "/blog/how-does-ai-developer-matching-actually-work": "/products/seth-ai-recruiter/",
  "/blog/real-cost-of-switching-tech-partners":
    "/blog/dedicated-developer-vs-freelancer-vs-agency-total-cost/",

  // Retired off-vision automation-consulting content (staffing/fleet/HR
  // clusters), pruned 2026-09-14 per vision-alignment-audit.md. All had
  // near-zero clicks despite several ranking page 1.
  "/blog/10-workflows-every-staffing-agency-should-automate-2026":
    "/hire/automation-consultants/",
  "/blog/automate-bullhorn-with-n8n-staffing-agency-guide": "/hire/automation-consultants/",
  "/blog/automate-staffing-agency-with-n8n-case-study-2026":
    "/hire/automation-consultants/",
  "/blog/bullhorn-jobadder-crelate-automation-comparison-2026":
    "/hire/automation-consultants/",
  "/blog/recruiter-admin-cost-calculator-2026": "/hire/automation-consultants/",
  "/blog/ai-workflow-automation-fleet-companies-2026": "/hire/automation-consultants/",
  "/blog/logistics-3pl-tech-challenges-2026": "/hire/automation-consultants/",
  "/blog/osrm-vs-google-maps-vs-mapbox-routing-engine-2026": "/hire/automation-consultants/",
  "/blog/route-optimization-algorithms-3pl-fleet-platforms": "/hire/automation-consultants/",
  "/blog/hr-document-automation-small-business-2026": "/hire/automation-consultants/",
  "/blog/page2": "/blog/",
  "/blog/page4": "/blog/",
  "/blog/stealth-employee-monitoring-software": "/blog/",
  "/blog/software-to-monitor-employees-working-from-home": "/blog/",
  "/blog/screen-monitoring-software": "/blog/",
  "/blog/top-employee-monitoring-tools": "/blog/",

  // Old category / service pages
  "/cloud-and-devops": "/",
  "/software-development-services": "/",
  "/data-engineering-and-analytics": "/",
  "/ai-and-machine-learning": "/",
  "/quality-assurance-and-testing": "/",
  "/current-jobs": "/careers/",
  "/job-openings": "/careers/",
  "/screen-monitoring-software": EPI,
  "/top-employee-monitoring-tools": EPI,
  "/products/employee-productivity-intelligence": EPI,
  "/software-to-monitor-employees-working-from-home": EPI,
  "/stealth-employee-monitoring-software": EPI,
  "/best-employee-monitoring-software": EPI,
  "/terms-and-conditions": "/terms-of-use/",
  "/automation-consulting": "/",
  "/software-maintenance-services": "/",
  "/software-consulting": "/",
  "/home": "/",
  "/feed": "/",
};

// Prefix redirects: if the pathname starts with `prefix + "/"`, redirect to `target`.
const PREFIX: Array<[string, string]> = [
  ["/services", "/"],
  ["/topics", "/"],
  ["/blogs", "/blog/"],
  ["/blog/category", "/blog/"],
  ["/blog/page", "/blog/"],
  ["/category", "/blog/"],
  ["/author", "/blog/"],
  ["/jobs", "/careers/"],
  ["/assets/downloadble", "/"],
];

const stripTrailingSlash = (p: string) =>
  p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Never rewrite API routes or Next.js internals.
  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  // Markdown alternates: /<path>.md is internally served by /md/<path>.
  // The user-visible URL stays as .md; the route handler under app/md emits
  // text/markdown. AI tools (Cursor, Windsurf, Perplexity, ChatGPT custom
  // GPTs) discover this via <link rel="alternate" type="text/markdown">.
  if (
    pathname.endsWith(".md") &&
    !pathname.startsWith("/md/")
  ) {
    const stripped = pathname.slice(0, -3); // drop ".md"
    return NextResponse.rewrite(new URL(`/md${stripped}`, req.url));
  }

  const key = stripTrailingSlash(pathname);

  // Exact legacy match.
  const exact = EXACT[key];
  if (exact) {
    return NextResponse.redirect(new URL(exact, req.url), 308);
  }

  // Prefix legacy match.
  for (const [prefix, target] of PREFIX) {
    if (key === prefix || key.startsWith(prefix + "/")) {
      return NextResponse.redirect(new URL(target, req.url), 308);
    }
  }

  // Old WordPress feeds at any depth (except exact /feed, handled above).
  if (key.endsWith("/feed") && key !== "/feed") {
    return NextResponse.redirect(new URL("/", req.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on every request except Next internals and static asset extensions.
    // Keeps middleware cost minimal while still catching .html legacy URLs.
    "/((?!_next/|favicon\\.ico|.*\\.(?:png|jpg|jpeg|webp|svg|ico|gif|txt|xml|json|js|css|woff|woff2|mp4|webmanifest)$).*)",
  ],
};
