import { includePartials } from "./include.js";
import { initNav } from "./nav.js";
import { initHero } from "./hero.js";
import { initReels } from "./reels.js";
import { initMotion } from "./motion.js";

await includePartials();
initNav();
initHero();
initReels();
initMotion();
