"use client";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SpeedIcon from "@mui/icons-material/Speed";
import DnsIcon from "@mui/icons-material/Dns";
import DatabaseIcon from "@mui/icons-material/Storage";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ShieldIcon from "@mui/icons-material/Shield";
import LockIcon from "@mui/icons-material/Lock";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How are GPU idle minutes prevented from racking up costs?",
      answer:
        "Every ephemeral node runs an internal telemetry daemon that tracks active socket connections, terminal inputs, and memory write ops. If inactive for more than 180 seconds, memory states are snapshotted to high-speed S3 block storage and the instance is released immediately. Reconnection restores the exact memory state in under 1.2 seconds.",
    },
    {
      question: "Can we bring our own cloud credits (AWS / GCP / Azure)?",
      answer:
        "Yes. Enterprise and Consortium tier subscribers can deploy our control plane directly into their existing AWS GovCloud, GCP, or Azure Virtual Networks. In this BYOC model, seat licenses remain standard while compute costs draw directly against your institutional cloud commitments.",
    },
    {
      question: "How does the PyTest autograder prevent student code tampering?",
      answer:
        "Student code executes inside disposable microVM sandboxes powered by AWS Firecracker. Tests run in a restricted unprivileged environment where syscalls are filtered via strict Seccomp profiles and network egress is blocked by default, making file system inspection or spoofing impossible.",
    },
    {
      question: "Are academic discounts available for nonprofit institutions?",
      answer:
        "Yes. Qualified 501(c)(3) entities and Title IV accredited institutions are entitled to an additional 25% compute discount grant upon domain validation. Simply submit your institutional .edu domain or non-profit registration documentation during trial checkout.",
    },
  ];

  return (
      <main className="w-full pt-16 bg-[#f7f9fb] min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          {/* Top Ambient Glow & Header Section */}
          <section className="relative w-full pt-12 pb-16 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#6cf8bb]/20 via-[#d8e3fb]/30 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="max-w-[1280px] mx-auto px-4 md:px-[40px] text-center flex flex-col items-center">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded bg-[#e6e8ea] text-[#091426] text-[12px] font-semibold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#006c49]" />
                FLEXIBLE LICENSING &amp; COMPUTE TIERS
              </div>
              {/* Main Headline */}
              <h1 className="text-[48px] leading-[56px] -letter-spacing-[0.02em] font-bold text-[#091426] max-w-4xl tracking-tight mb-4">
                Predictable pricing with zero unexpected GPU overages.
              </h1>
              {/* Subtitle */}
              <p className="text-[18px] leading-[28px] text-[#45474c] max-w-2xl mb-10 leading-relaxed">
                Transparent seat licenses with configurable ephemeral compute sandboxes. Billed monthly or annually with accredited academic discounts.
              </p>
              {/* Billing Cycle Switcher */}
              <div className="inline-flex items-center p-1.5 rounded bg-[#e6e8ea] shadow-inner">
                <button
                  className={`px-5 py-2 rounded text-[14px] transition-all duration-200 ${
                    !isAnnual
                      ? "bg-white text-[#091426] font-semibold shadow-sm"
                      : "text-[#45474c] hover:text-[#091426]"
                  }`}
                  onClick={() => setIsAnnual(false)}
                  type="button"
                >
                  Monthly Billing
                </button>
                <button
                  className={`px-5 py-2 rounded text-[14px] transition-all duration-200 flex items-center gap-2 ${
                    isAnnual
                      ? "bg-white text-[#091426] font-semibold shadow-sm"
                      : "text-[#45474c] hover:text-[#091426]"
                  }`}
                  onClick={() => setIsAnnual(true)}
                  type="button"
                >
                  <span>Annual Billing</span>
                  <span className="px-2 py-0.5 rounded bg-[#6cf8bb] text-[#00714d] text-[11px] font-bold tracking-tight">
                    Save 20% + H100 Nodes
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Core Pricing Cards Section */}
          <section className="w-full pb-20">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[40px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Plan 1: Academic Lab */}
                <div className="flex flex-col justify-between p-8 rounded bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#45474c]">
                        Education &amp; Grants
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-medium">
                        EDU Verified
                      </span>
                    </div>
                    <h2 className="text-[24px] leading-[32px] font-semibold text-[#091426] mb-2">
                      Academic Lab / Dept
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#45474c] mb-6">
                      Designed for universities, high-throughput STEM labs, and accredited instructional tracks.
                    </p>
                    <div className="mb-6 pb-6 bg-[#f2f4f6] p-4 rounded">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[48px] font-bold text-[#091426] tracking-tight">
                          {isAnnual ? "$18" : "$22"}
                        </span>
                        <span className="text-[14px] text-[#45474c]">/ student / mo</span>
                      </div>
                      <p className="text-[12px] text-[#45474c] mt-1">
                        Billed annually, minimum 25 active seats
                      </p>
                    </div>
                    <ul className="space-y-3.5 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Unlimited book-first manuals &amp; dynamic syllabi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">PyTest autograder sandbox (50 runs/mo per seat)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Burst compute: 4 vCPU + shared T4 GPU instances</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Canvas, Blackboard &amp; Moodle LTI 1.3 integrations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">FERPA, COPPA &amp; GDPR compliance guarantee</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="w-full py-3 px-4 rounded bg-[#e6e8ea] hover:bg-[#d8dadc] text-[#091426] text-[14px] font-semibold text-center transition-colors"
                    href="#"
                  >
                    Start Academic Trial
                  </a>
                </div>

                {/* Plan 2: Enterprise AI & R&D */}
                <div className="relative flex flex-col justify-between p-8 rounded bg-white shadow-xl -mt-2 lg:-mt-4 mb-2 lg:mb-[-16px]">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#091426] rounded-t" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#006c49]">
                        Mission Critical
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#091426] text-white text-[11px] font-semibold tracking-wide uppercase">
                        Most Popular
                      </span>
                    </div>
                    <h2 className="text-[24px] leading-[32px] font-semibold text-[#091426] mb-2">
                      Enterprise AI &amp; R&amp;D
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#45474c] mb-6">
                      Autonomous orchestration for enterprise engineering hubs, frontier labs, and financial telemetry.
                    </p>
                    <div className="mb-6 pb-6 bg-[#e6e8ea] p-4 rounded">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[48px] font-bold text-[#091426] tracking-tight">
                          {isAnnual ? "$42,500" : "$3,950"}
                        </span>
                        <span className="text-[14px] text-[#45474c]">
                          {isAnnual ? "/ year" : "/ mo"}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#091426] font-medium mt-1">
                        Includes 2,000 base seats ($15/additional seat/yr)
                      </p>
                    </div>
                    <ul className="space-y-3.5 mb-8">
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e] font-medium">Dedicated vLLM GPU cluster (NVIDIA H100 SXM5)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Isolated VPC tenancy with hardware isolation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Okta &amp; Microsoft Entra ID SCIM v2.1 auto-sync</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Real-time Syslog RFC 5424 SIEM export telemetry</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">99.99% Availability SLA with 1h priority engineering desk</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <VerifiedIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Complete white-label branding &amp; custom domain CNAME</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="w-full py-3.5 px-4 rounded bg-[#091426] hover:bg-[#1e293b] text-white text-[14px] font-semibold text-center transition-all shadow-md"
                    href="#"
                  >
                    Request Enterprise Pilot
                  </a>
                </div>

                {/* Plan 3: Custom Consortium */}
                <div className="flex flex-col justify-between p-8 rounded bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#45474c]">
                        Multi-System
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-medium">
                        Bespoke SLA
                      </span>
                    </div>
                    <h2 className="text-[24px] leading-[32px] font-semibold text-[#091426] mb-2">
                      Custom Multi-Tenant Consortium
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#45474c] mb-6">
                      Designed for statewide university chains, sovereign cloud projects, and national alliances.
                    </p>
                    <div className="mb-6 pb-6 bg-[#f2f4f6] p-4 rounded">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[32px] leading-[40px] text-[#091426] tracking-tight font-bold">
                          Custom Architecture
                        </span>
                      </div>
                      <p className="text-[12px] text-[#45474c] mt-1">
                        Tailored compute matrices &amp; escrow provisions
                      </p>
                    </div>
                    <ul className="space-y-3.5 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Row-level cryptographic multi-tenancy (48+ sub-tenants)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Custom sovereign hosting: AWS / GCP / Azure GovCloud</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Unbounded auto-scaling GPU nodes with custom weights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Bespoke SIS &amp; LMS integration middleware</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="text-[#006c49] !text-[20px] shrink-0" />
                        <span className="text-[14px] text-[#191c1e]">Dedicated principal solutions architect &amp; weekly syncs</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="w-full py-3 px-4 rounded bg-[#e6e8ea] hover:bg-[#d8dadc] text-[#091426] text-[14px] font-semibold text-center transition-colors"
                    href="#"
                  >
                    Contact Solutions Lead
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Transparent Compute Table Section */}
          <section className="w-full py-16 bg-[#f2f4f6]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#006c49] text-[12px] font-semibold uppercase tracking-wider mb-2">
                    <MemoryIcon className="!text-[16px]" />
                    Infrastructure Precision
                  </div>
                  <h2 className="text-[32px] leading-[40px] text-[#091426] tracking-tight font-semibold">
                    Transparent Compute &amp; Ephemeral Surcharges
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[#45474c] mt-1">
                    Zero hidden markup. Compute nodes sleep automatically at 3 idle minutes with instantaneous state snapshots.
                  </p>
                </div>
                <div className="px-3 py-2 rounded bg-white shadow-sm flex items-center gap-3">
                  <VerifiedUserIcon className="text-[#006c49] !text-[18px]" />
                  <span className="text-[12px] text-[#191c1e]">Strict hard-cap spend protections enabled by default</span>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#e6e8ea] text-[#191c1e] text-[14px]">
                        <th className="py-4 px-6 font-semibold">Instance Profile</th>
                        <th className="py-4 px-6 font-semibold">Hardware Specs</th>
                        <th className="py-4 px-6 font-semibold">Target Workload</th>
                        <th className="py-4 px-6 font-semibold">Ephemeral Rate</th>
                        <th className="py-4 px-6 font-semibold text-right">Overage Defense</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eceef0] text-[14px] text-[#191c1e]">
                      <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-[#091426] flex items-center gap-2">
                          <DeveloperBoardIcon className="text-[#091426] !text-[18px]" />
                          NVIDIA H100 SXM5 80GB
                        </td>
                        <td className="py-4 px-6 text-[#45474c] font-mono text-[13px]">
                          80GB HBM3 • 3.35TB/s • FP8 Tensor
                        </td>
                        <td className="py-4 px-6">
                          Fine-tuning, Llama-3-70B batch inference, LoRA adapters
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#091426]">
                          $1.84 <span className="font-normal text-[#45474c]">/ hr</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-semibold">
                            Auto-hibernate (180s)
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-[#091426] flex items-center gap-2">
                          <SpeedIcon className="text-[#091426] !text-[18px]" />
                          NVIDIA T4 16GB
                        </td>
                        <td className="py-4 px-6 text-[#45474c] font-mono text-[13px]">
                          16GB GDDR6 • 65 TFLOPS FP16
                        </td>
                        <td className="py-4 px-6">
                          Model evaluation, small LLM runtime, PyTorch assignments
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#091426]">
                          $0.42 <span className="font-normal text-[#45474c]">/ hr</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-semibold">
                            Pre-warmed pools
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-[#091426] flex items-center gap-2">
                          <DnsIcon className="text-[#091426] !text-[18px]" />
                          Standard CPU Sandbox
                        </td>
                        <td className="py-4 px-6 text-[#45474c] font-mono text-[13px]">
                          4 vCPU • 16GB RAM • NVMe SSD
                        </td>
                        <td className="py-4 px-6">
                          PyTest code grading, algorithmic validation, bash terminals
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#091426]">
                          $0.08 <span className="font-normal text-[#45474c]">/ hr</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-semibold">
                            50 free/student/mo
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f4f6]/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-[#091426] flex items-center gap-2">
                          <DatabaseIcon className="text-[#091426] !text-[18px]" />
                          Vector DB &amp; Cache Bundle
                        </td>
                        <td className="py-4 px-6 text-[#45474c] font-mono text-[13px]">
                          Qdrant / Milvus dedicated index (10M vectors)
                        </td>
                        <td className="py-4 px-6">
                          Embeddings retrieval, RAG playground pipelines
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#091426]">
                          $0.02 <span className="font-normal text-[#45474c]">/ 1k queries</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="px-2 py-0.5 rounded bg-[#eceef0] text-[#45474c] text-[11px] font-semibold">
                            Soft warning at 80%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Granular Feature Comparison Matrix Section */}
          <section className="w-full py-20 bg-[#f7f9fb]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[40px]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-[32px] leading-[40px] text-[#091426] font-semibold tracking-tight mb-2">
                  Granular Architectural Comparison
                </h2>
                <p className="text-[16px] leading-[24px] text-[#45474c]">
                  A direct matrix comparing governance, execution telemetry, and security protocols across tiers.
                </p>
              </div>
              <div className="bg-white rounded shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#e6e8ea] text-[#091426] text-[20px] font-semibold">
                        <th className="py-5 px-6 w-1/3">Capability Matrix</th>
                        <th className="py-5 px-6 w-2/9 text-center font-semibold">Academic Lab</th>
                        <th className="py-5 px-6 w-2/9 text-center font-semibold text-[#091426] bg-[#eceef0]">
                          Enterprise AI &amp; R&amp;D
                        </th>
                        <th className="py-5 px-6 w-2/9 text-center font-semibold">Consortium</th>
                      </tr>
                    </thead>
                    <tbody className="text-[14px] text-[#191c1e] divide-y divide-[#eceef0]">
                      {/* Section 1 */}
                      <tr className="bg-[#f2f4f6] text-[#091426] font-bold">
                        <td className="py-3 px-6 uppercase tracking-wider text-[12px]" colSpan={4}>
                          1. Execution Sandboxes &amp; Compute
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Ephemeral GPU Node Access</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Shared Burst (T4)</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Dedicated H100 SXM5 Clustered
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Custom Reserved Capacity</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">PyTest Autograder Sandboxes</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">50 runs / seat / month</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Unlimited Parallel Sandboxes
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Unlimited Parallel Sandboxes</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Cold Start Latency</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">&lt; 4.2s</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          &lt; 0.8s (Warm Pool)
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">&lt; 0.4s Dedicated Edge</td>
                      </tr>

                      {/* Section 2 */}
                      <tr className="bg-[#f2f4f6] text-[#091426] font-bold">
                        <td className="py-3 px-6 uppercase tracking-wider text-[12px]" colSpan={4}>
                          2. Authoring &amp; AI Mentorship
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Book-First Adaptive Syllabi</td>
                        <td className="py-3.5 px-6 text-center">
                          <CheckIcon className="text-[#006c49] !text-[20px]" />
                        </td>
                        <td className="py-3.5 px-6 text-center bg-[#eceef0]/40">
                          <CheckIcon className="text-[#006c49] !text-[20px]" />
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <CheckIcon className="text-[#006c49] !text-[20px]" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Domain-Specific Model Adapters (LoRA)</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">—</td>
                        <td className="py-3.5 px-6 text-center bg-[#eceef0]/40">
                          <CheckIcon className="text-[#006c49] !text-[20px]" />
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <CheckIcon className="text-[#006c49] !text-[20px]" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Real-Time Neuro-Cognitive Telemetry</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Classroom Aggregate</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Granular User Telemetry
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Custom Data Lake Sync</td>
                      </tr>

                      {/* Section 3 */}
                      <tr className="bg-[#f2f4f6] text-[#091426] font-bold">
                        <td className="py-3 px-6 uppercase tracking-wider text-[12px]" colSpan={4}>
                          3. Identity, SSO &amp; Compliance
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Authentication Protocol</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">SAML 2.0 / Google Workspace</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Okta / Entra SCIM v2.1
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Custom IdP Gateway</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Multi-Tenancy Isolation</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Namespace Isolated</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Isolated VPC Tenancy
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Row-Level Cryptographic (48+)</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">Audit Telemetry Export</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">CSV / Webhook</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          Syslog RFC 5424 / SIEM
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">Bespoke Streaming Pipeline</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-6 text-[#191c1e] font-medium">SLA Availability</td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">99.5%</td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#091426] bg-[#eceef0]/40">
                          99.99% (1h response)
                        </td>
                        <td className="py-3.5 px-6 text-center text-[#45474c]">99.999% (15m response)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-20 bg-[#f2f4f6]">
            <div className="max-w-3xl mx-auto px-4 md:px-0">
              <div className="text-center mb-12">
                <span className="text-[#006c49] text-[12px] font-semibold uppercase tracking-wider">
                  Got Questions?
                </span>
                <h2 className="text-[32px] leading-[40px] text-[#091426] font-semibold tracking-tight mt-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] leading-[24px] text-[#45474c] mt-2">
                  Everything you need to know about billing guardrails, hardware isolation, and academic provisioning.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      onClick={() => toggleFaq(index)}
                      type="button"
                    >
                      <span className="text-[20px] leading-[28px] font-semibold text-[#091426]">
                        {faq.question}
                      </span>
                      <ExpandMoreIcon
                        className={`text-[#45474c] transition-transform duration-200 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 pt-0 text-[#45474c] text-[16px] leading-[24px] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Institutional Proof & Security Strip */}
          <section className="w-full py-16 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <span className="text-[12px] uppercase font-semibold text-[#45474c] tracking-wider">
                    Enterprise Security Compliance
                  </span>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-[#091426] mt-1">
                    Battle-tested for regulated government and academic workloads
                  </h3>
                </div>
                {/* Badge Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  <div className="flex items-center gap-3 p-3.5 rounded bg-[#eceef0] shadow-sm">
                    <VerifiedUserIcon className="text-[#006c49] !text-[24px]" />
                    <div>
                      <div className="text-[14px] font-bold text-[#091426]">SOC2 Type II</div>
                      <div className="text-[11px] text-[#45474c]">Continuous Audit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded bg-[#eceef0] shadow-sm">
                    <AccessibilityNewIcon className="text-[#006c49] !text-[24px]" />
                    <div>
                      <div className="text-[14px] font-bold text-[#091426]">WCAG AAA</div>
                      <div className="text-[11px] text-[#45474c]">Section 508 Compliant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded bg-[#eceef0] shadow-sm">
                    <ShieldIcon className="text-[#006c49] !text-[24px]" />
                    <div>
                      <div className="text-[14px] font-bold text-[#091426]">GDPR &amp; FERPA</div>
                      <div className="text-[11px] text-[#45474c]">Sovereign Data Stores</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded bg-[#eceef0] shadow-sm">
                    <LockIcon className="text-[#006c49] !text-[24px]" />
                    <div>
                      <div className="text-[14px] font-bold text-[#091426]">ISO 27001</div>
                      <div className="text-[11px] text-[#45474c]">ISMS Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}