"use client";
import React, { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Logo, ProgressBar } from "../../app/Signup/page";
import axios from "axios";
export default  function EmailVerificationStep({ onNext, onBack, formDetails, setFormDetails }) {
    const [email, setEmail] = useState("alex.mercer@stanford.edu" || formDetails.email);
    const [attachHandshake, setAttachHandshake] = useState(true);
    async function handleemailtrigger() {
    try {
        let location = {
            latitude: null,
            longitude: null,
            accuracy: null,
        };

        // Get location if available
        if (navigator.geolocation) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        resolve,
                        reject,
                        {
                            enableHighAccuracy: true,
                            timeout: 10000,
                            maximumAge: 0,
                        }
                    );
                });

                location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                };
            } catch (error) {
                console.log("Location permission denied/unavailable");
            }
        }

        // Collect browser/device information
        const userData = {
            email,
            fullName: formDetails.fullName,
            phone: formDetails.phone,
            department: formDetails.department,
            jobRole: formDetails.jobRole,
            catalogPreferences: Array.from(formDetails.catalogPreferences),
            location,
            device: {
                userAgent: navigator.userAgent,
                language: navigator.language,
                languages: navigator.languages,
                platform: navigator.platform,
                online: navigator.onLine,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height,
                },
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
            },
            page: {
                url: window.location.href,
                referrer: document.referrer,
            },
        };

        console.log("Sending:", userData);

        const response = await axios.post(
            "/api/Setupemail",
            { data: JSON.stringify(userData) }
        );
        if(response.status === 200) {
            onNext();
        }
        console.log("Server response:", response.data);

    } catch (err) {
        console.error("Error:", err);
    }
}
    useEffect(() => {
        setFormDetails({
            ...formDetails,
            email
        })


    }, [email])
    return (
        <main className="w-full flex-1 flex items-center justify-center p-4">
            <div className="flex flex-col w-full items-center justify-center py-6 px-4">
                {/* Main Modal / Verification Enrollment Container */}
                <div className="w-full max-w-[560px] bg-white rounded-[4px] shadow-sm overflow-hidden flex flex-col border border-[#e0e3e5]">

                    <div className="px-8 pt-8 flex flex-col">
                        <Logo />
                        <ProgressBar step={3} />
                    </div>

                    {/* Section Title & Narrative */}
                    <div className="px-6 pt-2 pb-5 flex flex-col gap-1.5">
                        <h1 className="text-[24px] leading-[32px] text-[#191c1e] tracking-tight font-semibold">
                            Enter your email address
                        </h1>
                        <p className="text-[14px] leading-[20px] text-[#45474c] leading-relaxed">
                            We'll send a 6-digit verification code to verify your account and get your
                            workspace ready. Personal, company, and university emails welcome.
                        </p>
                    </div>

                    {/* Core Form Area */}
                    <form className="px-6 flex flex-col gap-4 pb-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Input Wrapper */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                className="text-[14px] leading-[20px] tracking-[0.01em] text-[#191c1e] font-semibold flex items-center justify-between"
                                htmlFor="work-email"
                            >
                                <span>Email Address</span>
                                <span className="text-[11px] text-[#006c49] font-medium flex items-center gap-1">
                                    <VerifiedUserIcon className="!text-[14px]" /> Instant Verification Available
                                </span>
                            </label>
                            <div className="relative flex items-center">
                                <MailIcon className="absolute left-3 text-[#45474c] !text-[20px] pointer-events-none" />
                                <input
                                    className="w-full bg-[#f2f4f6] text-[#191c1e] text-[16px] leading-[24px] pl-10 pr-24 py-2.5 rounded-[4px] outline-none transition-all placeholder-[#75777d] text-slate-900 focus:ring-1 focus:ring-[#091426]"
                                    id="work-email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. alex.mercer@stanford.edu"
                                    type="email"
                                    value={email}
                                />
                                <div className="absolute right-2.5 flex items-center">
                                    <span className="inline-flex items-center gap-1 bg-[#006c49]/10 text-[#006c49] text-[11px] font-semibold px-2 py-1 rounded-[4px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                                        Verified
                                    </span>
                                </div>
                            </div>


                        </div>

                        {/* Enterprise Resource Allocation Card */}
                        <div className="bg-[#f2f4f6] p-3.5 rounded-[4px] flex items-start gap-3">
                            <SchoolIcon className="text-[#091426] !text-[20px] mt-0.5" />
                            <div className="flex flex-col gap-0.5 text-left">
                                <span className="text-[12px] leading-[16px] text-[#191c1e] font-semibold">
                                    Open to All Builders & Researchers
                                </span>
                                <p className="text-[12px] leading-normal text-[#45474c]">
                                    All accounts receive full access to foundational tracks and personal lab
                                    environments. Using a university or company email? We automatically detect
                                    eligible domains to unlock sponsored compute clusters, campus sandboxes,
                                    and cohort tracks.
                                </p>
                            </div>
                        </div>

                        {/* Terminal / Token Checkbox */}
                        <label className="flex items-start gap-2.5 cursor-pointer select-none pt-1">
                            <input
                                checked={attachHandshake}
                                className="mt-1 h-4 w-4 rounded-[4px] accent-[#091426] cursor-pointer"
                                onChange={(e) => setAttachHandshake(e.target.checked)}
                                type="checkbox"
                            />
                            <span className="text-[13px] text-[#191c1e] leading-snug">
                                Generate local CLI session token & quickstart credentials (Optional:
                                recommended for terminal workflows and local dev environments)
                            </span>
                        </label>

                        {/* Latency & Dispatch Signal */}
                        <div className="flex items-center justify-between text-[#45474c] text-[12px] pt-1">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block" />
                                Estimated dispatch latency: ~2-5 seconds
                            </span>
                            <span className="text-[11px] font-mono text-[#75777d]">
                                RFC 5424 RELAY OK
                            </span>
                        </div>

                        {/* Primary Action CTA */}
                        <button
                            className="w-full bg-[#091426] hover:bg-slate-800 text-white text-[14px] leading-[20px] tracking-[0.01em] font-semibold py-3 px-4 rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors mt-1"
                            onClick={handleemailtrigger}
                            type="submit"
                        >
                            <span>Send Verification Code</span>
                            <ArrowForwardIcon className="!text-[18px]" />
                        </button>

                        {/* Secondary Controls & Alternative Logins */}
                        <div className="flex items-center justify-between pt-2 border-t-0">
                            <button
                                className="bg-white hover:bg-[#f2f4f6] text-[#191c1e] text-[12px] leading-[16px] font-semibold py-2 px-3 rounded-[4px] flex items-center gap-1.5 transition-colors border border-[#e0e3e5]"
                                type="button"
                                onClick={onBack}
                            >
                                <ArrowBackIcon className="!text-[16px]" />
                                <span>Back</span>
                            </button>
                            <a
                                className="text-[12px] leading-[16px] text-[#45474c] hover:text-[#091426] transition-colors flex items-center gap-1"
                                href="#admin-help"
                            >
                                <ContactSupportIcon className="!text-[15px]" />
                                Need help? Contact IT Admin
                            </a>
                        </div>
                    </form>


                </div>

                {/* Verification Key Exchange Auxiliary Terminal Info */}
                <div className="w-full max-w-[560px] flex items-center justify-between px-2 pt-3 text-[#45474c] text-[11px]">
                    <span className="font-mono text-[#75777d]">
                        SESSION ID: #09-STANFORD-AUTH-REQ-8821
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                        Gateway US-West-02 Active
                    </span>
                </div>
            </div>
        </main>

    );
}