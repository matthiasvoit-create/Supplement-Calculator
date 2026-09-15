> **Hinweis:** Dieses Verzeichnis ist eine Kopie. Gepflegt wird die App in ihrem
> eigenen Repository: [`matthiasvoit-create/kokore-quest`](https://github.com/matthiasvoit-create/kokore-quest).
> Änderungen gehören dorthin, nicht hierher.

# Kokoro Quest

Eine gamifizierte Self-Care-App gegen Angst und Panik. Tägliche kleine Übungen aus
Verhaltenstherapie, Körperarbeit und Achtsamkeit; der Fortschritt wird als Avatar-Entwicklung
sichtbar — vom zitternden kleinen Wesen bis zum Superhelden. Optik: Y2K/Kawaii —
Fensterrahmen im Betriebssystem-Look, Pastellverläufe, harte Konturen und Schlagschatten.

Die App selbst ist eine einzige Datei: **`index.html`**. Doppelklick genügt. Kein Build, keine
Abhängigkeiten, keine Netzwerk-Requests, kein Tracking. Alle Daten bleiben im Browser
(`localStorage`, Schlüssel `kokoroquest.v1`), Export und Import als JSON-Datei.

## Auf dem Startbildschirm installieren

Daneben liegen vier Dateien, die die App installierbar machen — `manifest.webmanifest`, `sw.js`
und die Icons. Sie sind rein additiv: Beim Öffnen der Einzeldatei laufen ihre Verweise ins Leere,
und der Service Worker registriert sich nur, wenn die Seite wirklich von einem Server kommt
(nicht über `file://` und nicht eingebettet in einer fremden Seite).

Gehostet — über GitHub Pages aus diesem Repo unter
`https://matthiasvoit-create.github.io/kokore-quest/` — gilt dann:

- **iOS:** Safari → Teilen → „Zum Home-Bildschirm"
- **Android:** Chrome → Menü → „App installieren"

Danach startet sie im Vollbild mit eigenem Symbol und **ohne Netzverbindung**; der Service Worker
liefert aus dem Cache und holt eine neue Fassung im Hintergrund nach (`stale-while-revalidate`,
sichtbar beim übernächsten Start — bei Änderungen die `CACHE`-Zahl in `sw.js` erhöhen).

Ein langer Druck auf das App-Symbol bietet die Verknüpfung **Ruhe-Insel** an: Sie öffnet über
`?ruhe=1` direkt die Atemhilfe, ohne den Umweg über den Startbildschirm der App.

Die fixierten Leisten respektieren `env(safe-area-inset-*)`, liegen also nicht unter Kerbe oder
Home-Indikator.

**Wichtig:** Der Fortschritt hängt an der Adresse, unter der die App läuft. Wer von einer
Adresse auf eine andere wechselt, nimmt ihn nur über „Daten sichern" und „Daten laden" mit.

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

## Handbuch und Medic

**Handbuch** (Fragezeichen in der Kopfzeile, oder Einstellungen → Nachlesen) erklärt in einfacher
Sprache, wofür die App da ist — *dich widerstandsfähiger gegen Angst und Panikattacken machen, nicht
angstfrei* —, wie der Tagesablauf funktioniert und vor allem, **wie sich Übungen konkret auf die
Figur auswirken**: Punkte gehen auf ein oder zwei Attribute (die das Radar formen) *und* auf die
Gesamtpunkte (die über die Stufe entscheiden), mit Rechenbeispiel und der Tabelle aller sieben
Schwellen. Dazu Serie und Schilde, Abzeichen gegen Medaillen, alle Bereiche, Datenhaltung und ein
Abschnitt „Was diese App bewusst nicht tut".

**Medic** ist ein eigener Punkt in der Hauptnavigation und listet pflanzliche Mittel, geordnet nach Nutzen bei Angst *unter Berücksichtigung der
Sicherheit*, mit Datenlage-Balken (drei Stufen) je Mittel: Lavendelöl-Spezialextrakt (am besten
untersucht), Kamille, Passionsblume, Ashwagandha, Baldrian, Melisse/Hopfen, Johanniskraut, CBD.
Kava steht bewusst nicht in der Rangfolge, sondern als Sonderfall am Ende — gute Wirksamkeitsdaten,
aber Leberschäden.

Drei Leitplanken: keine Dosierungen und keine Empfehlung; die Johanniskraut-Wechselwirkungen (Pille,
Blutverdünner, Immunsuppressiva, HIV-Medikamente, Serotoninsyndrom) sind rot hervorgehoben; und der
für diese App entscheidende Punkt steht ganz oben — ein Mittel, das man nimmt, *damit man eine
Situation aushält*, wird zum Sicherheitsverhalten und arbeitet gegen die Exposition. Am Ende steht,
was besser belegt ist als alles auf der Liste: KVT mit Konfrontation, Bewegung, Schlaf, weniger
Koffein und Alkohol.

## Behandlungspfad

Sechs Module in der Reihenfolge, in der eine kognitive Verhaltenstherapie bei Panikstörung und
Agoraphobie üblicherweise vorgeht:

1. **Verstehen, was passiert** — Fehlalarm, Adrenalinabbau, Hyperventilation, Teufelskreis
2. **Dein eigenes Modell** — Panik-Protokoll, Angst-Tagebuch, eigener Teufelskreis
3. **Gedanken prüfen** — A-B-C-Schema, Gedankenprotokoll, Reattribution, Dekatastrophisieren
4. **Sicherheitsverhalten abbauen** — erkennen, weglassen, Unsicherheit aushalten, Aufmerksamkeit nach außen
5. **Vermeidung abbauen** — Landkarte, Expositionsleiter, Verhaltensexperiment, Rückblick
6. **Dranbleiben und vorbeugen** — Notfallkarte, Frühwarnzeichen, Wochen-Check, Rückschlagregeln

Jedes Modul hat ein Lernziel, aufklappbare Wissenskarten, die zugehörigen Übungen und einen
Merksatz. Nichts ist gesperrt — die Reihenfolge ist eine Empfehlung, kein Gate. Abschließen
entscheidet die Person, nicht die App.

### Die beiden Regellisten

**Die zehn goldenen Regeln zur Angstbewältigung** stehen in der Ich-Form als Selbstgespräch und
sind sowohl eine Übung als auch — in den ersten sechs Punkten — ein Eintrag in der Ruhe-Insel.
**Umgang mit Rückschlägen** ist die zweite Liste; sie ist in die Du-Form der App übertragen,
inhaltlich unverändert.

### Konkrete KVT-Werkzeuge

| Übung | Technik |
|---|---|
| Panik-Protokoll | Verlaufsprotokoll einer Attacke: Situation → erstes Körpersignal → Gedanke → Verhalten → Abklingen |
| A-B-C-Schema | Auslöser, Bewertung, Konsequenz — plus alternatives B und dessen Folge |
| Kuchendiagramm | Reattribution: Katastrophenerklärung gegen mindestens drei harmlose, Prozente live als SVG-Diagramm |
| Verhaltensexperiment | Überprüfbare Vorhersage vorher schriftlich, Erfolgskriterium vorher, Abgleich nachher |
| Aufmerksamkeit nach außen | Aufmerksamkeitstraining gegen die Innenwendung der Wahrnehmung |
| Die Angst vor der Angst prüfen | Erwartungsangst: vorhergesagte gegen tatsächliche Schwere |
| Notfallkarte | Vier Felder, erscheinen danach ganz oben in der Ruhe-Insel |
| Frühwarnzeichen | Rückfallprophylaxe: drei Zeichen, drei Sofortschritte, Schwelle für Unterstützung |
| Wochen-Check | Vermeidung sichtbar machen, bevor der Radius unbemerkt kleiner wird |

### Psychoedukation zu den Störungsbildern

Elf zusätzliche Karten beschreiben Panikstörung, Agoraphobie, den Unterschied zu generalisierter
Angst, Häufigkeit, das Drei-Ebenen-Modell, Rückversicherung, Verhaltensexperimente, den Ablauf
einer Verhaltenstherapie, deren Wirksamkeit, Medikamente (SSRI/SNRI als Leitlinienoption,
Abhängigkeitsrisiko von Benzodiazepinen) und den Weg zum Therapieplatz in Deutschland.

Alle beschreibend, nie beurteilend — die App stellt weiterhin keine Diagnose und gibt keine
Medikamentenempfehlung; die Einordnung macht eine Fachperson.

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
| `§A INHALTE` | Texte, Krisenkontakte, Attribute, Level, 79 Quests (13 Elite), 30 Wissenskarten, zwei Regellisten, Behandlungspfad, Coping-Sätze, 42 Abzeichen, 12 Medaillen |
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
| Behandlungspfad | Aufbau des Standardprotokolls für Panikstörung und Agoraphobie (Margraf/Schneider; kognitives Panikmodell nach Clark) |
| Panik-Protokoll, A-B-C, Kuchendiagramm | Selbstbeobachtung, kognitive Grundformel, Reattribution |
| Verhaltensexperiment | Überprüfbare Vorhersage statt Argument — das wirksamste Einzelwerkzeug der KVT |
| Notfallkarte, Frühwarnzeichen | Rückfallprophylaxe, fester Bestandteil jeder Verhaltenstherapie |
| Die zehn goldenen Regeln | Klassische Regelliste der Angstbewältigung, als Selbstgespräch in der Ich-Form |
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
