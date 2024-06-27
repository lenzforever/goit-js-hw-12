import{a as u,S as y,i as a}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";async function h(s,e){const r="44335332-ac36bc3e12fb03490a95e8e95";return await u.get("",{params:{key:r,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}function g(s){return s.map(e=>`
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${e.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${e.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${e.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${e.downloads}</p>
          </div>
        </div>
      </div>
    `).join("")}function v(){A.classList.remove("is-hidden")}function b(){A.classList.add("is-hidden")}function w(){d.classList.remove("is-hidden")}function m(){d.classList.add("is-hidden")}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",A=document.querySelector(".loader"),d=document.querySelector(".show-more");let i=1,n=null;const S=document.querySelector("form"),c=document.querySelector(".gallery"),L=new y(".gallery a",{captionsData:"alt",captionsDelay:250});S.addEventListener("submit",async s=>{if(s.preventDefault(),c.innerHTML="",n=s.currentTarget.elements["search-query"].value.trim(),n===""){a.error({message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:p,theme:"dark"});return}v(),m(),i=1;try{const e=await h(n,i);e.data.total>0&&a.success({position:"topRight",message:`We find ${e.data.total} photo`}),e.data.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:p,theme:"dark"}),c.innerHTML=g(e.data.hits),L.refresh(),e.data.total>15&&w()}catch(e){console.log(e)}finally{s.target.reset(),b()}});d.addEventListener("click",async()=>{i++;try{const s=await h(n,i);c.insertAdjacentHTML("beforeend",g(s.data.hits));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"});const r=Math.ceil(s.data.totalHits/15);i===r&&(m(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.log(s)}finally{}});
//# sourceMappingURL=commonHelpers.js.map
