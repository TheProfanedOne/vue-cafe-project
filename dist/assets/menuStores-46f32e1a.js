import{i as m}from"./loginRedirect-297c083d.js";import{d as i,o as s,c as r,a as n,t as u,F as h,n as _,j as d,h as l,r as o,q as c}from"./index-85c03f5a.js";import{a as g}from"./title-1e16faad.js";const p=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Price"),n("th",{class:"with-image"},"Image")])],-1),f={class:"with-image"},k=["src","alt"],x=i({__name:"MenuTable",props:{currMenu:null,items:null},setup(e){return(t,M)=>(s(),r("table",null,[n("caption",null,[n("h3",null,u(e.currMenu)+" Menu",1)]),p,n("tbody",null,[(s(!0),r(h,null,_(e.items,a=>(s(),r("tr",{key:a.item_name},[n("td",null,u(a.item_name),1),n("td",null,u(a.item_price),1),n("td",f,[n("img",{src:d(m)[a.img_src],alt:a.img_alt},null,8,k)])]))),128))])]))}}),L="/backend";function b(e){return g.get(`${L}/read_menu.php`,{params:{cat_name:e}})}const y={retrieveMenu:b},w=l("breakfast",()=>{const e=o([]),t=c(()=>e.value.length);return{menu:e,menuLength:t}}),D=l("lunch",()=>{const e=o([]),t=c(()=>e.value.length);return{menu:e,menuLength:t}}),F=l("dinner",()=>{const e=o([]),t=c(()=>e.value.length);return{menu:e,menuLength:t}});export{x as _,D as a,F as b,y as m,w as u};