import Link from "next/link";
import { mealPlans } from "../data/mealPlans";

const TILE_COLORS = [
  "bg-accentSoft text-accentDark",
  "bg-sage/40 text-sageDark",
  "bg-moss/30 text-mossDark",
];

export default function HomePage() {
  const weeks = mealPlans.filter((w) => w.week !== 12);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Your Meal Plan</h1>
      <p className="text-sm text-gray-500 mb-5">
        Low-sodium, low-glycemic guidance for Diabetes &amp; BP.
      </p>

      <div className="flex gap-2.5 mb-6">
        <Link
          href="/checklist"
          className="flex-1 text-center bg-accent text-white text-sm font-bold py-3 rounded-2xl shadow-card active:bg-accentDark"
        >
          Checklist &amp; Help
        </Link>
        <Link
          href="/recipes"
          className="flex-1 text-center bg-card text-accentDark text-sm font-bold py-3 rounded-2xl shadow-card active:bg-accentSoft"
        >
          Browse Recipes
        </Link>
      </div>

      <p className="text-sm font-semibold text-gray-500 mb-2.5">Select a week</p>
      <div className="grid grid-cols-4 gap-2.5">
        {weeks.map((w, i) => (
          <Link
            key={w.week}
            href={`/week/${w.week}`}
            className={`flex items-center justify-center aspect-square rounded-2xl shadow-card active:shadow-cardHover ${TILE_COLORS[i % TILE_COLORS.length]}`}
          >
            <span className="text-2xl font-bold">{w.week}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
