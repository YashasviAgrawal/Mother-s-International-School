import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { photos } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of campus life, learning, arts, sports and celebrations at The Mother's International School, New Delhi.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" eyebrow="Life at MIS" text="Moments from our campus, classrooms, studios and celebrations." scene="garden" image={photos.sportsField} />
      <section className="container-x mt-16">
        <Gallery />
      </section>
    </>
  );
}
