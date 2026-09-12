"use client";
import React from "react";
import {
  MdSearch,
  MdNotifications,
  MdHelpOutline,
  MdHome,
  MdSchool,
  MdMenuBook,
  MdGavel,
  MdGroup,
  MdAnalytics,
  MdRocketLaunch,
  MdCreditCard,
  MdRoute,
  MdBuild,
  MdVerified,
  MdLocalFireDepartment,
  MdSupportAgent,
  MdConfirmationNumber,
  MdChat,
  MdDescription,
  MdCheckCircle,
} from "react-icons/md";

/**
 * AIGODMODE AI Learning — Help Center
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents). Note: the original
 * "edit_document" icon has no exact react-icons/md match, substituted with
 * MdDescription.
 *
 * The original mock's header was `fixed ... left-64` unconditionally (no
 * responsive left-0 fallback), even though the side nav itself is hidden
 * below `md`. That's preserved as-is here for fidelity — on small screens
 * the header will appear to start 256px from the left, same as the source.
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const navItems = [
  { label: "Home", icon: MdHome },
  { label: "My Learning", icon: MdSchool },
  { label: "Catalog", icon: MdMenuBook },
  { label: "Compliance", icon: MdGavel },
  { label: "Team", icon: MdGroup },
  { label: "Reports", icon: MdAnalytics },
];

const categories = [
  {
    icon: MdRocketLaunch,
    title: "Getting Started",
    description: "Basics, onboarding, and platform navigation.",
  },
  {
    icon: MdCreditCard,
    title: "Account & Billing",
    description: "Manage your subscription, invoices, and profile.",
  },
  {
    icon: MdRoute,
    title: "Learning Paths",
    description: "Course assignments, progress, and curricula.",
  },
  {
    icon: MdBuild,
    title: "Technical Support",
    description: "Troubleshooting, integrations, and system requirements.",
  },
  {
    icon: MdVerified,
    title: "Compliance & Certs",
    description: "Certification rules, deadlines, and audit logs.",
  },
];

const popularArticles = [
  {
    title: "How to reset your password",
    description: "Step-by-step guide to recovering account access.",
  },
  {
    title: "Assigning learning paths to new hires",
    description: "Learn how to use the Team dashboard for bulk assignments.",
  },
  {
    title: "Understanding compliance reporting metrics",
    description: "A breakdown of the data available in the Reports section.",
  },
];

function TopAppBar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white/80 backdrop-blur-md border-b border-[#c5c6cd] flex items-center justify-between px-[24px] z-20">
      <div className="flex-1 flex items-center gap-4">
        <span className="text-[20px] leading-[28px] font-bold text-[#091426]">
          AIGODMODE AI Learning
        </span>
        <div className="relative w-64 hidden lg:block">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#75777d] text-sm" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-[#eceef0] rounded-full border-none focus:ring-2 focus:ring-[#091426] text-[14px] leading-[20px] text-[#191c1e] transition-all duration-200"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-[#45474c] hover:bg-[#eceef0] rounded-full transition-all duration-200">
          <MdNotifications />
        </button>
        <button className="p-2 text-[#45474c] hover:bg-[#eceef0] rounded-full transition-all duration-200">
          <MdHelpOutline />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white overflow-hidden ml-4">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhCm2v6EahIli9r8fpYNWjUfHguVZYSquOAOf685ow7jVLUPLv1nc0lfEanze_T0Hhu_9F7krIh29yZ11zU40QlyQyYCenTdfvKO08H5a8sSpau1oifLuNillpFxWy1eYaBmZ669gabtrvY_w1p1gNhC-cdAR1QDOta_VhyAjw1hypJMOlKjpp0W2TKj9mW1IubYs4WegGkcvFz8UZceLL0UKcsF8_zD5lZpKclxcP0yZeAZec41vL5g"
          />
        </div>
      </div>
    </header>
  );
}

function SideNav() {
  return (
    <nav className="h-screen w-64 fixed left-0 top-0 bg-white border-r border-[#c5c6cd] flex-col py-[24px] px-[16px] z-30 transition-all duration-200 ease-in-out md:flex hidden">
      <div className="flex items-center gap-3 mb-[32px] px-2">
        <div className="w-10 h-10 rounded-lg bg-[#091426] flex items-center justify-center text-white">
          <span className="text-[20px] leading-[28px] font-bold">AI</span>
        </div>
        <div>
          <div className="text-[20px] leading-[28px] font-bold text-[#091426]">AIGODMODE</div>
          <div className="text-[12px] leading-[16px] font-semibold text-[#45474c]">
            AI Learning
          </div>
        </div>
      </div>

      <ul className="flex-1 space-y-2">
        {navItems.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#45474c] hover:bg-[#eceef0] hover:text-[#091426] transition-colors duration-200 ease-in-out text-[14px] leading-[20px] tracking-[0.01em] font-medium"
            >
              <Icon />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeroSearch() {
  return (
    <section className="bg-[#091426] text-white py-[48px] px-[16px] md:px-[40px] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold mb-[24px]">
          How can we help you today?
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5c6cd] text-xl" />
          <input
            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white text-[#191c1e] text-[18px] leading-[28px] border-2 border-transparent focus:border-[#006c49] focus:ring-0 shadow-lg transition-all"
            placeholder="Search for articles, guides, or troubleshooting..."
            type="text"
          />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ icon: Icon, title, description }) {
  return (
    <a
      href="#"
      className="group block p-[24px] bg-white border border-[#c5c6cd] rounded-xl hover:border-[#091426] hover:shadow-md transition-all duration-200"
    >
      <div className="w-12 h-12 rounded-full bg-[#d8e3fb] flex items-center justify-center text-[#091426] mb-[16px] group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <h3 className="text-[20px] leading-[28px] font-semibold mb-[8px] text-[#191c1e]">
        {title}
      </h3>
      <p className="text-[14px] leading-[20px] text-[#45474c]">{description}</p>
    </a>
  );
}

function Categories() {
  return (
    <div>
      <h2 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold mb-[24px]">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
}

function PopularArticles() {
  return (
    <div>
      <h2 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold mb-[24px] flex items-center gap-2">
        <MdLocalFireDepartment className="text-[#091426]" />
        Popular Articles
      </h2>
      <div className="bg-white border border-[#c5c6cd] rounded-xl overflow-hidden">
        <ul className="divide-y divide-[#c5c6cd]">
          {popularArticles.map((article) => (
            <li key={article.title}>
              <a
                href="#"
                className="block p-[24px] hover:bg-[#f7f9fb] transition-colors"
              >
                <h4 className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#091426] mb-1">
                  {article.title}
                </h4>
                <p className="text-[14px] leading-[20px] text-[#45474c]">
                  {article.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="bg-white border border-[#c5c6cd] rounded-xl p-[24px] shadow-sm">
      <h3 className="text-[20px] leading-[28px] font-semibold mb-[16px]">Need more help?</h3>
      <div className="space-y-[16px] mb-[24px]">
        <div className="flex items-start gap-3">
          <MdSupportAgent className="text-[#006c49] mt-1" />
          <div>
            <div className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e]">
              Live Chat
            </div>
            <div className="text-[14px] leading-[20px] text-[#45474c]">
              Available: 9am - 5pm EST
            </div>
            <div className="text-[12px] leading-[16px] font-semibold text-[#006c49] flex items-center gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-[#006c49]" /> Online Now
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MdConfirmationNumber className="text-[#75777d] mt-1" />
          <div>
            <div className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e]">
              Ticket Status
            </div>
            <div className="text-[14px] leading-[20px] text-[#45474c]">
              Typical response: &lt; 24 hrs
            </div>
          </div>
        </div>
      </div>
      <button className="w-full bg-[#091426] text-white text-[14px] leading-[20px] tracking-[0.01em] font-medium py-3 px-4 rounded-lg hover:bg-[#091426]/90 transition-colors flex items-center justify-center gap-2">
        <MdChat />
        Start Live Chat
      </button>
      <button className="w-full mt-3 bg-white text-[#091426] border border-[#c5c6cd] text-[14px] leading-[20px] tracking-[0.01em] font-medium py-3 px-4 rounded-lg hover:bg-[#f7f9fb] transition-colors flex items-center justify-center gap-2">
        <MdDescription />
        Submit a Ticket
      </button>
    </div>
  );
}

function SystemStatusCard() {
  return (
    <div className="bg-white border border-[#c5c6cd] rounded-xl p-[24px] flex items-center justify-between">
      <div>
        <div className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e]">
          System Status
        </div>
        <div className="text-[14px] leading-[20px] text-[#45474c]">All systems operational</div>
      </div>
      <MdCheckCircle className="text-[#006c49] text-2xl" />
    </div>
  );
}

export default function HelpCenter() {
  return (

      <main className="ml-0 md:ml-64 pt-16 min-h-screen">
        <HeroSearch />

        <div className="max-w-7xl mx-auto px-[16px] md:px-[40px] py-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
            <div className="lg:col-span-8 space-y-[32px]">
              <Categories />
              <PopularArticles />
            </div>

            <div className="lg:col-span-4 space-y-[24px]">
              <SupportCard />
              <SystemStatusCard />
            </div>
          </div>
        </div>
      </main>
  );
}