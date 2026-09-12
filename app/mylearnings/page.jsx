"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  MdSchool,
  MdHome,
  MdMenuBook,
  MdVerifiedUser,
  MdGroups,
  MdAssessment,
  MdSearch,
  MdNotifications,
  MdHelpOutline,
  MdAdd,
  MdFilterList,
  MdTimer,
  MdLibraryBooks,
  MdArrowForward,
  MdCheck,
  MdLock,
  MdWorkspacePremium,
  MdChevronRight,
  MdAnalytics,
  MdGavel,
  MdRocketLaunch,
} from "react-icons/md";
/**
 * AIGODMODE AI — Learning Paths
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
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const navItems = [
  { label: "Home", icon: MdHome, active: false },
  { label: "My Learning", icon: MdSchool, active: true },
  { label: "Catalog", icon: MdMenuBook, active: false },
  { label: "Compliance", icon: MdVerifiedUser, active: false },
  { label: "Team", icon: MdGroups, active: false },
  { label: "Reports", icon: MdAssessment, active: false },
];

const progressSteps = [
  {
    state: "done",
    title: "Effective Communication",
    subtitle: "Completed on Oct 12",
  },
  {
    state: "current",
    title: "Conflict Resolution",
    subtitle: "Module 2 of 4",
    percent: 50,
  },
  {
    state: "locked",
    title: "Strategic Planning",
    subtitle: "Prerequisite required",
  },
  {
    state: "locked",
    title: "Team Leadership",
    subtitle: "Prerequisite required",
  },
  {
    state: "locked",
    title: "Final Assessment",
    subtitle: "Unlock certification",
    premium: true,
  },
];

const secondaryPaths = [
  {
    icon: MdAnalytics,
    tileClass: "bg-[#1e293b]",
    pattern: "dots",
    tags: [{ label: "Data", kind: "neutral" }],
    title: "Advanced Data Analytics",
    description:
      "Master complex data manipulation and visualization techniques to drive business intelligence decisions.",
    courses: "8 Courses",
  },
  {
    icon: MdGavel,
    tileClass: "bg-[#545f73]",
    pattern: "gradient",
    tags: [
      { label: "Legal", kind: "neutral" },
      { label: "Required", kind: "required" },
    ],
    title: "Compliance Foundations",
    description:
      "Essential regulatory training covering data privacy, workplace safety, and corporate governance standards.",
    courses: "3 Courses",
  },
  {
    icon: MdRocketLaunch,
    tileClass: "bg-[#2d3133]",
    pattern: "diagonal",
    tags: [{ label: "Strategy", kind: "neutral" }],
    title: "Digital Transformation",
    description:
      "Lead organizational change by integrating digital technologies into all areas of business operations.",
    courses: "6 Courses",
  },
];


function PageHeader() {
  const router = useRouter();

  return (
    <div className="mb-[32px] flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold text-[#091426]">
          Learning Paths
        </h2>
        <p className="text-[16px] leading-[24px] text-[#45474c] mt-2 max-w-2xl">
          Curated multi-course tracks designed to accelerate your career progression and build
          comprehensive skill sets.
        </p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="px-4 py-2 bg-[#1e293b] hover:bg-[#091426] text-white rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-semibold transition-colors shadow-sm flex items-center gap-2"
          onClick={() => router.push("/mylearnings/Create-roadmap")}
        >
          <MdAdd className="text-[18px]" />
          <span>Create Custom Path</span>
        </button>
        <button className="px-4 py-2 bg-white border border-[#c5c6cd] text-[#191c1e] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:bg-[#eceef0] transition-colors shadow-sm flex items-center gap-2">
          <MdFilterList className="text-[18px]" />
          Filters
        </button>
      </div>
    </div>
  );
}

function ProgressStep({ step, isLast }) {
  const { state, title, subtitle, percent, premium } = step;

  return (
    <div className={isLast ? "relative opacity-60" : "relative mb-8 group cursor-pointer"}>
      <div
        className={
          state === "done"
            ? "absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-[#006c49] flex items-center justify-center shadow-sm z-10 border-2 border-[#f7f9fb]"
            : state === "current"
            ? "absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[#091426] flex items-center justify-center shadow-sm z-10"
            : "absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-[#e0e3e5] border-2 border-[#f7f9fb] flex items-center justify-center z-10"
        }
      >
        {state === "done" && <MdCheck className="text-white text-[14px]" />}
        {state === "current" && <div className="w-2 h-2 rounded-full bg-[#091426] animate-pulse" />}
        {state === "locked" && <MdLock className="text-[#45474c] text-[14px]" />}
      </div>

      {state === "current" ? (
        <div className="bg-white p-4 rounded-lg border border-[#091426] shadow-sm relative overflow-hidden transition-all group-hover:shadow-md">
          <h5 className="text-[14px] leading-[20px] tracking-[0.01em] text-[#091426] font-bold mb-1">
            {title}
          </h5>
          <p className="text-[14px] leading-[20px] text-[#45474c] mb-3">{subtitle}</p>
          <div className="w-full h-2 bg-[#e0e3e5] rounded-full overflow-hidden">
            <div className="h-full bg-[#091426] rounded-full" style={{ width: `${percent}%` }} />
          </div>
        </div>
      ) : state === "done" ? (
        <div className="bg-white p-3 rounded-lg border border-[#006c49]/30 shadow-sm transition-all group-hover:border-[#006c49]/60 group-hover:shadow-md">
          <h5 className="text-[14px] leading-[20px] tracking-[0.01em] text-[#091426] font-bold">
            {title}
          </h5>
          <p className="text-[14px] leading-[20px] text-[#45474c]">{subtitle}</p>
        </div>
      ) : (
        <div className="bg-white p-3 rounded-lg border border-[#c5c6cd] border-dashed">
          <h5 className="text-[14px] leading-[20px] tracking-[0.01em] text-[#45474c] font-medium flex items-center gap-1">
            {premium && <MdWorkspacePremium className="text-[16px]" />}
            {title}
          </h5>
          <p className="text-[14px] leading-[20px] text-[#75777d]">{subtitle}</p>
        </div>
      )}
    </div>
  );
}

function FeaturedPathHero() {
  return (
    <section className="mb-[48px] bg-white rounded-xl border border-[#c5c6cd] shadow-sm overflow-hidden flex flex-col lg:flex-row relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8e3fb] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none" />

      <div className="p-[24px] md:p-[32px] flex-1 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-[#c5c6cd]">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 bg-[#6cf8bb] text-[#00714d] rounded-full text-[12px] leading-[16px] uppercase tracking-wider font-bold">
            Featured Track
          </span>
          <span className="px-2 py-1 bg-[#eceef0] text-[#45474c] rounded-full text-[12px] leading-[16px] border border-[#c5c6cd]">
            Management
          </span>
        </div>
        <h3 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#091426] mb-3">
          New Manager Excellence Track
        </h3>
        <p className="text-[16px] leading-[24px] text-[#45474c] mb-6 flex-1">
          Transition from individual contributor to an effective leader. This comprehensive path
          covers essential communication frameworks, strategic team planning, and conflict
          resolution techniques crucial for first-time managers.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center text-[#45474c] text-[14px] leading-[20px] tracking-[0.01em] font-medium">
            <MdTimer className="text-[18px] mr-1" />
            15h 30m Total
          </div>
          <div className="flex items-center text-[#45474c] text-[14px] leading-[20px] tracking-[0.01em] font-medium">
            <MdLibraryBooks className="text-[18px] mr-1" />5 Courses
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#1e293b] text-white rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-semibold hover:bg-[#091426] transition-colors shadow-sm flex items-center gap-2">
            Resume Path
            <MdArrowForward className="text-[18px]" />
          </button>
          <button className="px-4 py-3 bg-white border border-[#c5c6cd] text-[#191c1e] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:bg-[#eceef0] transition-colors shadow-sm">
            View Details
          </button>
        </div>
      </div>

      <div className="p-[24px] md:p-[32px] flex-1 bg-[#f7f9fb] relative">
        <h4 className="text-[20px] leading-[28px] font-semibold text-[#091426] mb-6 flex justify-between items-center">
          Path Progress
          <span className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#006c49] bg-[#006c49]/10 px-2 py-1 rounded-md">
            20% Complete
          </span>
        </h4>
        <div className="relative pl-6 pb-4">
          <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-[#c5c6cd]/30" />
          <div className="absolute left-[11px] top-4 h-[25%] w-0.5 bg-[#006c49]" />
          {progressSteps.map((step, i) => (
            <ProgressStep key={step.title} step={step} isLast={i === progressSteps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TilePattern({ pattern }) {
  if (pattern === "dots") {
    return (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
    );
  }
  if (pattern === "gradient") {
    return (
      <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-[#f7f9fb] to-transparent" />
    );
  }
  return (
    <div
      className="absolute w-full h-full opacity-30"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)",
      }}
    />
  );
}

function PathCard({ icon: Icon, tileClass, pattern, tags, title, description, courses }) {
  return (
    <div className="bg-white rounded-xl border border-[#c5c6cd] shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col group cursor-pointer">
      <div className={`h-32 relative overflow-hidden flex items-center justify-center ${tileClass}`}>
        <TilePattern pattern={pattern} />
        <Icon className="text-[48px] text-white opacity-80 relative" />
      </div>
      <div className="p-[24px] flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={
                tag.kind === "required"
                  ? "px-2 py-0.5 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-md text-[12px] leading-[16px] font-semibold"
                  : "px-2 py-0.5 bg-[#eceef0] text-[#45474c] rounded-md text-[12px] leading-[16px] border border-[#c5c6cd]"
              }
            >
              {tag.label}
            </span>
          ))}
        </div>
        <h4 className="text-[20px] leading-[28px] font-semibold text-[#091426] mb-2 group-hover:text-[#1e293b] transition-colors">
          {title}
        </h4>
        <p className="text-[14px] leading-[20px] text-[#45474c] mb-4 flex-1 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#c5c6cd]">
          <div className="flex items-center text-[#45474c] text-[12px] leading-[16px]">
            <MdLibraryBooks className="text-[16px] mr-1" />
            {courses}
          </div>
          <button className="text-[#091426] text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:underline">
            Start Path
          </button>
        </div>
      </div>
    </div>
  );
}

function SecondaryPathsGrid() {
  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#091426]">
          Explore More Paths
        </h3>
        <a
          className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#091426] hover:underline flex items-center"
          href="#"
        >
          View all <MdChevronRight className="text-[18px] ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[32px]">
        {secondaryPaths.map((path) => (
          <PathCard key={path.title} {...path} />
        ))}
      </div>
    </>
  );
}


export default function LearningPaths() {
  return (
        <main className="flex-1 mt-16 p-[16px] md:p-[40px] overflow-y-auto max-w-[1280px] mx-auto w-full">
          <PageHeader />
          <FeaturedPathHero />
          <SecondaryPathsGrid />
        </main>
  );
}