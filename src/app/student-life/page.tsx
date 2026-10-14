import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { PhotoBand } from "@/components/PhotoBand";
import { Icon } from "@/components/Icon";
import { clubs, photos, traditions, type Scene } from "@/data/site";

export const metadata: Metadata = {
  title: "Student Life",
  description: "Clubs, forums, houses, publications and traditions at The Mother's International School — from debates and theatre to the Annual Physical Demonstration.",
};

const arts: { title: string; text: string; scene: Scene; image?: string }[] = [
  { title: "Music", text: "Vocal music and instruments — tabla, sitar, flute, violin and guitar.", scene: "music" },
  { title: "Theatre & Dance", text: "Dramatics from primary school, annual plays and dance.", scene: "theatre" },
  { title: "Visual Arts", text: "Drawing, painting, clay modelling, pottery and batik.", scene: "arts" },
  { title: "Yoga & Movement", text: "Yoga, gymnastics and the Annual Physical Demonstration.", scene: "yoga", image: photos.yogaHall },
];

const publications = [
  { name: "The MIS Gazette", by: "The Lyceum Forum (Classes XI–XII)" },
  { name: "Prakriti", by: "Environment Club e-magazine" },
];

export default function StudentLifePage() {
  return (
    <>
      <PageHero title="Student Life" eyebrow="Beyond the classroom" text="Houses, forums, clubs and traditions that give every child a stage, a voice and a team." scene="theatre" image={photos.sportsField} />

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Arts & movement" title="Every child an artist" text="From Class VI, every student learns an instrument or art form alongside their academic subjects." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arts.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-card">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"><Media scene={a.scene} image={a.image} alt={a.title} className="object-[40%_50%]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/90 via-brand-800/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-3xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-brand-50">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="clubs" className="mt-24 scroll-mt-32 bg-sky-25 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Clubs & forums" title="Find your people" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 70}>
                <div className="card h-full p-6 transition-all hover:-translate-y-1 hover:border-brand-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 font-serif text-lg font-semibold text-brand-700">{c.name[c.name.startsWith("The ") ? 4 : 0]}</span>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-24 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Houses" title="Healthy competition, all year" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Inter-house competitions run through the year — English and Hindi debates, drama, oral interpretation, poetry festivals,
            subject quizzes, geography-map quizzes and athletics meets. Senior students take part in the World Population Debate,
            soliloquies and the Prof. Nadkarni Memorial inter-school competition.
          </p>
          <h3 className="mt-10 font-sans text-sm font-bold uppercase tracking-wider text-brand-600">Student publications</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {publications.map((p) => (
              <div key={p.name} className="rounded-2xl border border-brand-100 p-5">
                <Icon name="book" className="h-5 w-5 text-brand-500" />
                <p className="mt-3 font-serif text-2xl font-semibold italic">{p.name}</p>
                <p className="text-xs text-ink-soft">{p.by}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="card p-8">
          <h3 className="font-serif text-2xl font-semibold">Wellbeing</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Counsellors from the Sanjeevani counselling service support students, and the school marks Mental Health Week with assemblies
            and activities. SEWA in Classes IX–X connects students with service to the community.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {["Counselling", "Mental Health Week", "SEWA"].map((x) => (
              <div key={x} className="rounded-xl bg-brand-50 px-2 py-4 text-xs font-bold text-brand-700">{x}</div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="traditions" className="container-x mt-24 scroll-mt-32">
        <Reveal>
          <SectionHeading eyebrow="Traditions" title="The MIS calendar of celebrations" />
        </Reveal>
        <Reveal delay={80}>
          <PhotoBand src={photos.founders} alt="The Mother and Sri Aurobindo seated together" caption="The Mother and Sri Aurobindo, whose days the school observes each year" position="object-[50%_30%]" className="mt-10" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {traditions.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 90}>
              <div className="flex gap-5 rounded-2xl border border-brand-100 p-6">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-600 text-center text-xs font-bold leading-tight text-white">{t.date}</div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn btn-primary">View the gallery <Icon name="arrow" className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
