import{d as f,u as x,y as b,c as k,$ as v,a0 as B,o as a,a as i,i as h,n as c,p as r,t as C,k as s,_ as I}from"./index-1bee1cb1.js";import{I as $}from"./Icon-3e6d397d.js";import{u as D}from"./useThemeStyles-0768f685.js";const M=f({__name:"Button",props:{class:{},iconClass:{},icon:{},text:{},tooltip:{},tooltipPosition:{},color:{default:"primary"},textual:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},emits:["click"],setup(u,{emit:p}){const t=u;x(o=>({cb9920d8:s(e).color.base,"5af31a4c":s(e).text.base,"4ab8ccc0":s(e).focus,aeed2022:s(e).pure.base,a6d50e4e:s(e).color.hover,"7ea2de53":s(e).text.hover,"68ff83de":s(e).pure.hover}));const n=b(),e=D(()=>t.color),d=k(()=>[t.class,n.button,{[n.hasIcon]:t.icon,[n.textual]:t.textual,[n.rounded]:t.rounded,[n.iconOnly]:t.icon&&!t.text}]);return(o,l)=>{const m=v("tooltip");return B((a(),i("button",{class:c(d.value),type:"button",onClick:l[0]||(l[0]=y=>p("click",y))},[o.icon?(a(),h($,{key:0,class:c([o.$style.icon,o.iconClass]),icon:o.icon},null,8,["class","icon"])):r("",!0),o.text?(a(),i("span",{key:1,class:c(o.$style.text)},C(o.text),3)):r("",!0)],2)),[[m,{text:o.tooltip,position:o.tooltipPosition}]])}}}),O="v",_="w",w="x",z="y",P="z",S="A",V="B",g={button:O,iconOnly:_,hasIcon:w,text:z,icon:P,textual:S,rounded:V},A={$style:g},j=I(M,[["__cssModules",A]]);export{j as B};
