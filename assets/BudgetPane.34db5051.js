import{u as j,i as K,a as X,b as q,_ as z}from"./installSVGRenderer.1adc4262.js";import{d as w,k,o as u,c as P,n as r,a as t,v as G,u as D,D as H,e as d,G as R,H as S,_ as N,j as L,b as l,f as m,F as f,r as M,x as A,l as Y,g as F,w as U}from"./index.ca0e9a48.js";import{b as Z,c as J,t as O}from"./budgets.8c854936.js";import{P as Q}from"./Pane.b57a2c33.js";import{B as V}from"./Button.5456ca51.js";import{_ as I}from"./Currency.vue_vue_type_script_setup_true_lang.6ff92a4c.js";import{u as W}from"./useMonthNames.acee37a9.js";const x=w({__name:"MiniChart",props:{class:null,values:null},setup(o){const _=o;j([K,X,q]);const p=k(()=>_.class),a=k(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(..._.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:_.values,type:"line",smooth:!0,showSymbol:!1}]}));return(i,y)=>(u(),P(z,{class:r(t(p)),options:t(a)},null,8,["class","options"]))}}),ll=["type","value"],sl=w({__name:"CurrencyCell",props:{modelValue:null,max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(o,{emit:_}){const p=o,a=G(),i=G(!1),{n:y}=D(),h=k(()=>{const s=p.modelValue;return i.value||!s?s||"":y(p.modelValue,"currency")}),C=s=>{_("update:modelValue",Math.max(s,0))},g=s=>{s.key==="-"&&s.preventDefault()},$=()=>{i.value=!0,S(()=>{a.value.select()})},c=s=>{const n=Number(s.target.value);!Number.isNaN(n)&&C(n)};return H(()=>p.modelValue,(s,n)=>{(s!=null?s:0)>p.max&&n!==void 0&&_("update:modelValue",n)}),(s,n)=>(u(),d("input",{ref_key:"input",ref:a,class:r(s.$style.currencyCell),type:i.value?"number":"text",value:t(h),onBlur:n[0]||(n[0]=e=>i.value=!1),onFocus:$,onInput:c,onKeydown:[g,n[1]||(n[1]=R((...e)=>{var v,b;return((v=a.value)==null?void 0:v.blur)&&((b=a.value)==null?void 0:b.blur(...e))},["enter"]))]},null,42,ll))}}),el="qc",nl={currencyCell:el},tl={$style:nl},ol=N(sl,[["__cssModules",tl]]),ul=["value"],al=w({__name:"TextCell",props:{modelValue:null,inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:_}){const p=o,a=G(),i=L(),y=G(!1),h=k(()=>[i.textInput,{[i.empty]:!p.modelValue,[i.inline]:p.inline}]),C=()=>{y.value=!0,S(()=>{a.value.select()})},g=$=>{_("update:modelValue",$.target.value)};return($,c)=>(u(),d("span",{class:r(t(h))},[l("input",{ref_key:"input",ref:a,value:o.modelValue,type:"text",onBlur:c[0]||(c[0]=s=>y.value=!1),onFocus:C,onInput:g,onKeydown:c[1]||(c[1]=R((...s)=>{var n,e;return((n=a.value)==null?void 0:n.blur)&&((e=a.value)==null?void 0:e.blur(...s))},["enter"]))},null,40,ul)],2))}}),cl="rc",rl="sc",dl="tc",pl={textInput:cl,inline:rl,empty:dl},il={$style:pl},E=N(al,[["__cssModules",il]]),ml=l("span",null,null,-1),_l=l("span",null,null,-1),yl=l("span",null,null,-1),$l=l("span",null,null,-1),vl=l("span",null,null,-1),hl=l("span",null,null,-1),fl=l("span",null,null,-1),gl=l("span",null,null,-1),Bl=l("span",null,null,-1),Cl=l("span",null,null,-1),kl=l("span",null,null,-1),bl=l("span",null,null,-1),Ml=l("span",null,null,-1),wl=l("span",null,null,-1),Vl=l("span",null,null,-1),Gl=l("span",null,null,-1),Nl=l("span",null,null,-1),Il=w({__name:"BudgetGroup",props:{group:null},setup(o){const _=o,p=new Date().getMonth(),{addBudget:a,setBudgetName:i,setBudgetGroupName:y,setBudget:h,removeBudget:C}=F(),{t:g}=D(),$=G(!0),c=k(()=>{const s=new Array(12).fill(0);for(const{values:n}of _.group.budgets)for(let e=0;e<n.length;e++)s[e]+=n[e];return s});return(s,n)=>(u(),d(f,null,[m(V,{icon:$.value?"arrow-down-s-line":"arrow-right-s-line",color:"dimmed",textual:"",onClick:n[0]||(n[0]=e=>$.value=!$.value)},null,8,["icon"]),m(E,{class:r([s.$style.top,s.$style.start]),"model-value":o.group.name,inline:"","onUpdate:modelValue":n[1]||(n[1]=e=>t(y)(o.group.id,e))},null,8,["class","model-value"]),(u(!0),d(f,null,M(t(c),(e,v)=>(u(),d("span",{key:v,class:r(s.$style.top)},[l("span",null,[m(I,{value:e},null,8,["value"])])],2))),128)),l("span",{class:r(s.$style.top)},[l("span",null,A(t(g)("budget.total")),1)],2),l("span",{class:r([s.$style.top,s.$style.end])},[l("span",null,A(t(g)("budget.average")),1)],2),$.value?(u(),d(f,{key:0},[(u(!0),d(f,null,M(o.group.budgets,(e,v)=>(u(),d(f,{key:e.id+v},[ml,m(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:b=>t(C)(e.id)},null,8,["onClick"]),l("span",{class:r(s.$style.header)},[m(E,{"model-value":e.name,"onUpdate:modelValue":b=>t(i)(e.id,b)},null,8,["model-value","onUpdate:modelValue"])],2),(u(!0),d(f,null,M(e.values,(b,B)=>(u(),d("span",{class:r([s.$style.currencyCell,{[s.$style.even]:v%2,[s.$style.firstRow]:v===0,[s.$style.firstColumn]:B===0,[s.$style.currentMonth]:B===t(p),[s.$style.tlc]:v===0&&B===0,[s.$style.trc]:v===0&&B===11,[s.$style.blc]:v===o.group.budgets.length-1&&B===0,[s.$style.brc]:v===o.group.budgets.length-1&&B===11}]),key:e.id+B},[m(ol,{"model-value":e.values[B],"onUpdate:modelValue":T=>t(h)(e.id,B,T)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),l("span",{class:r(s.$style.meta)},[m(I,{value:t(Z)(e.values)},null,8,["value"])],2),l("span",{class:r(s.$style.meta)},[m(I,{value:t(J)(e.values)},null,8,["value"])],2)],64))),128)),_l,yl,m(V,{class:r(s.$style.addBudgetBtn),textual:"",text:t(g)("budget.addBudget"),onClick:n[2]||(n[2]=e=>t(a)(o.group.id))},null,8,["class","text"]),$l,vl,hl,fl,gl,Bl,Cl,kl,bl,Ml,wl,Vl,Gl,Nl],64)):Y("",!0)],64))}}),Al="Xa",Dl="Ya",Fl="Za",Ul="ac",El="bc",Pl="cc",Rl="dc",Sl="ec",Tl="fc",jl="gc",Kl="hc",Xl="ic",ql="jc",zl="kc",Hl="lc",Ll={header:Al,meta:Dl,top:Fl,start:Ul,end:El,currencyCell:Pl,firstRow:Rl,firstColumn:Sl,currentMonth:Tl,even:jl,tlc:Kl,trc:Xl,blc:ql,brc:zl,addBudgetBtn:Hl},Yl={$style:Ll},Zl=N(Il,[["__cssModules",Yl]]),Jl=l("span",null,null,-1),Ol=l("span",null,null,-1),Ql=l("span",null,null,-1),Wl=l("span",null,null,-1),xl=l("span",null,null,-1),ls=l("span",null,null,-1),ss=l("span",null,null,-1),es=l("span",null,null,-1),ns=l("span",null,null,-1),ts=l("span",null,null,-1),os=l("span",null,null,-1),us=l("span",null,null,-1),as=l("span",null,null,-1),cs=l("span",null,null,-1),rs=l("span",null,null,-1),ds=l("span",null,null,-1),ps=l("span",null,null,-1),is=l("span",null,null,-1),ms=l("span",null,null,-1),_s=l("span",null,null,-1),ys=l("span",null,null,-1),$s=l("span",null,null,-1),vs=l("span",null,null,-1),hs=l("span",null,null,-1),fs=l("span",null,null,-1),gs=w({__name:"BudgetGroups",props:{type:null},setup(o){const _=o,{state:p,addBudgetGroup:a,removeBudgetGroup:i}=F(),{t:y}=D(),h=new Date().getMonth(),C=k(()=>p[_.type]),g=W(),$=k(()=>{const c=new Array(12).fill(0);for(const{budgets:s}of C.value)for(const{values:n}of s)for(let e=0;e<n.length;e++)c[e]+=n[e];return c});return(c,s)=>(u(),d("div",{class:r(c.$style.budgetGroups)},[Jl,Ol,Ql,(u(!0),d(f,null,M(t(g),(n,e)=>(u(),d("span",{key:n,class:r([c.$style.month,{[c.$style.current]:e===t(h)}])},[l("span",null,A(n),1)],2))),128)),Wl,xl,ls,ss,l("span",{class:r(c.$style.sum)},A(t(y)("budget.totals")),3),(u(!0),d(f,null,M(t($),(n,e)=>(u(),d("span",{key:e,class:r(c.$style.sum)},[m(I,{value:n},null,8,["value"])],2))),128)),es,ns,(u(!0),d(f,null,M(t(C),n=>(u(),d(f,{key:n.id},[m(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:e=>t(i)(n.id)},null,8,["onClick"]),m(Zl,{group:n},null,8,["group"])],64))),128)),ts,os,m(V,{class:r(c.$style.addGroupBtn),icon:"plus",text:t(y)("budget.addGroup"),onClick:s[0]||(s[0]=n=>t(a)(o.type))},null,8,["class","text"]),us,as,cs,rs,ds,ps,is,ms,_s,ys,$s,vs,hs,fs],2))}}),Bs="ia",Cs="ja",ks="ka",bs="la",Ms="ma",ws={budgetGroups:Bs,sum:Cs,month:ks,current:bs,addGroupBtn:Ms},Vs={$style:ws},Gs=N(gs,[["__cssModules",Vs]]),Ns=w({__name:"BudgetPane",props:{title:null,type:null},setup(o){const _=o,{state:p}=F(),a=k(()=>O(p[_.type])),i=a.value.reduce((y,h)=>y+h,0);return(y,h)=>(u(),P(Q,{amount:t(i),title:o.title},{header:U(()=>[m(x,{class:r(y.$style.miniChart),values:t(a)},null,8,["class","values"])]),default:U(()=>[m(Gs,{type:o.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),Is="t",As={miniChart:Is},Ds={$style:As},js=N(Ns,[["__cssModules",Ds]]);export{js as B};
