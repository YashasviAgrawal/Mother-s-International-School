import { announcements } from "@/data/site";
import { Icon } from "./Icon";

export function Ticker() {
  const items = [...announcements, ...announcements];
  return (
    <div className="border-b border-brand-100 bg-brand-50">
      <div className="container-x flex h-11 items-center gap-4">
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
          <Icon name="megaphone" className="h-3.5 w-3.5" /> Notices
        </span>
        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
          <div className="flex w-max animate-ticker gap-12 whitespace-nowrap text-sm text-ink-soft group-hover:[animation-play-state:paused]">
            {items.map((a, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
