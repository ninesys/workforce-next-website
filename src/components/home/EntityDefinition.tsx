import Link from "next/link";

export default function EntityDefinition() {
  return (
    <article className="py-12 md:py-16 bg-white dark:bg-dark-900 border-b border-dark-50 dark:border-dark-800">
      <div className="container-custom max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
          Who is Workforce Next?
        </h2>
        <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-lg">
          <strong>Workforce Next</strong> is a remote engineering staffing company
          based in India that builds dedicated development teams for founders,
          funded startups, and enterprises. Unlike traditional staffing firms that
          match on tech stack alone, Workforce Next uses{" "}
          <Link href="/products/seth-ai-recruiter" className="text-primary-500 hover:underline">
            SethAI
          </Link>
          , an AI-powered recruiter, to match developers by industry context and
          longevity signals. The company offers{" "}
          <Link href="/hire/ai-developers" className="text-primary-500 hover:underline">
            AI developers
          </Link>
          ,{" "}
          <Link href="/hire/data-engineers" className="text-primary-500 hover:underline">
            data engineers
          </Link>
          ,{" "}
          <Link href="/hire/product-engineers" className="text-primary-500 hover:underline">
            product engineers
          </Link>
          ,{" "}
          <Link href="/hire/frontend-engineers" className="text-primary-500 hover:underline">
            frontend
          </Link>{" "}
          and{" "}
          <Link href="/hire/backend-engineers" className="text-primary-500 hover:underline">
            backend engineers
          </Link>
          , plus specialised roles like{" "}
          <Link href="/hire/vibe-code-engineer" className="text-primary-500 hover:underline">
            vibe-code optimisation
          </Link>{" "}
          and{" "}
          <Link href="/hire/cloud-cost-engineer" className="text-primary-500 hover:underline">
            cloud cost optimisation
          </Link>
          . Every engagement starts with a{" "}
          <Link href="/how-we-work" className="text-primary-500 hover:underline">
            one-week paid trial
          </Link>{" "}
          and includes a{" "}
          <Link href="/context-continuity-guarantee" className="text-primary-500 hover:underline">
            Context Continuity Guarantee
          </Link>
          . Headquartered in DLF Cyber City, Gurugram with a tech office in Noida.
        </p>
      </div>
    </article>
  );
}
