import React from "react";
import {
  MdPsychology,
  MdHome,
  MdSchool,
  MdMenuBook,
  MdVerifiedUser,
  MdGroups,
  MdAnalytics,
  MdSearch,
  MdNotifications,
  MdHelpOutline,
  MdWarningAmber,
  MdArrowForward,
  MdChevronLeft,
  MdChevronRight,
  MdSchedule,
  MdStar,
} from "react-icons/md";

/**
 * AIGODMODE — AI Learning Dashboard
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents).
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value and arbitrary-variant classes used here.
 *
 * Uses Inter (set via inline style on the root element) — load it via your
 * usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
 */

// Replacements for the two rules that were plain CSS in the original mock:
const scrollbarClasses =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5 " +
  "[&::-webkit-scrollbar-track]:bg-transparent " +
  "[&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full";

const bentoHoverClasses =
  "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] " +
  "hover:-translate-y-0.5 hover:border-[#091426] " +
  "hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]";

const navItems = [
  { label: "Home", icon: MdHome, active: true },
  { label: "My Learning", icon: MdSchool },
  { label: "Catalog", icon: MdMenuBook },
  { label: "Compliance", icon: MdVerifiedUser },
  { label: "Team", icon: MdGroups },
  { label: "Reports", icon: MdAnalytics },
];

const continueLearning = [
  {
    title: "Data Privacy Fundamentals",
    remaining: "Est. 15 mins remaining",
    tag: "Required",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkmhyd2MYdn8pjyCHBbLcCnAgbzREZB8DTFigbTA2Y7Q9ofrocTLz87JvLPkOKcxVla-o8GaxVRy8Q19l2YsCpyfBPRALJF0WkuYNlilJBs476xtOjkTTJExDi3Oa2wFmhWd5IYjUu5I4ncFK1j4sW81HCpdddnUAX32gyIWgHyiPrK2udzioBvAiXL8dVUCHt8d6USrz-l9sScYcpyHzAeycPARUWZrcUghzwaDl0mVzQvTCjVUl55A",
    alt: "A modern, abstract digital illustration representing data privacy and cybersecurity, featuring minimalist geometric locks and flowing data streams in a clean, light-mode corporate aesthetic with subtle blue and gray tones.",
    percent: 85,
    module: "Module 4/5",
    barClass: "bg-[#10B981]",
  },
  {
    title: "Leading Remote Teams",
    remaining: "Est. 45 mins remaining",
    tag: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDKq5gvvI_CL8X6z7jeY9BwarAM1FFzYR_mAFSx7GFN_5FJBd3jUypdnz7riksDLThjswJjuUjIdGL2kRUJH0riJv2oqZJjIGrJslkis90zSgRMrN3CD6lMn8WjYz7WYW_X0ye6FKxgiRZpYe49kjl5b07m_DKDTMjL1UQ4KUov8jndWEFK12PrZOSVIzB-3ReFZ86BbW8XbPXNSzCBvaFOk9CXGy3efgcGb2Oph2QUwe8muchrTQF-Q",
    alt: "A bright, modern illustration of abstract people figures connected by dynamic lines, representing remote team leadership and collaboration in a clean, professional SaaS style with light gray and subtle brand colors.",
    percent: 40,
    module: "Module 2/5",
    barClass: "bg-[#091426]",
  },{
    title: "Leading Remote Teams",
    remaining: "Est. 45 mins remaining",
    tag: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDKq5gvvI_CL8X6z7jeY9BwarAM1FFzYR_mAFSx7GFN_5FJBd3jUypdnz7riksDLThjswJjuUjIdGL2kRUJH0riJv2oqZJjIGrJslkis90zSgRMrN3CD6lMn8WjYz7WYW_X0ye6FKxgiRZpYe49kjl5b07m_DKDTMjL1UQ4KUov8jndWEFK12PrZOSVIzB-3ReFZ86BbW8XbPXNSzCBvaFOk9CXGy3efgcGb2Oph2QUwe8muchrTQF-Q",
    alt: "A bright, modern illustration of abstract people figures connected by dynamic lines, representing remote team leadership and collaboration in a clean, professional SaaS style with light gray and subtle brand colors.",
    percent: 40,
    module: "Module 2/5",
    barClass: "bg-[#091426]",
  },
];

const q3Course = {
  title: "Q3 Sales Enablement",
  meta: "Started yesterday • Est. 2h remaining",
  tag: "New",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKImqPs9ysVJ9_HW8ZN5ssUDpj4qhIZ8VAcLyeCZoUbIeue-3S1_O6NIP6NTj3n8tezUCODECel-cUL14MflmmyObrMQ7WNla2gplCH1W2ru_lshgTS_nWA0qT_RYpleB82rYrb_2h8xvV-uU8CJ6gEqREYxv7KdYuuzlaqDxLfCmEPVR3qtjdKxyf00y1zLZgb8Tp4jEUqiq8WJvF2rt34DrOHGELRPg6eU9zKEvfv4UeyHNUrzfHw",
  alt: "An analytical, modern abstract graphic showing rising bar charts and sales funnels in a clean, minimalist corporate style, emphasizing growth and enablement with light mode aesthetics.",
  percent: 10,
};

const complianceItems = [
  {
    title: "Code of Conduct 2024",
    status: "Overdue by 2 days",
    cta: "Start",
    urgent: true,
  },
  {
    title: "Annual Cybersecurity Audit",
    status: "Due in 5 days",
    cta: "Resume",
    urgent: false,
  },
];

const recommended = [
  {
    title: "Prompt Engineering Basics",
    tag: "AI Skill",
    tagClass: "bg-[#6ffbbe]/20 text-[#00714d] border-[#4edea3]/30",
    duration: "1h 30m",
    rating: "4.9 (124 ratings)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWJG1tjLi3ZyGmJ-dFj-0h4PiFEslPz9he3Lvqzxp6oWaSrLF2synoFbR88cj1c-RSHALcH7kKxtWu9LjEE5sUX6A_zJ0CAjVV8qxlGY81zwz32-0AuB3uS2dVh68SGiGiBtDe3rYxbUHR_nZwpQfSeEdzuT6HV0Dv4b172OaebklT9JWKzl22xKWpnFcH0iVkfDFlLshisjj8Mr2wjnnHYtIZ4WorisZmGwqSYKB138ydk3nekqvg8w",
    alt: "A conceptual illustration of artificial intelligence and machine learning algorithms, using clean geometric shapes and subtle glowing nodes in a pristine, light-mode SaaS style.",
    className: "",
  },
  {
    title: "Emotional Intelligence at Work",
    tag: "Leadership",
    tagClass: "bg-[#d8e3fb]/30 text-[#3c475a] border-[#bcc7de]/30",
    duration: "45m",
    rating: "4.7 (89 ratings)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBMitQy0gvw8ISiPM0LlUlQrSXREUYKYAMvKrx1RLVSSNh7VyO19R7tI6ZcYeowCovOTKYQXpDQ66-eoVQX-vGdigxuGpYhAgfHo7fKNXWijh1AOwFY-k79o_L5cm0RhdPOKmeRPen62fKT44BwN7J0RgB-FQ-UtKo2IdvPFFO1OOpcA7pamYX3Na2RTUPfKMVt3qHxag3e9Xdi_CAYjILsc9K6oGH42yRVOOBT2sZLW6e5WIGFVKfTw",
    alt: "A clean, modern graphic depicting emotional intelligence in the workplace, utilizing soft abstract shapes and warm neutral colors in a professional, light-mode educational style.",
    className: "",
  },
  {
    title: "Advanced Data Analytics",
    tag: "Technical",
    tagClass: "bg-[#e0e3e5]/50 text-[#45474c] border-[#e0e3e5]",
    duration: "2h",
    rating: "4.8 (210 ratings)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsYG2alyTmgTqWLMc5hsCOAOXIi6y4KXe7pX34kTQKsyvuH5nBTNPng1m3lz3s-ShrV1E8zbmQe32Q6Os3kDl24o-B1mRSd9AbcWOpQ7gcyXRmOHUz8fFqr4CStaUyaKWZHKSIrywYTl7uAKJ9t9LOy3EKFr8UMK4h3hEtHhQf_txyXHfZrSk_yGiZ9g_CKydghbJ8T6-MOzKFh6gN4zXErGbCqfjSs5OsNF3vr1mLXn2eDyy2dp9Z6w",
    alt: "A structured, analytical illustration representing advanced data analytics and spreadsheet mastery, featuring clean graphs and grid structures in a bright, minimalist corporate SaaS aesthetic.",
    className: "hidden sm:flex",
  },
  {
    title: "Agile Project Management",
    tag: "Methodology",
    tagClass: "bg-[#e0e3e5]/50 text-[#45474c] border-[#e0e3e5]",
    duration: "3h 15m",
    rating: "4.6 (56 ratings)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADklM88Cg1zdwiHwMT1BaWO_XuPUTmBYLPYWtB_UjjICIYcHMbfVjK1aQZfuT91L9DVzZB6bKsQZxla6miM9O2keaWBWucQ_RRKId8sV-IDeYHyojmMQs_6aBGVo9pDGXxhblH_Z7fpxr2X6jjDeloFGOw9gfhAd6fEXUwIYSVvUg_ccO0Xo_C_lYjlrefMZS-Ozw2-nSNLq0jCighqlfnkroP4iAeeHXo5rKpHmdxxTCmiKmvSWpb1g",
    alt: "A modern, abstract visual representing agile methodology and project management, showing interconnected nodes and sprint cycles in a clean, professional light-mode design.",
    className: "hidden lg:flex",
  },
];


function CourseCard({ title, remaining, tag, image, alt, percent, module, barClass }) {
  return (
    <div
      className={`bg-white border border-[#e0e3e5] rounded overflow-hidden cursor-pointer group flex flex-col ${bentoHoverClasses}`}
    >
      <div className="h-32 w-full relative">
        <div
          role="img"
          aria-label={alt}
          className="bg-cover bg-center w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {tag && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-[#f7f9fb]/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#091426] uppercase tracking-wider">
            {tag}
          </div>
        )}
      </div>
      <div className="p-[16px] flex-1 flex flex-col">
        <h3 className="text-[16px] leading-[24px] font-semibold text-[#091426] mb-[4px] line-clamp-2">
          {title}
        </h3>
        <p className="text-[14px] leading-[20px] text-[#45474c] mb-[16px]">{remaining}</p>
        <div className="mt-auto">
          <div className="flex justify-between text-xs font-semibold mb-[8px]">
            <span className="text-[#091426]">{percent}% Complete</span>
            <span className="text-[#45474c]">{module}</span>
          </div>
          <div className="w-full h-2 bg-[#e0e3e5] rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${barClass}`} style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Q3CourseCard({ title, meta, tag, image, alt, percent }) {
  return (
    <div
      className={`md:col-span-2 bg-white border border-[#e0e3e5] rounded overflow-hidden cursor-pointer group flex flex-col sm:flex-row h-auto sm:h-32 ${bentoHoverClasses}`}
    >
      <div className="w-full sm:w-48 h-32 relative shrink-0">
        <div
          role="img"
          aria-label={alt}
          className="bg-cover bg-center w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {tag && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-[#ffb95f]/20 backdrop-blur-sm rounded text-[10px] font-bold text-[#c88000] uppercase tracking-wider">
            {tag}
          </div>
        )}
      </div>
      <div className="p-[16px] flex-1 flex flex-col justify-center">
        <h3 className="text-[16px] leading-[24px] font-semibold text-[#091426] mb-[4px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[20px] text-[#45474c] mb-[16px]">{meta}</p>
        <div className="mt-auto w-full max-w-sm">
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className="text-[#091426]">{percent}% Complete</span>
          </div>
          <div className="w-full h-2 bg-[#e0e3e5] rounded-full overflow-hidden">
            <div className="h-full bg-[#091426] rounded-full" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceWidget() {
  return (
    <div className="bg-white border border-[#e0e3e5] rounded p-[16px] flex flex-col h-full shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-[16px] border-b border-[#e0e3e5] pb-[8px]">
        <div className="flex items-center gap-2 text-[#ba1a1a]">
          <MdWarningAmber className="text-[20px]" />
          <h2 className="text-[18px] font-semibold text-[#091426]">Compliance Deadlines</h2>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        {complianceItems.map((item) => (
          <div
            key={item.title}
            className={
              item.urgent
                ? "flex items-start gap-3 p-3 rounded bg-[#ffdad6]/20 border border-[#ba1a1a]/20"
                : "flex items-start gap-3 p-3 rounded bg-[#ffb95f]/10 border border-[#ffb95f]/30"
            }
          >
            <div
              className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                item.urgent ? "bg-[#ba1a1a]" : "bg-[#c88000]"
              }`}
            />
            <div className="flex-1">
              <h4
                className={`text-sm font-semibold line-clamp-1 ${
                  item.urgent ? "text-[#93000a]" : "text-[#091426]"
                }`}
              >
                {item.title}
              </h4>
              <p className="text-xs text-[#45474c] mt-0.5">{item.status}</p>
            </div>
            <button
              className={
                item.urgent
                  ? "text-xs font-bold text-[#93000a] hover:bg-[#ffdad6]/40 px-3 py-1 rounded-md transition-colors border border-[#ba1a1a]/30"
                  : "text-xs font-bold text-[#091426] hover:bg-[#f2f4f6] px-3 py-1 rounded-md transition-colors border border-[#e0e3e5]"
              }
            >
              {item.cta}
            </button>
          </div>
        ))}
        <div className="mt-auto pt-4 flex justify-center">
          <a
            href="#"
            className="text-sm font-semibold text-[#45474c] hover:text-[#091426] flex items-center gap-1 transition-colors"
          >
            View Compliance Dashboard
            <MdArrowForward className="text-[16px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

function RecommendedCard({ title, tag, tagClass, duration, rating, image, alt, className }) {
  return (
    <div
      className={`bg-white border border-[#e0e3e5] rounded-xl overflow-hidden cursor-pointer group flex flex-col ${bentoHoverClasses} ${className}`}
    >
      <div className="h-24 w-full relative">
        <div
          role="img"
          aria-label={alt}
          className="bg-cover bg-center w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-[#f7f9fb]/80 backdrop-blur text-[10px] font-semibold text-[#091426] rounded shadow-sm flex items-center gap-1">
          <MdSchedule className="text-[12px]" /> {duration}
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${tagClass}`}>
            {tag}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-[#091426] leading-snug line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-xs text-[#45474c] mt-auto flex items-center gap-1">
          <MdStar className="text-[14px]" /> {rating}
        </p>
      </div>
    </div>
  );
}

export default function AIGodModeDashboard() {
  return (
        <main className={`flex-1 overflow-y-auto p-[24px] md:p-[40px] ${scrollbarClasses}`}>
          <div className=" mx-auto flex flex-col gap-[48px]">
            {/* Welcome */}
            <div>
              <h1 className="text-[32px] leading-[40px] tracking-[-0.02em] font-semibold text-[#091426] mb-[4px]">
                Welcome back, Alex.
              </h1>
              <p className="text-[16px] leading-[24px] text-[#45474c]">
                You have 2 compliance tasks pending and 3 active courses.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
              {/* Continue Learning */}
              <div className="lg:col-span-8 flex flex-col gap-[24px]">
                <div className="flex justify-between items-end">
                  <h2 className="text-[20px] leading-[28px] font-semibold text-[#091426]">
                    Continue Learning
                  </h2>
                  <a className="text-sm font-semibold text-[#091426] hover:underline" href="#">
                    View all active
                  </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px]">
                  {continueLearning.map((course) => (
                    <CourseCard key={course.title} {...course} />
                  ))}
                  <Q3CourseCard {...q3Course} />
                </div>
              </div>

              {/* Compliance & Stats */}
              <div className="lg:col-span-4 flex flex-col gap-[24px]">
                <ComplianceWidget />
              </div>
            </div>

            {/* Recommended */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between items-end">
                <h2 className="text-[20px] leading-[28px] font-semibold text-[#091426]">
                  Recommended for You
                </h2>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded border border-[#e0e3e5] flex items-center justify-center text-[#45474c] hover:bg-[#f2f4f6] hover:text-[#091426] transition-colors">
                    <MdChevronLeft className="text-[20px]" />
                  </button>
                  <button className="w-8 h-8 rounded border border-[#e0e3e5] flex items-center justify-center text-[#45474c] hover:bg-[#f2f4f6] hover:text-[#091426] transition-colors">
                    <MdChevronRight className="text-[20px]" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {recommended.map((card) => (
                  <RecommendedCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div className="h-[32px]" />
          </div>
        </main>
    
  );
}