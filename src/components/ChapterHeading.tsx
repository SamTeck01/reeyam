type Props = {
  id: string;
  eyebrow: string;
  title: string;
  italic?: string;
  after?: string;
  sub?: string;
  tone?: "day" | "night";
};

export default function ChapterHeading({ id, eyebrow, title, italic, after, sub, tone = "day" }: Props) {
  const night = tone === "night";
  return (
    <header className="mb-14">
      <p className={`eyebrow rv mb-5 ${night ? "text-night-accent" : "text-accent"}`}>{eyebrow}</p>
      <h2 id={id} className={`display chapter-title rv ${night ? "text-night-ink" : "text-ink"}`}>
        {title}
        {italic ? <> <em className="italic">{italic}</em></> : null}
        {after ? <> {after}</> : null}
      </h2>
      {sub ? <p className="rv mt-5 text-[19px] italic text-muted">{sub}</p> : null}
    </header>
  );
}
