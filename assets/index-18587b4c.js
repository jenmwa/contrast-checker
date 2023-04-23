(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Contrast Checker</h1>
    <p>Choose your color:</p>
    <input type="color" id="userColor"><br>
      <button id="colorBtn" type="button">CHECK COLOR</button>
    <div class="light-dark-div">
      <div class="textdiv textdiv-light">
        <p class="dark-text">DARK TEXT</p>
      </div>
      <div class="textdiv textdiv-dark">
        <p class="light-text">WHITE TEXT</p>
      </div>
    </div>
    <div class="choosen-color" id="choosenColor"></div>
    <div class="result-color" id="resultColor"></div>
  </div>
`;const i=document.querySelector("#colorBtn"),u=document.querySelector("#choosenColor"),n=document.querySelector("#resultColor");function d(o){console.log(o);const t=a(o),s=(.299*t.r+.587*t.g+.114*t.b)/255;console.log(s),g(s)}function a(o){console.log(o),o=o.replace("#",""),console.log(o);const t=parseInt(o.substring(0,2),16),s=parseInt(o.substring(2,4),16),l=parseInt(o.substring(4,6),16);return console.log(t,s,l),console.log({r:t,g:s,b:l}),{r:t,g:s,b:l}}function g(o){console.log(o),o>.5?(console.log("text is better dark"),n.innerText="If this is your background color, Your text should be dark"):(console.log("text should be light"),n.innerText="If this is your background color, the text should be light")}i.addEventListener("click",()=>{const o=document.querySelector("#userColor").value;console.log(o),u.innerText=`You choosed the color ${o}`,document.querySelectorAll(".textdiv").forEach(s=>{s.style.backgroundColor=o}),d(o)});
