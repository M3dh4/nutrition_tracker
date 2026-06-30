"use client";

import { useEffect, useState } from "react";
import MealRow from "./MealRow";

export default function WeekDayView({ days }) {
  const [activeDay, setActiveDay] = useState(days[0]?.day ?? 1);

  // On mount, restore the day from the URL (?day=3) so that navigating to a
  // recipe and back returns to the same day instead of resetting to Day 1.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dayParam = Number(params.get("day"));
    if (dayParam && days.some((d) => d.day === dayParam)) {
      setActiveDay(dayParam);
    }
  }, [days]);

  function selectDay(dayNum) {
    setActiveDay(dayNum);
    const url = new URL(window.location.href);
    url.searchParams.set("day", String(dayNum));
    window.history.replaceState({}, "", url);
  }

  const current = days.find((d) => d.day === activeDay) || days[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-1 mb-4 -mx-1 px-1">
        {days.map((d) => (
          <button
            key={d.day}
            onClick={() => selectDay(d.day)}
            className={`shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-colors ${
              d.day === activeDay
                ? "bg-accent text-white shadow-card"
                : "bg-card text-gray-600 shadow-card"
            }`}
          >
            Day {d.day}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {current.meals.map((meal, idx) => (
          <MealRow key={idx} meal={meal} />
        ))}
      </div>
    </div>
  );
}
