import React from "react";
import {
  MdSearch,
  MdNotifications,
  MdSettings,
  MdMenuBook,
  MdCategory,
  MdAutoStories,
  MdTrendingUp,
  MdPlayCircle,
  MdVideocam,
  MdStar,
  MdChevronLeft,
  MdChevronRight,
  MdArticle,
} from "react-icons/md";

/**
 * AIGODMODE AI Learning — Course Catalog
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

const navLinks = [
  { label: "Dashboard", active: false },
  { label: "Catalog", active: true },
  { label: "My Learning", active: false },
  { label: "Analytics", active: false },
];

const filterGroups = [
  {
    title: "Technical Domains",
    icon: MdMenuBook,
    options: [
      { label: "Prompt Engineering", checked: true },
      { label: "Production RAG", checked: true },
      { label: "Autonomous Agents", checked: false },
      { label: "LLM Architecture", checked: false },
    ],
  },
  {
    title: "Format",
    icon: MdCategory,
    options: [
      { label: "Field Manual (Text-First)", checked: true },
      { label: "With Optional YouTube", checked: true },
      { label: "Interactive Notebooks", checked: false },
      { label: "Specs & Blueprints", checked: false },
    ],
  },
  {
    title: "Read Scope",
    icon: MdAutoStories,
    options: [
      { label: "< 15 min reads", checked: false },
      { label: "Field Manuals (1-3 hrs)", checked: true },
      { label: "Full Handbooks (300+ pgs)", checked: true },
    ],
  },
  {
    title: "Level",
    icon: MdTrendingUp,
    options: [
      { label: "Foundational", checked: false },
      { label: "Intermediate Systems", checked: true },
      { label: "Advanced Architecture", checked: true },
    ],
  },
];

const courses = [
  {
    badges: ["Field Manual"],
    hasYoutube: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYRrRtRzN-LOvgOKzrvm8KEWSw_L4ut4oMSOcX5KqoCx6wlAMx3yuYWX8RqbynS7-TZCXwwFlW27q2KHSErrkMbg6LiKYDsulQKbcr7A6sP2CCmIgPlvbXbDoX8F5cqjl-GvVLLH-u2Jh76pGsCGsUy4xm9XISYYBvFg3Fvj5GIqFxLe662gOZ0b-g_5AZNsTM5zTCZEjdm2skDeo9cZDKmPzw3hGBLuXQ6et939M1lUK9Dawjc_Xl-g",
    meta: "15 Chapters · 340 pgs (~8h read)",
    title: "Prompt Engineering Architecture (Vol. 2)",
    description:
      "Deterministic control over non-deterministic models, latent probability re-weighting, and prompt boundary conditioning.",
    videoNote: "12 Optional Companion Videos",
    textOnly: false,
    rating: "4.9",
    readers: "(1.2k readers)",
    cta: "Read Handbook",
  },
  {
    badges: ["Handbook"],
    hasYoutube: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnkvwjl6M0AeaJR14jJlAe9hIcWooOymusMSSiAtCOwoyQ1DtQZ6CTC3yz08SMtN2sf0qaODw4Ka5N7ddockePTw3JK4wfj_Na8DXZ2Mi3oqdx0FEHFFOeG_9RqP0Ld_nx7Os3LnLMoLIYpMrwN4m-Q_xtLoomv3Y-AQjqaEhdx_LQCC8QtSJbAVJz4xqbOOE8d0OUqvInGAPzUHOEFkQb03aADHm8hSb-7mQ9rQlN8byqIJY29fqNaQ",
    meta: "18 Chapters · 410 pgs",
    title: "Production RAG & Vector Systems",
    description:
      "Enterprise retrieval-augmented generation, hybrid dense-sparse indexing, and reranking pipelines.",
    videoNote: "15 Optional Companion Videos",
    textOnly: false,
    rating: "4.9",
    readers: "(980 readers)",
    cta: "Read Handbook",
  },
  {
    badges: ["Deep Dive"],
    hasYoutube: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJoli-wPi7vER_5rMh0N-L5uLyh9o3joKIHp4SbgIIvxUjafWHcD0xwL7zhWLJ9GWUGUPIROKiu4idjAVmkp-gAYsmZcKZQb4x7nYHLmcr47c4z4MW7IgRkHzuTTemtfi-JXFNV5RZs-WcrKhvjhojUdij1tYVnfFIrDO9LIXE7dvO1NxQRJcpVq5t-J1_pqN0_D77G135MDH3025OG6KvCBpm0E4rFF6_J2aIqJUnfWgxdoM5Y0mVQ",
    meta: "12 Chapters · 280 pgs",
    title: "Autonomous Agent Orchestration",
    description:
      "Tool-use primitives, reflection loops, state machines, and multi-agent coordination protocols.",
    videoNote: "8 Optional Companion Videos",
    textOnly: false,
    rating: "4.8",
    readers: "(840 readers)",
    cta: "Read Handbook",
  },
  {
    badges: ["Field Manual"],
    hasYoutube: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyeiOAMbfoEiNMZQNFlOa71Y9nXNvLBj2bOyckYUEkXqRgRgQDiF8tOEvIHp4OzcpIS-NWl7_kDoCvxnki2Y_EuTbKGGVSMUST3PcrOLweM7VQxcpfQ0BBmbsMNpP84zS1lIZo-Rtt4k1vewbP-snBzBWbyqlr3Z5G7trohPTvBG7dr_mjM2gf-K8G9pfTo8T_h1fDBy0_S9vLqlKkVctmL8pLXdaEEfoPd0Ej0BoXkNaqrPVsogKM1A",
    meta: "9 Chapters · 210 pgs",
    title: "Latent Representations & Transformers",
    description:
      "Foundational attention mechanics, residual stream routing, and mechanistic interpretability.",
    videoNote: "Complete Text & Math Derivations",
    textOnly: true,
    rating: "4.8",
    readers: "(1.5k readers)",
    cta: "Read Handbook",
  },
];

function FilterSidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col p-[16px] gap-[8px] bg-[#f2f4f6] border-r border-[#c5c6cd] w-64 sticky top-16 overflow-y-auto"
    >
      <div className="mb-[24px]">
        <h2 className="text-[20px] leading-[28px] font-bold text-[#091426]">
          Handbook Filters
        </h2>
        <p className="text-[14px] leading-[20px] text-[#45474c] mt-[4px]">
          Refine technical field library
        </p>
      </div>

      {filterGroups.map(({ title, icon: Icon, options }, i) => (
        <div
          key={title}
          className={
            i === filterGroups.length - 1
              ? "mb-[32px] border-b border-[#c5c6cd] pb-[16px]"
              : "mb-[16px] border-b border-[#c5c6cd] pb-[16px]"
          }
        >
          <div className="flex items-center gap-[8px] mb-[8px] text-[14px] leading-[20px] tracking-[0.01em] text-[#091426] font-semibold">
            <Icon className="text-[18px]" />
            {title}
          </div>
          <div className="flex flex-col gap-[4px] text-[14px] leading-[20px] text-[#191c1e]">
            {options.map((opt) => (
              <label
                key={opt.label}
                className="flex items-center gap-[8px] cursor-pointer hover:bg-[#eceef0] p-1 rounded transition-colors"
              >
                <input
                  className="rounded border-[#c5c6cd] accent-[#1e293b] focus:ring-[#1e293b] cursor-pointer"
                  type="checkbox"
                  defaultChecked={opt.checked}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button className="mt-auto w-full py-[8px] px-[16px] bg-white border border-[#c5c6cd] text-[#191c1e] text-[14px] leading-[20px] tracking-[0.01em] font-medium rounded hover:bg-[#eceef0] transition-colors focus:ring-2 focus:ring-[#1e293b] focus:outline-none">
        Reset Filters
      </button>
    </aside>
  );
}

function CourseCard({
  badges,
  hasYoutube,
  image,
  meta,
  title,
  description,
  videoNote,
  textOnly,
  rating,
  readers,
  cta,
}) {
  return (
    <div className="bg-white border border-[#c5c6cd] rounded overflow-hidden hover:border-[#091426] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden bg-[#e0e3e5]">
        <div
          className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute top-[8px] left-[8px] flex flex-wrap gap-[4px]">
          {badges.map((badge) => (
            <div
              key={badge}
              className="bg-white/90 backdrop-blur-sm border border-[#c5c6cd] px-2 py-1 rounded flex items-center gap-1"
            >
              <MdMenuBook className="text-[14px] text-[#091426]" />
              <span className="text-[12px] leading-[16px] font-semibold text-[#091426]">
                {badge}
              </span>
            </div>
          ))}
          {hasYoutube && (
            <div className="bg-white/90 backdrop-blur-sm border border-[#c5c6cd] px-2 py-1 rounded flex items-center gap-1 text-[#ba1a1a]">
              <MdPlayCircle className="text-[14px]" />
              <span className="text-[12px] leading-[16px] text-[#091426]">Optional YouTube</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-[16px] flex flex-col flex-1">
        <div className="flex items-center gap-[4px] text-[12px] leading-[16px] text-[#45474c] mb-[4px]">
          <MdAutoStories className="text-[15px]" />
          <span>{meta}</span>
        </div>
        <h3 className="text-[20px] leading-[28px] font-bold text-[#091426] mb-[4px] line-clamp-2">
          {title}
        </h3>
        <p className="text-[14px] leading-[20px] text-[#45474c] mb-[16px] line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-[4px] text-[#45474c] text-[12px] leading-[16px] mb-[16px]">
          {textOnly ? (
            <MdArticle className="text-[16px] text-[#75777d]" />
          ) : (
            <MdVideocam className="text-[16px] text-[#ba1a1a]" />
          )}
          <span>{videoNote}</span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#c5c6cd] pt-[16px]">
          <div className="flex items-center gap-[4px] text-[#ffb95f] text-[12px] leading-[16px]">
            <MdStar className="text-[16px]" />
            <span className="font-bold text-[#191c1e]">{rating}</span>
            <span className="text-[#45474c]">{readers}</span>
          </div>
          <button className="px-[16px] py-1 bg-[#091426] text-white rounded font-semibold text-[12px] leading-[16px] hover:bg-[#1e293b] transition-colors flex items-center gap-1">
            <MdMenuBook className="text-[15px]" />
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex justify-center items-center mt-[48px] gap-[8px]">
      <button
        className="w-8 h-8 flex items-center justify-center rounded border border-[#c5c6cd] text-[#45474c] hover:bg-[#eceef0] transition-colors disabled:opacity-50"
        disabled
      >
        <MdChevronLeft className="text-[20px]" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1e293b] text-white text-[12px] leading-[16px] transition-colors">
        1
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c5c6cd] text-[#191c1e] text-[12px] leading-[16px] hover:bg-[#eceef0] transition-colors">
        2
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c5c6cd] text-[#191c1e] text-[12px] leading-[16px] hover:bg-[#eceef0] transition-colors">
        3
      </button>
      <span className="text-[#45474c] text-[14px] leading-[20px]">...</span>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c5c6cd] text-[#45474c] hover:bg-[#eceef0] transition-colors">
        <MdChevronRight className="text-[20px]" />
      </button>
    </div>
  );
}

function Footer() {
  const links = ["Privacy Policy", "Terms of Service", "Support", "Compliance"];
  return (
    <footer className="bg-white border-t border-[#c5c6cd] flex flex-col md:flex-row justify-between items-center w-full py-[24px] px-[40px] max-w-[1280px] mx-auto mt-auto">
      <div className="text-[12px] leading-[16px] text-[#45474c] mb-[8px] md:mb-0">
        © 2024 AIGODMODE AI Learning. All rights reserved.
      </div>
      <div className="flex gap-[24px]">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[12px] leading-[16px] text-[#45474c] hover:text-[#091426] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function CourseCatalog() {
  return (

      <div className="flex flex-1  mx-auto w-full">
        <FilterSidebar />

        <main className="flex-1 p-[16px] lg:p-[24px] lg:pl-[32px] w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[32px] gap-[16px]">
            <div>
              <div className="flex items-center gap-[4px] mb-[4px]">
                <MdMenuBook className="text-[#091426] text-[20px]" />
                <span className="text-[12px] leading-[16px] font-semibold uppercase tracking-wider text-[#45474c]">
                  Engineering Field Library
                </span>
              </div>
              <h1 className="text-[32px] leading-[40px] tracking-[-0.02em] font-semibold text-[#091426]">
                Technical Books &amp; Field Manuals
              </h1>
              <p className="text-[16px] leading-[24px] text-[#45474c] mt-[4px]">
                Curated in-depth engineering field manuals, book-first architectures, and optional
                YouTube companion lectures.
              </p>
            </div>

            <div className="flex items-center gap-[8px] w-full sm:w-auto">
              <select className="pl-[8px] pr-[32px] py-[8px] rounded border border-[#c5c6cd] bg-white text-[14px] leading-[20px] focus:outline-none focus:ring-1 focus:ring-[#1e293b] focus:border-[#1e293b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] w-full sm:w-auto">
                <option>Sort by: Recommended</option>
                <option>Newest</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          <Pagination />
        </main>
      </div>

  );
}