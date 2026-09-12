"use client";

import { useState, useRef } from "react";
import React from "react";
import {
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { StepJoinOrg } from "../../src/Signup/StepJoinOrg";
import { StepTailorCatalog } from "../../src/Signup/StepTailorCatalog";
import EmailVerificationStep from "../../src/Signup/StepEmailConfirmation";
import EmailOtpVerificationStep from "../../src/Signup/EmailOTPVerification";
import ConnectSsoStep from "../../src/Signup/StepSSOVerification";
import CreatePasswordStep from "../../src/Signup/StepPasswordVerification";
import WorkspaceProvisionedStep from "../../src/Signup/CompleteionStep";

const STEP_COUNT = 6;

export function Logo() {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-slate-900">
        <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <h1
        className="text-sm font-bold tracking-wide text-slate-900"
      >
        AIGODMODE
      </h1>
    </div>
  );
}

export function ProgressBar({ step }) {
  return (
    <div className="flex gap-1.5 w-full mb-6 mt-3">
      {Array.from({ length: STEP_COUNT }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full ${i < step ? "bg-slate-900" : "bg-gray-200"}`}
        />
      ))}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white px-8 py-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      {children}
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <label
      className="mb-1.5 block text-xs font-semibold text-slate-900"
    >
      {children}
    </label>
  );
}



/* ---------------- Root flow ---------------- */
export default function AigodmodeSignup() {
  const [step, setStep] = useState(1);
  const [formDetails, setFormDetails] = useState({
    fullName:"",
    department:"",
    jobRole:"",
    phone:"",
    catalogPreferences: new Set([]),//Engineering, Sales, Design, People
    email:"",
  });
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center py-10 px-4 bg-[#FAFAFA]"
    >
      {step === 1 && <StepJoinOrg onNext={() => setStep(2)} formDetails={formDetails} setFormDetails={setFormDetails} />}
      {step === 2 && <StepTailorCatalog onNext={() => setStep(3)} onBack={() => setStep(1)} formDetails={formDetails} setFormDetails={setFormDetails} />}
      {step === 3 && <EmailVerificationStep onNext={() => setStep(4)} onBack={() => setStep(2)} formDetails={formDetails} setFormDetails={setFormDetails} />}
      {step === 4 && <EmailOtpVerificationStep onNext={() => setStep(5)} onBack={() => setStep(4)} formDetails={formDetails} setFormDetails={setFormDetails}  />}
      {step === 5 && <ConnectSsoStep onNext={() => setStep(6)} onBack={() => setStep(4)} formDetails={formDetails} setFormDetails={setFormDetails} />}
      {step === 6 && <CreatePasswordStep onNext={() => setStep(7)} onBack={() => setStep(5)} formDetails={formDetails} setFormDetails={setFormDetails} />}
      {step === 7 && <WorkspaceProvisionedStep/>}
    </div>
  );
}