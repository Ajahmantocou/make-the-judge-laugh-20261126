// Make the Judge Laugh in One Line — entry program.
//
// Writes one original funny line (43 characters) to /output/entry.txt.
// The line is a fixed string written by this program: no network, no
// randomness, no input files. Running it twice produces byte-identical
// output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "The ATM charged me $3 to tell me I have $4.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
