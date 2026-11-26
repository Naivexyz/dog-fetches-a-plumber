import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One original one-liner: a simple setup (dog fetches slippers), then an
// escalating list that breaks the expectation at the very last word.
const entry =
  "I taught my dog to fetch my slippers. Now he brings me the neighbor's slippers, the mailman's shoes, and once, a whole plumber.";

// Fail loudly instead of shipping an invalid entry: the gate only accepts
// 1-200 characters of non-whitespace UTF-8 text.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
chmodSync("/output/entry.txt", 0o644);
