"use client";

import { useEffect, useMemo, useState } from "react";
import { events, type EventItem } from "@/data/site";
import { dayMonth, formatRange, parseDate } from "@/lib/dates";
import { Icon } from "./Icon";

const categories = ["All", "Academic", "Celebration", "Holiday", "Admissions"] as const;

const badge: Record<EventItem["category"], string> = {
  Academic: "bg-brand-100 text-brand-700",
  Celebration: "bg-amber-50 text-amber-700",
  Holiday: "bg-emerald-50 text-emerald-700",
  Admissions: "bg-violet-50 text-violet-700",
};

/**
 * Calendar list that works out "upcoming" vs "past" from today's date in the
 * visitor's browser, so it stays current without redeploying.
 * `compact` shows the next few upcoming events only (home page).
 */
export function EventsList({ compact = false }: { compact?: boolean }) {
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
  }, []);

  const list = useMemo(() => {
    const ref = today ?? new Date(0);
    const sorted = [...events].sort((a, b) => a.start.localeCompare(b.start));
    const filtered = sorted.filter((e) => {
      const ends = parseDate(e.end ?? e.start);
      const upcoming = ends >= ref;
      return (view === "upcoming" ? upcoming : !upcoming) && (cat === "All" || e.category === cat);
    });
    return view === "past" ? filtered.reverse() : filtered;
  }, [today, view, cat]);

  const shown = compact ? list.slice(0, 4) : list;
  const isNow = (e: EventItem) => today && parseDate(e.start) <= today && parseDate(e.end ?? e.start) >= today;

  return (
    <div>
      {!compact && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex rounded-full border border-brand-200 bg-white p-1">
            {(["upcoming", "past"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${view === v ? "bg-brand-600 text-white" : "text-ink-soft hover:text-brand-700"}`}
              >
                {v}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${cat === c ? "bg-brand-100 text-brand-700" : "text-ink-soft hover:bg-brand-50"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <ul className="space-y-3">
        {shown.map((e) => {
          const d = dayMonth(e.start);
          return (
            <li key={e.id} className="group flex items-center gap-5 rounded-2xl border border-brand-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-50 text-center group-hover:bg-brand-600 group-hover:text-white">
                <div>
                  <div className="font-serif text-2xl font-semibold leading-none">{d.day}</div>
                  <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider opacity-70">{d.month}</div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${badge[e.category]}`}>{e.category}</span>
                  {isNow(e) && <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">Today</span>}
                </div>
                <h3 className="mt-1.5 font-sans text-[0.98rem] font-bold text-ink">{e.title}</h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
                  <span className="flex items-center gap-1.5"><Icon name="calendar" className="h-3.5 w-3.5" />{formatRange(e.start, e.end)}</span>
                  {e.location && <span className="flex items-center gap-1.5"><Icon name="pin" className="h-3.5 w-3.5" />{e.location}</span>}
                </p>
                {!compact && <p className="mt-2 text-sm text-ink-soft">{e.text}</p>}
              </div>
            </li>
          );
        })}
        {shown.length === 0 && (
          <li className="rounded-2xl border border-dashed border-brand-200 p-8 text-center text-sm text-ink-soft">No events in this view.</li>
        )}
      </ul>
    </div>
  );
}
