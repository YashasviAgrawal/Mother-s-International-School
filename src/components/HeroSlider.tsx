"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides, school } from "@/data/site";
import { Media } from "./Media";
import { Icon } from "./Icon";

const INTERVAL = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((n: number) => setIndex((n + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative isolate h-[min(88vh,760px)] min-h-[560px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <div className={`absolute inset-0 ${i === index ? "animate-kenburns" : ""}`}>
            <Media scene={s.scene} image={s.image} tone="deep" alt={s.title} priority={i === 0} sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/85 via-brand-800/45 to-transparent" />
          <div className="absolute inset-0 bg-brand-800/55 md:hidden" />
        </div>
      ))}

      <div className="container-x relative flex h-full flex-col justify-center pb-20 text-white">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-200">
          <span className="h-px w-10 bg-brand-200" /> {school.tagline}
        </p>
        <div className="relative min-h-[260px] max-w-3xl md:min-h-[300px]">
          {heroSlides.map((s, i) => (
            <div key={s.title} className={`absolute inset-0 transition-all duration-700 ${i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
              <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl md:text-7xl">{s.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-50 md:text-lg">{s.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={s.cta.href} className="btn btn-light" tabIndex={i === index ? 0 : -1}>
                  {s.cta.label} <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-ghost-white" tabIndex={i === index ? 0 : -1}>
                  Visit us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-28">
        <div className="container-x flex items-center gap-4">
          <button onClick={() => go(index - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/50 text-white hover:bg-white/15" aria-label="Previous slide">
            <Icon name="chevron-left" />
          </button>
          <button onClick={() => go(index + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/50 text-white hover:bg-white/15" aria-label="Next slide">
            <Icon name="chevron-left" className="h-5 w-5 rotate-180" />
          </button>
          <div className="ml-2 flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button key={s.title} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/30">
                <span
                  key={`${index}-${paused}`}
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{
                    width: i < index ? "100%" : i === index ? undefined : "0%",
                    animation: i === index && !paused ? `progress ${INTERVAL}ms linear forwards` : undefined,
                  }}
                />
              </button>
            ))}
          </div>
          <span className="ml-auto hidden font-serif text-lg text-white/80 sm:block">
            0{index + 1} <span className="text-white/40">/ 0{count}</span>
          </span>
        </div>
      </div>
      <style>{`@keyframes progress { from { width: 0% } to { width: 100% } }`}</style>

      <svg viewBox="0 0 1440 80" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80V40C320 0 640 0 960 30s360 30 480 10v40Z" fill="#fff" />
      </svg>
    </section>
  );
}
