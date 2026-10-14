import Link from "next/link";
import type { NewsPost } from "@/data/site";
import { formatDate } from "@/lib/dates";
import { Media } from "./Media";
import { Icon } from "./Icon";

export function NewsCard({ post, featured = false }: { post: NewsPost; featured?: boolean }) {
  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/news/${post.slug}`} className={`relative block overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <Media scene={post.scene} image={post.image} alt={post.title} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand-700">{post.category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs font-semibold text-ink-soft">
          <Icon name="calendar" className="h-3.5 w-3.5 text-brand-500" /> {formatDate(post.date)}
        </p>
        <h3 className={`mt-3 font-serif font-semibold leading-snug text-ink ${featured ? "text-2xl" : "text-[1.4rem]"}`}>
          <Link href={`/news/${post.slug}`} className="hover:text-brand-700">{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Link href={`/news/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:gap-3">
          Read more <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
