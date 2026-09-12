import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";

export default function CreatePasswordStep({onNext, onBack, formDetails, setFormDetails}) {
  const [password, setPassword] = useState("K9#mQ!9vL4p$");
  const [confirmPassword, setConfirmPassword] = useState("K9#mQ!9vL4p$");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passkeyEnabled, setPasskeyEnabled] = useState(true);

  // Requirements checks
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNum = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Calculate score
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (hasUpper && hasNum) score++;
  if (hasSpecial) score++;

  const getScoreDetails = () => {
    if (!password) {
      return { label: "Empty", colorClass: "text-[#75777d]", activeBars: 0, barColor: "bg-[#e0e3e5]" };
    }
    if (score <= 1) {
      return { label: "Weak", colorClass: "text-[#ba1a1a]", activeBars: 1, barColor: "bg-[#ba1a1a]" };
    }
    if (score === 2) {
      return { label: "Fair", colorClass: "text-[#3c2300]", activeBars: 2, barColor: "bg-[#ffb95f]" };
    }
    if (score === 3) {
      return { label: "Good", colorClass: "text-[#006c49]", activeBars: 3, barColor: "bg-[#006c49]" };
    }
    return { label: "Strong", colorClass: "text-[#006c49]", activeBars: 4, barColor: "bg-[#006c49]" };
  };

  const scoreDetails = getScoreDetails();
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  return (
    
      <main className="w-full pt-16 bg-[#f7f9fb] max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col w-full">
          <div className="w-full py-8 md:py-12 flex flex-col items-center justify-center relative">
            {/* Subtle Background Accents */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#d8e3fb]/30 via-[#4edea3]/10 to-transparent blur-3xl pointer-events-none rounded-[4px] -z-10" />

            {/* Central Card Container */}
            <div className="w-full max-w-[560px] bg-white rounded-[4px] shadow-sm p-6 md:p-8 flex flex-col">
              {/* Top Brand / Badge Header */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-[4px] bg-[#091426] flex items-center justify-center text-white shadow-sm mb-2">
                  <SchoolIcon className="!text-[26px]" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] leading-[16px] uppercase tracking-widest text-[#45474c] font-bold">
                    AIGODMODE
                  </span>
                  <span className="text-[#45474c] text-[12px] leading-[16px]">
                    •
                  </span>
                  <span className="text-[12px] leading-[16px] text-[#006c49] font-semibold">
                    AI Learning Engine
                  </span>
                </div>
              </div>

              {/* Stepper Indicator */}
              <div className="mt-6 pt-4 bg-[#f2f4f6] p-4 rounded-[4px]">
                <div className="flex items-center justify-between text-[#191c1e] mb-1">
                  <div className="flex items-center gap-1">
                    <span className="px-1 py-0.5 rounded-[4px] bg-[#091426] text-white text-[12px] leading-[16px] font-semibold">
                      Step 3 of 5
                    </span>
                    <span className="text-[14px] leading-[20px] font-semibold text-[#091426]">
                      Secure Your Account
                    </span>
                  </div>
                  <span className="text-[12px] leading-[16px] text-[#45474c] font-medium">
                    60% Complete
                  </span>
                </div>
                {/* Progress track */}
                <div className="w-full h-1.5 bg-[#e0e3e5] rounded-[4px] overflow-hidden flex">
                  <div
                    className="h-full bg-[#006c49] transition-all duration-300 rounded-[4px]"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>

              {/* Form Heading */}
              <div className="mt-6 mb-4">
                <h1 className="text-[24px] leading-[32px] text-[#091426] tracking-tight font-bold">
                  Create a Secure Password
                </h1>
                <p className="text-[14px] leading-[20px] text-[#45474c] mt-1">
                  Choose a strong password to protect your account, cloud
                  sandboxes, and verified AI course certifications.
                </p>
              </div>

              {/* Password Creation Form */}
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Password Input */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-[14px] leading-[20px] font-semibold text-[#091426]"
                      htmlFor="password-input"
                    >
                      New Password
                    </label>
                    <span
                      className={`text-[12px] leading-[16px] font-semibold ${scoreDetails.colorClass}`}
                    >
                      {scoreDetails.label}
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      className="w-full h-11 px-4 pr-10 rounded-[4px] bg-white text-[#191c1e] text-[14px] leading-[20px] placeholder:text-[#75777d] shadow-sm focus:outline-none focus:bg-[#f2f4f6] transition-colors border border-[#e0e3e5]"
                      id="password-input"
                      name="password"
                      placeholder="Enter a strong password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-2 p-1.5 text-[#45474c] hover:text-[#091426] rounded-[4px] flex items-center justify-center transition-colors"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon className="!text-[20px]" />
                      ) : (
                        <VisibilityIcon className="!text-[20px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Strength Meter (4 Segments) */}
                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-center justify-between text-[#45474c]">
                    <span className="text-[12px] leading-[16px]">
                      Password Security Score
                    </span>
                    <span className="text-[12px] leading-[16px] font-medium text-[#191c1e]">
                      Excellent (Entropy: 84 bits)
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 h-1.5 w-full">
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className={`h-full rounded-[4px] transition-colors duration-200 ${
                          index <= scoreDetails.activeBars
                            ? scoreDetails.barColor
                            : "bg-[#e0e3e5]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Requirements Real-time Checklist */}
                <div className="p-4 rounded-[4px] bg-[#f2f4f6] flex flex-col gap-2">
                  <span className="text-[12px] leading-[16px] font-bold uppercase tracking-wider text-[#45474c]">
                    Security Requirements
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                    <div
                      className={`flex items-center gap-1 ${
                        hasLength ? "" : "opacity-50"
                      }`}
                    >
                      <CheckCircleIcon
                        className={`!text-[18px] ${
                          hasLength ? "text-[#006c49]" : "text-[#75777d]"
                        }`}
                      />
                      <span className="text-[14px] leading-[20px] text-[#191c1e]">
                        12+ characters
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        hasUpper ? "" : "opacity-50"
                      }`}
                    >
                      <CheckCircleIcon
                        className={`!text-[18px] ${
                          hasUpper ? "text-[#006c49]" : "text-[#75777d]"
                        }`}
                      />
                      <span className="text-[14px] leading-[20px] text-[#191c1e]">
                        Uppercase letter (A-Z)
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        hasNum ? "" : "opacity-50"
                      }`}
                    >
                      <CheckCircleIcon
                        className={`!text-[18px] ${
                          hasNum ? "text-[#006c49]" : "text-[#75777d]"
                        }`}
                      />
                      <span className="text-[14px] leading-[20px] text-[#191c1e]">
                        At least one number (0-9)
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        hasSpecial ? "" : "opacity-50"
                      }`}
                    >
                      <CheckCircleIcon
                        className={`!text-[18px] ${
                          hasSpecial ? "text-[#006c49]" : "text-[#75777d]"
                        }`}
                      />
                      <span className="text-[14px] leading-[20px] text-[#191c1e]">
                        Special character (!@#$)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-[14px] leading-[20px] font-semibold text-[#091426]"
                      htmlFor="confirm-password-input"
                    >
                      Confirm Password
                    </label>
                    {passwordsMatch && (
                      <div className="flex items-center gap-1 text-[#006c49]">
                        <CheckIcon className="!text-[16px]" />
                        <span className="text-[12px] leading-[16px] font-semibold">
                          Passwords match
                        </span>
                      </div>
                    )}
                    {passwordsMismatch && (
                      <div className="flex items-center gap-1 text-[#ba1a1a]">
                        <CloseIcon className="!text-[16px]" />
                        <span className="text-[12px] leading-[16px] font-semibold">
                          Passwords do not match
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center">
                    <input
                      className="w-full h-11 px-4 pr-10 rounded-[4px] bg-white text-[#191c1e] text-[14px] leading-[20px] placeholder:text-[#75777d] shadow-sm focus:outline-none focus:bg-[#f2f4f6] transition-colors border border-[#e0e3e5]"
                      id="confirm-password-input"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      aria-label="Toggle confirm password visibility"
                      className="absolute right-2 p-1.5 text-[#45474c] hover:text-[#091426] rounded-[4px] flex items-center justify-center transition-colors"
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon className="!text-[20px]" />
                      ) : (
                        <VisibilityIcon className="!text-[20px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Biometric WebAuthn Passkey Toggle */}
                <div
                  className="p-4 rounded-[4px] bg-[#f2f4f6] hover:bg-[#eceef0] transition-colors flex items-start gap-4 mt-1 cursor-pointer"
                  onClick={() => setPasskeyEnabled(!passkeyEnabled)}
                >
                  <div className="pt-0.5">
                    <input
                      checked={passkeyEnabled}
                      onChange={(e) => setPasskeyEnabled(e.target.checked)}
                      className="w-4 h-4 rounded-[4px] text-[#091426] focus:ring-0 cursor-pointer accent-[#091426]"
                      id="passkey-checkbox"
                      onClick={(e) => e.stopPropagation()}
                      type="checkbox"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-1">
                      <FingerprintIcon className="!text-[18px] text-[#091426]" />
                      <span className="text-[14px] leading-[20px] font-bold text-[#091426]">
                        Enable biometric passkeys (WebAuthn / Touch ID)
                      </span>
                    </div>
                    <span className="text-[14px] leading-[20px] text-[#45474c] mt-0.5">
                      Instantly authenticate your AI development environments
                      without manual passwords across verified devices.
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-4">
                  <button
                    className="w-full h-12 rounded-[4px] bg-[#1e293b] text-white text-[14px] leading-[20px] font-semibold tracking-wide flex items-center justify-center gap-1 shadow-md hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                    type="submit"
                    onClick={onNext}
                  >
                    <span>Save Password &amp; Continue</span>
                    <ArrowForwardIcon className="!text-[18px]" />
                  </button>
                  <div className="flex items-center justify-between pt-1">
                    <a
                      className="h-9 px-2 rounded-[4px] text-[#45474c] hover:text-[#091426] hover:bg-[#eceef0] text-[14px] leading-[20px] font-medium flex items-center gap-1 transition-colors"
                      href="#"
                      onClick={onBack}
                    >
                      <ArrowBackIcon className="!text-[18px]" />
                      <span>Back</span>
                    </a>
                    <a
                      className="text-[12px] leading-[16px] text-[#45474c] hover:text-[#091426] font-medium transition-colors"
                      href="#"
                    >
                      Need help? Contact Support
                    </a>
                  </div>
                </div>
              </form>

              {/* Trust Badges & Security Strip */}
              <div className="mt-8 pt-4 bg-[#f2f4f6] p-2 rounded-[4px] flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-[#45474c]">
                <div className="flex items-center gap-1">
                  <LockIcon className="!text-[16px] text-[#006c49]" />
                  <span className="text-[12px] leading-[16px] font-medium">
                    256-Bit SSL Encrypted
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">•</span>
                <div className="flex items-center gap-1">
                  <VerifiedUserIcon className="!text-[16px] text-[#006c49]" />
                  <span className="text-[12px] leading-[16px] font-medium">
                    SOC-2 Type II Certified
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">•</span>
                <div className="flex items-center gap-1">
                  <KeyIcon className="!text-[16px] text-[#006c49]" />
                  <span className="text-[12px] leading-[16px] font-medium">
                    Multi-Factor Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Page Bottom Meta */}
            <div className="mt-6 text-center max-w-[560px] px-4">
              <p className="text-[12px] leading-[16px] text-[#45474c]">
                © 2026 AIGODMODE. Open to individual builders, academic teams, and
                enterprise engineering.
              </p>
            </div>
          </div>
        </div>
      </main>

  );
}