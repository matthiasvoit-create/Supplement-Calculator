# Kokoro Quest

Eine gamifizierte Self-Care-App gegen Angst und Panik. Tägliche kleine Übungen aus
Verhaltenstherapie, Körperarbeit und Achtsamkeit; der Fortschritt wird als Avatar-Entwicklung
im Anime-/Tokyo-Pop-Stil sichtbar — vom zitternden Reisklößchen bis zum Superhelden.

Eine einzige Datei: **`index.html`**. Doppelklick genügt. Kein Build, keine Abhängigkeiten,
keine Netzwerk-Requests, kein Tracking. Alle Daten bleiben im Browser (`localStorage`,
Schlüssel `kokoroquest.v1`), Export und Import als JSON-Datei.

## Sicherheitsleitplanken

Diese Punkte stehen über jedem Spielmechanismus:

- **Kein Therapieersatz.** Onboarding-Screen mit Disclaimer inklusive Hinweis, körperliche
  Symptome einmal ärztlich abklären zu lassen.
- **Kein Diagnose-Feature.** Selbsteinschätzungen (0–10) werden ausschließlich als persönlicher
  Verlauf dargestellt, nie als Bewertung oder Befund.
- **Krisenhilfe auf jedem Screen** (Fußzeile) und prominent im Notfallmodus, plus eigene
  Notfallkontakte. Die Liste steht als editierbares Objekt `KRISENKONTAKTE` oben in der Datei
  und trägt ein Stand-Datum (`KRISEN_STAND`) — vor Weitergabe prüfen.
- **Keine interozeptive Exposition.** Übungen, die Panik-Körpersymptome absichtlich provozieren,
  fehlen bewusst; die Begründung steht als Kommentar am Quest-Katalog und als Text im Onboarding.
- **Keine Bestrafung.** Kein Punktverlust, keine Schuld-Rhetorik. Ruhetag-Schilde fangen
  ausgelassene Tage ab, der Serien-Multiplikator ist bei 14 Tagen auf 1,5× gedeckelt, und nach
  einer Pause begrüßt ein eigener Screen die Rückkehr.
- **Akutmodus ohne Punkte.** Die Ruhe-Insel vergibt nichts — damit nie ein Anreiz entsteht,
  Angst zu provozieren. Nur das freiwillige Reflektieren danach zahlt auf Geist ein.

## Aufbau der Datei

| Abschnitt | Inhalt |
|---|---|
| `§A INHALTE` | Texte, Krisenkontakte, Attribute, Level, 54 Quests, 19 Wissenskarten, Coping-Sätze, 25 Achievements |
| `§B STATE` | Datenmodell, `localStorage`, `migrate()` |
| `§C LOGIK` | Tagesplan, Punkte, Serie mit Schilden, Level-Ups |
| `§D AVATAR` | Sieben Inline-SVG-Stufen, Symbole, Abzeichen |
| `§E OBERFLÄCHE` | Router und Screens |
| `§F RUHE-INSEL` | Notfallmodus |
| `§G INTERAKTION` | Atem-Engine, Timer, Formulare, Export/Import |

Alle Inhalte stehen als Konstanten-Objekte in `§A` und lassen sich ohne Logikwissen ändern.

## Fachliche Entscheidungen

| Übung | Grundlage |
|---|---|
| Ruhiger Atem (4 ein / 6 aus) | Kohärentes Atmen, ca. 6 Atemzüge/Min.; verlängerte Ausatmung aktiviert den Parasympathikus |
| Die lange Welle (4-7-8) | Atemtechnik mit betonter Ausatmung; Halten auf 7 Sek. begrenzt (nie über 10) |
| Muskelreise | Progressive Muskelentspannung nach Jacobson, 7 Gruppen |
| Warme Hände | Wärmeformel des Autogenen Trainings |
| Herzschlag-Quest | Bewegungstherapie bei Angststörungen; Neubewertung von Herzrasen im selbstgewählten Kontext |
| Schlafanker, Abendlicht, Koffein-Kompass | Schlafhygiene und Substanzeinflüsse als Angstverstärker |
| Gedanken-Detektiv | Gedankenprotokoll der KVT nach Beck |
| Katastrophen-Entzauberer | Dekatastrophisieren; vierte Frage zielt auf Bewältigungsvertrauen |
| Teufelskreis zeichnen | Teufelskreismodell der Panik (Margraf/Ehlers) |
| Angst-Tagebuch, Wissenskarten | Selbstbeobachtung und Psychoedukation als eigenständige Wirkfaktoren |
| Mut-Sätze | Coping-Karten; bewusst ohne Verneinungen |
| Sorgen-Termin | Worry postponement statt Gedankenunterdrückung |
| Körperreise, Anker-Meditation, achtsames Essen | MBSR nach Kabat-Zinn |
| Gedanken auf Blättern, „Ich habe den Gedanken, dass …“, Platz machen, Werte-Kompass | Defusion, Bereitwilligkeit und Werte-Arbeit der ACT nach Hayes |
| Kurze Pause für dich | Selbstmitgefühlspause nach Neff |
| Landkarte der Vermeidung, Eine Sprosse höher | Graduierte Exposition in vivo mit SUD-Hierarchie |
| Sicherheitsnetz lockern, Nicht nachschauen | Abbau von Sicherheits- und Rückversicherungsverhalten |
| Rückblick nach der Mutprobe | Auswertung als eigentlicher Wirkfaktor der Exposition |
| Freude einplanen, Drei Lichter, Menschen-Zeit | Verhaltensaktivierung und soziale Schutzfaktoren |

**Bewusst weggelassen:** interozeptive Exposition, jede Form von Diagnostik oder Screening-Auswertung,
Atem-Anhalten über 10 Sekunden, Benachrichtigungen und alles, was einen Netzwerk-Request bräuchte.

## Zeichen und Figuren

Avatar, Maskottchen und Abzeichen sind Originaldesigns. Der Stil (Chibi, Pastell, Kawaii) ist frei
verwendbar; konkrete Figuren aus bestehenden Anime-, Spiel- oder Markenwelten werden nicht
nachgebaut — auch nicht umgefärbt oder „angelehnt an“.
