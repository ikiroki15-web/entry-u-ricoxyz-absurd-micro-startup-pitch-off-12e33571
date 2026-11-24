import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for the Absurd Micro-Startup Pitch-Off:
// pre-written apology emails for AI coding agents whose deploys failed.
const ENTRY =
  "We sell pre-written 'sorry, the deploy failed' emails to AI coding agents, $0.10 each, bulk discount for repeat offenders.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
