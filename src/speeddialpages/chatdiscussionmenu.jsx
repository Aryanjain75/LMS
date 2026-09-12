import React from "react";
import {
  MdSchool,
  MdHome,
  MdMenuBook,
  MdGavel,
  MdGroup,
  MdAnalytics,
  MdSearch,
  MdNotifications,
  MdHelpOutline,
  MdAdd,
  MdArrowUpward,
  MdArrowDownward,
  MdVerified,
  MdForum,
  MdTrendingUp,
  MdFilterList,
} from "react-icons/md";

/**
 * AIGODMODE — Course Discussion & Q&A
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents).
 *
 * The mock defined a `.glass-card` CSS class that wasn't actually used
 * anywhere in the markup, so it's omitted here. `.tag-pill` (the green
 * topic-tag styling) IS used and is inlined below as
 * `bg-[rgba(16,185,129,0.1)] text-[#006c49]`.
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const tagPillClasses = "bg-[rgba(16,185,129,0.1)] text-[#006c49]";

const navItems = [
  { label: "Home", icon: MdHome, active: false },
  { label: "My Learning", icon: MdSchool, active: true },
  { label: "Catalog", icon: MdMenuBook, active: false },
  { label: "Compliance", icon: MdGavel, active: false },
  { label: "Team", icon: MdGroup, active: false },
  { label: "Reports", icon: MdAnalytics, active: false },
];

const filters = [
  { label: "All Questions", count: 245, active: true },
  { label: "My Questions", count: 3, active: false },
  { label: "Unanswered", count: 12, active: false },
  { label: "Instructor Answered", count: 89, active: false },
];

const questions = [
  {
    id: "q1",
    votes: 42,
    title: "Clarification on Transformer Self-Attention Mechanism in Module 2",
    instructorAnswered: true,
    body: "In the video for Module 2, the instructor mentions that self-attention allows the model to weigh the importance of different words in a sequence. Could someone explain how the Query, Key, and Value matrices are derived mathematically from the input embeddings?",
    tags: ["Module 2", "Transformers"],
    replies: 8,
    author: "Alice Chen",
    time: "2h ago",
    avatarImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3wV3sm-M-tlvl_opo3EcK0iUZ_lkfBclmxHElGNSIj81uWi6mPABNpFYn4AxbHuZ-4OfFUv7EyUaQoddPuigy2DSkl4Kd3xXNbxGprSk2FLt8K5u2lR-yhc5rsrfACCp4bDDyJCSMsXeCBgYUMNZl-ogtTfPy_Kda_hmTbawkwLXPKz4GCFln_fPRRzNGbCKn7sYBRIzTwiqLwcDJss_XSxOOvox-47qEAImSjupMIX2RDBNDzhATMg",
  },
  {
    id: "q2",
    votes: 15,
    title: "Best practices for structuring Few-Shot Prompts?",
    instructorAnswered: false,
    body: "I'm struggling to get consistent results when using few-shot prompting for sentiment analysis. Are there specific separators I should use between examples, or is it better to use JSON format for the examples themselves?",
    tags: ["Prompt Engineering"],
    replies: 3,
    author: "John Doe",
    time: "5h ago",
    initials: "JD",
  },
];

const trendingTopics = ["RAG Implementation", "#Module4", "LangChain", "Fine-tuning", "System Prompts"];

function SideNav() {
  return (
    <nav className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-white border-r border-[#c5c6cd] py-[24px] px-[16px] z-40">
      <div className="mb-[32px] flex items-center gap-[8px]">
        <MdSchool className="text-[#091426] text-3xl" />
        <div className="flex flex-col">
          <span className="text-[20px] leading-[28px] font-bold text-[#091426]">AIGODMODE</span>
          <span className="text-[12px] leading-[16px] font-semibold text-[#45474c]">
            AI Learning
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-[4px] flex-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <li key={label}>
            <a
              href="#"
              className={
                active
                  ? "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#091426] font-bold border-r-4 border-[#091426] bg-[#f2f4f6] transition-colors duration-200 ease-in-out text-[14px] leading-[20px] tracking-[0.01em]"
                  : "flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#45474c] hover:bg-[#eceef0] hover:text-[#091426] transition-colors duration-200 ease-in-out text-[14px] leading-[20px] tracking-[0.01em] font-medium"
              }
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

function TopAppBar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 backdrop-blur-md border-b border-[#c5c6cd] flex items-center justify-between px-[24px] z-30">
      <div className="flex items-center gap-[16px] md:hidden">
        <MdSchool className="text-[#091426] text-2xl" />
        <span className="text-[20px] leading-[28px] font-bold text-[#091426]">AIGODMODE</span>
      </div>

      <div className="hidden md:flex flex-1 max-w-md ml-[24px]">
        <div className="relative w-full">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45474c]" />
          <input
            className="w-full pl-10 pr-4 py-2 rounded-full border border-[#c5c6cd] bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#091426] focus:border-transparent text-[14px] leading-[20px] text-[#191c1e] placeholder:text-[#45474c] transition-shadow"
            placeholder="Search discussions..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-[8px]">
        <button className="p-2 rounded-full hover:bg-[#eceef0] text-[#45474c] transition-all duration-200">
          <MdNotifications />
        </button>
        <button className="p-2 rounded-full hover:bg-[#eceef0] text-[#45474c] transition-all duration-200">
          <MdHelpOutline />
        </button>
        <img
          alt="User Profile"
          className="w-8 h-8 rounded-full ml-[8px] object-cover border border-[#c5c6cd] cursor-pointer"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeILeodLkTvFqbvQu9O4fkMdAqNihiwSlCdvLouA9kepkDzixu5QapMwyWY_eqOr2q9wpN42lCMqFPYmi_R9-4R4_rHW25avl3BKU8ImWHjAdBacdv8fksNZP3h0U2OoQN9bXF8Ted3tFVlTLq2tcKQB54u6XtE5vqaJOjMmVAAwU3dXQV8brIhdpGwlGs88Z3Q1cAtdhBxjZn5qqW-ShhAvAzm63rHDsclBG1VXkSz8vWhUdmBNns0g"
        />
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-[32px] gap-[16px]">
      <div>
        <h1 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold text-[#191c1e] mb-[4px]">
          Course Discussion &amp; Q&amp;A
        </h1>
        <p className="text-[16px] leading-[24px] text-[#45474c]">
          Engage with instructors and peers on AI concepts.
        </p>
      </div>
      <button className="bg-[#1e293b] text-white hover:bg-[#091426] transition-colors px-[24px] py-2 rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium flex items-center justify-center gap-[8px] shadow-sm whitespace-nowrap">
        <MdAdd className="text-[20px]" />
        Ask a Question
      </button>
    </div>
  );
}

function FiltersSidebar() {
  return (
    <aside className="lg:col-span-3 space-y-[32px]">
      <div className="bg-white rounded-xl border border-[#c5c6cd] p-[16px] shadow-sm">
        <h3 className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] mb-[8px] px-[8px] uppercase tracking-wider">
          Filters
        </h3>
        <ul className="space-y-1">
          {filters.map((filter) => (
            <li key={filter.label}>
              <a
                href="#"
                className={
                  filter.active
                    ? "flex items-center justify-between px-[8px] py-2 rounded-lg bg-[#f2f4f6] text-[#091426] text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors"
                    : "flex items-center justify-between px-[8px] py-2 rounded-lg text-[#45474c] hover:bg-[#eceef0] text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors"
                }
              >
                <span>{filter.label}</span>
                <span className="bg-[#c5c6cd]/20 text-[#45474c] px-2 py-0.5 rounded-full text-xs">
                  {filter.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function QuestionCard({ question }) {
  return (
    <article className="bg-white rounded-xl border border-[#c5c6cd] p-[24px] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex gap-[16px]">
        <div className="flex flex-col items-center gap-1 min-w-[40px]">
          <button className="text-[#45474c] hover:text-[#091426] transition-colors">
            <MdArrowUpward className="text-[24px]" />
          </button>
          <span className="text-[14px] leading-[20px] tracking-[0.01em] text-[#191c1e] font-semibold">
            {question.votes}
          </span>
          <button className="text-[#75777d] hover:text-[#ba1a1a] transition-colors">
            <MdArrowDownward className="text-[24px]" />
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-[8px] mb-[4px]">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e] group-hover:text-[#091426] transition-colors truncate whitespace-normal line-clamp-2">
              {question.title}
            </h2>
            {question.instructorAnswered && (
              <span className="shrink-0 flex items-center gap-1 bg-[#6cf8bb]/20 text-[#006c49] border border-[#006c49]/20 px-2 py-1 rounded-full text-[12px] leading-[16px] font-semibold">
                <MdVerified className="text-[14px]" />
                Instructor Answered
              </span>
            )}
          </div>

          <p className="text-[14px] leading-[20px] text-[#45474c] line-clamp-2 mb-[16px]">
            {question.body}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-y-[8px]">
            <div className="flex flex-wrap gap-2">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 rounded-md text-[12px] leading-[16px] font-semibold ${tagPillClasses}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-[16px] text-[#45474c] text-[12px] leading-[16px] font-semibold">
              <div className="flex items-center gap-1">
                <MdForum className="text-[16px]" />
                <span>{question.replies} Replies</span>
              </div>
              <div className="flex items-center gap-1">
                {question.avatarImg ? (
                  <img
                    alt="Avatar"
                    className="w-5 h-5 rounded-full object-cover"
                    src={question.avatarImg}
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#091426] text-white flex items-center justify-center text-[10px] font-bold">
                    {question.initials}
                  </div>
                )}
                <span>{question.author}</span>
                <span className="text-[#75777d] ml-1">• {question.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ThreadList() {
  return (
    <div className="lg:col-span-6 space-y-[16px]">
      <div className="md:hidden flex gap-[8px] mb-[8px]">
        <div className="relative w-full flex-1">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45474c] text-[20px]" />
          <input
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#c5c6cd] bg-[#f7f9fb] focus:outline-none focus:ring-1 focus:ring-[#091426] text-[14px] leading-[20px]"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button className="border border-[#c5c6cd] rounded-lg px-3 py-2 text-[#45474c] bg-white flex items-center">
          <MdFilterList />
        </button>
      </div>

      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}

      <button className="w-full py-3 rounded-xl border border-[#c5c6cd] bg-white text-[#191c1e] hover:bg-[#eceef0] transition-colors text-[14px] leading-[20px] tracking-[0.01em] font-medium shadow-sm">
        Load More Questions
      </button>
    </div>
  );
}

function TrendingSidebar() {
  return (
    <aside className="lg:col-span-3 space-y-[32px]">
      <div className="bg-white rounded-xl border border-[#c5c6cd] p-[16px] shadow-sm">
        <h3 className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] mb-[16px] px-[8px] uppercase tracking-wider flex items-center gap-2">
          <MdTrendingUp className="text-[18px] text-[#ffb95f]" />
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <a
              key={topic}
              href="#"
              className="px-3 py-1.5 rounded-full border border-[#c5c6cd] text-[#45474c] hover:border-[#091426] hover:text-[#091426] transition-colors text-[12px] leading-[16px] font-semibold bg-[#f7f9fb]"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function CourseDiscussion() {
  return (
      <main className="flex-1 mt-16 md:ml-64 p-[16px] md:p-[40px] bg-[#f7f9fb] min-h-[calc(100vh-4rem)]">
        <div className="max-w-[1280px] mx-auto">
          <PageHeader />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            <FiltersSidebar />
            <ThreadList />
            <TrendingSidebar />
          </div>
        </div>
      </main>
  );
}