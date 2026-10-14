"use client";

import { useMemo, useState } from "react";
import { admission } from "@/data/site";
import { Icon } from "./Icon";

export function PointsCalculator() {
  const [neighbourhood, setNeighbourhood] = useState(0);
  const [sibling, setSibling] = useState(false);
  const [alumni, setAlumni] = useState<0 | 10 | 20>(0);
  const [girl, setGirl] = useState(false);

  const total = neighbourhood + (sibling ? 30 : 0) + alumni + (girl ? 10 : 0);
  const pct = total;

  const rows = useMemo(
    () => [
      { label: "Neighbourhood", value: neighbourhood, max: 40 },
      { label: "Sibling", value: sibling ? 30 : 0, max: 30 },
      { label: "Alumni parent", value: alumni, max: 20 },
      { label: "Girl child", value: girl ? 10 : 0, max: 10 },
    ],
    [neighbourhood, sibling, alumni, girl],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-6">
        <fieldset>
          <legend className="label">1. Where do you live? <span className="font-normal text-ink-soft">(up to 40)</span></legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {admission.neighbourhoodBands.map((b) => (
              <label key={b.label} className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors ${neighbourhood === b.points ? "border-brand-500 bg-brand-50 text-brand-800" : "border-brand-100 bg-white hover:border-brand-300"}`}>
                <span className="flex items-center gap-3">
                  <input type="radio" name="nb" className="accent-brand-600" checked={neighbourhood === b.points} onChange={() => setNeighbourhood(b.points)} />
                  {b.label}
                </span>
                <span className="font-bold text-brand-600">{b.points}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-soft">Check your locality against the list published with the admission notice.</p>
        </fieldset>

        <Toggle label="2. Does the child have a real brother or sister studying at MIS on a general seat?" points={30} on={sibling} setOn={setSibling} />

        <fieldset>
          <legend className="label">3. Is a parent an MIS alumnus/alumna? <span className="font-normal text-ink-soft">(up to 20)</span></legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {([
              [0, "No"],
              [10, "Passed X or XII"],
              [20, "Passed both X and XII"],
            ] as const).map(([v, l]) => (
              <button
                type="button"
                key={v}
                onClick={() => setAlumni(v)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${alumni === v ? "border-brand-500 bg-brand-50 text-brand-800" : "border-brand-100 bg-white hover:border-brand-300"}`}
              >
                {l} <span className="float-right font-bold text-brand-600">{v}</span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-soft">The parent must be a life member of Mother&apos;s Blossoms, the alumni association.</p>
        </fieldset>

        <Toggle label="4. Is the child a girl?" points={10} on={girl} setOn={setGirl} />
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-lift">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">Estimated points</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-serif text-7xl font-semibold leading-none tabular-nums">{total}</span>
            <span className="mb-2 text-brand-200">/ 100</span>
          </div>
          <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <ul className="mt-6 space-y-2.5 text-sm">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-brand-100">{r.label}</span>
                <span className="font-bold tabular-nums">{r.value} <span className="font-normal text-brand-300">/ {r.max}</span></span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-2 rounded-xl bg-white/10 p-3 text-xs leading-relaxed text-brand-50">
            <Icon name="spark" className="h-4 w-4 shrink-0" />
            An estimate for general-category seats only. Final points are decided by the school as per the admission notice for {admission.session}.
          </p>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, points, on, setOn }: { label: string; points: number; on: boolean; setOn: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-xl border border-brand-100 bg-white px-4 py-4">
      <span className="text-sm font-semibold text-ink">
        {label} <span className="font-normal text-ink-soft">({points})</span>
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn(!on)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? "bg-brand-600" : "bg-brand-200"}`}
      >
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}
