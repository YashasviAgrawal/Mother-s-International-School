import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { Crest } from "@/components/Crest";
import { Icon, type IconName } from "@/components/Icon";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { leadership, photos, pillars, school } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, philosophy, leadership and CBSE disclosures of The Mother's International School, New Delhi, founded in 1956.",
};

const timeline = [
  { year: "1956", text: "Founded on 23 April by Shri Surendra Nath Jauhar with the blessings of The Mother." },
  { year: "1986", text: "Affiliated to the Central Board of Secondary Education." },
  { year: "1995", text: "Recognition NOC from the Directorate of Education, NCT of Delhi." },
  { year: "2001", text: "Named best school in Delhi in Outlook's C-Fore survey." },
  { year: "2021", text: "Ranked among India's top co-ed day schools in the EducationWorld India School Rankings." },
  { year: "2026", text: "Seventy years of integral education on Sri Aurobindo Marg." },
];

const disclosure = [
  ["Name of school", school.name],
  ["Affiliation no.", `${school.affiliationNo} (CBSE, since ${school.affiliatedSince})`],
  ["Managed by", school.society],
  ["Recognition", "Directorate of Education, NCT of Delhi — NOC No. 1473 dated 08-08-1995"],
  ["Address", `${school.address.line1}, ${school.address.line2}`],
  ["Principal", "Smt. Milan Mala Sarin"],
  ["Campus area", "36,138 sq m (9.28 acres); playground 22,189 sq m"],
  ["Enrolment", "2,371 students (start of 2026-27)"],
  ["Grievance officer", `${school.emails.grievance} · ${school.grievancePhone}`],
];

const documents = [
  "Mandatory Public Disclosure 2026-27",
  "Affiliation letter",
  "Fire safety certificate",
  "Building safety certificate",
  "Water, health & sanitation certificates",
  "Academic calendar 2026-27",
  "School Management Committee",
  "PTA members",
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About MIS" eyebrow="Since 1956" text="A school of the Sri Aurobindo Ashram, Delhi Branch, dedicated to the growth of the whole child." scene="campus" image={photos.building} />

      {/* Story */}
      <section id="story" className="container-x mt-20 grid scroll-mt-32 items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Our story" title="Seventy years on Sri Aurobindo Marg" />
          <div className="prose-school mt-6">
            <p>
              The Mother&apos;s International School was founded on 23 April 1956 by Shri Surendra Nath Jauhar &ldquo;Faquir&rdquo;, with the
              blessings of The Mother. It is run by the {school.society}, an agency of the Sri Aurobindo Ashram, and shares its green
              campus with the Delhi Branch of the Ashram and Mirambika Free Progress School.
            </p>
            <p>
              Today the school educates around 2,400 children from Balvatika-1 to Class XII. It is co-educational, English-medium and a
              day school, affiliated to CBSE — but its heart is the vision of integral education set out by Sri Aurobindo and The Mother.
            </p>
          </div>
          <figure className="mt-8">
            <div className="relative aspect-[2/1] overflow-hidden rounded-[1.5rem] shadow-card">
              <Image src={photos.founders} alt="The Mother and Sri Aurobindo seated together" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_30%]" />
            </div>
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">The Mother and Sri Aurobindo</figcaption>
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <ol className="relative space-y-6 border-l-2 border-brand-100 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-brand-500 shadow-card" />
                <p className="font-serif text-3xl font-semibold text-brand-600">{t.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Motto */}
      <section className="mt-24 bg-gradient-to-br from-brand-50 via-white to-brand-50 py-20">
        <Reveal className="container-x mx-auto max-w-3xl text-center">
          <Crest className="mx-auto h-20 w-20" />
          <p className="mt-6 eyebrow justify-center">Our motto</p>
          <p className="mt-4 font-serif text-4xl font-semibold italic text-ink md:text-6xl">&ldquo;{school.motto}&rdquo;</p>
          <p className="mx-auto mt-6 max-w-xl text-ink-soft">
            Given by The Mother. The school emblem — a bird in flight rising towards the heavens — reflects the aspiration to keep
            growing towards a higher truth.
          </p>
        </Reveal>
        <Reveal delay={100} className="container-x mx-auto mt-12 max-w-4xl">
          <PhotoBand src={photos.blessings} alt="Flowers offered at The Mother's feet" />
        </Reveal>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="container-x mt-24 scroll-mt-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Integral education" title="Educating body, heart, mind and spirit" />
            <p className="mt-6 leading-relaxed text-ink-soft">&ldquo;{school.mission}&rdquo;</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-brand-100 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon name={p.icon as IconName} /></span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Media scene="yoga" image={photos.yogaHall} alt="Young children relaxing together in a circle in the yoga hall" className="object-[45%_50%]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="container-x mt-24 scroll-mt-32">
        <Reveal>
          <SectionHeading align="center" eyebrow="Leadership" title="Guiding the school" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {leadership.map((l, i) => (
            <Reveal key={l.name} delay={i * 80}>
              <div className="card h-full p-6 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-100 to-brand-200 font-serif text-3xl font-semibold text-brand-700">
                  {l.name.replace(/^(Shri|Smt\.|Ms\.|Dr\.)\s+/, "").split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">{l.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-600">{l.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Disclosures */}
      <section id="disclosures" className="container-x mt-24 scroll-mt-32">
        <Reveal>
          <SectionHeading eyebrow="CBSE Mandatory Public Disclosure" title="School information at a glance" />
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="card overflow-hidden">
            <dl>
              {disclosure.map(([k, v], i) => (
                <div key={k} className={`grid gap-1 px-6 py-4 sm:grid-cols-[200px_1fr] ${i % 2 ? "bg-sky-25" : ""}`}>
                  <dt className="text-sm font-bold text-ink">{k}</dt>
                  <dd className="text-sm text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100} className="card p-6">
            <h3 className="font-serif text-2xl font-semibold">Documents</h3>
            <ul className="mt-4 divide-y divide-brand-50">
              {documents.map((d) => (
                <li key={d}>
                  <a href={`/documents/${d.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}.pdf`} className="flex items-center justify-between gap-4 py-3 text-sm font-medium text-ink-soft hover:text-brand-700">
                    {d}
                    <Icon name="download" className="h-4 w-4 shrink-0 text-brand-500" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
