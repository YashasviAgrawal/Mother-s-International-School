import Link from "next/link";
import { school } from "@/data/site";
import { Crest } from "./Crest";
import { Icon } from "./Icon";

const columns = [
  {
    title: "The School",
    links: [
      { label: "Our Story", href: "/about#story" },
      { label: "Integral Education", href: "/about#philosophy" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Campus & Facilities", href: "/campus" },
      { label: "CBSE Disclosure", href: "/about#disclosures" },
    ],
  },
  {
    title: "Learning",
    links: [
      { label: "Academics", href: "/academics" },
      { label: "Senior Secondary Subjects", href: "/academics#subjects" },
      { label: "Student Life", href: "/student-life" },
      { label: "News & Events", href: "/news" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Families",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Points Calculator", href: "/admissions#calculator" },
      { label: "Fee Structure", href: "/fees" },
      { label: "Parent Portal", href: school.links.parentPortal },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-b from-brand-50 to-brand-100/70 text-ink">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Crest className="h-14 w-14" />
            <span className="font-serif text-2xl font-semibold leading-tight">
              The Mother&apos;s
              <br />
              International School
            </span>
          </Link>
          <p className="mt-5 max-w-sm font-serif text-lg italic text-brand-700">&ldquo;{school.motto}&rdquo;</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-soft">
            <li className="flex gap-3"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{school.address.line1}, {school.address.line2}</li>
            <li className="flex gap-3"><Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{school.phones.join(" · ")}</li>
            <li className="flex gap-3"><Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{school.emails.office}</li>
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{col.title}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-ink-soft transition-colors hover:text-brand-700">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-brand-200/70">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} {school.name}, New Delhi. Run by the {school.society}. CBSE Affiliation No. {school.affiliationNo}.</p>
          <div className="flex items-center gap-4">
            <a href={school.links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 shadow-card hover:bg-brand-600 hover:text-white">
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <Link href="/contact" className="hover:text-brand-700">Grievance Officer</Link>
            <Link href="/about#disclosures" className="hover:text-brand-700">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
