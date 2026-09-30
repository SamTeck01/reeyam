import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";

// Renders *segments* as italic.
const rich = (s: string) => s.split(/\*(.+?)\*/g).map((t, i) => (i % 2 ? <em key={i}>{t}</em> : t));

export default function Ordinary() {
  const o = site.ordinary;
  return (
    <section aria-labelledby="ch5" className="wrap band bg-paper-deep">
      <div className="mx-auto max-w-[720px]">
        <ChapterHeading id="ch5" eyebrow={o.eyebrow} title={o.title} italic={o.italic} />
        <ul className="space-y-5 text-[clamp(24px,6.6vw,34px)] font-light leading-[1.2] tracking-[-.015em]">
          {o.lines.map((l) => (
            <li
              key={l.text}
              className={`rv ${"indent" in l && l.indent ? "pl-[10%]" : ""} ${"italic" in l && l.italic ? "italic" : ""} ${"accent" in l && l.accent ? "text-accent" : ""}`}
            >
              {l.text}
            </li>
          ))}
        </ul>
        <hr className="my-14 border-rule" />
        <div className="space-y-5 text-[19px] leading-[1.65] text-body">
          {o.closing.map((p) => <p key={p} className="rv">{rich(p)}</p>)}
        </div>
      </div>
    </section>
  );
}
