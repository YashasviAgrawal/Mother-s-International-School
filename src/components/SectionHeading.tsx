export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink md:text-[2.75rem]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">{text}</p>}
    </div>
  );
}
