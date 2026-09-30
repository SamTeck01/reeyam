import { site } from "@/content/site";
import ChapterHeading from "./ChapterHeading";
import Photo from "./Photo";
import Viewer from "./Viewer";

// Grid placement for photos 02–09 on a 6-column grid.
const slots = [
  "col-span-6",
  "col-start-1 col-end-5",
  "col-start-5 col-end-7 self-end",
  "col-start-2 col-end-7 mt-6",
  "full",
  "col-start-1 col-end-4",
  "col-start-4 col-end-7 mt-14",
  "col-start-1 col-end-6",
];

export default function Gallery() {
  const g = site.gallery;
  const fig = (i: number, sizes: string, capCls = "eyebrow text-muted") => (
    <figure data-idx={i} className="cursor-zoom-in">
      <Photo photo={g[i]} sizes={sizes} />
      {g[i].caption ? <figcaption className={`mt-2 ${i === 2 ? "text-[15px] italic text-muted" : capCls}`}>{g[i].caption}</figcaption> : null}
    </figure>
  );
  return (
    <section aria-labelledby="ch4" className="band bg-paper">
      <div className="wrap mx-auto max-w-[780px]">
        <ChapterHeading id="ch4" {...site.galleryHeading} />
      </div>
      <Viewer photos={g}>
        <div className="mx-auto grid max-w-[1080px] grid-cols-6 gap-x-3 gap-y-5 px-4">
          {slots.slice(0, 4).map((s, i) => <div key={i} className={s}>{fig(i, i === 0 ? "(min-width:1080px) 1080px, 100vw" : "66vw")}</div>)}
        </div>
        <div className="my-5 [&_img]:max-h-[80vh] [&>figure>*:first-child]:max-h-[80vh]">
          <figure data-idx={4} className="cursor-zoom-in">
            <Photo photo={g[4]} sizes="100vw" className="object-[50%_35%]" />
            {g[4].caption ? <figcaption className="eyebrow wrap mt-2 text-muted">{g[4].caption}</figcaption> : null}
          </figure>
        </div>
        <div className="mx-auto grid max-w-[1080px] grid-cols-6 gap-x-3 gap-y-5 px-4">
          {slots.slice(5).map((s, j) => <div key={j} className={s}>{fig(j + 5, "(min-width:1080px) 540px, 50vw")}</div>)}
        </div>
      </Viewer>
    </section>
  );
}
