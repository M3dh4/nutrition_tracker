import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipeById } from "../../../data/recipes";

export function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default function RecipePage({ params }) {
  const recipe = getRecipeById(params.id);
  if (!recipe) return notFound();

  return (
    <div>
      <Link href="/" className="inline-block mb-4 underline text-accentDark font-medium">
        &larr; Back to home
      </Link>

      <h1 className="text-xl font-bold mb-1">{recipe.name}</h1>
      {recipe.description && <p className="text-gray-700 mb-4">{recipe.description}</p>}

      <div className="flex flex-wrap gap-3 text-sm font-medium mb-6">
        {recipe.prep_time && (
          <span className="border border-ink rounded-full px-3 py-1">Prep: {recipe.prep_time}</span>
        )}
        {recipe.cook_time && (
          <span className="border border-ink rounded-full px-3 py-1">Cook: {recipe.cook_time}</span>
        )}
        {recipe.servings && (
          <span className="border border-ink rounded-full px-3 py-1">Servings: {recipe.servings}</span>
        )}
      </div>

      {recipe.diabetes_bp_notes && (
        <div className="bg-okBg border-2 border-accent rounded-lg p-4 mb-6">
          <p className="font-bold text-accentDark mb-1">Diabetes &amp; BP guidance</p>
          <p className="text-base">{recipe.diabetes_bp_notes}</p>
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-ink pb-1">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>
              <span className="font-semibold">{ing.amount}</span>{" "}
              {ing.ingredient_id.replace(/-/g, " ")}
              {ing.notes ? <span className="text-gray-600"> ({ing.notes})</span> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-ink pb-1">Preparation Steps</h2>
        <ol className="list-decimal list-inside space-y-2 text-base">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {recipe.nutrition && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-ink pb-1">Nutrition (estimated, per serving)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-base">
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

      {recipe.tips && recipe.tips.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-ink pb-1">Tips</h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            {recipe.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
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
    <div className="border border-border rounded-lg px-3 py-2">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-bold text-lg">
        {value}
        {unit ? <span className="text-sm font-normal"> {unit}</span> : null}
      </p>
    </div>
  );
}
