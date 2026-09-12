'use client'

import Link from 'next/link'
export function Footer() { 
    return <footer className="border-t border-slate-200 bg-white px-4 py-14 text-sm text-slate-500">
                <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-4 mx-auto w-[calc(100%-30px)] max-w-[1180px] md:w-[calc(100%-48px)]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 font-extrabold tracking-tight text-[#091426]">
                            <span className="grid size-8 place-items-center rounded bg-[#091426] text-white">A</span>AIGODMODE
                        </Link>
                        <p className="mt-5 max-w-xs leading-7">The autonomous corporate learning infrastructure. Accelerating workforce capability through adaptive AI intelligence frameworks.</p>
                        <div className="mt-5 flex gap-2">
                            <span className="rounded bg-slate-100 px-2 py-1 text-[11px]">✓ SOC2 Type II</span>
                            <span className="rounded bg-slate-100 px-2 py-1 text-[11px]">✓ WCAG AAA</span>
                        </div>
                    </div>
                    <FooterGroup title="Product Pillars" items={['Adaptive Syllabi', 'Cognitive Assessment', 'LLM Mentorship']} />
                    <FooterGroup title="Solutions" items={['Enterprise L&D', 'Institutional Hubs', 'Academic Research']} />
                    <FooterGroup title="Documentation" items={['Field Manuals', 'API References', 'Model Governance']} />
                </div>
                <div className="mx-auto w-[calc(100%-30px)] max-w-[1180px] md:w-[calc(100%-48px)] flex flex-col justify-between gap-3 pt-5 text-[11px] sm:flex-row">
                    <span>© 2025 AIGODMODE Inc. All rights reserved.</span>
                    <span>System Status · Privacy Architecture · Terms of Protocol</span>
                </div>
            </footer>
}
function FooterGroup({ title, items }: { title: string; items: string[] }) { 
    return <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[.12em] text-[#091426]">{title}</h3>
        <ul className="space-y-2.5">
            {items.map(item => 
                <li key={item}>
                    <Link href="#" className="hover:text-[#091426]">{item}</Link>
                </li>)}
        </ul>
        </div> }
