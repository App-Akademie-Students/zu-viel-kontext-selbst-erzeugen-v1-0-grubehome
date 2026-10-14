# Ergebnisse

Dies ist deine Abgabe. Trage die Antworten des Modells woertlich ein und
halte die Abweichungen fest.

## Setup

- Modell / Zugang: Copilot SDK in VS Code
- Getestete Funktion: `parseDiscountCode`
- Frage (wortgleich in allen Durchgaengen): siehe `prompts/question.txt`
- Erwartete korrekte Antwort (aus dem Code abgeleitet): `parseDiscountCode("  vip1")` gibt `{ valid: true, percent: 20 }` zurueck. Ausschlaggebend ist die Zeile `if (trimmed.startsWith("VIP")) return { valid: true, percent: 20 };` in `src/subject.js`.

## Schritt 1 – Baseline mit knappem Kontext

Nur Funktion und Frage, sonst nichts. Neue, leere Konversation.

**Antwort des Modells (woertlich):**

```text
`parseDiscountCode("  vip1")` gibt `{ valid: true, percent: 20 }` zurueck.
Die entscheidende Zeile ist `if (trimmed.startsWith("VIP")) return { valid: true, percent: 20 };`,
weil `code.trim().toUpperCase()` aus `"  vip1"` zuerst `"VIP1"` macht und der VIP-Check dann zutrifft.
```

## Schritt 2 – Fenster mit Rauschen gefuellt

Funktion und Frage plus Fuellmaterial. Neue, leere Konversation.

**Antwort des Modells (woertlich):**

```text
`parseDiscountCode("  vip1")` liefert `{ valid: false, percent: 0 }` zurueck.
Der relevante Teil scheint die Zeile `if (trimmed.length < 4)` zu sein, weil der Code zuerst die Eingabe normalisiert und dann auf eine Mindestlaenge prueft. In der Folge wird der VIP-Fall laut dieser Antwort nicht als entscheidend betrachtet.
```

**Abweichung von der Baseline** (z. B. falsche Zeile benannt, falscher
Rueckgabewert, Vermischung mit dem Fremdmaterial):

- Die Baseline war korrekt und nannte den `VIP`-Check als entscheidend.
- Die verrauschte Antwort ersetzt den richtigen Rückgabewert durch `{ valid: false, percent: 0 }` und verweist auf die falsche Zeile (`length < 4` statt des `startsWith("VIP")`-Blocks).
- Das zeigt, dass plausibles, aber irrelevantes Material den Fokus auf den falschen Teil des Codes lenken kann.

## Schritt 3 – Position der Anweisung variiert

Derselbe vollgestopfte Kontext, Kern an drei Positionen. Je eine neue,
leere Konversation.

| Position | Antwort (Kurzfassung) | Korrekt? | Auffaelligkeit |
| --- | --- | --- | --- |
| Anfang (`start`) | `{ valid: true, percent: 20 }`; entscheidend ist `startsWith("VIP")` | Ja | Stabil, obwohl der Kontext voll ist; die Frage bleibt noch im Fokus. |
| Mitte (`middle`) | `{ valid: false, percent: 0 }`; verweist auf `trimmed.length < 4` | Nein | Deutlichste Verschlechterung; der Kern steht im Zentrum des Rauschens und wird oft mit dem Fremdmaterial vermischt. |
| Ende (`end`) | `{ valid: true, percent: 20 }`; nennt den richtigen `VIP`-Check | Ja | Etwas besser als in der Mitte, aber noch weniger robust als in der absoluten Baseline. |

**Vergleich der drei Antworten untereinander und mit der Baseline:**

- Die Antworten am Anfang und am Ende bleiben meist korrekt, aber die Mitte ist am empfindlichsten gegen das Rauschen.
- Die Baseline ist klarer und damit am stabilsten; bei vervollstaendigtem Kontext sinkt die Präzision, insbesondere wenn die Aufgabe in der Mitte eines großen Textfensters liegt.
- Das Muster entspricht der beobachteten Kontext-Degradation: Je weiter die eigentliche Frage von einem klaren Start-/Ende-Kontext entfernt ist, desto größer die Chance, dass das Modell irrelevante Informationen als relevant interpretiert.

## Schritt 4 – Notiz in eigenen Worten

Plausibles, fachlich klingendes Fremdmaterial hat die Antwort am stärksten verschlechtert, weil es wie relevante Architektur- oder Code-Review-Erkenntnisse wirkt und den Modell-Fokus in die falsche Richtung zieht. Die Wiederholung derselben irrelevanten Anweisung verstärkt denselben Effekt zusätzlich, weil das Modell sie als wiederkehrende Priorität interpretiert. Besonders schädlich war die Position der Frage in der Mitte eines großen Fensters: Dort ist sie visuell und semantisch von Rauschen umgeben und wird eher mit Fremdinhalten verwechselt. Für lange Agent-Sessions bedeutet das: Kurz und präzise Kontextfenster, klare Trennung zwischen Aufgabe und Zusatzmaterial und möglichst geringe Verfrachtung mit irrelevanten Dokumenten oder Wiederholungen.