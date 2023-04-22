(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Contrast Checker</h1>
    <p>Choose your color:</p>
    <input type="color" id="userColor"><br>
      <button id="colorBtn" type="button">CHECK COLOR</button>
      <div class="choosen-color" id="choosenColor"></div>
    <div class="light-dark-div">
      <div class="textdiv textdiv-light">
        <p class="dark-text">DARK TEXT</p>
      </div>
      <div class="textdiv textdiv-dark">
        <p class="light-text">WHITE TEXT</p>
      </div>
    </div>
    <div class="result-color" id="resultColor"></div>
  </div>
`;const i=document.querySelector("#colorBtn"),u=document.querySelector("#choosenColor"),n=document.querySelector("#resultColor");function d(e){console.log(e);const t=a(e),s=(.299*t.r+.587*t.g+.114*t.b)/255;console.log(s),g(s)}function a(e){console.log(e),e=e.replace("#",""),console.log(e);const t=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),l=parseInt(e.substring(4,6),16);return console.log(t,s,l),console.log({r:t,g:s,b:l}),{r:t,g:s,b:l}}function g(e){console.log(e),e>.5?(console.log("text is better black"),n.innerText="text is better dark"):(console.log("text should be light"),n.innerText="text should be light")}i.addEventListener("click",()=>{const e=document.querySelector("#userColor").value;console.log(e),u.innerText=`You choosed the color ${e}`,document.querySelectorAll(".textdiv").forEach(s=>{s.style.backgroundColor=e}),d(e)});
