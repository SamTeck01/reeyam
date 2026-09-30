import { site } from "@/content/site";

export default function Prologue() {
  const p = site.prologue;
  return (
    <section aria-labelledby="prologue" className="wrap band bg-paper">
      <div className="mx-auto max-w-[640px]">
        <p className="eyebrow rv mb-5 text-accent">{p.eyebrow}</p>
        <h2 id="prologue" className="display chapter-title rv mb-12">{p.title}</h2>
        <div className="space-y-6 text-[19px] leading-[1.65] text-body">
          {p.paragraphs.map((t) => <p key={t} className="rv">{t}</p>)}
          <p className="rv italic">{p.closing}</p>
        </div>
      </div>
    </section>
  );
}
