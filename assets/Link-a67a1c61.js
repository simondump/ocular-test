import{d,k as f,g as n,a4 as k,v as _,c as v,a2 as y,W as C,X as h,o as a,e as c,w as L,n as l,m as b,C as w,_ as B}from"./index-1b1baa3a.js";import{I as M}from"./Icon-9831ad66.js";import{u as P}from"./useThemeStyles-9c14968b.js";const R=d({__name:"Link",props:{class:{},icon:{},color:{default:"primary"},custom:{type:Boolean,default:void 0},tooltip:{},tooltipPosition:{},to:{}},setup(i){const s=i;f(o=>({"5a8aab04":n(e).pure.base,"11b4a92e":n(e).pure.hover}));const r=k(),t=_(),u=v(()=>[s.class,t.link,{[t.custom]:s.custom??r.default}]),e=P(()=>s.color);return(o,g)=>{const p=y("RouterLink"),m=C("tooltip");return h((a(),c(p,{to:o.to,class:l(u.value)},{default:L(()=>[o.icon?(a(),c(M,{key:0,class:l(o.$style.icon),icon:o.icon},null,8,["class","icon"])):b("",!0),w(o.$slots,"default")]),_:3},8,["to","class"])),[[m,{text:o.tooltip,position:o.tooltipPosition}]])}}}),S="P",$="Q",D="R",I={link:S,icon:$,custom:D},V={$style:I},T=B(R,[["__cssModules",V]]);export{T as L};
