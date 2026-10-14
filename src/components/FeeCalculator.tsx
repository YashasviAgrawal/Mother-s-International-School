"use client";

import { useState } from "react";
import { fees } from "@/data/site";
import { inr } from "@/lib/dates";

export function FeeCalculator() {
  const [levelId, setLevelId] = useState(fees.levels[2].id);
  const [transport, setTransport] = useState(0);
  const [kids, setKids] = useState(1);
  const level = fees.levels.find((l) => l.id === levelId)!;

  const monthly = level.tuition + level.computer + level.hobby + transport;
  const annualPerChild = monthly * 12 + fees.annualCharges;
  const total = annualPerChild * kids;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="card space-y-6 p-6 md:p-8">
        <div>
          <label className="label" htmlFor="lvl">Class</label>
          <select id="lvl" className="field" value={levelId} onChange={(e) => setLevelId(e.target.value)}>
            {fees.levels.map((l) => (
              <option key={l.id} value={l.id}>{l.label}</option>
            ))}
          </select>
        </div>
        <div>
          <span className="label">School transport</span>
          <div className="grid gap-2 sm:grid-cols-3">
            {fees.transport.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setTransport(t.monthly)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${transport === t.monthly ? "border-brand-500 bg-brand-50" : "border-brand-100 hover:border-brand-300"}`}
              >
                <span className="block font-semibold">{t.label}</span>
                <span className="text-xs text-ink-soft">{t.monthly ? `${inr(t.monthly)} / month` : "—"}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="label" htmlFor="kids">Number of children in this class band: {kids}</label>
          <input id="kids" type="range" min={1} max={4} value={kids} onChange={(e) => setKids(Number(e.target.value))} className="w-full accent-brand-600" />
        </div>
      </div>

      <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">Estimated yearly cost</p>
        <p className="mt-3 font-serif text-5xl font-semibold tabular-nums md:text-6xl">{inr(total)}</p>
        <p className="mt-1 text-sm text-brand-200">{kids > 1 ? `${kids} children · ${inr(annualPerChild)} each` : "per child"}</p>
        <ul className="mt-6 space-y-2.5 text-sm">
          {[
            ["Tuition (monthly)", level.tuition],
            ["Computer fee (monthly)", level.computer],
            ["Hobby club fee (monthly)", level.hobby],
            ["Transport (monthly)", transport],
            ["Annual charges (yearly)", fees.annualCharges],
          ].map(([k, v]) => (
            <li key={k as string} className="flex justify-between border-b border-white/10 pb-2.5">
              <span className="text-brand-100">{k}</span>
              <span className="font-bold tabular-nums">{v ? inr(v as number) : "—"}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-brand-100">Estimate assumes 12 monthly instalments. Please confirm the billing schedule with the school office.</p>
      </div>
    </div>
  );
}
