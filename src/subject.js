// Testobjekt der Uebung.
// Ueber diese Funktion stellst du die Frage aus prompts/question.txt.
// Du darfst sie durch eine eigene, vergleichbare Funktion ersetzen,
// solange die zugehoerige Frage eine eindeutige, aus dem Code ableitbare
// Antwort hat.

export function parseDiscountCode(code) {
  if (!code) return { valid: false, percent: 0 };
  const trimmed = code.trim().toUpperCase();
  if (trimmed.length < 4) return { valid: false, percent: 0 };
  if (trimmed.startsWith("VIP")) return { valid: true, percent: 20 };
  if (trimmed.startsWith("SALE")) return { valid: true, percent: 10 };
  return { valid: false, percent: 0 };
}
