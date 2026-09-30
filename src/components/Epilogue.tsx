"use client";
import { useState } from "react";
import { site } from "@/content/site";

export default function Epilogue() {
  const e = site.epilogue;
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);
  const paras = [...e.card, ...(e.showDataJoke ? [e.dataJoke] : []), ...e.cardAfter];

  const blow = () => {
    if (out) return;
    setOut(true);
    navigator.vibrate?.(15);
  };

  return (
    <>
      <section aria-labelledby="epilogue" className="wrap flex min-h-svh flex-col items-center justify-center bg-paper py-28 text-center">
        <p className="eyebrow mb-5 text-accent">{e.eyebrow}</p>
        <h2 id="epilogue" className="display chapter-title mb-14 italic">{e.title}</h2>

        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="h-14 rounded-full border border-ink px-9 text-[22px] italic transition-colors duration-300 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper"
          >
            {e.button}
          </button>
        ) : (
          <div className="unfold card-shadow w-full max-w-[560px] border border-card-border bg-card p-8 text-left text-[20px] leading-[1.6] text-body sm:p-11" aria-live="polite">
            <p className="mb-6 text-[28px] leading-tight italic text-accent">{e.cardTitle}</p>
            {paras.map((p) => <p key={p} className="mb-5">{p}</p>)}
            <p className="italic">{e.cardSign}</p>
          </div>
        )}

        <div className="mt-24 flex flex-col items-center">
          <button type="button" onClick={blow} aria-label="Blow out the candle" aria-pressed={out} className="relative grid min-h-[120px] min-w-[64px] place-items-end justify-center pt-12">
            <span className="relative block">
              <span className={`flame ${out ? "out" : ""}`} />
              {out ? <span className="smoke" /> : null}
              <span className="wick" />
              <span className="candle-stick block" />
            </span>
          </button>
          <p className={`mt-5 ${out ? "text-[18px] italic text-body" : "eyebrow text-muted"}`} aria-live="polite">
            {out ? e.candleDone : e.candleHint}
          </p>
        </div>
      </section>
      <footer className="eyebrow wrap bg-paper pb-[max(40px,env(safe-area-inset-bottom))] text-center leading-[1.8] text-muted">
        {e.footer.map((l) => <span key={l} className="block">{l}</span>)}
      </footer>
    </>
  );
}
