import{d as P,k as a,o as r,c as p,n,a as e,_ as C,A as L,e as w,w as N,l as b,b as M,x,f as v,s as O,B as q,p as z,u as j,v as F,j as Q,g as R,C as W,D as X}from"./index.d8f4bcf5.js";import{A as G}from"./AsyncComponent.cbb7854d.js";import{t as D,a as I,s as V,b as g}from"./budgets.8c854936.js";import{_ as H}from"./Currency.vue_vue_type_script_setup_true_lang.ed40b5b7.js";import{I as J}from"./Icon.3b02afc0.js";import{L as K}from"./Link.1fdff89f.js";import{u as U,i as Z,a as ee,b as se,_ as ae}from"./installSVGRenderer.cdf05154.js";import"./useThemeStyles.69cf38f7.js";import"./useResizeObserver.5c28aae5.js";const te=P({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const s=t;U([Z,ee,se]);const o=a(()=>s.class),c=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(u,m)=>(r(),p(ae,{class:n([u.$style.summaryPanelChart,e(o)]),options:e(c)},null,8,["class","options"]))}}),le="Ia",ne={summaryPanelChart:le},oe={$style:ne},ce=C(te,[["__cssModules",oe]]),re=P({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const s=t;z(l=>({"32e9c026":e(h),"920aeb98":e(d),"21d8c0af":e(m)}));const o=a(()=>s.class),c=L(.25),u=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(${s.color}-shadow)`),h=a(()=>`var(${s.color}-light)`),d=a(()=>`var(${s.color}-light-dimmed)`),A=a(()=>s.to?K:"div");return(l,$)=>(r(),w("div",{ref_key:"root",ref:c,style:q(l.$style.wrapper)},[(r(),p(O(e(A)),{to:t.to,class:n([l.$style.summaryPanel,e(o)])},{default:N(()=>[t.to?(r(),p(J,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):b("",!0),M("div",{class:n(l.$style.header)},[M("h2",{class:n(l.$style.head)},x(t.title),3),M("span",{class:n(l.$style.title)},[v(H,{value:e(u)},null,8,["value"])],2),t.subTitle?(r(),w("span",{key:0,class:n(l.$style.subTitle)},x(t.subTitle),3)):b("",!0)],2),Array.isArray(t.values)?(r(),p(ce,{key:1,class:n(l.$style.chart),color:e(d),values:t.values},null,8,["class","color","values"])):b("",!0)]),_:1},8,["to","class"]))],4))}}),ue="na",ie="oa",me="pa",de="qa",ve="ra",ye="sa",pe="ta",he="ua",$e={wrapper:ue,summaryPanel:ie,editIcon:me,header:de,head:ve,title:ye,subTitle:pe,chart:he},fe={$style:$e},_=C(re,[["__cssModules",fe]]),ge=P({__name:"SummaryPanels",props:{class:null},setup(t){const s=t,o=new Date().getFullYear(),{state:c}=R(),{t:u,n:m}=j(),h=F(0),d=Q(),A=a(()=>[s.class,d.summaryPanels,{[d.reduced]:c.activeYear!==o,[d.unAnimated]:h.value>=3}]),l=a(()=>D(c.income)),$=a(()=>D(c.expenses)),B=a(()=>I(l.value)),S=a(()=>I($.value)),f=a(()=>V(B.value,S.value)),Y=a(()=>g(f.value)),k=a(()=>{const i=g($.value),y=g(l.value);return y?i/y:0}),T=a(()=>{const i=new Date().getMonth()+1;return g(V(l.value.slice(i),$.value.slice(i)))}),E=a(()=>{const i=f.value[f.value.length-1];return i?T.value/i:0});return(i,y)=>(r(),w("div",{class:n(e(A)),onAnimationend:y[0]||(y[0]=xe=>h.value++)},[v(_,{values:e(B),color:"--c-success",to:"/income",title:e(u)("dashboard.income")},null,8,["values","title"]),v(_,{"sub-title":e(m)(e(k),"percent"),to:"/expenses",values:e(S),color:"--c-warning",title:e(u)("dashboard.expenses")},null,8,["sub-title","values","title"]),v(_,{"sub-title":e(m)(e(Y)?1-e(k):0,"percent"),values:e(f),color:"--c-primary",title:e(u)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),e(o)===e(c).activeYear?(r(),p(_,{key:0,"sub-title":e(m)(e(E),"percent"),values:e(T),color:"--c-secondary",title:e(u)("dashboard.remainingBalance",{year:e(o)+1})},null,8,["sub-title","values","title"])):b("",!0)],34))}}),_e="W",be="X",we="Y",Pe={summaryPanels:_e,reduced:be,unAnimated:we},Ce={$style:Pe},Ae=C(ge,[["__cssModules",Ce]]),Me=P({__name:"Overview",setup(t){const s=X();return(o,c)=>(r(),w("div",{class:n(o.$style.overview)},[v(Ae),v(G,{show:e(s)!=="mobile",class:n(o.$style.chart),import:()=>W(()=>import("./DistributionChart.23fa527c.js"),["assets/DistributionChart.23fa527c.js","assets/DistributionChart.a049416d.css","assets/ChartPlaceholder.4eb940ca.js","assets/ChartPlaceholder.da1a6c33.css","assets/Icon.3b02afc0.js","assets/Icon.be34254e.css","assets/index.d8f4bcf5.js","assets/index.ed506296.css","assets/installSVGRenderer.cdf05154.js","assets/useResizeObserver.5c28aae5.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),Be="g",Se="h",ke={overview:Be,chart:Se},Te={$style:ke},ze=C(Me,[["__cssModules",Te]]);export{ze as default};
