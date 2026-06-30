"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function RecipeSearch({ recipes }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipes;
    return recipes.filter((r) => {
      const haystack = [r.name, r.category, ...(r.tags || [])].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, recipes]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="w-full mb-4 px-4 py-3 rounded-2xl bg-card shadow-card text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
      />

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
