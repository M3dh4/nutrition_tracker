import recipesJson from "./recipes.json";
export const recipes = recipesJson;
export function getRecipeById(id) {
  return recipes.find((r) => r.id === id) || null;
}
