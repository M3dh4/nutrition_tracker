import { recipes } from "../../data/recipes";
import RecipeSearch from "../../components/RecipeSearch";
import BackButton from "../../components/BackButton";

export const metadata = {
  title: "All Recipes — Nutrition Tracker",
};

export default function AllRecipesPage() {
  const sorted = [...recipes].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <BackButton label="Home" fallbackHref="/" />
      <h1 className="text-xl font-bold mb-1">All Recipes</h1>
      <p className="text-sm text-gray-500 mb-4">Search and browse every recipe in your plan.</p>
      <RecipeSearch recipes={sorted} />
    </div>
  );
}
