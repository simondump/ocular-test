import{d as b,k as a,o as i,c as $,n,a as s,_ as f,w as D,l as w,b as C,x as S,f as m,e as B,s as E,p as L,u as N,g as O,A as z,B as j}from"./index.a17fedd9.js";import{A as Q}from"./AsyncComponent.8375317e.js";import{t as T,a as k,s as x,b as p}from"./budgets.8c854936.js";import{_ as R}from"./Currency.vue_vue_type_script_setup_true_lang.2e432527.js";import{I as q}from"./Icon.15bfedae.js";import{L as F}from"./Link.ef3118bc.js";import{u as G,i as H,a as J,b as K,_ as U}from"./installSVGRenderer.86b0abf5.js";import"./useThemeStyles.d20c8287.js";import"./useResizeObserver.18097382.js";const W=b({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const e=t;G([H,J,K]);const c=a(()=>e.class),u=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,d)=>(i(),$(U,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(u)},null,8,["class","options"]))}}),X="_5p",Y={summaryPanelChart:X},Z={$style:Y},ss=f(W,[["__cssModules",Z]]),es=b({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;L(l=>({"0d9627ea":s(d),72555020:s(v),b850672a:s(r)}));const c=a(()=>e.class),u=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),r=a(()=>`var(${e.color}-shadow)`),d=a(()=>`var(${e.color}-light)`),v=a(()=>`var(${e.color}-light-dimmed)`),y=a(()=>e.to?F:"div");return(l,g)=>(i(),$(E(s(y)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:D(()=>[t.to?(i(),$(q,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):w("",!0),C("div",{class:n(l.$style.header)},[C("h2",{class:n(l.$style.head)},S(t.title),3),C("span",{class:n(l.$style.title)},[m(R,{value:s(u)},null,8,["value"])],2),t.subTitle?(i(),B("span",{key:0,class:n(l.$style.subTitle)},S(t.subTitle),3)):w("",!0)],2),Array.isArray(t.values)?(i(),$(ss,{key:1,class:n(l.$style.chart),color:s(v),values:t.values},null,8,["class","color","values"])):w("",!0)]),_:1},8,["to","class"]))}}),as="_3v _3w _3y _48",ts="_3x _3z",ls="_40 _41 _43 _45 _49",ns="_42",os="_44 _4a",cs="_46",rs="_47 _4b",us={summaryPanel:as,editIcon:ts,header:ls,head:ns,title:os,subTitle:cs,chart:rs},is={$style:us},h=f(es,[["__cssModules",is]]),ms=b({__name:"SummaryPanels",props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:u}=O(),{t:r,n:d}=N(),v=a(()=>T(u.income)),y=a(()=>T(u.expenses)),l=a(()=>k(v.value)),g=a(()=>k(y.value)),_=a(()=>x(l.value,g.value)),I=a(()=>p(_.value)),M=a(()=>{const o=p(y.value),P=p(v.value);return P?o/P:0}),A=a(()=>{const o=new Date().getMonth()+1;return p(x(v.value.slice(o),y.value.slice(o)))}),V=a(()=>{const o=_.value[_.value.length-1];return o?A.value/o:0});return(o,P)=>(i(),B("div",{class:n([o.$style.summaryPanels,s(c)])},[m(h,{values:s(l),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m(h,{"sub-title":s(d)(s(M),"percent"),to:"/expenses",values:s(g),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(d)(s(I)?1-s(M):0,"percent"),values:s(_),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(d)(s(V),"percent"),values:s(A),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ds="_2d _2e _2f _2g _2h _2i _2j",vs={summaryPanels:ds},ys={$style:vs},_s=f(ms,[["__cssModules",ys]]),ps=b({__name:"Overview",setup(t){const e=j();return(c,u)=>(i(),B("div",{class:n(c.$style.overview)},[m(_s),m(Q,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>z(()=>import("./DistributionChart.16084b14.js"),["assets/DistributionChart.16084b14.js","assets/DistributionChart.420872bc.css","assets/ChartPlaceholder.9adc8e45.js","assets/ChartPlaceholder.b56bf697.css","assets/Icon.15bfedae.js","assets/Icon.66be00a5.css","assets/index.a17fedd9.js","assets/index.8589d269.css","assets/installSVGRenderer.86b0abf5.js","assets/useResizeObserver.18097382.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),hs="_8 _9 a",$s="b",bs={overview:hs,chart:$s},fs={$style:bs},ks=f(ps,[["__cssModules",fs]]);export{ks as default};
