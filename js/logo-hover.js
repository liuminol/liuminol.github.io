"use strict";!function(){if(800<window.screen.width){var e,n=document.querySelector(".page-header__logo"),o=function(e){for(var n=!1;!n;){var o=Math.round(Math.random()*e);if((o<238||248<o)&&(o<53||63<o))return n=!0,o}},r=function(){e="rgb("+o(255)+", "+o(255)+", "+o(255)+")",n.style.fill=e};n.addEventListener("mouseover",function(){window.debounce(r)})}}();