"use client";
import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmittedEmail(email);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb] p-4 font-sans text-[#191c1e]">
        <main className="w-full max-w-md rounded-xl border border-[#c5c6cd] bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#d8e3fb]/60 text-[#091426]">
            <MarkEmailReadIcon className="!text-3xl" />
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-[#191c1e]">Check your email</h2>
          <p className="mb-8 text-base leading-7 text-[#45474c]">
            We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions.
          </p>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e293b] px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#091426] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091426]"
            href="/Login"
          >
            <ArrowBackIcon className="!text-[18px]" />
            Back to login
          </Link>
          <p className="mt-6 text-sm leading-5 text-[#45474c]">
            Didn&apos;t receive the email?{' '}
            <button
              className="font-medium text-[#091426] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
              onClick={() => setIsSubmitted(false)}
              type="button"
            >
              Click to resend
            </button>
          </p>
          <p className="mt-3 text-xs text-[#75777d]">Sent to {submittedEmail}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#f2f4f6] font-sans text-[#191c1e]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-2 mb-6">
          <SchoolIcon className="text-[#091426] !text-4xl" />
          <h1 className="text-[20px] leading-[28px] font-black text-[#091426]">
            AIGODMODE AI Learning
          </h1>
        </div>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white py-10 px-6 sm:px-12 rounded-xl border border-[#e0e3e5] shadow-sm">
          {!isSubmitted && (
            <div className="mb-8 text-center">
              <h2 className="text-[24px] leading-[32px] -letter-spacing-[0.01em] font-semibold text-[#191c1e] mb-2">
                Forgot Password?
              </h2>
              <p className="text-[16px] leading-[24px] text-[#45474c]">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
            </div>
          )}

          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] mb-1"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#c5c6cd]">
                    <MailOutlineIcon className="!text-[20px]" />
                  </div>
                  <input
                    autoComplete="email"
                    className="block w-full pl-10 pr-3 py-3 border border-[#e0e3e5] rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-1 focus:ring-[#091426] focus:border-[#091426] text-[16px] leading-[24px] text-[#191c1e] bg-white placeholder-[#c5c6cd] transition-colors"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[14px] leading-[20px] tracking-[0.01em] font-medium text-white bg-[#1e293b] hover:bg-[#091426] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#091426] transition-colors duration-200"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#4edea3]/10 border border-[#006c49] p-4 rounded-lg flex items-start gap-3">
              <CheckCircleIcon className="text-[#006c49] shrink-0" />
              <div>
                <h3 className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#006c49] mb-1">
                  Check your email
                </h3>
                <p className="text-[14px] leading-[20px] text-[#45474c]">
                  If an account exists for{" "}
                  <span className="font-semibold text-[#191c1e]">{submittedEmail}</span>, we have sent password reset instructions.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              className="text-[14px] leading-[20px] tracking-[0.01em] text-[#091426] hover:text-[#1e293b] font-medium flex items-center justify-center gap-1 transition-colors"
              href="/Login"
            >
              <ArrowBackIcon className="!text-[16px]" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}