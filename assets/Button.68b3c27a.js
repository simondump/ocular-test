import{_ as f,d as y,v as _,g as b,c as k,o as a,j as r,a as p,n as l,B as i,A as h,b as s}from"./index.a5e702bc.js";import{I as C}from"./Icon.5edaef1d.js";import{u as B}from"./useThemeStyles.5dc39149.js";const v="_43 _44 _46 _49 _4b _4d _4e _4g _4i _4j",I="_45",g="_47",M="_48 _4c",O="_4a",$="_4f _4h _4k";var j={button:v,iconOnly:I,hasIcon:g,text:M,icon:O,textual:$};const S=y({props:{class:null,iconClass:null,icon:null,text:null,color:{default:"primary"},textual:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:m}){const o=e;_(n=>({"1e0c8cd4":s(t).color.base,"40ade098":s(t).text.base,"6ec8c97e":s(t).focus,"16b0ddad":s(t).pure.base,"2e986f17":s(t).color.hover,"552daf56":s(t).text.hover,"80746440":s(t).pure.hover}));const c=b(),t=B(()=>o.color),d=k(()=>[o.class,c.button,{[c.hasIcon]:o.icon,[c.textual]:o.textual,[c.iconOnly]:o.icon&&!o.text}]);return(n,u)=>(a(),r("button",{class:l(s(d)),onClick:u[0]||(u[0]=x=>m("click",x))},[e.icon?(a(),p(C,{key:0,class:l([n.$style.icon,e.iconClass]),icon:e.icon},null,8,["class","icon"])):i("",!0),e.text?(a(),r("span",{key:1,class:l(n.$style.text)},h(e.text),3)):i("",!0)],2))}}),V={$style:j};var E=f(S,[["__cssModules",V]]);export{E as B};
