(this.webpackJsonptestin=this.webpackJsonptestin||[]).push([[0],{19:function(n,t,e){n.exports=e(44)},24:function(n,t,e){},25:function(n,t,e){},44:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(15),i=e.n(o),c=(e(24),e(25),e(4)),u=e(5),s=e(16),p=e.n(s),l=e(2),g=e(3);function d(){var n=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');\nfont-family: 'ZCOOL QingKe HuangYou', cursive;\n\n@media (min-width: 1024px){\n  border-radius:5px;\n}\n\nmin-width: 100%;\nbackground: ",";\nbox-shadow: 0px 0px 30px 0px rgba(255,226,179,0.5);\ncolor: #1a1b1f;\nfont-size: 4vh;\nmargin-bottom: 20px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nh1{\n  opacity:0.8;\n}\n"]);return d=function(){return n},n}var f=function(n){var t=n.text;return a.a.createElement(b,{color:m(t)},a.a.createElement("h1",null,t))},b=g.a.div(d(),(function(n){return n.color}));function m(n){switch(n){case"OK":return"linear-gradient(90deg, \n        rgba(183,255,179,1) 0%, \n        rgba(126,255,121,1) 5%, \n        rgba(48,255,15,1) 36%, \n        rgba(48,255,15,1) 66%, \n        rgba(151,255,121,1) 95%, \n        rgba(188,255,179,1) 100%);";case"ERROR":return"linear-gradient(90deg, \n        rgba(255,179,179,1) 0%, \n        rgba(255,148,121,1) 5%, \n        rgba(255,95,15,1) 36%, \n        rgba(255,95,15,1) 66%, \n        rgba(255,148,121,1) 95%, \n        rgba(255,179,179,1) 100%);";case"\ud83d\udd12 LOCKED":return"linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(199,199,199,1) 5%, rgba(177,177,177,1) 36%, rgba(177,177,177,1) 66%, rgba(199,199,199,1) 95%, rgba(222,222,222,1) 100%);";default:return"linear-gradient(90deg,\n        rgba(255,226,179,1) 0%,\n        rgba(255,204,121,1) 5%,\n        rgba(255,160,112,1) 36%,\n        rgba(255,160,112,1) 66%,\n        rgba(255,204,122,1) 95%,\n        rgba(255,226,179,1) 100%);\n      "}}function x(n){return R===n?"OK":"ERROR"}function h(){var n=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');\nfont-family: 'ZCOOL QingKe HuangYou', cursive;\nfont-size:5vh;\ncolor: lightgray;\ncursor:pointer;\n\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nmin-width:100px;\nbackground: #1a1b1f;\n\nborder: 1px solid #1a1b1f; \nborder-radius: 5%;\n\nbox-shadow: \n5px 5px 20px 0px rgba(21,21,24,1),\n1px 1px 0px 0px rgba(255,255,255,0.05),\n-5px -5px 20px 0px rgba(36,37,41,1);\n\n&:hover{\n  color: orange;\n}\n\n&:active{\n  box-shadow: \n    inset 5px 5px 20px 0px rgba(21,21,24,1),\n    1px 1px 0px 0px rgba(255,255,255,0.05),\n    inset -5px -5px 20px 0px rgba(36,37,41,1);\n}\n\n"]);return h=function(){return n},n}var O=function(n){var t=n.number,e=n.onClick;return a.a.createElement(v,{onClick:e,role:"key"},t)},v=g.a.button(h());function w(){var n=Object(l.a)(["\ndisplay:grid;\ngrid-template-columns:1fr 1fr 1fr;\ngrid-template-rows: 1fr 1fr 1fr 1fr;\ngrid-column-gap: 20px;\ngrid-row-gap: 20px;\n\nbutton:nth-of-type(10){\n  grid-column: 2/3;\n}\n\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n\nwidth: 400px;\nheight: 600px;\n\n@media(max-width:1024px){\n  width:100vw;\n  height:100vh;\n}\n\n&:last-child(1) {\n  background: orange;\n  opacity:0.3;\n}\n\ndisplay:grid;\ngrid-template-rows: 1fr 3fr;\n"]);return y=function(){return n},n}var E=g.a.div(y()),j=g.a.div(w()),C=function(){var n="OK",t="ERROR",e="\ud83d\udd12 LOCKED",o={textOnDisplay:"",password:"",attemptsCounter:0},i=Object(r.useState)(o),s=Object(u.a)(i,2),l=s[0],g=s[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1];function v(n){g(Object(c.a)({},l,{textOnDisplay:n}))}function w(n){return 4===l.textOnDisplay.length&&x(l.password)===n}Object(r.useEffect)((function(){console.warn("\nRemember son, the code is :",R),p.a.get("https://jsonplaceholder.typicode.com/users").then((function(n){var t=n.data;h(t[3].name)}))}),[]),w(n)&&(v(n),setTimeout((function(){g(o)}),1e3*1),function(n){setTimeout((function(){alert("Bienvenido/a ".concat(m))}),1e3*n)}(1)),w("ERROR")&&(2===l.attemptsCounter?(v(e),setTimeout((function(){g(o)}),3e4)):(v(t),g(Object(c.a)({},l,{attemptsCounter:l.attemptsCounter+1})),setTimeout((function(){g(Object(c.a)({},l,{textOnDisplay:"",password:""}))}),1e3)));var y=function(n,t){for(var e=0;e<10;e++)n.push(e);return n.map((function(n){return a.a.createElement(O,{key:n,onClick:function(){return t(n)},number:n})}))}([],(function(n){var t,e=n.toString();l.textOnDisplay.length<4&&g(Object(c.a)({},l,{password:l.password+e,textOnDisplay:(t=l.textOnDisplay+e,t.split("").map((function(n,e){return t.length===e+1?n:"*"})).join(""))}))})).reverse();return a.a.createElement(E,null,a.a.createElement(f,{text:l.textOnDisplay}),a.a.createElement(j,null,y))},R="4455",k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.28550095.chunk.js.map