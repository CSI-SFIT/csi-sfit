export { type Member, type Category } from "./types";

export const CATEGORY_ORDER: Category[] = [
  "Faculty",
  "Core",
  "Tech Team",
  "Creative Team",
  "PR Team",
  "Marketing Team",
  "Multimedia Team",
];

export const TEAM_MODULES: Record<number, () => Promise<{ default: import("./types").Member[] }>> = {
    // Add new years eg 2027 first
  2026: () => import("./2026"),
  2025: () => import("./2025"),
};

export const YEARS = Object.keys(TEAM_MODULES)
  .map((y) => Number(y))
  .sort((a, b) => b - a);