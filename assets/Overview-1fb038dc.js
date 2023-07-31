import{d as P,c as a,o as r,i as w,n as l,_ as C,u as E,m as F,a as d,w as L,p as T,b as k,l as u,t as B,F as N,q as O,s as W,f as Q,e as R,v as j,x as G,y as H,z as V,A as D,B as f,k as t,C as J,D as K}from"./index-dde7ce82.js";import{A as U}from"./AsyncComponent-d8c442ac.js";import{t as z}from"./budgets-531db56b.js";import{C as X}from"./Currency-ecccbfaf.js";import{I as Y}from"./Icon-75b91cab.js";import{L as Z}from"./Link-ff7a7be9.js";import{u as ee,i as se,a as ae,b as te,_ as le}from"./EChart.vue_vue_type_script_setup_true_lang-3cc79900.js";import"./useThemeStyles-1bbb8eb2.js";import"./useResizeObserver-f901d903.js";const oe=P({__name:"SummaryPanelChart",props:{class:{},color:{},values:{}},setup(v){const s=v;ee([se,ae,te]);const o=a(()=>s.class),n=a(()=>({animation:!1,xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(i,m)=>(r(),w(le,{class:l([i.$style.summaryPanelChart,o.value]),options:n.value},null,8,["class","options"]))}}),ne="W_",re={summaryPanelChart:ne},ce={$style:re},ue=C(oe,[["__cssModules",ce]]),ie=P({__name:"SummaryPanel",props:{class:{},title:{},subTitle:{},to:{},alt:{},color:{},values:{}},setup(v){const s=v;E(e=>({"0b68ca22":_.value,"7e5a6dd0":h.value,"630b55cb":$.value,57562074:m.value}));const o=a(()=>s.class),n=F(.25),i=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(--c-${s.color}-shadow)`),h=a(()=>`var(--c-${s.color}-text-accent)`),_=a(()=>`var(--c-${s.color}-light)`),$=a(()=>`var(--c-${s.color}-light-dimmed)`),y=a(()=>s.to?Z:"div");return(e,A)=>(r(),d("div",{ref_key:"root",ref:n,style:W(e.$style.wrapper)},[(r(),w(O(y.value),{to:e.to,class:l([e.$style.summaryPanel,o.value])},{default:L(()=>[e.to?(r(),w(Y,{key:0,class:l(e.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):T("",!0),k("div",{class:l(e.$style.header)},[e.alt?(r(),d("div",{key:0,class:l(e.$style.placeholder)},[u(Y,{class:l(e.$style.icon),icon:"calendar-2-line"},null,8,["class"]),k("span",{class:l(e.$style.text)},B(e.alt),3)],2)):(r(),d(N,{key:1},[k("h2",{class:l(e.$style.head)},B(e.title),3),u(X,{class:l(e.$style.title),value:i.value},null,8,["class","value"]),e.subTitle?(r(),d("span",{key:0,class:l(e.$style.subTitle)},B(e.subTitle),3)):T("",!0)],64))],2),Array.isArray(e.values)?(r(),w(ue,{key:1,class:l(e.$style.chart),color:$.value,values:e.values},null,8,["class","color","values"])):T("",!0)]),_:1},8,["to","class"]))],4))}}),me="q_",ve="r_",de="s_",ye="t_",pe="u_",he="v_",_e="w_",$e="x_",be="y_",fe="z_",ge="A_",we={wrapper:me,summaryPanel:ve,editIcon:de,header:ye,head:pe,title:he,subTitle:_e,placeholder:$e,icon:be,text:fe,chart:ge},Pe={$style:we},g=C(ie,[["__cssModules",Pe]]),Ce=P({__name:"SummaryPanels",props:{class:{}},setup(v){const s=v,{state:o}=Q(),{t:n,n:i}=R(),m=j(),h=G(0),_=H(),$=a(()=>[s.class,_.summaryPanels,{[_.unAnimated]:h.value>=3}]),y=a(()=>z(o.income)),e=a(()=>z(o.expenses)),A=a(()=>V(y.value)),M=a(()=>V(e.value)),b=a(()=>D(A.value,M.value)),q=a(()=>f(b.value)),S=a(()=>{const c=f(e.value),p=f(y.value);return p?c/p:0}),I=a(()=>{const c=m.year.value===o.activeYear?m.month.value+1:0;return f(D(y.value.slice(c),e.value.slice(c)))}),x=a(()=>{const c=b.value[b.value.length-1];return c?I.value/c:0});return(c,p)=>(r(),d("div",{class:l($.value),onAnimationend:p[0]||(p[0]=Ye=>h.value++)},[u(g,{values:A.value,color:"success",to:"/income",title:t(n)("dashboard.income")},null,8,["values","title"]),u(g,{"sub-title":t(i)(S.value,"percent"),to:"/expenses",values:M.value,color:"warning",title:t(n)("dashboard.expenses")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(q.value?1-S.value:0,"percent"),values:b.value,color:"primary",title:t(n)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(x.value,"percent"),alt:t(o).activeYear<t(m).year.value?t(n)("dashboard.yearInThePast"):t(o).activeYear>t(m).year.value?t(n)("dashboard.yearInTheFuture"):void 0,values:I.value,color:"secondary",title:t(n)("dashboard.remainingBalance",{year:t(o).activeYear+1})},null,8,["sub-title","alt","values","title"])],34))}}),Ae="V",Te="W",ke={summaryPanels:Ae,unAnimated:Te},Be={$style:ke},Me=C(Ce,[["__cssModules",Be]]),Se=P({__name:"Overview",setup(v){const s=K();return(o,n)=>(r(),d("div",{class:l(o.$style.overview)},[u(Me),u(U,{show:t(s)!=="mobile",class:l(o.$style.chart),import:()=>J(()=>import("./DistributionChart-25ee92f9.js"),["assets/DistributionChart-25ee92f9.js","assets/index-dde7ce82.js","assets/index-274c4a0d.css","assets/ChartPlaceholder-77c38612.js","assets/Icon-75b91cab.js","assets/Icon-c670f746.css","assets/ChartPlaceholder-bb0f229a.css","assets/EChart.vue_vue_type_script_setup_true_lang-3cc79900.js","assets/useResizeObserver-f901d903.js","assets/budgets-531db56b.js","assets/DistributionChart-5f45c59c.css"])},null,8,["show","class","import"])],2))}}),Ie="d",Ve="e",De={overview:Ie,chart:Ve},ze={$style:De},Re=C(Se,[["__cssModules",ze]]);export{Re as default};
