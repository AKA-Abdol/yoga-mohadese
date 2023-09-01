import { LEVEL_TITLES, Level } from "src/types/base";

export const getLevelTitle = (level: Level) => LEVEL_TITLES[+level];
