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
