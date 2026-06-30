"use client";

import { useState } from "react";
import MealRow from "./MealRow";

export default function WeekDayView({ days }) {
  const [activeDay, setActiveDay] = useState(days[0]?.day ?? 1);
  const current = days.find((d) => d.day === activeDay) || days[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-1 mb-4 -mx-1 px-1">
        {days.map((d) => (
          <button
            key={d.day}
            onClick={() => setActiveDay(d.day)}
            className={`shrink-0 px-4 py-2 rounded-full border-2 font-bold text-sm ${
              d.day === activeDay
                ? "bg-accent text-white border-accentDark"
                : "bg-white text-ink border-ink"
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