import { dailyChecklist, foodsToAvoid, bpDiabetesGuidance } from "../../data/checklist";

export const metadata = {
  title: "Checklist & Help — Nutrition Tracker",
};

export default function ChecklistPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">General Nutritional Checklist &amp; Help</h1>
      <p className="text-gray-700 mb-8">
        Daily reminders for managing Diabetes and High Blood Pressure alongside your meal plan.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3 border-b-2 border-ink pb-1">Daily Checklist</h2>
        <ul className="space-y-3">
          {dailyChecklist.map((item) => (
            <li key={item.id} className="border-2 border-ink rounded-lg p-4">
              <p className="font-bold text-base">{item.label}</p>
              <p className="text-gray-700 mt-1">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3 border-b-2 border-ink pb-1">Diabetes &amp; Blood Pressure Guidance</h2>
        <div className="space-y-4">
          <GuidanceBlock title="Sodium limits" text={bpDiabetesGuidance.sodium} />
          <GuidanceBlock title="Blood sugar / glycemic guidance" text={bpDiabetesGuidance.glycemic} />
          <GuidanceBlock title="Monitoring" text={bpDiabetesGuidance.monitoring} />
          <GuidanceBlock title="When to seek urgent care" text={bpDiabetesGuidance.emergency} warn />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3 border-b-2 border-ink pb-1">Foods to Avoid</h2>
        <ul className="space-y-3">
          {foodsToAvoid.map((item, idx) => (
            <li key={idx} className="border-2 border-warn bg-warnBg rounded-lg p-4">
              <p className="font-bold text-base text-warn">{item.food}</p>
              <p className="text-gray-800 mt-1">{item.reason}</p>
              <p className="text-sm text-gray-600 mt-1">{item.conditions}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function GuidanceBlock({ title, text, warn }) {
  return (
    <div className={`border-2 rounded-lg p-4 ${warn ? "border-warn bg-warnBg" : "border-accent bg-okBg"}`}>
      <p className={`font-bold mb-1 ${warn ? "text-warn" : "text-accentDark"}`}>{title}</p>
      <p className="text-base text-gray-800">{text}</p>
    </div>
  );
}
