"use client";
import { useRef, useState, type ReactNode, type MouseEvent, type TouchEvent } from "react";
import type { Photo } from "@/content/site";

// Tiny full-screen viewer on native <dialog>. Only opens for photos that have a src.
export default function Viewer({ photos, children }: { photos: readonly Photo[]; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const x0 = useRef(0);
  const real = photos.map((p, n) => (p.src ? n : -1)).filter((n) => n >= 0);

  const onClick = (e: MouseEvent) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-idx]");
    const n = el ? Number(el.dataset.idx) : -1;
    if (n < 0 || !photos[n]?.src) return;
    setI(n);
    ref.current?.showModal();
  };
  const step = (d: number) => {
    const k = real.indexOf(i);
    setI(real[(k + d + real.length) % real.length]);
  };
  const p = photos[i];

  return (
    <div onClick={onClick}>
      {children}
      <dialog
        ref={ref}
        className="viewer m-0 h-full max-h-none w-full max-w-none bg-transparent p-0"
        onClick={(e) => { e.stopPropagation(); ref.current?.close(); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
        onTouchStart={(e: TouchEvent) => { x0.current = e.touches[0].clientX; }}
        onTouchEnd={(e: TouchEvent) => { const dx = e.changedTouches[0].clientX - x0.current; if (Math.abs(dx) > 40) { e.preventDefault(); step(dx < 0 ? 1 : -1); } }}
      >
        {p?.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.src} alt={p.alt} className="h-full w-full object-contain p-4" />
        ) : null}
      </dialog>
    </div>
  );
}
