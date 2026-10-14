import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { NewsGrid } from "@/components/NewsGrid";
import { EventsList } from "@/components/EventsList";
import { photos } from "@/data/site";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news, notices and the academic calendar of events at The Mother's International School, New Delhi.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Events" eyebrow="What's on" text="Notices, stories from campus and the academic calendar for 2026-27." scene="assembly" image={photos.yogaHall} />

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Latest" title="News & notices" />
        </Reveal>
        <div className="mt-10">
          <NewsGrid />
        </div>
      </section>

      <section id="events" className="mt-24 scroll-mt-32 bg-sky-25 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionHeading eyebrow="Calendar 2026-27" title="Events & holidays" text="Session runs 1 April 2026 to 31 March 2027. Upcoming and past events update automatically by date." />
            <dl className="mt-8 space-y-3 text-sm">
              {[
                ["Summer vacation", "11 May – 30 Jun 2026"],
                ["Autumn break", "17 – 19 Oct 2026"],
                ["Winter break", "1 – 15 Jan 2027"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between rounded-xl bg-white px-4 py-3">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <EventsList />
          </Reveal>
        </div>
      </section>
    </>
  );
}
