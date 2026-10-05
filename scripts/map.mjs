import fs from 'node:fs';
import {feature} from 'topojson-client';
import {geoConicConformal,geoPath,geoGraticule} from 'd3-geo';
const atlas=JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json','utf8'));
const projection=geoConicConformal().parallels([35,65]).rotate([-15,0]).center([0,53]).scale(660).translate([425,335]);
const path=geoPath(projection);
const shapes=feature(atlas,atlas.objects.countries).features.map(f=>({id:f.properties.name==='Kosovo'?'-99':String(f.id),d:path(f)}));
const points={}; for(const [id,p] of Object.entries({'020':[1.52,42.51],'438':[9.55,47.16],'492':[7.42,43.74],'674':[12.46,43.94],'336':[12.45,41.9],'470':[14.38,35.94],'-99':[20.9,42.6]})) points[id]=projection(p);
fs.writeFileSync('src/map-data.ts','export const mapData = '+JSON.stringify({shapes,points,grid:path(geoGraticule().step([10,10])())})+';\n');
