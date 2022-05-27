import{_ as f,d as b,c as a,o as i,a as $,n,b as s,v as D,q,B as w,k as C,A,m,j as B,G as E,e as L,f as N,O,P as j}from"./index.b73b91f1.js";import{A as z}from"./AsyncComponent.5a8313bc.js";import{t as T,a as x,s as I,b as _}from"./budgets.8c854936.js";import{_ as G}from"./Currency.4e5f3dc2.js";import{I as Q}from"./Icon.b90d5c9a.js";import{L as R}from"./Link.46c8c065.js";import{u as F,i as H,a as J,b as K,_ as U}from"./installSVGRenderer.765b24a5.js";import"./useThemeStyles.bd963083.js";import"./useResizeObserver.0beb1dc5.js";const W="_4n";var X={summaryPanelChart:W};const Y=b({props:{class:null,color:null,values:null},setup(t){const e=t;F([H,J,K]);const c=a(()=>e.class),u=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,v)=>(i(),$(U,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(u)},null,8,["class","options"]))}}),Z={$style:X};var ss=f(Y,[["__cssModules",Z]]);const es="_3f _3g _3i _3s",as="_3h _3j",ts="_3k _3l _3n _3p _3t",ls="_3m",ns="_3o _3u",os="_3q",cs="_3r _3v";var rs={summaryPanel:es,editIcon:as,header:ts,head:ls,title:ns,subTitle:os,chart:cs};const us=b({props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;D(l=>({f4e53d9a:s(v),"05e095f2":s(d),"6b024d02":s(r)}));const c=a(()=>e.class),u=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),r=a(()=>`var(${e.color}-shadow)`),v=a(()=>`var(${e.color}-light)`),d=a(()=>`var(${e.color}-light-dimmed)`),y=a(()=>e.to?R:"div");return(l,g)=>(i(),$(E(s(y)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:q(()=>[t.to?(i(),$(Q,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):w("",!0),C("div",{class:n(l.$style.header)},[C("h2",{class:n(l.$style.head)},A(t.title),3),C("span",{class:n(l.$style.title)},[m(G,{value:s(u)},null,8,["value"])],2),t.subTitle?(i(),B("span",{key:0,class:n(l.$style.subTitle)},A(t.subTitle),3)):w("",!0)],2),Array.isArray(t.values)?(i(),$(ss,{key:1,class:n(l.$style.chart),color:s(d),values:t.values},null,8,["class","color","values"])):w("",!0)]),_:1},8,["to","class"]))}}),is={$style:rs};var h=f(us,[["__cssModules",is]]);const ms="_2o _2p _2q _2r _2s _2t _2u";var vs={summaryPanels:ms};const ds=b({props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:u}=L(),{t:r,n:v}=N(),d=a(()=>T(u.income)),y=a(()=>T(u.expenses)),l=a(()=>x(d.value)),g=a(()=>x(y.value)),p=a(()=>I(l.value,g.value)),S=a(()=>_(p.value)),M=a(()=>{const o=_(y.value),P=_(d.value);return P?o/P:0}),k=a(()=>{const o=new Date().getMonth()+1;return _(I(d.value.slice(o),y.value.slice(o)))}),V=a(()=>{const o=p.value[p.value.length-1];return o?k.value/o:0});return(o,P)=>(i(),B("div",{class:n([o.$style.summaryPanels,s(c)])},[m(h,{values:s(l),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m(h,{"sub-title":s(v)(s(M),"percent"),to:"/expenses",values:s(g),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(v)(s(S)?1-s(M):0,"percent"),values:s(p),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(v)(s(V),"percent"),values:s(k),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ys={$style:vs};var ps=f(ds,[["__cssModules",ys]]);const _s="_8 _9 a",hs="b";var $s={overview:_s,chart:hs};const fs=b({setup(t){const e=j();return(c,u)=>(i(),B("div",{class:n(c.$style.overview)},[m(ps),m(z,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>O(()=>import("./DistributionChart.2031148c.js"),["assets/DistributionChart.2031148c.js","assets/DistributionChart.893eeb5d.css","assets/ChartPlaceholder.5ac86147.js","assets/ChartPlaceholder.accb68a1.css","assets/Icon.b90d5c9a.js","assets/Icon.d4fda347.css","assets/index.b73b91f1.js","assets/index.02489205.css","assets/installSVGRenderer.765b24a5.js","assets/useResizeObserver.0beb1dc5.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),bs={$style:$s};var xs=f(fs,[["__cssModules",bs]]);export{xs as default};