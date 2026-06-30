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

// All-green badges, varying only in shade/intensity through the arc of the day
export const MEAL_TYPE_COLORS = {
  early_morning: "bg-sage/30 text-sageDark",
  breakfast: "bg-sage/50 text-sageDark",
  mid_morning: "bg-moss/30 text-mossDark",
  pre_lunch: "bg-moss/40 text-mossDark",
  lunch: "bg-moss/60 text-mossDark",
  mid_evening: "bg-accentSoft text-accentDark",
  pre_dinner: "bg-accent/15 text-accentDark",
  dinner: "bg-accent/25 text-accentDark",
  bedtime: "bg-gray-100 text-gray-600",
};

export function mealTypeColor(type) {
  return MEAL_TYPE_COLORS[type] || "bg-gray-100 text-gray-600";
}
