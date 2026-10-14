import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { StageTabs } from "@/components/StageTabs";
import { EventsList } from "@/components/EventsList";
import { NewsCard } from "@/components/NewsCard";
import { Media } from "@/components/Media";
import { PhotoBand } from "@/components/PhotoBand";
import { Icon, type IconName } from "@/components/Icon";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { facilities, familyValues, news, photos, pillars, school, stats, traditions } from "@/data/site";

const quickLinks: { title: string; text: string; href: string; icon: IconName }[] = [
  { title: "Admissions", text: "Process, points & age criteria", href: "/admissions", icon: "user" },
  { title: "Academics", text: "Balvatika to Class XII, CBSE", href: "/academics", icon: "book" },
  { title: "Fee Structure", text: "2026-27 fees & calculator", href: "/fees", icon: "spark" },
  { title: "Parent Portal", text: "Notices, fees & ERP login", href: school.links.parentPortal, icon: "sun" },
];

export default function HomePage() {
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      <HeroSlider />

      {/* Quick links overlapping the hero */}
      <section className="container-x relative z-10 -mt-14 md:-mt-20">
        <div className="grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-brand-100 bg-white shadow-lift lg:grid-cols-4">
          {quickLinks.map((q, i) => (
            <Link
              key={q.title}
              href={q.href}
              className={`group flex items-start gap-4 p-5 transition-colors hover:bg-brand-50 md:p-7 ${i % 2 === 0 ? "border-r border-brand-100" : ""} ${i < 2 ? "border-b border-brand-100 lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={q.icon} />
              </span>
              <span>
                <span className="flex items-center gap-1 font-bold text-ink">
                  {q.title} <Icon name="arrow" className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
                <span className="mt-1 hidden text-sm text-ink-soft sm:block">{q.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="container-x mt-24 grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative grid grid-cols-5 grid-rows-5 gap-4">
            <div className="relative col-span-3 row-span-5 aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-card">
              <Media scene="campus" image={photos.building} alt="The main school building across the lawn" className="object-[28%_50%]" sizes="(min-width: 1024px) 30vw, 60vw" />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[1.5rem] shadow-card">
              <Media scene="yoga" image={photos.yogaHall} alt="Young children relaxing together in the yoga hall" sizes="(min-width: 1024px) 20vw, 40vw" />
            </div>
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-[1.5rem] shadow-card">
              <Media scene="sports" image={photos.sportsField} alt="Students at football practice on the main field" className="object-[42%_50%]" sizes="(min-width: 1024px) 20vw, 40vw" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-brand-100 bg-white px-6 py-4 shadow-lift">
            <div className="font-serif text-4xl font-semibold text-brand-600">{new Date().getFullYear() - school.founded}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-soft">years since 1956</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading eyebrow="Welcome to MIS" title="An education of the whole being" />
          <p className="mt-6 leading-relaxed text-ink-soft">
            Founded on 23 April 1956 by Shri Surendra Nath Jauhar with the blessings of The Mother, The Mother&apos;s International School is
            run by the {school.society}, an agency of the Sri Aurobindo Ashram. For seventy years we have offered children a quiet,
            green place to grow — in body, heart, mind and spirit.
          </p>
          <blockquote className="mt-8 border-l-4 border-brand-400 bg-brand-50/70 py-5 pl-6 pr-4 font-serif text-xl italic leading-relaxed text-ink">
            &ldquo;{school.mission}&rdquo;
            <footer className="mt-3 font-sans text-xs font-bold not-italic uppercase tracking-wider text-brand-600">— Our mission</footer>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-primary">Our story <Icon name="arrow" className="h-4 w-4" /></Link>
            <Link href="/about#philosophy" className="btn btn-outline">Integral education</Link>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mt-28 bg-gradient-to-r from-brand-50 via-white to-brand-50">
        <div className="container-x grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-brand-200" : ""}`}>
              <div className="font-serif text-4xl font-semibold text-brand-700 md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="mt-2 text-sm font-medium text-ink-soft">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading align="center" eyebrow="Integral education" title="Four dimensions of growth" text="Inspired by Sri Aurobindo and The Mother, our school day is designed to develop every part of a child — not only the intellect." />
        </Reveal>
        <Reveal delay={80}>
          <PhotoBand src={photos.founders} alt="The Mother and Sri Aurobindo seated together" caption="The Mother and Sri Aurobindo" position="object-[50%_30%]" className="mt-12" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group card h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                  <Icon name={p.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning stages */}
      <section className="mt-28 bg-sky-25 py-24">
        <div className="container-x">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Academics" title="Learning at every stage" text="A CBSE curriculum, rich in the arts and languages, from Balvatika-1 to Class XII." />
            <Link href="/academics" className="btn btn-outline shrink-0">All academics <Icon name="arrow" className="h-4 w-4" /></Link>
          </Reveal>
          <StageTabs />
        </div>
      </section>

      {/* Campus bento */}
      <section className="container-x mt-24">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our campus" title="9.28 acres of green in South Delhi" text="Labs, libraries, studios and playfields set among the trees of the Sri Aurobindo Ashram campus." />
          <Link href="/campus" className="btn btn-outline shrink-0">Explore the campus <Icon name="arrow" className="h-4 w-4" /></Link>
        </Reveal>
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
          {facilities.slice(0, 4).map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""} ${i === 3 ? "md:col-span-2" : ""}`}>
              <Link href="/campus" className="group relative block h-full overflow-hidden rounded-[1.5rem] shadow-card">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Media scene={f.scene} image={f.image} alt={f.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/85 via-brand-800/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  {f.stat && <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">{f.stat}</span>}
                  <h3 className={`font-serif font-semibold ${i === 0 ? "text-3xl" : "text-2xl"}`}>{f.title}</h3>
                  {i === 0 && <p className="mt-2 max-w-md text-sm text-brand-50">{f.text}</p>}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* News + events */}
      <section className="container-x mt-28 grid gap-14 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <Reveal className="mb-10 flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Latest news" title="What's happening at MIS" />
            <Link href="/news" className="hidden shrink-0 text-sm font-bold text-brand-600 hover:text-brand-700 sm:inline-flex sm:items-center sm:gap-2">
              All news <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {latest.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <NewsCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={150}>
          <div className="rounded-[1.75rem] bg-brand-50 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-semibold">Upcoming events</h3>
              <Link href="/news#events" className="text-xs font-bold uppercase tracking-wider text-brand-600">Calendar</Link>
            </div>
            <EventsList compact />
          </div>
        </Reveal>
      </section>

      {/* Family values */}
      <section className="mt-28 bg-gradient-to-b from-white via-brand-50/60 to-white py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading align="center" eyebrow="Why families choose MIS" title="What parents value most" text="Themes that come up again and again when families talk about the school." />
          </Reveal>
          <Reveal delay={80}>
            <PhotoBand src={photos.building} alt="The main school building with trees and the open lawn in front" className="mt-12" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {familyValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="relative h-full rounded-[1.5rem] border border-brand-100 bg-white p-8">
                  <span className="font-serif text-6xl leading-none text-brand-200">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section className="container-x mt-16">
        <Reveal>
          <SectionHeading eyebrow="Traditions" title="Days that bring us together" />
        </Reveal>
        <div className="relative mt-12 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-[11px] hidden h-px bg-brand-200 md:block" />
          {traditions.map((t, i) => (
            <Reveal key={t.title} delay={i * 100} className="relative">
              <span className="relative z-10 block h-6 w-6 rounded-full border-4 border-white bg-brand-500 shadow-card" />
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-600">{t.date}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
