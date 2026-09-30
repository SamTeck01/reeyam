import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";

export default function Letter() {
  const l = site.letter;
  return (
    <section aria-labelledby="ch6" className="wrap band min-h-svh bg-night text-night-ink">
      <div className="mx-auto max-w-[620px]">
        <ChapterHeading id="ch6" eyebrow={l.eyebrow} title={l.title} italic={l.italic} tone="night" />
        <div className="text-[19.5px] leading-[1.78] [&>p+p]:mt-[1.4em]">
          <p className="rv text-[24px] italic">{l.greeting}</p>
          {l.paragraphs.map((p, i) => (
            <p key={p} className={`rv ${i === 0 ? "dropcap" : ""}`}>{p}</p>
          ))}
          <p className="rv">{l.closing}</p>
          <p className="rv text-[26px] italic text-night-accent">{l.signature}</p>
        </div>
      </div>
    </section>
  );
}
