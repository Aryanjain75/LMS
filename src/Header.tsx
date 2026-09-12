'use client'
import { useState  } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PageKind = 'landing' | 'features' | 'solutions' | 'pricing' | 'dashboard' | 'mylearnings' | 'catalog' | 'compliance' | 'team' | 'reports' | 'resources'

const navItems: { label: string; href: string; kind: PageKind }[] = [
    { label: 'Landing Page', href: '/', kind: 'landing' },
    { label: 'Features', href: '/features', kind: 'features' },
    { label: 'Solutions', href: '/solutions', kind: 'solutions' },
    { label: 'Pricing', href: '/pricing', kind: 'pricing' },
]
const UsernavItems: { label: string; href: string; kind: PageKind }[] = [
    { label: 'Dashboard', href: '/', kind: 'dashboard' },
    { label: 'MyLearnings', href: '/mylearnings', kind: 'mylearnings' },
    { label: 'Catalog', href: '/Catalog', kind: 'catalog' },
    { label: 'Compliance', href: '/Compliance', kind: 'compliance' },
    { label: 'Resources', href: '/Resourselibrary', kind: 'resources' },
    { label: 'Team', href: '/Team', kind: 'team' },
    { label: 'Reports', href: '/Reports', kind: 'reports' },

]

export function Header() {
    const pathname = usePathname()
    const [navItemsToUse, setNavItemsToUse] = useState(navItems);
    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex min-h-16 px-3  items-center justify-between gap-6 md:min-h-[68px]">

                <Link href="/" className="inline-flex items-center gap-2 whitespace-nowrap font-extrabold tracking-tight text-[#091426]">
                    <span className="grid size-8 place-items-center rounded bg-[#091426] text-white">A</span>
                    <span>AIGODMODE</span>
                    <small className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[9px] tracking-[.12em] text-slate-500">CORE L&amp;D</small>
                </Link>

                <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary navigation">

                    {navItemsToUse.map((item) => {
                        const active =
                            item.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(item.href)

                        return (
                            <Link
                                key={item.kind}
                                href={item.href}
                                className={
                                    active
                                        ? 'rounded bg-slate-100 px-3 py-2 text-[13px] text-[#091426]'
                                        : 'rounded px-3 py-2 text-[13px] text-slate-500 hover:bg-slate-100 hover:text-[#091426]'
                                }
                            >
                                {item.label}
                            </Link>
                        )
                    })}

                </nav>

                <div className="flex items-center gap-2">
                        <Link href="/Login" className="hidden rounded px-3 py-2 text-[13px] text-slate-500 hover:text-[#091426] sm:inline-flex">
                        Login
                    </Link>

                    <Link
                        href="/Dashboard"
                        className="inline-flex items-center justify-center rounded bg-[#091426] px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#25344c]"
                        onClick={() => setNavItemsToUse(UsernavItems)}
                    >
                        Get Started
                    </Link>

                    
                </div>

            </div>
        </header>
    )
}