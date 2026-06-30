# Diabetes & BP Nutrition Tracker

A simple, high-contrast 12-week meal/nutrition tracker built with Next.js (App Router) + Tailwind CSS, ready to deploy on Vercel.

## Pages

- `/` — Home: 12 week cards + link to the Checklist & Help page.
- `/week/[id]` — Weekly view: every day's meals listed by time slot, each clickable.
- `/recipe/[id]` — Recipe detail: ingredients, steps, nutrition, and Diabetes/BP-specific notes.
- `/checklist` — Static daily checklist, sodium/glycemic guidance, and foods to avoid.

## Swapping in your real data

All mock data lives in `/data` and mirrors the shape of your real JSON files:

- `data/recipes.js` → replace the `recipes` array with your `recipes.json`. Optionally add a `diabetes_bp_notes` string field per recipe (the UI shows it in a highlighted box if present) and a `sodium_mg` field inside `nutrition`.
- `data/mealPlans.js` → replace the `mealPlans` array with your `meal_plans.json` (12 week objects, each with `days[].meals[]`).
- `data/checklist.js` → replace `foodsToAvoid` with your `foods_to_avoid.json`. `dailyChecklist` and `bpDiabetesGuidance` are app-specific text blocks for the Help page — edit directly.

Since pages import directly from `/data`, you can literally overwrite these files with `export const recipes = [...your real JSON...]` (or `import recipesJson from './recipes.json'; export const recipes = recipesJson;`) and everything else keeps working unchanged.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to a GitHub repo and import into Vercel — no extra configuration needed (standard Next.js app).
