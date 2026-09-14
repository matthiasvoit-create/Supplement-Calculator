# Supplement-Analyse

Ein Rechner, der Beschwerden, Laborwerte und persönlichen Kontext zu einer nach Relevanz und Studienlage sortierten Nährstoffempfehlung verarbeitet. Eine einzige HTML-Datei, keine Abhängigkeiten, kein Build, kein Backend.

## Was ihn von einem Supplement-Quiz unterscheidet

**Evidenz ist ein Rankingfaktor, kein Etikett.** Jeder Nährstoff trägt einen Evidenzgrad (A, B oder C), der in den Score einfließt. Ein Mittel mit schwacher Datenlage wird abgewertet, auch wenn es perfekt zu den ausgewählten Symptomen passt. Deshalb landet Biotin bei Haarausfall weit unten.

**Kontext sperrt aktiv.** Angaben wie Lebererkrankung, Nierenerkrankung, Schwangerschaft oder Blutverdünner entfernen betroffene Empfehlungen aus dem Ranking und zeigen sie separat mit Begründung an — statt sie stillschweigend wegzulassen.

**Der Tagesplan folgt der Aufnahme.** Eisen und Zink blockieren sich gegenseitig, fettlösliche Vitamine brauchen eine Mahlzeit, B-Vitamine gehören nicht in den Abend. Die Zuordnung zu fünf Einnahmezeitpunkten passiert automatisch.

**Jede Auswertung endet mit Blutwerten.** Statt nur zu empfehlen, nennt das Ergebnis die Laborwerte, die vor einer Einnahme sinnvoll sind — inklusive der Fälle, in denen der gängige Test der falsche ist (Holo-Transcobalamin statt Serum-B12, Magnesium im Vollblut statt im Serum).

## Aufbau

Eine Datei, `index.html`, mit drei Teilen:

| Abschnitt | Inhalt |
|---|---|
| `SYMPTOMS`, `LABS`, `CONTEXT` | Die Auswahlmöglichkeiten der drei Eingabeschritte |
| `SUPPS` | Die Nährstoffdatenbank mit Wirkung, Studienlage, Dosis, Timing, Wechselwirkungen und Trigger-Gewichten |
| `BLOCKS`, `CTX_NOTE`, `LAB_TIPS`, `REDFLAGS` | Sperrregeln, kontextabhängige Warnungen, Laborempfehlungen |

### Scoring

```
score = Σ (Gewicht aller zutreffenden Trigger) × Evidenzmultiplikator
Evidenzmultiplikator:  A = 1,0   B = 0,86   C = 0,62
Relevanz = score / höchster score × 100
```

Ab Relevanz 55 zählt ein Nährstoff zum Kern-Stack, ab 30 erscheint er im Tagesplan, ab 18 im Ranking.

### Einen Nährstoff ergänzen

Ein Objekt an `SUPPS` anhängen. `trig` bildet die Verbindung zu den Eingaben ab — Schlüssel sind IDs aus `SYMPTOMS`, `LABS` oder `CONTEXT`, Werte sind Gewichte von etwa 2 (schwacher Bezug) bis 14 (direkter Labornachweis).

```js
{
  id:"beispiel", name:"Name", form:"Bevorzugte Form",
  evidenz:"B", slot:"abend",
  wirkung:"…", nachweis:"…", dosis:"…",
  timing:"…", dauer:"…", interakt:"…", achtung:"…",
  trig:{ kraempfe:8, l_magnesium:12 }
}
```

Mögliche `slot`-Werte: `nuechtern`, `fruehstueck`, `mittag`, `nachmittag`, `abend`.

## Lokal öffnen

`index.html` im Browser öffnen. Das ist alles.

## Als Website veröffentlichen

Repository-Einstellungen → Pages → Source auf `main` und `/ (root)` stellen. Die Seite ist danach unter `https://<benutzername>.github.io/<repo-name>/` erreichbar.

## Quellen der Bewertungen

Die Evidenzgrade stützen sich unter anderem auf die Vitamin-D-Leitlinie der Endocrine Society von 2024, die Sicherheitsbewertung des Bundesinstituts für Risikobewertung zu Ashwagandha und eine Meta-Analyse aus 34 Studien zum Zusammenhang von Omega-3-Dosis und Vorhofflimmern.

## Haftungsausschluss

Kein Medizinprodukt, keine Diagnose, kein Ersatz für ärztliche Beratung. Die Bewertungen beruhen auf allgemeinen Studienergebnissen, nicht auf einer individuellen Krankengeschichte. Besonders bei Eisen, Jod, Selen und Kalium kann eine Einnahme ohne vorherige Messung schaden.
