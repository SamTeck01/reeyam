# For Reeyam

A short book for one reader. Next.js (App Router), static export, Tailwind v4, no animation libraries.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Edit copy, dates and colours
Everything lives in `src/content/site.ts`. Components don't contain copy.
- **Colours:** `site.colors`. They're injected as CSS variables in `layout.tsx`, so changing a hex re-themes the whole site.
- **Placeholders:** search for `[PLACEHOLDER` (photo captions and alt text).
- **Data joke:** set `site.epilogue.showDataJoke` to `false` to hide that paragraph.

## Add photos
1. Put the originals in `photos-src/` as `01.jpg` … `09.jpg`.
2. Run `npm run optimize-images`. It uses sharp to write resized WebP files (1600px, q78) to `public/photos/`.
3. In `site.ts`, set each photo's `src`, e.g. `photo("02", "4/5", "caption", "/photos/02.webp")`, and write a real `alt`.
   Photo 01 is the hero, and it's also used as the OG image.

Any photo without a `src` shows a labelled placeholder.

**Why pre-optimise?** `output: "export"` can't run Next's image optimiser, so `images.unoptimized` is `true` and the images are optimised once at author time. This works on any host. The trade-off: no automatic blur placeholder. The empty photo slot colour serves as the placeholder, and there's no CLS because every image has an aspect ratio.

## Deploy (Vercel)
Push to GitHub, then import the repo in Vercel. The framework is auto-detected; the output is `out/`.
Because this is personal, use an unguessable project name or slug (e.g. `for-reeyam-7f3k9q.vercel.app`) and share only that link. Other options are Vercel's Password Protection, or a simple passcode screen in front of `page.tsx`. The page already sends `noindex`.
