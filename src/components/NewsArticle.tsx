import Link from "next/link";
import { news, type NewsPost } from "@/data/site";
import { formatDate } from "@/lib/dates";
import { Media } from "./Media";
import { NewsCard } from "./NewsCard";
import { Icon } from "./Icon";

export function NewsArticle({ post }: { post: NewsPost }) {
  const related = news.filter((p) => p.slug !== post.slug).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <>
      <article className="container-x pt-12">
        <nav className="flex items-center gap-2 text-xs font-semibold text-ink-soft" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700">Home</Link>
          <Icon name="chevron" className="h-3 w-3 -rotate-90" />
          <Link href="/news" className="hover:text-brand-700">News</Link>
          <Icon name="chevron" className="h-3 w-3 -rotate-90" />
          <span className="line-clamp-1 text-ink">{post.title}</span>
        </nav>
        <header className="mx-auto mt-10 max-w-3xl text-center">
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">{post.category}</span>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-soft">
            <Icon name="calendar" className="h-4 w-4 text-brand-500" /> {formatDate(post.date)}
          </p>
        </header>
        <div className="relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-[2rem] shadow-lift">
          <Media scene={post.scene} image={post.image} alt={post.title} priority sizes="(min-width: 1024px) 1024px, 100vw" />
        </div>
        <div className="prose-school mx-auto mt-12 max-w-2xl text-lg">
          <p className="!text-xl !text-ink">{post.excerpt}</p>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-between border-t border-brand-100 pt-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600">
            <Icon name="chevron-left" className="h-4 w-4" /> All news
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-ink-soft hover:text-brand-700">Questions? Contact the office</Link>
        </div>
      </article>

      <section className="container-x mt-24">
        <h2 className="font-serif text-3xl font-semibold">More from MIS</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <NewsCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
