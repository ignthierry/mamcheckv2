#!/usr/bin/env node
/*
 * ThreeUI ships its authored documents as .html files imported with Vite's
 * `?raw` suffix. Next/Turbopack has no module type for `.html`, so — exactly as
 * the published @designcodeio/threeui build does — each document is also
 * emitted as an ES module exposing the same string byte-for-byte.
 *
 * The .html file stays the source of truth; this script only mirrors it.
 * Run:  node scripts/build-shader-sources.mjs
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = "src/shaders";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let count = 0;
for await (const file of walk(ROOT)) {
  const html = await readFile(file, "utf8");
  const target = file.replace(/\.html$/, ".source.ts");
  const body = `/* Generated from ${relative(ROOT, file)} — see src/shaders/PROVENANCE.md.
 * The .html document next to this file is the authored source; this module only
 * re-exports it as a string so Turbopack can import it. Do not edit by hand. */
const source: string = ${JSON.stringify(html)};
export default source;
`;
  await writeFile(target, body, "utf8");
  count += 1;
}

console.log(`wrote ${count} .source.ts modules`);
