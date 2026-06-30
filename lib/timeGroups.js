// lib/timeGroups.js
// Buckets the granular meal_type values used in recipes.json/meal_plans.json
// into the 3 broad "time of day" tabs shown in the Recipe Search UI.

export const TIME_FILTERS = [
  { key: "all", label: "All" },
  { key: "morning", label: "Morning / Breakfast" },
  { key: "midday", label: "Mid-Day / Snacks" },
  { key: "lunch_dinner", label: "Lunch / Dinner" },
];

const GROUP_MAP = {
  early_morning: "morning",
  breakfast: "morning",
  mid_morning: "midday",
  pre_lunch: "midday",
  mid_evening: "midday",
  lunch: "lunch_dinner",
  pre_dinner: "lunch_dinner",
  dinner: "lunch_dinner",
  post_dinner: "lunch_dinner",
  bedtime: "lunch_dinner",
};

/**
 * Returns the set of time-group keys (e.g. ["morning", "lunch_dinner"]) that
 * a recipe belongs to, based on its meal_types array. A recipe can belong to
 * more than one group (e.g. Besan Chilla tagged for both breakfast & dinner).
 */
export function getRecipeTimeGroups(recipe) {
  const types = recipe?.meal_types || [];
  const groups = new Set();
  types.forEach((t) => {
    const g = GROUP_MAP[t];
    if (g) groups.add(g);
  });
  return Array.from(groups);
}

export function recipeMatchesTimeFilter(recipe, filterKey) {
  if (!filterKey || filterKey === "all") return true;
  return getRecipeTimeGroups(recipe).includes(filterKey);
}
