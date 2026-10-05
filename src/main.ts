import {Component,NgZone,OnDestroy,ChangeDetectorRef} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {countries,Country} from './countries';
import {mapData} from './map-data';
import {Progress,Mark,Status,judge,countryNames,capitalNames,allCountryNames,allCapitalNames} from './learning';

type ModeId = '10' | '20' | 'alle' | 'schwaechen';
type Kind = 'neu' | 'wiederholung' | 'zwischenrunde';
interface RoundRecord { country: Country; kind: Kind; marks: Mark[]; answers: string[]; score: number }
interface Retry { country: Country; due: number }
interface Mistake { country: Country; lines: {label: string; given: string; correct: string}[]; solved: boolean }

/** Falsch beantwortete Länder kommen in der dritten Runde danach wieder (zwei andere Länder dazwischen). */
const RETRY_GAP = 3;
/** Höchstens so viele Wiederholungen pro Land und Spiel, danach bleibt es im Lernstand als „unsicher“. */
const MAX_RETRIES = 3;
/** Größe eines „Schwächen üben“-Spiels. */
const WEAK_LIMIT = 20;
const LABELS = ['Land','Hauptstadt','EU-Mitglied','Euro'];
const MODES: {id: ModeId; label: string; hint: string; size: number}[] = [
 {id:'10',label:'10 Länder',hint:'Schnelle Runde',size:10},
 {id:'20',label:'20 Länder',hint:'Gründlich üben',size:20},
 {id:'alle',label:'Alle '+countries.length+' Länder',hint:'Der ganze Kontinent',size:countries.length},
];
const byId = new Map(countries.map(c => [c.id, c] as const));
const yesNo = (v: boolean | null) => v === null ? '' : v ? 'Ja' : 'Nein';

@Component({selector:'app-root',standalone:true,imports:[FormsModule],template:`
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
</main>`})
export class App implements OnDestroy {
 map=mapData; modes=MODES; byId=byId; poolSize=countries.length; help=false; lifecycle=new AbortController();
 progress=new Progress(); statusById:Partial<Record<string,Status>>={}; counts:Record<Status,number>={neu:0,unsicher:0,sitzt:0};
 smallStates=Object.entries(mapData.points as Record<string,number[]>).filter(([id])=>id!=='-99').map(([id,[x,y]])=>({id,x,y,name:byId.get(id)?.name??''}));
 screen:'menu'|'play'|'done'='menu'; mode:ModeId='10'; confirmReset=false;
 queue:Country[]=[]; retries:Retry[]=[]; retryCount=new Map<string,number>(); current:Country|null=null; kind:Kind='neu';
 round=0; total=0; newDone=0; score=0; history:RoundRecord[]=[]; mistakes:Mistake[]=[];
 checked=false; answerCountry='';answerCapital='';answerEu:boolean|null=null;answerEuro:boolean|null=null;marks:Mark[]=[];roundScore=0;retryScheduled=false;
 zoom=1;dx=0;dy=0;drag:{x:number;y:number}|null=null;

 constructor(private zone:NgZone,private cdr:ChangeDetectorRef){
  this.refreshStatus();
  const context=(document as any).modelContext;
  if(context?.registerTool){try{Promise.resolve(context.registerTool({name:'restart_europe_quiz',description:'Start a fresh game in the current mode (10, 20 or all countries) and reset the score.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute:(input:unknown)=>{if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('Expected an empty object.');return this.zone.run(()=>{this.start(this.mode==='schwaechen'&&!this.weakCount?'10':this.mode);this.cdr.detectChanges();return{round:1,total:this.total,score:0};});}},{signal:this.lifecycle.signal})).catch(()=>{});}catch{}}
 }
 ngOnDestroy(){this.lifecycle.abort();}

 get overview(){return this.screen!=='play';}
 get point(){return this.current?(mapData.points as Record<string,number[]>)[this.current.id]:undefined;}
 get complete(){return !!this.answerCountry.trim()&&!!this.answerCapital.trim()&&this.answerEu!==null&&this.answerEuro!==null;}
 get isLast(){return this.queue.length===0&&this.retries.length===0;}
 get started(){return this.total-this.queue.length;}
 get weakCount(){return Math.min(this.progress.weak().length,WEAK_LIMIT);}
 get modeLabel(){return this.mode==='schwaechen'?'Schwächen üben':MODES.find(m=>m.id===this.mode)!.label;}
 get maxScore(){return this.history.length*4;}
 get firstTry(){return this.history.filter(r=>r.kind==='neu'&&r.score===4).length;}
 get repeatCount(){return this.history.filter(r=>r.kind!=='neu').length;}
 get solvedCount(){return this.mistakes.filter(m=>m.solved).length;}
 get rating(){const p=this.score/Math.max(1,this.maxScore);return p>=.8?'Europa liegt dir!':p>=.5?'Gut unterwegs!':'Der Anfang ist gemacht!';}
 get mapTransform(){return 'translate('+(425*(1-this.zoom)+this.dx)+','+(345*(1-this.zoom)+this.dy)+') scale('+this.zoom+')';}

 /** Startet ein Spiel: wählt die Länder gewichtet nach Lernstand aus (unsichere und neue bevorzugt). */
 start(mode:ModeId){
  const pool=mode==='schwaechen'?this.progress.weak():countries;
  const size=mode==='schwaechen'?WEAK_LIMIT:MODES.find(m=>m.id===mode)!.size;
  if(!pool.length)return;
  this.progress.startGame();
  this.mode=mode; this.queue=this.progress.pick(pool,size); this.total=this.queue.length;
  this.retries=[]; this.retryCount.clear(); this.history=[]; this.mistakes=[]; this.score=0; this.round=0; this.newDone=0; this.current=null;
  this.screen='play'; this.confirmReset=false;
  this.begin(this.pickNext()!);
 }
 toMenu(){this.screen='menu';this.current=null;this.resetMap();}

 /**
  * Nächstes Land: fällige Wiederholungen zuerst, dann neue Länder. Sind keine neuen mehr übrig,
  * kommen offene Wiederholungen sofort – aber nie zweimal dasselbe Land hintereinander;
  * dafür wird notfalls eine kurze Zwischenrunde mit einem bereits gelösten Land eingeschoben.
  */
 pickNext():{country:Country;kind:Kind}|null{
  const upcoming=this.round+1, lastId=this.current?.id;
  const byDue=(list:Retry[])=>[...list].sort((a,b)=>a.due-b.due);
  const takeRetry=(r:Retry)=>{this.retries=this.retries.filter(x=>x!==r);return{country:r.country,kind:'wiederholung' as Kind};};
  const due=byDue(this.retries.filter(r=>r.due<=upcoming&&r.country.id!==lastId));
  if(due.length)return takeRetry(due[0]);
  if(this.queue.length)return{country:this.queue.shift()!,kind:'neu'};
  const other=byDue(this.retries.filter(r=>r.country.id!==lastId));
  if(other.length)return takeRetry(other[0]);
  if(!this.retries.length)return null;
  const lastAttempt=new Map(this.history.map(r=>[r.country.id,r] as const));
  const fillers=[...lastAttempt.values()].filter(r=>r.score===4&&r.country.id!==lastId).map(r=>r.country);
  if(fillers.length)return{country:fillers[Math.floor(Math.random()*fillers.length)],kind:'zwischenrunde'};
  return takeRetry(this.retries[0]);
 }
 begin(next:{country:Country;kind:Kind}){this.current=next.country;this.kind=next.kind;this.round++;this.clear();this.focus('country');}
 clear(){this.checked=false;this.answerCountry='';this.answerCapital='';this.answerEu=null;this.answerEuro=null;this.marks=[];this.retryScheduled=false;this.resetMap();}
 check(){if(this.checked||!this.complete)return;this.evaluate(false);}
 skip(){if(this.checked)return;this.evaluate(true);}
 evaluate(skipped:boolean){
  const c=this.current!;
  this.marks=skipped?['wrong','wrong','wrong','wrong']:[
   judge(this.answerCountry,countryNames(c),allCountryNames),
   judge(this.answerCapital,capitalNames(c),allCapitalNames),
   this.answerEu===c.eu?'ok':'wrong',
   this.answerEuro===c.euro?'ok':'wrong'];
  this.roundScore=this.marks.filter(m=>m!=='wrong').length;
  this.score+=this.roundScore;
  this.history.push({country:c,kind:this.kind,marks:this.marks,score:this.roundScore,answers:skipped?['','','','']:[this.answerCountry.trim(),this.answerCapital.trim(),yesNo(this.answerEu),yesNo(this.answerEuro)]});
  if(this.kind==='neu')this.newDone++;
  this.progress.record(c.id,this.marks,this.kind==='zwischenrunde');
  this.refreshStatus();
  if(this.roundScore<4){const n=this.retryCount.get(c.id)??0;if(n<MAX_RETRIES){this.retries.push({country:c,due:this.round+RETRY_GAP});this.retryCount.set(c.id,n+1);this.retryScheduled=true;}}
  this.checked=true;
  this.focus('primary');
 }
 next(){if(!this.checked)return;const n=this.pickNext();if(n)this.begin(n);else this.finish();}
 /** Beendet das Spiel (auch vorzeitig) und sammelt alle Fehler mit den richtigen Antworten. */
 finish(){
  if(!this.history.length){this.toMenu();return;}
  const groups=new Map<string,RoundRecord[]>();
  for(const r of this.history)groups.set(r.country.id,[...(groups.get(r.country.id)??[]),r]);
  this.mistakes=[...groups.values()].flatMap(rounds=>{
   const wrong=rounds.find(r=>r.score<4);if(!wrong)return[];
   const c=wrong.country, correct=[c.name,c.capital,yesNo(c.eu),yesNo(c.euro)];
   return[{country:c,solved:rounds[rounds.length-1].score===4,lines:wrong.marks.flatMap((m,i)=>m==='wrong'?[{label:LABELS[i],given:wrong.answers[i],correct:correct[i]}]:[])}];
  });
  this.screen='done';this.current=null;this.resetMap();
 }
 resetProgress(){this.progress.reset();this.refreshStatus();this.confirmReset=false;}
 refreshStatus(){const map:Partial<Record<string,Status>>={};for(const c of countries)map[c.id]=this.progress.status(c.id);this.statusById=map;this.counts=this.progress.counts();}
 focus(target:'country'|'primary'){setTimeout(()=>(target==='country'?document.getElementById('country'):document.querySelector<HTMLElement>('.quiz-card .primary'))?.focus(),50);}

 zoomBy(delta:number){this.zoom=Math.max(1,Math.min(2.8,this.zoom+delta));if(this.zoom===1){this.dx=0;this.dy=0;}}
 resetMap(){this.zoom=1;this.dx=0;this.dy=0;}
 startPan(e:PointerEvent){if(this.zoom<=1)return;this.drag={x:e.clientX,y:e.clientY};(e.currentTarget as SVGElement).setPointerCapture(e.pointerId);}
 pan(e:PointerEvent){if(!this.drag)return;const factor=850/(e.currentTarget as SVGElement).getBoundingClientRect().width;this.dx=Math.max(-600,Math.min(600,this.dx+(e.clientX-this.drag.x)*factor));this.dy=Math.max(-500,Math.min(500,this.dy+(e.clientY-this.drag.y)*factor));this.drag={x:e.clientX,y:e.clientY};}
 endPan(){this.drag=null;}
}
bootstrapApplication(App).catch(console.error);
