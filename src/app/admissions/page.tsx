import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PointsCalculator } from "@/components/PointsCalculator";
import { AgeChecker } from "@/components/AgeChecker";
import { Accordion } from "@/components/Accordion";
import { Icon } from "@/components/Icon";
import { admission, faqs, photos, school } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admission process, points system, age criteria, seats and documents for Balvatika-1, Pre-Primary, Class I and Class XI at The Mother's International School, New Delhi.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        eyebrow={`Session ${admission.session}`}
        text="A fair, transparent process laid down by the Directorate of Education, Delhi — with every applicant's points published."
        scene="assembly"
        image={photos.yogaHall}
      />

      {/* Process */}
      <section id="process" className="container-x mt-20 scroll-mt-32">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Entry-level admission in four steps" text="For Balvatika-1 (Nursery), Pre-Primary and Class I. Dates follow the DoE schedule and are announced on this website." />
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {admission.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="card relative p-7">
              <span className="font-serif text-5xl font-semibold text-brand-200">{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={school.links.admissionsPortal} target="_blank" rel="noreferrer" className="btn btn-primary">Go to admissions portal <Icon name="arrow" className="h-4 w-4" /></a>
          <Link href="/fees" className="btn btn-outline">View fee structure</Link>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="mt-24 scroll-mt-32 bg-sky-25 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Points calculator" title="Estimate your admission points" text="The 100-point system used for general-category seats. Select what applies to your family." />
          </Reveal>
          <div className="mt-12">
            <PointsCalculator />
          </div>
        </div>
      </section>

      {/* Age + seats */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <AgeChecker />
        </Reveal>
        <Reveal delay={120}>
          <div className="card h-full p-6 md:p-8">
            <h3 className="font-serif text-2xl font-semibold">Seats at entry level</h3>
            <p className="mt-1 text-xs text-ink-soft">Based on the most recent published admission notice</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-100 text-xs uppercase tracking-wider text-ink-soft">
                    <th className="py-3 font-bold">Class</th>
                    <th className="py-3 font-bold">Total</th>
                    <th className="py-3 font-bold">General</th>
                    <th className="py-3 font-bold">EWS / DG</th>
                  </tr>
                </thead>
                <tbody>
                  {admission.seats.map((s) => (
                    <tr key={s.level} className="border-b border-brand-50">
                      <td className="py-3.5 font-semibold">{s.level}</td>
                      <td className="py-3.5">{s.total}</td>
                      <td className="py-3.5"><span className="rounded-full bg-brand-100 px-2.5 py-0.5 font-bold text-brand-700">{s.open}</span></td>
                      <td className="py-3.5">{s.ews ?? "As per DoE"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">At Balvatika-1, the remaining seats are 24 management quota and 6 staff quota. EWS/DG admissions are made through the DoE&apos;s centralised online process.</p>

            <h4 className="mt-8 font-sans text-sm font-bold uppercase tracking-wider text-brand-600">Documents required</h4>
            <ul className="mt-4 space-y-2.5">
              {admission.documents.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={2.5} /> {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Class XI */}
      <section id="class-xi" className="container-x mt-24 scroll-mt-32">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 md:p-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Class XI</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold">Admission to Class XI</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">Seats in Class XI are offered against vacancies. Registration usually opens in February, with the test in March.</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} /><div><dt className="font-bold">Eligibility</dt><dd className="text-ink-soft">{admission.classXI.eligibility}</dd></div></div>
                <div className="flex gap-3"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} /><div><dt className="font-bold">Selection</dt><dd className="text-ink-soft">{admission.classXI.test}</dd></div></div>
                <div className="flex gap-3"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} /><div><dt className="font-bold">Confirmation</dt><dd className="text-ink-soft">Admission is provisional until CBSE Class X results are declared.</dd></div></div>
              </dl>
              <Link href="/academics#subjects" className="btn btn-primary mt-8">Build your subject combination <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
            <div className="space-y-4">
              {admission.classXI.streams.map((s) => (
                <div key={s.name} className="rounded-2xl border border-brand-100 bg-white p-6">
                  <h3 className="font-serif text-2xl font-semibold text-brand-700">{s.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">Test papers: {s.papers}</p>
                </div>
              ))}
              <p className="text-xs text-ink-soft">Queries: <a className="font-semibold text-brand-600" href={`mailto:${school.emails.admissions}`}>{school.emails.admissions}</a></p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions parents ask" text="Can't find your answer? Write to the school office and we'll get back to you." />
          <Link href="/contact" className="btn btn-outline mt-6">Contact the office</Link>
          <figure className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-card lg:block">
            <Image src={photos.building} alt="The main school building on Sri Aurobindo Marg" fill sizes="40vw" className="object-cover object-[30%_50%]" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-800/85 to-transparent p-5 pt-12 text-sm font-semibold text-white">
              {school.address.line1}, {school.address.line2}
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <Accordion items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
