"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TIME_FILTERS, recipeMatchesTimeFilter } from "../lib/timeGroups";

export default function RecipeSearch({ recipes }) {
  const [query, setQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      if (!recipeMatchesTimeFilter(r, timeFilter)) return false;
      if (!q) return true;
      const haystack = [r.name, r.category, ...(r.tags || [])].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, timeFilter, recipes]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="w-full mb-3 px-4 py-3 rounded-2xl bg-card shadow-card text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <div className="flex gap-2 overflow-x-auto pb-1 mb-3 -mx-1 px-1">
        {TIME_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setTimeFilter(f.key)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-bold text-xs whitespace-nowrap transition-colors ${
              timeFilter === f.key
                ? "bg-accent text-white shadow-card"
                : "bg-card text-gray-600 shadow-card"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-500 mb-3">
        {filtered.length} recipe{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="space-y-2.5">
        {filtered.map((r) => (
          <Link
            key={r.id}
            href={`/recipe/${r.id}`}
            className="block rounded-2xl p-3.5 bg-card shadow-card active:shadow-cardHover"
          >
            <p className="text-base font-bold text-ink">{r.name}</p>
            <p className="text-xs text-gray-500 capitalize mt-0.5">{r.category}</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-8">No recipes match your search.</p>
        )}
      </div>
    </div>
  );
}
