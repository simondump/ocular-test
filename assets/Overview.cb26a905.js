import{d as g,k as a,o as u,c as _,n,a as s,_ as w,A as V,e as b,w as E,l as C,b as B,x as k,f as m,s as L,B as N,p as O,u as q,g as z,C as G,D as Q}from"./index.173bba9b.js";import{A as R}from"./AsyncComponent.1e0d2c9b.js";import{t as A,a as T,s as x,b as $}from"./budgets.8c854936.js";import{_ as W}from"./Currency.vue_vue_type_script_setup_true_lang.07a47067.js";import{I as j}from"./Icon.865af9cb.js";import{L as F}from"./Link.27a353a2.js";import{u as H,i as J,a as K,b as U,_ as X}from"./installSVGRenderer.b8285e1c.js";import"./useThemeStyles.6f052885.js";import"./useResizeObserver.6501883c.js";const Y=g({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const e=t;H([J,K,U]);const c=a(()=>e.class),i=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,d)=>(u(),_(X,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(i)},null,8,["class","options"]))}}),Z="Ga",ss={summaryPanelChart:Z},es={$style:ss},as=w(Y,[["__cssModules",es]]),ts=g({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;O(l=>({"32e9c026":s(v),"920aeb98":s(y),"21d8c0af":s(d)}));const c=a(()=>e.class),i=V(.25),r=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),d=a(()=>`var(${e.color}-shadow)`),v=a(()=>`var(${e.color}-light)`),y=a(()=>`var(${e.color}-light-dimmed)`),h=a(()=>e.to?F:"div");return(l,p)=>(u(),b("div",{ref_key:"root",ref:i,style:N(l.$style.wrapper)},[(u(),_(L(s(h)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:E(()=>[t.to?(u(),_(j,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):C("",!0),B("div",{class:n(l.$style.header)},[B("h2",{class:n(l.$style.head)},k(t.title),3),B("span",{class:n(l.$style.title)},[m(W,{value:s(r)},null,8,["value"])],2),t.subTitle?(u(),b("span",{key:0,class:n(l.$style.subTitle)},k(t.subTitle),3)):C("",!0)],2),Array.isArray(t.values)?(u(),_(as,{key:1,class:n(l.$style.chart),color:s(y),values:t.values},null,8,["class","color","values"])):C("",!0)]),_:1},8,["to","class"]))],4))}}),ls="la",ns="ma",os="na",cs="oa",rs="pa",us="qa",is="ra",ms="sa",ds={wrapper:ls,summaryPanel:ns,editIcon:os,header:cs,head:rs,title:us,subTitle:is,chart:ms},ys={$style:ds},f=w(ts,[["__cssModules",ys]]),vs=g({__name:"SummaryPanels",props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:i}=z(),{t:r,n:d}=q(),v=a(()=>A(i.income)),y=a(()=>A(i.expenses)),h=a(()=>T(v.value)),l=a(()=>T(y.value)),p=a(()=>x(h.value,l.value)),I=a(()=>$(p.value)),M=a(()=>{const o=$(y.value),P=$(v.value);return P?o/P:0}),S=a(()=>{const o=new Date().getMonth()+1;return $(x(v.value.slice(o),y.value.slice(o)))}),D=a(()=>{const o=p.value[p.value.length-1];return o?S.value/o:0});return(o,P)=>(u(),b("div",{class:n([o.$style.summaryPanels,s(c)])},[m(f,{values:s(h),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m(f,{"sub-title":s(d)(s(M),"percent"),to:"/expenses",values:s(l),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m(f,{"sub-title":s(d)(s(I)?1-s(M):0,"percent"),values:s(p),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m(f,{"sub-title":s(d)(s(D),"percent"),values:s(S),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ps="W",hs={summaryPanels:ps},$s={$style:hs},fs=w(vs,[["__cssModules",$s]]),_s=g({__name:"Overview",setup(t){const e=Q();return(c,i)=>(u(),b("div",{class:n(c.$style.overview)},[m(fs),m(R,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>G(()=>import("./DistributionChart.75394b78.js"),["assets/DistributionChart.75394b78.js","assets/DistributionChart.0ece18af.css","assets/ChartPlaceholder.f8392cc9.js","assets/ChartPlaceholder.5e8e546c.css","assets/Icon.865af9cb.js","assets/Icon.3e341dd2.css","assets/index.173bba9b.js","assets/index.aafeb81f.css","assets/installSVGRenderer.b8285e1c.js","assets/useResizeObserver.6501883c.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),bs="g",gs="h",ws={overview:bs,chart:gs},Ps={$style:ws},Ds=w(_s,[["__cssModules",Ps]]);export{Ds as default};