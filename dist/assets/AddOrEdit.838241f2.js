import{u as m,a as x,bL as _,aI as o,bk as g,e as t,V as $,bs as C,b9 as d,aZ as b,m as k,B as v,bq as h,n as F,U as I,bt as S,ae as c,I as T,b_ as L,T as E,bJ as M,S as q,F as B}from"./index.acf3a792.js";import{F as D}from"./FolderTree.7ee9cda3.js";import"./index.ab718934.js";import"./api.b7d8626c.js";const H=e=>{const r=m();return t(d,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(b,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(L,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(E,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(d,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(q,{get when(){return e.help},get children(){return t(B,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},O=()=>{const e=m(),{params:r,back:n}=x(),{id:u}=r,[s,l]=_({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1,header:"",header_sub:!1}),[f,w]=o(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await w();h(a,l)})();const[y,p]=o(()=>g.post(`/admin/meta/${u?"update":"create"}`,s));return t(I,{get loading(){return f()},get children(){return t($,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(C,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(d,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(b,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(D,{id:"path",get value(){return s.path},onChange:a=>l("path",a)})]}}),t(k,{each:[{name:"password",type:"string",sub:"p_sub"},{name:"write",type:"bool",sub:"w_sub"},{name:"hide",type:"text",sub:"h_sub",help:!0},{name:"header",type:"text",sub:"header_sub",help:!0},{name:"readme",type:"text",sub:"r_sub",help:!0}],children:a=>t(H,{get name(){return a.name},get type(){return a.type},get value(){return s[a.name]},onChange:i=>l(a.name,i),get sub(){return s[a.sub]},onSub:i=>l(a.sub,i),get help(){return a.help}})}),t(v,{get loading(){return y()},onClick:async()=>{const a=await p();h(a,()=>{F.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{O as default};
