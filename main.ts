// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Self-contained copy program: Node 22 stdlib only, no network, no Chrome.
// Writes the one-line roast in entry.txt to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), byte-identical.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
// Gate check, same as the sealed scorer: 1-200 chars, not only whitespace.
if (text.length < 1 || text.length > 200 || !text.trim()) {
  throw new Error(`entry.txt fails the gate: ${text.length} chars`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
