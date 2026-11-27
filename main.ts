// news-image-20261127 — a program that writes one image summing up the world news
// of Friday 27 November 2026 to /output/entry.png (Node 22, standard library only).
//
// The image itself lives beside this file as entry.png; this program copies it to
// the output directory. The source image is located through import.meta.url, so the
// copy works no matter which directory the program is started from — the grader
// starts outside the repository. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve entry.png next to this source file, not relative to the working directory.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');

// The output directory is /output inside the grader, or MAKEFUN_OUTPUT_DIR locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

// Copy the poster to the output path, creating the directory first.
function publishPoster(from: string, to: string): void {
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
}

publishPoster(source, outFile);
