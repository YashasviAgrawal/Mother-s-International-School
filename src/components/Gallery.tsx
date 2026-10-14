"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery } from "@/data/site";
import { Media } from "./Media";
import { Icon } from "./Icon";

const cats = ["All", "Campus", "Learning", "Arts", "Sports", "Celebrations"] as const;

export function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(() => gallery.filter((g) => cat === "All" || g.category === cat), [cat]);

  const move = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${cat === c ? "border-brand-600 bg-brand-600 text-white" : "border-brand-200 text-ink-soft hover:border-brand-400"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((g, i) => (
          <button
            key={g.title}
            onClick={() => setOpen(i)}
            className={`group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] text-left shadow-card ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`}
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Media scene={g.scene} image={g.image} alt={g.title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-800/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-200">{g.category}</p>
              <p className="font-serif text-xl font-semibold">{g.title}</p>
            </div>
          </button>
        ))}
      </div>

      {open !== null && items[open] && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={items[open].title} onClick={() => setOpen(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Media scene={items[open].scene} image={items[open].image} alt={items[open].title} sizes="100vw" fit="contain" />
            </div>
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-200">{items[open].category}</p>
                <p className="font-serif text-2xl">{items[open].title}</p>
              </div>
              <p className="text-sm text-brand-200">{open + 1} / {items.length}</p>
            </div>
            <button onClick={() => move(-1)} className="absolute left-3 top-[40%] grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink" aria-label="Previous"><Icon name="chevron-left" /></button>
            <button onClick={() => move(1)} className="absolute right-3 top-[40%] grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink" aria-label="Next"><Icon name="chevron-left" className="h-5 w-5 rotate-180" /></button>
            <button onClick={() => setOpen(null)} className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white" aria-label="Close"><Icon name="close" /></button>
          </div>
        </div>
      )}
    </>
  );
}
