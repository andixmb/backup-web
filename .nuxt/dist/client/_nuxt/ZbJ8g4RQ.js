import{f as B,u as C,r as o,g as D,C as S,h as L,c as _,a as s,F,n as V,i as t,l as d,q as v,b as h,w as m,t as c,d as b,_ as $,o as g}from"./Biz5SVmj.js";const j={class:"p-5"},q=s("h2",{class:"text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current"},[b(" 📄 Blog Posts "),s("svg",{class:"absolute-bottom-0.5 w-full max-h-1.5",viewBox:"0 0 55 5",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},[s("path",{d:"M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002",strokeWidth:"2"})])],-1),A={className:"mt-2"},I={class:"flex justify-between mt-5"},M={class:"text-gray-600 font-bold"},R={class:"text-white p-1 rounded-full bg-black font-bold"},E={class:"text-gray-600 font-bold"},W=B({__name:"index",setup(H){C({title:"Blogs - 0xandixmb"});const w=o([]),f=o(""),x=o(""),n=o(!0),r=o(!1),i=o([]),y=o({0:"🔥",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣",10:"🔟"}),P=D(),l=o(1),k=async e=>{const a=await $fetch("/api/post?method=pagination&page="+e);w.value=a.body,f.value=parseInt(e)+1,x.value=parseInt(e)-1,i.value=a,l.value=e,e<=1?r.value=!1:r.value=!0,e>=i.value.totalPage?n.value=!1:n.value=!0};return S(l,async e=>{await k(e);let a=i.value;e>=a.totalPage?n.value=!1:n.value=!0,e<=1?r.value=!1:r.value=!0}),L(async()=>{let e=P.query.p??1;l.value=e,await k(l.value)}),(e,a)=>{const p=$;return g(),_("div",null,[s("section",j,[q,s("ul",A,[(g(!0),_(F,null,V(t(w),(u,N)=>(g(),_("li",{class:"flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600",key:u.slug},[h(p,{to:"/blog/"+u.slug},{default:m(()=>[b(c(t(y)[N]??"💠")+" "+c(u.title),1)]),_:2},1032,["to"]),s("span",null,"["+c(new Date(u.createdAt).toDateString())+"]",1)]))),128))]),s("div",I,[d(h(p,{to:"/blog/?p="+t(x),onClick:a[0]||(a[0]=u=>l.value=t(x)),class:"text-black font-bold hover:text-amber-800"},{default:m(()=>[b("🔙 Previous ")]),_:1},8,["to"]),[[v,t(r)]]),d(s("span",M,"🔙 Previous",512),[[v,!t(r)]]),s("span",R," ( "+c(t(l))+" / "+c(t(i).totalPage)+" )",1),d(h(p,{to:"/blog/?p="+t(f),onClick:a[1]||(a[1]=u=>l.value=t(f)),class:"text-black font-bold hover:text-amber-800"},{default:m(()=>[b("Next 🔜")]),_:1},8,["to"]),[[v,t(n)]]),d(s("span",E,"Next 🔜",512),[[v,!t(n)]])])])])}}});export{W as default};