(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,":root {\n\t--box-size: 28px;\n\t--grid-size: 8;\n\tfont-family: 'Lato', sans-serif;\n\tbox-sizing: border-box;\n}\n\n* {\n\tbackground-color: rgb(16, 16, 17);\n\tcolor: white;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\theight: 100vh;\n}\n\n.game {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tflex-direction: column;\n\tgap: 3px;\n}\n\n.settings {\n\tdisplay: flex;\n\tgap: 8px;\n}\n\n.game,\n.settings {\n\twidth: fit-content;\n\tmargin: 0 auto;\n}\n\n.board {\n\twidth: 280px;\n\theight: 280px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(var(--grid-size), auto);\n\tgrid-template-rows: repeat(var(--grid-size), auto);\n\tmargin-top: 10px;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 3px;\n}\n\n#You .grid-pos {\n\tborder: 1px solid rgb(42, 74, 124);\n}\n\n.grid-pos {\n\tborder: 1px solid rgb(70, 70, 70);\n\twidth: var(--box-size);\n\theight: var(--box-size);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tfont-size: 2rem;\n\t/* transition: 0.4s all; */\n}\n\n.grid-pos:hover {\n\tborder: 1px solid green;\n}\n\n.placeholder {\n\tbackground-color: rgb(0, 83, 69);\n}\n\n.hit {\n\tbackground-color: rgba(107, 3, 3, 0.61);\n}\n\n.miss {\n\tbackground-color: rgb(44, 44, 44);\n}\n\n.occupied {\n\tbackground-color: rgb(22, 22, 119);\n}\n\n.winner {\n\tfont-size: 2rem;\n\ttext-align: center;\n}\n\nbutton {\n\tappearance: none;\n\tcolor: white;\n\toutline: none;\n\tborder-radius: 5px;\n\tborder: none;\n\tpadding: 8px;\n}\n\n.reset {\n\tbackground-color: rgb(192, 0, 0);\n}\n\n.reset:hover {\n\tbackground-color: red;\n}\n\n.orientation {\n\tbackground-color: rgb(69, 69, 69);\n}\n\n.orientation:hover {\n\tbackground-color: gray;\n}\n\n.header {\n\tfont-size: 1.8rem;\n}\n\n.header,\n.footer,\n.status,\n.name {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 8px;\n}\n\n.footer {\n\tgap: 10px;\n}\n\n.status,\n.name {\n\tfont-size: 1.2rem;\n}\n\n.status {\n\tmargin: 10px 0;\n\tcolor: rgb(255, 234, 43);\n}\n",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t=8){let e={};return e.dim=t,e.ships=[],e.occupied=[],e.misses=[],e.hits=[],e.placeShip=function(t,n,r,o=!0){let i=t(n,r,o);(function(t,e){let n=JSON.stringify(t.occupied);for(let r=0;r<e.length;r++){let o=e[r];if(o[0]>=t.dim||o[1]>=t.dim)return!1;if(-1!=n.indexOf(o))return!1}return!0})(e,i.position)&&(e.occupied=e.occupied.concat(i.position),e.ships.push(i))},e.receiveAttack=function(t){if(function(t,e){return-1==JSON.stringify(t.occupied).indexOf(e)}(e,t))e.misses.push(t);else if(function(t,e){return-1==JSON.stringify(t.hits).indexOf(e)}(e,t)){e.hits.push(t);for(let n=0;n<e.ships.length;n++){let r=e.ships[n];for(let e=0;e<r.position.length;e++)JSON.stringify(r.position[e])==JSON.stringify(t)&&r.hit()}}},e.isAllSunk=function(){let t=e.ships;for(let e=0;e<t.length;e++)if(0==t[e].isSunk())return!1;return!0},e}const e=(t,e="You")=>{let n={};return n.name=e,n.isComputer=!1,n.board=t(),n.hitQueue=[],n.attack=function(t,e){if(n.isComputer){let o=t.board.hits.length,i=t.board.misses.length,a=t.board.dim;for(;t.board.hits.length==o&&t.board.misses.length==i;)e=n.hitQueue.length?n.hitQueue.shift():r(a),t.board.receiveAttack(e);if(t.board.hits.length>o){let t=function(t,e){let[n,r]=t,o=[[n,r-1],[n,r+1],[n-1,r],[n+1,r]];for(let t=0;t<2;t++)o=o.filter((n=>n[t]<e&&n[t]>=0));return o}(e,a);n.hitQueue=n.hitQueue.concat(t)}}else t.board.receiveAttack(e)},n};function r(t){return[Math.floor(Math.random()*t),Math.floor(Math.random()*t)]}const o=(t,e,n=!0)=>{let r={};r.length=t,r.numOfHits=0,r.position=[];let[o,i]=e;for(let e=0;e<t;e++)r.position.push([o,i]),n?o+=1:i+=1;return r.hit=function(){r.numOfHits+=1},r.isSunk=function(){return r.length<=r.numOfHits},r},i=(()=>{const n=e(t),a=e(t,"Computer");let s=[3,3,4];return a.isComputer=!0,function(t,e){let n=t.board.dim;e.forEach((e=>{let i=t.board.ships,a=i.length;for(;i.length==a;){let i=r(n),a=Math.random()>=.5;t.board.placeShip(o,e,i,a)}}))}(a,s),{p1:n,p2:a,shipLengths:s,isOver:function(t,e){return t.board.isAllSunk()||e.board.isAllSunk()},getWinner:function(t,e){return t.board.isAllSunk()?e:t},playRound:function(t,e,n,r=null){t.attack(e,r),n.updateHitAndMiss(e),i.isOver(t,e)?n.end(i,document.querySelector(".status")):(e.attack(t),n.updateHitAndMiss(t),i.isOver(t,e)&&n.end(i,document.querySelector(".status")))}}})(),a={setup:function(t,e){let n=document.createElement("div");n.classList.add("board"),e.isComputer&&(n.style.display="none"),n.setAttribute("id",e.name);let r=e.board,o=0;for(;o<r.dim*r.dim;){let t=document.createElement("div");t.classList.add("grid-pos"),t.setAttribute("id",o),e.isComputer||t.addEventListener("click",d),n.appendChild(t),o++}let i=document.createElement("div");i.textContent=e.name,i.classList.add("name"),e.isComputer&&(i.style.display="none"),t.appendChild(n),t.appendChild(i)},updateHitAndMiss:function(t){let e=document.getElementById(t.name).querySelectorAll(".grid-pos"),n=t.board;n.hits.forEach((t=>{let r=s(n.dim,t);e[r].classList.remove("occupied"),e[r].classList.add("hit")})),n.misses.forEach((t=>{let r=s(n.dim,t);e[r].classList.add("miss")}))},updateOccupied:function(t){let e=document.getElementById(t.name),n=t.board;n.occupied.forEach((r=>{let o=s(n.dim,r);t.isComputer||e.querySelectorAll(".grid-pos")[o].classList.add("occupied")}))},end:function(t,e){document.querySelectorAll(".grid-pos").forEach((t=>{t.removeEventListener("click",l)}));let n=t.getWinner(t.p1,t.p2);e.textContent=`Winner: ${n.name}`}};function s(t,e){return e[0]+t*e[1]}function c(t,e){return[e%t,Math.floor(e/t)]}function l(t){let e=c(i.p1.board.dim,t.target.id);i.playRound(i.p1,i.p2,a,e),t.target.removeEventListener("click",l)}function d(t){let e=i.p1.board,n=e.dim,r=document.getElementById(i.p1.name),s=e.ships.length,p=u();if(e.placeShip(o,i.shipLengths[0],c(n,t.target.id),p),e.ships.length!=s&&(i.shipLengths.shift(),a.updateOccupied(i.p1)),0==i.shipLengths){r.querySelectorAll(".grid-pos").forEach((t=>t.removeEventListener("click",d)));let t=document.querySelector("#Computer.board");t.querySelectorAll(".grid-pos").forEach((t=>t.addEventListener("click",l))),t.style.display="grid",document.querySelectorAll(".name")[1].style.display="flex",document.querySelector(".orientation").style.display="none",document.querySelector(".status").textContent="Game is live!"}}function u(){return"Horizontal"==document.querySelector(".orientation").textContent}var p=n(379),f=n.n(p),h=n(795),m=n.n(h),g=n(569),v=n.n(g),y=n(565),b=n.n(y),x=n(216),S=n.n(x),k=n(589),E=n.n(k),L=n(426),C={};C.styleTagTransform=E(),C.setAttributes=b(),C.insert=v().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=S(),f()(L.Z,C),L.Z&&L.Z.locals&&L.Z.locals;let A=document.querySelector(".game");a.setup(A,i.p1),a.setup(A,i.p2),document.querySelector(".orientation").addEventListener("click",(t=>{let e=t.target.textContent;t.target.textContent="Vertical"==e?"Horizontal":"Vertical"}));let O=document.querySelector("#You.board").querySelectorAll(".grid-pos");function q(){O.forEach((t=>t.classList.remove("placeholder")));let t=u(),e=i.p1.board.dim,n=i.shipLengths[0],r=this.parentNode,o=Array.prototype.indexOf.call(r.children,this);if(t&&function(t,e,n){return c(t,e)[1]==c(t,e+n-1)[1]}(e,o,n))for(let t=o;t<o+n;t++)r.children[t].classList.add("placeholder");else if(!t&&function(t,e,n){return c(t,e+(n-1)*t)[1]<t}(e,o,n))for(let t=o;t<o+e*n;t+=e)r.children[t].classList.add("placeholder")}O.forEach((t=>{t.addEventListener("mouseenter",q)})),document.querySelector(".reset").addEventListener("click",(()=>{window.location.reload()}))})()})();