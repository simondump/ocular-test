import{d as p,h as d,i as _,j as f,o as l,c as a,w as k,n as u,k as y,l as C,a as t,m as h,p as L,_ as v}from"./index.74037899.js";import{I as x}from"./Icon.8230e168.js";import{u as B}from"./useThemeStyles.b7e5b79a.js";const M=p({__name:"Link",props:{class:null,icon:null,color:{default:"primary"},custom:{type:Boolean,default:void 0},to:null},setup(o){const e=o;h(s=>({ee837e28:t(c).pure.base,e1365afe:t(c).pure.hover}));const r=d(),n=_(),i=f(()=>{var s;return[e.class,n.link,{[n.custom]:(s=e.custom)!=null?s:r.default}]}),c=B(()=>e.color);return(s,V)=>{const m=L("RouterLink");return l(),a(m,{to:o.to,class:u(t(i))},{default:k(()=>[o.icon?(l(),a(x,{key:0,class:u(s.$style.icon),icon:o.icon},null,8,["class","icon"])):y("",!0),C(s.$slots,"default")]),_:3},8,["to","class"])}}}),S="_2k _2l _2n _2p",$="_2m",w="_2o _2q",I={link:S,icon:$,custom:w},R={$style:I},z=v(M,[["__cssModules",R]]);export{z as L};