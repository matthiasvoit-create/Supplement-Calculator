# Kokoro Quest

Eine gamifizierte Self-Care-App gegen Angst und Panik. Tägliche kleine Übungen aus
Verhaltenstherapie, Körperarbeit und Achtsamkeit; der Fortschritt wird als Avatar-Entwicklung
sichtbar — vom zitternden kleinen Wesen bis zum Superhelden. Optik: Y2K/Kawaii —
Fensterrahmen im Betriebssystem-Look, Pastellverläufe, harte Konturen und Schlagschatten.

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
  Sie ist außerdem bewusst vom Y2K-Look ausgenommen: im Panikmodus gilt gedämpft und reizarm.

## Mein Gipfel

Neben dem Tagespensum lässt sich **ein** selbst gesetztes Ziel anlegen: eine gemiedene Situation,
zerlegt in 3–7 Etappen, jede davon mehrfach gegangen. Vor jedem Durchgang wird eine Vorhersage
notiert (was genau wird befürchtet, wie wahrscheinlich), danach der Abgleich mit der Realität —
Erwartungsverletzung nach Craske, zusätzlich zur klassischen Habituation. Die Kurve der
Angst-Höhepunkte über die Durchgänge macht das Lernen sichtbar.

Punkte: Plan anlegen 30 Geist · Durchgang `25 + 0,4 × SUD` Mut · Auswertung +15 Geist ·
Etappe geschafft +40 Mut · **Gipfel `150 + 3 × SUD`**. Drei Sicherungen gegen falsche Anreize:
ein Abbruch zahlt 60 % statt null, der Gipfel-Bonus läuft ohne Serien-Multiplikator, und es gibt
keinen Countdown. Beim Anlegen steht ein Sicherheits-Check, der Symptomprovokation ausschließt;
ab SUD 80 oder nach wiederholtem Abbruch weist die App ruhig auf Fachbegleitung hin, ohne zu sperren.
„Etappe halbieren" ist ein eigener Knopf mit eigenem Abzeichen — Verkleinern statt Aufgeben.

## Elite-Aktivitäten

Eine eigene Kategorie für gemeinsame Freizeit mit einem festen Menschen — Clubnacht, Live-Musik,
spazieren, telefonieren, Café, Kino, etwas Neues ausprobieren. 13 Quests, die höchsten
Verbundenheits-Werte im ganzen Katalog (bis 60 Punkte, das Maximum).

Sie werden **garantiert an drei Tagen pro Woche** im Tagespensum vorgeschlagen: `eliteTage()`
wählt pro Kalenderwoche deterministisch drei Wochentage, davon immer einen Freitag oder Samstag.
An diesen Tagen ersetzt die Elite-Quest einen der beiden Alltagsslots — das Pensum bleibt bei drei
Quests, damit die Tagesdosis nicht wächst. Der Name steht als Platzhalter `{elite}` in allen Texten
und kommt aus den Einstellungen (Standard: `ELITE_PARTNER_STANDARD`); abschaltbar, ohne dass die
Quests aus der Bibliothek verschwinden.

Fachlich: soziale Bindung als Schutzfaktor plus Verhaltensaktivierung, bei Club, Kino und Café
zusätzlich Exposition im Alltag. Deshalb tragen diese Quests Sicherheitshinweise, die zwei Dinge
unterscheiden, die leicht verwechselt werden: Ohrstöpsel bei Reizüberflutung sind sinnvolle
Reizregulation — Alkohol, damit es überhaupt geht, ist Sicherheitsverhalten und macht die Angst
am Morgen danach größer.

## Medaillen

Abzeichen halten einmalige Momente fest, Medaillen messen Ausdauer: dieselbe Art von Übung, viele
Male gemacht. 12 KPIs (Atem, Bewegung, Kopfarbeit, Stille, Mut, Verbundenheit, Elite, Serie,
Journal, Gipfel-Durchgänge, Gesamtzahl, Vielfalt) mit je drei Stufen — Bronze, Silber, Gold.

**Nur Gold erscheint neben dem Avatar** im Status-Fenster, sonst wäre die Auszeichnung nichts
Besonderes mehr. Solange noch keine Goldmedaille da ist, steht dort, welche am nächsten dran ist.
Der eigene Bereich zeigt jede Medaille mit Zählerstand, Fortschrittsbalken und den drei Schwellen.
Neue Medaille anlegen: einen Eintrag in `MEDAILLEN` ergänzen, `wert(state)` liefert den Zähler.

Im Status-Fenster stehen außerdem die vier Attributwerte direkt unter dem Avatar.

## Vier Wesen zur Auswahl

Reisklößchen, Fledermaus, Axolotl oder Katze. Der Stufenbogen (Haltung, Ausrüstung: Umhang,
Laterne, Stirnband, Schild, Aura, Cape) ist allen gemeinsam; die Art liefert Silhouette, Farben
und Gesicht — Ohren, Flügel, Kiemen, Schwanz. Neue Art hinzufügen: einen Eintrag in `ARTEN`
ergänzen, der Rest passt sich an. Wechseln ist jederzeit möglich und ändert nichts am Fortschritt.

## Aufbau der Datei

| Abschnitt | Inhalt |
|---|---|
| `§A INHALTE` | Texte, Krisenkontakte, Attribute, Level, 68 Quests (davon 13 Elite), 19 Wissenskarten, Coping-Sätze, 35 Abzeichen, 12 Medaillen |
| `§B STATE` | Datenmodell, `localStorage`, `migrate()` |
| `§C LOGIK` | Tagesplan, Punkte, Serie mit Schilden, Level-Ups |
| `§D AVATAR` | Vier Arten × sieben Stufen als Inline-SVG, Symbole, Abzeichen |
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
| Mein Gipfel | Graduierte Exposition über Etappen plus Erwartungsverletzung (Craske): Vorhersage vorher, Abgleich nachher |
| Freude einplanen, Drei Lichter, Menschen-Zeit | Verhaltensaktivierung und soziale Schutzfaktoren |
| Elite-Aktivitäten | Soziale Bindung als Schutzfaktor, Verhaltensaktivierung, bei Club/Kino/Café zusätzlich Alltagsexposition |

**Bewusst weggelassen:** interozeptive Exposition, jede Form von Diagnostik oder Screening-Auswertung,
Atem-Anhalten über 10 Sekunden, Benachrichtigungen und alles, was einen Netzwerk-Request bräuchte.

## Gestaltung

Y2K/Kawaii: Karten sind Fenster mit Titelleiste und den drei Knöpfen, Buttons sind beveled mit
hartem Schlagschatten, der XP-Balken ist ein Blockbalken, die Navigation eine Taskleiste, der
Hintergrund ein feines Raster mit Halbtonpunkten. Zwei bewusste Abweichungen von der reinen
Retro-Optik: Überschriften bleiben in Groß- und Kleinschreibung (durchgehende Versalien wirken in
einer Angst-App wie Anschreien), und als Schwarz dient weiter die Tinte `#3B3054` statt `#000`.
Fließtext bleibt ≥ 16 px, jeder Kontrast über 4,5:1 — geprüft in beiden Modi.

## Zeichen und Figuren

Avatar, Maskottchen und Abzeichen sind Originaldesigns. Der Stil (Chibi, Pastell, Kawaii) ist frei
verwendbar; konkrete Figuren aus bestehenden Anime-, Spiel- oder Markenwelten werden nicht
nachgebaut — auch nicht umgefärbt oder „angelehnt an“.
