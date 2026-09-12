"use client";
import React, { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import CheckIcon from "@mui/icons-material/Check";
import DomainIcon from "@mui/icons-material/Domain";
import VerifiedIcon from "@mui/icons-material/Verified";
import BadgeIcon from "@mui/icons-material/Badge";
import MemoryIcon from "@mui/icons-material/Memory";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DnsIcon from "@mui/icons-material/Dns";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TerminalIcon from "@mui/icons-material/Terminal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkspaceProvisionedStep() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleCtaClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="bg-[#f7f9fb] font-sans antialiased min-h-screen flex flex-col justify-between text-[#191c1e]">
      <main className="w-full flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col w-full items-center justify-center py-6 px-4">
          {/* Reference Alignment Preview Drawer */}
          <div className="w-full max-w-xl mb-4 flex items-center justify-between text-[#45474c] text-[12px] leading-[16px] font-semibold px-1">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-[4px] bg-emerald-500 animate-pulse" />
              <span>STEP 5 OF 5 · PROVISIONING COMPLETE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#45474c]/70">WORKSPACE ID:</span>
              <span className="font-mono bg-[#eceef0] px-1.5 py-0.5 rounded-[4px] text-[#091426]">
                agm-stf-8842
              </span>
            </div>
          </div>

          {/* Main Centered Onboarding Card */}
          <div
            className="w-full max-w-xl bg-white rounded-[4px] p-8 flex flex-col border border-[#e0e3e5]"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Top Icon Badge */}
            <div className="w-12 h-12 bg-[#091426] rounded-[4px] flex items-center justify-center mx-auto text-white shadow-sm">
              <SchoolIcon className="!text-[24px]" />
            </div>

            {/* Brand Header */}
            <div className="text-center mt-3">
              <span className="tracking-widest text-[20px] leading-[28px] text-[#091426] font-bold">
                AIGODMODE
              </span>
              <p className="text-[12px] leading-[16px] uppercase tracking-wider text-[#45474c]/80 mt-0.5 font-semibold">
                Enterprise L&amp;D Platform
              </p>
            </div>

            {/* 5-Step Progress Bar (100% Completed) */}
            <div className="grid grid-cols-5 gap-1.5 w-full my-6">
              <div className="h-1.5 bg-[#091426] rounded-[4px]" />
              <div className="h-1.5 bg-[#091426] rounded-[4px]" />
              <div className="h-1.5 bg-[#091426] rounded-[4px]" />
              <div className="h-1.5 bg-[#091426] rounded-[4px]" />
              <div className="h-1.5 bg-[#091426] rounded-[4px]" />
            </div>

            {/* Ready Success Icon */}
            <div className="w-12 h-12 bg-[#ecfdf5] text-[#059669] rounded-[4px] flex items-center justify-center mx-auto mt-1">
              <CheckIcon className="!text-[24px] font-bold" />
            </div>

            {/* Header & Greetings */}
            <div className="text-center mt-4 mb-5">
              <h1 className="text-[20px] leading-[28px] text-[#091426] font-semibold">
                You are all set, Dr. Mercer!
              </h1>
              <p className="text-[14px] leading-[20px] text-[#45474c] mt-1.5 max-w-md mx-auto">
                Your enterprise learning workspace and isolated gVisor compute cluster have been provisioned.
              </p>
            </div>

            {/* Provisioning & Credentials Breakdown Card */}
            <div className="rounded-[4px] bg-[#f2f4f6] p-4 mb-5 space-y-3">
              {/* Organization */}
              <div className="flex items-center justify-between text-[14px] leading-[20px]">
                <span className="text-[#45474c] flex items-center gap-1.5">
                  <DomainIcon className="!text-[16px] text-[#75777d]" />
                  Organization
                </span>
                <span className="font-medium text-[#091426] flex items-center gap-1">
                  Stanford AI Lab · CS345 Cohort
                  <VerifiedIcon className="!text-[14px] text-sky-600" />
                </span>
              </div>
              <div className="h-px bg-[#e6e8ea] w-full" />

              {/* Primary Role */}
              <div className="flex items-center justify-between text-[14px] leading-[20px]">
                <span className="text-[#45474c] flex items-center gap-1.5">
                  <BadgeIcon className="!text-[16px] text-[#75777d]" />
                  Primary Role
                </span>
                <span className="font-medium text-[#091426] bg-white px-2 py-0.5 rounded-[4px] shadow-2xs border border-[#e0e3e5]">
                  Engineering &amp; Research Lead
                </span>
              </div>
              <div className="h-px bg-[#e6e8ea] w-full" />

              {/* Allocated Compute */}
              <div className="flex items-center justify-between text-[14px] leading-[20px]">
                <span className="text-[#45474c] flex items-center gap-1.5">
                  <MemoryIcon className="!text-[16px] text-[#75777d]" />
                  Allocated Compute
                </span>
                <span className="font-mono text-[12px] leading-[16px] font-semibold text-[#091426] flex items-center gap-1 bg-white px-2 py-0.5 rounded-[4px] border border-[#e0e3e5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  NVIDIA H100 SXM5 (vLLM Enabled)
                </span>
              </div>
              <div className="h-px bg-[#e6e8ea] w-full" />

              {/* Linked Auth */}
              <div className="flex items-center justify-between text-[14px] leading-[20px]">
                <span className="text-[#45474c] flex items-center gap-1.5">
                  <LockOpenIcon className="!text-[16px] text-[#75777d]" />
                  Linked Auth
                </span>
                <div className="text-right text-[12px] leading-[16px] font-semibold text-[#191c1e]">
                  <span className="font-mono text-[#091426] font-medium">@stanford.edu</span>
                  <span className="text-[#75777d] mx-1">&amp;</span>
                  <span className="font-mono text-[#091426] font-medium">GitHub: @alexmercer</span>
                </div>
              </div>
              <div className="h-px bg-[#e6e8ea] w-full" />

              {/* Cluster Status */}
              <div className="flex items-center justify-between text-[14px] leading-[20px] pt-0.5">
                <span className="text-[#45474c] flex items-center gap-1.5">
                  <DnsIcon className="!text-[16px] text-emerald-600" />
                  Cluster State
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] text-[12px] leading-[16px] bg-emerald-50 text-emerald-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-[4px] bg-emerald-500 animate-ping" />
                    Online · TLS 1.3 Validated
                  </span>
                </div>
              </div>
            </div>

            {/* Assigned Curricula Recommendations */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] leading-[16px] font-semibold text-[#45474c] uppercase tracking-wider">
                  Initial Curricula Assigned
                </span>
                <span className="text-[12px] leading-[16px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-[4px]">
                  Ready in Library
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 bg-white rounded-[4px] border border-[#e0e3e5] shadow-2xs hover:bg-[#f2f4f6] transition-colors flex items-start gap-2.5 cursor-pointer">
                  <MenuBookIcon className="!text-[20px] text-[#091426] mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#091426] truncate">
                      Model Context Protocol (MCP)
                    </p>
                    <p className="text-[12px] leading-[16px] text-[#45474c]">
                      Field Manual &amp; Agent Specs
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-[4px] border border-[#e0e3e5] shadow-2xs hover:bg-[#f2f4f6] transition-colors flex items-start gap-2.5 cursor-pointer">
                  <TerminalIcon className="!text-[20px] text-[#091426] mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#091426] truncate">
                      PyTorch Kernel Optimization
                    </p>
                    <p className="text-[12px] leading-[16px] text-[#45474c]">
                      Distributed Training Track
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleCtaClick}
              className="w-full py-3.5 px-4 bg-[#091426] text-white text-[14px] leading-[20px] tracking-[0.01em] font-semibold rounded-[4px] hover:bg-[#1e293b] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
              type="button"
            >
              {isLoading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Loading Terminal &amp; Manuals...</span>
                </>
              ) : (
                <>
                  <span>Enter Your Workspace &amp; Catalog</span>
                  <ArrowForwardIcon className="!text-[18px] group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Subtext Countdown Indicator */}
            <div className="text-center mt-3">
              <p className="text-[12px] leading-[16px] text-[#45474c] flex items-center justify-center gap-1.5">
                <span>Taking you to your laboratory dashboard.</span>
                <span className="font-medium text-[#091426] bg-[#eceef0] px-1.5 py-0.5 rounded-[4px]">
                  {timeLeft > 0 ? `Redirecting in ${timeLeft}s...` : "Launching session now..."}
                </span>
              </p>
            </div>
          </div>

          {/* Reference State Footprint (Collapsible UI previews) */}
          <div className="w-full max-w-xl mt-6">
            <div className="bg-[#f2f4f6] rounded-[4px] p-3 text-[#45474c] text-[12px] leading-[16px] font-semibold">
              <details className="group">
                <summary className="cursor-pointer font-medium text-[#091426] flex items-center justify-between select-none">
                  <span className="flex items-center gap-1.5">
                    <CollectionsBookmarkIcon className="!text-[16px]" />
                    Previous Setup Screenshots &amp; Verification Assets
                  </span>
                  <ExpandMoreIcon className="!text-[16px] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-[#e0e3e5]">
                  <div className="flex flex-col gap-1.5">
                    <div className="overflow-hidden rounded-[4px] bg-white shadow-2xs border border-[#e0e3e5]">
                      <img
                        alt="Step 2 Selection State Reference"
                        className="w-full h-24 object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0qkV4A4fMrQvkghN_AeVkkbFddWpazvVfrecPVyeXyEU-Q2191ODO-HeBj_fVAtLvgb1hYj8vmNxFRvjIknMzDW9q7r6SAmmP1748r-hBwKJrBQTgKoxon3EY16leTJttAtmyoc4vVXbYAdspT8OLrsMEFs_3OjEByzCLPw3h4uoAyD9OLD1lYXDi-_BSQ92KqqiUkKfpO2Fqyx9aGbhp8TamsHb20f2LCINZKeibDZfsX-O3lS53p-_BiAeevOBbkfs"
                      />
                    </div>
                    <span className="text-[12px] text-[#45474c]/80 font-normal">Step 2: Role Category Config</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="overflow-hidden rounded-[4px] bg-white shadow-2xs border border-[#e0e3e5]">
                      <img
                        alt="Enterprise Welcome State Reference"
                        className="w-full h-24 object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaZ_XBH2dPnTfNyX4KhcuZo0hMvjFUE0S5gPVGarYQNPHD0o2QR3cE0qVlK7hakA0WIWUS_R6MZZ-5-LCus8oAVbBFCqsknSMl-aYoYfqMv_SOylKAv4EI-V1XL910w7HzRPYzPJ9gP86rp-Z3s5ujkkSifu3o_KydShydge1Ob57oo-DFOxa0IlSUy54r10U-8imEqdB6gIP1bgGX9JZmU3hfiVmhKiO6eStiygAltavlWuK3xcNI2jAiW4UqxwWVZ2M"
                      />
                    </div>
                    <span className="text-[12px] text-[#45474c]/80 font-normal">Step 1: Workspace Auth Init</span>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 text-center text-[#45474c] text-[12px] leading-[16px]">
        © 2026 AIGODMODE Enterprise L&amp;D. Confidential &amp; Proprietary.
      </footer>
    </div>
  );
}