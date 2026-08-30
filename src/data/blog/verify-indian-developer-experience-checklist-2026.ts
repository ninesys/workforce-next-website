import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "verify-indian-developer-experience-checklist-2026",
  image: "/images/blog/verify-indian-developer-experience-checklist-2026.webp",
  title: "How to Verify an Indian Developer's Real Experience: A 2026 Buyer's Checklist",
  excerpt:
    "A resume from an Indian developer rarely lies, but it almost always smooths the truth. This is the checklist a procurement-savvy VP of Engineering should run before signing any contract: documents, employment history, GitHub forensics, code samples, and reference calls. With concrete red flags for each step.",
  tldr:
    "Indian developer resumes rarely lie outright, but they smooth the truth: rounded tenures, inflated titles, stacks barely touched. Verify in five passes: documents (UAN, Form 16, payslips), employment history via UAN, GitHub forensics, code-sample interpretation, and India-aware reference calls. Each step has concrete red flags that should make you walk.",
  body: `<p>A resume from an Indian developer rarely outright lies, but it almost always smooths the truth. Tenure dates get rounded. Job titles get inflated. Tech stacks listed include things the candidate touched once. None of this is unique to India, but the screening processes most foreign buyers run are not built to catch it. This post is the verification checklist that is.</p>

<p>It covers documents to ask for and what they actually prove, how to verify employment history without trusting the resume, how to read a GitHub profile for honest signal, how to interpret a take-home or trial code sample, and how to run reference calls with India-based references that yield real information instead of polite nothing. Each step includes what good looks like and what should make you walk away.</p>

<h2>Why does verification matter more for India hiring?</h2>
<p>Two structural reasons that are not about trust, just about pattern.</p>

<p><strong>Higher resume inflation in the Indian tech labour market.</strong> The supply of engineers is large and the competition for foreign-paying roles is fierce. The marginal candidate has a real incentive to round a 2.5-year tenure to "3 years" and to claim familiarity with frameworks they have only read about. This is true across every market with the same supply dynamics; it is just particularly visible in India because the pool is the world's largest.</p>

<p><strong>Distance makes informal verification harder.</strong> A US buyer hiring a US engineer can usually rely on shared networks, alumni signal, and a same-city reference. None of those work across continents. The only signal you have is what the candidate sends you, plus what you can independently verify. So the verification process has to do more work.</p>

<p>Buyers who skip this end up with the body-shop pattern we have <a href="/why-teams-stay/">written a whole landing page about</a>: the senior architect on the pitch deck quietly becomes a junior on day one. Verification is the cheapest insurance against that.</p>

<h2>What documents should you ask for and what do they actually prove?</h2>
<p>Five document types. None of them are invasive when handled correctly. All five together build a high-confidence picture.</p>

<ol>
  <li><strong>Resume in PDF, plus a LinkedIn URL.</strong> Mismatches between the two are the cheapest signal you can buy. Tenure dates that differ, job titles that are different, employers that appear on one and not the other are all flags worth probing.</li>
  <li><strong>Form 16 from the last two financial years.</strong> Form 16 is an annual TDS certificate issued by every Indian employer to every salaried employee. It proves the employer existed, the candidate worked there, and roughly what they were paid. A candidate who cannot produce Form 16 for a recent claimed employer is either not asking nicely (Form 16 is the candidate's right to receive) or is misrepresenting the employment.</li>
  <li><strong>Last three payslips from the most recent employer.</strong> Confirms current employment and rough compensation. Less load-bearing than Form 16 but useful for the most recent role where Form 16 has not yet been issued.</li>
  <li><strong>Education certificate (degree + transcript).</strong> Verify the degree is from an institution recognised by the <a href="https://www.ugc.gov.in/" target="_blank" rel="noopener noreferrer">University Grants Commission</a> (UGC). India has a long tail of unaccredited institutions whose degrees are not equivalent to a real engineering degree.</li>
  <li><strong>Government photo ID (PAN or Aadhaar).</strong> For background verification only, never as a public document. Confirms the person is who they say they are. Reputable vendors handle this with care under the <a href="https://www.meity.gov.in/" target="_blank" rel="noopener noreferrer">DPDP Act</a>.</li>
</ol>

<p>A candidate who refuses to provide any of these is making a statement about their seriousness. Reputable engineers who want long-term roles understand the request and provide it. The cost of asking is low; the cost of skipping is high.</p>

<h2>How do you verify the engineer's actual employment history?</h2>
<p>This is the verification step that catches most resume inflation. Three independent methods, ranked by reliability.</p>

<p><strong>1. EPFO UAN history (most reliable).</strong> Every salaried Indian employee has a Universal Account Number (UAN) issued by the <a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer">Employees' Provident Fund Organisation</a>. The UAN tracks every employer the candidate has worked for and the dates of contribution. Asking for the UAN passbook (which the candidate can download themselves from the EPFO portal) gives you a tamper-proof employment history. Cross-check this against the resume.</p>
<p><strong>What good looks like:</strong> resume employers and dates match the UAN passbook within a month or two. Tenure rounding of a few weeks is normal.</p>
<p><strong>Red flags:</strong> employers on the resume that do not appear in the UAN passbook (most likely fabricated), tenure differences over six months, gaps in the UAN history that the candidate cannot explain.</p>

<p><strong>2. MCA entity verification.</strong> Indian companies are registered with the <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Corporate Affairs</a>. You can search for any claimed past employer to verify the company actually exists, its registration status, and roughly when it was incorporated. A "company" that does not appear in MCA records is either too small to be a real employer (a freelance arrangement marketed as a job) or a fabrication.</p>
<p><strong>What good looks like:</strong> every employer on the resume is a registered entity in MCA records, with incorporation dates that pre-date the candidate's claimed tenure.</p>
<p><strong>Red flags:</strong> employers that do not appear in MCA records, companies incorporated after the candidate's claimed start date, status of "Strike Off" for an employer the candidate claims they currently work at.</p>

<p><strong>3. Direct reference calls (most context, lowest reliability).</strong> Call the candidate's named manager from a recent employer. The conversation should be 15 minutes, structured around three questions: what did the candidate actually own, how did they push back when something was wrong, and would you hire them again. India-based references can be polite to a fault; the third question is the one that breaks the politeness wall.</p>

<h2>How do you read an Indian developer's GitHub for honest signal?</h2>
<p>GitHub is the highest-signal artefact most candidates have. Most foreign buyers look at the wrong things.</p>

<p><strong>Look at:</strong></p>
<ol>
  <li><strong>Contribution graph density and consistency over the last 24 months.</strong> Real engineers contribute regularly, in clumps that align with work and life rhythms. A pattern of one large burst of contributions in the month before the job hunt started is a known signal of profile-padding.</li>
  <li><strong>The actual repos they own (not forked).</strong> Open one or two and read the code. Not for production-ready quality, just for whether the structure, naming, commit messages, and pull request descriptions look like work the candidate could actually have done. A candidate's owned repos should match the level they claim.</li>
  <li><strong>Commit messages and pull request descriptions.</strong> A senior engineer writes clear commit messages and reviews their own PRs in writing. A profile full of one-word commits ("update", "fix", "wip") is a signal of inexperience or carelessness.</li>
  <li><strong>Issue and discussion participation.</strong> Engineers who genuinely use open source tend to file issues, ask questions, and participate in discussions. A profile with only commits and no conversation is either very early-career or very curated.</li>
</ol>

<p><strong>Do not over-weight:</strong></p>
<ol>
  <li>Total commit count (easily padded with daily one-line commits to a personal repo).</li>
  <li>Star count on owned repos (correlates more with marketing than engineering ability).</li>
  <li>Number of languages listed in the profile sidebar (GitHub auto-detects this from any file in any repo, regardless of skill).</li>
  <li>Recent fork-then-rename activity (a known pattern for inflating "owned" repo count).</li>
</ol>

<p><strong>Red flags:</strong> bursts of contribution activity timed to the job hunt, repos that are obviously forked then renamed without substantive changes, commit history that all happens at the same time of day every day for weeks (often a sign of automation, not real work).</p>

<h2>How do you interpret the code sample they submit?</h2>
<p>The code sample is where most verification processes either work or fail. Do it well and you catch most things; do it badly and you catch nothing.</p>

<p><strong>Use a real ticket from your backlog, not a contrived problem.</strong> Contrived problems test test-taking skill. Real tickets test engineering ability. If you cannot share a real ticket for IP reasons, share an anonymised version.</p>

<p><strong>Watch how they ask clarifying questions.</strong> A good senior engineer reads your spec, finds three things that are ambiguous, and asks. A weak senior engineer either asks nothing (and ships the wrong thing) or asks 30 questions before writing a line. Both are signals.</p>

<p><strong>Read the code, then read the postmortem.</strong> If your trial scope includes a postmortem (it should), read both. The code shows whether they can write Python or React. The postmortem shows whether they understood the problem, the trade-offs they made, and the things they would do differently.</p>

<p><strong>What good looks like:</strong> code that passes review at your normal bar, written in your house style, with clear PR description, sensible test coverage, and a postmortem that names the trade-offs honestly.</p>

<p><strong>Red flags:</strong> code that does not pass your normal review bar, comments and naming patterns that look like they were generated by a copilot tool with no editing, a postmortem that reads like marketing copy ("I delivered a robust scalable solution") instead of engineering writing ("I traded latency for memory because the dataset is small enough that memory is not the bottleneck").</p>

<p>This is also the screen where AI-tooling fluency shows. An AI-native engineer in 2026 will absolutely use Cursor or Claude Code on the trial; pretending otherwise would be naive. The signal is not "did they use AI" but "did they review what AI produced." The ones who shipped AI-output without editing it produce the same code as anyone else. The ones who edited and improved it produce noticeably better code.</p>

<h2>How should you run reference calls with India-based references?</h2>
<p>Reference calls are the most underused verification step because most buyers do them badly.</p>

<p><strong>Ask for managers, not peers.</strong> A peer reference is a polite reference. A manager reference is a useful reference. The manager has compared this engineer to other engineers and can give you signal that a peer cannot.</p>

<p><strong>Schedule the call. Do not just call.</strong> Indian work culture treats unscheduled calls as rude. A scheduled 15-minute call gets thoughtful answers; an unscheduled call gets defensive ones.</p>

<p><strong>Three questions to ask:</strong></p>
<ol>
  <li>What did this engineer actually own end to end? (Tests whether the resume's "led" claims hold.)</li>
  <li>Tell me about a time they pushed back on you or on a product decision. What happened? (Tests for the "yes-person" risk.)</li>
  <li>If they reapplied to you tomorrow, would you hire them, and at what level? (The polite-wall-breaker. Most reference-checkers ask "would you hire them again" without the "and at what level" follow-on. The follow-on is what gets the honest answer.)</li>
</ol>

<p><strong>What good looks like:</strong> the manager has specific stories ready, names trade-offs the candidate handled well, and is direct about whether they would rehire.</p>

<p><strong>Red flags:</strong> generic praise without specifics ("they were great", "everyone loved them"), inability to recall any pushback or disagreement (means they did not have any context on the candidate, OR the candidate was a yes-person), unwillingness to commit to "would you rehire."</p>

<h2>What red flags should make you walk away?</h2>
<p>Some signals are bad enough that no amount of charisma in the interview should override them. The fast-no list.</p>

<ol>
  <li>Cannot or will not produce Form 16 for a claimed past employer.</li>
  <li>UAN history does not show a claimed employer (and the candidate cannot explain why).</li>
  <li>Past employer does not appear in MCA records as a registered entity.</li>
  <li>GitHub contribution graph shows a clear burst of profile-padding right before the job search started.</li>
  <li>Code sample fails your normal review bar AND the postmortem cannot explain why.</li>
  <li>Manager reference call refuses to commit to "would you rehire."</li>
  <li>The candidate's described responsibility level does not match the seniority of the team they were on (a "tech lead" at a 5-person team is not the same as a "tech lead" at a 200-person team).</li>
  <li>Resume and LinkedIn diverge on tenure or role title for the same employer, and the candidate cannot explain it cleanly.</li>
</ol>

<p>Any one of these on its own is a yellow flag. Two or more together is a no.</p>

<h2>What is a realistic verification checklist that will not slow your pipeline?</h2>
<p>Most buyers either do too much (slowing the pipeline so the best candidates get scooped by faster vendors) or too little (signing the wrong person). The right balance, in the order to run it.</p>

<table>
  <thead>
    <tr><th>Step</th><th>When</th><th>Time required</th><th>What it catches</th></tr>
  </thead>
  <tbody>
    <tr><td>Resume vs LinkedIn cross-check</td><td>Before first call</td><td>10 min</td><td>Inflation, tenure smoothing</td></tr>
    <tr><td>GitHub profile read</td><td>Before first call</td><td>15 min</td><td>Skill mismatch, profile padding</td></tr>
    <tr><td>First interview (technical)</td><td>Day 1</td><td>60 min</td><td>Communication, problem-solving</td></tr>
    <tr><td>Code sample / paid trial</td><td>Day 2 to 5</td><td>One real ticket, your team grades</td><td>Actual engineering ability under your standards</td></tr>
    <tr><td>UAN + MCA verification</td><td>Day 3 to 5</td><td>30 min</td><td>Fabricated employers, tenure lies</td></tr>
    <tr><td>Form 16 + payslip review</td><td>Day 4 to 5</td><td>10 min</td><td>Compensation lies, fake employers</td></tr>
    <tr><td>Manager reference call</td><td>Day 4 to 6</td><td>15 min</td><td>Yes-person risk, ownership reality</td></tr>
    <tr><td>Background verification (vendor)</td><td>Pre-start</td><td>Vendor handles, 5 to 7 days</td><td>Criminal, address, credential authenticity</td></tr>
  </tbody>
</table>

<p>End to end, this fits inside a 10-day pipeline. Vendors who run a 1-week paid trial (we do, so do most well-run firms) collapse most of the verification into the trial week itself. The trial replaces a take-home, a code sample, and a partial reference signal in one shot.</p>

<h2>What questions should you ask the vendor about their verification process?</h2>
<p>If you are going through a managed vendor (us, Andela, Turing, Toptal), the verification work above gets folded into the vendor's process. Five questions to ask the vendor.</p>

<ol>
  <li>Do you verify UAN history before placing an engineer with a client?</li>
  <li>Do you run MCA verification on the engineer's claimed past employers?</li>
  <li>Do you run formal background verification (criminal, address, credential), and which vendor do you use?</li>
  <li>Can I see the engineer's GitHub, last three employers, and references before the first interview?</li>
  <li>If the engineer turns out to have misrepresented something post-placement, what is your replacement and refund policy?</li>
</ol>

<p>A vendor who answers all five cleanly has thought about this. A vendor who hedges on any of them is hoping you will not look closely. We answer all five in writing on the first call, and the engineer's full verification report is part of the shortlist package, not an extra you have to ask for.</p>

<h2>What to do next</h2>
<p>If you are about to interview an Indian developer (through any vendor or independently), this checklist is the one to print. If you want us to apply it to a role you are about to open, <a href="/contact">book a 15-minute call</a> and we will run the checklist on three of our pre-screened engineers for the role you have in mind. You see the verification reports before you decide whether to interview anyone.</p>

<p>Related reading: <a href="/why-teams-stay/">how we structurally avoid the body-shop staffing pattern</a> covers why the verification matters in the first place. <a href="/blog/staff-augmentation-vs-eor-vs-india-entity-2026">Staff augmentation vs EOR vs your own India entity</a> covers the legal model decision. <a href="/blog/senior-indian-developer-salary-2026">What to pay a senior Indian developer in 2026</a> covers the pricing decision. Together those three plus this verification post cover most of what a procurement-savvy CTO needs before signing.</p>`,
  category: "hiring",
  categoryLabel: "Hiring & Teams",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-04-28",
  readTime: 13,
  metaDescription:
    "How to verify an Indian developer's real experience in 2026. Documents to ask for, UAN and MCA verification, GitHub forensics, code sample interpretation, reference calls, and the red flags that should make you walk away.",
  ogTitle: "How to Verify an Indian Developer's Real Experience: 2026 Buyer's Checklist",
  ogDescription:
    "Resume rarely lies, but almost always smooths. The verification checklist a procurement-savvy VP of Engineering should run before signing.",
  keywords: [
    "verify Indian developer experience",
    "background check Indian software engineer",
    "EPFO UAN verification employment",
    "MCA verification past employer India",
    "Form 16 Indian developer verification",
    "GitHub profile verification developer",
    "Indian developer reference check",
    "verify Indian software engineer resume",
    "developer background verification India",
  ],
  faq: [
    {
      q: "Is it OK to ask an Indian developer for a payslip from a previous employer?",
      a: "Yes, this is standard practice in the Indian tech labour market. A reputable engineer applying for a senior role expects to provide last three payslips and Form 16 from the most recent employers. The framing matters: ask as a verification step (because the role is senior and the trust threshold is high), not as a discovery step (which can feel intrusive). Vendors who handle background verification on your behalf do this routinely.",
    },
    {
      q: "How do I verify a degree from an Indian university?",
      a: "Three steps. First, check the university is recognised by the University Grants Commission (UGC) on the UGC website. Second, ask for the original degree certificate and transcript (the vendor handling background verification can authenticate it through the National Academic Depository or directly with the institution). Third, for institutions you are unfamiliar with, search the institution name plus 'UGC fake university list' to ensure it is not on the periodically published list of unaccredited entities.",
    },
    {
      q: "What is EPFO UAN and how does it help verify employment history?",
      a: "UAN (Universal Account Number) is a unique identifier assigned to every salaried Indian employee by the Employees' Provident Fund Organisation. It tracks every employer that has made PF contributions on behalf of the employee. The UAN passbook (which the candidate can download themselves from the EPFO portal) is a tamper-proof record of employer names and dates of employment. Cross-checking the UAN passbook against the resume catches most fabricated employment.",
    },
    {
      q: "What GitHub patterns indicate fake or padded activity?",
      a: "Three patterns. First, a sudden burst of green-square activity in the 30 to 60 days before the job hunt started, when the prior 18 months were quiet. Second, owned repos that are clearly forked and lightly renamed without substantive changes. Third, commits all happening at the same time of day every day for weeks (often automated, not real work). Total commit count and language list in the sidebar are easily padded and should not carry weight.",
    },
    {
      q: "How many references should I call for an Indian developer hire?",
      a: "Two manager references is the minimum and often enough. One peer reference is optional. The quality of the call matters more than the count. Schedule the call (do not just dial), keep it to 15 minutes, ask three questions: what did the engineer actually own, when did they push back on you, and would you rehire and at what level. The 'and at what level' follow-on is the polite-wall-breaker that gets honest answers from India-based references.",
    },
    {
      q: "Should I run a separate background verification or trust the vendor's check?",
      a: "If the vendor runs formal background verification through a recognised agency (HireRight, Sterling, Cisive, Authbridge in India) and shares the report with you, that is usually sufficient for senior individual contributors. For roles with elevated risk (financial systems, security-sensitive code, compliance-regulated industries), running an independent check through your own preferred vendor adds a layer. Most reputable staff aug vendors will cooperate fully with a buyer-side verification.",
    },
    {
      q: "What if the candidate refuses to provide Form 16 or UAN?",
      a: "Treat it as a strong signal, not necessarily a hard no. Sometimes the refusal is benign (the candidate has not asked the previous employer for Form 16 yet, which is a slight inconvenience but not a refusal of evidence). Sometimes it is a real flag (the candidate is misrepresenting the employment). Press once. If the response is still vague, walk away. The cost of asking is low; the cost of hiring an unverified senior is high.",
    },
    {
      q: "How long does a complete verification take and does it slow the hiring pipeline?",
      a: "End to end, a thorough verification fits inside a 7 to 10 day pipeline if you sequence it in parallel with interviewing rather than after. Resume and GitHub review takes under 30 minutes total. UAN and MCA cross-checks take 30 minutes. Form 16 review takes 10 minutes. Manager reference calls take 15 minutes each. Background verification through a vendor runs in parallel and takes 5 to 7 days. The 1-week paid trial collapses most of this into the trial week itself.",
    },
  ],
};

export default post;
