// lib/labels.js
export const MEAL_TYPE_LABELS = {
  early_morning: "Early Morning",
  breakfast: "Breakfast",
  mid_morning: "Mid-Morning",
  pre_lunch: "Pre-Lunch",
  lunch: "Lunch",
  mid_evening: "Mid-Evening",
  pre_dinner: "Pre-Dinner",
  dinner: "Dinner",
  bedtime: "Bedtime",
};

export function mealTypeLabel(type) {
  return MEAL_TYPE_LABELS[type] || type;
}

// Color-coded badges per meal slot, roughly following the arc of the day
export const MEAL_TYPE_COLORS = {
  early_morning: "bg-amber-50 text-amber-800",
  breakfast: "bg-orange-50 text-orange-800",
  mid_morning: "bg-lime-50 text-lime-800",
  pre_lunch: "bg-emerald-50 text-emerald-800",
  lunch: "bg-teal-50 text-teal-800",
  mid_evening: "bg-sky-50 text-sky-800",
  pre_dinner: "bg-indigo-50 text-indigo-800",
  dinner: "bg-violet-50 text-violet-800",
  bedtime: "bg-slate-100 text-slate-700",
};

export function mealTypeColor(type) {
  return MEAL_TYPE_COLORS[type] || "bg-gray-100 text-gray-700";
}
