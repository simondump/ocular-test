import{d as w,u as x,c as g,o as d,a as h,b as u,t as b,n as r,F as Y,r as C,_ as k,e as W,f as D,g as I,h as M,i as R,j as V,k as n,w as c,l as t}from"./index-b8f8bbf8.js";import{B as _}from"./Button-6c023569.js";import{L as $}from"./Link-34ba7465.js";import{A as L}from"./AnimatedRouterView-acc53c36.js";import{P as O}from"./Pane-1408e97d.js";import"./Icon-9ecb4fa7.js";import"./useThemeStyles-bdb7ff5f.js";import"./Currency-c0f418d3.js";const S=w({__name:"TextWheel",props:{values:{},value:{}},setup(v){const l=v;x(e=>({"47c68fd3":o.value}));const o=g(()=>l.values.indexOf(l.value));return(e,p)=>(d(),h("span",{class:r(e.$style.container)},[u("span",{class:r(e.$style.placeholder)},b(e.value),3),u("span",{class:r(e.$style.textWheel)},[(d(!0),h(Y,null,C(e.values,i=>(d(),h("span",{key:i,class:r(e.$style.value)},b(i),3))),128))],2)],2))}}),T="X",A="Y",F="Z",N="__",P={container:T,placeholder:A,textWheel:F,value:N},j={$style:P},z=k(S,[["__cssModules",j]]),E=w({__name:"Dashboard",setup(v){const{t:l}=W(),{state:o,changeYear:e}=D(),p=I(),i=g(()=>o.years.map(a=>a.year)),y=a=>{const s=i.value,m=(s.indexOf(o.activeYear)+a+s.length)%s.length,B=s[m];e(B)};return(a,s)=>{const f=M("i18n-t");return d(),R(O,{class:r(a.$style.dashboard)},V({title:c(()=>[u("span",null,[t(f,{keypath:"dashboard.header"},{year:c(()=>[t(z,{values:i.value,value:n(o).activeYear},null,8,["values","value"])]),_:1})])]),header:c(()=>[u("div",{class:r(a.$style.viewButtons)},[t($,{tooltip:n(l)("navigation.menu.dashboard"),"tooltip-position":"bottom-end",to:"/dashboard",color:n(p).currentRoute.value.path.endsWith("/dashboard")?"primary":"dimmed",icon:"pi-chart-line"},null,8,["tooltip","color"]),t($,{tooltip:n(l)("dashboard.tableOverview"),"tooltip-position":"bottom-end",to:"/dashboard/summary",color:n(p).currentRoute.value.path.endsWith("/dashboard/summary")?"primary":"dimmed",icon:"grid-line"},null,8,["tooltip","color"])],2)]),default:c(()=>[t(L)]),_:2},[n(o).years.length>1?{name:"beforeTitle",fn:c(()=>[t(_,{icon:"arrow-left-s-line",rounded:"",onClick:s[0]||(s[0]=m=>y(-1))}),t(_,{icon:"arrow-right-s-line",rounded:"",onClick:s[1]||(s[1]=m=>y(1))})]),key:"0"}:void 0]),1032,["class"])}}}),X="d",Z="e",q={dashboard:X,viewButtons:Z},G={$style:q},oe=k(E,[["__cssModules",G]]);export{oe as default};
