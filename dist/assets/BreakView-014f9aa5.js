import{u,_ as m,m as f}from"./menuStores-7e6f2d10.js";import{u as l}from"./title-8399a55a.js";import{u as p}from"./loginRedirect-26b232b9.js";import{d as n,i as d,o,k as c,j as k,l as r,S as B,m as h,a as g}from"./index-903f8c0e.js";import"./userStore-e823b9a7.js";const x=n({__name:"BreakAsync",async setup(i){let e,a;l("Breakfast Menu");const _=p("breakfast"),t=u();if(!_&&t.menuLength===0){const s=([e,a]=d(()=>f.retrieveMenu("Breakfast")),e=await e,a(),e);s.data!=="Error: Invalid Category"&&(t.menu=s.data)}return(s,y)=>(o(),c(m,{currMenu:"Breakfast",items:k(t).menu},null,8,["items"]))}}),w=g("h1",{id:"fallback"},"Loading...",-1),V=n({__name:"BreakView",setup(i){return(e,a)=>(o(),c(B,null,{default:r(()=>[h(x)]),fallback:r(()=>[w]),_:1}))}});export{V as default};
