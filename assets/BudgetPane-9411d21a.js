import{u as J,i as Q,a as x,b as ee,_ as te}from"./EChart.vue_vue_type_script_setup_true_lang-660805a9.js";import{d as A,c as k,o as m,i as U,n as a,K as se,x as I,a as $,l as y,k as v,s as le,b as c,t as P,p as ne,_ as E,e as K,L as oe,M as Z,N as j,y as ae,f as X,F as w,r as S,B as z,G as q,w as O}from"./index-ef074214.js";import{t as ue}from"./budgets-531db56b.js";import{P as re}from"./Pane-c66eb42c.js";import{B as L}from"./Button-45a3e92e.js";import{C as F}from"./Currency-6e81a84f.js";import{u as ce}from"./useMonthNames-17bd2b32.js";const de=A({__name:"MiniChart",props:{class:{},values:{}},setup(M){const b=M;J([Q,x,ee]);const l=k(()=>b.class),d=k(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...b.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:b.values,type:"line",smooth:!0,showSymbol:!1,silent:!0}]}));return(p,i)=>(m(),U(te,{class:a(l.value),options:d.value},null,8,["class","options"]))}}),o=se({group:void 0,source:void 0,target:void 0,type:void 0}),pe=A({__name:"Draggable",props:{text:{type:Function},name:{},id:{}},emits:["drop"],setup(M,{emit:b}){const l=M,d=I(),p=I(),i=I(0),_=I(0),h=k(()=>l.id===o.target&&o.type),N=k(()=>h.value?o.type==="before"?"skip-up-line":"skip-down-line":"draggable"),B=k(()=>{var s;return o.target&&o.target&&o.source?(s=l.text)==null?void 0:s.call(l,o):void 0}),D=s=>{s.dataTransfer&&p.value&&(o.group=l.name,o.source=l.id,s.dataTransfer.effectAllowed="move",s.dataTransfer.setDragImage(p.value,1/0,1/0),s.dataTransfer.setData("text/plain",l.name))},C=s=>{i.value=s.pageX,_.value=s.pageY},u=s=>{var e;if(o.group===l.name){const f=(e=d.value)==null?void 0:e.getBoundingClientRect();if(s.preventDefault(),f&&l.id!==o.source){const n=s.pageY<f.top+f.height/2?"before":"after";o.target=l.id,o.type=n}}},t=s=>{s.pageX&&s.pageY&&o.target!==l.id&&(o.type=void 0,o.target=void 0)},g=()=>{o.type=void 0,o.target=void 0,o.source=void 0,o.group=void 0},r=s=>{o.target&&o.target&&o.source&&b("drop",o),s.preventDefault()};return(s,e)=>(m(),$("div",{ref_key:"draggable",ref:d,class:a(s.$style.draggable),draggable:"true",onDragend:g,onDragover:u,onDragleave:t,onDrop:r,onDrag:C,onDragstart:D},[y(L,{color:v(o).group===l.name?"primary":"dimmed",icon:N.value,textual:""},null,8,["color","icon"]),v(o).source===l.id&&_.value&&i.value&&B.value?(m(),$("div",{key:0,style:le({top:`${_.value+5}px`,left:`${i.value+5}px`}),class:a(s.$style.content)},[c("span",{class:a(s.$style.text)},P(B.value),3)],6)):ne("",!0),c("div",{ref_key:"element",ref:p,class:a(s.$style.hidden)},"hidden",2)],34))}}),ie="lb",me="mb",ge="nb",ye="ob",ve={draggable:ie,content:me,text:ge,hidden:ye},fe={$style:ve},H=E(pe,[["__cssModules",fe]]),$e=["type","value"],be=A({__name:"CurrencyCell",props:{modelValue:{},max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(M,{emit:b}){const l=M,d=I(),p=I(!1),{n:i}=K(),_=k(()=>p.value||!l.modelValue?l.modelValue||"":i(l.modelValue,"currency")),h=u=>{b("update:modelValue",Math.max(u,0))},N=u=>{u.key==="-"&&u.preventDefault()},B=()=>{p.value=!0,j(()=>d.value.select())},D=u=>{const t=Number(u.target.value.trim()||NaN);!Number.isNaN(t)&&h(t)},C=u=>{var g;const t=Number(((g=u.clipboardData)==null?void 0:g.getData("text/plain").trim())||NaN);!Number.isNaN(t)&&h(t)};return oe(()=>l.modelValue,(u,t)=>{(u??0)>l.max&&t!==void 0&&b("update:modelValue",t)}),(u,t)=>(m(),$("input",{ref_key:"input",ref:d,class:a(u.$style.currencyCell),type:p.value?"number":"text",value:_.value,onBlur:t[0]||(t[0]=g=>p.value=!1),onFocus:B,onInput:D,onKeydown:[N,t[1]||(t[1]=Z((...g)=>{var r,s;return((r=d.value)==null?void 0:r.blur)&&((s=d.value)==null?void 0:s.blur(...g))},["enter"]))],onPaste:C},null,42,$e))}}),_e="pb",he={currencyCell:_e},Be={$style:he},Ce=E(be,[["__cssModules",Be]]),ke=["value"],Me=A({__name:"TextCell",props:{modelValue:{},inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(M,{emit:b}){const l=M,d=I(),p=ae(),i=I(!1),_=k(()=>[p.textInput,{[p.empty]:!l.modelValue,[p.inline]:l.inline}]),h=()=>{i.value=!0,j(()=>{d.value.select()})},N=B=>{b("update:modelValue",B.target.value)};return(B,D)=>(m(),$("span",{class:a(_.value)},[c("input",{ref_key:"input",ref:d,value:B.modelValue,class:a(B.$style.input),type:"text",onBlur:D[0]||(D[0]=C=>i.value=!1),onFocus:h,onInput:N,onKeydown:D[1]||(D[1]=Z((...C)=>{var u,t;return((u=d.value)==null?void 0:u.blur)&&((t=d.value)==null?void 0:t.blur(...C))},["enter"]))},null,42,ke)],2))}}),Ve="vb",De="wb",Ge="xb",Ne="yb",we={textInput:Ve,input:De,inline:Ge,empty:Ne},Ie={$style:we},W=E(Me,[["__cssModules",Ie]]),Te=c("span",null,null,-1),Ae=c("span",{style:{"grid-column":"3 / 16"}},null,-1),Fe=A({__name:"BudgetGroup",props:{group:{}},setup(M){const b=M,{moveBudget:l,removeBudgetGroup:d,getBudget:p,addBudget:i,setBudgetName:_,setBudgetGroupName:h,setBudget:N,removeBudget:B,isCurrentMonth:D}=X(),{t:C}=K(),u=k(()=>{const e=new Array(12).fill(0);for(const{values:f}of b.group.budgets)for(let n=0;n<f.length;n++)e[n]+=f[n];return e}),t=k(()=>z(u.value)),g=k(()=>q(u.value)),r=e=>{const[f,n]=e.source?p(e.source)??[]:[],[V,T]=e.target?p(e.target)??[]:[];if(n&&f){if(T&&V){const G=f.id===V.id,R=G?n.name:`${f.name} » ${n.name}`,Y=G?T.name:`${V.name} » ${T.name}`;return e.type==="before"?C("budget.prepend",{from:R,to:Y}):C("budget.append",{from:R,to:Y})}return C("budget.move",{from:n.name})}},s=e=>{l(e.source,e.target,e.type==="after")};return(e,f)=>(m(),$(w,null,[y(L,{color:"dimmed",icon:"close-circle",textual:"",onClick:f[0]||(f[0]=n=>v(d)(e.group.id))}),y(W,{class:a([e.$style.top,e.$style.start]),"model-value":e.group.name,inline:"","onUpdate:modelValue":f[1]||(f[1]=n=>v(h)(e.group.id,n))},null,8,["class","model-value"]),(m(!0),$(w,null,S(u.value,(n,V)=>(m(),$("span",{key:V,class:a(e.$style.top)},[y(F,{value:n},null,8,["value"])],2))),128)),c("span",{class:a(e.$style.top)},[c("span",null,P(v(C)("budget.total")),1)],2),c("span",{class:a([e.$style.top,e.$style.end])},[c("span",null,P(v(C)("budget.average")),1)],2),(m(!0),$(w,null,S(e.group.budgets,(n,V)=>(m(),$(w,{key:n.id+V},[y(H,{id:n.id,name:"budget-group",text:r,onDrop:s},null,8,["id"]),y(L,{color:"dimmed",icon:"close-circle",textual:"",onClick:T=>v(B)(n.id)},null,8,["onClick"]),c("span",{class:a(e.$style.header)},[y(W,{"model-value":n.name,"onUpdate:modelValue":T=>v(_)(n.id,T)},null,8,["model-value","onUpdate:modelValue"])],2),(m(!0),$(w,null,S(n.values,(T,G)=>(m(),$("span",{key:n.id+G,class:a([e.$style.currencyCell,{[e.$style.even]:V%2,[e.$style.firstRow]:V===0,[e.$style.firstColumn]:G===0,[e.$style.currentMonth]:v(D)(G),[e.$style.tlc]:V===0&&G===0,[e.$style.trc]:V===0&&G===11,[e.$style.blc]:V===e.group.budgets.length-1&&G===0,[e.$style.brc]:V===e.group.budgets.length-1&&G===11}])},[y(Ce,{"model-value":n.values[G],"onUpdate:modelValue":R=>v(N)(n.id,G,R)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),y(F,{class:a(e.$style.meta),value:v(z)(n.values)},null,8,["class","value"]),y(F,{class:a(e.$style.meta),value:v(q)(n.values)},null,8,["class","value"])],64))),128)),Te,y(L,{icon:"plus",class:a(e.$style.addBudgetBtn),textual:"",color:"success",onClick:f[2]||(f[2]=n=>v(i)(e.group.id))},null,8,["class"]),Ae,y(F,{class:a([e.$style.meta,e.$style.bold]),value:t.value},null,8,["class","value"]),y(F,{class:a([e.$style.meta,e.$style.bold]),value:g.value},null,8,["class","value"])],64))}}),Se="V_",Ee="W_",Le="X_",Pe="Y_",Re="Z_",Ue="_b",Ke="ab",Xe="bb",Ye="cb",ze="db",qe="eb",Oe="fb",We="gb",Ze="hb",je="ib",He={header:Se,meta:Ee,bold:Le,top:Pe,start:Re,end:Ue,currencyCell:Ke,firstRow:Xe,firstColumn:Ye,currentMonth:ze,even:qe,tlc:Oe,trc:We,blc:Ze,brc:je},Je={$style:He},Qe=E(Fe,[["__cssModules",Je]]),xe=c("span",null,null,-1),et=c("span",null,null,-1),tt=c("span",null,null,-1),st=c("span",null,null,-1),lt=c("span",null,null,-1),nt=c("span",null,null,-1),ot=c("span",null,null,-1),at=c("span",null,null,-1),ut=c("span",null,null,-1),rt=c("span",null,null,-1),ct=A({__name:"BudgetGroups",props:{type:{}},setup(M){const b=M,{state:l,moveBudgetGroup:d,addBudgetGroup:p,getBudgetGroup:i,isCurrentMonth:_}=X(),{t:h}=K(),N=k(()=>l[b.type]),B=ce(),D=k(()=>{const t=new Array(12).fill(0);for(const{budgets:g}of N.value)for(const{values:r}of g)for(let s=0;s<r.length;s++)t[s]+=r[s];return t}),C=t=>{const g=t.source?i(t.source):void 0,r=t.target?i(t.target):void 0;if(g)return r?t.type==="before"?h("budget.prepend",{from:g.name,to:r.name}):h("budget.append",{from:g.name,to:r.name}):h("budget.move",{from:g.name})},u=t=>{d(t.source,t.target,t.type==="after")};return(t,g)=>(m(),$("div",{class:a(t.$style.budgetGroups)},[xe,et,tt,(m(!0),$(w,null,S(v(B),(r,s)=>(m(),$("span",{key:r,class:a([t.$style.month,{[t.$style.current]:v(_)(s)}])},[c("span",null,P(r),1)],2))),128)),st,lt,nt,ot,c("span",{class:a(t.$style.sum)},P(v(h)("budget.totals")),3),(m(!0),$(w,null,S(D.value,(r,s)=>(m(),U(F,{key:s,value:r,class:a(t.$style.sum)},null,8,["value","class"]))),128)),at,ut,(m(!0),$(w,null,S(N.value,r=>(m(),$(w,{key:r.id},[y(H,{id:r.id,text:C,name:"budget-groups",onDrop:u},null,8,["id"]),y(Qe,{group:r},null,8,["group"])],64))),128)),rt,y(L,{class:a(t.$style.addGroupBtn),icon:"plus",text:v(h)("budget.addGroup"),onClick:g[0]||(g[0]=r=>v(p)(t.type))},null,8,["class","text"])],2))}}),dt="p_",pt="q_",it="r_",mt="s_",gt="t_",yt={budgetGroups:dt,sum:pt,month:it,current:mt,addGroupBtn:gt},vt={$style:yt},ft=E(ct,[["__cssModules",vt]]),$t=A({__name:"BudgetPane",props:{title:{},type:{}},setup(M){const b=M,{state:l}=X(),d=k(()=>ue(l[b.type])),p=k(()=>d.value.reduce((i,_)=>i+_,0));return(i,_)=>(m(),U(re,{amount:p.value,title:i.title},{header:O(()=>[y(de,{class:a(i.$style.miniChart),values:d.value},null,8,["class","values"])]),default:O(()=>[y(ft,{type:i.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),bt="r",_t={miniChart:bt},ht={$style:_t},Nt=E($t,[["__cssModules",ht]]);export{Nt as B};