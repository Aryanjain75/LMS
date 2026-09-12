"use client";
import React, { useState } from "react";
import LockResetIcon from "@mui/icons-material/LockReset";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ResetPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (

      <main className="w-full pt-16 flex-1 flex items-center justify-center bg-[#f7f9fb]">
        <div className="flex flex-col w-full h-full justify-center items-center px-4 md:px-10 py-12 bg-[#f7f9fb] relative overflow-hidden">
          {/* Subtle Radial Pattern Background */}
          <div
            className="absolute inset-0 bg-[#ffffff]/50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(9, 20, 38, 0.03) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(9, 20, 38, 0.05) 0%, transparent 25%)",
            }}
          />

          <div className="relative w-full max-w-md mx-auto z-10 flex flex-col bg-white rounded-xl shadow-xl overflow-hidden group border border-[#e0e3e5]">
            {/* Top Hover Accent Bar */}
            <div className="h-2 w-full bg-[#091426] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

            <div className="p-8 flex flex-col gap-6 items-center">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#d8e3fb]/20 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#d8e3fb] border-dashed animate-[spin_10s_linear_infinite]" />
                <LockResetIcon className="text-[#091426] !text-[32px]" />
              </div>

              {/* Title & Subtitle */}
              <div className="text-center w-full">
                <h2 className="text-[32px] leading-[40px] tracking-[-0.02em] font-semibold text-[#191c1e] mb-2">
                  Reset Your Password
                </h2>
                <p className="text-[16px] leading-[24px] text-[#45474c]">
                  Please enter a new password for your account.
                </p>
              </div>

              {/* Form */}
              <form
                className="w-full flex flex-col gap-6 mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* New Password Input */}
                <div className="flex flex-col gap-2 w-full relative">
                  <label
                    className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e] flex justify-between"
                    htmlFor="new-password"
                  >
                    <span>New Password</span>
                    <span className="text-[12px] leading-[16px] font-semibold text-[#75777d]">
                      Minimum 8 characters
                    </span>
                  </label>
                  <div className="relative w-full">
                    <input
                      className="w-full px-4 py-3 bg-[#eceef0] rounded-lg text-[16px] leading-[24px] text-[#191c1e] placeholder-[#c5c6cd] focus:outline-none focus:ring-2 focus:ring-[#091426] transition-shadow border-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pr-12"
                      id="new-password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#45474c] hover:text-[#091426] transition-colors focus:outline-none rounded-full hover:bg-[#e6e8ea]"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      type="button"
                    >
                      {showNewPassword ? (
                        <VisibilityIcon className="!text-[20px]" />
                      ) : (
                        <VisibilityOffIcon className="!text-[20px]" />
                      )}
                    </button>
                  </div>

                  {/* Password Strength Indicator */}
                  <div className="flex gap-1 w-full mt-1">
                    <div className="h-1 flex-1 bg-[#e0e3e5] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ba1a1a] w-1/4" />
                    </div>
                    <div className="h-1 flex-1 bg-[#e0e3e5] rounded-full" />
                    <div className="h-1 flex-1 bg-[#e0e3e5] rounded-full" />
                    <div className="h-1 flex-1 bg-[#e0e3e5] rounded-full" />
                  </div>
                  <p className="text-[12px] leading-[16px] font-semibold text-[#ba1a1a] mt-1">
                    Password is too weak
                  </p>
                </div>

                {/* Confirm Password Input */}
                <div className="flex flex-col gap-2 w-full relative">
                  <label
                    className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#191c1e]"
                    htmlFor="confirm-password"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative w-full">
                    <input
                      className="w-full px-4 py-3 bg-[#eceef0] rounded-lg text-[16px] leading-[24px] text-[#191c1e] placeholder-[#c5c6cd] focus:outline-none focus:ring-2 focus:ring-[#091426] transition-shadow border-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pr-12"
                      id="confirm-password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#45474c] hover:text-[#091426] transition-colors focus:outline-none rounded-full hover:bg-[#e6e8ea]"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      type="button"
                    >
                      {showConfirmPassword ? (
                        <VisibilityIcon className="!text-[20px]" />
                      ) : (
                        <VisibilityOffIcon className="!text-[20px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full py-3 mt-4 bg-[#091426] text-white rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:bg-[#191c1e] transition-colors shadow-md flex items-center justify-center gap-2 group relative overflow-hidden"
                  type="submit"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10">Reset Password</span>
                  <ArrowForwardIcon className="!text-[20px] relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Back to Login Footer */}
            <div className="px-8 py-4 bg-[#f2f4f6] flex justify-center border-t border-[#e0e3e5]/50">
              <a
                className="inline-flex items-center gap-1 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#091426] hover:text-[#191c1e] transition-colors group"
                href="#"
              >
                <ArrowBackIcon className="!text-[18px] group-hover:-translate-x-1 transition-transform" />
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </main>
  );
}