import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FeeCalculator } from "@/components/FeeCalculator";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { fees, photos } from "@/data/site";
import { inr } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Fee Structure",
  description: "Fee structure 2026-27 for The Mother's International School, New Delhi: tuition, computer, hobby club, annual and transport charges, with a fee calculator.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero title="Fee Structure" eyebrow={`Session ${fees.session}`} text="Fees as published in the school's CBSE Mandatory Public Disclosure, with a calculator to estimate your yearly cost." scene="classroom" image={photos.building} />

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Schedule of fees" title={`Fees for ${fees.session}`} />
        </Reveal>
        <Reveal delay={100}>
          <div className="card mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-brand-50 text-xs uppercase tracking-wider text-brand-700">
                <tr>
                  <th className="px-6 py-4 font-bold">Class</th>
                  <th className="px-6 py-4 font-bold">Tuition / month</th>
                  <th className="px-6 py-4 font-bold">Computer / month</th>
                  <th className="px-6 py-4 font-bold">Hobby club / month</th>
                  <th className="px-6 py-4 font-bold">Est. yearly*</th>
                </tr>
              </thead>
              <tbody>
                {fees.levels.map((l) => (
                  <tr key={l.id} className="border-t border-brand-50 transition-colors hover:bg-sky-25">
                    <td className="px-6 py-4 font-semibold text-ink">{l.label}</td>
                    <td className="px-6 py-4">{inr(l.tuition)}</td>
                    <td className="px-6 py-4">{l.computer ? inr(l.computer) : "—"}</td>
                    <td className="px-6 py-4">{l.hobby ? inr(l.hobby) : "—"}</td>
                    <td className="px-6 py-4 font-bold text-brand-700">{inr((l.tuition + l.computer + l.hobby) * 12 + fees.annualCharges)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-ink-soft md:grid-cols-3">
            <p className="rounded-xl bg-brand-50 p-4"><strong className="text-ink">Annual charges:</strong> {inr(fees.annualCharges)} per year</p>
            <p className="rounded-xl bg-brand-50 p-4"><strong className="text-ink">Transport:</strong> {inr(3000)} or {inr(3500)} per month by route</p>
            <p className="rounded-xl bg-brand-50 p-4"><strong className="text-ink">*Estimate:</strong> 12 monthly payments + annual charges, excluding transport</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-24 bg-sky-25 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Fee calculator" title="Estimate your yearly fees" />
          </Reveal>
          <div className="mt-10">
            <FeeCalculator />
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
