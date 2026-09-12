"use client";

import React,{useState,useEffect} from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Logo, ProgressBar } from "../../app/Signup/page";

export function StepJoinOrg({ onNext, formDetails, setFormDetails }) {
    const [fullName, setFullName] = useState(formDetails.fullName || "");
    const [department, setDepartment] = useState(formDetails.department || "");
    const [jobRole, setJobRole] = useState(formDetails.jobRole || "");
    const [phone, setPhone] = useState(formDetails.phone || "");
    useEffect(()=>{
      const catalogKey = department === "people" ? "manager" : department;
      setFormDetails({
        ...formDetails,
        fullName,
        department,
        jobRole,
        phone,
        catalogPreferences: catalogKey ? new Set([catalogKey]) : new Set(),
      });
    },[fullName, department, jobRole, phone])
  return (
    <div className=" w-full max-w-[560px] rounded border border-gray-100 bg-white px-8 py-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <Logo />
      <ProgressBar step={1} />
      <h2 className="mb-1 text-center text-lg font-bold text-slate-900">Join your organization</h2>
      <p className="mb-6 text-center text-sm text-gray-500">Set up your enterprise learning account to continue.</p>
      <div className="space-y-4">
        <label className="block text-xs font-semibold text-slate-900" htmlFor="full-name">
          Full Name
          <input id="full-name" type="text" placeholder="Jane Doe" className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition-shadow focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label className="block text-xs font-semibold text-slate-900" htmlFor="department">
          Department
          <span className="relative mt-1.5 block">
            <select id="department" className="w-full appearance-none rounded border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition-shadow focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10" defaultValue={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="" disabled>Select your department</option>
              <option value="engineering">Engineering</option>
              <option value="sales">Sales</option>
              <option value="design">Design</option>
              <option value="people">People</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          </span>
        </label>
        <label className="block text-xs font-semibold text-slate-900" htmlFor="job-role">
          Job Role
          <input id="job-role" type="text" placeholder="e.g. Senior Software Engineer" className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition-shadow focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
        </label>
        <label className="block text-xs font-semibold text-slate-900" htmlFor="phone">
          Phone Number (Optional)
          <input id="phone" type="text" placeholder="e.g. +1 (555) 123-4567" className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition-shadow focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button onClick={onNext} className="mt-1 w-full rounded bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800" type="button">Tailor your category</button>
      </div>
      <p className="mt-5 border-t border-gray-100 pt-4 text-center text-xs text-gray-500">Already have an account? <Link className="font-semibold text-slate-900 hover:underline" href="/Login">Log in</Link></p>
    </div>
  );
}
