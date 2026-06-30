import Link from "next/link";
import { notFound } from "next/navigation";
import { mealPlans, getWeekPlan } from "../../../data/mealPlans";
import WeekDayView from "../../../components/WeekDayView";
import BackButton from "../../../components/BackButton";

export function generateStaticParams() {
  return mealPlans.map((w) => ({ id: String(w.week) }));
}

export default function WeekPage({ params }) {
  const week = getWeekPlan(params.id);
  if (!week) return notFound();

  const weekNum = Number(params.id);
  const allWeeks = mealPlans.filter((w) => w.week !== 12).map((w) => w.week);
  const prevWeek = allWeeks.includes(weekNum - 1) ? weekNum - 1 : null;
  const nextWeek = allWeeks.includes(weekNum + 1) ? weekNum + 1 : null;

  return (
    <div>
      <BackButton label="All weeks" fallbackHref="/" />

      <div className="flex items-center justify-between mb-1">
        {prevWeek ? (
          <Link
            href={`/week/${prevWeek}`}
            className="text-sm font-bold rounded-full w-9 h-9 flex items-center justify-center bg-card shadow-card text-accentDark"
          >
            &larr;
          </Link>
        ) : (
          <span className="w-9 h-9" />
        )}
        <h1 className="text-lg font-bold">Week {weekNum}</h1>
        {nextWeek ? (
          <Link
            href={`/week/${nextWeek}`}
            className="text-sm font-bold rounded-full w-9 h-9 flex items-center justify-center bg-card shadow-card text-accentDark"
          >
            &rarr;
          </Link>
        ) : (
          <span className="w-9 h-9" />
        )}
      </div>
      {week.notes && <p className="text-xs text-gray-500 mb-4 text-center">{week.notes}</p>}

      <WeekDayView days={week.days} />
    </div>
  );
}
