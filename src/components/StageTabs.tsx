"use client";

import { useState } from "react";
import Link from "next/link";
import { stages } from "@/data/site";
import { Media } from "./Media";
import { Icon } from "./Icon";

export function StageTabs() {
  const [active, setActive] = useState(stages[1].id);
  const stage = stages.find((s) => s.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Learning stages" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {stages.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === active}
            onClick={() => setActive(s.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
              s.id === active ? "border-brand-600 bg-brand-600 text-white shadow-card" : "border-brand-200 bg-white text-ink-soft hover:border-brand-400 hover:text-brand-700"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div key={stage.id} role="tabpanel" className="mt-8 grid animate-fade-up items-stretch gap-8 lg:grid-cols-2">
        <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] shadow-card">
          <Media scene={stage.scene} image={stage.image} alt={stage.name} sizes="(min-width: 1024px) 50vw, 100vw" />
          <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            {stage.classes}
          </span>
        </div>
        <div className="card flex flex-col justify-center p-8 md:p-10">
          <h3 className="font-serif text-3xl font-semibold">{stage.name}</h3>
          <p className="mt-4 leading-relaxed text-ink-soft">{stage.summary}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {stage.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href={`/academics#${stage.id}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:gap-3 hover:text-brand-700">
            More about {stage.name} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
