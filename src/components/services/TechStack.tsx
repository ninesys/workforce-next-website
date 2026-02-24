import SectionHeading from "@/components/ui/SectionHeading";

interface TechStackProps {
  technologies: string[];
}

function TechLogo({ name }: { name: string }) {
  const logos: Record<string, React.ReactNode> = {
    // AI Agents
    LangChain: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="14" height="14" rx="2" stroke="#1a56db" strokeWidth="2" fill="#dbeafe" />
        <rect x="22" y="8" width="14" height="14" rx="2" stroke="#1a56db" strokeWidth="2" fill="#dbeafe" />
        <rect x="13" y="20" width="14" height="14" rx="2" stroke="#1a56db" strokeWidth="2" fill="#93c5fd" />
        <path d="M18 15L22 15" stroke="#1a56db" strokeWidth="2" />
        <path d="M11 22L20 22" stroke="#1a56db" strokeWidth="2" />
        <path d="M29 22L27 27" stroke="#1a56db" strokeWidth="2" />
      </svg>
    ),
    AutoGen: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="#7c3aed" strokeWidth="2" fill="#ede9fe" />
        <path d="M12 25L17 15L22 22L27 12" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="15" r="2" fill="#7c3aed" />
        <circle cx="27" cy="12" r="2" fill="#7c3aed" />
      </svg>
    ),
    CrewAI: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="14" cy="14" r="5" stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" />
        <circle cx="26" cy="14" r="5" stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" />
        <circle cx="20" cy="26" r="5" stroke="#f59e0b" strokeWidth="2" fill="#fde68a" />
        <path d="M17 18L19 22" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M23 18L21 22" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M14 19L20 22" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
        <path d="M26 19L20 22" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    OpenAI: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6z" fill="#10a37f" opacity="0.12" />
        <path d="M28 17.5c.5-2.8-1.2-5.5-4-6.3-1.8-.5-3.7-.1-5.2 1L14 15.8c-1.5 1.1-2.3 2.9-2.1 4.7" stroke="#10a37f" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 22.5c-.5 2.8 1.2 5.5 4 6.3 1.8.5 3.7.1 5.2-1L26 24.2c1.5-1.1 2.3-2.9 2.1-4.7" stroke="#10a37f" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 16l8 4-8 4" stroke="#10a37f" strokeWidth="1.5" strokeLinejoin="round" fill="#10a37f" opacity="0.2" />
      </svg>
    ),
    "Azure AI": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M10 30L18 8h4l-4 10 8 12H10z" fill="#0078d4" opacity="0.8" />
        <path d="M22 8L30 30H16l2-4h8L20 12l2-4z" fill="#0078d4" opacity="0.5" />
        <path d="M18 8h4l-4 10" stroke="#0078d4" strokeWidth="0.5" />
      </svg>
    ),
    "AWS Bedrock": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6L34 14v12l-14 8L6 26V14L20 6z" fill="#ff9900" opacity="0.15" stroke="#ff9900" strokeWidth="1.5" />
        <path d="M20 6v28M6 14l14 8 14-8" stroke="#ff9900" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="4" fill="#ff9900" opacity="0.3" stroke="#ff9900" strokeWidth="1.5" />
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6c-5 0-7 2.5-7 5v3h8v1H11c-3 0-5 2.5-5 6s2 6 5 6h3v-4c0-2.5 2-5 5-5h8c2.5 0 4-2 4-4v-3c0-2.5-2.5-5-6-5h-5z" fill="#3776ab" />
        <path d="M20 34c5 0 7-2.5 7-5v-3h-8v-1h10c3 0 5-2.5 5-6s-2-6-5-6h-3v4c0 2.5-2 5-5 5h-8c-2.5 0-4 2-4 4v3c0 2.5 2.5 5 6 5h5z" fill="#ffd43b" />
        <circle cx="16" cy="11" r="1.5" fill="#fff" />
        <circle cx="24" cy="29" r="1.5" fill="#fff" />
      </svg>
    ),
    "Vector DBs": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <ellipse cx="20" cy="12" rx="12" ry="4" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M8 12v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M8 20v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" stroke="#6366f1" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="12" ry="4" fill="#6366f1" opacity="0.1" />
        <path d="M15 16l3 3 7-7" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // Automation
    n8n: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="14" width="10" height="10" rx="2" fill="#ea4b71" opacity="0.2" stroke="#ea4b71" strokeWidth="1.5" />
        <rect x="24" y="14" width="10" height="10" rx="2" fill="#ea4b71" opacity="0.2" stroke="#ea4b71" strokeWidth="1.5" />
        <path d="M16 19h8" stroke="#ea4b71" strokeWidth="2" strokeLinecap="round" />
        <circle cx="11" cy="19" r="2" fill="#ea4b71" />
        <circle cx="29" cy="19" r="2" fill="#ea4b71" />
        <rect x="15" y="26" width="10" height="10" rx="2" fill="#ea4b71" opacity="0.2" stroke="#ea4b71" strokeWidth="1.5" />
        <path d="M20 24v2" stroke="#ea4b71" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Power Automate": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 10h10l-4 10h10L14 34l4-12H8l4-12z" fill="#0066ff" opacity="0.2" />
        <path d="M8 10h10l-4 10h10L14 34l4-12H8l4-12z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    Camunda: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" fill="#fc5d0d" opacity="0.12" stroke="#fc5d0d" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="#fc5d0d" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="2" fill="#fc5d0d" />
        <path d="M20 14v-4M20 30v-4M14 20h-4M30 20h-4" stroke="#fc5d0d" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.8 15.8l-2.5-2.5M24.2 24.2l2.5 2.5M15.8 24.2l-2.5 2.5M24.2 15.8l2.5-2.5" stroke="#fc5d0d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Zapier: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" fill="#ff4a00" opacity="0.1" />
        <path d="M20 8v24M8 20h24M11 11l18 18M29 11L11 29" stroke="#ff4a00" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" fill="#fff" stroke="#ff4a00" strokeWidth="1.5" />
      </svg>
    ),
    Make: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" fill="#6d00cc" opacity="0.12" stroke="#6d00cc" strokeWidth="1.5" />
        <circle cx="13" cy="20" r="3" fill="#6d00cc" opacity="0.4" stroke="#6d00cc" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="#6d00cc" opacity="0.6" stroke="#6d00cc" strokeWidth="1" />
        <circle cx="27" cy="20" r="3" fill="#6d00cc" opacity="0.8" stroke="#6d00cc" strokeWidth="1" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6L34 14v12l-14 8L6 26V14L20 6z" fill="#339933" opacity="0.15" stroke="#339933" strokeWidth="1.5" />
        <text x="20" y="24" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    ),
    "REST APIs": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="28" height="20" rx="3" fill="#2563eb" opacity="0.1" stroke="#2563eb" strokeWidth="1.5" />
        <path d="M12 17h6M12 21h10M12 25h4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 16l3 4-3 4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // IoT
    "AWS IoT": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6L34 14v12l-14 8L6 26V14L20 6z" fill="#ff9900" opacity="0.15" stroke="#ff9900" strokeWidth="1.5" />
        <path d="M20 6v28M6 14l14 8 14-8" stroke="#ff9900" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="#ff9900" opacity="0.5" />
        <path d="M14 16l-2-2M26 16l2-2M14 24l-2 2M26 24l2 2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    "Azure IoT Hub": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M10 30L18 8h4l-4 10 8 12H10z" fill="#0078d4" opacity="0.6" />
        <path d="M22 8L30 30H16l2-4h8L20 12l2-4z" fill="#0078d4" opacity="0.35" />
        <circle cx="28" cy="12" r="4" fill="#0078d4" opacity="0.15" stroke="#0078d4" strokeWidth="1" />
        <circle cx="28" cy="12" r="1.5" fill="#0078d4" />
      </svg>
    ),
    MQTT: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" fill="#660066" opacity="0.1" />
        <circle cx="14" cy="16" r="4" fill="#660066" opacity="0.3" stroke="#660066" strokeWidth="1" />
        <circle cx="26" cy="16" r="4" fill="#660066" opacity="0.3" stroke="#660066" strokeWidth="1" />
        <circle cx="20" cy="26" r="4" fill="#660066" opacity="0.5" stroke="#660066" strokeWidth="1" />
        <path d="M16 19L19 23M24 19L21 23" stroke="#660066" strokeWidth="1.5" />
      </svg>
    ),
    LoRaWAN: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="28" r="3" fill="#009bdf" />
        <path d="M12 22a10 10 0 0116 0" stroke="#009bdf" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M8 18a16 16 0 0124 0" stroke="#009bdf" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M4 14a22 22 0 0132 0" stroke="#009bdf" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
      </svg>
    ),
    Kafka: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="22" cy="14" r="4" fill="#231f20" opacity="0.15" stroke="#231f20" strokeWidth="1.5" />
        <circle cx="22" cy="26" r="4" fill="#231f20" opacity="0.15" stroke="#231f20" strokeWidth="1.5" />
        <circle cx="12" cy="20" r="4" fill="#231f20" opacity="0.15" stroke="#231f20" strokeWidth="1.5" />
        <circle cx="30" cy="10" r="3" fill="#231f20" opacity="0.1" stroke="#231f20" strokeWidth="1" />
        <circle cx="30" cy="30" r="3" fill="#231f20" opacity="0.1" stroke="#231f20" strokeWidth="1" />
        <path d="M16 18l4-3M16 22l4 3M25 12l3-1M25 28l3 1" stroke="#231f20" strokeWidth="1.5" />
      </svg>
    ),
    TimescaleDB: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="28" height="24" rx="4" fill="#fdb515" opacity="0.15" stroke="#fdb515" strokeWidth="1.5" />
        <path d="M12 26V16l5 6 5-10 5 8" stroke="#fdb515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="27" cy="20" r="1.5" fill="#fdb515" />
      </svg>
    ),
    Grafana: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" fill="#f46800" opacity="0.1" stroke="#f46800" strokeWidth="1.5" />
        <rect x="11" y="22" width="4" height="8" rx="1" fill="#f46800" opacity="0.6" />
        <rect x="18" y="16" width="4" height="14" rx="1" fill="#f46800" opacity="0.8" />
        <rect x="25" y="12" width="4" height="18" rx="1" fill="#f46800" />
      </svg>
    ),
    Kubernetes: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4L35 13v14L20 36 5 27V13L20 4z" fill="#326ce5" opacity="0.12" stroke="#326ce5" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" fill="#326ce5" opacity="0.15" stroke="#326ce5" strokeWidth="1" />
        <path d="M20 14v-4M20 30v-4M26 17l3.5-2M10.5 25L14 23M26 23l3.5 2M10.5 15L14 17" stroke="#326ce5" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="#326ce5" />
      </svg>
    ),
  };

  return logos[name] || (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="6" width="28" height="28" rx="6" fill="#94a3b8" opacity="0.15" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="20" cy="18" r="4" fill="#94a3b8" opacity="0.3" />
      <rect x="14" y="24" width="12" height="2" rx="1" fill="#94a3b8" opacity="0.3" />
    </svg>
  );
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <section id="tech" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          title="Technology Stack"
          subtitle="We build on proven, industry-leading platforms and frameworks."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 max-w-3xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center justify-center gap-3 w-full h-32 bg-white border border-slate-200 rounded-xl hover:border-accent-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                <TechLogo name={tech} />
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-accent-600 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
