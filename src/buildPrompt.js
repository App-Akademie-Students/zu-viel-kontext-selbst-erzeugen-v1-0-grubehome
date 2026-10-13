// Baut die Prompts fuer Schritt 2 (Rauschen) und Schritt 3 (Position).
//
// Aufruf:
//   npm run build-prompt -- start
//   npm run build-prompt -- middle
//   npm run build-prompt -- end
//
// Das Skript gibt den fertigen Prompt auf der Konsole aus. Kopiere ihn in
// eine neue, leere Konversation und stelle dort die Frage wortgleich.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const subject = readFileSync(join(__dirname, "subject.js"), "utf8");
const question = readFileSync(join(__dirname, "..", "prompts", "question.txt"), "utf8").trim();

// Der relevante Kern: Funktion und Frage, die in jedem Durchgang gleich bleiben.
const core = `${subject}\n${question}`;

// TODO (Schritt 2): Trage hier dein Fuellmaterial ein.
// Mehrere hundert bis wenige tausend Woerter, die mit der Frage nichts oder
// nur am Rand zu tun haben, zum Beispiel:
//   - lange Auszuege aus einer anderen, unbeteiligten Codedatei
//   - ein veraltetes Zwischenergebnis einer ganz anderen Aufgabe
//   - eine mehrfach wiederholte, fuer diese Frage irrelevante Anweisung
// Je plausibler und umfangreicher das Rauschen, desto deutlicher der Effekt.
const filler = ``;

// TODO (Schritt 3): Setzt Kern und Fuellmaterial je nach Position zusammen.
// Der Kern (core) soll bei "start" vor dem Fuellmaterial stehen, bei "middle"
// darin eingebettet, bei "end" danach. Ergaenze die fehlenden Faelle.
function buildPrompt(position) {
  switch (position) {
    case "start":
      // TODO: Kern zuerst, dann Fuellmaterial.
      return "";
    case "middle":
      // TODO: Fuellmaterial, dann Kern, dann weiteres Fuellmaterial.
      return "";
    case "end":
      // TODO: Fuellmaterial zuerst, dann Kern.
      return "";
    default:
      throw new Error(`Unbekannte Position: ${position}. Erlaubt: start | middle | end`);
  }
}

const position = process.argv[2] ?? "start";
console.log(buildPrompt(position));
