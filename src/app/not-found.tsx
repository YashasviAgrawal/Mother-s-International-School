import Link from "next/link";
import { Media } from "@/components/Media";
import { photos } from "@/data/site";

export default function NotFound() {
  return (
    <section className="container-x grid items-center gap-10 py-24 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">This page has wandered off</h1>
        <p className="mt-4 max-w-md text-ink-soft">The page you are looking for may have moved. Try the home page or one of the links below.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/admissions" className="btn btn-outline">Admissions</Link>
          <Link href="/contact" className="btn btn-outline">Contact</Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
        <Media scene="campus" image={photos.sportsField} alt="The school's main field, surrounded by trees" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </section>
  );
}
