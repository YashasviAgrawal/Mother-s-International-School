import Link from "next/link";
import type { Scene } from "@/data/site";
import { Media } from "./Media";
import { Icon } from "./Icon";

/** Banner used at the top of every inner page, with breadcrumb. */
export function PageHero({ title, text, eyebrow, scene, image }: { title: string; text?: string; eyebrow?: string; scene: Scene; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Media scene={scene} image={image} tone="deep" alt="" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-800/90 via-brand-700/70 to-brand-600/30" />
        <div className="absolute inset-0 bg-brand-800/40 md:hidden" />
      </div>
      <div className="container-x py-20 text-white md:py-28">
        <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-brand-100" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <Icon name="chevron" className="h-3 w-3 -rotate-90" />
          <span className="text-white">{title}</span>
        </nav>
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-200">{eyebrow}</p>}
        <h1 className="max-w-3xl animate-fade-up font-serif text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-brand-50 [animation-delay:120ms] md:text-lg">{text}</p>}
      </div>
      <svg viewBox="0 0 1440 60" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60V30C240 0 480 0 720 22s480 30 720 0v38Z" fill="#fff" />
      </svg>
    </section>
  );
}
