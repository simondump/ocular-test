import{d as P,k as a,o as r,c as p,n,a as e,_ as C,A as L,e as w,w as N,l as b,b as B,x as D,f as v,s as O,B as z,p as F,u as j,v as q,j as G,g as H,C as Q,D as R}from"./index.54799b82.js";import{A as X}from"./AsyncComponent.1f3d20e9.js";import{t as x,a as I,s as V,b as g}from"./budgets.8c854936.js";import{_ as Z}from"./Currency.vue_vue_type_script_setup_true_lang.db8ca75b.js";import{I as J}from"./Icon.dceb82bf.js";import{L as K}from"./Link.ab3a7376.js";import{u as U,i as W,a as ee,b as se,_ as ae}from"./installSVGRenderer.37d2265c.js";import"./useThemeStyles.38be0157.js";import"./useResizeObserver.21c8a714.js";const te=P({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const s=t;U([W,ee,se]);const o=a(()=>s.class),c=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(u,m)=>(r(),p(ae,{class:n([u.$style.summaryPanelChart,e(o)]),options:e(c)},null,8,["class","options"]))}}),le="Ia",ne={summaryPanelChart:le},oe={$style:ne},ce=C(te,[["__cssModules",oe]]),re=P({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const s=t;F(l=>({"32e9c026":e(h),"920aeb98":e(d),"21d8c0af":e(m)}));const o=a(()=>s.class),c=L(.25),u=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(${s.color}-shadow)`),h=a(()=>`var(${s.color}-light)`),d=a(()=>`var(${s.color}-light-dimmed)`),A=a(()=>s.to?K:"div");return(l,$)=>(r(),w("div",{ref_key:"root",ref:c,style:z(l.$style.wrapper)},[(r(),p(O(e(A)),{to:t.to,class:n([l.$style.summaryPanel,e(o)])},{default:N(()=>[t.to?(r(),p(J,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):b("",!0),B("div",{class:n(l.$style.header)},[B("h2",{class:n(l.$style.head)},D(t.title),3),B("span",{class:n(l.$style.title)},[v(Z,{value:e(u)},null,8,["value"])],2),t.subTitle?(r(),w("span",{key:0,class:n(l.$style.subTitle)},D(t.subTitle),3)):b("",!0)],2),Array.isArray(t.values)?(r(),p(ce,{key:1,class:n(l.$style.chart),color:e(d),values:t.values},null,8,["class","color","values"])):b("",!0)]),_:1},8,["to","class"]))],4))}}),ue="Aa",ie="Ba",me="Ca",de="Da",ve="Ea",ye="Fa",pe="Ga",he="Ha",$e={wrapper:ue,summaryPanel:ie,editIcon:me,header:de,head:ve,title:ye,subTitle:pe,chart:he},fe={$style:$e},_=C(re,[["__cssModules",fe]]),ge=P({__name:"SummaryPanels",props:{class:null},setup(t){const s=t,o=new Date().getFullYear(),{state:c}=H(),{t:u,n:m}=j(),h=q(0),d=G(),A=a(()=>[s.class,d.summaryPanels,{[d.reduced]:c.activeYear!==o,[d.unAnimated]:h.value>=3}]),l=a(()=>x(c.income)),$=a(()=>x(c.expenses)),M=a(()=>I(l.value)),S=a(()=>I($.value)),f=a(()=>V(M.value,S.value)),Y=a(()=>g(f.value)),k=a(()=>{const i=g($.value),y=g(l.value);return y?i/y:0}),T=a(()=>{const i=new Date().getMonth()+1;return g(V(l.value.slice(i),$.value.slice(i)))}),E=a(()=>{const i=f.value[f.value.length-1];return i?T.value/i:0});return(i,y)=>(r(),w("div",{class:n(e(A)),onAnimationend:y[0]||(y[0]=De=>h.value++)},[v(_,{values:e(M),color:"--c-success",to:"/income",title:e(u)("dashboard.income")},null,8,["values","title"]),v(_,{"sub-title":e(m)(e(k),"percent"),to:"/expenses",values:e(S),color:"--c-warning",title:e(u)("dashboard.expenses")},null,8,["sub-title","values","title"]),v(_,{"sub-title":e(m)(e(Y)?1-e(k):0,"percent"),values:e(f),color:"--c-primary",title:e(u)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),e(o)===e(c).activeYear?(r(),p(_,{key:0,"sub-title":e(m)(e(E),"percent"),values:e(T),color:"--c-secondary",title:e(u)("dashboard.remainingBalance",{year:e(o)+1})},null,8,["sub-title","values","title"])):b("",!0)],34))}}),_e="X",be="Y",we="Z",Pe={summaryPanels:_e,reduced:be,unAnimated:we},Ce={$style:Pe},Ae=C(ge,[["__cssModules",Ce]]),Be=P({__name:"Overview",setup(t){const s=R();return(o,c)=>(r(),w("div",{class:n(o.$style.overview)},[v(Ae),v(X,{show:e(s)!=="mobile",class:n(o.$style.chart),import:()=>Q(()=>import("./DistributionChart.55be9811.js"),["assets/DistributionChart.55be9811.js","assets/DistributionChart.59357b5b.css","assets/ChartPlaceholder.68ef96bc.js","assets/ChartPlaceholder.0c2852b3.css","assets/Icon.dceb82bf.js","assets/Icon.e7f282eb.css","assets/index.54799b82.js","assets/index.ed20b6e6.css","assets/installSVGRenderer.37d2265c.js","assets/useResizeObserver.21c8a714.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),Me="g",Se="h",ke={overview:Me,chart:Se},Te={$style:ke},Fe=C(Be,[["__cssModules",Te]]);export{Fe as default};
