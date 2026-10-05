const rows = [
    ['008', 'Albanien', 'Tirana', false, false], ['020', 'Andorra', 'Andorra la Vella', false, true], ['040', 'Österreich', 'Wien', true, true], ['056', 'Belgien', 'Brüssel', true, true], ['070', 'Bosnien und Herzegowina', 'Sarajevo', false, false], ['100', 'Bulgarien', 'Sofia', true, true], ['112', 'Belarus', 'Minsk', false, false], ['191', 'Kroatien', 'Zagreb', true, true], ['196', 'Zypern', 'Nikosia', true, true], ['203', 'Tschechien', 'Prag', true, false], ['208', 'Dänemark', 'Kopenhagen', true, false], ['233', 'Estland', 'Tallinn', true, true], ['246', 'Finnland', 'Helsinki', true, true], ['250', 'Frankreich', 'Paris', true, true], ['276', 'Deutschland', 'Berlin', true, true], ['300', 'Griechenland', 'Athen', true, true], ['348', 'Ungarn', 'Budapest', true, false], ['352', 'Island', 'Reykjavík', false, false], ['372', 'Irland', 'Dublin', true, true], ['380', 'Italien', 'Rom', true, true], ['428', 'Lettland', 'Riga', true, true], ['438', 'Liechtenstein', 'Vaduz', false, false], ['440', 'Litauen', 'Vilnius', true, true], ['442', 'Luxemburg', 'Luxemburg', true, true], ['470', 'Malta', 'Valletta', true, true], ['498', 'Moldau', 'Chișinău', false, false], ['492', 'Monaco', 'Monaco', false, true], ['499', 'Montenegro', 'Podgorica', false, true], ['528', 'Niederlande', 'Amsterdam', true, true], ['578', 'Norwegen', 'Oslo', false, false], ['616', 'Polen', 'Warschau', true, false], ['620', 'Portugal', 'Lissabon', true, true], ['642', 'Rumänien', 'Bukarest', true, false], ['643', 'Russland', 'Moskau', false, false], ['674', 'San Marino', 'San Marino', false, true], ['688', 'Serbien', 'Belgrad', false, false], ['703', 'Slowakei', 'Bratislava', true, true], ['705', 'Slowenien', 'Ljubljana', true, true], ['724', 'Spanien', 'Madrid', true, true], ['752', 'Schweden', 'Stockholm', true, false], ['756', 'Schweiz', 'Bern', false, false], ['792', 'Türkei', 'Ankara', false, false], ['804', 'Ukraine', 'Kyjiw', false, false], ['807', 'Nordmazedonien', 'Skopje', false, false], ['826', 'Vereinigtes Königreich', 'London', false, false], ['336', 'Vatikanstadt', 'Vatikanstadt', false, true], ['-99', 'Kosovo', 'Pristina', false, true], ['051', 'Armenien', 'Jerewan', false, false], ['031', 'Aserbaidschan', 'Baku', false, false], ['268', 'Georgien', 'Tiflis', false, false]
];
export const countries = rows.map(([id, name, capital, eu, euro]) => ({ id, name, capital, eu, euro }));
const extras = {
    '070': { aliases: ['Bosnien-Herzegowina', 'Bosnien'] },
    '112': { aliases: ['Weißrussland'] },
    '196': { aliases: ['Republik Zypern'], capitals: ['Nicosia', 'Lefkosia'] },
    '203': { aliases: ['Tschechische Republik'] },
    '031': { aliases: ['Aserbeidschan'] },
    '051': { capitals: ['Eriwan', 'Yerevan'] },
    '268': { capitals: ['Tbilisi'] },
    '336': { aliases: ['Vatikan'], capitals: ['Vatikan'] },
    '442': { capitals: ['Luxemburg-Stadt'] },
    '498': { aliases: ['Moldawien', 'Republik Moldau'], capitals: ['Kischinau'] },
    '528': { aliases: ['Holland'], note: 'Amsterdam ist die Hauptstadt; der Regierungssitz ist Den Haag.' },
    '643': { aliases: ['Russische Föderation'] },
    '792': { aliases: ['Türkiye'] },
    '804': { capitals: ['Kiew', 'Kiev', 'Kyiv'] },
    '807': { aliases: ['Mazedonien'] },
    '826': { aliases: ['Großbritannien', 'England', 'UK', 'United Kingdom'], note: 'England ist nur ein Landesteil – der Staat heißt Vereinigtes Königreich.' },
    '756': { note: 'Bern ist die Bundesstadt der Schweiz.' },
    '-99': { capitals: ['Prishtina'], note: 'Kosovo ist teilweise anerkannt und nutzt den Euro einseitig.' },
    '499': { note: 'Montenegro nutzt den Euro einseitig, ist aber kein EU-Mitglied.' },
    '100': { note: 'Bulgarien verwendet seit dem 1. Januar 2026 den Euro.' }
};
countries.forEach(c => Object.assign(c, extras[c.id]));
