"use client";

import { useState } from "react";
import { subjectGroups } from "@/data/site";
import { Icon } from "./Icon";

const science = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"];
const commerce = ["Accountancy", "Business Studies", "Economics", "Financial Markets Mgmt. (skill)"];

function streamOf(picks: string[]) {
  const sci = picks.filter((p) => science.includes(p)).length;
  const com = picks.filter((p) => commerce.includes(p)).length;
  if (picks.includes("Physics") && picks.includes("Chemistry")) return picks.includes("Mathematics") ? (picks.includes("Biology") ? "Science (PCMB)" : "Science (PCM)") : "Science (PCB)";
  if (com >= 2) return "Commerce";
  if (sci >= 2) return "Science (mixed)";
  return "Liberal Arts";
}

/** Lets a student pick one subject from each Class XI group, avoiding duplicates. */
export function SubjectBuilder() {
  const [picks, setPicks] = useState<(string | null)[]>(subjectGroups.map(() => null));
  const chosen = picks.filter(Boolean) as string[];
  const complete = chosen.length === subjectGroups.length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      <div className="grid gap-5 sm:grid-cols-2">
        {subjectGroups.map((g, gi) => (
          <div key={g.group} className="card p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{g.group} · choose one</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.options.map((o) => {
                const active = picks[gi] === o;
                const taken = !active && picks.some((p, i) => i !== gi && p === o);
                return (
                  <button
                    key={o}
                    type="button"
                    disabled={taken}
                    onClick={() => setPicks((prev) => prev.map((p, i) => (i === gi ? (p === o ? null : o) : p)))}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active ? "border-brand-600 bg-brand-600 text-white" : taken ? "cursor-not-allowed border-brand-50 text-ink-soft/40 line-through" : "border-brand-200 text-ink hover:border-brand-500 hover:bg-brand-50"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[1.5rem] border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Your combination</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold">
            <Icon name="check" className="h-4 w-4 text-brand-600" strokeWidth={2.5} /> English Core <span className="ml-auto text-xs font-normal text-ink-soft">compulsory</span>
          </li>
          {subjectGroups.map((g, i) => (
            <li key={g.group} className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm ${picks[i] ? "bg-white font-semibold" : "border border-dashed border-brand-200 text-ink-soft"}`}>
              {picks[i] ? <Icon name="check" className="h-4 w-4 text-brand-600" strokeWidth={2.5} /> : <span className="h-4 w-4 rounded-full border-2 border-brand-200" />}
              {picks[i] ?? `Pick from ${g.group}`}
            </li>
          ))}
        </ul>
        <div className={`mt-5 rounded-xl p-4 text-sm transition-colors ${complete ? "bg-brand-600 text-white" : "bg-brand-100/60 text-ink-soft"}`}>
          {complete ? (
            <>Stream: <strong>{streamOf(chosen)}</strong>. Plus internal subjects: General Studies, Yoga, Health & PE.</>
          ) : (
            <>Choose one subject from each group ({chosen.length}/{subjectGroups.length}).</>
          )}
        </div>
        {chosen.length > 0 && (
          <button type="button" onClick={() => setPicks(subjectGroups.map(() => null))} className="mt-4 text-xs font-bold text-brand-600 hover:text-brand-800">
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
