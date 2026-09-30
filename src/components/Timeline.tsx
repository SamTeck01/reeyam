import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";

export default function Timeline() {
  const items = site.timeline;
  const hd = site.timelineHeading;
  return (
    <section aria-labelledby="ch1" className="wrap band bg-paper-alt">
      <div className="mx-auto max-w-[680px]">
        <ChapterHeading id="ch1" {...hd} />
        <ol className="relative border-l border-rule pl-8">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            const hl = "highlight" in it && it.highlight;
            return (
              <li key={it.label} className="rv relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute top-[3px] rounded-full ${
                    hl
                      ? "-left-[40px] h-[15px] w-[15px] bg-accent"
                      : `-left-[37.5px] h-[10px] w-[10px] border border-muted bg-paper-alt ${last ? "border-dashed" : ""}`
                  }`}
                />
                <p className={`eyebrow mb-2 ${hl ? "text-accent" : "text-muted"}`}>{it.label}</p>
                <h3 className={hl ? "display mb-3 text-[clamp(34px,9vw,48px)] italic text-accent" : "mb-2 text-[24px] leading-tight"}>
                  {it.title}
                </h3>
                <p className="text-[18px] leading-[1.6] text-body">{it.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
