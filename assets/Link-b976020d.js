import{d as p,k as d,f as c,a1 as f,v as k,j as _,$ as y,o as n,c as a,w as C,n as l,m as h,C as v,_ as L}from"./index-a6bb7ba6.js";import{I as $}from"./Icon-1652105d.js";import{u as B}from"./useThemeStyles-b4cdeaf6.js";const M=p({__name:"Link",props:{class:{},icon:{},color:{default:"primary"},custom:{type:Boolean,default:void 0},to:{}},setup(r){const o=r;d(s=>({"7ca7510d":c(t).pure.base,"189dc680":c(t).pure.hover}));const u=f(),e=k(),i=_(()=>[o.class,e.link,{[e.custom]:o.custom??u.default}]),t=B(()=>o.color);return(s,T)=>{const m=y("RouterLink");return n(),a(m,{to:s.to,class:l(i.value)},{default:C(()=>[s.icon?(n(),a($,{key:0,class:l(s.$style.icon),icon:s.icon},null,8,["class","icon"])):h("",!0),v(s.$slots,"default")]),_:3},8,["to","class"])}}}),S="T",V="U",w="V",I={link:S,icon:V,custom:w},R={$style:I},N=L(M,[["__cssModules",R]]);export{N as L};