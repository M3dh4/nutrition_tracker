# 🌿 Nutrition Tracker

A simple, mobile-friendly nutrition tracker built for my mom to make an 11-week meal plan easier to follow while managing diabetes and high blood pressure.

🌐 **Live Demo:** https://nutrition-tracker-eight-sandy.vercel.app/

💻 **Source Code:** https://github.com/M3dh4/nutrition_tracker

---

## Why this exists

She already had a structured nutrition program consisting of weekly meal plans, recipes, hydration schedules, and dietary guidance, but it was spread across PDFs and screenshots from a meal planner.

I converted the entire program into a normalized JSON dataset and built this lightweight web application so everything lives in one clean, easy-to-navigate place.

---

## Features

- **Week-by-week meal planner** — browse every week and view each day's complete meal schedule.
- **Interactive recipe library** — every meal links directly to its recipe with ingredients, instructions, nutrition, and helpful notes.
- **Recipe search** — quickly search recipes by name from one place.
- **Checklist & Help page** — hydration reminders, nutrition guidance, foods to avoid, and daily recommendations.
- **Mobile-friendly interface** — designed for quick access with simple navigation and large touch targets.

---

## Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Static JSON dataset
- Vercel

---

## Architecture

The original nutrition documents were converted into normalized JSON datasets containing meal plans, recipes, nutritional guidance, hydration recommendations, and foods to avoid.

The application reads these files directly at build time without requiring a backend or database, making it lightweight, fast, and easy to maintain. Updating the nutrition program only requires editing the JSON files.

---

## Pages

| Route | Description |
|--------|-------------|
| `/` | Home page with all available weeks, recipe library, and checklist links |
| `/week/[id]` | Complete meal plan for the selected week |
| `/recipe/[id]` | Recipe details including ingredients, preparation, nutrition, and tips |
| `/recipes` | Searchable recipe library |
| `/checklist` | Nutrition guidance, hydration, lifestyle recommendations, and foods to avoid |

---

## Project Structure

```text
data/
├── recipes.json
├── meal_plans.json
├── nutrition_guidelines.json
├── nutrition_tips.json
├── hydration.json
├── foods_to_avoid.json
└── lifestyle.json

app/
├── page.js
├── week/[id]/page.js
├── recipe/[id]/page.js
├── recipes/page.js
└── checklist/page.js

components/
lib/
public/
```

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Deployment

The project is deployed on Vercel.

Every push to the `main` branch automatically triggers a new deployment.

---

## Updating the Nutrition Plan

The application is entirely data-driven.

Updating the nutrition plan only requires editing the JSON files inside the `data/` directory.

- `meal_plans.json` — weekly meal schedules
- `recipes.json` — recipe information
- `nutrition_guidelines.json` — dietary guidance
- `nutrition_tips.json` — helpful nutrition tips
- `hydration.json` — hydration recommendations
- `foods_to_avoid.json` — foods to avoid
- `lifestyle.json` — lifestyle recommendations

No application code needs to be modified.

---

## Future Improvements

- User authentication
- Progress tracking
- Grocery list generation
- Nutrition analytics
- Backend database support

---

> **Disclaimer:** This application is intended to make an existing nutrition program easier to follow and does not replace professional medical advice from a doctor or registered dietitian.