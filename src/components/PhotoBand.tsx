import Image from "next/image";

/**
 * A wide photo shown close to its native panoramic shape (1140 × 350), so
 * nothing important is cropped. On small screens it relaxes to 2.2:1 to
 * keep a usable height.
 */
export function PhotoBand({
  src,
  alt,
  caption,
  className = "",
  position = "object-center",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  position?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[2.2/1] overflow-hidden rounded-[1.75rem] shadow-card md:aspect-[1140/350]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 1140px, 100vw" className={`object-cover ${position}`} />
      </div>
      {caption && <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-ink-soft">{caption}</figcaption>}
    </figure>
  );
}
