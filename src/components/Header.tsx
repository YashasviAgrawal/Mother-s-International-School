"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, school } from "@/data/site";
import { Crest } from "./Crest";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-brand-800 text-[0.78rem] text-brand-100 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${school.phones[0]}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" /> {school.phones[0]}
            </a>
            <a href={`mailto:${school.emails.office}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" /> {school.emails.office}
            </a>
            <span className="hidden items-center gap-2 lg:flex">
              <Icon name="clock" className="h-3.5 w-3.5" /> {school.hours.office}
            </span>
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <a href={school.links.parentPortal} target="_blank" rel="noreferrer" className="hover:text-white">Parent Portal</a>
            <Link href="/fees" className="hover:text-white">Fee Structure</Link>
            <Link href="/about#disclosures" className="hover:text-white">CBSE Disclosure</Link>
            <a href={school.links.alumni} target="_blank" rel="noreferrer" className="hover:text-white">Alumni</a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-brand-100 bg-white/95 shadow-[0_10px_30px_-18px_rgba(13,43,71,.35)] backdrop-blur" : "border-transparent bg-white"}`}>
        <div className={`container-x flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-[72px]" : "h-[88px]"}`}>
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${school.name} — home`}>
            <Crest className={`shrink-0 transition-all duration-300 ${scrolled ? "h-11 w-11" : "h-12 w-12 sm:h-14 sm:w-14"}`} />
            <span className="min-w-0 leading-tight">
              <span className="block font-serif text-[1.05rem] font-semibold leading-[1.1] text-ink sm:text-[1.4rem] xl:text-[1.3rem] 2xl:text-[1.45rem]">
                The Mother&apos;s <br className="sm:hidden xl:inline 2xl:hidden" />
                International School
              </span>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-600">New Delhi · Est. {school.founded}</span>
            </span>
          </Link>

          <nav className="hidden items-center xl:flex" aria-label="Main">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.86rem] font-semibold transition-colors 2xl:px-3.5 ${isActive(item.href) ? "text-brand-600" : "text-ink hover:text-brand-600"}`}
                >
                  {item.label}
                  {item.children && <Icon name="chevron" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                </Link>
                {isActive(item.href) && <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded bg-brand-500" />}
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white p-2 shadow-lift">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-brand-50 hover:text-brand-700">
                          {c.label}
                          <Icon name="arrow" className="h-4 w-4 opacity-40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/admissions" className="btn btn-primary hidden sm:inline-flex">
              Admissions {` `}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-200 text-ink xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] xl:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <aside className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
            <span className="flex items-center gap-2">
              <Crest className="h-9 w-9" />
              <span className="font-serif text-lg font-semibold">MIS, New Delhi</span>
            </span>
            <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-brand-50" aria-label="Close menu">
              <Icon name="close" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-brand-50">
                <div className="flex items-center">
                  <Link href={item.href} className={`flex-1 px-3 py-3.5 font-semibold ${isActive(item.href) ? "text-brand-600" : "text-ink"}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => setExpanded(expanded === item.label ? null : item.label)} className="grid h-10 w-10 place-items-center text-brand-600" aria-label={`Expand ${item.label}`}>
                      <Icon name="chevron" className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <div className="mb-2 ml-3 border-l-2 border-brand-100 pl-3">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block py-2 text-sm text-ink-soft">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="space-y-2 border-t border-brand-100 p-5 text-sm">
            <Link href="/admissions" className="btn btn-primary w-full">Admissions 2027-28</Link>
            <a href={`tel:${school.phones[0]}`} className="btn btn-outline w-full">
              <Icon name="phone" className="h-4 w-4" /> Call the school
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
