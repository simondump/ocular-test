import{d,E as m,k as u,z as f,e as r,a as e,c as h,n as p,s as i,F as _,l as y,o as t,b as k,_ as w}from"./index.34764831.js";const C=k("span",null,null,-1),B=[C],v=d({__name:"AsyncComponent",props:{class:null,show:{type:Boolean,default:!0},import:null},setup(l){const s=l,o=m(),n=u(()=>s.class);let c=!1;return f(()=>{s.show&&!c&&(c=!0,s.import().then(a=>o.value=a.default))}),(a,F)=>l.show?(t(),r(_,{key:0},[e(o)?(t(),h(i(e(o)),{key:0,class:p(e(n))},null,8,["class"])):(t(),r("div",{key:1,class:p([a.$style.placeholder,e(n)])},B,2))],64)):y("",!0)}}),A="H",E="I",g="J",x={placeholder:A,loader:E,wrapper:g},z={$style:x},N=w(v,[["__cssModules",z]]);export{N as A};