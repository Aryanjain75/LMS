import React, { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Logo, ProgressBar } from "../../app/Signup/page";

export default function EmailOtpVerificationStep({ onNext, onBack ,formDetails, setFormDetails}) {
  const [otp, setOtp] = useState(["8", "4", "9", "2", "0", "4"]);
  const [totalSeconds, setTotalSeconds] = useState(585);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
      <main className="w-full flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col w-full items-center justify-center py-6 px-4">
                    <div className="w-full max-w-xl bg-white border border-[#c5c6cd]/60 rounded-[4px] shadow-sm px-8 pt-6 flex flex-col">
            <Logo/>
            <ProgressBar step={5} />
            {/* Title & Subtitle */}
            <div className="text-center mb-6">
              <h2 className="text-[20px] leading-[28px] text-[#191c1e] font-semibold">
                Verify your work email
              </h2>
              <p className="text-[14px] leading-[20px] text-[#45474c] mt-1.5 max-w-md mx-auto">
                We have dispatched a 6-digit verification key and attached institutional pass to your email.
              </p>
            </div>

            {/* Recipient Email Chip Banner */}
            <div className="w-full bg-[#f2f4f6] border border-[#c5c6cd]/60 rounded-[4px] p-3 mb-6 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <MarkEmailReadIcon className="text-[#091426] !text-[18px]" />
                <span className="text-[14px] leading-[20px] font-semibold text-[#091426] truncate">
                  {formDetails.email}
                </span>
                
              </div>
              <button
                className="text-[12px] leading-[16px] text-[#091426] hover:text-[#45474c] underline transition-colors"
                type="button"
                onClick={() => {onBack()}}
              >
                Change email
              </button>
            </div>

            {/* 6-Digit OTP Box Grid */}
            <div className="flex flex-col items-center w-full mb-6">
              <label className="text-[14px] leading-[20px] text-[#191c1e] font-medium mb-3 self-start">
                Enter 6-Digit Verification Token
              </label>
              <div className="grid grid-cols-6 gap-2 sm:gap-3 w-full">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    className="w-full h-13 text-center text-[20px] leading-[28px] font-semibold font-mono text-[#091426] bg-[#f2f4f6] border border-[#c5c6cd]/80 rounded-[4px] focus:border-[#091426] focus:bg-white focus:outline-none transition-all py-2"
                    maxLength={1}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    type="text"
                    value={digit}
                  />
                ))}
              </div>

              {/* Live Countdown & Resend */}
              <div className="w-full flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-1.5 text-[#45474c] text-[12px] leading-[16px]">
                  <ScheduleIcon className="!text-[16px] text-[#45474c]" />
                  <span>
                    Expires in{" "}
                    <strong className="text-[#091426] font-semibold">
                      {formatTime(totalSeconds)}
                    </strong>
                  </span>
                </div>
                <button
                  className="text-[#45474c] hover:text-[#091426] text-[12px] leading-[16px] font-medium transition-colors"
                  type="button"
                >
                  Resend code in <span className="font-semibold text-[#091426]">{totalSeconds}s</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3 bg-[#091426] text-white rounded-[4px] text-[14px] leading-[20px] font-semibold tracking-wide hover:bg-[#1e293b] transition-colors shadow-sm flex items-center justify-center gap-2"
                type="button"
                onClick={onNext}
              >
                <span>Verify &amp; Continue</span>
                <ArrowForwardIcon className="!text-[18px]" />
              </button>
              <div className="flex items-center justify-between pt-1">
                <button
                  className="px-4 py-2 border border-[#c5c6cd]/80 rounded-[4px] text-[#191c1e] text-[14px] leading-[20px] hover:bg-[#f2f4f6] transition-colors flex items-center gap-1"
                  type="button"
                  onClick={onBack}
                >
                  <ArrowBackIcon className="!text-[16px]" />
                  <span>Back</span>
                </button>
                <button
                  className="text-[12px] leading-[16px] text-[#45474c] hover:text-[#091426] transition-colors flex items-center gap-1"
                  type="button"
                >
                  <HelpIcon className="!text-[15px]" />
                  <span>Need help with code?</span>
                </button>
              </div>
            </div>

            {/* SSO Link Footer */}
            <div className="text-center mt-6 py-5 border-t border-[#c5c6cd]/40">
              <p className="text-[12px] leading-[16px] text-[#45474c]">
                Already verified via enterprise SSO?{" "}
                <a
                  className="text-[#091426] font-semibold hover:underline ml-0.5"
                  href="#skip"
                >
                  Skip step
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

  );
}