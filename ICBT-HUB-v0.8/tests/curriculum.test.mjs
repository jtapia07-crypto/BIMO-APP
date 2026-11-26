import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createModel,readProgress,saveProgress,STORAGE_KEY} from '../js/core/curriculum.js';
const data=JSON.parse(readFileSync(new URL('../data/malla.json',import.meta.url),'utf8'));
const model=createModel(data),{items}=model;
assert.equal(data.careerCode,'30090');assert.equal(data.curriculum.length,58);assert.equal(data.extracurricular.length,9);
assert.equal(new Set(items.map(x=>x.code)).size,67);assert.equal(items.reduce((n,x)=>n+x.sct,0),330);
assert.equal(data.curriculum.reduce((n,x)=>n+x.sct,0),301);assert.equal(data.extracurricular.reduce((n,x)=>n+x.sct,0),29);
assert.deepEqual(Array.from({length:11},(_,i)=>data.curriculum.filter(x=>x.level===i+1).reduce((n,x)=>n+x.sct,0)),[24,26,26,29,30,30,29,26,26,26,29]);
for(const x of items){const r=model.relationships(x.code);assert(![...r.pre,...r.indirectPre,...r.un,...r.indirectUn].includes(x.code));assert(!r.pre.some(c=>r.indirectPre.includes(c)));assert(!r.un.some(c=>r.indirectUn.includes(c)));}
assert.equal(model.status('IME042',{}),'available');assert.equal(model.status('IME044',{}),'locked');assert.equal(model.status('IME044',{IME042:'approved'}),'available');assert.equal(model.status('IME044',{IME042:'enrolled'}),'locked');assert.equal(model.stats({IME042:'approved',IME044:'enrolled'}).approvedSCT,6);assert.equal(model.stats({IME042:'approved',IME044:'enrolled'}).enrolledSCT,6);assert.equal(model.stats({IME042:'approved'}).pct,1.8);
assert(model.relationships('IBT403').pre.includes('IBT351'));assert(model.relationships('IBT403').indirectPre.includes('IBT303'));assert(model.relationships('IBT403').un.includes('IBT451'));assert(model.relationships('IBT403').indirectUn.includes('ING500'));
let state=Object.fromEntries(data.curriculum.filter(x=>x.level<=8).map(x=>[x.code,'approved']));assert.equal(model.stats(state).degree,false);state.COD606='approved';assert.equal(model.stats(state).degree,true);assert(model.stats(state).conflicts.some(x=>x.code==='COD606'));
state=Object.fromEntries(items.map(x=>[x.code,'approved']));assert.equal(model.stats(state).pct,100);assert.equal(model.stats(state).approvedCount,58);assert.equal(model.stats(state).conflicts.length,0);
assert.deepEqual(model.clean({IME042:'approved',IOC200:'approved',IBT403:'invalid'}),{IME042:'approved'});
const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)};assert(saveProgress({IME042:'approved'}));assert(storage.has(STORAGE_KEY));assert.deepEqual(readProgress(model).state,{IME042:'approved'});assert(saveProgress({}));assert.equal(model.stats(readProgress(model).state).pct,0);
console.log('OK: datos, 330 SCT, dependencias, estados, hitos y almacenamiento.');
