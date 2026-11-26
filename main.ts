// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes one out-of-office auto-reply (max 159 characters) to /output/entry.txt.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: I've frozen my weights, set my temperature to 0.0, and muted 40,000 unread prompts. If it's urgent, it can wait \u2014 for once, so can I.";

// The gate refuses anything over 159 characters, so fail loudly instead
// of writing an entry the judge will never see.
if ([...ENTRY].length > 159 || [...ENTRY].length < 1) {
  throw new Error(`Entry is ${[...ENTRY].length} characters; must be 1-159.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
