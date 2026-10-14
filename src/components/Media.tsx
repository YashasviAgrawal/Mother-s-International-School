import Image from "next/image";
import type { Scene } from "@/data/site";
import { Illustration } from "./Illustration";

/**
 * Shows a real photo when `image` is provided, otherwise a matching illustration.
 * `fit="contain"` shows the whole photo (lightbox); `className` can carry an
 * `object-[x_y]` focal point for tight crops of the panoramic photos.
 */
export function Media({
  image,
  scene,
  alt,
  tone = "light",
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  fit = "cover",
}: {
  image?: string;
  scene: Scene;
  alt: string;
  tone?: "light" | "deep";
  priority?: boolean;
  className?: string;
  sizes?: string;
  fit?: "cover" | "contain";
}) {
  if (image) {
    return <Image src={image} alt={alt} fill priority={priority} sizes={sizes} className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`} />;
  }
  return <Illustration scene={scene} tone={tone} className={className} />;
}
