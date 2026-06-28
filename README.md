# Immobilien‑Investitionsrechner

Eine professionelle, eigenständige Website zur Kalkulation von Immobilien‑Kapitalanlagen in Deutschland. Sie kombiniert Eingaben, Cockpit, Verlauf, Exit, Stresstest, Bankfähigkeit, Ratgeber und Steuerstrategien in einer lokalen Web-App.

## Starten

**Variante A – einfach:** Datei `index.html` doppelklicken → öffnet im Browser. Läuft komplett lokal, keine Internetverbindung nötig, keine Daten verlassen den Rechner.

**Variante B – lokaler Server** (für „echte" URL):
```bash
cd "Immobilien-Rechner"
python3 -m http.server 8765
# dann http://localhost:8765 öffnen
```

## Online stellen (eigene Website)

Es ist eine einzelne, statische HTML‑Datei → überall hostbar:
- **Netlify / Vercel / Cloudflare Pages:** Ordner per Drag‑&‑Drop hochladen (kostenlos).
- **GitHub Pages:** Datei ins Repo, Pages aktivieren.
- **Eigener Webspace:** `index.html` per FTP hochladen.

## Funktionen

| Tab | Inhalt |
|---|---|
| **Eingaben** | Objekt, Kaufpreis & Kaufnebenkosten (Grunderwerbsteuer je Bundesland automatisch), Miete, Bewirtschaftung, Finanzierung (2 Darlehen), Steuer, Prognose‑Annahmen |
| **Cockpit** | Alle KPIs mit Ampel‑Bewertung: Brutto‑/Nettomietrendite, Faktor, Cashflow vor/nach Steuern, Eigenkapitalrendite, IRR, DSCR, Vermögenszuwachs + automatische Hinweise |
| **Verlauf** | Jahr‑für‑Jahr‑Projektion (Tilgung, AfA, Wert, Nettovermögen) + 4 Diagramme |
| **Exit & Verkauf** | Verkaufsrechnung, Spekulationssteuer‑Check (10‑Jahres‑Frist), Gesamtrendite, IRR |
| **Stresstest** | Sensitivität bei Zins‑, Mietausfall‑, Wertsteigerungs‑ und Mietniveau‑Änderung |
| **Bonität / Bank** | Haushaltsrechnung & Vermögensaufstellung fürs Bankgespräch |
| **Anleitung & Ratgeber** | Schritt‑für‑Schritt‑Guide für Einsteiger: So nutzt du den Rechner, Kaufprozess (Vorbereitung → Notar → nach dem Kauf), Kennzahlen verständlich erklärt + Faustregeln, Anlagestrategien & typische Anfängerfehler |
| **Steuerstrategien** | 71 legale Steuerstrategien nach Kategorien (AfA, Renovierung, Werbungskosten, Exit, Vermietungsart, Gesellschaften, Schenkung/Nießbrauch, Grunderwerbsteuer) mit Laienerklärung, Umsetzung, Rechenbeispiel, Rechtsgrundlage, Risiken & Quellen. Filterbar nach Einsteiger/Fortgeschritten/Profi und durchsuchbar. |
| **Methodik & Quellen** | Kernformeln, Steuerregeln, GrESt‑Tabelle und fachliche Referenzen |

> 💡 **Tooltips überall:** Hinter jedem Fachbegriff (auch bei den Kennzahlen im Cockpit, in den Tabellen und im Ratgeber) steckt ein kleines „i"‑Symbol. Mit Maus drüberfahren oder antippen zeigt eine kurze, laienverständliche Erklärung.

## Speichern / Teilen

- **💾 Speichern:** legt das Szenario im Browser ab (localStorage).
- **⤓ Export / ⤒ Import:** Szenario als `.json`‑Datei sichern/laden (für Backup oder Weitergabe).

## Steuerliche Grundlagen

- Einkommensteuertarif §32a EStG 2026 (Grundfreibetrag 12.348 €), Soli‑Milderungszone, Kirchensteuer, Splitting.
- Grunderwerbsteuer aller 16 Länder auf aktuellem Stand (u. a. Bremen/Sachsen/Hamburg 5,5 %, Thüringen 5,0 %).
- AfA linear 2 %/2,5 %/3 %, degressiv 5 %, Denkmal; AfA‑Bemessung über Gebäudeanteil.
- Spekulationsfrist §23 EStG, anschaffungsnahe Herstellungskosten §6 EStG (15 %‑Grenze).

Für produktiven Einsatz sollten Quellenstand, fachliche Review-Freigabe und Änderungsdatum pro Rechenregel dokumentiert werden.

> ⚠️ **Keine Steuer‑ oder Anlageberatung.** Alle Angaben ohne Gewähr; ersetzt keine Beratung durch Steuerberater:in/Bank.
