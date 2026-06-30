import Link from "next/link";
import { mealTypeLabel } from "../lib/labels";
import { getRecipeById } from "../data/recipes";

export default function MealRow({ meal }) {
  const recipe = meal.recipe_id ? getRecipeById(meal.recipe_id) : null;
  const title = recipe ? recipe.name : meal.serving;

  const content = (
    <div className="border-2 border-ink rounded-lg p-4 bg-white hover:bg-okBg transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accentDark">
            {mealTypeLabel(meal.meal_type)}
            {meal.timing ? <span className="font-normal text-gray-600"> &middot; {meal.timing}</span> : null}
          </p>
          <p className="text-lg font-bold mt-1">{title}</p>
          <p className="text-base text-gray-700 mt-1">{meal.serving}</p>
          {meal.notes && <p className="text-sm text-gray-600 mt-1 italic">{meal.notes}</p>}
        </div>
        {recipe && (
          <span className="shrink-0 text-sm font-semibold underline text-accent">View recipe</span>
        )}
      </div>
    </div>
  );

  if (recipe) {
    return (
      <Link href={`/recipe/${recipe.id}`} className="block">
        {content}
      </Link>
    );
  }
  return content;
}
