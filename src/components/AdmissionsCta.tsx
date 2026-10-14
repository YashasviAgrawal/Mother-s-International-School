import Image from "next/image";
import Link from "next/link";
import { admission, photos, school } from "@/data/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function AdmissionsCta() {
  return (
    <section className="container-x mt-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-14 text-white sm:px-12 md:py-16">
          <Image src={photos.yogaHall} alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-10 object-cover object-[60%_50%]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-700/95 via-brand-600/85 to-brand-600/45" />
          <div className="absolute inset-0 -z-10 bg-brand-700/40 lg:hidden" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-100">Admissions {admission.session}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-5xl">Begin your child&apos;s journey at MIS</h2>
              <p className="mt-4 max-w-xl text-brand-50">
                Entry-level admissions for Balvatika-1, Pre-Primary and Class I follow the Directorate of Education schedule.
                Check your eligibility and estimate your points in under a minute.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link href="/admissions#calculator" className="btn btn-light w-full sm:w-auto lg:w-64">
                Check points & age <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={`tel:${school.phones[0]}`} className="btn btn-ghost-white w-full sm:w-auto lg:w-64">
                <Icon name="phone" className="h-4 w-4" /> Talk to the office
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
