// lib/groceryList.js
// Aggregates every ingredient referenced by a week's meal plan into an
// Indian-household-friendly shopping list, grouped by category.

import { getRecipeById } from "../data/recipes";
import ingredientsJson from "../data/ingredients.json";

const ingredientsById = Object.fromEntries(ingredientsJson.map((i) => [i.id, i]));

// Maps the raw ingredient categories in ingredients.json to the broader
// grocery-list sections a household actually shops by.
const CATEGORY_GROUPS = [
  {
    key: "vegetables",
    label: "Vegetables",
    categories: ["vegetable", "vegetable_restricted", "leafy_green"],
  },
  {
    key: "fruits",
    label: "Fruits",
    categories: ["fruit", "fruit_dried", "fruit_acid"],
  },
  {
    key: "dals_grains",
    label: "Dals / Grains / Flours",
    categories: [
      "grain",
      "grain_flour",
      "grain_flour_restricted",
      "legume",
      "legume_flour",
      "soy_product",
    ],
  },
  {
    key: "spices",
    label: "Spices / Seasoning",
    categories: ["spice", "spice_aromatic", "seasoning"],
  },
  {
    key: "dairy",
    label: "Dairy",
    categories: ["dairy"],
  },
  {
    key: "nuts_seeds",
    label: "Nuts & Seeds",
    categories: ["nut", "seed", "nut_seed"],
  },
  {
    key: "other",
    label: "Other / Pantry",
    categories: [
      "sweetener",
      "sweetener_restricted",
      "fat",
      "beverage",
      "beverage_base",
      "packaged_snack",
      "snack",
    ],
  },
];

function categoryGroupFor(rawCategory) {
  const group = CATEGORY_GROUPS.find((g) => g.categories.includes(rawCategory));
  return group ? group.key : "other";
}

/**
 * Builds a grocery list for a single week.
 * week: an entry from meal_plans.json ({ week, title, days: [...] })
 *
 * Returns an array of { key, label, items: [{ id, name, amounts: [...], notes: [...] }] }
 * sorted in a sensible shopping order, with empty groups omitted.
 */
export function buildGroceryListForWeek(week) {
  if (!week) return [];

  // ingredientId -> { id, name, amounts: Set, notes: Set, category }
  const acc = {};

  (week.days || []).forEach((day) => {
    (day.meals || []).forEach((meal) => {
      if (!meal.recipe_id) return;
      const recipe = getRecipeById(meal.recipe_id);
      if (!recipe || !recipe.ingredients) return;

      recipe.ingredients.forEach((ing) => {
        const meta = ingredientsById[ing.ingredient_id];
        const name = meta ? meta.name : ing.ingredient_id.replace(/-/g, " ");
        const category = meta ? meta.category : "other";

        if (!acc[ing.ingredient_id]) {
          acc[ing.ingredient_id] = {
            id: ing.ingredient_id,
            name,
            category,
            amounts: new Set(),
            notes: new Set(),
            recipeNames: new Set(),
          };
        }
        if (ing.amount) acc[ing.ingredient_id].amounts.add(ing.amount);
        if (ing.notes) acc[ing.ingredient_id].notes.add(ing.notes);
        acc[ing.ingredient_id].recipeNames.add(recipe.name);
      });
    });
  });

  const grouped = {};
  Object.values(acc).forEach((item) => {
    const groupKey = categoryGroupFor(item.category);
    if (!grouped[groupKey]) grouped[groupKey] = [];
    grouped[groupKey].push({
      id: item.id,
      name: item.name,
      amounts: Array.from(item.amounts),
      notes: Array.from(item.notes),
      usedIn: Array.from(item.recipeNames),
    });
  });

  return CATEGORY_GROUPS.filter((g) => grouped[g.key]?.length).map((g) => ({
    key: g.key,
    label: g.label,
    items: grouped[g.key].sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

/**
 * Renders the grocery list as plain text, suitable for copying/printing.
 */
export function groceryListToText(week, groups) {
  const lines = [`Mom's Weekly Grocery Prep List — Week ${week.week}`, ""];
  groups.forEach((group) => {
    lines.push(group.label.toUpperCase());
    group.items.forEach((item) => {
      const amt = item.amounts.length ? ` — ${item.amounts.join(", ")}` : "";
      lines.push(`  [ ] ${item.name}${amt}`);
    });
    lines.push("");
  });
  return lines.join("\n");
}
