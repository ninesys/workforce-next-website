export default function SethAIIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-labelledby="sethai-illustration-title sethai-illustration-desc"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <title id="sethai-illustration-title">
        SethAI screening developer CVs
      </title>
      <desc id="sethai-illustration-desc">
        A laptop screen analysing a queue of developer CV documents, marking one
        as a match and discarding two as rejected.
      </desc>

      <defs>
        <linearGradient id="sethai-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="sethai-match-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <filter id="sethai-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.18" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Match glow halo behind the matched CV */}
      <ellipse
        cx="500"
        cy="200"
        rx="110"
        ry="140"
        fill="url(#sethai-match-glow)"
      />

      {/* Incoming CV stack (left) */}
      <g filter="url(#sethai-soft-shadow)">
        {/* CV 3 (back) */}
        <g transform="translate(28 90) rotate(-8)">
          <rect width="92" height="118" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="14" y="18" width="44" height="6" rx="2" fill="#cbd5e1" />
          <rect x="14" y="32" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="40" width="58" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="48" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="62" width="50" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="70" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="78" width="40" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="92" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="100" width="48" height="3" rx="1.5" fill="#e2e8f0" />
        </g>
        {/* CV 2 (middle) */}
        <g transform="translate(54 80) rotate(-2)">
          <rect width="92" height="118" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="14" y="18" width="44" height="6" rx="2" fill="#cbd5e1" />
          <rect x="14" y="32" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="40" width="58" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="48" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="62" width="50" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="70" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="78" width="40" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="92" width="64" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="14" y="100" width="48" height="3" rx="1.5" fill="#e2e8f0" />
        </g>
        {/* CV 1 (front, leading edge into laptop) */}
        <g transform="translate(82 70) rotate(4)">
          <rect width="92" height="118" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="14" y="18" width="44" height="6" rx="2" fill="#94a3b8" />
          <rect x="14" y="32" width="64" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="40" width="58" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="48" width="64" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="62" width="50" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="70" width="64" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="78" width="40" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="92" width="64" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="14" y="100" width="48" height="3" rx="1.5" fill="#cbd5e1" />
        </g>
      </g>

      {/* Conveyor flow arrow from CV stack to laptop */}
      <g stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M180 145 L218 145" strokeDasharray="4 4">
          <animate
            attributeName="stroke-dashoffset"
            from="8"
            to="0"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M213 140 L221 145 L213 150" />
      </g>

      {/* Laptop */}
      <g filter="url(#sethai-soft-shadow)">
        {/* Screen */}
        <rect
          x="220"
          y="80"
          width="220"
          height="155"
          rx="10"
          fill="url(#sethai-screen)"
          stroke="#0f172a"
          strokeWidth="2"
        />
        {/* Screen inner padding */}
        <rect
          x="232"
          y="92"
          width="196"
          height="131"
          rx="4"
          fill="#0b1220"
        />

        {/* SethAI header bar */}
        <g>
          <circle cx="244" cy="104" r="3" fill="#3b82f6" />
          <text
            x="252"
            y="108"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#e0f2fe"
          >
            SethAI · screening
          </text>
          <rect x="392" y="100" width="28" height="9" rx="4" fill="#1e3a8a" />
          <circle cx="397" cy="104.5" r="1.5" fill="#60a5fa">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="403"
            y="107"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="6"
            fontWeight="600"
            fill="#bfdbfe"
          >
            LIVE
          </text>
        </g>

        {/* Candidate row 1 — passing */}
        <g transform="translate(244 120)">
          <rect width="172" height="22" rx="4" fill="#0f1f3a" />
          <circle cx="11" cy="11" r="6" fill="#1e40af" />
          <text x="22" y="14" fontFamily="ui-sans-serif" fontSize="7" fill="#dbeafe">
            Candidate A · Senior · LangChain
          </text>
          <rect x="124" y="6" width="42" height="10" rx="3" fill="#10b981" />
          <text x="129" y="13" fontFamily="ui-sans-serif" fontSize="6.5" fontWeight="700" fill="#ecfdf5">
            MATCH 92
          </text>
        </g>

        {/* Candidate row 2 — being processed */}
        <g transform="translate(244 148)">
          <rect width="172" height="22" rx="4" fill="#0f1f3a" />
          <circle cx="11" cy="11" r="6" fill="#1e3a8a" />
          <text x="22" y="14" fontFamily="ui-sans-serif" fontSize="7" fill="#dbeafe">
            Candidate B · Mid · RAG
          </text>
          <g transform="translate(132 7)">
            <rect width="34" height="9" rx="2" fill="#1e293b" />
            <rect width="22" height="9" rx="2" fill="#3b82f6">
              <animate
                attributeName="width"
                values="6;30;6"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </g>

        {/* Candidate row 3 — rejected */}
        <g transform="translate(244 176)" opacity="0.55">
          <rect width="172" height="22" rx="4" fill="#0f1f3a" />
          <circle cx="11" cy="11" r="6" fill="#7f1d1d" />
          <text x="22" y="14" fontFamily="ui-sans-serif" fontSize="7" fill="#fecaca">
            Candidate C · Jr · keyword-only
          </text>
          <g transform="translate(140 6)">
            <circle cx="5" cy="5" r="5" fill="#ef4444" />
            <path
              d="M3 3 L7 7 M7 3 L3 7"
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* Bottom mini stats */}
        <g transform="translate(244 206)">
          <text fontFamily="ui-sans-serif" fontSize="6" fill="#64748b">
            Screened
          </text>
          <text x="0" y="10" fontFamily="ui-sans-serif" fontSize="9" fontWeight="700" fill="#e0f2fe">
            312
          </text>
          <text x="62" y="0" fontFamily="ui-sans-serif" fontSize="6" fill="#64748b">
            Shortlist
          </text>
          <text x="62" y="10" fontFamily="ui-sans-serif" fontSize="9" fontWeight="700" fill="#34d399">
            7
          </text>
          <text x="118" y="0" fontFamily="ui-sans-serif" fontSize="6" fill="#64748b">
            Avg score
          </text>
          <text x="118" y="10" fontFamily="ui-sans-serif" fontSize="9" fontWeight="700" fill="#60a5fa">
            88
          </text>
        </g>
      </g>

      {/* Laptop base */}
      <path
        d="M205 235 L455 235 L470 248 L190 248 Z"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <rect x="305" y="237" width="50" height="3" rx="1.5" fill="#94a3b8" />

      {/* Output flow arrow from laptop to matched CV */}
      <g stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M442 145 L478 145" strokeDasharray="4 4">
          <animate
            attributeName="stroke-dashoffset"
            from="8"
            to="0"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M473 140 L481 145 L473 150" />
      </g>

      {/* Matched CV (right) */}
      <g filter="url(#sethai-soft-shadow)">
        <g transform="translate(484 70)">
          <rect width="106" height="158" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
          <rect x="14" y="18" width="52" height="6" rx="2" fill="#0f172a" />
          <rect x="14" y="30" width="42" height="3" rx="1.5" fill="#94a3b8" />

          {/* Match badge */}
          <g transform="translate(64 8)">
            <rect width="34" height="14" rx="7" fill="#10b981" />
            <path
              d="M8 7 L11 10 L17 4"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="20" y="10" fontFamily="ui-sans-serif" fontSize="6.5" fontWeight="700" fill="#ecfdf5">
              92
            </text>
          </g>

          {/* Animated qualification checklist */}
          <g transform="translate(12 46)">
            {[
              { label: "Skillset match", offset: 0 },
              { label: "Similar projects", offset: 0.6 },
              { label: "Availability", offset: 1.2 },
              { label: "Lifestyle fit", offset: 1.8 },
            ].map((item, i) => (
              <g key={item.label} transform={`translate(0 ${i * 24})`} opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;1;0"
                  keyTimes={`0;${(0.08 + item.offset / 5).toFixed(3)};${(0.16 + item.offset / 5).toFixed(3)};0.86;0.94;1`}
                  dur="5s"
                  repeatCount="indefinite"
                />
                <circle cx="8" cy="8" r="7" fill="#10b981" />
                <path
                  d="M4.5 8 L7 10.5 L11.5 6"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="20"
                  y="11"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontSize="7"
                  fontWeight="600"
                  fill="#0f172a"
                >
                  {item.label}
                </text>
              </g>
            ))}
          </g>
        </g>
      </g>

      {/* Rejected CVs (bottom, falling) */}
      <g opacity="0.5" filter="url(#sethai-soft-shadow)">
        <g transform="translate(258 290) rotate(-15)">
          <rect width="64" height="84" rx="5" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" />
          <rect x="10" y="12" width="30" height="4" rx="1.5" fill="#fca5a5" />
          <rect x="10" y="22" width="44" height="2.5" rx="1.25" fill="#fee2e2" />
          <rect x="10" y="28" width="38" height="2.5" rx="1.25" fill="#fee2e2" />
          <rect x="10" y="34" width="44" height="2.5" rx="1.25" fill="#fee2e2" />
          <line x1="6" y1="6" x2="58" y2="78" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(346 308) rotate(12)">
          <rect width="60" height="80" rx="5" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" />
          <rect x="10" y="12" width="28" height="4" rx="1.5" fill="#fca5a5" />
          <rect x="10" y="22" width="40" height="2.5" rx="1.25" fill="#fee2e2" />
          <rect x="10" y="28" width="34" height="2.5" rx="1.25" fill="#fee2e2" />
          <line x1="6" y1="6" x2="54" y2="74" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
