import { site } from "@/content/site";
import Photo from "./Photo";

export default function Hero() {
  const h = site.hero;
  return (
    <header className="wrap relative flex min-h-svh flex-col pt-[max(20px,env(safe-area-inset-top))] pb-10">
      <div className="eyebrow fu flex justify-between gap-4 text-muted">
        <span>{h.eyebrow}</span>
        <span>{site.birthday}</span>
      </div>
      <h1 className="display mt-[14vh] text-[clamp(52px,15vw,128px)] leading-[.92]">
        <span className="fu block" style={{ animationDelay: ".15s" }}>{h.line1}</span>
        <em className="fu block pl-[12vw] text-accent" style={{ animationDelay: ".55s" }}>{h.line2}</em>
      </h1>
      <p className="fu mt-7 text-[21px] italic text-body" style={{ animationDelay: ".9s" }}>{h.sub}</p>
      <figure className="mt-12 ml-auto w-[82%] max-w-[520px]">
        <div className="unveil">
          <Photo photo={h.photo} sizes="(min-width: 760px) 520px, 82vw" priority reveal={false} />
        </div>
        {h.photo.caption ? (
          <figcaption className="eyebrow fu mt-3 text-muted" style={{ animationDelay: "1.3s" }}>{h.photo.caption}</figcaption>
        ) : null}
      </figure>
      <p className="eyebrow fu mt-14 flex items-center gap-3 text-muted" style={{ animationDelay: "1.3s" }}>
        {h.scrollCue}
        <svg className="bob" width="10" height="22" viewBox="0 0 10 22" fill="none" aria-hidden>
          <path d="M5 0v20M1 16l4 4 4-4" stroke="currentColor" strokeWidth="1" />
        </svg>
      </p>
    </header>
  );
}
