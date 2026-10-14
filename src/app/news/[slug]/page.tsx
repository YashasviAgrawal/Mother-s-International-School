import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/data/site";
import { NewsArticle } from "@/components/NewsArticle";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) return { title: "News" };
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: "article" } };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) notFound();
  return <NewsArticle post={post} />;
}
