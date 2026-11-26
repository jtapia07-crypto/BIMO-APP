// Modelo curricular sin dependencias de la interfaz. Una única carrera.
export const STORAGE_KEY='ufro_malla_progress_30090';
export const labels={approved:'Aprobado',enrolled:'En curso',available:'Disponible',locked:'Bloqueado'};
export async function loadCurriculum(){
 const response=await fetch(new URL('../../data/malla.json',import.meta.url));
 if(!response.ok)throw Error('No se pudo cargar la información curricular.');
 return createModel(await response.json());
}
export function createModel(data){
 const items=[...data.curriculum,...data.extracurricular];
 const map=new Map(items.map(x=>[x.code,x]));
 const unlocks=new Map(items.map(x=>[x.code,[]]));
 for(const x of items) for(const pre of x.prereqs){if(!map.has(pre))throw Error('Prerrequisito no encontrado: '+pre);unlocks.get(pre).push(x.code);}
 function walk(start,next){const visited=new Set([start]),queue=[start],result=[];while(queue.length){for(const code of next(queue.shift())){if(!visited.has(code)){visited.add(code);result.push(code);queue.push(code);}}}return result;}
 const status=(code,state)=>state[code]==='approved'?'approved':state[code]==='enrolled'?'enrolled':map.get(code)?.prereqs.every(p=>state[p]==='approved')?'available':'locked';
 function relationships(code){const pre=map.get(code).prereqs,un=unlocks.get(code);return {pre,un,indirectPre:walk(code,c=>map.get(c).prereqs).filter(c=>!pre.includes(c)),indirectUn:walk(code,c=>unlocks.get(c)).filter(c=>!un.includes(c))};}
 function stats(state){const approved=items.filter(x=>state[x.code]==='approved');const enrolled=items.filter(x=>state[x.code]==='enrolled');const sum=list=>list.reduce((n,x)=>n+x.sct,0);return {approvedSCT:sum(approved),approvedCount:data.curriculum.filter(x=>state[x.code]==='approved').length,enrolledSCT:sum(enrolled),enrolled,availableCount:data.curriculum.filter(x=>status(x.code,state)==='available').length,pct:Math.round(sum(approved)/data.totalSCT*1000)/10,degree:data.curriculum.filter(x=>x.level<=data.licenciatura.maxLevel).every(x=>state[x.code]==='approved')&&data.licenciatura.additional.every(c=>state[c]==='approved'),conflicts:items.filter(x=>state[x.code]&&x.prereqs.some(p=>state[p]!=='approved'))};}
 function clean(raw){return Object.fromEntries(items.filter(x=>['approved','enrolled'].includes(raw?.[x.code])).map(x=>[x.code,raw[x.code]]));}
 return {data,items,map,unlocks,status,relationships,stats,clean};
}
export function readProgress(model){try{const raw=localStorage.getItem(STORAGE_KEY);return {state:model.clean(raw?JSON.parse(raw):{}),saved:true}}catch{return {state:{},saved:false}}}
export function saveProgress(state){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));return true}catch{return false}}
