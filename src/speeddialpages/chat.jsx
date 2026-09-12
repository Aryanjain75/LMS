"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MdAutoAwesome,
  MdPerson,
  MdStorage,
  MdMenuBook,
  MdSmartToy,
  MdVerified,
  MdLink,
  MdMic,
  MdSend,
} from "react-icons/md";

/**
 * AIGODMODE AI Learning — Advanced Prompt Engineering (AI Tutor Session)
 *
 * Self-contained JSX + Tailwind conversion of the supplied HTML/CSS mock.
 * No tailwind.config.js changes needed — every custom design token from the
 * mock (colors, spacing, type scale) is inlined as a Tailwind arbitrary
 * value (e.g. `bg-[#091426]`, `gap-[16px]`, `text-[32px] leading-[40px]`).
 * Icons: react-icons/md (Material Symbols equivalents). Note: the original
 * "dataset" icon has no exact react-icons/md match, substituted with
 * MdStorage.
 *
 * The original mock's chat submit was vanilla JS DOM manipulation
 * (createElement + innerHTML). That's reimplemented here as React state:
 * `messages` holds the transcript and `showThinking` drives the animated
 * "..." indicator, matching the mock's behavior of appending a user bubble
 * and then showing a (never-resolving) thinking indicator after 500ms.
 * Also added: Enter-to-submit on the textarea, matching the "Press Enter ↵
 * to submit" hint text that had no working handler in the original.
 *
 * Needs Tailwind's JIT engine (any Tailwind v3+ setup) to compile the
 * arbitrary-value classes used here.
 *
 * Uses Inter — load it via your usual font pipeline, e.g. in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
 */

const scrollbarHideClasses =
  "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

const initialMessages = [
  {
    id: "m1",
    sender: "ai",
    text: "In the context of prompt engineering, what is the primary purpose of 'Few-Shot Prompting'?",
    time: "10:42 AM",
  },
  {
    id: "m2",
    sender: "user",
    text: "I would provide diverse examples to cover edge cases and guide the model's output format.",
    time: "10:44 AM",
  },
  {
    id: "m3",
    sender: "ai",
    contextApplied: true,
    time: "10:45 AM",
    parts: [
      <>
        That&apos;s a good start, Alex. Based on our source material regarding{" "}
        <strong>Optimization Techniques</strong>, how would you handle a scenario where the model
        still produces inconsistent formatting even with 3 examples?
      </>,
      "Would you increase the number of shots, or refine the structural instructions in the prompt prefix?",
    ],
  },
];

function RadarChart() {
  return (
    <div className="mt-[24px] relative aspect-square w-2/3 mx-auto flex items-center justify-center opacity-80">
      <svg className="w-full h-full text-[#091426] drop-shadow-md" viewBox="0 0 100 100">
        <polygon
          fill="none"
          points="50,10 90,30 90,70 50,90 10,70 10,30"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.5"
        />
        <polygon
          fill="none"
          points="50,30 70,40 70,60 50,70 30,60 30,40"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.5"
        />
        <polygon
          className="animate-[pulse_3s_ease-in-out_infinite]"
          fill="currentColor"
          fillOpacity="0.1"
          points="50,20 85,35 75,65 50,85 25,60 30,25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10" />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="30" />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="70" />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="90" />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="70" />
        <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="30" />
        <circle cx="50" cy="20" fill="currentColor" r="2" />
        <circle cx="85" cy="35" fill="currentColor" r="2" />
        <circle cx="75" cy="65" fill="currentColor" r="2" />
        <circle cx="50" cy="85" fill="currentColor" r="2" />
        <circle cx="25" cy="60" fill="currentColor" r="2" />
        <circle cx="30" cy="25" fill="currentColor" r="2" />
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-[1280px] mx-auto px-[16px] lg:px-[40px] flex items-center justify-between gap-[24px]">
        <div className="flex items-center gap-[8px] shrink-0">
          <MdAutoAwesome className="text-[#091426]" />
          <span className="text-[20px] leading-[28px] font-semibold text-[#091426] tracking-tight hidden sm:block">
            AIGODMODE AI Learning
          </span>
        </div>
        <div className="flex-1 text-center truncate">
          <h1 className="text-[20px] leading-[28px] font-semibold text-[#191c1e]">
            Advanced Prompt Engineering
          </h1>
        </div>
        <div className="flex items-center gap-[16px] shrink-0">
          <button className="flex items-center gap-[4px] px-[16px] py-[8px] rounded-lg border border-[#c5c6cd] hover:bg-[#e6e8ea] transition-colors text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#45474c]">
            Save &amp; Exit
          </button>
          <div className="w-8 h-8 rounded-full bg-[#091426] flex items-center justify-center">
            <MdPerson className="text-white text-[18px]" />
          </div>
        </div>
      </div>
    </header>
  );
}

function KnowledgeContextSidebar() {
  return (
    <aside className="w-full lg:w-[35%] flex flex-col gap-[24px] z-10 sticky top-24 self-start">
      <div className="bg-[#eceef0] rounded-xl shadow-sm p-[24px] relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#091426]/10 rounded-full blur-xl transition-all duration-500 group-hover:bg-[#091426]/20" />
        <div className="flex items-center gap-[8px] mb-[16px] relative z-10">
          <MdStorage className="text-[#091426] text-[20px]" />
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e] tracking-tight">
            Knowledge Context
          </h2>
        </div>
        <div className="bg-white rounded-lg p-[16px] shadow-sm relative z-10">
          <div className="flex items-center gap-[4px] mb-[4px]">
            <MdMenuBook className="text-[16px] text-[#091426]" />
            <span className="text-[12px] leading-[16px] font-semibold text-[#091426] uppercase tracking-wider">
              Source Material
            </span>
          </div>
          <p className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#45474c] mb-[8px]">
            Module 3, Lesson 2 - Optimization Techniques
          </p>
          <div className="bg-[#f7f9fb] p-[8px] rounded border-l-2 border-[#091426]">
            <p className="text-[14px] leading-[20px] text-[#191c1e] italic">
              "When formatting persists as an issue, prioritize structural clarity in the prompt
              prefix over sheer volume of shots."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#eceef0] rounded-xl shadow-sm p-[24px]">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#45474c] uppercase tracking-widest">
            Assessment Progress
          </h3>
          <span className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#091426]">
            4/10
          </span>
        </div>
        <div className="relative w-full h-2 bg-[#e0e3e5] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#091426] rounded-full transition-all duration-700 ease-out"
            style={{ width: "40%" }}
          />
        </div>
        <RadarChart />
      </div>
    </aside>
  );
}

function ChatBubble({ message }) {
  if (message.sender === "ai") {
    return (
      <div className={`flex gap-[16px] ${message.contextApplied ? "max-w-[95%]" : "max-w-[90%]"}`}>
        <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 mt-1 relative">
          <MdSmartToy className="text-[#8590a6] text-[16px]" />
          {message.contextApplied && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <MdVerified className="text-[#4edea3] text-[12px]" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[4px] w-full">
          {message.contextApplied && (
            <div className="flex items-center gap-[4px] ml-2 mb-1">
              <span className="px-2 py-0.5 bg-[#091426]/10 text-[#091426] text-[12px] leading-[16px] font-semibold rounded-full flex items-center gap-[4px]">
                <MdLink className="text-[14px]" /> Context Applied
              </span>
            </div>
          )}
          <div className="bg-[#f2f4f6] p-[16px] rounded-2xl rounded-tl-sm shadow-sm relative overflow-hidden group">
            {message.contextApplied && (
              <div className="absolute top-0 left-0 w-1 h-full bg-[#091426] opacity-50 group-hover:opacity-100 transition-opacity" />
            )}
            {message.contextApplied ? (
              message.parts.map((part, i) => (
                <p
                  key={i}
                  className={`text-[16px] leading-[24px] text-[#191c1e] ${
                    i < message.parts.length - 1 ? "mb-3" : ""
                  }`}
                >
                  {part}
                </p>
              ))
            ) : (
              <p className="text-[16px] leading-[24px] text-[#191c1e]">{message.text}</p>
            )}
          </div>
          <span className="text-[12px] leading-[16px] font-semibold text-[#45474c] ml-2">
            {message.time}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-[16px] max-w-[90%] self-end flex-row-reverse">
      <div className="w-8 h-8 rounded-full bg-[#e0e3e5] flex items-center justify-center shrink-0 mt-1">
        <MdPerson className="text-[#45474c] text-[16px]" />
      </div>
      <div className="flex flex-col gap-[4px] items-end">
        <div className="bg-[#091426] p-[16px] rounded-2xl rounded-tr-sm shadow-sm">
          <p className="text-[16px] leading-[24px] text-white">{message.text}</p>
        </div>
        <span className="text-[12px] leading-[16px] font-semibold text-[#45474c] mr-2">
          {message.time}
        </span>
      </div>
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="flex gap-[16px] max-w-[90%]">
      <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 mt-1">
        <MdSmartToy className="text-[#8590a6] text-[16px]" />
      </div>
      <div className="bg-[#f2f4f6] p-[16px] rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 bg-[#45474c]/50 rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-[#45474c]/50 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
        <span className="w-2 h-2 bg-[#45474c]/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
      </div>
    </div>
  );
}

function AiTutorSession() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [showThinking, setShowThinking] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, showThinking]);

  const submitResponse = () => {
    const text = draft.trim();
    if (!text) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: "user", text, time }]);
    setDraft("");

    setTimeout(() => {
      setShowThinking(true);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitResponse();
    }
  };

  return (
    <section className="w-full lg:w-[65%] flex flex-col h-[calc(100vh-140px)] min-h-[600px] bg-white rounded-xl shadow-md overflow-hidden relative">
      <div className="px-[24px] py-[16px] border-b border-[#e0e3e5]/30 flex items-center gap-[16px] bg-white/90 backdrop-blur z-20">
        <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0">
          <MdSmartToy className="text-[#8590a6] text-[20px]" />
        </div>
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e]">
            AI Tutor Session
          </h2>
          <p className="text-[12px] leading-[16px] font-semibold text-[#45474c] flex items-center gap-[4px]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" /> Active Evaluation
          </p>
        </div>
      </div>

      <div
        ref={chatContainerRef}
        className={`flex-1 overflow-y-auto p-[24px] flex flex-col gap-[32px] scroll-smooth ${scrollbarHideClasses}`}
      >
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        {showThinking && <ThinkingBubble />}
      </div>

      <div className="p-[16px] bg-white border-t border-[#e0e3e5]/30 mt-auto z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
        <div className="relative bg-white rounded-xl shadow-sm ring-1 ring-[#c5c6cd]/50 focus-within:ring-[#091426] focus-within:shadow-md transition-all duration-200">
          <textarea
            className="w-full bg-transparent p-[16px] pr-16 text-[16px] leading-[24px] text-[#191c1e] placeholder:text-[#45474c]/50 resize-none outline-none min-h-[80px]"
            placeholder="Type your response or use voice input..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-[8px]">
            <button
              className="w-8 h-8 rounded-full hover:bg-[#e0e3e5] flex items-center justify-center text-[#45474c] transition-colors"
              title="Voice Input"
            >
              <MdMic className="text-[20px]" />
            </button>
            <button
              onClick={submitResponse}
              className="w-8 h-8 rounded-full bg-[#091426] hover:bg-[#091426]/90 flex items-center justify-center text-white transition-colors shadow-sm"
              title="Submit Response"
            >
              <MdSend className="text-[18px]" />
            </button>
          </div>
        </div>
        <div className="mt-[8px] flex justify-between items-center px-[4px]">
          <p className="text-[12px] leading-[16px] font-semibold text-[#45474c]/70">
            Press{" "}
            <kbd className="font-sans px-1 py-0.5 bg-[#e0e3e5] rounded text-[10px]">Enter ↵</kbd>{" "}
            to submit
          </p>
          <button className="text-[12px] leading-[16px] font-semibold text-[#091426] hover:underline">
            Need a hint?
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["Support", "Resources", "Privacy Policy"];
  return (
    <footer className="w-full bg-[#eceef0] py-[32px] border-t border-[#c5c6cd]/10">
      <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[16px] text-[12px] leading-[16px] font-semibold text-[#45474c]">
        <span>© 2024 AIGODMODE AI Learning. Confidential Enterprise Content.</span>
        <nav className="flex gap-[24px]">
          {links.map((link) => (
            <a key={link} className="hover:text-[#091426] transition-colors" href="#">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function AdvancedPromptEngineering() {
  return (

      <main className="w-full pt-16 min-h-screen bg-[#f7f9fb]">
        <div className="flex flex-col w-full px-[16px] lg:px-[40px] py-[32px] gap-[32px] lg:flex-row max-w-[1280px] mx-auto pb-[48px] relative">
          <KnowledgeContextSidebar />
          <AiTutorSession />
        </div>
      </main>

  );
}