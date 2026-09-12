import React from "react";
import {
  MdHome,
  MdMenuBook,
  MdLibraryBooks,
  MdVerifiedUser,
  MdGroups,
  MdAnalytics,
  MdSearch,
  MdNotifications,
  MdArrowDropDown,
  MdPictureAsPdf,
  MdDescription,
  MdDownload,
  MdSlideshow,
  MdCoPresent,
  MdTableView,
  MdTableChart,
  MdArticle,
} from "react-icons/md";

/**
 * AIGODMODE — Resource Library
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents). Note: the original
 * "table" icon has no exact react-icons/md match, substituted with
 * MdTableChart.
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const navItems = [
  { label: "Home", icon: MdHome, active: false },
  { label: "My Learning", icon: MdMenuBook, active: false },
  { label: "Catalog", icon: MdLibraryBooks, active: true },
  { label: "Compliance", icon: MdVerifiedUser, active: false },
  { label: "Team", icon: MdGroups, active: false },
  { label: "Reports", icon: MdAnalytics, active: false },
];

const resourceCategories = [
  {
    title: "PDF Guides",
    icon: MdPictureAsPdf,
    iconWrapClass: "bg-[#ffdad6] text-[#93000a]",
    colSpan: "lg:col-span-2",
    items: [
      {
        icon: MdDescription,
        iconClass: "text-[#ba1a1a]",
        name: "Anatomy of a Perfect Prompt.pdf",
        meta: "2.4 MB • Added Oct 12, 2023",
      },
      {
        icon: MdDescription,
        iconClass: "text-[#ba1a1a]",
        name: "AI Ethics Guidelines.pdf",
        meta: "1.1 MB • Added Oct 15, 2023",
      },
    ],
  },
  {
    title: "Slide Decks",
    icon: MdSlideshow,
    iconWrapClass: "bg-[#ffb95f]/20 text-[#c88000]",
    colSpan: "",
    items: [
      {
        icon: MdCoPresent,
        iconClass: "text-[#c88000]",
        name: "Course Slides - Module 1.pptx",
        meta: "15.2 MB • Added Oct 10, 2023",
      },
      {
        icon: MdCoPresent,
        iconClass: "text-[#c88000]",
        name: "Workshop Presentation.pptx",
        meta: "8.7 MB • Added Sep 28, 2023",
      },
    ],
  },
  {
    title: "Templates",
    icon: MdTableView,
    iconWrapClass: "bg-[#6cf8bb]/30 text-[#00714d]",
    colSpan: "",
    items: [
      {
        icon: MdTableChart,
        iconClass: "text-[#00714d]",
        name: "Prompt Engineering Tracker.xlsx",
        meta: "450 KB • Added Oct 11, 2023",
      },
      {
        icon: MdArticle,
        iconClass: "text-[#1e293b]",
        name: "Workflow Integration Doc.docx",
        meta: "1.2 MB • Added Oct 05, 2023",
      },
    ],
  },
];

function SideNav() {
  return (
    <nav className="hidden md:flex flex-col h-screen w-64 bg-white border-r border-[#c5c6cd] p-[16px] gap-[8px] shrink-0 shadow-sm z-20">
      <div className="mb-[32px] px-[8px]">
        <h1 className="text-[20px] leading-[28px] font-black text-[#091426]">AIGODMODE</h1>
        <p className="text-[14px] leading-[20px] text-[#45474c] mt-[4px]">Learning Portal</p>
      </div>

      <div className="flex flex-col gap-[4px] flex-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={
              active
                ? "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg bg-[#1e293b] text-[#8590a6] font-semibold transition-all duration-200 ease-in-out text-[14px] leading-[20px] tracking-[0.01em]"
                : "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#45474c] hover:bg-[#e6e8ea] transition-all duration-200 ease-in-out text-[14px] leading-[20px] tracking-[0.01em] font-medium"
            }
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>

      <div className="mt-auto">
        <button className="w-full bg-[#1e293b] text-white text-[14px] leading-[20px] tracking-[0.01em] font-medium py-[8px] rounded-lg hover:opacity-90 transition-opacity">
          Start Learning
        </button>
      </div>
    </nav>
  );
}

function TopNavBar() {
  return (
    <header className="flex justify-between items-center w-full px-[24px] h-16 bg-white border-b border-[#c5c6cd] shadow-sm shrink-0 z-10">
      <div className="flex items-center gap-[16px] md:hidden">
        <h1 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#091426]">
          AIGODMODE
        </h1>
      </div>

      <div className="hidden md:flex flex-1 max-w-md ml-[24px]">
        <div className="relative w-full">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45474c] text-sm" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-[#f2f4f6] border border-[#c5c6cd] rounded-full text-[14px] leading-[20px] focus:outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426] transition-colors"
            placeholder="Search catalog..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-[16px] ml-auto">
        <button className="text-[#45474c] hover:bg-[#f2f4f6] p-[8px] rounded-full transition-colors duration-200 cursor-pointer active:scale-95">
          <MdNotifications />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#e0e3e5] overflow-hidden border border-[#c5c6cd] shrink-0 cursor-pointer">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBzTXvGYooNR8ND2RYAzAmVQjHm37QS0BDH92aR_BmNyXURn4Nnglbnt6B_gn3qWcCZVkUm_O_B34j9gO69PGXRXEFB5dHFHEDpMKJPkpb_3b7OMaxaQ0Oamyv422c3n6WpvVm3YyNM_LawimZ65obI2hKfLHDtEimOQamEc4fgBUsdoZl0tAmyuQPhHb6LtciQTeBN8_NBJXj_PUASkmvvv7ER1OP2A4wHjW3aiOV40d4OxNxsYaLDw"
          />
        </div>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="mb-[32px]">
      <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold text-[#191c1e] mb-[8px]">
        Resource Library
      </h2>
      <p className="text-[18px] leading-[28px] text-[#45474c]">
        Generative AI in Daily Workflows
      </p>
    </div>
  );
}

function SearchFilterBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-[16px] mb-[32px] bg-white p-[16px] rounded-xl border border-[#c5c6cd] shadow-sm">
      <div className="relative flex-1">
        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45474c]" />
        <input
          className="w-full pl-10 pr-4 py-2 border border-[#c5c6cd] rounded-lg text-[16px] leading-[24px] focus:border-[#1e293b] focus:ring-1 focus:ring-[#1e293b] transition-all outline-none bg-white"
          placeholder="Search resources..."
          type="text"
        />
      </div>
      <div className="relative min-w-[200px]">
        <select className="w-full pl-4 pr-10 py-2 border border-[#c5c6cd] rounded-lg text-[16px] leading-[24px] appearance-none bg-white focus:border-[#1e293b] focus:ring-1 focus:ring-[#1e293b] transition-all outline-none cursor-pointer text-[#191c1e]">
          <option value="all">All File Types</option>
          <option value="pdf">PDF Guides</option>
          <option value="slides">Slide Decks</option>
          <option value="templates">Templates &amp; Worksheets</option>
        </select>
        <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#45474c]" />
      </div>
    </div>
  );
}

function ResourceCategoryCard({ title, icon: Icon, iconWrapClass, colSpan, items }) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#c5c6cd] shadow-sm p-[24px] hover:border-[#091426] transition-colors duration-300 ${colSpan}`}
    >
      <div className="flex items-center gap-[8px] mb-[16px] border-b border-[#c5c6cd] pb-[8px]">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconWrapClass}`}>
          <Icon className="text-lg" />
        </div>
        <h3 className="text-[20px] leading-[28px] font-semibold text-[#191c1e]">{title}</h3>
      </div>
      <ul className="flex flex-col gap-0 divide-y divide-[#c5c6cd]">
        {items.map((item) => (
          <li
            key={item.name}
            className="py-[8px] flex items-center justify-between group hover:bg-[#f2f4f6] px-[8px] -mx-[8px] rounded-md transition-colors"
          >
            <div className="flex items-center gap-[16px] min-w-0">
              <item.icon className={`text-xl shrink-0 ${item.iconClass}`} />
              <div className="min-w-0">
                <p className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] truncate">
                  {item.name}
                </p>
                <p className="text-[14px] leading-[20px] text-[#45474c]">{item.meta}</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#45474c] hover:bg-[#e0e3e5] hover:text-[#1e293b] transition-colors shrink-0">
              <MdDownload className="text-sm" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResourceLibrary() {
  return (
        <main className="flex-1 overflow-y-auto bg-[#f7f9fb] p-[16px] md:p-[40px]">
          <div className="max-w-[1280px] mx-auto">
            <PageHeader />
            <SearchFilterBar />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
              {resourceCategories.map((category) => (
                <ResourceCategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </main>
  );
}