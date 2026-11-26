import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One absurd clause that could hide deep in a terms-of-service agreement (one English sentence, 200 characters max).
// It should read like boilerplate until the absurd image arrives.
const LIMIT = 200;
const clause = "By continuing to scroll, you grant the Company a perpetual, royalty-free license to the name of your first pet, which the Company may assign, at its sole discretion, to a goose of its choosing.";

const n = [...clause].length;
if (!clause.trim() || n > LIMIT) throw new Error(`clause is ${n} characters; limit ${LIMIT}`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), clause, "utf8");
console.log(`${n}/${LIMIT}: ${clause}`);
