import Link from "next/link";
import { mealPlans } from "../data/mealPlans";

export default function HomePage() {
  const weeks = mealPlans.filter((w) => w.week !== 12);

  return (
    <div>
      <h1 className="text-xl font-bold mb-1">Your Meal Plan</h1>
      <p className="text-sm text-gray-500 mb-4">
        Low-sodium, low-glycemic guidance for Diabetes &amp; BP.
      </p>

      <Link
        href="/checklist"
        className="block w-full text-center mb-6 bg-accent text-white text-base font-bold py-3 rounded-2xl shadow-card active:bg-accentDark"
      >
        Checklist &amp; Help
      </Link>

      <p className="text-sm font-semibold text-gray-600 mb-2">Select a week</p>
      <div className="grid grid-cols-4 gap-2.5">
        {weeks.map((w) => (
          <Link
            key={w.week}
            href={`/week/${w.week}`}
            className="flex items-center justify-center aspect-square rounded-2xl bg-card shadow-card active:shadow-cardHover active:bg-accentSoft"
          >
            <span className="text-2xl font-bold text-accentDark">{w.week}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
