import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Computer Vision Developers from India",
  description:
    "Hire pre-vetted computer vision developers from India. Object detection, OCR, segmentation, edge inference, multi-modal LLMs, real-time video. SethAI-screened.",
  keywords: [
    "hire computer vision developers",
    "hire computer vision engineers India",
    "CV engineers India",
    "object detection developers",
    "OCR developers India",
    "edge AI computer vision",
    "video analytics developers",
    "multi-modal vision LLM",
    "computer vision staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/computer-vision-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Computer Vision Developers from India",
    description:
      "Pre-vetted CV engineers for detection, OCR, segmentation, edge, and multi-modal vision. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/computer-vision-developers/`,
  },
};

const skills = [
  "PyTorch",
  "OpenCV",
  "YOLOv8 / RT-DETR",
  "Segment Anything (SAM)",
  "Tesseract / PaddleOCR",
  "ONNX / TensorRT",
  "Edge Inference (Jetson, Coral)",
  "Multi-modal LLMs (GPT-4o, Claude)",
  "FFmpeg / GStreamer",
  "MMDetection / Detectron2",
  "Roboflow",
  "MLflow",
];

const whyPoints = [
  {
    title: "Computer vision specialists, not generic ML devs",
    description:
      "Our engineers ship production CV systems: training pipelines, model selection, edge deployment, real-time inference. They know YOLOv8 from RT-DETR and when each one wins.",
  },
  {
    title: "Production deployment fluency",
    description:
      "ONNX export, TensorRT optimization, edge inference on Jetson or Coral, GPU vs CPU tradeoffs, streaming video pipelines with FFmpeg or GStreamer. Real deployment, not Jupyter notebooks.",
  },
  {
    title: "Multi-modal-aware",
    description:
      "GPT-4o, Claude vision, and Gemini multi-modal now solve many vision tasks without custom models. Our engineers know when to use a multi-modal LLM, when to fine-tune a CV model, and when to combine both.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership and communication. You get CV engineers who own the system from data labeling through edge deployment, not researchers who hand off a model file.",
  },
];

const responsibilities = [
  "Designing CV pipelines: data collection, labeling strategy (Roboflow, Label Studio), augmentation, training, eval",
  "Training and fine-tuning detection models (YOLOv8, RT-DETR, DETR family), segmentation (SAM, Mask R-CNN), classification",
  "Building OCR pipelines with Tesseract, PaddleOCR, or cloud OCR APIs; multi-step extraction with layout-aware models",
  "Deploying models to edge devices (Jetson, Coral, Raspberry Pi) with TensorRT, ONNX Runtime, or TFLite optimization",
  "Building real-time video analytics with FFmpeg, GStreamer, OpenCV; multi-camera tracking, ROI processing",
  "Integrating multi-modal LLMs (GPT-4o, Claude, Gemini) for vision tasks where custom training is overkill",
  "Setting up MLOps for CV: dataset versioning (DVC), experiment tracking (MLflow, Weights & Biases), model registries",
  "Building eval pipelines: COCO-style metrics, custom domain metrics, A/B testing in production",
  "Optimizing inference: quantization (INT8), pruning, distillation, batching, GPU utilization",
  "Integrating CV systems into product backends (FastAPI, Node.js) with proper async, queueing, and observability",
];

const whenToHire = [
  {
    scenario: "Building a custom detection or segmentation model for your domain",
    recommendation: "Hire a computer vision specialist",
    reason:
      "Custom CV models need data labeling strategy, augmentation, training infra, eval design, and deployment optimization. A general ML engineer will spend months learning what a CV specialist already knows.",
  },
  {
    scenario: "Adding document understanding or OCR to your product",
    recommendation: "Hire a CV specialist with OCR experience",
    reason:
      "OCR at production quality needs layout-aware models, post-processing, language model integration, and handling messy inputs. Specialists deliver this. Generalists give you Tesseract with bad accuracy.",
  },
  {
    scenario: "Adding simple image-based features (basic classification, captions)",
    recommendation: "A multi-modal LLM via API may be enough",
    reason:
      "GPT-4o vision, Claude vision, and Gemini handle many basic vision tasks via API with no model training. Cheaper, faster, and good enough for many use cases. Specialists matter when the LLM fails your accuracy bar.",
  },
  {
    scenario: "Real-time video analytics at the edge (security cameras, industrial)",
    recommendation: "Hire a CV specialist with edge deployment experience",
    reason:
      "Edge inference needs model optimization, hardware-specific tuning, and integration with video pipelines. Few engineers have shipped this. We screen explicitly for edge experience.",
  },
];

const screeningSignals = [
  {
    signal: "Model selection judgment",
    detail:
      "Given a CV task, can the candidate choose between fine-tuned YOLO, RT-DETR, multi-modal LLM, or classic OpenCV? Strong CV engineers pick by accuracy, latency, and cost tradeoffs, not by familiarity.",
  },
  {
    signal: "Data pipeline discipline",
    detail:
      "Labeling strategy, train/val/test splits that prevent leakage, augmentation that helps, dataset versioning. We test whether they treat data as a first-class artifact or an afterthought.",
  },
  {
    signal: "Deployment and optimization",
    detail:
      "ONNX export, TensorRT, INT8 quantization, batch sizing, GPU memory management. We hand a model and watch them optimize for a target hardware budget.",
  },
  {
    signal: "Edge and real-time experience",
    detail:
      "Jetson, Coral, Raspberry Pi, mobile CoreML/NNAPI. FFmpeg/GStreamer pipelines. Multi-camera tracking. We screen separately when edge is the role.",
  },
  {
    signal: "Multi-modal LLM awareness",
    detail:
      "When to skip custom training entirely and use GPT-4o, Claude vision, or Gemini. When to combine. Cost and latency tradeoffs. Engineers who do not consider this default to over-engineering.",
  },
  {
    signal: "Production observability",
    detail:
      "Drift detection, accuracy regression monitoring, latency tracking, error analysis pipelines. We test whether they treat the model like production infrastructure.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior CV guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated CV team members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a CV product launch or domain-specific model build.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your CV use case, data, hardware target, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for CV depth, production experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test model selection, deployment, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a computer vision developer from India?",
    answer:
      "Mid-level CV developers from India cost USD 5,000 to 7,500 per month for full-time engagement. Senior engineers with production deployment, edge inference, or domain-specific model fine-tuning experience range from USD 7,000 to 11,000 per month. Pricing reflects specialist scarcity.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Should we train a custom model or use a multi-modal LLM?",
    answer:
      "Multi-modal LLMs (GPT-4o, Claude, Gemini) handle many basic vision tasks via API with no training and good accuracy. Custom models win when you need higher accuracy than the LLM provides, lower latency, lower cost at scale, on-device inference, or privacy-sensitive data. Our engineers help you scope.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your CV engineers deploy to edge devices?",
    answer:
      "Yes. Jetson, Coral, Raspberry Pi, NVIDIA Orin, mobile CoreML/NNAPI. TensorRT optimization, ONNX Runtime, TFLite, INT8 quantization. We screen specifically for edge engineers when the role demands.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Do you handle real-time video analytics?",
    answer:
      "Yes. FFmpeg and GStreamer pipelines, multi-camera tracking, ROI processing, real-time detection with model batching, recording and event triggers. Standard work for our CV specialists.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What kind of data labeling support do you provide?",
    answer:
      "Our engineers set up Roboflow, Label Studio, or CVAT workflows. We can recommend labeling-as-a-service partners (e.g., Scale, Labelbox) but do not run the labeling ops in-house. We design the labeling strategy, taxonomy, and quality assurance process.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your CV engineers integrate with our existing backend?",
    answer:
      "Yes. We integrate inference services into FastAPI, Node.js, or Java backends with proper async, queueing, batch processing, and observability. The model becomes a clean API surface, not a special-snowflake service.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your CV developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireComputerVisionDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Computer Vision Developers from India",
    "Hire pre-vetted computer vision developers from India. Detection, OCR, segmentation, edge inference, multi-modal. SethAI-screened.",
    `${siteMetadata.url}/hire/computer-vision-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Computer Vision Developers", url: `${siteMetadata.url}/hire/computer-vision-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE COMPUTER VISION DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Computer Vision Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted CV engineers who ship production vision systems.
            Detection, OCR, segmentation, edge inference, real-time video,
            and multi-modal LLMs. Screened by SethAI for depth and long-term
            fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Computer vision in 2026: specialists matter more, not less</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Multi-modal LLMs solved many basic vision tasks via API. That
              made some CV work disappear, and made the remaining work more
              specialist. Custom CV is still required for high-accuracy
              domains, edge inference, low-latency real-time pipelines, and
              cost-sensitive scale. The bar for a useful CV engineer in 2026
              is higher than it was in 2022.
            </p>
            <p>
              A computer vision engineer worth hiring picks pragmatically
              between LLM APIs and custom models, ships to edge devices
              when needed, optimizes inference for hardware budgets, and
              treats data as a first-class artifact. They are not academic
              researchers and they are not generic ML engineers with one
              detection model on their resume.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For broader AI staffing context, see our{" "}
              <a href="/blog/ai-enabled-remote-staffing-complete-guide-2026/" className="text-primary-600 hover:underline">AI-enabled remote staffing guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire computer vision developers from Workforce Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a computer vision developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire a CV developer through Workforce Next, here is the work they take ownership of:</p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Specialist or generalist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every vision task needs a custom CV specialist. Here is how we help customers decide.</p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div key={item.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">{item.scenario}</h3>
                <p className="text-sm font-bold text-primary-500 mb-3">{item.recommendation}</p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our CV engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.name} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col">
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">{model.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary-500">{model.hours}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{model.best}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">{model.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring computer vision developers</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire computer vision developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your CV product and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
