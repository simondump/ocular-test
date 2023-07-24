import{d as T,a as r,b as n,t as l,n as t,E as H,o as a,_ as w,e as C,f as B,c as k,i as N,w as V,r as h,k as s,F as $,B as f,G as M,H as D,p as I,A as L,z as P,l as S,C as O,D as Q}from"./index-ef074214.js";import{A as R}from"./AsyncComponent-6a8761b8.js";import{f as j,t as E}from"./budgets-531db56b.js";import{u as z}from"./useMonthNames-17bd2b32.js";const q=T({__name:"SummaryTable",props:{title:{}},setup(g){return(d,m)=>(a(),r("div",{class:t(d.$style.summaryTable)},[n("h1",{class:t(d.$style.title)},l(d.title),3),n("div",{class:t(d.$style.table)},[H(d.$slots,"default")],2)],2))}}),J="m_",K="n_",U="o_",W={summaryTable:J,title:K,table:U},X={$style:W},F=w(q,[["__cssModules",X]]),Y=n("span",null,null,-1),Z=T({__name:"GroupsSummaryTable",props:{class:{},groups:{},title:{}},setup(g){const d=g,{t:m,n:o}=C(),{isCurrentMonth:b}=B(),v=z(),i=k(()=>j(d.groups));return(u,e)=>(a(),N(F,{title:u.title},{default:V(()=>[n("div",{class:t(u.$style.table)},[Y,(a(!0),r($,null,h(s(v),(p,c)=>(a(),r("span",{key:p,class:t([u.$style.bold,{[u.$style.currentMonth]:s(b)(c)}])},l(p),3))),128)),n("span",{class:t(u.$style.bold)},l(s(m)("budget.total")),3),n("span",{class:t(u.$style.bold)},l(s(m)("budget.average")),3),(a(!0),r($,null,h(i.value,(p,c)=>(a(),r($,{key:p.id},[n("span",{class:t(u.$style.bold)},l(p.name),3),(a(!0),r($,null,h(p.totals,(y,A)=>(a(),r("span",{key:A,class:t({[u.$style.current]:s(b)(A),[u.$style.first]:c===0,[u.$style.last]:c===i.value.length-1})},l(s(o)(y,"currency")),3))),128)),n("span",{class:t(u.$style.bold)},l(s(o)(s(f)(p.totals),"currency")),3),n("span",{class:t(u.$style.bold)},l(s(o)(s(M)(p.totals),"currency")),3)],64))),128)),i.value.length>1?(a(),r($,{key:0},[n("span",{class:t(u.$style.bold)},l(s(m)("budget.total")),3),(a(!0),r($,null,h(s(v),(p,c)=>(a(),r("span",{key:p,class:t(u.$style.bold)},l(s(o)(s(f)(i.value.map(y=>y.totals[c])),"currency")),3))),128)),n("span",{class:t(u.$style.underline)},l(s(o)(s(f)(s(D)(...i.value.map(p=>p.totals))),"currency")),3),n("span",{class:t(u.$style.underline)},l(s(o)(s(M)(s(D)(...i.value.map(p=>p.totals))),"currency")),3)],64)):I("",!0)],2)]),_:1},8,["title"]))}}),_="s",x="t",ss="u",es="v",ts="w",ls="x",ns="y",as="z",rs={table:_,underline:x,bold:ss,muted:es,currentMonth:ts,current:ls,first:ns,last:as},os={$style:rs},G=w(Z,[["__cssModules",os]]),us=n("span",null,null,-1),cs=n("span",null,null,-1),ys=n("span",null,null,-1),ds=T({__name:"TotalsSummaryTable",props:{income:{default:()=>[]},expenses:{default:()=>[]},title:{}},setup(g){const d=g,{t:m,n:o}=C(),{isCurrentMonth:b}=B(),v=z(),i=k(()=>L(d.income,d.expenses)),u=k(()=>P(i.value));return(e,p)=>(a(),N(F,{title:e.title},{default:V(()=>[n("div",{class:t(e.$style.table)},[us,(a(!0),r($,null,h(s(v),(c,y)=>(a(),r("span",{key:c,class:t([e.$style.bold,{[e.$style.currentMonth]:s(b)(y)}])},l(c),3))),128)),n("span",{class:t(e.$style.bold)},l(s(m)("budget.total")),3),n("span",{class:t(e.$style.bold)},l(s(m)("budget.average")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.income")),3),(a(!0),r($,null,h(e.income,(c,y)=>(a(),r("span",{key:y,class:t([e.$style.muted,e.$style.first,e.$style.income,{[e.$style.current]:s(b)(y)}])},l(s(o)(c,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(o)(s(f)(e.income),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(o)(s(M)(e.income),"currency")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.expenses")),3),(a(!0),r($,null,h(e.expenses,(c,y)=>(a(),r("span",{key:y,class:t([e.$style.muted,e.$style.expense,{[e.$style.current]:s(b)(y)}])},l(s(o)(c,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(o)(s(f)(e.expenses),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(o)(s(M)(e.expenses),"currency")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.netSavings")),3),(a(!0),r($,null,h(i.value,(c,y)=>(a(),r("span",{key:y,class:t([e.$style.muted,{[e.$style.current]:s(b)(y),[e.$style.overdrawn]:c<0}])},l(s(o)(c,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(o)(s(f)(i.value),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(o)(s(M)(i.value),"currency")),3),n("span",{class:t(e.$style.bold)},l(s(m)("dashboard.endingBalance")),3),(a(!0),r($,null,h(u.value,(c,y)=>(a(),r("span",{key:y,class:t([e.$style.bold,e.$style.last,{[e.$style.current]:s(b)(y),[e.$style.overdrawn]:c<0}])},l(s(o)(c,"currency")),3))),128)),cs,ys],2)]),_:1},8,["title"]))}}),ms="A",ps="B",is="C",$s="D",bs="E",hs="F",vs="G",fs="H",gs="I",Ms={table:ms,underline:ps,bold:is,muted:$s,currentMonth:bs,current:hs,first:vs,last:fs,overdrawn:gs},ks={$style:Ms},Ss=w(ds,[["__cssModules",ks]]),Ts=T({__name:"Summary",setup(g){const{state:d}=B(),{t:m}=C(),o=Q(),b=k(()=>E(d.income)),v=k(()=>E(d.expenses));return(i,u)=>(a(),r("div",{class:t(i.$style.summary)},[S(R,{show:s(o)!=="mobile",class:t(i.$style.chart),import:()=>O(()=>import("./DevelopmentChart-1f10ef41.js"),["assets/DevelopmentChart-1f10ef41.js","assets/index-ef074214.js","assets/index-6d29bf2c.css","assets/ChartPlaceholder-237c4a66.js","assets/Icon-0c5920a4.js","assets/Icon-2d00bfea.css","assets/ChartPlaceholder-26119b8c.css","assets/EChart.vue_vue_type_script_setup_true_lang-660805a9.js","assets/useResizeObserver-a48ade2a.js","assets/useMonthNames-17bd2b32.js","assets/budgets-531db56b.js","assets/DevelopmentChart-ccb73121.css"])},null,8,["show","class","import"]),S(Ss,{title:s(m)("dashboard.summary"),income:b.value,expenses:v.value},null,8,["title","income","expenses"]),S(G,{title:s(m)("dashboard.income"),groups:s(d).income},null,8,["title","groups"]),S(G,{title:s(m)("dashboard.expenses"),groups:s(d).expenses},null,8,["title","groups"])],2))}}),ws="b",Cs="c",Bs={summary:ws,chart:Cs},As={$style:Bs},Vs=w(Ts,[["__cssModules",As]]);export{Vs as default};