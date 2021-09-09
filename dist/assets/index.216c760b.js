!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&n(t)})).observe(document,{childList:!0,subtree:!0})}function n(t){if(t.ep)return;t.ep=!0;const n=function(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?n.credentials="include":"anonymous"===t.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(t);fetch(t.href,n)}}();const t=document.createElement("section");t.classList.add("flex","items-center","justify-center");const n=document.querySelector("#root");const e=document.querySelector("#root"),o="https://rgcingenieria.herokuapp.com",s={mainUrl:o,s3Post:`${o}/gets3post`,listado:`${o}/listado`,getS3SignedPost:async(t,n)=>{const{s3Post:e}=s,o={proyectoId:t,key:n},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};return(await fetch(e,r)).json()},s3Post:`${o}/gets3post`,fotoToMongo:async t=>{const{agregarFoto:n}=s,[e,o]=t.split("/"),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({proyectoId:e,key:o})};return(await fetch(n,r)).json()},agregarFoto:`${o}/agregarfoto`},{listado:r}=s,i=async()=>{const t=await(async()=>{try{const t=await fetch(r);return await t.json()}catch(t){console.log(t)}})();return(await Promise.all(t.map((async t=>(async t=>`\n  <div class="px-2 bg-white border-2 border-indigo-300 rounded-lg">\n  <div class="flex justify-between my-4">\n  <div class="">\n  <span>Proyecto:</span>\n  <a class="text-indigo-700 text-sm py-1 rounded w-auto px-4 bg-indigo-200 hover:underline " href="#/proyecto"> ${t.proyectoId}</a>\n  </div>\n  <p class="">Status: <span>Activo</span></p>\n  </div>\n    <div class="mt-2 space-y-2 border-t-2 border-indigo-100">\n      <div class="">\n        <p class="">Sitio: <span>${t.sitio}</span></p>\n        <p class="">Nombre: <span>${t.nombre}</span></p>\n      </div>\n      <div class="justify-between pt-2 border-t-2 border-indigo-100 md:flex">\n        <p class="">Cliente: <span>${t.cliente}</span></p>\n        <p class="">Pedido: <span>202134</span></p>\n      </div>\n      \n      <div class="flex justify-between py-4 border-t-2 border-indigo-100">\n        <p class="">Fotos:<span class="ml-2">${t.fotos?t.fotos.length:0}</span></p>\n        <a data-prjId="${t.proyectoId}"\n          class="flex items-center justify-center w-24 h-8 text-indigo-700 bg-indigo-200 rounded-2xl"\n          href="#/subir"\n          >📸</a>\n      </div>\n    </div>\n  </div>`)(t))))).join("")};const a=document.querySelector("#root");const l={menuMobile:()=>{const t=document.querySelector("#items");t.classList.contains("hidden")||t.classList.toggle("hidden")},empty:()=>(t.innerHTML=null,a.append(t)),createForm:(t,n)=>{const e=new FormData;return Object.entries(t).forEach((([t,n])=>{e.append(t,n)})),e.append("Content-type",n.type),e.append("file",n),e}};const d={home:()=>(t.innerHTML='<div class="w-2/3 px-4 pb-8 my-12 bg-white rounded-lg">\n  <h1 class="text-red-700">This is Home</h1>\n</div>\n',n.append(t)),agregarProyecto:()=>{const n=document.querySelector("#root");return t.innerHTML='\n  <div class="w-full px-4 pb-8 my-12 bg-white rounded-lg sm:w-1/2">\n    <h2 class="my-4 text-2xl text-center">Agregar Proyecto</h2>\n    <form class="space-y-3">\n      <div>\n        <label class="lab" for="nombre">Nombre</label>\n        <input type="text" id="nombre" class="" />\n      </div>\n\n      <div>\n        <label class="lab" for="sitio">Sitio</label>\n        <input type="text" id="sitio" class="" />\n      </div>\n\n      <div>\n        <label class="lab" for="cliente">Cliente</label>\n        <input type="text" id="cliente" class="" />\n      </div>\n      <div class="lab">\n        <label for="pedido" class="block">Pedido Cliente </label>\n        <input type="text" id="pedido" class="" />\n      </div>\n      <div class="lab">\n        <label for="status" class="block">Status</label>\n        <select type="text" name="status" id="status" class="" >\n          <option value="Pendiente">Pendiente</option>\n          <option value="Activo">Activo</option>\n          <option value="terminado">Terminado</option>\n        </select>\n      </div>\n      <div class="flex justify-between pt-8">\n        <button\n          type="reset"\n          class="w-12 h-12 text-orange-200 transform bg-orange-500 rounded-full md:w-2/5 md:block md:rounded-xl hover:scale-y-105 ring-orange-300 ring-2"\n        >\n          <span class="hidden md:inline-block">Cancelar</span\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="inline w-6 h-6 md:ml-6"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke="currentColor"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              stroke-width="2"\n              d="M6 18L18 6M6 6l12 12"\n            />\n          </svg>\n        </button>\n        <button\n          class="w-12 h-12 text-green-200 transform bg-green-500 rounded-full md:w-2/5 md:block md:rounded-xl hover:scale-y-105 ring-green-300 ring-2"\n        >\n          <span class="hidden md:inline-block">Guardar</span\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="inline w-6 h-6 md:ml-6"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke="currentColor"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              stroke-width="2"\n              d="M5 13l4 4L19 7"\n            />\n          </svg>\n        </button>\n      </div>\n    </form>\n  </div>',n.append(t)},$Content:t,header:()=>{e.innerHTML='<header\n\tclass="fixed inset-x-0 top-0 h-16 text-xl text-indigo-300 bg-indigo-500"\n>\n\t<nav class="px-8 py-4 md:justify-between md:flex md:mx-auto md:space-y-0">\n\t\t\x3c!-- Logo --\x3e\n\t\t<div class="flex justify-between">\n\t\t\t<a href="#/home" class="flex">\n\t\t\t\t<svg\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\tclass="w-6 h-6"\n\t\t\t\t\tfill="none"\n\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\tstroke="currentColor"\n\t\t\t\t>\n\t\t\t\t\t<path\n\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\td="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\td="M15 12a3 3 0 11-6 0 3 3 0 016 0z"\n\t\t\t\t\t/>\n\t\t\t\t</svg>\n\t\t\t\t<span class="ml-1 font-bold">RGC Ingenieria</span></a\n\t\t\t>\n\t\t\t\x3c!-- Mobile HAMBURGER Menu --\x3e\n\t\t\t<div id="mobile" class="flex space-x-6 md:hidden">\n\t\t\t\t<button class="border border-indigo-200 rounded-lg">\n\t\t\t\t\t<svg\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\tclass="w-8 h-8"\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\t\td="M4 6h16M4 12h16M4 18h16"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t\x3c!--END HAmburgerr  --\x3e\n\t\t\t</div>\n\t\t</div>\n\t\t\x3c!-- primary nav --\x3e\n\t\t<div\n\t\t\tid="items"\n\t\t\tclass="hidden w-1/3 px-2 mt-3 space-y-6 text-sm text-left bg-indigo-500 md:space-x-4 md:text-xl md:block md:w-auto"\n\t\t>\n\t\t\t<a href="#/agregar" class="link">Agregar</a>\n\t\t\t<a href="#/listado" class="link"> Listar</a>\n\t\t\t<a href="#/subir" class="link"> Subir Foto</a>\n\t\t\t<a href="#/reporte" class="link">Reporte</a>\n\t\t\t<a href="#/salir" class="link">Salir</a>\n\t\t</div>\n\t</nav>\n</header>\n';const t=e.querySelector("#mobile"),n=e.querySelector("#items");return t.addEventListener("click",(()=>{n.classList.toggle("hidden")})),e},listado:async()=>{const t=document.querySelector("#root"),n=document.createElement("section");n.classList.add("grid","grid-cols-1","gap-2","mx-2","my-4","w-full","md:grid-cols-2","lg:grid-cols-4","pt-2");const{$Content:e,spinner:o}=d;e.append(o());const s=e.querySelector("#spin");n.innerHTML=await i(),e.append(n),s.classList.add("hidden"),t.append(e),n.addEventListener("click",(t=>!!t.target.matches("[data-prjid]")&&localStorage.setItem("prjID",t.target.dataset.prjid)))},subirFoto:()=>{const{$Content:t,spinner:n}=d,e=document.querySelector("#root"),{empty:o,createForm:r}=l;o();const{getS3SignedPost:i,fotoToMongo:a}=s;t.innerHTML='<div class="container mx-auto my-12 md:w-2/3">\n\t<form class="p-4 mx-2 space-y-12 bg-white rounded-lg">\n\t\t<h4 class="text-center">Captura de Fotos</h4>\n\t\t\x3c!-- ID Proyecto --\x3e\n\t\t<div class="w-full">\n\t\t\t<label class="lab" for="id-proyecto">Id Proyecto</label>\n\t\t\t<div class="mt-1">\n\t\t\t\t<input type="text" class="" id="id-proyecto" />\n\t\t\t</div>\n\t\t</div>\n\t\t\x3c!-- ==================== --\x3e\n\t\t\x3c!-- foto name --\x3e\n\t\t<div id="foto-name" class="border-b-2 border-indigo-100"></div>\n\t\t<fieldset class="flex space-x-10 space-y-2 border-b">\n\t\t\t<legend>Condicion:</legend>\n\t\t\t<input type="radio" name="condicion"  value="inicio">\n\t\t\t<label for="inicio">Inicial</label>\n\t\t\t<input type="radio" name="condicion"  value="final">\n\t\t\t<label for="final">Final</label>\n\t</fieldset>\n\t\t\x3c!-- Tomar foto --\x3e\n\t\n\t\t<div class="flex justify-between">\n\t\t\t<label\n\t\t\t\tfor="tomar"\n\t\t\t\tclass="w-12 h-12 pt-3 text-center text-yellow-800 transform bg-yellow-200 rounded-full cursor-pointer md:px-2 md:w-auto md:block md:rounded-xl hover:scale-y-105 ring-yellow-400 ring-2"\n\t\t\t\t><span class="hidden md:inline-block">Tomar Foto</span\n\t\t\t\t><span\n\t\t\t\t\t><svg\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\tclass="inline-block w-6 h-6 md:ml-12"\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\t\td="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"\n\t\t\t\t\t\t/></svg\n\t\t\t\t></span>\n\t\t\t</label>\n\t\t\t<input class="hidden" type="file" name="" id="tomar" />\n\t\t\t\x3c!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++End Input file +++++++++++++--\x3e\n\t\t\t\n\t\t\n\t\t\t\x3c!-- upload Buttotn --\x3e\n\t\t\t<button\n\t\t\t\tid="subir"\n\t\t\t\tclass="w-12 h-12 text-center text-indigo-800 transform bg-purple-200 rounded-full md:w-1/3 md:block md:rounded-xl hover:scale-y-105 ring-indigo-400 ring-2"\n\t\t\t>\n\t\t\t\t<span class="hidden md:inline-block">Subir</span\n\t\t\t\t><svg\n\t\t\t\t\tclass="inline-block w-6 h-6 md:ml-12"\n\t\t\t\t\tfill="none"\n\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t>\n\t\t\t\t\t<path\n\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\td="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"\n\t\t\t\t\t></path>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t\x3c!-- ++++++++end upload button++++++++ --\x3e\n\t\t</div>\n\t</form>\n</div>\n';const c=t.querySelector("#id-proyecto");c.value=localStorage.getItem("prjID");const p=e.querySelector("#tomar"),u=e.querySelector("#subir"),m=e.querySelector("#foto-name");return p.addEventListener("change",(()=>{m.textContent=p.files[0].name})),u.addEventListener("click",(async t=>{t.preventDefault();const n=p.files[0],{name:e}=p.files[0],{url:o,fields:s}=await i(c.value,e);await fetch(o,{method:"POST",body:r(s,n)});const l=await a(s.key);console.log(l)})),e.append(t)},notFound:()=>{const n=document.querySelector("#root");return t.innerHTML='<div class="w-2/3 px-4 pb-8 my-12 bg-white rounded-lg">\n\t<h1 class="text-red-700">404: not found</h1>\n</div>\n',n.append(t)},rawList:i,spinner:()=>{const t=document.createElement("div");return t.id="spin",t.classList.add("mt-24","mx-auto","bg-red-500","border-2","border-black","text-4xl","animate-pulse"),t.textContent="Aguanta Vara!!!!!!",t}},{menuMobile:c,empty:p}=l,u=async t=>{const{home:n,listado:e,subirFoto:o,agregarProyecto:s,notFound:r}=d;if(void 0===t||"#"===t||"#/"===t||"#/home"===t)return n();switch(c(),p(),t){case"#/agregar":return s();case"#/listado":return await e();case"#/subir":return o();case"#/salir":return r();default:return console.log("te chingas"),r()}};d.header(),document.addEventListener("DOMContentLoaded",(()=>{u()})),window.addEventListener("load",(()=>{console.log("window.load event"),window.location.hash="#/"})),window.addEventListener("hashchange",(()=>{u(window.location.hash)}));
