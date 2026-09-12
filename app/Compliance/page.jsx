import React from "react";
import {
  MdHome,
  MdSchool,
  MdMenuBook,
  MdVerified,
  MdGroup,
  MdAnalytics,
  MdSettings,
  MdContactSupport,
  MdMenu,
  MdSearch,
  MdNotifications,
  MdHelpOutline,
  MdWarning,
  MdMoreVert,
  MdEventBusy,
  MdSchedule,
  MdCheckCircle,
} from "react-icons/md";

/**
 * AIGODMODE AI Learning — Compliance Training Tracker
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents).
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
 */

const navItems = [
  { label: "Home", icon: MdHome, active: false },
  { label: "My Learning", icon: MdSchool, active: false },
  { label: "Catalog", icon: MdMenuBook, active: false },
  { label: "Compliance", icon: MdVerified, active: true },
  { label: "Team", icon: MdGroup, active: false },
  { label: "Reports", icon: MdAnalytics, active: false },
];

const trackerCards = [
  {
    status: "Overdue",
    statusClass: "bg-[#ba1a1a]/10 text-[#ba1a1a] border-[#ba1a1a]/20",
    borderClass: "border-[#ba1a1a]/40",
    accentBar: "bg-[#ba1a1a]",
    title: "Data Privacy & GDPR Fundamentals 2024",
    description:
      "Annual mandatory refresh covering data handling, PII protection, and incident reporting procedures.",
    dueIcon: MdEventBusy,
    dueText: "Due: Oct 15, 2024 (12 days ago)",
    dueClass: "text-[#ba1a1a]",
    cta: "Resume Course",
    ctaClass: "bg-[#1e293b] text-white hover:opacity-90 transition-opacity",
    dimmed: false,
  },
  {
    status: "Due Soon",
    statusClass: "bg-[#F59E0B]/10 text-[#B45309] border-[#F59E0B]/20",
    borderClass: "border-[#F59E0B]/40",
    accentBar: "bg-[#F59E0B]",
    title: "Information Security Awareness",
    description:
      "Identifying phishing attempts, secure password practices, and remote work security protocols.",
    dueIcon: MdSchedule,
    dueText: "Due: Nov 01, 2024 (5 days left)",
    dueClass: "text-[#B45309]",
    cta: "Start Renewal",
    ctaClass: "bg-white border border-[#c5c6cd] text-[#191c1e] hover:bg-[#f2f4f6] transition-colors shadow-sm",
    dimmed: false,
  },
  {
    status: "Due Soon",
    statusClass: "bg-[#F59E0B]/10 text-[#B45309] border-[#F59E0B]/20",
    borderClass: "border-[#F59E0B]/40",
    accentBar: "bg-[#F59E0B]",
    title: "Anti-Bribery and Corruption Policy",
    description:
      "Understanding global anti-corruption laws and company policies on gifts and entertainment.",
    dueIcon: MdSchedule,
    dueText: "Due: Nov 15, 2024 (19 days left)",
    dueClass: "text-[#B45309]",
    cta: "Start Renewal",
    ctaClass: "bg-white border border-[#c5c6cd] text-[#191c1e] hover:bg-[#f2f4f6] transition-colors shadow-sm",
    dimmed: false,
  },
  {
    status: "Complete",
    statusClass: "bg-[#006c49]/10 text-[#006c49] border-[#006c49]/20",
    borderClass: "border-[#c5c6cd]",
    accentBar: null,
    title: "Code of Business Conduct",
    description:
      "Foundational ethical standards and workplace behavior guidelines for all employees.",
    dueIcon: MdCheckCircle,
    dueIconClass: "text-[#006c49]",
    dueText: "Valid until: Sep 2025",
    dueClass: "text-[#45474c]",
    cta: "View Certificate",
    ctaClass: "text-[#091426] hover:underline bg-transparent px-[8px] py-[4px]",
    dimmed: true,
  },
];

function SideNav() {
  return (
    <nav className="hidden md:flex bg-white h-screen w-64 flex-col border-r border-[#c5c6cd] fixed left-0 top-0 p-[16px] gap-[8px] z-40">
      <div className="mb-[32px] flex items-center gap-[8px]">
        <div className="w-8 h-8 rounded-full bg-[#091426] flex items-center justify-center text-white font-bold">
          A
        </div>
        <div>
          <h1 className="text-[20px] leading-[28px] font-black text-[#091426]">AIGODMODE</h1>
          <p className="text-[12px] leading-[16px] font-semibold text-[#45474c]">
            AI Learning Platform
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={
              active
                ? "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#091426] font-bold bg-[#eceef0] text-[14px] leading-[20px] tracking-[0.01em] scale-95 duration-75 active:scale-100 cursor-pointer active:opacity-80"
                : "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#45474c] hover:text-[#191c1e] hover:bg-[#f2f4f6] transition-all text-[14px] leading-[20px] tracking-[0.01em] font-medium scale-95 duration-75 active:scale-100 cursor-pointer active:opacity-80"
            }
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>

      <div className="mt-auto space-y-1 pt-[16px] border-t border-[#c5c6cd]/30">
        <button className="w-full bg-[#1e293b] text-white py-[8px] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:opacity-90 transition-opacity mb-[16px] shadow-sm">
          Start New Course
        </button>
        <a
          href="#"
          className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#45474c] hover:text-[#191c1e] hover:bg-[#f2f4f6] transition-all text-[14px] leading-[20px] tracking-[0.01em] font-medium"
        >
          <MdSettings />
          Settings
        </a>
        <a
          href="#"
          className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#45474c] hover:text-[#191c1e] hover:bg-[#f2f4f6] transition-all text-[14px] leading-[20px] tracking-[0.01em] font-medium"
        >
          <MdContactSupport />
          Support
        </a>
      </div>
    </nav>
  );
}

function TopNavBar() {
  return (
    <header className="bg-white flex justify-between items-center px-[16px] w-full sticky top-0 z-30 h-16 border-b border-[#c5c6cd]">
      <div className="flex items-center gap-[16px]">
        <button className="md:hidden text-[#45474c] hover:bg-[#f2f4f6] p-[8px] rounded-full transition-colors cursor-pointer active:opacity-80">
          <MdMenu />
        </button>
        <div className="md:hidden">
          <h1 className="text-[20px] leading-[28px] font-bold text-[#091426]">
            AIGODMODE AI Learning
          </h1>
        </div>
        <div className="hidden md:flex items-center bg-[#f2f4f6] rounded-full px-[16px] py-[8px] w-64 focus-within:ring-2 ring-[#091426]">
          <MdSearch className="text-[#45474c] mr-[8px] text-sm" />
          <input
            className="bg-transparent border-none outline-none w-full text-sm text-[14px] leading-[20px] p-0 focus:ring-0"
            placeholder="Search learning..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-[8px]">
        <button className="text-[#45474c] hover:bg-[#f2f4f6] p-[8px] rounded-full transition-colors cursor-pointer active:opacity-80 relative">
          <MdNotifications />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full" />
        </button>
        <button className="text-[#45474c] hover:bg-[#f2f4f6] p-[8px] rounded-full transition-colors cursor-pointer active:opacity-80 hidden md:block">
          <MdHelpOutline />
        </button>
        <div className="w-8 h-8 rounded-full ml-[8px] overflow-hidden border border-[#c5c6cd] shrink-0">
          <img
            alt="User profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZkWB2P954ZpYA-MZABR5Q-sQ4HPqeHxSbH55VVnkYCLM7pceaGx7TWY1XiEugQYxF_bJVXFxWi9PuqYrWSOBNs0H-8_u3q9fBGFuhmKnDcxCe45PCDJrzrgFCIEA7mah9Pi6wSqTgVyCxPyzdO9DmQYV3y-QOnCeKIO8JdTOk53ADv_AtPdU6PcNv-Rx4P2cCfVMF74Cp7bGyVuJhFd_8MpW2YlxEcS_Ea1bHIvxMpL7HCqFUo7szZA"
          />
        </div>
      </div>
    </header>
  );
}

function RenewalBanner() {
  return (
    <div className="bg-[#ffdad6]/20 border border-[#ba1a1a]/30 rounded-xl p-[16px] md:p-[24px] mb-[32px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] shadow-sm">
      <div className="flex items-center gap-[16px]">
        <div className="w-10 h-10 rounded-full bg-[#ba1a1a]/10 flex items-center justify-center shrink-0">
          <MdWarning className="text-[#ba1a1a]" />
        </div>
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e]">
            3 Certifications expiring soon.
          </h2>
          <p className="text-[14px] leading-[20px] text-[#45474c] mt-[4px]">
            Maintain your compliance status by completing these required modules.
          </p>
        </div>
      </div>
      <button className="shrink-0 bg-white border border-[#c5c6cd] px-[16px] py-[8px] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] hover:bg-[#f2f4f6] transition-colors shadow-sm">
        Renew Now
      </button>
    </div>
  );
}

function TrackerCard({
  status,
  statusClass,
  borderClass,
  accentBar,
  title,
  description,
  dueIcon: DueIcon,
  dueIconClass,
  dueText,
  dueClass,
  cta,
  ctaClass,
  dimmed,
}) {
  return (
    <div
      className={`bg-white border ${borderClass} rounded-xl p-[16px] md:p-[24px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group ${
        dimmed ? "hover:border-[#091426]/50 transition-all opacity-80" : ""
      }`}
    >
      {accentBar && <div className={`absolute top-0 left-0 w-1 h-full ${accentBar}`} />}
      <div>
        <div className="flex justify-between items-start mb-[16px]">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] leading-[16px] font-semibold border ${statusClass}`}
          >
            {status}
          </span>
          <MdMoreVert className="text-[#c5c6cd]" />
        </div>
        <h3 className="text-[20px] leading-[28px] font-semibold text-[#191c1e] mb-[4px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[20px] text-[#45474c] line-clamp-2 mb-[16px]">
          {description}
        </p>
      </div>
      <div className="border-t border-[#c5c6cd]/30 pt-[16px] mt-[16px] flex items-center justify-between flex-wrap gap-[8px]">
        <div className={`flex items-center gap-[4px] text-[12px] leading-[16px] font-semibold ${dueClass}`}>
          <DueIcon className={`text-sm ${dueIconClass || ""}`} />
          {dueText}
        </div>
        <button className={`px-[16px] py-[8px] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium ${ctaClass}`}>
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function ComplianceTracker() {
  return (

        <main className="flex-1 p-[16px] md:p-[40px] overflow-y-auto max-w-[1280px] mx-auto w-full">
          <RenewalBanner />

          <div className="mb-[24px]">
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold text-[#091426]">
              Compliance Training Tracker
            </h2>
            <p className="text-[16px] leading-[24px] text-[#45474c] mt-[8px]">
              Manage and track your mandatory regulatory and company policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
            {trackerCards.map((card) => (
              <TrackerCard key={card.title} {...card} />
            ))}
          </div>
        </main>
  );
}