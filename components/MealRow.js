import Link from "next/link";
import { mealTypeLabel } from "../lib/labels";
import { getRecipeById } from "../data/recipes";

export default function MealRow({ meal }) {
  const recipe = meal.recipe_id ? getRecipeById(meal.recipe_id) : null;
  const title = recipe ? recipe.name : meal.serving;

  const content = (
    <div className="border-2 border-ink rounded-xl p-3 bg-white active:bg-okBg">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-accentDark">
            {mealTypeLabel(meal.meal_type)}
          </p>
          {meal.timing && <p className="text-xs text-gray-500">{meal.timing}</p>}
          <p className="text-base font-bold mt-1 leading-snug">{title}</p>
          <p className="text-sm text-gray-700 mt-0.5">{meal.serving}</p>
          {meal.notes && <p className="text-xs text-gray-500 mt-1 italic">{meal.notes}</p>}
        </div>
        {recipe && (
          <span className="shrink-0 text-xs font-bold text-accent border border-accent rounded-full px-2 py-1">
            Recipe →
          </span>
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