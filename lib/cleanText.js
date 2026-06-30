// lib/cleanText.js
// Strips internal data-conversion notes (e.g. "Vegetarian substitute for the
// egg omelette..." / "Substituted from the original egg-based recipe...")
// that describe how the dataset was converted from a non-veg source. Not
// useful to the end user, who just wants the dish as it stands today.
const NOISE_PATTERNS = [/vegetarian substitut/i, /original (egg|recipe)/i, /per lacto-vegetarian conversion/i];

function isNoise(text) {
  return NOISE_PATTERNS.some((p) => p.test(text));
}

export function cleanNote(text) {
  if (!text) return null;
  return isNoise(text) ? null : text;
}

export function cleanDescription(text) {
  return cleanNote(text);
}

export function cleanTips(tips) {
  if (!tips) return [];
  return tips.filter((t) => !isNoise(t));
}
