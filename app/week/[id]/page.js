import Link from "next/link";
import { notFound } from "next/navigation";
import { mealPlans, getWeekPlan } from "../../../data/mealPlans";
import MealRow from "../../../components/MealRow";

export function generateStaticParams() {
  return mealPlans.map((w) => ({ id: String(w.week) }));
}

export default function WeekPage({ params }) {
  const week = getWeekPlan(params.id);
  if (!week) return notFound();

  return (
    <div>
      <Link href="/" className="inline-block mb-4 underline text-accentDark font-medium">
        &larr; Back to all weeks
      </Link>

      <h1 className="text-2xl font-bold mb-1">{week.title}</h1>
      {week.notes && <p className="text-gray-700 mb-6">{week.notes}</p>}

      <div className="space-y-10">
        {week.days.map((day) => (
          <section key={day.day}>
            <h2 className="text-xl font-bold mb-3 border-b-2 border-ink pb-1">Day {day.day}</h2>
            <div className="space-y-3">
              {day.meals.map((meal, idx) => (
                <MealRow key={idx} meal={meal} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
