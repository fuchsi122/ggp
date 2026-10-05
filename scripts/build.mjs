import fs from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {rollup} from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {transformAsync} from '@babel/core';
import linkerPlugin from '@angular/compiler-cli/linker/babel';
const result=spawnSync(process.execPath,['node_modules/@angular/compiler-cli/bundles/src/bin/ngc.js','-p','tsconfig.json','--outDir','.angular/aot'],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status??1);
await fs.mkdir('dist',{recursive:true});
const linker={name:'angular-linker',async transform(code,id){if(!id.includes('@angular')||!code.includes('ɵɵngDeclare'))return null;return transformAsync(code,{filename:id,configFile:false,babelrc:false,plugins:[linkerPlugin]});}};
const bundle=await rollup({input:'.angular/aot/main.js',plugins:[nodeResolve(),linker],onwarn(w,warn){if(w.code!=='CIRCULAR_DEPENDENCY')warn(w);}});
await bundle.write({file:'dist/main.js',format:'es'});await bundle.close();
await fs.cp('public','dist',{recursive:true});
await fs.copyFile('src/styles.css','dist/styles.css');
let html=await fs.readFile('src/index.html','utf8');
await fs.writeFile('dist/index.html',html.replace('</head>','<link rel="stylesheet" href="styles.css"></head>').replace('</body>','<script type="module" src="main.js"></script></body>'));
console.log('Angular AOT build complete: dist/');

