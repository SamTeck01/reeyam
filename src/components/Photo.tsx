import Image from "next/image";
import type { Photo as P } from "@/content/site";

const dims: Record<P["ratio"], [number, number]> = {
  "4/5": [1200, 1500],
  "3/4": [1200, 1600],
  "1/1": [1200, 1200],
  "16/10": [1600, 1000],
};

type Props = { photo: P; sizes: string; priority?: boolean; reveal?: boolean; className?: string };

export default function Photo({ photo, sizes, priority, reveal = true, className = "" }: Props) {
  const [w, h] = dims[photo.ratio];
  const cls = `block w-full h-full ${reveal ? "rv-img" : ""} ${className}`;
  if (!photo.src) {
    return (
      <div role="img" aria-label={photo.label} style={{ aspectRatio: photo.ratio }} className={`photo-slot flex items-end p-3 ${cls}`}>
        <span className="eyebrow text-muted">{photo.label}</span>
      </div>
    );
  }
  if (photo.video) {
    return (
      <video
        src={photo.video}
        poster={photo.src}
        aria-label={photo.alt}
        muted
        loop
        autoPlay
        playsInline
        preload="none"
        style={{ aspectRatio: photo.ratio }}
        className={`object-cover ${cls}`}
      />
    );
  }
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      style={{ aspectRatio: photo.ratio }}
      className={`object-cover ${cls}`}
    />
  );
}
