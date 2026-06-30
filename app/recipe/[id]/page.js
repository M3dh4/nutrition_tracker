import { notFound } from "next/navigation";
import { recipes, getRecipeById } from "../../../data/recipes";
import BackButton from "../../../components/BackButton";
import { cleanDescription, cleanTips } from "../../../lib/cleanText";

export function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default function RecipePage({ params }) {
  const recipe = getRecipeById(params.id);
  if (!recipe) return notFound();

  const description = cleanDescription(recipe.description);
  const tips = cleanTips(recipe.tips);

  return (
    <div>
      <BackButton label="Back" />

      <h1 className="text-xl font-bold mb-1">{recipe.name}</h1>
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      <div className="flex flex-wrap gap-2 text-sm font-semibold mb-6">
        {recipe.prep_time && (
          <span className="bg-card shadow-card rounded-full px-3 py-1 text-gray-700">Prep: {recipe.prep_time}</span>
        )}
        {recipe.cook_time && (
          <span className="bg-card shadow-card rounded-full px-3 py-1 text-gray-700">Cook: {recipe.cook_time}</span>
        )}
        {recipe.servings && (
          <span className="bg-card shadow-card rounded-full px-3 py-1 text-gray-700">Servings: {recipe.servings}</span>
        )}
      </div>

      {recipe.diabetes_bp_notes && (
        <div className="bg-accentSoft rounded-2xl p-4 mb-6">
          <p className="font-bold text-accentDark mb-1">Diabetes &amp; BP guidance</p>
          <p className="text-base text-gray-700">{recipe.diabetes_bp_notes}</p>
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-accentDark">Ingredients</h2>
        <ul className="space-y-1.5 text-base bg-card shadow-card rounded-2xl p-4">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-accent">•</span>
              <span>
                <span className="font-semibold">{ing.amount}</span>{" "}
                {ing.ingredient_id.replace(/-/g, " ")}
                {ing.notes ? <span className="text-gray-500"> ({ing.notes})</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-accentDark">Preparation Steps</h2>
        <ol className="space-y-3 text-base bg-card shadow-card rounded-2xl p-4">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {recipe.nutrition && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-accentDark">Nutrition (estimated, per serving)</h2>
          <div className="grid grid-cols-3 gap-2.5">
            <NutritionStat label="Calories" value={recipe.nutrition.calories} />
            <NutritionStat label="Protein" value={recipe.nutrition.protein_g} unit="g" />
            <NutritionStat label="Carbs" value={recipe.nutrition.carbs_g} unit="g" />
            <NutritionStat label="Fiber" value={recipe.nutrition.fiber_g} unit="g" />
            <NutritionStat label="Fat" value={recipe.nutrition.fat_g} unit="g" />
            {recipe.nutrition.sodium_mg != null && (
              <NutritionStat label="Sodium" value={recipe.nutrition.sodium_mg} unit="mg" />
            )}
          </div>
        </section>
      )}

      {tips.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-accentDark">Tips</h2>
          <ul className="space-y-1.5 text-base bg-card shadow-card rounded-2xl p-4">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function NutritionStat({ label, value, unit }) {
  if (value == null) return null;
  return (
    <div className="bg-card shadow-card rounded-xl px-2.5 py-2 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-bold text-base text-ink">
        {value}
        {unit ? <span className="text-xs font-normal"> {unit}</span> : null}
      </p>
    </div>
  );
}
