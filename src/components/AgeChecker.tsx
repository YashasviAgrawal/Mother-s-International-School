"use client";

import { useState } from "react";
import { admission } from "@/data/site";
import { formatDate, parseDate } from "@/lib/dates";
import { Icon } from "./Icon";

/** Works out which entry class a child is eligible for, as of the DoE cut-off date. */
export function AgeChecker() {
  const [dob, setDob] = useState("");
  const cutoff = parseDate(admission.ageCutoffDate);

  let result: { years: number; months: number; level?: string } | null = null;
  if (dob) {
    const b = parseDate(dob);
    let years = cutoff.getFullYear() - b.getFullYear();
    let months = cutoff.getMonth() - b.getMonth();
    if (cutoff.getDate() < b.getDate()) months -= 1;
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    const age = years + months / 12;
    const level = admission.ageRules.find((r) => age >= r.min && age < r.max)?.level;
    result = { years, months, level };
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon name="calendar" /></span>
        <div>
          <h3 className="font-serif text-2xl font-semibold">Age eligibility checker</h3>
          <p className="text-xs text-ink-soft">Age is calculated as on {formatDate(admission.ageCutoffDate)}</p>
        </div>
      </div>
      <label className="label mt-6" htmlFor="dob">Child&apos;s date of birth</label>
      <input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="field" max={admission.ageCutoffDate} />

      <div className="mt-5 grid gap-2 text-sm">
        {admission.ageRules.map((r) => (
          <div key={r.level} className={`flex items-center justify-between rounded-xl px-4 py-2.5 ${result?.level === r.level ? "bg-brand-600 text-white" : "bg-brand-50 text-ink-soft"}`}>
            <span className="font-semibold">{r.level}</span>
            <span>{r.min}+ and under {r.max} years</span>
          </div>
        ))}
      </div>

      {result && (
        <p className={`mt-5 flex items-start gap-2 rounded-xl p-4 text-sm ${result.level ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`} aria-live="polite">
          <Icon name={result.level ? "check" : "spark"} className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Your child will be <strong>{result.years} years {result.months} months</strong> old.{" "}
            {result.level ? <>They are eligible for <strong>{result.level}</strong> in {admission.session}.</> : <>This age does not match an entry-level class for {admission.session}.</>}
          </span>
        </p>
      )}
    </div>
  );
}
