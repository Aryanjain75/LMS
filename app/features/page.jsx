"use client";
import React from "react";
import {
  ArrowDownward as ArrowDownwardIcon,
  MenuBook as MenuBookIcon,
  PlayCircle as PlayCircleIcon,
  Functions as FunctionsIcon,
  SyncAlt as SyncAltIcon,
  Terminal as TerminalIcon,
  Memory as MemoryIcon,
  Shield as ShieldIcon,
  AltRoute as AltRouteIcon,
  AccountTree as AccountTreeIcon,
} from "@mui/icons-material";

export default function FeaturesPage() {
  return (
      <main className="w-full pt-16 bg-[#f7f9fb] min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full py-12 bg-[#ffffff] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#545f73_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="flex flex-col items-start max-w-3xl">
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#e6e8ea] rounded mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded bg-[#006c49]"></span>
                  <span className="text-xs font-semibold tracking-wider text-[#45474c] uppercase">
                    PLATFORM CAPABILITIES &amp; INFRASTRUCTURE
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#091426] tracking-tight mb-4 leading-[1.1]">
                  Every tool needed to teach, verify, and master frontier AI engineering.
                </h1>
                <p className="text-lg text-[#45474c] leading-relaxed mb-8">
                  From book-first authoring to hardware-isolated sandboxes and cryptographic security logs. Purpose-built infrastructure for universities, labs, and enterprise AI cohorts.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    className="px-6 py-2 bg-[#091426] text-[#ffffff] text-sm font-medium rounded shadow-sm hover:bg-[#1e293b] transition-colors inline-flex items-center gap-1"
                    href="#compute-sandboxes"
                  >
                    Explore Hardware Specs
                    <ArrowDownwardIcon className="!text-[18px]" />
                  </a>
                  <a
                    className="px-6 py-2 bg-[#f2f4f6] text-[#091426] text-sm font-medium rounded hover:bg-[#eceef0] transition-colors inline-flex items-center gap-1"
                    href="#comparison-matrix"
                  >
                    Infrastructure Comparison
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 01: Pedagogy Engine */}
          <section className="w-full py-12 bg-[#f7f9fb]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center gap-1 text-[#006c49] text-xs uppercase tracking-widest mb-1">
                    <span className="font-bold">01 // PEDAGOGY ENGINE</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426] mb-4">
                    Book-First Field Manual Engine
                  </h2>
                  <p className="text-base text-[#45474c] mb-6 leading-relaxed">
                    Replace fragmented slides and unstructured video streams with high-density, linear manuals. Content compiles into responsive, accessible documentation nodes with sub-second navigation and synchronized multi-modal anchors.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm flex items-start gap-4">
                      <div className="p-1 bg-[#e6e8ea] rounded text-[#091426] shrink-0">
                        <MenuBookIcon className="!text-[20px]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          Markdown-First Curriculum with Lexical Telemetry
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Authored in GitHub-flavored Markdown with automated cognitive-load weighting, precise reading-time heuristics, and automated token-cost indices.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm flex items-start gap-4">
                      <div className="p-1 bg-[#e6e8ea] rounded text-[#091426] shrink-0">
                        <PlayCircleIcon className="!text-[20px]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          Companion Video Anchor Sync (YouTube / HLS)
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Dynamic sidecar playback tracks code annotations in real-time. Pausing code walkthroughs automatically scrub lecture recordings to the exact line-by-line explanation timestamp.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm flex items-start gap-4">
                      <div className="p-1 bg-[#e6e8ea] rounded text-[#091426] shrink-0">
                        <FunctionsIcon className="!text-[20px]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          KaTeX Engine &amp; Dynamic Architecture Graphs
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Client-side compiled LaTeX mathematical expressions for Transformer attention mechanics, backpropagation calculus, and vector quantization equations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-[#1e293b] text-[#ffffff] rounded shadow-xl overflow-hidden">
                    <div className="px-4 py-1 bg-[#091426] flex items-center justify-between text-[#8590a6]">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-[#ba1a1a] inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffddb8] inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#6ffbbe] inline-block"></span>
                        <span className="ml-2 text-xs font-mono">
                          manuals/core_attention.md
                        </span>
                      </div>
                      <span className="text-xs text-[#4edea3] font-mono">
                        LATEX // KATEX ACTIVE
                      </span>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-4">
                      <div className="bg-[#091426]/50 p-2 rounded">
                        <div className="text-[#8590a6] text-[12px] uppercase mb-1 font-semibold tracking-wider font-sans">
                          Inline Formulation Rendering
                        </div>
                        <div className="text-[#6ffbbe] font-sans text-xl tracking-wide">
  {"$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$"}
</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[12px] text-[#8590a6]">
                          <span># TENSOR DIMENSIONS</span>
                          <span className="text-[#ffddb8]">CUDA BATCH VERIFIED</span>
                        </div>
                        <pre className="text-[13px] text-[#ffffff] bg-[#091426]/40 p-4 rounded overflow-x-auto leading-relaxed">
                          <code>
                            <span className="text-[#6ffbbe]">def</span>{" "}
                            <span className="text-[#d8e3fb]">scaled_dot_product</span>(q, k, v, mask=None):
                            {"\n"}    d_k = q.size(-1)
                            {"\n"}    scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k)
                            {"\n"}    <span className="text-[#6ffbbe]">if</span> mask <span className="text-[#6ffbbe]">is not</span> None:
                            {"\n"}        scores = scores.masked_fill(mask == 0, -1e9)
                            {"\n"}    <span className="text-[#6ffbbe]">return</span> torch.matmul(torch.softmax(scores, dim=-1), v)
                          </code>
                        </pre>
                      </div>
                      <div className="p-2 bg-[#091426]/80 rounded flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[12px]">
                          <SyncAltIcon className="text-[#4edea3] !text-[18px]" />
                          <span className="text-[#ffffff]">
                            Sync Target: Session 04 // Minute 18:22
                          </span>
                        </div>
                        <span className="px-1 py-0.5 rounded bg-[#006c49]/30 text-[#4edea3] text-xs font-bold">
                          LOCKED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: Compute Infrastructure */}
          <section className="w-full py-12 bg-[#ffffff]" id="compute-sandboxes">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="bg-[#f2f4f6] rounded p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cd]/30">
                      <div className="flex items-center gap-1 text-sm text-[#091426] font-semibold">
                        <TerminalIcon className="text-[#006c49] !text-[20px]" />
                        <span>gVisor Hardware Isolation Cluster</span>
                      </div>
                      <span className="px-1 py-0.5 rounded bg-[#6cf8bb] text-[#00714d] text-xs font-bold">
                        SECURE RING 0
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-4 bg-[#ffffff] rounded">
                        <span className="text-xs text-[#45474c] block mb-1">
                          GPU ALLOCATION
                        </span>
                        <span className="text-xl text-[#091426] font-bold">
                          1x H100 SXM5
                        </span>
                        <span className="text-[#006c49] text-xs block mt-1">
                          80GB HBM3 VRAM
                        </span>
                      </div>
                      <div className="p-4 bg-[#ffffff] rounded">
                        <span className="text-xs text-[#45474c] block mb-1">
                          ISOLATION HYPERVISOR
                        </span>
                        <span className="text-xl text-[#091426] font-bold">
                          gVisor runsc
                        </span>
                        <span className="text-[#45474c] text-xs block mt-1">
                          Rootless Container Guard
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-[#091426] font-mono text-[13px]">
                          VRAM Allocation (Llama-3-70B-Instruct)
                        </span>
                        <span className="text-[#006c49] font-mono text-[13px]">
                          68.4 / 80.0 GB
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#e6e8ea] rounded overflow-hidden">
                        <div className="h-full bg-[#006c49] w-[85%] rounded"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-[#091426] text-[#ffffff] rounded font-mono text-[12px] space-y-1">
                      <div className="text-[#8590a6] tracking-wider font-sans uppercase font-bold text-[10px]">
                        Session Resource Quota Telemetry
                      </div>
                      <div className="flex justify-between">
                        <span>[IDLE TIMEOUT]</span>
                        <span className="text-[#6ffbbe]">15:00 min remaining</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[RAM CEILING]</span>
                        <span className="text-[#6ffbbe]">64GB Hard Cap Enforced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[STUDENT BUDGET SPEND]</span>
                        <span className="text-[#6ffbbe]">$3.42 / $25.00 allocated</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
                  <div className="flex items-center gap-1 text-[#006c49] text-xs uppercase tracking-widest mb-1">
                    <span className="font-bold">02 // COMPUTE INFRASTRUCTURE</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426] mb-4">
                    Hardware-Accelerated Compute Sandboxes
                  </h2>
                  <p className="text-base text-[#45474c] mb-6 leading-relaxed">
                    Give every student dedicated, raw GPU compute without security risks or runaway expenses. High-speed container sandboxes spin up within 850 milliseconds with pre-cached model weights and defensive kernel isolation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-[#eceef0] flex items-center justify-center text-[#091426] shrink-0 font-bold font-mono text-sm">
                        A
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          vLLM Direct Engine Passthrough
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Low-latency vLLM serving setups allow learners to query, fine-tune, and inspect activation states on models ranging from Mistral-7B to Llama-3-70B in real-time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-[#eceef0] flex items-center justify-center text-[#091426] shrink-0 font-bold font-mono text-sm">
                        B
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          gVisor Sandbox Boundary Layer
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Zero host-kernel access. Code executions occur inside application kernels written in Go, fully intercepting and defending against privilege escalation and breakout attacks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-[#eceef0] flex items-center justify-center text-[#091426] shrink-0 font-bold font-mono text-sm">
                        C
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#091426] mb-1">
                          Granular Financial Governance
                        </h4>
                        <p className="text-sm text-[#45474c]">
                          Set rigid budget constraints per student, cohort, or assignment. Automated idle sleep shuts down dormant GPU slices down to the precise millisecond.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 03: Code Verification */}
          <section className="w-full py-12 bg-[#f7f9fb]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center gap-1 text-[#006c49] text-xs uppercase tracking-widest mb-1">
                    <span className="font-bold">03 // CODE VERIFICATION</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426] mb-4">
                    Deterministic PyTest Autograder
                  </h2>
                  <p className="text-base text-[#45474c] mb-6 leading-relaxed">
                    Validate production AI logic beyond trivial input-output checking. Our execution engine inspects memory allocations, validates gradients, and runs adversarial penetration tests against student implementations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm">
                      <MemoryIcon className="text-[#006c49] !text-[24px] mb-1" />
                      <h4 className="text-[15px] font-semibold text-[#091426] mb-1">
                        Memory Leak Tracing
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Real-time Tracemalloc and Valgrind hooks verify tensors are deregistered from GPU memory pools during eval loops.
                      </p>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm">
                      <ShieldIcon className="text-[#006c49] !text-[24px] mb-1" />
                      <h4 className="text-[15px] font-semibold text-[#091426] mb-1">
                        Zero-Context-Leak Fuzzing
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Automated red-teaming sends prompt injections and boundary probes to verify API secrets remain shielded inside tool calls.
                      </p>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm">
                      <AltRouteIcon className="text-[#006c49] !text-[24px] mb-1" />
                      <h4 className="text-[15px] font-semibold text-[#091426] mb-1">
                        Strict Branch Coverage
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Measures 100% path execution, flagging unhandled CUDA Out-Of-Memory edge cases and malformed embedding batches.
                      </p>
                    </div>
                    <div className="p-4 bg-[#ffffff] rounded shadow-sm">
                      <AccountTreeIcon className="text-[#006c49] !text-[24px] mb-1" />
                      <h4 className="text-[15px] font-semibold text-[#091426] mb-1">
                        AST Redundancy Check
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Abstract Syntax Tree inspection enforces strict 15% similarity thresholds to prevent direct codebase plagiarization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-[#ffffff] rounded p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cd]/20">
                      <div className="flex items-center gap-1 font-mono text-[13px] font-semibold text-[#091426]">
                        <span className="text-[#006c49] font-bold">RUN:</span>{" "}
                        test_lora_fine_tuning.py
                      </div>
                      <span className="px-1 py-0.5 rounded bg-[#6ffbbe] text-[#002113] font-mono text-xs font-bold">
                        100% PASSED
                      </span>
                    </div>
                    <div className="space-y-1 font-mono text-[12px]">
                      <div className="p-1 bg-[#eceef0] flex items-center justify-between rounded">
                        <span className="text-[#191c1e]">
                          test_gradient_checkpointing_hook
                        </span>
                        <span className="text-[#006c49] font-bold">PASSED [0.18s]</span>
                      </div>
                      <div className="p-1 bg-[#eceef0] flex items-center justify-between rounded">
                        <span className="text-[#191c1e]">
                          test_vram_leakage_tracemalloc
                        </span>
                        <span className="text-[#006c49] font-bold">
                          PASSED (0.00KB LEAK)
                        </span>
                      </div>
                      <div className="p-1 bg-[#eceef0] flex items-center justify-between rounded">
                        <span className="text-[#191c1e]">
                          test_prompt_injection_guard
                        </span>
                        <span className="text-[#006c49] font-bold">
                          PASSED (20/20 FUZZ VECTORS)
                        </span>
                      </div>
                      <div className="p-1 bg-[#eceef0] flex items-center justify-between rounded">
                        <span className="text-[#191c1e]">
                          test_ast_entropy_divergence
                        </span>
                        <span className="text-[#006c49] font-bold">
                          PASSED (8.2% SIMILARITY)
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#e6e8ea] rounded space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#091426]">EVALUATION RUBRIC SCORE</span>
                        <span className="text-[#006c49]">40.0 / 40.0 PTS</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#ffffff] rounded overflow-hidden">
                        <div className="h-full bg-[#006c49] w-full rounded"></div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#45474c] font-mono">
                        <span>Deterministic Seed: 0x7F4A2C</span>
                        <span>Telemetry Hash: sha256:d8b2e1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 04: Institutional Control */}
          <section className="w-full py-12 bg-[#ffffff]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="bg-[#091426] text-[#ffffff] rounded p-6 shadow-lg space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#6ffbbe] uppercase tracking-wider">
                        SSO &amp; IDENTITY FEDERATION
                      </span>
                      <span className="px-1 py-0.5 bg-[#e0e3e5]/20 rounded text-[11px] font-mono">
                        SAML 2.0 / SCIM 2.1
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-[#1e293b] rounded text-center">
                        <span className="block text-sm font-bold text-[#ffffff]">
                          Okta
                        </span>
                        <span className="text-[10px] text-[#6ffbbe]">CONNECTED</span>
                      </div>
                      <div className="p-2 bg-[#1e293b] rounded text-center">
                        <span className="block text-sm font-bold text-[#ffffff]">
                          Entra ID
                        </span>
                        <span className="text-[10px] text-[#6ffbbe]">SYNCHRONIZED</span>
                      </div>
                      <div className="p-2 bg-[#1e293b] rounded text-center">
                        <span className="block text-sm font-bold text-[#ffffff]">
                          Workspace
                        </span>
                        <span className="text-[10px] text-[#6ffbbe]">
                          DIRECTORY ACTIVE
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="text-[12px] font-mono text-[#8590a6] uppercase tracking-wider">
                        Merkle Cryptographic Ledger Entry
                      </div>
                      <div className="p-2 bg-[#1e293b] rounded font-mono text-[11px] space-y-1 text-[#ffffff]">
                        <div>[RFC 5424] 2025-05-18T14:22:01.082Z enterprise-node-04</div>
                        <div className="text-[#ffb95f]">
                          AUDIT_EVENT: COHORT_PREREQUISITE_OVERRIDE_REJECTED
                        </div>
                        <div className="text-[#8590a6] truncate">
                          HASH_CHAIN: 3a7f804918d2...ce917f3001ad28b8
                        </div>
                        <div className="text-[#6ffbbe]">
                          MERKLE_ROOT: VALIDATED BY DECENTRALIZED WITNESS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
                  <div className="flex items-center gap-1 text-[#006c49] text-xs uppercase tracking-widest mb-1">
                    <span className="font-bold">04 // INSTITUTIONAL CONTROL</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426] mb-4">
                    Multi-Tenant Institutional Governance
                  </h2>
                  <p className="text-base text-[#45474c] mb-6 leading-relaxed">
                    Tailored for cross-departmental universities and heavily audited Fortune 50 enterprise engineering organizations. Isolate cohorts, configure mandatory prerequisite pathways, and inspect tamper-proof operational logs.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#f2f4f6] rounded">
                      <h4 className="text-base font-semibold text-[#091426] mb-1">
                        Enterprise SSO &amp; Automated Provisioning
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Instant zero-touch user provisioning and revoking through SCIM v2.1. Sync departmental groupings directly with Okta, Ping, or Azure Active Directory.
                      </p>
                    </div>
                    <div className="p-4 bg-[#f2f4f6] rounded">
                      <h4 className="text-base font-semibold text-[#091426] mb-1">
                        Cohort Prerequisite Enforcement Gating
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Lock advanced tracks behind foundational requirements. Auto-verify completion of preliminary units (e.g., CS224N or Distributed Systems) before opening GPU budgets.
                      </p>
                    </div>
                    <div className="p-4 bg-[#f2f4f6] rounded">
                      <h4 className="text-base font-semibold text-[#091426] mb-1">
                        Syslog RFC 5424 Immutable Ledger
                      </h4>
                      <p className="text-sm text-[#45474c]">
                        Every compute spin-up, terminal command, code submission, and grade modification generates a cryptographic receipt stored in an immutable ledger structure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Comparison Matrix */}
          <section className="w-full py-12 bg-[#f7f9fb]" id="comparison-matrix">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[#006c49] text-xs uppercase tracking-widest font-bold block mb-1">
                  TECHNICAL BENCHMARK
                </span>
                <h2 className="text-3xl font-bold text-[#091426] tracking-tight mb-2">
                  Architecture Comparison Matrix
                </h2>
                <p className="text-base text-[#45474c]">
                  Why engineering leaders choose specialized AI orchestration over traditional legacy learning platforms.
                </p>
              </div>
              <div className="overflow-x-auto shadow-sm rounded bg-[#ffffff]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#e6e8ea] text-[#091426]">
                      <th className="py-4 px-6 font-semibold">Capability Area</th>
                      <th className="py-4 px-6 font-semibold bg-[#091426] text-[#ffffff]">
                        AIGODMODE AI Learning
                      </th>
                      <th className="py-4 px-6 font-semibold">
                        Generic Enterprise LMS
                      </th>
                      <th className="py-4 px-6 font-semibold">
                        Video-Only Course Platforms
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c5c6cd]/20">
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        Core Pedagogy Focus
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Book-first interactive manuals with LaTeX math &amp; dynamic code trees
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Slide presentations, PDFs, and SCORM packages
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Passive linear video streams without execution contexts
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        GPU Execution Sandboxes
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Native H100/T4 pass-through via gVisor &amp; vLLM inference instances
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        None (External redirect to local setups)
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        None (Student pays for personal cloud accounts)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        Code Verification Rigor
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Automated PyTest, AST similarity checks &amp; memory leak tracing
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Multiple-choice quizzes only
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Zero verification (Passive self-reporting)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        Security &amp; Red-Teaming
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Context-leak fuzzing, prompt injection tests &amp; rootless runtime
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">Not applicable</td>
                      <td className="py-4 px-6 text-[#45474c]">Not applicable</td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        Enterprise Governance
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Merkle-verified Syslog RFC 5424 ledger with SCIM directory sync
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Basic CSV download and SAML 2.0
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Consumer logins, no directory automation
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#091426]">
                        Budget Guardrails
                      </td>
                      <td className="py-4 px-6 font-medium text-[#006c49] bg-[#091426]/5">
                        Hard dollar caps per cohort, idle auto-suspend by the second
                      </td>
                      <td className="py-4 px-6 text-[#45474c]">Seat licensing only</td>
                      <td className="py-4 px-6 text-[#45474c]">
                        Subscription fees with zero cloud compute limits
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 bg-[#ffffff] border-t border-[#c5c6cd]/30">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="p-8 md:p-12 rounded bg-[#091426] text-[#ffffff] flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#1e293b] rounded-full opacity-30 pointer-events-none blur-3xl"></div>
                <div className="relative z-10 max-w-xl">
                  <span className="text-[#6ffbbe] text-xs uppercase tracking-widest font-semibold block mb-1">
                    GET STARTED TODAY
                  </span>
                  <h2 className="text-3xl font-bold text-[#ffffff] tracking-tight mb-2">
                    Ready to elevate your AI curriculum?
                  </h2>
                  <p className="text-base text-[#8590a6] leading-relaxed">
                    Deploy production-grade sandboxes for your teams or university cohort within hours. Integrate your existing SSO providers effortlessly.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    className="w-full sm:w-auto px-6 py-2 rounded bg-[#ffffff] text-[#091426] text-sm font-semibold hover:bg-[#f7f9fb] transition-colors text-center shadow-sm"
                    href="#"
                  >
                    View Field Manuals
                  </a>
                  <a
                    className="w-full sm:w-auto px-6 py-2 rounded bg-[#006c49] text-[#ffffff] text-sm font-semibold hover:bg-[#00714d] transition-colors text-center shadow-sm"
                    href="#"
                  >
                    Schedule Architecture Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

  );
}