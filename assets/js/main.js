document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,c=document.getElementById(e);t.classList.toggle("is-active"),c.classList.toggle("is-active")}))}));var e=document.querySelectorAll(".navbar-item")[0];document.addEventListener("click",(function(t){(t.composedPath().includes(e)||e.classList.contains("is-active"))&&e.classList.toggle("is-active")}))}));