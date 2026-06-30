import { dailyChecklist, foodsToAvoid, bpDiabetesGuidance } from "../../data/checklist";

export const metadata = {
  title: "Checklist & Help — Nutrition Tracker",
};

export default function ChecklistPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-1">Checklist &amp; Help</h1>
      <p className="text-sm text-gray-500 mb-6">
        Daily reminders for managing Diabetes and High Blood Pressure.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 text-accentDark">Daily Checklist</h2>
        <ul className="space-y-2.5">
          {dailyChecklist.map((item) => (
            <li key={item.id} className="bg-card shadow-card rounded-2xl p-4">
              <p className="font-bold text-base text-ink">{item.label}</p>
              <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 text-accentDark">Diabetes &amp; Blood Pressure Guidance</h2>
        <div className="space-y-3">
          <GuidanceBlock title="Sodium limits" text={bpDiabetesGuidance.sodium} />
          <GuidanceBlock title="Blood sugar / glycemic guidance" text={bpDiabetesGuidance.glycemic} />
          <GuidanceBlock title="Monitoring" text={bpDiabetesGuidance.monitoring} />
          <GuidanceBlock title="When to seek urgent care" text={bpDiabetesGuidance.emergency} warn />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3 text-accentDark">Foods to Avoid</h2>
        <ul className="space-y-2.5">
          {foodsToAvoid.map((item, idx) => (
            <li key={idx} className="bg-warnSoft rounded-2xl p-4">
              <p className="font-bold text-base text-warn">{item.food}</p>
              <p className="text-gray-700 text-sm mt-1">{item.reason}</p>
              <p className="text-xs text-gray-500 mt-1">{item.conditions}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function GuidanceBlock({ title, text, warn }) {
  return (
    <div className={`rounded-2xl p-4 ${warn ? "bg-warnSoft" : "bg-accentSoft"}`}>
      <p className={`font-bold mb-1 ${warn ? "text-warn" : "text-accentDark"}`}>{title}</p>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}
