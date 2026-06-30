// lib/groceryList.js
// Aggregates every ingredient referenced by a week's meal plan into an
// Indian-household-friendly shopping list — but deliberately leaves out
// always-on-hand pantry items (salt, dry spice powders, cooking oil/ghee,
// tea/coffee) since those don't need to be tracked week to week. What's left
// is the stuff that actually changes week to week and is worth a shopping
// reminder: specific vegetables, the protein for the week (paneer/soya/tofu
// amounts), specific flours/grains (jowar, ragi, brown rice, etc.), dals,
// fruits, and fresh aromatics.

import { getRecipeById } from "../data/recipes";
import ingredientsJson from "../data/ingredients.json";

const ingredientsById = Object.fromEntries(ingredientsJson.map((i) => [i.id, i]));

// Always-stocked pantry items — never shown on the weekly list, regardless
// of how many recipes use them.
const STAPLE_IDS = new Set([
  // dry spice powders / whole spices — assumed always in the masala dabba
  "salt",
  "turmeric-powder",
  "cumin-zeera",
  "fennel-seeds",
  "methi-seeds",
  "black-pepper",
  "kasuri-methi",
  "chaat-masala",
  "mustard-seeds",
  "asafoetida-hing",
  "cinnamon",
  // cooking fats
  "ghee",
  "cooking-oil",
  // pantry beverages
  "tea",
  "coffee",
]);

// Buckets the *remaining* (non-staple) ingredients into sections that match
// how an Indian household actually shops — proteins/dairy get their own
// section since tracking exact paneer/soya quantity for the week matters,
// and grains/flours are split out so specific items (jowar flour, brown
// rice, ragi flour) are easy to spot rather than buried in "pantry".
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
    key: "protein_dairy",
    label: "Paneer / Soya / Dairy",
    categories: ["dairy", "soy_product"],
  },
  {
    key: "dals_legumes",
    label: "Dals & Legumes",
    categories: ["legume", "legume_flour"],
  },
  {
    key: "grains_flours",
    label: "Grains & Flours",
    categories: ["grain", "grain_flour", "grain_flour_restricted"],
  },
  {
    key: "aromatics",
    label: "Fresh Aromatics & Herbs",
    categories: ["spice_aromatic"],
  },
  {
    key: "nuts_seeds",
    label: "Nuts, Seeds & Snacks",
    categories: ["nut", "nut_seed", "seed", "snack", "packaged_snack"],
  },
  {
    key: "other",
    label: "Other",
    categories: ["sweetener", "sweetener_restricted", "beverage_base", "fat"],
  },
];

function categoryGroupFor(rawCategory) {
  const group = CATEGORY_GROUPS.find((g) => g.categories.includes(rawCategory));
  return group ? group.key : "other";
}

/**
 * Builds a grocery list for a single week, skipping pantry staples.
 * week: an entry from meal_plans.json ({ week, title, days: [...] })
 *
 * Returns an array of { key, label, items: [{ id, name, amounts: [...], notes: [...] }] }
 * with empty groups omitted.
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
        if (STAPLE_IDS.has(ing.ingredient_id)) return; // skip pantry staples

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