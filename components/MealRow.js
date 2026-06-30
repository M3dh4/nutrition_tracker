import Link from "next/link";
import { mealTypeLabel, mealTypeColor } from "../lib/labels";
import { getRecipeById } from "../data/recipes";

export default function MealRow({ meal }) {
  const recipe = meal.recipe_id ? getRecipeById(meal.recipe_id) : null;
  const title = recipe ? recipe.name : meal.serving;

  const content = (
    <div className="rounded-2xl p-3.5 bg-card shadow-card active:shadow-cardHover">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span
            className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${mealTypeColor(
              meal.meal_type
            )}`}
          >
            {mealTypeLabel(meal.meal_type)}
          </span>
          {meal.timing && <p className="text-xs text-gray-400 mt-1">{meal.timing}</p>}
          <p className="text-base font-bold mt-1 leading-snug text-ink">{title}</p>
          <p className="text-sm text-gray-600 mt-0.5">{meal.serving}</p>
          {meal.notes && <p className="text-xs text-gray-500 mt-1 italic">{meal.notes}</p>}
        </div>
        {recipe && (
          <span className="shrink-0 text-xs font-bold text-accentDark bg-accentSoft rounded-full px-2.5 py-1">
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
