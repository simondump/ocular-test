import{d,C as m,j as u,y as _,e as r,a as e,c as f,n as p,q as h,F as i,k as y,o as t,b as w,_ as k}from"./index.2e731f66.js";const C=w("span",null,null,-1),B=[C],v=d({__name:"AsyncComponent",props:{class:null,show:{type:Boolean,default:!0},import:null},setup(n){const s=n,o=m(),l=u(()=>s.class);let c=!1;return _(()=>{s.show&&!c&&(c=!0,s.import().then(a=>o.value=a.default))}),(a,F)=>n.show?(t(),r(i,{key:0},[e(o)?(t(),f(h(e(o)),{key:0,class:p(e(l))},null,8,["class"])):(t(),r("div",{key:1,class:p([a.$style.placeholder,e(l)])},B,2))],64)):y("",!0)}}),x="_2v _2w",A="_2x _2z",g="_2y",z={placeholder:x,loader:A,wrapper:g},E={$style:z},N=k(v,[["__cssModules",E]]);export{N as A};