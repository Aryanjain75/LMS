"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MdChat,
  MdClose,
  MdForum,
  MdHelpOutline,
  MdMenu,
} from "react-icons/md";

const actions = [
  { label: "Help Center", href: "/speed-dial/help-center", icon: MdHelpOutline },
  { label: "AI Tutor", href: "/speed-dial/chat", icon: MdChat },
  { label: "Discussions", href: "/speed-dial/discussions", icon: MdForum },
];

export default function GlobalSpeedDial() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/speed-dial")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`mb-3 flex flex-col items-end gap-3 transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {actions.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 rounded-full border border-[#c5c6cd] bg-white/95 px-3 py-2 text-[#191c1e] shadow-lg backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="text-[12px] font-semibold tracking-[0.02em] text-[#091426]">
              {label}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#091426] text-white">
              <Icon className="text-[20px]" />
            </span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Open quick links"
        onClick={() => setOpen((value) => !value)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#091426] text-white shadow-xl transition-transform duration-200 hover:scale-105"
      >
        {open ? <MdClose className="text-[28px]" /> : <MdMenu className="text-[28px]" />}
      </button>
    </div>
  );
}
