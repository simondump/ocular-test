if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.4194940b.css",revision:null},{url:"assets/AnimatedRouterView.8b9de10b.js",revision:null},{url:"assets/AsyncComponent.79e971d6.css",revision:null},{url:"assets/AsyncComponent.8375317e.js",revision:null},{url:"assets/BudgetPane.6fc12153.js",revision:null},{url:"assets/BudgetPane.d18bf3b5.css",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.42e337b7.js",revision:null},{url:"assets/Button.894070be.css",revision:null},{url:"assets/ChartPlaceholder.9adc8e45.js",revision:null},{url:"assets/ChartPlaceholder.b56bf697.css",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.2e432527.js",revision:null},{url:"assets/Dashboard.45cca764.css",revision:null},{url:"assets/Dashboard.9a83e68a.js",revision:null},{url:"assets/DevelopmentChart.2587781c.js",revision:null},{url:"assets/DevelopmentChart.5ac99832.css",revision:null},{url:"assets/DistributionChart.16084b14.js",revision:null},{url:"assets/DistributionChart.420872bc.css",revision:null},{url:"assets/Expenses.68481ba0.js",revision:null},{url:"assets/Frame.3440bad6.css",revision:null},{url:"assets/Frame.d9e9aebe.js",revision:null},{url:"assets/Icon.15bfedae.js",revision:null},{url:"assets/Icon.66be00a5.css",revision:null},{url:"assets/Income.67fb0450.js",revision:null},{url:"assets/index.8589d269.css",revision:null},{url:"assets/index.a17fedd9.js",revision:null},{url:"assets/installSVGRenderer.86b0abf5.js",revision:null},{url:"assets/Link.ae098345.css",revision:null},{url:"assets/Link.ef3118bc.js",revision:null},{url:"assets/Overview.532e9c00.css",revision:null},{url:"assets/Overview.f85f086e.js",revision:null},{url:"assets/Pane.067b67f3.css",revision:null},{url:"assets/Pane.e5b6078f.js",revision:null},{url:"assets/Summary.7633aa31.css",revision:null},{url:"assets/Summary.c956ab44.js",revision:null},{url:"assets/useMonthNames.306b9759.js",revision:null},{url:"assets/useResizeObserver.18097382.js",revision:null},{url:"assets/useThemeStyles.d20c8287.js",revision:null},{url:"index.html",revision:"9a8abdd7221ee5b5521c4c921bbd81dd"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
