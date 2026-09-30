"use client";
import { useState, type ReactNode } from "react";
import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";

function Row({ id, label, line, children }: { id: string; label?: string; line: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rv border-b border-rule">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[44px] w-full items-center gap-4 py-6 text-left"
      >
        <span className="flex-1">
          {label ? <span className="eyebrow mb-1 block text-muted">{label}</span> : null}
          <span className="block text-[24px] leading-[1.25] italic">{line}</span>
        </span>
        <span aria-hidden className="plus grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink text-[18px] leading-none">+</span>
      </button>
      <div id={id} className="acc-panel" role="region">
        <div>
          <div className="pb-7">{children}</div>
        </div>
      </div>
    </li>
  );
}

export default function YouSaid() {
  const y = site.youSaid;
  return (
    <section aria-labelledby="ch3" className="wrap band bg-paper-alt">
      <div className="mx-auto max-w-[680px]">
        <ChapterHeading id="ch3" eyebrow={y.eyebrow} title={y.title} italic={y.italic} after={y.after} />
        <p className="rv text-[19px] leading-[1.65] text-body">{y.intro}</p>
        <p className="rv mt-2 text-[19px] italic text-muted">{y.hint}</p>

        <ul className="mt-10 border-t border-rule">
          {y.wishes.map((w, i) => (
            <Row key={w.her} id={`wish-${i}`} label={y.herLabel} line={w.her}>
              <p className="eyebrow mb-2 text-accent">{y.meLabel}</p>
              <p className="text-[18px] leading-[1.6] text-body">{w.me}</p>
            </Row>
          ))}
        </ul>

        <figure className="mt-[120px]">
          <p className="eyebrow rv mb-8 text-muted">{y.answerLead}</p>
          <div className="relative">
            <span aria-hidden className="absolute -top-9 -left-2 select-none text-[140px] leading-none text-accent opacity-[.22]">“</span>
            <blockquote className="display relative text-[clamp(30px,8.4vw,50px)] leading-[1.08]">
              {y.answer.map((l, i) => (
                <p key={l} className={`rv mb-4 ${i === y.answer.length - 1 ? "italic text-accent" : ""}`}>{l}</p>
              ))}
            </blockquote>
          </div>
          <figcaption className="eyebrow rv mt-6 text-muted">{y.answerBy}</figcaption>
        </figure>

        <ul className="mt-14 border-t border-rule">
          <Row id="answer-reply" line={y.answerReplyLabel}>
            {y.answerReply.map((p) => (
              <p key={p} className="mb-3 text-[18px] leading-[1.6] text-body">{p}</p>
            ))}
          </Row>
        </ul>
      </div>
    </section>
  );
}
