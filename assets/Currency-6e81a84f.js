import{d as p,e as i,f as d,P as m,k as e,a as r,Q as _,t as o,b as k,n as a,o as l,_ as f}from"./index-ef074214.js";const S=p({__name:"Currency",props:{value:{},locale:{},class:{}},setup(u){const n=u,{n:t}=i(),{state:c}=d(),{state:y}=m();return(s,B)=>e(y).appearance.mode==="privacy"?(l(),r("span",{key:0,class:a([s.$style.container,n.class])},[_(o(e(t)(s.value??0,{key:"currency",currency:e(c).currency}))+" ",1),k("span",{class:a(s.$style.overlay)},null,2)],2)):(l(),r("span",{key:1,class:a(n.class)},o(e(t)(s.value??0,{key:"currency",currency:e(c).currency})),3))}}),v="l_",C={container:v},g={$style:C},D=f(S,[["__cssModules",g]]);export{D as C};