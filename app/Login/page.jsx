"use client";

import Link from "next/link";
import SchoolIcon from "@mui/icons-material/School";
import WindowIcon from "@mui/icons-material/Window";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb] p-4 font-sans text-[#191c1e] md:p-10">
      <main className="w-full max-w-[440px] rounded-xl border border-[#e0e3e5] bg-white p-8 shadow-sm">
        <header className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#091426] text-white shadow-sm"><SchoolIcon className="!text-[28px]" /></div>
          <h1 className="mb-2 text-center text-2xl font-semibold text-[#091426]">AIGODMODE</h1>
          <p className="text-center text-[#45474c]">Sign in to your learning dashboard</p>
        </header>
        <div className="mb-6 flex flex-col gap-3">
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#c5c6cd] bg-white px-4 py-2.5 transition-colors hover:bg-[#f2f4f6]"><WindowIcon className="text-[#00a4ef] !text-[20px]" /><span className="text-sm font-medium">Sign in with Microsoft</span></button>
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#c5c6cd] bg-white px-4 py-2.5 transition-colors hover:bg-[#f2f4f6]"><AccountCircleIcon className="text-[#DB4437] !text-[20px]" /><span className="text-sm font-medium">Sign in with Google</span></button>
        </div>
        <div className="mb-6 flex items-center gap-4"><div className="h-px flex-1 bg-[#c5c6cd]/40" /><span className="shrink-0 text-sm text-[#45474c]">or sign in with email</span><div className="h-px flex-1 bg-[#c5c6cd]/40" /></div>
        <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="text-xs font-semibold" htmlFor="email">Email address<input className="mt-1.5 w-full rounded-lg border border-[#c5c6cd] bg-[#f7f9fb] px-3 py-2.5 text-base font-normal focus:border-[#091426] focus:outline-none focus:ring-1 focus:ring-[#091426]" id="email" name="email" placeholder="name@company.com" type="email" /></label>
          <label className="text-xs font-semibold" htmlFor="password">Password<input className="mt-1.5 w-full rounded-lg border border-[#c5c6cd] bg-[#f7f9fb] px-3 py-2.5 text-base font-normal focus:border-[#091426] focus:outline-none focus:ring-1 focus:ring-[#091426]" id="password" name="password" placeholder="••••••••" type="password" /></label>
          <div className="mb-2 mt-1 flex items-center justify-between"><label className="flex cursor-pointer items-center gap-2 text-sm text-[#45474c]"><input className="size-4" type="checkbox" />Remember me</label><Link className="text-xs font-semibold text-[#091426] hover:opacity-80" href="/forget/email-confirmation">Forgot password?</Link></div>
          <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e293b] py-3 text-sm font-bold text-[#8590a6] transition-all hover:opacity-90 active:scale-[.98]" type="submit">Sign In <ArrowForwardIcon className="!text-[18px]" /></button>
        </form>
        <p className="mt-8 text-center text-sm text-[#45474c]">Don&apos;t have an account? </p>
            <div>
                <Link className="text-xs font-semibold text-[#091426] hover:underline" href="/solutions">Contact your administrator</Link> | 
                <Link className="text-xs font-semibold text-[#091426] hover:underline" href="/Signup">create new account</Link> | 
                <Link className="text-xs font-semibold text-[#091426] hover:underline" href="/solutions">Start onboarding process</Link>
            </div>
      </main>
    </div>
  );
}
