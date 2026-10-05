import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { countries } from './countries';
import { mapData } from './map-data';
import { Progress, judge, countryNames, capitalNames, allCountryNames, allCapitalNames } from './learning';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.country.id;
const _forTrack2 = ($index, $item) => $item.label;
function App_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 8)(1, "strong");
    i0.ɵɵtext(2, "So spielst du");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "W\u00E4hle einen Modus: 10, 20 oder alle L\u00E4nder \u2013 oder \u00FCbe gezielt deine Schw\u00E4chen. Erkenne das gr\u00FCn markierte Land, gib Land und Hauptstadt ein und entscheide, ob es zur EU geh\u00F6rt und den Euro verwendet. Jede richtige Antwort gibt einen Punkt; kleine Tippfehler werden akzeptiert. Kleine Staaten werden durch einen Punkt markiert. Du kannst die Karte vergr\u00F6\u00DFern und verschieben.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "L\u00E4nder mit Fehlern kommen nach zwei, drei Runden noch einmal, bis sie sitzen. Dein Lernstand wird nur in diesem Browser gespeichert: Unsichere L\u00E4nder kommen in sp\u00E4teren Spielen \u00F6fter, gelernte in wachsenden Abst\u00E4nden. Die Karte im Men\u00FC zeigt, was schon sitzt.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 37);
    i0.ɵɵlistener("click", function App_Conditional_26_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.help = false); });
    i0.ɵɵtext(10, "Verstanden");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.poolSize, " L\u00E4nder im Pool, einschlie\u00DFlich Kosovo und der transkontinentalen bzw. dem europ\u00E4ischen Raum zugeordneten Staaten T\u00FCrkei, Russland, Armenien, Aserbaidschan und Georgien. Euro-Nutzung ist nicht dasselbe wie Mitgliedschaft im Euroraum.");
} }
function App_For_47_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "title");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", c_r3.name, " \u00B7 ", c_r3.capital, " \u00B7 ", ctx_r1.statusById[c_r3.id]);
} }
function App_For_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "path", 38);
    i0.ɵɵconditionalCreate(1, App_For_47_Conditional_1_Template, 2, 3, ":svg:title");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const shape_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("target", !ctx_r1.overview && shape_r4.id === ctx_r1.current?.id);
    i0.ɵɵattribute("d", shape_r4.d)("data-status", ctx_r1.overview ? ctx_r1.statusById[shape_r4.id] : null);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_13_0 = ctx_r1.overview && ctx_r1.byId.get(shape_r4.id)) ? 1 : -1, tmp_13_0);
} }
function App_Conditional_48_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "circle", 39)(1, "title");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("cx", s_r5.x)("cy", s_r5.y)("data-status", ctx_r1.statusById[s_r5.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", s_r5.name, " \u00B7 ", ctx_r1.statusById[s_r5.id]);
} }
function App_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, App_Conditional_48_For_1_Template, 3, 5, ":svg:circle", 39, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.smallStates);
} }
function App_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 40)(1, "circle", 41);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("cx", ctx_r1.point[0])("cy", ctx_r1.point[1]);
    i0.ɵɵadvance();
    i0.ɵɵattribute("cx", ctx_r1.point[0])("cy", ctx_r1.point[1]);
} }
function App_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "span", 42);
    i0.ɵɵtext(2, " sitzt ");
    i0.ɵɵelement(3, "span", 43);
    i0.ɵɵtext(4, " unsicher ");
    i0.ɵɵelement(5, "span", 44);
    i0.ɵɵtext(6, " neu");
    i0.ɵɵelementEnd();
} }
function App_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "span", 45);
    i0.ɵɵtext(2, " Welches Land ist markiert?");
    i0.ɵɵelementEnd();
} }
function App_Conditional_70_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function App_Conditional_70_For_9_Template_button_click_0_listener() { const m_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.start(m_r8.id)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "i");
    i0.ɵɵtext(7, "\u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r8.hint);
} }
function App_Conditional_70_Conditional_37_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function App_Conditional_70_Conditional_37_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.confirmReset = true); });
    i0.ɵɵtext(1, "Lernstand zur\u00FCcksetzen");
    i0.ɵɵelementEnd();
} }
function App_Conditional_70_Conditional_37_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, "Wirklich alles zur\u00FCcksetzen? ");
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function App_Conditional_70_Conditional_37_Conditional_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.resetProgress()); });
    i0.ɵɵtext(3, "Ja, zur\u00FCcksetzen");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function App_Conditional_70_Conditional_37_Conditional_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.confirmReset = false); });
    i0.ɵɵtext(5, "Abbrechen");
    i0.ɵɵelementEnd()();
} }
function App_Conditional_70_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, App_Conditional_70_Conditional_37_Conditional_0_Template, 2, 0, "button", 59)(1, App_Conditional_70_Conditional_37_Conditional_1_Template, 6, 0, "div", 60);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!ctx_r1.confirmReset ? 0 : 1);
} }
function App_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 6);
    i0.ɵɵtext(2, "SPIELMODUS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Wie viele L\u00E4nder?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 46);
    i0.ɵɵtext(6, "L\u00E4nder mit Fehlern kommen nach zwei, drei Runden noch einmal \u2013 so lange, bis sie sitzen.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 47);
    i0.ɵɵrepeaterCreate(8, App_Conditional_70_For_9_Template, 8, 2, "button", 48, _forTrack0);
    i0.ɵɵelementStart(10, "button", 49);
    i0.ɵɵlistener("click", function App_Conditional_70_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.start("schwaechen")); });
    i0.ɵɵelementStart(11, "span")(12, "strong");
    i0.ɵɵtext(13, "Schw\u00E4chen \u00FCben");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "i");
    i0.ɵɵtext(17, "\u2192");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 50)(19, "div", 51)(20, "strong");
    i0.ɵɵtext(21, "Dein Lernstand");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 52);
    i0.ɵɵelement(25, "i", 53)(26, "i", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 55)(28, "span");
    i0.ɵɵelement(29, "i", 53);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵelement(32, "i", 54);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵelement(35, "i", 56);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(37, App_Conditional_70_Conditional_37_Template, 2, 1);
    i0.ɵɵelementStart(38, "p", 57);
    i0.ɵɵtext(39, "Wird nur in diesem Browser gespeichert.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.modes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.weakCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.weakCount ? ctx_r1.weakCount + (ctx_r1.weakCount === 1 ? " unsicheres Land" : " unsichere L\u00E4nder") : "Noch keine \u2013 spiel zuerst eine Runde");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r1.counts.sitzt, " / ", ctx_r1.poolSize, " sitzen");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.counts.sitzt / ctx_r1.poolSize * 100, "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r1.counts.unsicher / ctx_r1.poolSize * 100, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" sitzt ", ctx_r1.counts.sitzt);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" unsicher ", ctx_r1.counts.unsicher);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" neu ", ctx_r1.counts.neu);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.counts.neu < ctx_r1.poolSize ? 37 : -1);
} }
function App_Conditional_71_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" \u00B7 ", ctx_r1.retries.length, " Wdh. offen");
} }
function App_Conditional_71_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.kind === "wiederholung" ? "\u21BB Wiederholung" : "\u21BA Kurze Zwischenrunde");
} }
function App_Conditional_71_Conditional_21_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵtext(1, " \u00B7 achte auf die Schreibweise");
    i0.ɵɵelementEnd();
} }
function App_Conditional_71_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 81);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, App_Conditional_71_Conditional_21_Conditional_2_Template, 2, 0, "span", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("wrong", ctx_r1.marks[0] === "wrong");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.marks[0] === "wrong" ? "\u21B3" : "\u2713", " ", ctx_r1.current.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.marks[0] === "typo" ? 2 : -1);
} }
function App_Conditional_71_Conditional_27_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵtext(1, " \u00B7 achte auf die Schreibweise");
    i0.ɵɵelementEnd();
} }
function App_Conditional_71_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 81);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, App_Conditional_71_Conditional_27_Conditional_2_Template, 2, 0, "span", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("wrong", ctx_r1.marks[1] === "wrong");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.marks[1] === "wrong" ? "\u21B3" : "\u2713", " ", ctx_r1.current.capital);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.marks[1] === "typo" ? 2 : -1);
} }
function App_Conditional_71_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 81);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("wrong", ctx_r1.marks[2] === "wrong");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.marks[2] === "wrong" ? "\u21B3" : "\u2713", " ", ctx_r1.current.eu ? "EU-Mitglied" : "Kein EU-Mitglied");
} }
function App_Conditional_71_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 81);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("wrong", ctx_r1.marks[3] === "wrong");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.marks[3] === "wrong" ? "\u21B3" : "\u2713", " ", ctx_r1.current.euro ? "Verwendet den Euro" : "Andere W\u00E4hrung");
} }
function App_Conditional_71_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.current.note);
} }
function App_Conditional_71_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 80);
    i0.ɵɵlistener("click", function App_Conditional_71_Conditional_58_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.skip()); });
    i0.ɵɵtext(1, "Diese Runde \u00FCberspringen");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 83);
    i0.ɵɵtext(3, "\u00B7");
    i0.ɵɵelementEnd();
} }
function App_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 63);
    i0.ɵɵtext(4);
    i0.ɵɵconditionalCreate(5, App_Conditional_71_Conditional_5_Template, 1, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 64);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 65);
    i0.ɵɵelement(9, "div");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, App_Conditional_71_Conditional_10_Template, 2, 1, "div", 66);
    i0.ɵɵelementStart(11, "h2");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 46);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "form", 67);
    i0.ɵɵlistener("ngSubmit", function App_Conditional_71_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checked ? ctx_r1.next() : ctx_r1.check()); });
    i0.ɵɵelementStart(16, "label", 68)(17, "span", 69);
    i0.ɵɵtext(18, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19, " Das Land");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 70);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function App_Conditional_71_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.answerCountry, $event) || (ctx_r1.answerCountry = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(21, App_Conditional_71_Conditional_21_Template, 3, 5, "p", 71);
    i0.ɵɵelementStart(22, "label", 72)(23, "span", 69);
    i0.ɵɵtext(24, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Die Hauptstadt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 73);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function App_Conditional_71_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.answerCapital, $event) || (ctx_r1.answerCapital = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(27, App_Conditional_71_Conditional_27_Template, 3, 5, "p", 71);
    i0.ɵɵelementStart(28, "fieldset")(29, "legend")(30, "span", 69);
    i0.ɵɵtext(31, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(32, " Mitglied der Europ\u00E4ischen Union?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 74)(34, "button", 75);
    i0.ɵɵlistener("click", function App_Conditional_71_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.answerEu = true); });
    i0.ɵɵtext(35, "Ja, in der EU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 75);
    i0.ɵɵlistener("click", function App_Conditional_71_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.answerEu = false); });
    i0.ɵɵtext(37, "Nein");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(38, App_Conditional_71_Conditional_38_Template, 2, 4, "p", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "fieldset")(40, "legend")(41, "span", 69);
    i0.ɵɵtext(42, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43, " Verwendet das Land den Euro?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 74)(45, "button", 75);
    i0.ɵɵlistener("click", function App_Conditional_71_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.answerEuro = true); });
    i0.ɵɵtext(46, "\u20AC Ja, den Euro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "button", 75);
    i0.ɵɵlistener("click", function App_Conditional_71_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.answerEuro = false); });
    i0.ɵɵtext(48, "Nein");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(49, App_Conditional_71_Conditional_49_Template, 2, 4, "p", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(50, App_Conditional_71_Conditional_50_Template, 2, 1, "p", 76);
    i0.ɵɵelementStart(51, "div", 77);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "button", 78);
    i0.ɵɵtext(54);
    i0.ɵɵelementStart(55, "span");
    i0.ɵɵtext(56, "\u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 79);
    i0.ɵɵconditionalCreate(58, App_Conditional_71_Conditional_58_Template, 4, 0);
    i0.ɵɵelementStart(59, "button", 80);
    i0.ɵɵlistener("click", function App_Conditional_71_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.finish()); });
    i0.ɵɵtext(60, "Spiel beenden");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("RUNDE ", ctx_r1.round, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("\u00B7 Land ", ctx_r1.started, " / ", ctx_r1.total);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.retries.length ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u2726 ", ctx_r1.score, " Punkte");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.newDone / ctx_r1.total * 100, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.kind !== "neu" ? 10 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.checked ? ctx_r1.roundScore === 4 ? "Volltreffer!" : "Wieder etwas gelernt." : "Welches Land ist das?");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.checked ? ctx_r1.roundScore + " von 4 Antworten richtig" + (ctx_r1.retryScheduled ? " \u2013 kommt gleich noch einmal." : "") : "Schau auf die markierte Fl\u00E4che in der Karte.");
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("correct", ctx_r1.checked && ctx_r1.marks[0] !== "wrong")("incorrect", ctx_r1.checked && ctx_r1.marks[0] === "wrong");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.answerCountry);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.checked ? 21 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("correct", ctx_r1.checked && ctx_r1.marks[1] !== "wrong")("incorrect", ctx_r1.checked && ctx_r1.marks[1] === "wrong");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.answerCapital);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.checked ? 27 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("selected", ctx_r1.answerEu === true);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵattribute("aria-pressed", ctx_r1.answerEu === true);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.answerEu === false);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵattribute("aria-pressed", ctx_r1.answerEu === false);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.checked ? 38 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("selected", ctx_r1.answerEuro === true);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵattribute("aria-pressed", ctx_r1.answerEuro === true);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.answerEuro === false);
    i0.ɵɵproperty("disabled", ctx_r1.checked);
    i0.ɵɵattribute("aria-pressed", ctx_r1.answerEuro === false);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.checked ? 49 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.checked && ctx_r1.current.note ? 50 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.checked ? ctx_r1.current.name + ". " + ctx_r1.roundScore + " von 4 Punkten." : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.checked && !ctx_r1.complete);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.checked ? ctx_r1.isLast ? "Ergebnis ansehen" : "N\u00E4chstes Land" : "Antworten pr\u00FCfen", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(!ctx_r1.checked ? 58 : -1);
} }
function App_Conditional_72_Conditional_31_For_4_For_7_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "s");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " \u2192 ");
} if (rf & 2) {
    const l_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r14.given);
} }
function App_Conditional_72_Conditional_31_For_4_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵconditionalCreate(4, App_Conditional_72_Conditional_31_For_4_For_7_Conditional_4_Template, 3, 1);
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const l_r14 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r14.label);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(l_r14.given ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r14.correct);
} }
function App_Conditional_72_Conditional_31_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 92)(1, "div", 93)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(6, App_Conditional_72_Conditional_31_For_4_For_7_Template, 7, 3, "div", 94, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r15 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r15.country.name);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("solved", m_r15.solved);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r15.solved ? "\u2713 in der Wiederholung gel\u00F6st" : "noch unsicher");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(m_r15.lines);
} }
function App_Conditional_72_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Das solltest du dir merken");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 91);
    i0.ɵɵrepeaterCreate(3, App_Conditional_72_Conditional_31_For_4_Template, 8, 4, "div", 92, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.mistakes);
} }
function App_Conditional_72_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 76);
    i0.ɵɵtext(1, "Keine Fehler \u2013 stark!");
    i0.ɵɵelementEnd();
} }
function App_Conditional_72_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 95);
    i0.ɵɵlistener("click", function App_Conditional_72_Conditional_56_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.start("schwaechen")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Schw\u00E4chen \u00FCben (", ctx_r1.weakCount, ") ");
} }
function App_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "span", 6);
    i0.ɵɵtext(2, "DEINE EUROPA-REISE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 84);
    i0.ɵɵtext(4, "\u2726");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 85);
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14, "richtige Antworten");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 86)(16, "div")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "auf Anhieb komplett richtig");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Wiederholungen");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div")(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30, "Fehler ausgebessert");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(31, App_Conditional_72_Conditional_31_Template, 5, 0)(32, App_Conditional_72_Conditional_32_Template, 2, 0, "p", 76);
    i0.ɵɵelementStart(33, "div", 87)(34, "div", 51)(35, "strong");
    i0.ɵɵtext(36, "Dein Lernstand");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 52);
    i0.ɵɵelement(40, "i", 53)(41, "i", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 55)(43, "span");
    i0.ɵɵelement(44, "i", 53);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "span");
    i0.ɵɵelement(47, "i", 54);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "span");
    i0.ɵɵelement(50, "i", 56);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "button", 88);
    i0.ɵɵlistener("click", function App_Conditional_72_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.start(ctx_r1.mode)); });
    i0.ɵɵtext(53);
    i0.ɵɵelementStart(54, "span");
    i0.ɵɵtext(55, "\u21BB");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(56, App_Conditional_72_Conditional_56_Template, 4, 1, "button", 89);
    i0.ɵɵelementStart(57, "button", 90);
    i0.ɵɵlistener("click", function App_Conditional_72_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toMenu()); });
    i0.ɵɵtext(58, "Modus wechseln");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.rating);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", ctx_r1.newDone, " ", ctx_r1.newDone === 1 ? "Land" : "L\u00E4nder", " in ", ctx_r1.history.length, " Runden ge\u00FCbt.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.score);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" / ", ctx_r1.maxScore);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.firstTry);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.repeatCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.solvedCount, " / ", ctx_r1.mistakes.length);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.mistakes.length ? 31 : 32);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", ctx_r1.counts.sitzt, " / ", ctx_r1.poolSize, " sitzen");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.counts.sitzt / ctx_r1.poolSize * 100, "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r1.counts.unsicher / ctx_r1.poolSize * 100, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" sitzt ", ctx_r1.counts.sitzt);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" unsicher ", ctx_r1.counts.unsicher);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" neu ", ctx_r1.counts.neu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.mode === "schwaechen" && !ctx_r1.weakCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Noch einmal: ", ctx_r1.modeLabel, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.weakCount && ctx_r1.mode !== "schwaechen" ? 56 : -1);
} }
/** Falsch beantwortete Länder kommen in der dritten Runde danach wieder (zwei andere Länder dazwischen). */
const RETRY_GAP = 3;
/** Höchstens so viele Wiederholungen pro Land und Spiel, danach bleibt es im Lernstand als „unsicher“. */
const MAX_RETRIES = 3;
/** Größe eines „Schwächen üben“-Spiels. */
const WEAK_LIMIT = 20;
const LABELS = ['Land', 'Hauptstadt', 'EU-Mitglied', 'Euro'];
const MODES = [
    { id: '10', label: '10 Länder', hint: 'Schnelle Runde', size: 10 },
    { id: '20', label: '20 Länder', hint: 'Gründlich üben', size: 20 },
    { id: 'alle', label: 'Alle ' + countries.length + ' Länder', hint: 'Der ganze Kontinent', size: countries.length },
];
const byId = new Map(countries.map(c => [c.id, c]));
const yesNo = (v) => v === null ? '' : v ? 'Ja' : 'Nein';
export class App {
    constructor(zone, cdr) {
        this.zone = zone;
        this.cdr = cdr;
        this.map = mapData;
        this.modes = MODES;
        this.byId = byId;
        this.poolSize = countries.length;
        this.help = false;
        this.lifecycle = new AbortController();
        this.progress = new Progress();
        this.statusById = {};
        this.counts = { neu: 0, unsicher: 0, sitzt: 0 };
        this.smallStates = Object.entries(mapData.points).filter(([id]) => id !== '-99').map(([id, [x, y]]) => ({ id, x, y, name: byId.get(id)?.name ?? '' }));
        this.screen = 'menu';
        this.mode = '10';
        this.confirmReset = false;
        this.queue = [];
        this.retries = [];
        this.retryCount = new Map();
        this.current = null;
        this.kind = 'neu';
        this.round = 0;
        this.total = 0;
        this.newDone = 0;
        this.score = 0;
        this.history = [];
        this.mistakes = [];
        this.checked = false;
        this.answerCountry = '';
        this.answerCapital = '';
        this.answerEu = null;
        this.answerEuro = null;
        this.marks = [];
        this.roundScore = 0;
        this.retryScheduled = false;
        this.zoom = 1;
        this.dx = 0;
        this.dy = 0;
        this.drag = null;
        this.refreshStatus();
        const context = document.modelContext;
        if (context?.registerTool) {
            try {
                Promise.resolve(context.registerTool({ name: 'restart_europe_quiz', description: 'Start a fresh game in the current mode (10, 20 or all countries) and reset the score.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: false }, execute: (input) => { if (!input || typeof input !== 'object' || Object.keys(input).length)
                        throw new Error('Expected an empty object.'); return this.zone.run(() => { this.start(this.mode === 'schwaechen' && !this.weakCount ? '10' : this.mode); this.cdr.detectChanges(); return { round: 1, total: this.total, score: 0 }; }); } }, { signal: this.lifecycle.signal })).catch(() => { });
            }
            catch { }
        }
    }
    ngOnDestroy() { this.lifecycle.abort(); }
    get overview() { return this.screen !== 'play'; }
    get point() { return this.current ? mapData.points[this.current.id] : undefined; }
    get complete() { return !!this.answerCountry.trim() && !!this.answerCapital.trim() && this.answerEu !== null && this.answerEuro !== null; }
    get isLast() { return this.queue.length === 0 && this.retries.length === 0; }
    get started() { return this.total - this.queue.length; }
    get weakCount() { return Math.min(this.progress.weak().length, WEAK_LIMIT); }
    get modeLabel() { return this.mode === 'schwaechen' ? 'Schwächen üben' : MODES.find(m => m.id === this.mode).label; }
    get maxScore() { return this.history.length * 4; }
    get firstTry() { return this.history.filter(r => r.kind === 'neu' && r.score === 4).length; }
    get repeatCount() { return this.history.filter(r => r.kind !== 'neu').length; }
    get solvedCount() { return this.mistakes.filter(m => m.solved).length; }
    get rating() { const p = this.score / Math.max(1, this.maxScore); return p >= .8 ? 'Europa liegt dir!' : p >= .5 ? 'Gut unterwegs!' : 'Der Anfang ist gemacht!'; }
    get mapTransform() { return 'translate(' + (425 * (1 - this.zoom) + this.dx) + ',' + (345 * (1 - this.zoom) + this.dy) + ') scale(' + this.zoom + ')'; }
    /** Startet ein Spiel: wählt die Länder gewichtet nach Lernstand aus (unsichere und neue bevorzugt). */
    start(mode) {
        const pool = mode === 'schwaechen' ? this.progress.weak() : countries;
        const size = mode === 'schwaechen' ? WEAK_LIMIT : MODES.find(m => m.id === mode).size;
        if (!pool.length)
            return;
        this.progress.startGame();
        this.mode = mode;
        this.queue = this.progress.pick(pool, size);
        this.total = this.queue.length;
        this.retries = [];
        this.retryCount.clear();
        this.history = [];
        this.mistakes = [];
        this.score = 0;
        this.round = 0;
        this.newDone = 0;
        this.current = null;
        this.screen = 'play';
        this.confirmReset = false;
        this.begin(this.pickNext());
    }
    toMenu() { this.screen = 'menu'; this.current = null; this.resetMap(); }
    /**
     * Nächstes Land: fällige Wiederholungen zuerst, dann neue Länder. Sind keine neuen mehr übrig,
     * kommen offene Wiederholungen sofort – aber nie zweimal dasselbe Land hintereinander;
     * dafür wird notfalls eine kurze Zwischenrunde mit einem bereits gelösten Land eingeschoben.
     */
    pickNext() {
        const upcoming = this.round + 1, lastId = this.current?.id;
        const byDue = (list) => [...list].sort((a, b) => a.due - b.due);
        const takeRetry = (r) => { this.retries = this.retries.filter(x => x !== r); return { country: r.country, kind: 'wiederholung' }; };
        const due = byDue(this.retries.filter(r => r.due <= upcoming && r.country.id !== lastId));
        if (due.length)
            return takeRetry(due[0]);
        if (this.queue.length)
            return { country: this.queue.shift(), kind: 'neu' };
        const other = byDue(this.retries.filter(r => r.country.id !== lastId));
        if (other.length)
            return takeRetry(other[0]);
        if (!this.retries.length)
            return null;
        const lastAttempt = new Map(this.history.map(r => [r.country.id, r]));
        const fillers = [...lastAttempt.values()].filter(r => r.score === 4 && r.country.id !== lastId).map(r => r.country);
        if (fillers.length)
            return { country: fillers[Math.floor(Math.random() * fillers.length)], kind: 'zwischenrunde' };
        return takeRetry(this.retries[0]);
    }
    begin(next) { this.current = next.country; this.kind = next.kind; this.round++; this.clear(); this.focus('country'); }
    clear() { this.checked = false; this.answerCountry = ''; this.answerCapital = ''; this.answerEu = null; this.answerEuro = null; this.marks = []; this.retryScheduled = false; this.resetMap(); }
    check() { if (this.checked || !this.complete)
        return; this.evaluate(false); }
    skip() { if (this.checked)
        return; this.evaluate(true); }
    evaluate(skipped) {
        const c = this.current;
        this.marks = skipped ? ['wrong', 'wrong', 'wrong', 'wrong'] : [
            judge(this.answerCountry, countryNames(c), allCountryNames),
            judge(this.answerCapital, capitalNames(c), allCapitalNames),
            this.answerEu === c.eu ? 'ok' : 'wrong',
            this.answerEuro === c.euro ? 'ok' : 'wrong'
        ];
        this.roundScore = this.marks.filter(m => m !== 'wrong').length;
        this.score += this.roundScore;
        this.history.push({ country: c, kind: this.kind, marks: this.marks, score: this.roundScore, answers: skipped ? ['', '', '', ''] : [this.answerCountry.trim(), this.answerCapital.trim(), yesNo(this.answerEu), yesNo(this.answerEuro)] });
        if (this.kind === 'neu')
            this.newDone++;
        this.progress.record(c.id, this.marks, this.kind === 'zwischenrunde');
        this.refreshStatus();
        if (this.roundScore < 4) {
            const n = this.retryCount.get(c.id) ?? 0;
            if (n < MAX_RETRIES) {
                this.retries.push({ country: c, due: this.round + RETRY_GAP });
                this.retryCount.set(c.id, n + 1);
                this.retryScheduled = true;
            }
        }
        this.checked = true;
        this.focus('primary');
    }
    next() { if (!this.checked)
        return; const n = this.pickNext(); if (n)
        this.begin(n);
    else
        this.finish(); }
    /** Beendet das Spiel (auch vorzeitig) und sammelt alle Fehler mit den richtigen Antworten. */
    finish() {
        if (!this.history.length) {
            this.toMenu();
            return;
        }
        const groups = new Map();
        for (const r of this.history)
            groups.set(r.country.id, [...(groups.get(r.country.id) ?? []), r]);
        this.mistakes = [...groups.values()].flatMap(rounds => {
            const wrong = rounds.find(r => r.score < 4);
            if (!wrong)
                return [];
            const c = wrong.country, correct = [c.name, c.capital, yesNo(c.eu), yesNo(c.euro)];
            return [{ country: c, solved: rounds[rounds.length - 1].score === 4, lines: wrong.marks.flatMap((m, i) => m === 'wrong' ? [{ label: LABELS[i], given: wrong.answers[i], correct: correct[i] }] : []) }];
        });
        this.screen = 'done';
        this.current = null;
        this.resetMap();
    }
    resetProgress() { this.progress.reset(); this.refreshStatus(); this.confirmReset = false; }
    refreshStatus() { const map = {}; for (const c of countries)
        map[c.id] = this.progress.status(c.id); this.statusById = map; this.counts = this.progress.counts(); }
    focus(target) { setTimeout(() => (target === 'country' ? document.getElementById('country') : document.querySelector('.quiz-card .primary'))?.focus(), 50); }
    zoomBy(delta) { this.zoom = Math.max(1, Math.min(2.8, this.zoom + delta)); if (this.zoom === 1) {
        this.dx = 0;
        this.dy = 0;
    } }
    resetMap() { this.zoom = 1; this.dx = 0; this.dy = 0; }
    startPan(e) { if (this.zoom <= 1)
        return; this.drag = { x: e.clientX, y: e.clientY }; e.currentTarget.setPointerCapture(e.pointerId); }
    pan(e) { if (!this.drag)
        return; const factor = 850 / e.currentTarget.getBoundingClientRect().width; this.dx = Math.max(-600, Math.min(600, this.dx + (e.clientX - this.drag.x) * factor)); this.dy = Math.max(-500, Math.min(500, this.dy + (e.clientY - this.drag.y) * factor)); this.drag = { x: e.clientX, y: e.clientY }; }
    endPan() { this.drag = null; }
    static { this.ɵfac = function App_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || App)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 85, vars: 15, consts: [["href", "./", "aria-label", "Europa Kartenquiz", 1, "brand"], [1, "brand-icon"], [1, "brand-dot"], [1, "header-label"], [1, "help-button", 3, "click"], [1, "intro"], [1, "eyebrow"], [1, "session-badge"], [1, "instructions"], [1, "game-layout"], ["aria-label", "Stumme Europakarte", 1, "map-card"], [1, "map-top"], ["viewBox", "0 0 850 690", "role", "img", 1, "europe-map", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], ["id", "map-clip"], ["width", "850", "height", "690"], ["id", "sea", "width", "7", "height", "7", "patternUnits", "userSpaceOnUse"], ["cx", "1", "cy", "1", "r", "0.6", "fill", "#c5d5d5"], ["width", "850", "height", "690", "fill", "#edf3f2"], ["width", "850", "height", "690", "fill", "url(#sea)"], ["clip-path", "url(#map-clip)"], [1, "grid"], [1, "country", 3, "target"], ["x", "117", "y", "430", "transform", "rotate(-16 117 430)", 1, "sea-label"], ["x", "140", "y", "451", "transform", "rotate(-16 140 451)", 1, "sea-label"], ["x", "407", "y", "645", 1, "sea-label"], [1, "map-controls"], ["aria-label", "Karte vergr\u00F6\u00DFern", 3, "click", "disabled"], ["aria-label", "Karte verkleinern", 3, "click", "disabled"], ["aria-label", "Kartenansicht zur\u00FCcksetzen", 3, "click"], ["aria-hidden", "true", 1, "compass"], [1, "map-legend"], ["aria-label", "Quiz", 1, "quiz-card"], [1, "menu-screen"], [1, "results-screen"], [1, "footer-divider"], ["href", "https://european-union.europa.eu/institutions-law-budget/euro/countries-using-euro_en", "target", "_blank", "rel", "noopener"], ["href", "https://www.naturalearthdata.com/about/terms-of-use/", "target", "_blank", "rel", "noopener"], [3, "click"], [1, "country"], ["r", "4.5", 1, "mini"], ["r", "12", 1, "marker-ring"], ["r", "5", 1, "marker"], ["data-status", "sitzt", 1, "legend-mark"], ["data-status", "unsicher", 1, "legend-mark"], ["data-status", "neu", 1, "legend-mark"], [1, "legend-mark"], [1, "quiz-subtitle"], [1, "modes"], [1, "mode"], [1, "mode", "weak", 3, "click", "disabled"], [1, "learn-state"], [1, "learn-head"], [1, "learn-bar"], ["data-status", "sitzt"], ["data-status", "unsicher"], [1, "learn-legend"], ["data-status", "neu"], [1, "privacy-note"], [1, "mode", 3, "click"], [1, "link"], [1, "confirm"], [1, "link", 3, "click"], [1, "round-header"], [1, "muted"], [1, "score"], [1, "progress-track"], [1, "kind-chip"], [3, "ngSubmit"], ["for", "country", 1, "field-label"], [1, "number"], ["id", "country", "name", "country", "placeholder", "Land eingeben \u2026", "autocomplete", "off", 3, "ngModelChange", "ngModel", "disabled"], [1, "answer-result", 3, "wrong"], ["for", "capital", 1, "field-label"], ["id", "capital", "name", "capital", "placeholder", "Hauptstadt eingeben \u2026", "autocomplete", "off", 3, "ngModelChange", "ngModel", "disabled"], [1, "choices"], ["type", "button", 3, "click", "disabled"], [1, "fact"], ["aria-live", "polite", 1, "sr-only"], ["type", "submit", 1, "primary", 3, "disabled"], [1, "secondary-actions"], ["type", "button", 1, "skip", 3, "click"], [1, "answer-result"], [1, "typo-note"], [1, "dot"], [1, "trophy"], [1, "big-score"], [1, "result-stats"], [1, "learn-state", "compact"], [1, "primary", 3, "click", "disabled"], [1, "secondary"], [1, "skip", 3, "click"], [1, "mistakes"], [1, "mistake"], [1, "mistake-head"], [1, "mistake-line"], [1, "secondary", 3, "click"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header")(1, "a", 0)(2, "span", 1);
            i0.ɵɵtext(3, "\u25CE");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " europa");
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6, ".");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "span", 3);
            i0.ɵɵtext(8, "DAS KARTENQUIZ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵlistener("click", function App_Template_button_click_9_listener() { return ctx.help = !ctx.help; });
            i0.ɵɵtext(10, "\u24D8 ");
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "So geht\u2019s");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "main")(14, "div", 5)(15, "div")(16, "div", 6);
            i0.ɵɵtext(17, "ENTDECKE DEIN EUROPA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "h1");
            i0.ɵɵtext(19, "Wie gut kennst du unseren Kontinent?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Ein Land. Vier Antworten. Zeig, was du wei\u00DFt.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 7)(23, "span");
            i0.ɵɵtext(24, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(26, App_Conditional_26_Template, 11, 1, "aside", 8);
            i0.ɵɵelementStart(27, "div", 9)(28, "section", 10)(29, "div", 11)(30, "span");
            i0.ɵɵelement(31, "i");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "span");
            i0.ɵɵtext(34, "EUROPA");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(35, "svg", 12);
            i0.ɵɵlistener("pointerdown", function App_Template_svg_pointerdown_35_listener($event) { return ctx.startPan($event); })("pointermove", function App_Template_svg_pointermove_35_listener($event) { return ctx.pan($event); })("pointerup", function App_Template_svg_pointerup_35_listener() { return ctx.endPan(); })("pointercancel", function App_Template_svg_pointercancel_35_listener() { return ctx.endPan(); });
            i0.ɵɵelementStart(36, "defs")(37, "clipPath", 13);
            i0.ɵɵelement(38, "rect", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "pattern", 15);
            i0.ɵɵelement(40, "circle", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(41, "rect", 17)(42, "rect", 18);
            i0.ɵɵelementStart(43, "g", 19)(44, "g");
            i0.ɵɵelement(45, "path", 20);
            i0.ɵɵrepeaterCreate(46, App_For_47_Template, 2, 5, ":svg:path", 21, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵconditionalCreate(48, App_Conditional_48_Template, 2, 0)(49, App_Conditional_49_Template, 2, 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "text", 22);
            i0.ɵɵtext(51, "ATLANTISCHER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "text", 23);
            i0.ɵɵtext(53, "OZEAN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "text", 24);
            i0.ɵɵtext(55, "MITTELMEER");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(56, "div", 25)(57, "button", 26);
            i0.ɵɵlistener("click", function App_Template_button_click_57_listener() { return ctx.zoomBy(0.3); });
            i0.ɵɵtext(58, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "button", 27);
            i0.ɵɵlistener("click", function App_Template_button_click_59_listener() { return ctx.zoomBy(-0.3); });
            i0.ɵɵtext(60, "\u2212");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "button", 28);
            i0.ɵɵlistener("click", function App_Template_button_click_61_listener() { return ctx.resetMap(); });
            i0.ɵɵtext(62, "\u21BA");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "span", 29);
            i0.ɵɵtext(64, "N");
            i0.ɵɵelement(65, "br");
            i0.ɵɵtext(66, "\u2191");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(67, App_Conditional_67_Template, 7, 0, "div", 30)(68, App_Conditional_68_Template, 3, 0, "div", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "section", 31);
            i0.ɵɵconditionalCreate(70, App_Conditional_70_Template, 40, 12, "div", 32)(71, App_Conditional_71_Template, 61, 47)(72, App_Conditional_72_Template, 59, 23, "div", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(73, "footer")(74, "span");
            i0.ɵɵtext(75);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "span");
            i0.ɵɵtext(77, "Stand: September 2026 ");
            i0.ɵɵelementStart(78, "span", 34);
            i0.ɵɵtext(79, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "a", 35);
            i0.ɵɵtext(81, "EU & Euro");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(82, " \u00B7 ");
            i0.ɵɵelementStart(83, "a", 36);
            i0.ɵɵtext(84, "Karte: Natural Earth");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵattribute("aria-expanded", ctx.help);
            i0.ɵɵadvance(16);
            i0.ɵɵtextInterpolate1(" ", ctx.screen === "play" ? ctx.modeLabel : ctx.counts.sitzt + " von " + ctx.poolSize + " L\u00E4ndern sitzen");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.help ? 26 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.overview ? "DEIN LERNSTAND" : "STUMME KARTE");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("overview", ctx.overview);
            i0.ɵɵattribute("aria-label", ctx.overview ? "Europakarte mit deinem Lernstand" : "Europakarte mit einem gr\u00FCn markierten gesuchten Land");
            i0.ɵɵadvance(9);
            i0.ɵɵattribute("transform", ctx.mapTransform);
            i0.ɵɵadvance();
            i0.ɵɵattribute("d", ctx.map.grid);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.map.shapes);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.overview ? 48 : ctx.point ? 49 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("disabled", ctx.zoom >= 2.8);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.zoom <= 1);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.overview ? 67 : 68);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.screen === "menu" ? 70 : ctx.screen === "play" && ctx.current ? 71 : ctx.screen === "done" ? 72 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.poolSize, " L\u00E4nder \u00B7 4 Fragen \u00B7 Ganz Europa");
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [FormsModule], template: `
<header><a class="brand" href="./" aria-label="Europa Kartenquiz"><span class="brand-icon">◎</span> europa<span class="brand-dot">.</span></a><span class="header-label">DAS KARTENQUIZ</span><button class="help-button" (click)="help = !help" [attr.aria-expanded]="help">ⓘ <span>So geht’s</span></button></header>
<main>
 <div class="intro"><div><div class="eyebrow">ENTDECKE DEIN EUROPA</div><h1>Wie gut kennst du unseren Kontinent?</h1><p>Ein Land. Vier Antworten. Zeig, was du weißt.</p></div><div class="session-badge"><span>✦</span> {{screen === 'play' ? modeLabel : counts.sitzt + ' von ' + poolSize + ' Ländern sitzen'}}</div></div>
 @if(help){<aside class="instructions"><strong>So spielst du</strong>
  <p>Wähle einen Modus: 10, 20 oder alle Länder – oder übe gezielt deine Schwächen. Erkenne das grün markierte Land, gib Land und Hauptstadt ein und entscheide, ob es zur EU gehört und den Euro verwendet. Jede richtige Antwort gibt einen Punkt; kleine Tippfehler werden akzeptiert. Kleine Staaten werden durch einen Punkt markiert. Du kannst die Karte vergrößern und verschieben.</p>
  <p>Länder mit Fehlern kommen nach zwei, drei Runden noch einmal, bis sie sitzen. Dein Lernstand wird nur in diesem Browser gespeichert: Unsichere Länder kommen in späteren Spielen öfter, gelernte in wachsenden Abständen. Die Karte im Menü zeigt, was schon sitzt.</p>
  <p>{{poolSize}} Länder im Pool, einschließlich Kosovo und der transkontinentalen bzw. dem europäischen Raum zugeordneten Staaten Türkei, Russland, Armenien, Aserbaidschan und Georgien. Euro-Nutzung ist nicht dasselbe wie Mitgliedschaft im Euroraum.</p>
  <button (click)="help=false">Verstanden</button></aside>}
 <div class="game-layout">
 <section class="map-card" aria-label="Stumme Europakarte"><div class="map-top"><span><i></i> {{overview ? 'DEIN LERNSTAND' : 'STUMME KARTE'}}</span><span>EUROPA</span></div>
 <svg class="europe-map" [class.overview]="overview" viewBox="0 0 850 690" role="img" [attr.aria-label]="overview ? 'Europakarte mit deinem Lernstand' : 'Europakarte mit einem grün markierten gesuchten Land'" (pointerdown)="startPan($event)" (pointermove)="pan($event)" (pointerup)="endPan()" (pointercancel)="endPan()">
 <defs><clipPath id="map-clip"><rect width="850" height="690"/></clipPath><pattern id="sea" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.6" fill="#c5d5d5"/></pattern></defs><rect width="850" height="690" fill="#edf3f2"/><rect width="850" height="690" fill="url(#sea)"/><g clip-path="url(#map-clip)"><g [attr.transform]="mapTransform"><path [attr.d]="map.grid" class="grid"/>
 @for(shape of map.shapes;track $index){<path [attr.d]="shape.d" class="country" [class.target]="!overview && shape.id===current?.id" [attr.data-status]="overview ? statusById[shape.id] : null">@if(overview && byId.get(shape.id); as c){<title>{{c.name}} · {{c.capital}} · {{statusById[c.id]}}</title>}</path>}
 @if(overview){@for(s of smallStates;track s.id){<circle [attr.cx]="s.x" [attr.cy]="s.y" r="4.5" class="mini" [attr.data-status]="statusById[s.id]"><title>{{s.name}} · {{statusById[s.id]}}</title></circle>}}
 @else if(point){<circle [attr.cx]="point[0]" [attr.cy]="point[1]" r="12" class="marker-ring"/><circle [attr.cx]="point[0]" [attr.cy]="point[1]" r="5" class="marker"/>}
 </g></g><text x="117" y="430" class="sea-label" transform="rotate(-16 117 430)">ATLANTISCHER</text><text x="140" y="451" class="sea-label" transform="rotate(-16 140 451)">OZEAN</text><text x="407" y="645" class="sea-label">MITTELMEER</text></svg>
 <div class="map-controls"><button (click)="zoomBy(.3)" aria-label="Karte vergrößern" [disabled]="zoom>=2.8">+</button><button (click)="zoomBy(-.3)" aria-label="Karte verkleinern" [disabled]="zoom<=1">−</button><button (click)="resetMap()" aria-label="Kartenansicht zurücksetzen">↺</button></div><span class="compass" aria-hidden="true">N<br>↑</span>
 @if(overview){<div class="map-legend"><span class="legend-mark" data-status="sitzt"></span> sitzt <span class="legend-mark" data-status="unsicher"></span> unsicher <span class="legend-mark" data-status="neu"></span> neu</div>}
 @else{<div class="map-legend"><span class="legend-mark"></span> Welches Land ist markiert?</div>}
 </section>
 <section class="quiz-card" aria-label="Quiz">
 @if(screen==='menu'){
 <div class="menu-screen">
  <span class="eyebrow">SPIELMODUS</span>
  <h2>Wie viele Länder?</h2>
  <p class="quiz-subtitle">Länder mit Fehlern kommen nach zwei, drei Runden noch einmal – so lange, bis sie sitzen.</p>
  <div class="modes">
   @for(m of modes;track m.id){<button class="mode" (click)="start(m.id)"><span><strong>{{m.label}}</strong><small>{{m.hint}}</small></span><i>→</i></button>}
   <button class="mode weak" (click)="start('schwaechen')" [disabled]="!weakCount"><span><strong>Schwächen üben</strong><small>{{weakCount ? weakCount + (weakCount===1 ? ' unsicheres Land' : ' unsichere Länder') : 'Noch keine – spiel zuerst eine Runde'}}</small></span><i>→</i></button>
  </div>
  <div class="learn-state">
   <div class="learn-head"><strong>Dein Lernstand</strong><span>{{counts.sitzt}} / {{poolSize}} sitzen</span></div>
   <div class="learn-bar"><i data-status="sitzt" [style.width.%]="counts.sitzt/poolSize*100"></i><i data-status="unsicher" [style.width.%]="counts.unsicher/poolSize*100"></i></div>
   <div class="learn-legend"><span><i data-status="sitzt"></i> sitzt {{counts.sitzt}}</span><span><i data-status="unsicher"></i> unsicher {{counts.unsicher}}</span><span><i data-status="neu"></i> neu {{counts.neu}}</span></div>
   @if(counts.neu < poolSize){@if(!confirmReset){<button class="link" (click)="confirmReset=true">Lernstand zurücksetzen</button>}@else{<div class="confirm">Wirklich alles zurücksetzen? <button (click)="resetProgress()">Ja, zurücksetzen</button> <button (click)="confirmReset=false">Abbrechen</button></div>}}
   <p class="privacy-note">Wird nur in diesem Browser gespeichert.</p>
  </div>
 </div>
 }@else if(screen==='play' && current){
 <div class="round-header"><span>RUNDE {{round}} <span class="muted">· Land {{started}} / {{total}}@if(retries.length){ · {{retries.length}} Wdh. offen}</span></span><span class="score">✦ {{score}} Punkte</span></div><div class="progress-track"><div [style.width.%]="newDone/total*100"></div></div>
 @if(kind!=='neu'){<div class="kind-chip">{{kind==='wiederholung' ? '↻ Wiederholung' : '↺ Kurze Zwischenrunde'}}</div>}
 <h2>{{checked ? (roundScore===4?'Volltreffer!':'Wieder etwas gelernt.') : 'Welches Land ist das?'}}</h2><p class="quiz-subtitle">{{checked ? roundScore+' von 4 Antworten richtig'+(retryScheduled?' – kommt gleich noch einmal.':'') : 'Schau auf die markierte Fläche in der Karte.'}}</p>
 <form (ngSubmit)="checked ? next() : check()">
 <label class="field-label" for="country"><span class="number">01</span> Das Land</label><input id="country" name="country" [(ngModel)]="answerCountry" placeholder="Land eingeben …" autocomplete="off" [disabled]="checked" [class.correct]="checked&&marks[0]!=='wrong'" [class.incorrect]="checked&&marks[0]==='wrong'"/>
 @if(checked){<p class="answer-result" [class.wrong]="marks[0]==='wrong'">{{marks[0]==='wrong'?'↳':'✓'}} {{current.name}}@if(marks[0]==='typo'){<span class="typo-note"> · achte auf die Schreibweise</span>}</p>}
 <label class="field-label" for="capital"><span class="number">02</span> Die Hauptstadt</label><input id="capital" name="capital" [(ngModel)]="answerCapital" placeholder="Hauptstadt eingeben …" autocomplete="off" [disabled]="checked" [class.correct]="checked&&marks[1]!=='wrong'" [class.incorrect]="checked&&marks[1]==='wrong'"/>
 @if(checked){<p class="answer-result" [class.wrong]="marks[1]==='wrong'">{{marks[1]==='wrong'?'↳':'✓'}} {{current.capital}}@if(marks[1]==='typo'){<span class="typo-note"> · achte auf die Schreibweise</span>}</p>}
 <fieldset><legend><span class="number">03</span> Mitglied der Europäischen Union?</legend><div class="choices"><button type="button" [class.selected]="answerEu===true" [disabled]="checked" (click)="answerEu=true" [attr.aria-pressed]="answerEu===true">Ja, in der EU</button><button type="button" [class.selected]="answerEu===false" [disabled]="checked" (click)="answerEu=false" [attr.aria-pressed]="answerEu===false">Nein</button></div>@if(checked){<p class="answer-result" [class.wrong]="marks[2]==='wrong'">{{marks[2]==='wrong'?'↳':'✓'}} {{current.eu?'EU-Mitglied':'Kein EU-Mitglied'}}</p>}</fieldset>
 <fieldset><legend><span class="number">04</span> Verwendet das Land den Euro?</legend><div class="choices"><button type="button" [class.selected]="answerEuro===true" [disabled]="checked" (click)="answerEuro=true" [attr.aria-pressed]="answerEuro===true">€ Ja, den Euro</button><button type="button" [class.selected]="answerEuro===false" [disabled]="checked" (click)="answerEuro=false" [attr.aria-pressed]="answerEuro===false">Nein</button></div>@if(checked){<p class="answer-result" [class.wrong]="marks[3]==='wrong'">{{marks[3]==='wrong'?'↳':'✓'}} {{current.euro?'Verwendet den Euro':'Andere Währung'}}</p>}</fieldset>
 @if(checked&&current.note){<p class="fact">{{current.note}}</p>}
 <div aria-live="polite" class="sr-only">{{checked?current.name+'. '+roundScore+' von 4 Punkten.':''}}</div>
 <button class="primary" type="submit" [disabled]="!checked&&!complete">{{checked?(isLast?'Ergebnis ansehen':'Nächstes Land'):'Antworten prüfen'}} <span>→</span></button>
 <div class="secondary-actions">@if(!checked){<button type="button" class="skip" (click)="skip()">Diese Runde überspringen</button><span class="dot">·</span>}<button type="button" class="skip" (click)="finish()">Spiel beenden</button></div>
 </form>
 }@else if(screen==='done'){
 <div class="results-screen"><span class="eyebrow">DEINE EUROPA-REISE</span><div class="trophy">✦</div><h2>{{rating}}</h2><p>{{newDone}} {{newDone===1?'Land':'Länder'}} in {{history.length}} Runden geübt.</p><div class="big-score">{{score}}<span> / {{maxScore}}</span></div><p>richtige Antworten</p>
  <div class="result-stats"><div><strong>{{firstTry}}</strong><span>auf Anhieb komplett richtig</span></div><div><strong>{{repeatCount}}</strong><span>Wiederholungen</span></div><div><strong>{{solvedCount}} / {{mistakes.length}}</strong><span>Fehler ausgebessert</span></div></div>
  @if(mistakes.length){<h3>Das solltest du dir merken</h3><div class="mistakes">@for(m of mistakes;track m.country.id){<div class="mistake"><div class="mistake-head"><strong>{{m.country.name}}</strong><span [class.solved]="m.solved">{{m.solved?'✓ in der Wiederholung gelöst':'noch unsicher'}}</span></div>@for(l of m.lines;track l.label){<div class="mistake-line"><span>{{l.label}}</span><span>@if(l.given){<s>{{l.given}}</s> → }<b>{{l.correct}}</b></span></div>}</div>}</div>}
  @else{<p class="fact">Keine Fehler – stark!</p>}
  <div class="learn-state compact"><div class="learn-head"><strong>Dein Lernstand</strong><span>{{counts.sitzt}} / {{poolSize}} sitzen</span></div><div class="learn-bar"><i data-status="sitzt" [style.width.%]="counts.sitzt/poolSize*100"></i><i data-status="unsicher" [style.width.%]="counts.unsicher/poolSize*100"></i></div><div class="learn-legend"><span><i data-status="sitzt"></i> sitzt {{counts.sitzt}}</span><span><i data-status="unsicher"></i> unsicher {{counts.unsicher}}</span><span><i data-status="neu"></i> neu {{counts.neu}}</span></div></div>
  <button class="primary" (click)="start(mode)" [disabled]="mode==='schwaechen'&&!weakCount">Noch einmal: {{modeLabel}} <span>↻</span></button>
  @if(weakCount && mode!=='schwaechen'){<button class="secondary" (click)="start('schwaechen')">Schwächen üben ({{weakCount}}) <span>→</span></button>}
  <button class="skip" (click)="toMenu()">Modus wechseln</button>
 </div>
 }
 </section></div>
 <footer><span>{{poolSize}} Länder · 4 Fragen · Ganz Europa</span><span>Stand: September 2026 <span class="footer-divider">/</span> <a href="https://european-union.europa.eu/institutions-law-budget/euro/countries-using-euro_en" target="_blank" rel="noopener">EU & Euro</a> · <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Karte: Natural Earth</a></span></footer>
</main>` }]
    }], () => [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "main.ts", lineNumber: 98 }); })();
bootstrapApplication(App).catch(console.error);
