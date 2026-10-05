import { countries } from './countries';
const STORAGE_KEY = 'europa-quiz.lernstand.v1';
const MAX_BOX = 5;
/** Lernstand, der nur lokal im Browser (localStorage) gespeichert wird. */
export class Progress {
    constructor() {
        this.game = 0;
        this.stats = {};
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const data = raw ? JSON.parse(raw) : null;
            if (data?.version === 1 && data.stats && typeof data.game === 'number') {
                this.game = data.game;
                this.stats = data.stats;
            }
        }
        catch {
            /* Kein Speicher verfügbar (z.B. privater Modus): Lernstand gilt nur für diese Sitzung. */
        }
    }
    status(id) {
        const s = this.stats[id];
        if (!s || s.seen === 0)
            return 'neu';
        return s.box >= 2 ? 'sitzt' : 'unsicher';
    }
    counts() {
        const result = { neu: 0, unsicher: 0, sitzt: 0 };
        for (const c of countries)
            result[this.status(c.id)]++;
        return result;
    }
    /** Länder, die zuletzt falsch waren oder nach einem Fehler noch nicht bestätigt sind. */
    weak() {
        return countries.filter(c => this.status(c.id) === 'unsicher');
    }
    startGame() {
        this.game++;
        this.save();
    }
    /**
     * Trägt das Ergebnis einer Runde ein.
     * Komplett richtig: Box steigt (beim allerersten Versuch direkt auf „sitzt“).
     * Mindestens ein Fehler: Box fällt auf 0.
     * Zwischenrunden (`review`) erhöhen die Box nicht ein zweites Mal im selben Spiel.
     */
    record(id, marks, review = false) {
        const s = this.stats[id] ?? { seen: 0, box: 0, lastGame: 0, misses: [0, 0, 0, 0] };
        const perfect = marks.every(m => m !== 'wrong');
        if (perfect) {
            if (s.seen === 0)
                s.box = 2;
            else if (!review)
                s.box = Math.min(MAX_BOX, s.box + 1);
        }
        else {
            s.box = 0;
            marks.forEach((m, i) => { if (m === 'wrong')
                s.misses[i]++; });
        }
        s.seen++;
        s.lastGame = this.game;
        this.stats[id] = s;
        this.save();
    }
    /**
     * Gewicht für die Auswahl: falsch beantwortete Länder zuerst, dann neue,
     * dann gelernte Länder, deren Wiederholungsabstand (2, 4, 8, 16 Spiele) erreicht ist.
     */
    priority(id) {
        const s = this.stats[id];
        if (!s || s.seen === 0)
            return 3;
        if (s.box === 0)
            return 6;
        if (s.box === 1)
            return 4;
        const interval = 2 ** (s.box - 1);
        return this.game - s.lastGame >= interval ? 2 : 0.4;
    }
    /** Gewichtete Zufallsauswahl ohne Zurücklegen (Efraimidis–Spirakis). */
    pick(pool, size) {
        return pool
            .map(c => ({ c, key: Math.random() ** (1 / this.priority(c.id)) }))
            .sort((a, b) => b.key - a.key)
            .slice(0, size)
            .map(x => x.c);
    }
    reset() {
        this.stats = {};
        this.game = 0;
        try {
            localStorage.removeItem(STORAGE_KEY);
        }
        catch { /* ignorieren */ }
    }
    save() {
        try {
            const data = { version: 1, game: this.game, stats: this.stats };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
        catch {
            /* Speicher voll oder gesperrt: Spiel läuft trotzdem weiter. */
        }
    }
}
// ---------- Antwortprüfung mit Tippfehler-Toleranz ----------
export const normalize = (s) => s.trim().toLowerCase().replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
/** Damerau-Levenshtein-Distanz (Vertauschung zweier Nachbarbuchstaben zählt als ein Fehler). */
export function distance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 1; j <= b.length; j++)
        d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
                d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        }
    }
    return d[a.length][b.length];
}
/** Erlaubte Tippfehler je nach Wortlänge: kurze Namen müssen exakt stimmen. */
const tolerance = (length) => (length <= 4 ? 0 : length <= 7 ? 1 : 2);
/**
 * Prüft eine Eingabe gegen die richtigen Namen. Ein Tippfehler wird nur akzeptiert,
 * wenn die Eingabe nicht genau ein anderes Land/eine andere Hauptstadt trifft und
 * keinem anderen Namen mindestens genauso nahe ist (z.B. „Irland“ ≠ „Island“).
 */
export function judge(input, correct, others) {
    const given = normalize(input);
    if (!given)
        return 'wrong';
    const right = correct.map(normalize);
    if (right.includes(given))
        return 'ok';
    const wrong = others.map(normalize).filter(o => !right.includes(o));
    if (wrong.includes(given))
        return 'wrong';
    const best = Math.min(...right.map(r => (distance(given, r) <= tolerance(r.length) ? distance(given, r) : Infinity)));
    if (best === Infinity)
        return 'wrong';
    const closestOther = Math.min(Infinity, ...wrong.map(o => distance(given, o)));
    return best < closestOther ? 'typo' : 'wrong';
}
export const countryNames = (c) => [c.name, ...(c.aliases ?? [])];
export const capitalNames = (c) => [c.capital, ...(c.capitals ?? [])];
export const allCountryNames = countries.flatMap(countryNames);
export const allCapitalNames = countries.flatMap(capitalNames);
