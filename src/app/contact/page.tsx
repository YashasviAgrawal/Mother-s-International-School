import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { photos, school } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Address, phone numbers, email and directions for The Mother's International School, Sri Aurobindo Marg, New Delhi 110016.",
};

export default function ContactPage() {
  const cards: { icon: IconName; title: string; lines: React.ReactNode[] }[] = [
    { icon: "pin", title: "Visit", lines: [school.address.line1, school.address.line2] },
    { icon: "phone", title: "Call", lines: school.phones.map((p) => <a key={p} href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-brand-700">{p}</a>) },
    {
      icon: "mail",
      title: "Email",
      lines: [
        <a key="o" href={`mailto:${school.emails.office}`} className="hover:text-brand-700">{school.emails.office}</a>,
        <span key="a">Admissions: <a href={`mailto:${school.emails.admissions}`} className="hover:text-brand-700">{school.emails.admissions}</a></span>,
      ],
    },
    { icon: "clock", title: "School hours", lines: [`Classes I–XII: ${school.hours.school}`, `Pre-School: ${school.hours.preSchool}`] },
  ];

  return (
    <>
      <PageHero title="Contact Us" eyebrow="We're here to help" text="Questions about admissions, fees or school life? Reach the school office." scene="campus" image={photos.building} />

      <section className="container-x mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 70} className="card p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon name={c.icon} /></span>
            <h3 className="mt-4 font-serif text-2xl font-semibold">{c.title}</h3>
            <div className="mt-2 space-y-1 text-sm text-ink-soft">
              {c.lines.map((l, j) => <p key={j}>{l}</p>)}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x mt-20 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="Send a message" title="Write to the school office" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[1.5rem] border border-brand-100 shadow-card">
            <iframe
              title="Map to The Mother's International School"
              src={`https://www.google.com/maps?q=${encodeURIComponent(school.address.mapsQuery)}&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[1.5rem] bg-brand-50 p-6">
            <h3 className="font-serif text-2xl font-semibold">Grievance officer</h3>
            <p className="mt-2 text-sm text-ink-soft">The Principal</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><Icon name="mail" className="h-4 w-4 text-brand-600" /><a href={`mailto:${school.emails.grievance}`} className="hover:text-brand-700">{school.emails.grievance}</a></p>
            <p className="mt-1 flex items-center gap-2 text-sm"><Icon name="phone" className="h-4 w-4 text-brand-600" />{school.grievancePhone}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
