import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { SubjectBuilder } from "@/components/SubjectBuilder";
import { Icon } from "@/components/Icon";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { photos, school, stages } from "@/data/site";

export const metadata: Metadata = {
  title: "Academics",
  description: "CBSE curriculum from Balvatika-1 to Class XII at The Mother's International School, with languages, arts, yoga and flexible Class XI–XII subject combinations.",
};

const highlights = [
  { k: "Board", v: `CBSE · Affiliation ${school.affiliationNo}` },
  { k: "Medium", v: "English" },
  { k: "Languages", v: "Hindi, Sanskrit, French" },
  { k: "Class size", v: "About 30–35 per section" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero title="Academics" eyebrow="Balvatika to Class XII" text="A rigorous CBSE curriculum, woven together with art, music, languages, yoga and service." scene="library" image={photos.building} />

      <section className="container-x -mt-2 grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <Reveal key={h.k} delay={i * 70} className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{h.k}</p>
            <p className="mt-2 font-serif text-xl font-semibold">{h.v}</p>
          </Reveal>
        ))}
      </section>

      <section id="stages" className="container-x scroll-mt-32">
        <Reveal>
          <SectionHeading eyebrow="Learning stages" title="A journey in five stages" />
        </Reveal>
        <div className="mt-12 space-y-16">
          {stages.map((s, i) => (
            <div id={s.id} key={s.id} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2">
              <Reveal className={`relative aspect-[16/11] overflow-hidden rounded-[1.75rem] shadow-card ${i % 2 ? "lg:order-2" : ""}`}>
                <Media scene={s.scene} image={s.image} alt={s.name} sizes="(min-width: 1024px) 50vw, 100vw" />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">{s.classes}</span>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-serif text-6xl font-semibold text-brand-100">0{i + 1}</p>
                <h3 className="-mt-4 font-serif text-4xl font-semibold">{s.name}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.summary}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section id="subjects" className="mt-24 scroll-mt-32 bg-sky-25 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Classes XI – XII" title="Build your subject combination" text="English Core is compulsory. Choose one subject from each of the four groups to see your stream." />
          </Reveal>
          <div className="mt-12">
            <SubjectBuilder />
          </div>
        </div>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-brand-50 to-white p-8 md:grid-cols-3 md:p-12">
            <div className="md:col-span-1">
              <p className="eyebrow">Beyond the syllabus</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">Art-integrated learning</h2>
            </div>
            <p className="leading-relaxed text-ink-soft md:col-span-2">
              In line with CBSE&apos;s art-integration approach, every class links its subjects to art forms — music, painting, theatre and
              craft — so that children learn through making and performing, not only reading. From Class VI, every student also learns a
              musical instrument or art form, and through SEWA in Classes IX–X, they put learning to work in service of the community.
            </p>
          </div>
        </Reveal>
      </section>

      <AdmissionsCta />
    </>
  );
}
