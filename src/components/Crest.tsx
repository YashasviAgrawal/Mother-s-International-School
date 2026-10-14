/**
 * Placeholder crest: a bird in flight rising towards the sky, echoing the
 * school's described emblem. /images/logo.png is only 39 px tall, too small
 * to use here; swap in a high-resolution (ideally SVG) emblem when available.
 */
export function Crest({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="crest-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5ba7e2" />
          <stop offset="1" stopColor="#1d5c93" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#crest-g)" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1" />
      <circle cx="32" cy="20" r="4.5" fill="#fff" fillOpacity=".9" />
      <path d="M14 40c6-1 11-4 15-9 1 4 0 8-2 11 5-2 9-6 11-12 1 5 0 9-3 12 6-1 11-4 15-9-3 9-10 15-20 16-7 1-12-3-16-9Z" fill="#fff" />
      <path d="M20 49h24" stroke="#fff" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
