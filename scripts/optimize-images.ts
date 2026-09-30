// Usage: drop originals in photos-src/ (e.g. 01.jpg … 09.jpg), then `npm run optimize-images`.
// Writes resized WebP files to public/photos/ (max 1600px wide, q=78).
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";

const IN = "photos-src";
const OUT = "public/photos";
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(IN)) {
  if (!/\.(jpe?g|png|heic|webp|avif)$/i.test(file)) continue;
  const name = parse(file).name;
  await sharp(join(IN, file))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join(OUT, `${name}.webp`));
  console.log(`✓ ${name}.webp`);
}
