"use strict";!function(){var t=$(".accordion__header"),e=$(".accordion__content");$(".accordion__header span");$(t).click(function(){$(this).hasClass("is-active")?($(this).next(e).slideUp("slow"),$(this).removeClass("is-active")):($(t).not(this).next(e).slideUp("slow"),$(t).not(this).removeClass("is-active"),$(this).next(e).slideDown("slow"),$(this).addClass("is-active"))}),function(){window.onscroll=function(){var t=document.getElementById("nav-top");window.scrollY>document.getElementsByClassName("hero")[0].clientHeight&&(t.style.display="flex")}}($),$(document).ready(function(){$(".navbar a, footer a[href='#myPage']").on("click",function(t){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top-40},1e3,function(){window.location.hash=e})})});var i=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};i.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,s=300-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){i.tick()},s)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var s=t[e].getAttribute("data-rotate"),n=t[e].getAttribute("data-period");s&&new i(t[e],JSON.parse(s),n)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)}}();