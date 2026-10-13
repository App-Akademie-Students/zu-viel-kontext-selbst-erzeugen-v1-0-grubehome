# Zu viel Kontext selbst erzeugen

Willkommen. In dieser Übung löst du die Kontext-Degradation, über die du gelesen hast, selbst aus und dokumentierst sie. Der Kern ist kein Programmierproblem, sondern ein Experiment: Du stellst einem Sprachmodell zweimal exakt dieselbe präzise Frage, einmal mit knappem Kontext, einmal mit demselben Kontext plus großen Mengen irrelevanten Materials. Am Ende steht eine belegte Gegenüberstellung von guter und degradierter Antwort und deine eigene Notiz darüber, welches Füllmaterial am stärksten geschadet hat.

Das Gerüst hilft dir nur beim Zusammenbauen und Dokumentieren. Die Prompts schickst du selbst an das Modell, das du sonst zum Entwickeln nutzt.

## Testobjekt und Frage

Als Frage mit eindeutig korrekter, aus dem Code ableitbarer Antwort dient standardmäßig `parseDiscountCode` in `src/subject.js`:

> Was gibt `parseDiscountCode("  vip1")` zurück, und welche Zeile ist dafür ausschlaggebend?

Du kannst diese Funktion und Frage durch eine eigene, vergleichbare ersetzen. Wichtig ist: eine Sachfrage, keine Meinungsfrage, keine offene Diskussion.

## Schritte

Starte für **jeden** Durchgang eine neue, leere Konversation, damit sich kein Verlauf einmischt. Stell in jedem Durchgang die Frage **wortgleich**.

1. **Baseline mit knappem Kontext.** Gib dem Modell nur die Funktion und die Frage, sonst nichts. Notiere die Antwort wörtlich in `runs/results.md`. Sie ist dein Vergleichspunkt.
2. **Das Fenster mit Rauschen füllen.** Ergänze die Funktion und Frage um mehrere hundert bis wenige tausend Wörter Material, das mit der Frage nichts oder nur am Rand zu tun hat: lange Auszüge aus einer unbeteiligten Codedatei, ein veraltetes Zwischenergebnis einer anderen Aufgabe, eine mehrfach wiederholte irrelevante Anweisung. Schick das als neue Konversation, stell dieselbe Frage und halte fest, worin die Antwort von der Baseline abweicht.
3. **Position der Anweisung variieren.** Erzeuge aus demselben vollgestopften Kontext drei Varianten: Funktion und Frage einmal ganz am Anfang, einmal in der Mitte, einmal ganz am Ende. Stell in drei getrennten Konversationen dieselbe Frage und vergleiche die drei Antworten miteinander und mit der Baseline.
4. **Notiz in eigenen Worten.** Halte in drei bis fünf Sätzen fest, welche Art von Inhalt deine Antworten am stärksten verschlechtert hat und was das für lange Agent-Sessions bedeutet.

## Einrichten und starten

Voraussetzung ist Node.js (Version 18 oder neuer).

```bash
npm install
```

Das mitgelieferte Skript baut die Prompts für die Schritte 2 und 3 zusammen, damit du sie nur noch kopieren musst. Fülle vorher das Rauschen in `src/buildPrompt.js` aus.

```bash
# Prompt fuer eine Position ausgeben: start | middle | end
npm run build-prompt -- start
```

Deine Ergebnisse trägst du von Hand in `runs/results.md` ein. Diese Datei ist die eigentliche Abgabe.

## Was gehoert wohin

- `src/subject.js` – die Funktion, über die die Frage gestellt wird.
- `prompts/question.txt` – die wortgleiche Frage.
- `src/buildPrompt.js` – setzt Funktion, Frage und Rauschen zu einem Prompt zusammen; hier trägst du das Füllmaterial ein.
- `runs/results.md` – deine Dokumentation der vier Schritte.
