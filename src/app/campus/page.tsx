import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { Counter } from "@/components/Counter";
import { Icon } from "@/components/Icon";
import { facilities, photos } from "@/data/site";

export const metadata: Metadata = {
  title: "Campus & Facilities",
  description: "A 9.28-acre green campus with libraries, science and computer labs, music and art studios, a 400 m track, courts and yoga halls.",
};

const numbers = [
  { value: 9.28, suffix: " acres", label: "Campus area", decimals: 2 },
  { value: 22189, suffix: " m²", label: "Playground" },
  { value: 400, suffix: " m", label: "Running track" },
  { value: 5264, suffix: " sq ft", label: "Senior library" },
];

const sport = ["400 m cinder track", "2 basketball courts", "3 badminton courts", "2 volleyball courts", "8 table-tennis tables", "Cricket nets", "Football field", "Gymnasium & yoga halls"];
const safety = ["Fire safety certificate", "Anti-bullying committee", "Child protection (POCSO) committee", "School safety & disaster management committees", "Counsellors (Sanjeevani counselling service)", "Regular health check-ups"];

export default function CampusPage() {
  return (
    <>
      <PageHero title="Campus & Facilities" eyebrow="Our home" text="Nine acres of trees, lawns and playfields in the heart of South Delhi, shared with the Sri Aurobindo Ashram." scene="sports" image={photos.sportsField} />

      <section className="container-x mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {numbers.map((n, i) => (
          <Reveal key={n.label} delay={i * 80} className="rounded-2xl bg-brand-50 p-6 text-center">
            <p className="font-serif text-4xl font-semibold text-brand-700"><Counter value={n.value} suffix={n.suffix} decimals={n.decimals} /></p>
            <p className="mt-1 text-sm text-ink-soft">{n.label}</p>
          </Reveal>
        ))}
      </section>

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Facilities" title="Spaces to learn, make and play" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <article className="group card h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Media scene={f.scene} image={f.image} alt={f.title} />
                  </div>
                  {f.stat && <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700">{f.stat}</span>}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24 grid gap-8 lg:grid-cols-2">
        <Reveal className="card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon name="run" /></span>
          <h3 className="mt-5 font-serif text-3xl font-semibold">Sports</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {sport.map((s) => <li key={s} className="flex gap-2 text-sm text-ink-soft"><Icon name="check" className="h-4 w-4 shrink-0 text-brand-500" strokeWidth={2.5} />{s}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={100} className="card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon name="heart" /></span>
          <h3 className="mt-5 font-serif text-3xl font-semibold">Safety & wellbeing</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {safety.map((s) => <li key={s} className="flex gap-2 text-sm text-ink-soft"><Icon name="check" className="h-4 w-4 shrink-0 text-brand-500" strokeWidth={2.5} />{s}</li>)}
          </ul>
        </Reveal>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <div className="relative isolate flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-brand-700 p-8 text-white md:flex-row md:items-center md:p-12">
            <Image src={photos.building} alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-10 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-800/90 via-brand-700/75 to-brand-700/40" />
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">See the campus for yourself</h2>
              <p className="mt-2 text-brand-50">Browse the gallery, or contact the office to ask about visiting.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/gallery" className="btn btn-ghost-white">Gallery</Link>
              <Link href="/contact" className="btn btn-light">Contact us <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
