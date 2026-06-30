// lib/text.js
// Strips internal data-conversion notes (e.g. vegetarian substitution callouts)
// that shouldn't be shown to the end user.
export function cleanNote(note) {
  if (!note) return null;
  if (/VEGETARIAN SUBSTITUTION|original recipe|original_recipe/i.test(note)) {
    return null;
  }
  return note;
}