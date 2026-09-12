import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddLinkIcon from "@mui/icons-material/AddLink";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Logo, ProgressBar } from "../../app/Signup/page";

export default function ConnectSsoStep({ onNext, onBack }) {
  const [isGithubConnected, setIsGithubConnected] = useState(false);

  return (
      <main className="w-full flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col w-full items-center justify-center py-6 px-4">
          {/* Centered Onboarding Modal Card */}
          <div className="w-full max-w-xl bg-white rounded-[4px] shadow-sm p-8 flex flex-col items-center border border-[#e0e3e5]">
           <Logo/>

          <ProgressBar step={5} />
            {/* Headings */}
            <div className="text-center w-full mb-6">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-[12px] leading-[16px] uppercase tracking-widest text-[#45474c] font-bold">
                  Step 4 of 5
                </span>
              </div>
              <h1 className="text-[24px] leading-[32px] text-[#191c1e] font-semibold tracking-tight mb-2">
                Connect SSO &amp; Developer Accounts
              </h1>
              <p className="text-[14px] leading-[20px] text-[#45474c] max-w-md mx-auto">
                Link your accounts to synchronize repository autograders and institutional single sign-on.
              </p>
            </div>

            {/* SSO Provider Connection List */}
            <div className="w-full flex flex-col gap-3 mb-5">
              {/* Provider 1: Google Workspace / Academic SSO */}
              <div className="w-full bg-white rounded-[4px] p-4 flex items-center justify-between transition-colors hover:bg-[#f2f4f6] shadow-sm border border-[#e0e3e5]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-[4px] bg-[#f2f4f6] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#191c1e]">
                        Google Workspace
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#00714d] bg-[#6cf8bb]/40 px-1.5 py-0.5 rounded-[4px]">
                        SSO Verified
                      </span>
                    </div>
                    <span className="text-[14px] leading-[20px] text-[#45474c] truncate">
                      alex.mercer@stanford.edu · Stanford University LTI
                    </span>
                  </div>
                </div>
                <div className="shrink-0 pl-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#6cf8bb]/30 text-[#006c49] text-[12px] leading-[16px] font-semibold px-2.5 py-1 rounded-[4px]">
                    <CheckCircleIcon className="!text-[16px]" />
                    Connected
                  </span>
                </div>
              </div>

              {/* Provider 2: GitHub Developer Account */}
              <div className="w-full bg-white rounded-[4px] p-4 flex items-center justify-between transition-colors hover:bg-[#f2f4f6] shadow-sm border border-[#e0e3e5]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-[4px] bg-[#091426] text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#191c1e]">
                        GitHub Account
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#45474c] bg-[#eceef0] px-1.5 py-0.5 rounded-[4px]">
                        Recommended
                      </span>
                    </div>
                    <span className="text-[14px] leading-[20px] text-[#45474c] truncate">
                      Sync repositories, PyTest autograders &amp; lab commits
                    </span>
                  </div>
                </div>
                <div className="shrink-0 pl-3">
                  {isGithubConnected ? (
                    <button
                      className="bg-[#6cf8bb]/30 text-[#006c49] text-[12px] leading-[16px] font-semibold px-2.5 py-1 rounded-[4px] flex items-center gap-1.5 cursor-pointer"
                      onClick={() => setIsGithubConnected(false)}
                      type="button"
                    >
                      <CheckCircleIcon className="!text-[16px]" />
                      <span>@alexmercer-dev</span>
                    </button>
                  ) : (
                    <button
                      className="bg-[#091426] text-white text-[12px] leading-[16px] font-semibold px-3.5 py-1.5 rounded-[4px] hover:bg-[#1e293b] flex items-center gap-1.5 transition-colors cursor-pointer"
                      onClick={() => setIsGithubConnected(true)}
                      type="button"
                    >
                      <AddLinkIcon className="!text-[15px]" />
                      <span>Connect GitHub</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Security & Permissions Callout */}
            <div className="w-full bg-[#f2f4f6] rounded-[4px] p-3 flex items-start gap-2.5 mb-6">
              <VerifiedUserIcon className="text-[#006c49] !text-[20px] shrink-0 mt-0.5" />
              <p className="text-[14px] leading-[20px] text-[#45474c] leading-relaxed">
                AIGODMODE requests strict read-only repository tree access and authenticated commit verification for autograder test suites. We never write code to your private branches.
              </p>
            </div>

            {/* Reference Previews of System Modules */}
            <div className="w-full bg-[#f2f4f6] rounded-[4px] p-3 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] leading-[16px] font-semibold text-[#45474c] uppercase tracking-wider">
                  Autograder Environment Previews
                </span>
                <span className="text-[12px] leading-[16px] text-[#006c49] font-medium">
                  Auto-sync ready
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-[4px] overflow-hidden bg-[#eceef0] shadow-sm group">
                  <img
                    alt="AIGODMODE Autograder interface preview"
                    className="w-full h-16 object-cover object-top opacity-90 transition group-hover:opacity-100 group-hover:scale-105 duration-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcEi9xpO1DOT9CG-O7pfrFueLgszuTeL899wg_fVu1U1aVy6WXZDRJ47lT01FMxvRETZuwi6cd7s-untDLa4aIyW5WMYEbDP7zd5fjttUdXcne3O4itKs5j7HFZktgrIUvyyq1R1qMR9xjYvmnbfwOc7_O1QXpc_wRpe1iPHrOVIIEVmrGEU2TPO7mI09yBRrnUn8n4rPm_IESKPdQoTCahRkRYPWG1WKa7bnPOKxb0Zdqx4VkWChaOXK8w2mDWPeoIY"
                  />
                  <div className="absolute inset-0 bg-[#091426]/20 mix-blend-multiply pointer-events-none" />
                  <div className="absolute bottom-1 left-1.5 bg-white/90 px-1.5 py-0.5 rounded-[4px]">
                    <span className="text-[10px] text-[#091426] font-semibold">
                      Workspace Sync
                    </span>
                  </div>
                </div>
                <div className="relative rounded-[4px] overflow-hidden bg-[#eceef0] shadow-sm group">
                  <img
                    alt="Enterprise test suite overview"
                    className="w-full h-16 object-cover object-top opacity-90 transition group-hover:opacity-100 group-hover:scale-105 duration-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR83zapb5OUyFhtJQlAPUtMOmyXcTYckKExxk6nJxmAgaUw6lDjXbScr_bvdqW23mXmKKkAYJQb-o2686qy_eby5kwwne-sk9ltatdpH6r1T10wJj7GHr9EJs4PJggY9uNQ7ULxEiFkCqhM0vrfust3jQu7_AXlUSpV4a6yPJ55pWeH8AwHM1FTy6xmPCGVhx_0zn-zqqH_AlGOL2d00O40p8Yv1ifR6rQ2XR5SxFbDeSfgnui95XykJ18c2SC1U9Qk2I"
                  />
                  <div className="absolute inset-0 bg-[#091426]/20 mix-blend-multiply pointer-events-none" />
                  <div className="absolute bottom-1 left-1.5 bg-white/90 px-1.5 py-0.5 rounded-[4px]">
                    <span className="text-[10px] text-[#091426] font-semibold">
                      PyTest Suite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              className="w-full bg-[#091426] text-white text-[14px] leading-[20px] tracking-[0.01em] font-semibold py-3 rounded-[4px] hover:bg-[#1e293b] transition-colors shadow-sm flex items-center justify-center gap-2 mb-4 cursor-pointer"
              type="button"
              onClick={onNext}
            >
              <span>Continue to Setup</span>
              <ArrowForwardIcon className="!text-[18px]" />
            </button>

            {/* Secondary Action Row */}
            <div className="w-full flex items-center justify-between pt-1">
              <button
                className="bg-[#f2f4f6] text-[#191c1e] text-[12px] leading-[16px] font-semibold px-4 py-2 rounded-[4px] hover:bg-[#eceef0] transition-colors flex items-center gap-1 cursor-pointer"
                type="button"
                onClick={onBack}
              >
                <ArrowBackIcon className="!text-[16px]" />
                <span>Back</span>
              </button>
              <button
                className="text-[#45474c] hover:text-[#191c1e] text-[12px] leading-[16px] font-semibold transition-colors cursor-pointer py-2 px-1"
                type="button"
              >
                Skip for now
              </button>
            </div>
          </div>

          {/* Trust Meta Bottom Text */}
          <div className="mt-4 flex items-center gap-4 text-[#45474c] text-[12px] leading-[16px] font-semibold">
            <span className="flex items-center gap-1">
              <LockIcon className="!text-[14px]" />
              256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <VerifiedIcon className="!text-[14px]" />
              SOC-2 Type II Certified
            </span>
          </div>
        </div>
      </main>

  );
}