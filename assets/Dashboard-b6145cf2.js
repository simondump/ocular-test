import{d as m,u,a as p,b as h,c as o,w as r,n,e as a,o as t,f as _,g as f,r as k,F as b,h as y,_ as B}from"./index-dc1df5c1.js";import{L as w}from"./Link-524a111b.js";import{A as v}from"./AnimatedRouterView-f090e42d.js";import{P as $}from"./Pane-d7678f53.js";import"./Icon-04cedc29.js";import"./useThemeStyles-f05063bd.js";import"./Currency-d1878e87.js";const g=m({__name:"Dashboard",setup(V){const{t:i}=u(),{state:c}=p(),l=h(),d=[{id:"charts",icon:"pi-chart-line",link:""},{id:"tables",icon:"grid-line",link:"/summary"}].map(e=>({...e,link:`/dashboard${e.link}`}));return(e,x)=>(t(),o($,{class:n(e.$style.dashboard),title:a(i)("dashboard.header",{year:a(c).activeYear})},{header:r(()=>[_("div",{class:n(e.$style.viewButtons)},[(t(!0),f(b,null,k(a(d),s=>(t(),o(w,{key:s.id,to:s.link,color:a(l).currentRoute.value.path.endsWith(s.link)?"primary":"dimmed",icon:s.icon},null,8,["to","color","icon"]))),128))],2)]),default:r(()=>[y(v)]),_:1},8,["class","title"]))}}),C="b",D="c",L={dashboard:C,viewButtons:D},R={$style:L},I=B(g,[["__cssModules",R]]);export{I as default};