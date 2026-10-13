# Ergebnisse

Dies ist deine Abgabe. Trage die Antworten des Modells woertlich ein und
halte die Abweichungen fest.

## Setup

- Modell / Zugang: <!-- TODO: welches Modell, welche Oberflaeche -->
- Getestete Funktion: `parseDiscountCode` (oder eigene: <!-- TODO -->)
- Frage (wortgleich in allen Durchgaengen): siehe `prompts/question.txt`
- Erwartete korrekte Antwort (aus dem Code abgeleitet): <!-- TODO -->

## Schritt 1 – Baseline mit knappem Kontext

Nur Funktion und Frage, sonst nichts. Neue, leere Konversation.

**Antwort des Modells (woertlich):**

```
TODO
```

## Schritt 2 – Fenster mit Rauschen gefuellt

Funktion und Frage plus Fuellmaterial. Neue, leere Konversation.

**Antwort des Modells (woertlich):**

```
TODO
```

**Abweichung von der Baseline** (z. B. falsche Zeile benannt, falscher
Rueckgabewert, Vermischung mit dem Fremdmaterial):

- TODO

## Schritt 3 – Position der Anweisung variiert

Derselbe vollgestopfte Kontext, Kern an drei Positionen. Je eine neue,
leere Konversation.

| Position | Antwort (Kurzfassung) | Korrekt? | Auffaelligkeit |
| --- | --- | --- | --- |
| Anfang (`start`) | TODO | TODO | TODO |
| Mitte (`middle`) | TODO | TODO | TODO |
| Ende (`end`) | TODO | TODO | TODO |

**Vergleich der drei Antworten untereinander und mit der Baseline:**

- TODO

## Schritt 4 – Notiz in eigenen Worten

Drei bis fuenf Saetze: Welche Art von Inhalt hat die Antworten am staerksten
verschlechtert (plausibles Fremdmaterial, wiederholte irrelevante Anweisung
oder die Position der Frage im Fenster)? Was bedeutet das fuer den Umgang mit
langen Agent-Sessions?

TODO
