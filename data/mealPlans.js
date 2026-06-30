import mealPlansJson from "./meal_plans.json";
export const mealPlans = mealPlansJson;
export function getWeekPlan(weekNumber) {
  return mealPlans.find((w) => w.week === Number(weekNumber)) || null;
}
