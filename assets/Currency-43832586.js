import{d as p,u as i,a as d,N as m,f as e,i as r,O as _,t as o,h as f,n as a,o as l,_ as k}from"./index-a6bb7ba6.js";const S=p({__name:"Currency",props:{value:{},locale:{},class:{}},setup(u){const n=u,{n:t}=i(),{state:c}=d(),{state:y}=m();return(s,h)=>e(y).appearance.mode==="privacy"?(l(),r("span",{key:0,class:a([s.$style.container,n.class])},[_(o(e(t)(s.value??0,{key:"currency",currency:e(c).currency}))+" ",1),f("span",{class:a(s.$style.overlay)},null,2)],2)):(l(),r("span",{key:1,class:a(n.class)},o(e(t)(s.value??0,{key:"currency",currency:e(c).currency})),3))}}),v="h_",C={container:v},g={$style:C},N=k(S,[["__cssModules",g]]);export{N as C};