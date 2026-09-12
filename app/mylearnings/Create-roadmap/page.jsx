"use client";
import React, { useState } from "react";
import {
  MdAccountTree,
  MdHome,
  MdSchool,
  MdGridView,
  MdVerifiedUser,
  MdGroup,
  MdInsights,
  MdPerson,
  MdSearch,
  MdNotifications,
  MdSettings,
  MdTune,
  MdAdd,
  MdCheck,
  MdStar,
  MdSchedule,
  MdEdit,
  MdDragIndicator,
  MdDelete,
  MdFlag,
} from "react-icons/md";

/**
 * L&D Platform — Build Custom Path
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents).
 *
 * The original mock used vanilla JS to toggle each "add course" button
 * between add/check — that's reimplemented here as React state
 * (`addedCourseIds`) instead of direct DOM manipulation.
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value / arbitrary-variant classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
 */

const scrollbarHideClasses =
  "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

const customScrollbarClasses =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent " +
  "[&::-webkit-scrollbar-thumb]:bg-[#75777d]/20 [&::-webkit-scrollbar-thumb]:rounded-full";

const navItems = [
  { label: "Home", icon: MdHome, active: false },
  { label: "My Learning", icon: MdSchool, active: true },
  { label: "Catalog", icon: MdGridView, active: false },
  { label: "Compliance", icon: MdVerifiedUser, active: false },
  { label: "Team", icon: MdGroup, active: false },
  { label: "Reports", icon: MdInsights, active: false },
];

const filterChips = ["All", "AI & ML", "Data Science", "Leadership"];

const courseLibrary = [
  {
    id: "c1",
    level: "Beginner",
    levelClass: "bg-[#6cf8bb]/20 text-[#00714d]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR-w337pjRKWq_yiXUFCH2IHA9esIhulLN_7OT0qEKcxDVyLO_GQUYZDakUHjZUDMf9I0kZr1Sv9LUfBOMAzWke3o3Ga_fVAjyPYDsy3I_d3v8nEZXttqUNLRCxELGOBx4XAZ8Sa2TPM8ldrZq879qhCyBprCwQy8FHWA59UYpjPRPoM6F8SBJcDIBYMmMZVrgMogbtBqjppYlxu89qbAJfIjrkflLsIX0Yb6JSHt3LmzrSHLH0E4Klw",
    alt: "Abstract 3D rendering of interconnected neural network nodes glowing with blue and purple light on a dark background, representing artificial intelligence fundamentals. Professional corporate aesthetic.",
    title: "AI Fundamentals",
    description:
      "Understand the core concepts of machine learning, neural networks, and generative AI.",
    duration: "2h 30m",
    rating: "4.8",
  },
  {
    id: "c2",
    level: "Intermediate",
    levelClass: "bg-[#3c2300]/20 text-[#c88000]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxndUX2QaixFPr8_TTPAjx7U4isWkK8z6FWhnVvDwHWSrn2UwmNeRB_8DukMd0fol1ps0udEnZ8ZznG-MZpAceORdMv5vjtb8jThB4Y1otTdNGb33GTBpVALaDdFZ3PqEXLvCm82zl7Lw8SIb92iNLxttTVrR9emfrAFQNC-QNueQ7k51_NqsQk3ctY5pso31PZpMvnrScd38GTmfm8iMf2v3HvJQhz1-Fwijw95V9Xpnms6L27B05bg",
    alt: "Clean, modern graphic visualization of natural language processing, showing text parsing into data arrays. Minimalist, tech-forward, utilizing brand indigo and teal.",
    title: "Applied Prompt Engineering",
    description:
      "Techniques for structuring prompts to optimize LLM outputs for business applications.",
    duration: "4h 15m",
    rating: null,
  },
  {
    id: "c3",
    level: "Advanced",
    levelClass: "bg-[#ffdad6]/20 text-[#ba1a1a]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD04ahKIqwAKemk-X-PR71ZVOfya2AAKWt06Igj2dyj4skXSPLcH9SZHl8kvXl7bnMeBv0E-THjUVgmLcWpdOEXKFYphtEgVBCKVjiwmw1Hu5ZpLXdVOmja4bw6px8fWNykqD_AXk47MoDfr6tGw2kvqu7honEkEjYb14_Wa5YdXoiB8QCbah1Got0q7MtN8MMrOk57heCoYZuPfJWlAFHSrNs6n2I0YiIfvBmee511TPi5HukjwOcC6Q",
    alt: "Architectural diagram of a software system integrating retrieval augmented generation (RAG). Blueprint style, precise lines, deep navy background with crisp white data flows.",
    title: "RAG Architecture Design",
    description: "Build enterprise-grade Retrieval-Augmented Generation systems.",
    duration: "6h 00m",
    rating: null,
  },
];

const pathItems = [
  { number: 1, title: "AI Fundamentals", duration: "2h 30m", active: true },
  { number: 2, title: "RAG Architecture Design", duration: "6h 00m", active: false },
];

function SideNav() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-[#f2f4f6] z-50 flex flex-col border-r border-[#c5c6cd]/30">
      <div className="px-[32px] py-[24px] flex items-center gap-[8px] mb-[32px]">
        <div className="w-8 h-8 bg-[#091426] rounded-lg flex items-center justify-center">
          <MdAccountTree className="text-white text-[20px]" />
        </div>
        <span className="text-[20px] leading-[28px] font-semibold text-[#091426] tracking-tight">
          L&amp;D Platform
        </span>
      </div>

      <nav className="flex-1 px-[16px] space-y-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "flex items-center px-[24px] py-[16px] rounded-xl transition-all group bg-[#1e293b] text-[#8590a6] font-semibold"
                : "flex items-center px-[24px] py-[16px] rounded-xl text-[#45474c] hover:bg-[#e6e8ea] hover:text-[#191c1e] transition-all group"
            }
          >
            <Icon className="mr-[24px]" />
            <span className="text-[14px] leading-[20px] tracking-[0.01em] font-medium">
              {label}
            </span>
          </a>
        ))}
      </nav>

      <div className="px-[32px] py-[24px] border-t border-[#c5c6cd]/30">
        <div className="flex items-center gap-[16px]">
          <div className="w-8 h-8 rounded-full bg-[#091426] flex items-center justify-center">
            <MdPerson className="text-white text-[18px]" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#191c1e] truncate">
              Alex Johnson
            </p>
            <p className="text-[12px] leading-[16px] font-semibold text-[#45474c] truncate">
              Lead Engineer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-[#f7f9fb]/80 backdrop-blur-xl border-b border-[#c5c6cd]/20 z-40 flex items-center justify-between px-[32px]">
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <MdSearch className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#45474c] text-[20px]" />
          <input
            className="w-full bg-[#eceef0] px-[48px] py-[8px] rounded-full text-[14px] leading-[20px] outline-none focus:ring-2 focus:ring-[#091426]/20 transition-all"
            placeholder="Search courses, tracks, or resources..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-[24px] ml-[32px]">
        <button className="p-[8px] rounded-full hover:bg-[#e6e8ea] text-[#45474c] relative">
          <MdNotifications />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ba1a1a] rounded-full" />
        </button>
        <button className="p-[8px] rounded-full hover:bg-[#e6e8ea] text-[#45474c]">
          <MdSettings />
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="px-[32px] py-[24px] flex justify-between items-end border-b border-[#c5c6cd]/30 pb-[24px] mb-[24px]">
      <div>
        <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#191c1e]">
          Build Custom Path
        </h1>
        <p className="text-[18px] leading-[28px] text-[#45474c] mt-[8px]">
          Curate a targeted sequence of courses to achieve a specific learning objective.
        </p>
      </div>
      <div className="flex gap-[16px]">
        <button className="px-[24px] py-[8px] rounded-full border border-[#c5c6cd] text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] hover:bg-[#eceef0] transition-colors">
          Discard
        </button>
        <button className="px-[24px] py-[8px] rounded-full bg-[#091426] text-white text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:opacity-90 transition-opacity shadow-md">
          Publish Path
        </button>
      </div>
    </div>
  );
}

function CourseLibrary({ addedCourseIds, onToggleCourse }) {
  return (
    <div className="w-1/2 flex flex-col h-full bg-[#f2f4f6] rounded-xl border border-[#c5c6cd]/20 shadow-sm overflow-hidden">
      <div className="p-[24px] bg-[#f7f9fb] border-b border-[#c5c6cd]/20 shadow-sm z-10">
        <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e] mb-[16px]">
          Course Library
        </h2>
        <div className="relative group mb-[16px]">
          <MdSearch className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#45474c]" />
          <input
            className="w-full bg-[#e6e8ea] pl-[32px] pr-[16px] py-[8px] rounded-lg text-[16px] leading-[24px] text-[#191c1e] outline-none focus:ring-2 focus:ring-[#091426]/30 transition-all border border-[#c5c6cd]/30"
            placeholder="Search for courses, skills, or authors..."
            type="text"
          />
        </div>
        <div className={`flex gap-[8px] overflow-x-auto pb-[8px] ${scrollbarHideClasses}`}>
          {filterChips.map((chip, i) => (
            <button
              key={chip}
              className={
                i === 0
                  ? "whitespace-nowrap px-[16px] py-[4px] rounded-full bg-[#1e293b] text-[#8590a6] text-[12px] leading-[16px] font-semibold shadow-sm"
                  : "whitespace-nowrap px-[16px] py-[4px] rounded-full bg-[#e0e3e5] text-[#45474c] text-[12px] leading-[16px] font-semibold hover:bg-[#e6e8ea] transition-colors"
              }
            >
              {chip}
            </button>
          ))}
          <button className="whitespace-nowrap px-[16px] py-[4px] rounded-full border border-[#c5c6cd] text-[#45474c] text-[12px] leading-[16px] font-semibold hover:bg-[#eceef0] transition-colors flex items-center gap-[4px]">
            <MdTune className="text-[16px]" /> Filters
          </button>
        </div>
      </div>

      <div className={`flex-1 overflow-y-auto p-[24px] space-y-[16px] ${customScrollbarClasses}`}>
        {courseLibrary.map((course) => {
          const added = addedCourseIds.has(course.id);
          return (
            <div
              key={course.id}
              className="group bg-[#f7f9fb] rounded-lg p-[16px] border border-[#c5c6cd]/30 shadow-sm hover:shadow-md transition-all flex gap-[16px] items-start"
            >
              <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0 bg-[#e6e8ea] relative">
                <img className="w-full h-full object-cover" alt={course.alt} src={course.image} />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-[4px]">
                  <span
                    className={`px-[4px] py-[2px] rounded text-[10px] font-semibold uppercase tracking-wider ${course.levelClass}`}
                  >
                    {course.level}
                  </span>
                  <button
                    onClick={() => onToggleCourse(course.id)}
                    className={
                      added
                        ? "bg-[#6cf8bb] text-[#00714d] rounded-full p-[4px] transition-transform"
                        : "text-[#091426] hover:bg-[#1e293b] hover:text-[#8590a6] rounded-full p-[4px] transition-colors"
                    }
                    style={added ? { transform: "scale(1.1)" } : undefined}
                  >
                    {added ? (
                      <MdCheck className="text-[20px]" />
                    ) : (
                      <MdAdd className="text-[20px]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[16px] leading-[24px] font-semibold text-[#191c1e] truncate">
                  {course.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-[#45474c] line-clamp-2 mt-[4px]">
                  {course.description}
                </p>
                <div className="flex items-center gap-[16px] mt-[8px]">
                  <div className="flex items-center gap-[4px] text-[#45474c]">
                    <MdSchedule className="text-[14px]" />
                    <span className="text-[12px] leading-[16px] font-normal">
                      {course.duration}
                    </span>
                  </div>
                  {course.rating && (
                    <div className="flex items-center gap-[4px] text-[#45474c]">
                      <MdStar className="text-[14px]" />
                      <span className="text-[12px] leading-[16px] font-normal">
                        {course.rating}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PathBuilder() {
  return (
    <div className="w-1/2 flex flex-col h-full bg-[#f7f9fb] rounded-xl border border-[#c5c6cd]/30 shadow-md relative overflow-hidden">
      <div className="p-[32px] bg-white border-b border-[#c5c6cd]/20 z-10 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#091426]/5 rounded-bl-full blur-3xl -z-10" />

        <div className="group mb-[16px] relative">
          <label className="text-[12px] leading-[16px] font-semibold text-[#45474c] absolute -top-2 left-3 bg-white px-1 z-10 transition-all">
            Path Name
          </label>
          <input
            className="w-full bg-transparent border border-[#c5c6cd] rounded-lg px-[16px] py-[8px] text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#191c1e] focus:border-[#091426] focus:ring-1 focus:ring-[#091426] outline-none transition-all hover:bg-[#f2f4f6]"
            type="text"
            defaultValue="AI Product Strategy"
          />
          <MdEdit className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#75777d] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        <div className="group relative">
          <label className="text-[12px] leading-[16px] font-semibold text-[#45474c] absolute -top-2 left-3 bg-white px-1 z-10 transition-all">
            Primary Goal
          </label>
          <textarea
            className="w-full bg-transparent border border-[#c5c6cd] rounded-lg px-[16px] py-[8px] text-[16px] leading-[24px] text-[#191c1e] focus:border-[#091426] focus:ring-1 focus:ring-[#091426] outline-none transition-all hover:bg-[#f2f4f6] resize-none"
            rows={2}
            defaultValue="Master RAG Implementation and apply it to internal data workflows."
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-[32px] bg-[#f7f9fb]/50 relative">
        <div className="space-y-0 relative before:absolute before:inset-y-0 before:left-[27px] before:w-0.5 before:bg-[#c5c6cd]/40 before:z-0">
          {/* Item 1 */}
          <div className="relative z-10 flex gap-[16px] group items-start pb-[32px]">
            <div className="flex flex-col items-center mt-2 cursor-grab active:cursor-grabbing">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#091426] flex items-center justify-center text-[#091426] shadow-sm hover:bg-[#1e293b] transition-colors">
                <span className="text-[14px] leading-[20px] tracking-[0.01em] font-bold">
                  {pathItems[0].number}
                </span>
              </div>
            </div>
            <div className="flex-1 bg-white border border-[#c5c6cd]/30 rounded-xl p-[16px] shadow-sm group-hover:shadow-md transition-shadow relative">
              <div className="absolute left-0 top-1/2 -translate-x-full w-4 h-0.5 bg-[#c5c6cd]/40 hidden md:block" />
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#45474c] tracking-wider bg-[#eceef0] px-2 py-1 rounded">
                    Course
                  </span>
                  <h4 className="text-[16px] leading-[24px] font-semibold text-[#191c1e] mt-[4px]">
                    {pathItems[0].title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-[#45474c] mt-1">
                    {pathItems[0].duration}
                  </p>
                </div>
                <div className="flex items-center gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-[8px] text-[#75777d] hover:text-[#191c1e] transition-colors rounded-full hover:bg-[#eceef0]">
                    <MdDragIndicator className="text-[20px]" />
                  </button>
                  <button className="p-[8px] text-[#75777d] hover:text-[#ba1a1a] transition-colors rounded-full hover:bg-[#ffdad6]/50">
                    <MdDelete className="text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Divider */}
          <div className="relative z-10 flex gap-[16px] items-center py-[8px] -mt-[24px] mb-[16px] group pl-2">
            <div className="w-8 h-8 rounded-full bg-[#6cf8bb] flex items-center justify-center text-[#00714d] shadow-sm border border-[#6cf8bb]/50 ml-1">
              <MdFlag className="text-[16px]" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#6cf8bb] via-transparent to-transparent" />
            <div className="absolute left-14 bg-white px-3 py-1 rounded-full border border-[#6cf8bb]/50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-[4px] cursor-pointer hover:bg-[#6cf8bb]/10 text-[#00714d] text-[12px] leading-[16px] font-semibold">
              <MdEdit className="text-[14px]" /> Edit Milestone
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative z-10 flex gap-[16px] group items-start pb-[32px]">
            <div className="flex flex-col items-center mt-2 cursor-grab active:cursor-grabbing">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#c5c6cd] flex items-center justify-center text-[#45474c] shadow-sm hover:border-[#091426] hover:text-[#091426] transition-colors">
                <span className="text-[14px] leading-[20px] tracking-[0.01em] font-bold">
                  {pathItems[1].number}
                </span>
              </div>
            </div>
            <div className="flex-1 bg-white border border-[#c5c6cd]/30 rounded-xl p-[16px] shadow-sm group-hover:shadow-md transition-shadow relative">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#45474c] tracking-wider bg-[#eceef0] px-2 py-1 rounded">
                    Course
                  </span>
                  <h4 className="text-[16px] leading-[24px] font-semibold text-[#191c1e] mt-[4px]">
                    {pathItems[1].title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-[#45474c] mt-1">
                    {pathItems[1].duration}
                  </p>
                </div>
                <div className="flex items-center gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-[8px] text-[#75777d] hover:text-[#191c1e] transition-colors rounded-full hover:bg-[#eceef0]">
                    <MdDragIndicator className="text-[20px]" />
                  </button>
                  <button className="p-[8px] text-[#75777d] hover:text-[#ba1a1a] transition-colors rounded-full hover:bg-[#ffdad6]/50">
                    <MdDelete className="text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add milestone button zone */}
          <div className="relative z-10 flex justify-center -mt-6 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="bg-white border border-[#c5c6cd] rounded-full px-3 py-1 flex items-center gap-1 text-[#45474c] text-[12px] leading-[16px] font-semibold shadow-sm hover:bg-[#eceef0] hover:text-[#091426] hover:border-[#091426]/50 transition-all">
              <MdAdd className="text-[14px]" /> Set Milestone
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Summary */}
      <div className="bg-white border-t border-[#c5c6cd]/30 p-[32px] flex justify-between items-center shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] z-20">
        <div>
          <p className="text-[12px] leading-[16px] font-semibold text-[#45474c] uppercase tracking-wider mb-[4px]">
            Path Summary
          </p>
          <div className="flex items-center gap-[32px]">
            <div>
              <span className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#191c1e] block leading-tight">
                {pathItems.length}
              </span>
              <span className="text-[12px] leading-[16px] font-semibold text-[#45474c]">
                Courses
              </span>
            </div>
            <div className="w-px h-8 bg-[#c5c6cd]/50" />
            <div>
              <span className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#191c1e] block leading-tight">
                8.5h
              </span>
              <span className="text-[12px] leading-[16px] font-semibold text-[#45474c]">
                Est. Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildCustomPath() {
  const [addedCourseIds, setAddedCourseIds] = useState(() => new Set());

  const handleToggleCourse = (id) => {
    setAddedCourseIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    
        <main className="pt-16 min-h-screen">
          <div className="flex flex-col w-full h-full max-w-[1280px] mx-auto">
            <PageHeader />

            <div className="flex flex-1 overflow-hidden h-[calc(100vh-200px)] px-[32px] gap-[32px]">
              <CourseLibrary addedCourseIds={addedCourseIds} onToggleCourse={handleToggleCourse} />
              <PathBuilder />
            </div>
          </div>
        </main>
      
  );
}