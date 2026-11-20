// news-image-20261119 entry: "The World in a Day", a front-page collage that sums up
// the world news of Thursday 19 November 2026 in a single image.
//
// The picture itself sits beside this file as entry.png (a JPEG under a .png name,
// which the gate allows: it tells PNG from JPEG by the first bytes). This program's
// whole job is to deliver those exact bytes to the output folder, unchanged, every
// run: the grader runs it twice and both runs must write the same bytes, and the
// judge sees exactly the bytes copied.
//
// On make.fun's grader the output folder is /output. Anywhere else, point
// MAKEFUN_OUTPUT_DIR at a folder to stand in for it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const imageBesideThisFile = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(imageBesideThisFile, join(outputDir, 'entry.png'));
