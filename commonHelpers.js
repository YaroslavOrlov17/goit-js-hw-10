import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";function h(e){const u=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:c,seconds:l}}const n=document.querySelector("button"),p=document.querySelector("span.value[data-seconds]"),y=document.querySelector("span.value[data-minutes]"),S=document.querySelector("span.value[data-hours]"),b=document.querySelector("span.value[data-days]");let r;n.disabled=!0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r.getTime()<Date.now()?(n.disabled=!0,f.error({position:"topRight",messageColor:"white",backgroundColor:"red",message:"Please choose a date in the future"})):n.disabled=!1}},s=document.querySelector("#datetime-picker");m(s,v);function d({days:e,hours:o,minutes:t,seconds:a}){p.textContent=String(a).padStart(2,"0"),y.textContent=String(t).padStart(2,"0"),S.textContent=String(o).padStart(2,"0"),b.textContent=String(e).padStart(2,"0")}function g(e){s.disabled=!0,n.disabled=!0;const o=setInterval(()=>{let t=r-Date.now();if(t<=0){s.disabled=!1,clearInterval(o),d({days:0,hours:0,minutes:0,seconds:0});return}const a=h(t);d(a)},1e3)}n.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
