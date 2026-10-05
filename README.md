# Europa – Das Kartenquiz

Ein deutsches Angular-22-Lernspiel mit stummer Europakarte, 50 Ländern, Hauptstadtfragen, EU-/Euro-Fragen, Lösungen und Punktewertung. Keine Konten, kein Backend, keine Speicherung persönlicher Daten – nur der Lernstand wird lokal im Browser (localStorage) abgelegt.

## Lernlogik

- **Modi:** 10 Länder, 20 Länder, alle 50 Länder oder „Schwächen üben“ (bis zu 20 Länder, die zuletzt unsicher waren).
- **Wiederholung im Spiel:** Ein Land mit mindestens einem Fehler kommt als Zusatzrunde wieder – in der dritten Runde danach, höchstens dreimal pro Spiel. Sind keine neuen Länder mehr übrig, wird nie dasselbe Land direkt hintereinander gefragt; notfalls kommt eine kurze Zwischenrunde mit einem bereits gelösten Land.
- **Lernstand über Spiele hinweg** (Leitner-Prinzip, `src/learning.ts`): Pro Land gibt es eine Stufe 0–5. Komplett richtig → Stufe steigt (beim ersten Versuch direkt auf „sitzt“), ein Fehler → Stufe 0. Status: *neu* (nie gefragt), *unsicher* (Stufe 0–1), *sitzt* (ab Stufe 2).
- **Auswahl:** Gewichtete Zufallsauswahl – unsichere Länder zuerst, dann neue, gelernte Länder erst wieder nach 2, 4, 8 bzw. 16 Spielen.
- **Tippfehler-Toleranz:** Kleine Tippfehler (ab 5 Buchstaben einer, ab 8 Buchstaben zwei) zählen als richtig, die korrekte Schreibweise wird angezeigt. Trifft die Eingabe ein anderes Land oder liegt sie einem anderen Namen gleich nah (z.B. „Irland“ statt „Island“), gilt sie als falsch.
- **Übersicht:** Im Menü und nach dem Spiel färbt die Karte die Länder nach Lernstand ein; der Ergebnisbildschirm listet alle Fehler mit den richtigen Antworten.

## Lokal starten

Node.js 24 und npm installieren, dann im Projektordner:

```sh
npm ci
npm start
```

Das Spiel läuft unter http://127.0.0.1:4200. `npm run build` erzeugt die auslieferbare Website in `dist/`. Der Build verwendet den Angular-AOT-Compiler, Angular-Linker und Rollup, um eine Windows-Sandbox-Einschränkung von esbuild zu vermeiden. Eine Angular-CLI-Konfiguration und `npm run start:angular` sind ebenfalls enthalten.

## Inhalt und Daten

- `src/main.ts`: Angular-Komponente und Spielablauf
- `src/countries.ts`: Länder, Hauptstädte, alternative Schreibweisen und EU-/Euro-Status
- `src/learning.ts`: Lernstand, Länderauswahl und Antwortprüfung mit Tippfehler-Toleranz
- `src/styles.css`: responsive Oberfläche
- `scripts/map.mjs`: erzeugt SVG-Pfade aus world-atlas/Natural Earth; neu erzeugen mit `npm run map`

Stand: September 2026. Bulgarien nutzt seit 1. Januar 2026 den Euro. Montenegro und Kosovo verwenden ihn einseitig; Andorra, Monaco, San Marino und Vatikanstadt mit Währungsvereinbarungen. EU-Mitgliedschaft und Euro-Nutzung werden separat bewertet. Kosovo ist teilweise anerkannt. Bern wird als Bundesstadt akzeptiert. Das Spiel verwendet eine weite europäische Länderauswahl einschließlich Kaukasus, Russland und Türkei; Karten sind geografisch vereinfacht und keine Aussage zu umstrittenen Grenzen.

Quellen: [EU-Länder](https://european-union.europa.eu/principles-countries-history/eu-countries_en), [Euro-Länder](https://european-union.europa.eu/institutions-law-budget/euro/countries-using-euro_en), [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/). Natural-Earth-Kartendaten sind gemeinfrei. Schriftarten werden von Google Fonts geladen; bei fehlender Verbindung greift die lokale Sans-Serif-Schrift.

Eine optionale WebMCP-Aktion startet ein neues Spiel im aktuellen Modus, sofern der Browser die Schnittstelle anbietet.
