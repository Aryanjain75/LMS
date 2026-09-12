"use client";
import React, { useState } from "react";
import {
  Tune as TuneIcon,
  School as SchoolIcon,
  CorporateFare as CorporateFareIcon,
  Science as ScienceIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Shield as ShieldIcon,
  Dataset as DatasetIcon,
  SyncAlt as SyncAltIcon,
  Verified as VerifiedIcon,
  Description as DescriptionIcon,
  Memory as MemoryIcon,
  Hub as HubIcon,
  Speed as SpeedIcon,
  Troubleshoot as TroubleshootIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
  FormatPaint as FormatPaintIcon,
  Mail as MailIcon,
  WorkspacePremium as WorkspacePremiumIcon,
} from "@mui/icons-material";

export default function AigodmodeSolutions() {
  const [org, setOrg] = useState("university");
  const [gpu, setGpu] = useState("shared");
  const [seats, setSeats] = useState(250);

  const matrix = {
    university: {
      badge: "Academic Campus LTI+",
      title: "Academic Dept. Mesh Grid",
      desc: "Deterministic student grading sandboxes, direct Canvas & Blackboard Gradebook sync, automated AST plagiarism guardrails, zero setup student terminals.",
      lms: "LTI 1.3 Advantage Deep Linking",
      privacy: "FERPA / Zero Student Retention",
      compute: "Dynamic Micro-Containers (T4 GPU)",
      provision: "< 15 Minutes",
    },
    enterprise: {
      badge: "Enterprise Isolated VPC",
      title: "Dedicated Corporate Enclave",
      desc: "Single-tenant AWS/Azure VPC with zero internet egress, strict NDA compliance, Workday HRIS auto-sync, and proprietary codebase integration.",
      lms: "SCIM 2.0 / Okta / Workday LMS",
      privacy: "SOC2 CC6.2 / HIPAA / Zero Retention",
      compute: "Dedicated Private Subnet Nodes",
      provision: "Same-day Automated Terraform",
    },
    lab: {
      badge: "Frontier Agent Cluster",
      title: "Unthrottled Research Matrix",
      desc: "Model Context Protocol (MCP) clusters, real-time agent observability, recursive memory sandboxes, and high-frequency tool execution.",
      lms: "Direct gRPC / REST API & SDKs",
      privacy: "Proprietary Weights IP Protection",
      compute: "Direct NVLink GPU Enclave",
      provision: "Instant Container Swarm",
    },
  };

  const getComputeSpec = () => {
    if (gpu === "dedicated-a100") return "Dedicated A100 80GB SXM4";
    if (gpu === "h100-cluster") return "Private H100 NVLink Clustered";
    return matrix[org].compute;
  };

  const getProvisionSpec = () => {
    if (gpu === "dedicated-a100") return "1-2 Hours Provisioning";
    if (gpu === "h100-cluster") return "Custom Dedicated Allocation";
    return matrix[org].provision;
  };

  return (

      <main className="w-full pt-16 bg-[#f7f9fb] min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          {/* Top Hero Section */}
          <section className="relative w-full py-12 bg-[#f2f4f6] overflow-hidden">
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#091426]/5 blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-[#6cf8bb]/20 blur-2xl pointer-events-none" />
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 relative z-10">
              <div className="flex flex-col max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#e0e3e5] text-[#091426] text-xs w-fit uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                  TAILORED DEPLOYMENTS
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#091426]">
                  Engineered for Higher Education, Research Institutes, and Enterprise AI Teams.
                </h1>
                <p className="text-lg text-[#45474c] leading-relaxed">
                  Choose the deployment architecture that matches your cohort scale, data governance, and compute isolation requirements. From automated Canvas LTI synchronization to private zero-retention VPC enclaves.
                </p>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6">
                {[
                  { title: "LTI 1.3 Advantage", stat: "100% Native", desc: "Canvas, Blackboard & Moodle parity" },
                  { title: "VPC Sandboxes", stat: "Zero Retention", desc: "Single-tenant isolated clusters" },
                  { title: "Compute Scale", stat: "H100 / A100", desc: "Instant cluster node provisioning" },
                  { title: "Security Baseline", stat: "SOC2 CC6.2", desc: "Continuous compliance auditing" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded bg-white shadow-sm flex flex-col gap-1">
                    <span className="text-xs text-[#45474c] uppercase tracking-wider">{item.title}</span>
                    <span className="text-2xl font-bold text-[#091426]">{item.stat}</span>
                    <span className="text-sm text-[#45474c]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <section className="w-full py-12 bg-[#f7f9fb]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="p-8 md:p-12 rounded bg-[#091426] text-white shadow-xl relative overflow-hidden">
                <div className="max-w-xl mb-8">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e0e3e5]/20 text-white text-xs mb-2">
                    <TuneIcon className="text-[16px] text-[#6ffbbe]" />
                    ARCHITECTURE CALCULATOR
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Calculate Your Cluster Spec &amp; Deployment Blueprint
                  </h2>
                  <p className="text-sm text-[#8590a6]">
                    Input organizational constraints to evaluate recommended infrastructure tiers, network isolation levels, and LMS synchronizers in real-time.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Form Inputs */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Org Type */}
                    <div>
                      <label className="block text-sm text-white mb-2">1. Organization Segment</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "university", label: "Higher Ed / CS", icon: SchoolIcon },
                          { id: "enterprise", label: "Enterprise AI R&D", icon: CorporateFareIcon },
                          { id: "lab", label: "Autonomous Lab", icon: ScienceIcon },
                        ].map((item) => {
                          const Icon = item.icon;
                          const active = org === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setOrg(item.id)}
                              className={`p-4 rounded text-left text-sm transition-all ${
                                active
                                  ? "bg-[#e0e3e5] text-[#091426] font-medium"
                                  : "bg-[#e0e3e5]/20 text-white hover:bg-[#e0e3e5]/30"
                              }`}
                            >
                              <Icon className="block text-[20px] mb-1" />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Cohort Size */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-white">2. Concurrent Active Cohort Seats</label>
                        <span className="text-sm text-[#6ffbbe] font-bold">{seats.toLocaleString()} Seats</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="5000"
                        step="10"
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                        className="w-full h-2 bg-[#e0e3e5]/30 rounded appearance-none cursor-pointer accent-[#6ffbbe]"
                      />
                      <div className="flex justify-between text-[#8590a6] text-xs mt-1">
                        <span>Small Lab (20)</span>
                        <span>Department (500)</span>
                        <span>Global Multi-Campus (5000+)</span>
                      </div>
                    </div>

                    {/* Compute Requirement */}
                    <div>
                      <label className="block text-sm text-white mb-2">3. Compute Isolation &amp; Acceleration</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { id: "shared", title: "Serverless Dynamic", desc: "Shared CPU + T4 Pods" },
                          { id: "dedicated-a100", title: "Dedicated A100 SXM4", desc: "80GB Tensor Core Node" },
                          { id: "h100-cluster", title: "Private H100 Enclave", desc: "Custom NVLink Cluster" },
                        ].map((item) => {
                          const active = gpu === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setGpu(item.id)}
                              className={`p-4 rounded text-left text-sm transition-all ${
                                active
                                  ? "bg-[#e0e3e5] text-[#091426]"
                                  : "bg-[#e0e3e5]/20 text-white hover:bg-[#e0e3e5]/30"
                              }`}
                            >
                              <span className="block font-bold">{item.title}</span>
                              <span className="text-xs opacity-80">{item.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Output Card */}
                  <div className="lg:col-span-5 bg-[#e0e3e5] text-[#191c1e] rounded p-6 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-4 border-b border-[#c5c6cd]/30">
                        <span className="text-xs text-[#45474c] uppercase tracking-wider font-semibold">
                          RECOMMENDED ARCHITECTURE
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#006c49]/15 text-[#006c49] text-xs font-semibold">
                          {matrix[org].badge}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-[#091426]">{matrix[org].title}</h3>
                          <p className="text-xs text-[#45474c] mt-1">{matrix[org].desc}</p>
                        </div>
                        <div className="space-y-1 pt-1">
                          {[
                            { label: "LMS Sync Method", val: matrix[org].lms },
                            { label: "Data Privacy Boundary", val: matrix[org].privacy },
                            { label: "Compute Allocation", val: getComputeSpec() },
                            { label: "Estimated Provisioning", val: getProvisionSpec() },
                          ].map((spec, idx) => (
                            <div key={idx} className="flex justify-between py-1.5 px-3 bg-[#eceef0] rounded text-xs">
                              <span className="text-[#45474c]">{spec.label}</span>
                              <span className="font-semibold text-[#091426]">{spec.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4">
                      <a
                        href="#"
                        className="w-full inline-flex items-center justify-center gap-1 px-6 py-2 rounded bg-[#091426] text-white hover:bg-[#1e293b] transition-colors text-sm shadow-sm"
                      >
                        Request This Architecture Spec
                        <ArrowForwardIcon className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Track 01 */}
          <section className="w-full py-12 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#eceef0] text-[#091426] text-xs uppercase tracking-wider">
                    <SchoolIcon className="text-[16px] text-[#006c49]" />
                    TRACK 01 // HIGHER EDUCATION
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426]">
                    Higher Education &amp; University CS Departments
                  </h2>
                  <p className="text-base text-[#45474c] leading-relaxed">
                    Eliminate runtime fragmentation across student operating systems. Enable cross-institutional registration, automated teaching assistant evaluation queues, and bidirectional grade synchronization with Canvas and Blackboard.
                  </p>
                  <div className="space-y-3 pt-1">
                    {[
                      {
                        title: "Zero Hardware Management for Faculty",
                        desc: "No Docker config hell or local CUDA drivers. Students code in browser-isolated ephemeral Jupyter, VS Code, and terminal clusters.",
                      },
                      {
                        title: "Deterministic Evaluation & AST Analysis",
                        desc: "Instant programmatic grading using Abstract Syntax Tree inspection, synthetic test injection, and LLM-assisted rubric generation.",
                      },
                      {
                        title: "Seamless LMS LTI 1.3 Sync",
                        desc: "Real-time assignment propagation, Single Sign-On (SSO via Shibboleth/SAML), and automated roster ingestion from registrar systems.",
                      },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-[#eceef0] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircleIcon className="text-[#006c49] text-[16px]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#091426]">{feature.title}</h4>
                          <p className="text-xs text-[#45474c]">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {["Canvas LMS", "Blackboard Learn", "Moodle 4.x", "FERPA Compliant"].map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-[#eceef0] text-xs text-[#45474c]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Track 01 Workflow Card */}
                <div className="lg:col-span-6">
                  <div className="bg-[#eceef0] rounded p-4 shadow-md space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cd]/30 text-[#45474c] text-xs">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffb95f]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]" />
                        </div>
                        <span className="font-bold text-[#091426] ml-1">
                          CS345: Deep Generative Architectures // Lab Cohort #04
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#e0e3e5] text-[#006c49] font-semibold text-[11px]">
                        STANFORD ONLINE RUNTIME
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-white rounded">
                        <span className="text-[11px] text-[#45474c] uppercase block">Roster Sync</span>
                        <p className="text-xl font-bold text-[#091426]">184 / 184</p>
                        <span className="text-[11px] text-[#006c49]">Canvas Sync: OK</span>
                      </div>
                      <div className="p-2 bg-white rounded">
                        <span className="text-[11px] text-[#45474c] uppercase block">TA Grading Queue</span>
                        <p className="text-xl font-bold text-[#091426]">
                          12 <span class="text-sm font-normal text-[#45474c]">pending</span>
                        </p>
                        <span className="text-[11px] text-[#45474c]">Avg latency: 4m</span>
                      </div>
                      <div className="p-2 bg-white rounded">
                        <span className="text-[11px] text-[#45474c] uppercase block">AST Plagiarism</span>
                        <p className="text-xl font-bold text-[#091426]">0 Flagged</p>
                        <span className="text-[11px] text-[#006c49]">Fingerprints clear</span>
                      </div>
                    </div>

                    <div className="p-4 rounded bg-[#091426] text-white space-y-1 font-mono text-sm">
                      <div className="flex justify-between items-center text-[#8590a6] text-xs mb-2">
                        <span>&gt; test_harness_eval_submission.py</span>
                        <span className="text-[#6ffbbe]">STATUS: 42/42 PASS</span>
                      </div>
                      <p className="text-[#6ffbbe] text-[13px]">[OK] Node #3: Attention matrix sparsity verified (O(N) complexity confirmed)</p>
                      <p className="text-white text-[13px]">[OK] Deterministic seed = 42 checked across 500 stochastic passes</p>
                      <p className="text-[#d8dadc] text-[13px]">[AST] Subtree uniqueness index: 0.94 vs repository baseline</p>
                      <p className="text-[#6ffbbe] text-[13px]">[LTI] Auto-posted 100/100 to Canvas Gradebook (SID: #984210)</p>
                    </div>

                    <div className="p-3 bg-white rounded flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#eceef0] flex items-center justify-center font-bold text-xs text-[#091426]">
                          TA
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-[#091426]">Sarah Chen (Head TA)</div>
                          <div className="text-xs text-[#45474c]">Validated Problem Set 4 rubric autograding parameters</div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-[#eceef0] text-[#091426]">Batch Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Track 02 */}
          <section className="w-full py-12 bg-[#f2f4f6]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="bg-white rounded p-6 shadow-md space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cd]/30">
                      <span className="text-xs text-[#45474c] uppercase font-semibold">
                        ENTERPRISE PRIVATE ENCLAVE OVERVIEW
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-[#006c49]/15 text-[#006c49] font-semibold">
                        <ShieldIcon className="text-[14px]" />
                        VPC ISOLATED
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded bg-[#eceef0] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ShieldIcon className="text-[#091426] text-[20px]" />
                          <div>
                            <div className="text-sm font-bold text-[#091426]">BioGen R&amp;D Sub-Tenant</div>
                            <div className="text-xs text-[#45474c]">Isolated AWS Nitro Enclave // Zero egress internet access</div>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#6ffbbe] text-[#002113] font-bold">
                          AIR-GAPPED
                        </span>
                      </div>

                      <div className="p-3 rounded bg-[#eceef0] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <DatasetIcon className="text-[#091426] text-[20px]" />
                          <div>
                            <div className="text-sm font-bold text-[#091426]">Proprietary Codebase Indexing</div>
                            <div className="text-xs text-[#45474c]">Local embedding cache • Excluded from foundation model fine-tuning</div>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#e6e8ea] text-[#091426] font-bold">
                          NO RETENTION
                        </span>
                      </div>

                      <div className="p-3 rounded bg-[#eceef0] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <SyncAltIcon className="text-[#091426] text-[20px]" />
                          <div>
                            <div className="text-sm font-bold text-[#091426]">HRIS &amp; Skill Taxonomy Sync</div>
                            <div className="text-xs text-[#45474c]">Workday &amp; Okta SCIM 2.0 provisioning • Role-based cohort assignment</div>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#e6e8ea] text-[#091426] font-bold">
                          SCIM ACTIVE
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded bg-[#f2f4f6]">
                      <div className="text-xs text-[#45474c] uppercase font-semibold mb-2">
                        Continuous Attestation Matrix
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-[#091426]">
                        {["SOC2 Type II (CC6.2)", "HIPAA BAA Signed", "GDPR Article 28 DPA", "WCAG 2.1 AAA Validated"].map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <VerifiedIcon className="text-[#006c49] text-[16px]" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#eceef0] text-[#091426] text-xs uppercase tracking-wider">
                    <CorporateFareIcon className="text-[16px] text-[#006c49]" />
                    TRACK 02 // ENTERPRISE R&amp;D
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426]">
                    Enterprise R&amp;D &amp; AI Engineering Upskilling
                  </h2>
                  <p className="text-base text-[#45474c] leading-relaxed">
                    Upskill engineering organizations on production LLM architecture without risking proprietary intellectual property. Train teams against private company codebases inside isolated VPC compute sandboxes covered by strict nondisclosure agreements.
                  </p>
                  <div className="space-y-3 pt-1">
                    {[
                      {
                        title: "Zero Data Retention Guarantees",
                        desc: "Prompts, code completions, and evaluation benchmarks are processed strictly in RAM and never stored for model re-training.",
                      },
                      {
                        title: "Automated Workday & HRIS Ingestion",
                        desc: "Map role hierarchies automatically. Engineers move seamlessly through foundational, intermediate, and staff-level agentic curricula.",
                      },
                      {
                        title: "Fine-Grained RBAC & Audit Logs",
                        desc: "Stream full security telemetry directly into your SIEM (Splunk, Datadog) via HTTPS webhooks and JSON event buses.",
                      },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-white flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircleIcon className="text-[#006c49] text-[16px]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#091426]">{feature.title}</h4>
                          <p className="text-xs text-[#45474c]">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <a href="#" className="inline-flex items-center gap-1 px-6 py-2 rounded bg-[#091426] text-white hover:bg-[#1e293b] transition-colors text-sm shadow-sm">
                      View Security Whitepaper
                      <DescriptionIcon className="text-[16px]" />
                    </a>
                    <span className="text-xs text-[#45474c]">SOC2 Type II Report Available under NDA</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Track 03 */}
          <section className="w-full py-12 bg-[#f7f9fb]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="space-y-4 max-w-3xl mb-8">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#eceef0] text-[#091426] text-xs uppercase tracking-wider">
                  <MemoryIcon className="text-[16px] text-[#006c49]" />
                  TRACK 03 // FRONTIER LABS
                </div>
                <h2 className="text-3xl font-bold text-[#091426]">
                  Frontier AI Research Labs &amp; Autonomous Agent Teams
                </h2>
                <p className="text-base text-[#45474c] leading-relaxed">
                  For teams engineering multi-agent swarms, recursive reasoning networks, and high-volume tool call pipelines. Run unthrottled agent execution inside stateful, low-latency execution matrices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: HubIcon,
                    title: "Agent Runtime Sandboxes",
                    desc: "Native protocol adapters for Anthropic Model Context Protocol (MCP), LangGraph state graphs, AutoGen multi-agent workflows, and CrewAI setups.",
                    footLabel: "Protocol Support",
                    footVal: "MCP / LangGraph / AutoGen",
                  },
                  {
                    icon: SpeedIcon,
                    title: "Dedicated H100 SXM5 Clusters",
                    desc: "Bypass token rate-limits. Provision dedicated GPU instances for complex synthetic benchmark evaluation, agent fine-tuning, and KV-cache distillation.",
                    footLabel: "Interconnect",
                    footVal: "900 GB/s NVLink 4.0",
                  },
                  {
                    icon: TroubleshootIcon,
                    title: "High-Throughput Tool Benchmarks",
                    desc: "Continuous agent capability auditing. Measure tool-calling accuracy, hallucination drift, and schema compliance across thousands of recursive runs.",
                    footLabel: "Sampling Engine",
                    footVal: "100k calls/sec capability",
                  },
                ].map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div key={idx} className="p-6 bg-white rounded shadow-sm flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded bg-[#eceef0] flex items-center justify-center text-[#091426]">
                          <Icon className="text-[24px]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#091426]">{card.title}</h3>
                        <p className="text-xs text-[#45474c] leading-relaxed">{card.desc}</p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#c5c6cd]/30 flex items-center justify-between text-xs text-[#45474c]">
                        <span>{card.footLabel}</span>
                        <span className="font-bold text-[#091426]">{card.footVal}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* White-Label Section */}
          <section className="w-full py-12 bg-[#f2f4f6]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#eceef0] text-[#091426] text-xs uppercase tracking-wider mb-2">
                    <PaletteIcon className="text-[16px] text-[#006c49]" />
                    ENTERPRISE IDENTITY &amp; WHITE-LABEL
                  </div>
                  <h2 className="text-3xl font-bold text-[#091426]">
                    White-Label &amp; Bespoke Institutional Hubs
                  </h2>
                  <p className="text-base text-[#45474c] mt-1">
                    Deploy the AIGODMODE learning infrastructure completely under your institutional banner. Keep student and employee touchpoints seamless with zero third-party branding.
                  </p>
                </div>
                <span className="px-4 py-1 rounded bg-[#eceef0] text-[#091426] text-sm font-semibold shrink-0">
                  Fully White-Labeled
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: LanguageIcon,
                    title: "Custom CNAME Domains",
                    desc: (
                      <>
                        Serve cohorts directly from <code className="px-1 py-0.5 bg-[#eceef0] rounded text-[#091426] font-mono text-xs">learning.university.edu</code> or your corporate intranet URL.
                      </>
                    ),
                  },
                  {
                    icon: FormatPaintIcon,
                    title: "Design Token Injection",
                    desc: "Provide company hex color palettes, font imports, custom CSS variables, and dark/light mode configurations for exact brand adherence.",
                  },
                  {
                    icon: MailIcon,
                    title: "Custom Email Relays",
                    desc: "Send invite links, module completion reports, and TA feedback notifications via your own SMTP servers (SendGrid, AWS SES).",
                  },
                  {
                    icon: WorkspacePremiumIcon,
                    title: "Cryptographic Diplomas",
                    desc: "Generate verifiable micro-credential certificates with official university seal watermarks and immutable SHA-256 validation signatures.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-6 bg-white rounded shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded bg-[#eceef0] flex items-center justify-center text-[#091426]">
                        <Icon className="text-[20px]" />
                      </div>
                      <h4 className="text-base font-bold text-[#091426]">{item.title}</h4>
                      <p className="text-xs text-[#45474c]">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 bg-[#f7f9fb] border-t border-[#c5c6cd]/30">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
              <div className="p-8 md:p-12 rounded bg-[#1e293b] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
                <div className="max-w-2xl space-y-2 z-10">
                  <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded bg-[#6cf8bb]/20 text-[#6ffbbe] text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6ffbbe]" />
                    SOLUTIONS ADVISORY
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Speak with an Academic or Enterprise Solutions Architect
                  </h2>
                  <p className="text-base text-[#8590a6]">
                    Review single-tenant VPC deployment blueprints, discuss custom Canvas/Blackboard LTI integration scopes, or request an evaluation cluster test sandbox.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full lg:w-auto z-10">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-2 rounded bg-[#006c49] text-white hover:bg-[#6ffbbe] hover:text-[#002113] transition-colors text-sm shadow-sm">
                    Book Architecture Review
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-2 rounded bg-[#e0e3e5]/20 text-white hover:bg-[#e0e3e5]/30 transition-colors text-sm">
                    Download Technical Whitepaper
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

  );
}