import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";

export default function Noticed() {
  return (
    <section aria-labelledby="ch2" className="wrap band bg-paper">
      <div className="mx-auto max-w-[680px]">
        <ChapterHeading id="ch2" {...site.noticedHeading} />
        <ol className="border-t border-rule">
          {site.noticed.map((n, i) => (
            <li key={n.title} className="rv grid grid-cols-[44px_1fr] border-b border-rule py-7">
              <span className="eyebrow pt-2 text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="mb-2 text-[25px] leading-[1.2] tracking-[-.01em]">{n.title}</h3>
                <p className="text-[18px] leading-[1.6] text-body">{n.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
