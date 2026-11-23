import { sleep } from "./async-utils.js";

import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const { add } = require("./legacy.cjs");

console.log("Start");

console.log("Addition:", add(10, 20));

await sleep(100);

console.log("Done after 100ms");
