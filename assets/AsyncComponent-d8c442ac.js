import{d as p,I as u,c as d,J as m,o as a,a as n,i,n as c,q as _,F as h,p as f,b as y,_ as v}from"./index-dde7ce82.js";const w=y("span",null,null,-1),C=[w],k=p({__name:"AsyncComponent",props:{class:{},show:{type:Boolean,default:!0},import:{}},setup(r){const s=r,o=u(),t=d(()=>s.class);let l=!1;return m(()=>{s.show&&!l&&(l=!0,s.import().then(e=>o.value=e.default))}),(e,F)=>e.show?(a(),n(h,{key:0},[o.value?(a(),i(_(o.value),{key:0,class:c(t.value)},null,8,["class"])):(a(),n("div",{key:1,class:c([e.$style.placeholder,t.value])},C,2))],64)):f("",!0)}}),B="B",A="C",g="D",D={placeholder:B,loader:A,wrapper:g},E={$style:D},N=v(k,[["__cssModules",E]]);export{N as A};
