import Link from "next/link";
import { mealPlans } from "../data/mealPlans";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Your 12-Week Plan</h1>
      <p className="text-gray-700 mb-6">
        Select a week to see your daily meals, drinks, and recipes — built with low-sodium and
        low-glycemic guidance for managing Diabetes and High Blood Pressure.
      </p>

      <Link
        href="/checklist"
        className="block w-full text-center mb-8 bg-accent text-white text-lg font-bold py-4 rounded-lg border-2 border-accentDark hover:bg-accentDark transition-colors"
      >
        General Nutritional Checklist &amp; Help
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {mealPlans.filter((w) => w.week !== 12).map((w) => (
          <Link
            key={w.week}
            href={`/week/${w.week}`}
            className="flex flex-col items-center justify-center text-center border-2 border-ink rounded-lg py-8 px-2 bg-white hover:bg-okBg transition-colors"
          >
            <span className="text-3xl font-bold">{w.week}</span>
            <span className="text-base font-medium mt-1">Week {w.week}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
