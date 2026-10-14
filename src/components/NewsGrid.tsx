"use client";

import { useMemo, useState } from "react";
import { news } from "@/data/site";
import { NewsCard } from "./NewsCard";
import { Icon } from "./Icon";

const cats = ["All", "Notice", "Admissions", "Campus Life", "Achievements"] as const;

export function NewsGrid() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [q, setQ] = useState("");

  const posts = useMemo(() => {
    const term = q.trim().toLowerCase();
    return [...news]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((p) => (cat === "All" || p.category === cat) && (!term || `${p.title} ${p.excerpt}`.toLowerCase().includes(term)));
  }, [cat, q]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${cat === c ? "border-brand-600 bg-brand-600 text-white" : "border-brand-200 text-ink-soft hover:border-brand-400"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search news</span>
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search news" className="field pl-11" />
        </label>
      </div>
      {posts.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <NewsCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-brand-200 p-10 text-center text-ink-soft">No news matches your search.</p>
      )}
    </div>
  );
}
