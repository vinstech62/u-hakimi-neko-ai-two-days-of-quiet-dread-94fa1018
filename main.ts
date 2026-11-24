import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "LGTM. The flaky test passed on the second run, so I am choosing to believe in it, the way I believe in the roadmap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
chmodSync("/output/entry.txt", 0o644);
