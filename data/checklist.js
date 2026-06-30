import foodsToAvoidJson from "./foods_to_avoid.json";
export const foodsToAvoid = foodsToAvoidJson;

export const dailyChecklist = [
  { id: "hydration", label: "Drink at least 3 litres of water across the day", detail: "1 glass on rising, 1 before every meal, 1 before bed, rest as convenient." },
  { id: "bg-check", label: "Check blood glucose at your prescribed times", detail: "Typical pattern: fasting (on waking) and 2 hours after lunch/dinner. Follow your doctor's exact schedule." },
  { id: "bp-check", label: "Check blood pressure at a consistent time daily", detail: "Sit quietly for 5 minutes before measuring; same arm, same time each day." },
  { id: "sodium", label: "Keep sodium low all day", detail: "Avoid added salt at the table, pickles, papad, sauces, and packaged snacks." },
  { id: "meal-timing", label: "Eat on schedule, never skip meals", detail: "Breakfast by 10am, lunch 12:30-2:30pm, dinner 7-9pm (never later than 10pm)." },
  { id: "lunch-biggest", label: "Make lunch your largest meal, dinner light", detail: "Digestion is strongest at midday; keep dinner to thin soups/light salads where possible." },
  { id: "no-snacking", label: "Avoid snacking between meals", detail: "Let hunger build naturally between scheduled meals/snacks." },
  { id: "walk", label: "Take a 40-45 minute brisk walk", detail: "Daily walking supports both blood sugar control and blood pressure." },
  { id: "medication", label: "Take medications as prescribed, at the same times daily", detail: "Do not skip or double doses; consult your doctor before changing anything." },
  { id: "salad-first", label: "Eat a small plate of salad before your main meal", detail: "Helps slow the glycemic impact of the rest of the meal." },
];

export const bpDiabetesGuidance = {
  sodium: "Aim for under 1,500-2,300mg sodium per day (confirm your personal target with your doctor). Avoid table salt, pickles, papad, sauces, and packaged/processed foods.",
  glycemic: "Favor low-glycemic-index foods: whole grains (ragi, millets, brown rice), legumes, and non-starchy vegetables. Avoid potato, white rice, maida, sugar, and honey.",
  monitoring: "Track blood glucose and blood pressure at the same times each day so trends are easy to compare. Bring your log to every doctor visit.",
  emergency: "Seek urgent medical care for symptoms like chest pain, severe headache, blurred vision, confusion, very high or very low blood sugar readings, or BP readings far outside your normal range.",
};
