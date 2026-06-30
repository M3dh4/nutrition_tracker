"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back", fallbackHref = "/" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
      className="inline-flex items-center gap-1 mb-3 text-sm font-semibold text-teal-700"
    >
      <span aria-hidden="true">&larr;</span> {label}
    </button>
  );
}
