import{d as f,u as b,y as x,c as k,Y as _,Z as h,a as i,i as v,n as c,p as r,t as B,k as s,o as a,_ as C}from"./index-5ebcd743.js";import{I}from"./Icon-eba58325.js";import{u as D}from"./useThemeStyles-850a8f7e.js";const M=f({__name:"Button",props:{class:{},iconClass:{},icon:{},text:{},tooltip:{},tooltipPosition:{},color:{default:"primary"},textual:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},emits:["click"],setup(u,{emit:p}){const t=u;b(o=>({cb9920d8:s(e).color.base,"5af31a4c":s(e).text.base,"4ab8ccc0":s(e).focus,aeed2022:s(e).pure.base,a6d50e4e:s(e).color.hover,"7ea2de53":s(e).text.hover,"68ff83de":s(e).pure.hover}));const n=x(),e=D(()=>t.color),d=k(()=>[t.class,n.button,{[n.hasIcon]:t.icon,[n.textual]:t.textual,[n.rounded]:t.rounded,[n.iconOnly]:t.icon&&!t.text}]);return(o,l)=>{const m=_("tooltip");return h((a(),i("button",{class:c(d.value),type:"button",onClick:l[0]||(l[0]=y=>p("click",y))},[o.icon?(a(),v(I,{key:0,class:c([o.$style.icon,o.iconClass]),icon:o.icon},null,8,["class","icon"])):r("",!0),o.text?(a(),i("span",{key:1,class:c(o.$style.text)},B(o.text),3)):r("",!0)],2)),[[m,{text:o.tooltip,position:o.tooltipPosition}]])}}}),O="Y",$="Z",P="__",S="a_",V="b_",Y="c_",Z="d_",g={button:O,iconOnly:$,hasIcon:P,text:S,icon:V,textual:Y,rounded:Z},w={$style:g},T=C(M,[["__cssModules",w]]);export{T as B};
