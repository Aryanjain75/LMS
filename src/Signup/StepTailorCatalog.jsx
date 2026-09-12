"use client";

import { useState,useEffect } from "react";
import React from "react";
import {
  TrendingUp,
  Code2,
  Users,
  Lightbulb,
  Palette,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Logo, ProgressBar } from "../../app/Signup/page";

/* ---------------- Step 2: Tailor your catalog ---------------- */
const CATALOG_OPTIONS = [
  { key: "sales", label: "Sales", icon: TrendingUp },
  { key: "engineering", label: "Engineering", icon: Code2 },
  { key: "manager", label: "People Manager", icon: Users },
  { key: "product", label: "Product", icon: Lightbulb },
  { key: "design", label: "Design", icon: Palette },
  { key: "compliance", label: "Compliance", icon: ShieldCheck },
];

export function StepTailorCatalog({ onNext, onBack, formDetails, setFormDetails }) {
  const [selected, setSelected] = useState(formDetails.catalogPreferences || new Set(["engineering"]));

  const toggle = (key) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  useEffect(() => {
    setFormDetails({ ...formDetails, catalogPreferences: selected });
  }, [selected]);
  return (
    <div className="w-full max-w-[560px] rounded-2xl border border-gray-100 bg-white px-8 py-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <Logo />
      <ProgressBar step={2} />
      <h2 className="mb-1 text-center text-lg font-bold text-slate-900">
        Tailor your catalog
      </h2>
      <p className="mb-6 text-center text-sm leading-snug text-gray-500">
        Select your primary role and areas of interest to see relevant
        courses.
      </p>

      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {CATALOG_OPTIONS.map(({ key, label, icon: Icon }) => {
          const isActive = selected.has(key);
          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`relative flex h-21 flex-col items-start justify-between rounded-xl border bg-white px-3 py-3 text-left transition-colors ${isActive ? "border-slate-900" : "border-gray-200"}`}
            >
              {isActive && (
                <div
                  className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-slate-900"
                >
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              )}
              <Icon className="h-4 w-4 text-gray-500" strokeWidth={1.75} />
              <span className="text-xs font-medium text-slate-900">
                {label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-2.5 border-t border-gray-100 pt-4">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
