import {initInicio} from './modules/inicio.js';
import {initNavigation} from './modules/navigation.js';
const demo=new URLSearchParams(location.search).get('demo')==='1';
initNavigation(demo);
if(document.querySelector('[data-product]')) import('./modules/product.js').then(m=>m.initProduct()); else if(document.querySelector('#course-grid')) import('./modules/malla.js').then(m=>m.initMalla()); else if(document.querySelector('[data-resource]')) import('./modules/resources.js').then(m=>m.initResources()); else if(document.querySelector('[data-social]')) import('./modules/social.js').then(m=>m.initSocial()); else initInicio();

if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register(new URL('../sw.js',import.meta.url)).catch(console.warn);
