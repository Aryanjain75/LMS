"use client";
import React, { useState } from "react";

const tabs = {
  learner: {
    label: "01. Learner Reader View",
    eyebrow: "Distraction-Free Environment",
    title: "Cognitive flow state meets deep engineering documentation.",
    description:
      "Learners navigate interactive textbooks with real-time margin annotations, live symbol lookups, and one-click execution toggles right alongside mathematical proofs.",
    features: [
      {
        icon: "code_blocks",
        text: "Inline multi-language syntax with LSP autocomplete",
      },
      {
        icon: "timer",
        text: "Active recall checkpoints anchored to comprehension state",
      },
      {
        icon: "download",
        text: "Local CLI synchronization via `aigodmode sync`",
      },
    ],
    content: (
      <>
        <div className="flex items-center justify-between border-b border-slate-200/70 pb-2 text-xs text-slate-500">
          <span className="font-mono font-semibold text-[#091426]">
            CHAPTER 08: Speculative Decoding in LLMs
          </span>
          <span className="font-mono text-[#006c49]">Status: 85% passed</span>
        </div>

        <div className="space-y-2 py-4 text-[13px] leading-relaxed text-slate-500">
          <p>
            Speculative decoding bypasses autoregressive token latency by
            drafting candidate token sequences from an efficient small model (
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[#091426]">
              M_draft
            </code>
            ), then verifying in parallel using the primary target LLM (
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[#091426]">
              M_target
            </code>
            ).
          </p>

          <div className="rounded bg-slate-100 p-2 font-mono text-xs text-[#091426]">
            &gt; Acceptance criterion: verify_acceptance_rate(k=4, α=0.82) ==
            True
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200/70 pt-2">
          <span className="text-xs text-slate-500">
            Active GPU: 1x NVIDIA A10G (Reserved)
          </span>

          <button className="rounded bg-[#091426] px-4 py-1 text-xs font-medium text-white transition hover:bg-[#1e293b]">
            Commit Solution
          </button>
        </div>
      </>
    ),
  },

  faculty: {
    label: "02. Faculty Curriculum Wizard",
    eyebrow: "Curriculum Management",
    title: "Compose custom sandboxes and auto-assertions in minutes.",
    description:
      "Faculty configure complete lab environments using standard Dockerfiles, declare PyTest evaluation bounds, and view live cohort mastery matrices with anomaly detection for integrity.",
    features: [
      {
        icon: "publish",
        text: "GitOps sync: publish labs directly from university GitHub repos",
      },
      {
        icon: "analytics",
        text: "Fine-grained student error telemetry & stuckness indicators",
      },
      {
        icon: "quiz",
        text: "Dynamic variable randomization per student token",
      },
    ],
    content: (
      <>
        <div className="flex items-center justify-between border-b border-slate-200/70 pb-2 text-xs text-slate-500">
          <span className="font-mono font-semibold text-[#091426]">
            FACULTY CONSOLE • CS682: Deep RL
          </span>

          <span className="rounded bg-[#6cf8bb] px-2 py-0.5 font-mono text-[11px] text-[#00714d]">
            AUTOGRADER ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="rounded bg-slate-100 p-2 text-center">
            <span className="text-[11px] uppercase text-slate-500">
              Submissions
            </span>
            <p className="text-xl font-bold text-[#091426]">184 / 190</p>
          </div>

          <div className="rounded bg-slate-100 p-2 text-center">
            <span className="text-[11px] uppercase text-slate-500">
              Mean Test Latency
            </span>
            <p className="text-xl font-bold text-[#006c49]">0.68s</p>
          </div>

          <div className="rounded bg-slate-100 p-2 text-center">
            <span className="text-[11px] uppercase text-slate-500">
              Plagiarism Score
            </span>
            <p className="text-xl font-bold text-[#091426]">0.02% (Clean)</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200/70 pt-2">
          <span className="text-xs text-slate-500">
            Next Cohort Release: Monday 08:00 AM UTC
          </span>

          <button className="rounded bg-[#091426] px-4 py-1 text-xs font-medium text-white transition hover:bg-[#1e293b]">
            Export Gradebook (Canvas LMS)
          </button>
        </div>
      </>
    ),
  },

  enterprise: {
    label: "03. Governance Console",
    eyebrow: "Security & Policy Control",
    title: "Strict SOC2, SAML SSO, and token budget governance.",
    description:
      "Enterprise AI labs require rigorous isolation between departments. AIGODMODE enforces hard spending boundaries, zero training on student submissions, and automated security audit logs.",
    features: [
      {
        icon: "verified_user",
        text: "SOC2 Type II + ISO 27001 certified isolated infra",
      },
      {
        icon: "price_check",
        text: "Departmental cost allocations with automated hard cutoffs",
      },
      {
        icon: "security",
        text: "Zero customer data retention agreement for proprietary models",
      },
    ],
    content: (
      <>
        <div className="flex items-center justify-between border-b border-slate-200/70 pb-2 text-xs text-slate-500">
          <span className="font-mono font-semibold text-[#091426]">
            ENTERPRISE AUDIT • GLOBAL CLUSTERS
          </span>

          <span className="text-lg text-[#006c49]">◈</span>
        </div>

        <div className="space-y-2 py-4 font-mono text-xs">
          <div className="flex items-center justify-between rounded bg-slate-100 p-2">
            <span>Okta SAML 2.0 SCIM Integration</span>
            <span className="font-semibold text-[#006c49]">CONNECTED</span>
          </div>

          <div className="flex items-center justify-between rounded bg-slate-100 p-2">
            <span>Compute Budget (Current Month)</span>
            <span className="font-semibold text-[#091426]">
              $3,420 / $10,000 (34.2%)
            </span>
          </div>

          <div className="flex items-center justify-between rounded bg-slate-100 p-2">
            <span>Audit Event Feed Cryptographic Proof</span>
            <span className="font-semibold text-[#006c49]">
              SHA-256 VERIFIED
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200/70 pt-2">
          <span className="text-xs text-slate-500">
            SSO Policy: 2FA Hardware Keys Enforced
          </span>

          <button className="rounded bg-[#091426] px-4 py-1 text-xs font-medium text-white transition hover:bg-[#1e293b]">
            Audit Log Stream
          </button>
        </div>
      </>
    ),
  },
};

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    book: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2zm16 0a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2z" />
      </svg>
    ),

    terminal: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 7 5 5-5 5m7 0h7" />
      </svg>
    ),

    check: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5 9.5 17 19 7" />
      </svg>
    ),

    arrow: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </svg>
    ),
  };

  return icons[name] || <span className={className}>•</span>;
}

const pillars = [
  {
    number: "01",
    title: "Book-First Field Manuals",
    description:
      "Ditch video scrub-bars. Absorb deep, comprehensive technical prose formatted like O'Reilly monographs with formal theorem proofs and architectural schemas.",
    icon: "book",
    iconClass: "bg-[#d8e3fb] text-[#091426]",
    points: [
      "Structured RFC-compliant chapter specifications",
      "Offline-ready encrypted ePub / PDF companion metrics",
      "Micro-anchored 90-second code teardown clips",
    ],
    metric: "940+ Published Chapters",
  },
  {
    number: "02",
    title: "Isolated Ephemeral Sandboxes",
    description:
      "Every student gets their own isolated container booted within 350ms. Powered by Google gVisor and multi-GPU acceleration clusters without root hazards.",
    icon: "terminal",
    iconClass: "bg-[#6ffbbe]/40 text-[#006c49]",
    points: [
      "On-demand NVIDIA H100 and T4 tensor node pools",
      "Zero host network exposure & privilege boundary guards",
      "Strict campus token allocation & compute spend caps",
    ],
    metric: "< 400ms Spin-up SLA",
  },
  {
    number: "03",
    title: "Deterministic Autograding",
    description:
      "Grading based on automated PyTest test suites, typing enforcement, memory efficiency checks, and deterministic AST similarity parsing.",
    icon: "check",
    iconClass: "bg-[#091426] text-[#6ffbbe]",
    points: [
      "PyTest execution harness with sub-second feedback",
      "Valgrind-grade GPU memory leak detection",
      "mypy strict typing & semantic AST similarity tests",
    ],
    metric: "100% Deterministic CI",
  },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("learner");
  const active = tabs[activeTab];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Request submitted! An AI systems engineer will reach out within 2 hours."
    );
  };

  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f9fb] py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute right-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#d8e3fb]/40 blur-3xl" />
          <div className="absolute left-10 top-1/3 h-80 w-80 rounded-full bg-[#6ffbbe]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* LEFT */}
            <div className="flex flex-col items-start lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#091426] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#006c49]" />
                v3.8 Production Runtime • gVisor-Kernel Verified
              </div>

              <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-[#091426] md:text-7xl">
                The Engineering-Grade AI Learning Platform Built for Depth.
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-7 text-slate-500">
                Rigorous book-first field manuals, isolated gVisor compute
                sandboxes, deterministic PyTest grading, and campus-wide
                cohort governance. Engineered for top research institutions and
                pioneering enterprise labs.
              </p>

              <div className="mt-8 flex w-full flex-wrap items-center gap-4 sm:w-auto">
                <a
                  href="#manuals"
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-lg"
                >
                  Explore Field Manuals
                  <Icon name="arrow" className="h-4 w-4" />
                </a>

                <a
                  href="#institutional-demo"
                  className="inline-flex items-center justify-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-[#091426] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <span className="text-[#006c49]">◆</span>
                  Request Institutional Demo
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-300/60 pt-5 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg text-[#006c49]">✓</span>
                  Sub-second PyTest Evaluation
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-lg text-[#006c49]">◈</span>
                  H100 & T4 Multi-GPU Node Pools
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-lg text-[#006c49]">⬡</span>
                  Zero-Root Execution Slices
                </div>
              </div>
            </div>

            {/* RIGHT - INTERACTIVE WORKSPACE */}
            <div className="w-full lg:col-span-6">
              <div className="relative overflow-hidden rounded bg-white shadow-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between bg-slate-200 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <span className="ml-3 font-mono text-xs text-slate-500">
                      sandbox-prod-node://cluster-04-alpha [gVisor]
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded bg-[#6cf8bb] px-2 py-0.5 font-mono text-[11px] font-medium text-[#00714d]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#006c49]" />
                      KERNEL ISOLATED
                    </span>

                    <span className="text-slate-500">⚙</span>
                  </div>
                </div>

                {/* Workspace */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Manual */}
                  <div className="flex flex-col justify-between bg-slate-100/60 p-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between border-b border-slate-300/50 pb-1">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#006c49]">
                          MANUAL 04.2 • PROTOCOL SPEC
                        </span>

                        <Icon name="book" className="h-4 w-4 text-slate-500" />
                      </div>

                      <h3 className="text-[17px] font-bold leading-snug text-[#091426]">
                        Model Context Protocol: Agent Server Lifecycle
                      </h3>

                      <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                        MCP requires bidirectional JSON-RPC pipes over
                        stdin/stdout. The handshake must negotiate client
                        capabilities, initialize resource roots, and reject
                        unauthenticated tools prior to state machine
                        transitions.
                      </p>

                      <div className="mt-4 rounded bg-white p-2 shadow-sm">
                        <div className="mb-1 flex items-center justify-between font-mono text-[11px] text-slate-500">
                          <span>Invariant Rule §11.4:</span>
                          <span className="font-semibold text-[#006c49]">
                            Strict Typing Required
                          </span>
                        </div>

                        <p className="text-xs leading-tight text-slate-600">
                          Implement{" "}
                          <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[11px] text-[#091426]">
                            handle_mcp_handshake()
                          </code>{" "}
                          matching Pydantic v2 schemas.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-300/40 pt-2 text-xs text-slate-500">
                      <span>Field Manual Progress</span>
                      <span className="font-mono font-semibold text-[#091426]">
                        78% Complete
                      </span>
                    </div>
                  </div>

                  {/* Python */}
                  <div className="flex flex-col justify-between bg-[#091426] p-4 font-mono text-white">
                    <div>
                      <div className="flex items-center justify-between pb-2 text-[11px]">
                        <span className="flex items-center gap-1 text-[#6ffbbe]">
                          <span>⌘</span>
                          test_mcp_runtime.py
                        </span>

                        <span className="text-[10px] uppercase tracking-wider text-slate-400">
                          Python 3.12.3
                        </span>
                      </div>

                      <div className="space-y-1 overflow-x-auto py-1 text-xs leading-relaxed">
                        <p>
                          <span className="text-[#6ffbbe]">import</span> pytest
                        </p>

                        <p>
                          <span className="text-[#6ffbbe]">from</span> mcp.server{" "}
                          <span className="text-[#6ffbbe]">import</span>{" "}
                          McpServer, ProtocolVersion
                        </p>

                        <p className="text-[#bcc7de]">
                          # Deterministic assertion node
                        </p>

                        <p>
                          <span className="text-[#6ffbbe]">def</span>{" "}
                          <span className="font-semibold text-[#d8e3fb]">
                            test_server_negotiation
                          </span>
                          ():
                        </p>

                        <p className="pl-3">
                          server = McpServer(version=ProtocolVersion.V1)
                        </p>

                        <p className="pl-3">
                          resp = server.handshake(caps=[
                          <span className="text-[#ffddb8]">&quot;tools&quot;</span>,{" "}
                          <span className="text-[#ffddb8]">&quot;prompts&quot;</span>])
                        </p>

                        <p className="pl-3 text-[#4edea3]">
                          <span className="text-[#6ffbbe]">assert</span> resp.status
                          == <span className="text-[#ffddb8]">&quot;ACCEPTED&quot;</span>
                        </p>

                        <p className="pl-3 text-[#4edea3]">
                          <span className="text-[#6ffbbe]">assert</span>{" "}
                          resp.session_id{" "}
                          <span className="text-[#6ffbbe]">is not None</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded bg-[#1e293b] p-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 font-semibold text-[#6ffbbe]">
                          ✓ PYTEST PASSED [3/3 tests]
                        </span>

                        <span className="font-mono text-[11px] text-[#bcc7de]">
                          42ms exec
                        </span>
                      </div>

                      <div className="mt-1.5 text-[11px] leading-tight text-slate-400">
                        • Memory bounds: 14.2 MB / 512 MB (Safe)
                        <br />
                        • AST similarity: 98.4% (Standard Model Compliance)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between bg-slate-200 px-4 py-2 text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#091426]">
                      <span className="h-2 w-2 rounded-full bg-[#006c49]" />
                      Ephemeral Cluster: Online
                    </span>

                    <span className="hidden text-slate-500/80 sm:inline">
                      Isolated Pod: worker-us-west-9
                    </span>
                  </div>

                  <button className="rounded bg-[#091426] px-2 py-0.5 text-[11px] text-white transition hover:bg-[#1e293b]">
                    Run Suite (⌘+Enter)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / PARTNERS */}
      <section className="w-full bg-slate-100 py-6 shadow-inner">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Adopted across leading research universities and enterprise AI
            centers
          </p>

          <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["⌂", "Stanford AI Lab"],
              ["⌘", "MIT CSAIL"],
              ["◈", "Vertex AI Labs"],
              ["◉", "BioGen AI Health"],
              ["✦", "Quantum Synthetic"],
            ].map(([icon, name]) => (
              <div
                key={name}
                className="flex items-center justify-center gap-2 rounded bg-white p-3 shadow-sm transition-shadow hover:shadow"
              >
                <span className="text-lg text-[#091426]">{icon}</span>
                <span className="text-[15px] font-bold tracking-tight text-[#091426]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="manuals" className="w-full bg-[#f7f9fb] py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="mb-8 max-w-3xl">
            <span className="rounded bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#006c49]">
              Engineering Architecture
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#091426] md:text-4xl">
              Designed for rigorous technical mastery, not passive completion
              badges.
            </h2>

            <p className="mt-2 text-base leading-6 text-slate-500">
              Every layer of the AIGODMODE infrastructure is built to emulate
              actual AI research lab conditions: deterministic testing,
              sandboxed kernel sandboxes, and textbook-density rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group flex flex-col justify-between rounded bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded ${pillar.iconClass}`}
                  >
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#006c49]">
                    Pillar {pillar.number}
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-[#091426]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-500">
                    {pillar.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-500">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-0.5 text-lg text-[#006c49]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <span className="font-mono font-medium text-[#091426]">
                    {pillar.metric}
                  </span>

                  <Icon
                    name="arrow"
                    className="h-5 w-5 text-[#091426] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL WORKFLOWS */}
      <section className="w-full bg-slate-100 py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="mb-8 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <span className="rounded bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#091426]">
                Operational Workflows
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#091426] md:text-4xl">
                Built for Students, Faculty, and Enterprise Sysadmins.
              </h2>
            </div>

            <p className="mt-3 max-w-md text-base leading-6 text-slate-500 md:mt-0">
              Switch views to inspect how each stakeholder orchestrates
              advanced LLM and reinforcement learning courses.
            </p>
          </div>

          {/* TABS */}
          <div className="mb-6 flex max-w-xl flex-wrap gap-2 rounded bg-slate-200 p-1.5">
            {Object.entries(tabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`rounded px-4 py-2 text-sm font-semibold transition-all ${
                  activeTab === key
                    ? "bg-[#091426] text-white shadow-sm"
                    : "bg-transparent text-slate-500 hover:text-[#091426]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ACTIVE TAB */}
          <div className="grid grid-cols-1 items-center gap-8 rounded bg-white p-6 shadow-md md:p-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase text-[#006c49]">
                {active.eyebrow}
              </span>

              <h3 className="mt-1 text-2xl font-bold text-[#091426]">
                {active.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {active.description}
              </p>

              <div className="mt-5 space-y-3">
                {active.features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center text-[#006c49]">
                      ✓
                    </span>
                    {feature.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded bg-slate-100 p-4 lg:col-span-7">
              <div className="rounded bg-white p-4 shadow-sm">
                {active.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY QUOTE */}
      <section className="w-full bg-[#f7f9fb] py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="relative overflow-hidden rounded bg-[#091426] p-8 text-white shadow-xl md:p-20">
            <div className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-[#006c49]/15 blur-2xl" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-start">
              <div className="mb-5 flex items-center gap-2">
                <span className="text-3xl text-[#6ffbbe]">“</span>

                <span className="font-mono text-xs uppercase tracking-widest text-[#6ffbbe]">
                  Faculty Evaluation Report
                </span>
              </div>

              <blockquote className="text-2xl font-medium leading-relaxed text-white md:text-3xl md:leading-[42px]">
                “Video tutorials created a catastrophic illusion of competence
                in our graduate students. AIGODMODE brought back rigorous,
                book-first engineering field manuals coupled with zero-trust
                PyTest execution. Our students now ship hardened,
                production-grade PyTorch and CUDA kernels before week six.”
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded bg-[#1e293b] text-lg font-bold">
                  EV
                </div>

                <div>
                  <div className="text-lg font-bold">Dr. Elena Vance</div>
                  <div className="text-sm text-slate-400">
                    Associate Professor of Computer Science • Stanford AI Lab
                    (CS345 Lead)
                  </div>
                </div>

                <div className="ml-auto hidden items-center gap-2 rounded bg-[#1e293b] px-4 py-2 font-mono text-xs text-slate-300 lg:flex">
                  <span className="h-2 w-2 rounded-full bg-[#6ffbbe]" />
                  Cohort Size: 340 Concurrent Researchers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="institutional-demo"
        className="w-full bg-slate-100 py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="rounded bg-white p-8 shadow-md md:p-16">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* LEFT */}
              <div className="lg:col-span-7">
                <span className="rounded bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#006c49]">
                  Institutional Onboarding
                </span>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#091426] md:text-4xl">
                  Ready to upgrade your enterprise or university AI
                  curriculum?
                </h2>

                <p className="mt-2 max-w-xl text-lg leading-7 text-slate-500">
                  Deploy isolated multi-GPU compute sandboxes and rigorous
                  book-first field manuals to your entire engineering cohort in
                  under 24 hours.
                </p>

                {/* STATS */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                  <div>
                    <p className="font-mono text-2xl font-bold text-[#091426]">
                      99.99%
                    </p>
                    <span className="text-sm text-slate-500">
                      Sandbox Execution Uptime
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-[#006c49]">
                      2.4M+
                    </p>
                    <span className="text-sm text-slate-500">
                      Cryptographic Audit Logs
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-[#091426]">
                      100%
                    </p>
                    <span className="text-sm text-slate-500">
                      Deterministic Autograding
                    </span>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="rounded bg-slate-100 p-6 shadow-inner lg:col-span-5">
                <h3 className="text-xl font-bold text-[#091426]">
                  Schedule an Infrastructure Walkthrough
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Speak directly with an AI systems architect. No sales
                  scripts.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#091426]">
                      Institutional Work Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="name@stanford.edu or name@corp.ai"
                      className="w-full rounded bg-white px-4 py-2.5 text-sm text-slate-700 outline-none shadow-sm focus:ring-1 focus:ring-[#091426]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#091426]">
                      Organization Type
                    </label>

                    <select className="w-full rounded bg-white px-4 py-2.5 text-sm text-slate-700 outline-none shadow-sm focus:ring-1 focus:ring-[#091426]">
                      <option>
                        Tier-1 Research University / AI Lab
                      </option>
                      <option>Enterprise AI / Frontier Lab</option>
                      <option>
                        Government / Defense Innovation Unit
                      </option>
                      <option>Independent Research Fellow</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded bg-[#091426] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1e293b]"
                    >
                      Book Campus Walkthrough
                    </button>
                  </div>

                  <p className="pt-1 text-center text-[11px] text-slate-500">
                    Zero spam policy • FERPA & SOC2 Type II Certified
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
