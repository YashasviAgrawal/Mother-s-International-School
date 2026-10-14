"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-[1.5rem] border border-brand-100 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-ink hover:bg-brand-50/60"
            >
              {it.q}
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700"}`}>
                <Icon name={isOpen ? "minus" : "plus"} className="h-4 w-4" />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
