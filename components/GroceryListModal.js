"use client";

import { useState } from "react";
import { buildGroceryListForWeek, groceryListToText } from "../lib/groceryList";

export default function GroceryListModal({ week }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const groups = buildGroceryListForWeek(week);

  function handleCopy() {
    const text = groceryListToText(week, groups);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full mb-4 px-4 py-3 rounded-2xl bg-accentSoft text-accentDark font-bold text-sm shadow-card flex items-center justify-center gap-2"
      >
        🛒 Mom&apos;s Weekly Grocery Prep List
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 print:bg-white print:static">
          <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 print:max-h-none print:rounded-none print:overflow-visible">
            <div className="flex items-center justify-between mb-1 print:hidden">
              <h2 className="text-lg font-bold text-ink">Grocery Prep List</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-card shadow-card flex items-center justify-center text-gray-500"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4 print:mb-2">
              Week {week.week} — everything needed for this week&apos;s plan, grouped for easy shopping.
            </p>

            {groups.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-8">
                No recipe ingredients found for this week.
              </p>
            )}

            <div className="space-y-5">
              {groups.map((group) => (
                <section key={group.key}>
                  <h3 className="text-sm font-bold text-accentDark uppercase tracking-wide mb-2">
                    {group.label}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-2 text-sm text-gray-700 bg-card shadow-card rounded-xl px-3 py-2 print:shadow-none print:bg-white print:border print:border-gray-200"
                      >
                        <span className="mt-0.5">☐</span>
                        <span>
                          <span className="font-semibold text-ink">{item.name}</span>
                          {item.amounts.length > 0 && (
                            <span className="text-gray-500"> — {item.amounts.join(", ")}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {groups.length > 0 && (
              <div className="flex gap-2 mt-6 print:hidden">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-sm shadow-card"
                >
                  {copied ? "Copied!" : "Copy list"}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-card text-gray-700 font-bold text-sm shadow-card"
                >
                  Print
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
