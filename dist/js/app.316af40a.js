(function(e){function t(t){for(var r,s,l=t[0],i=t[1],c=t[2],f=0,v=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ba6":function(e,t,n){},"1db7":function(e,t,n){"use strict";var r=n("b76a"),o=n.n(r);o.a},"1e2e":function(e,t,n){"use strict";var r=n("86dd"),o=n.n(r);o.a},"45b0":function(e,t,n){"use strict";var r=n("7937"),o=n.n(r);o.a},"46f9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Footer"),n("SideMenu"),n("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bandeauFooter"},[n("h5",[e._v(" Tic Tac Toe")])])}],i={name:"Footer"},c=i,u=(n("1db7"),n("2877")),f=Object(u["a"])(c,s,l,!1,null,"25a26cfb",null),v=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bandeauSideMenu"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{alt:"logo tic tac toe",src:n("ac77"),width:"50%",height:"auto"}})]),r("hr",{staticClass:"seperatorBlanc"}),r("router-link",{attrs:{to:"/"}},[r("div",{staticClass:"btnSideNav"},[r("h2",[e._v("Jouer")])])]),r("router-link",{attrs:{to:"/scores"}},[r("div",{staticClass:"btnSideNav"},[r("h2",[e._v("Scores")])])]),r("hr",{staticClass:"seperatorBlanc"})],1)},p=[],d={name:"SideMenu"},b=d,m=(n("6444"),Object(u["a"])(b,h,p,!1,null,"62b2cd06",null)),y=m.exports,g={components:{Footer:v,SideMenu:y}},_=g,x=(n("5c0b"),Object(u["a"])(_,o,a,!1,null,null,null)),O=x.exports,w=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("br"),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("b-button",{on:{click:function(t){return e.singleplayer()}}},[e._v(" 1 joueur ")])],1),n("b-col",[n("b-button",{on:{click:function(t){return e.multiplayer()}}},[e._v(" 2 Joueurs")])],1)],1)],1)],1)},M=[],j={methods:{singleplayer:function(){ke.push("singleplayer")},multiplayer:function(){ke.push("multiplayer")}}},C=j,R=Object(u["a"])(C,k,M,!1,null,"afdc806a",null),S=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("br"),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("b-card",{attrs:{title:"Meilleurs scores"}},[n("b-card-text",[n("b-table",{attrs:{striped:"",hover:"",items:e.items}})],1)],1)],1)],1)],1)],1)},A=[],H={data:function(){return{items:[{psuedo:"concurrence",Victoires:4,Defaites:16,Ratio:.25},{psuedo:"Georges.tech",Victoires:16,Defaites:4,Ratio:4}]}}},I=H,P=Object(u["a"])(I,$,A,!1,null,"420ef9bb",null),T=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content",attrs:{id:"gameDiv"}},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("tic-tac-toe",{key:e.componentKey}),e._v(" "),n("br"),e._v(" "),n("b-button",{on:{click:function(t){return e.forceRerender()}}},[e._v("Recommencer")])],1),n("b-col")],1)],1)],1)},G=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tictactoe-board"},[e._l(3,(function(t,r){return n("div",{key:r},e._l(3,(function(t,o){return n("div",{key:o},[n("cell",{attrs:{value:e.board.cells[o][r]},on:{click:function(t){return e.performMove(o,r)}}})],1)})),0)})),e.gameOver?n("div",{staticClass:"game-over-text"},[e._v(" "+e._s(e.gameOverText)+" ")]):e._e()],2)},K=[],D=n("9f12"),F=n("53fe"),J=function(){function e(){Object(D["a"])(this,e),this.cells=[["","",""],["","",""],["","",""]]}return Object(F["a"])(e,[{key:"doMove",value:function(e,t,n){return""===this.cells[e][t]&&(this.cells[e][t]=n,!0)}},{key:"getScore",value:function(){var e=0;return this.playerHas3InARow("x")&&(e-=100),this.playerHas3InARow("o")&&(e+=100),e}},{key:"playerHas3InARow",value:function(e){for(var t=0;t<3;t++)if(this.cells[0][t]===e&&this.cells[1][t]===e&&this.cells[2][t]===e)return!0;for(var n=0;n<3;n++)if(this.cells[n][0]===e&&this.cells[n][1]===e&&this.cells[n][2]===e)return!0;return this.cells[0][0]===e&&this.cells[1][1]===e&&this.cells[2][2]===e||this.cells[2][0]===e&&this.cells[1][1]===e&&this.cells[0][2]===e}},{key:"isGameOver",value:function(){return 0===this.getPossibleMoves().length||this.playerHas3InARow("x")||this.playerHas3InARow("o")}},{key:"clone",value:function(){for(var t=new e,n=0;n<3;n++)for(var r=0;r<3;r++)t.cells[n][r]=this.cells[n][r];return t}},{key:"getPossibleMoves",value:function(){for(var e=[],t=0;t<3;t++)for(var n=0;n<3;n++)""===this.cells[t][n]&&e.push({x:t,y:n});return e}}]),e}(),U={data:function(){return{gameOver:!1,gameOverText:"",board:new J}},methods:{performMove:function(e,t){if(!this.gameOver&&this.board.doMove(e,t,"x")){if(this.$forceUpdate(),this.board.isGameOver())return this.gameOver=!0,void(this.gameOverText=this.board.playerHas3InARow("x")?"Gagné!":"Match nul");var n=this.minimax(this.board.clone(),"o");this.board.doMove(n.move.x,n.move.y,"o"),this.board.isGameOver()&&(this.gameOver=!0,this.gameOverText=this.board.playerHas3InARow("o")?"Perdu!":"Match nul"),this.$forceUpdate()}},minimax:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e.isGameOver())return{score:e.getScore()+n,move:null};for(var r="o"===t?-1e4:1e4,o=null,a=e.getPossibleMoves(),s=0;s<a.length;s++){var l=a[s],i=e.clone();i.doMove(l.x,l.y,t);var c=this.minimax(i,"x"===t?"o":"x",n+1).score;("o"===t&&c>r||"x"===t&&c<r)&&(r=c,o=l)}return{score:r,move:o}}}},B=U,N=(n("72ee"),Object(u["a"])(B,V,K,!1,null,null,null)),q=N.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cell",on:{click:function(t){return e.$emit("click")}}},[""!==e.value?n("span",[e._v(e._s(e.value))]):e._e()])},L=[],Q={props:{value:String}},W=Q,X=(n("f545"),Object(u["a"])(W,z,L,!1,null,null,null)),Y=X.exports;r["default"].component("tic-tac-toe",q),r["default"].component("cell",Y);var Z={data:function(){return{componentKey:0}},methods:{forceRerender:function(){this.componentKey+=1}}},ee=Z,te=(n("45b0"),Object(u["a"])(ee,E,G,!1,null,"4e96b256",null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content",attrs:{id:"gameDiv"}},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("tic-tac-toe-Multi",{key:e.componentKey}),e._v(" "),n("br"),e._v(" "),n("b-button",{on:{click:function(t){return e.forceRerender()}}},[e._v("Recommencer")])],1),n("b-col")],1)],1)],1)},oe=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tictactoe-board"},[e._l(3,(function(t,r){return n("div",{key:r},e._l(3,(function(t,o){return n("div",{key:o},[n("cell",{attrs:{value:e.board.cells[o][r]},on:{click:function(t){return e.performMove(o,r)}}})],1)})),0)})),e.gameOver?n("div",{staticClass:"game-over-text"},[e._v(" "+e._s(e.gameOverText)+" ")]):e._e()],2)},se=[],le=function(){function e(){Object(D["a"])(this,e),this.cells=[["","",""],["","",""],["","",""]]}return Object(F["a"])(e,[{key:"doMove",value:function(e,t,n){return""===this.cells[e][t]&&(this.cells[e][t]=n,!0)}},{key:"getScore",value:function(){var e=0;return this.playerHas3InARow("x")&&(e-=100),this.playerHas3InARow("o")&&(e+=100),e}},{key:"playerHas3InARow",value:function(e){for(var t=0;t<3;t++)if(this.cells[0][t]===e&&this.cells[1][t]===e&&this.cells[2][t]===e)return!0;for(var n=0;n<3;n++)if(this.cells[n][0]===e&&this.cells[n][1]===e&&this.cells[n][2]===e)return!0;return this.cells[0][0]===e&&this.cells[1][1]===e&&this.cells[2][2]===e||this.cells[2][0]===e&&this.cells[1][1]===e&&this.cells[0][2]===e}},{key:"isGameOver",value:function(){return 0===this.getPossibleMoves().length||this.playerHas3InARow("x")||this.playerHas3InARow("o")}},{key:"clone",value:function(){for(var t=new e,n=0;n<3;n++)for(var r=0;r<3;r++)t.cells[n][r]=this.cells[n][r];return t}},{key:"getPossibleMoves",value:function(){for(var e=[],t=0;t<3;t++)for(var n=0;n<3;n++)""===this.cells[t][n]&&e.push({x:t,y:n});return e}}]),e}(),ie={data:function(){return{gameOver:!1,gameOverText:"",board:new le,playerValue:"x"}},methods:{performMove:function(e,t){if(!this.gameOver&&this.board.doMove(e,t,this.playerValue)){if(this.$forceUpdate(),this.board.isGameOver())return this.gameOver=!0,void(this.gameOverText=this.board.playerHas3InARow(this.playerValue)?"Gagné!":"Match nul");"o"==this.playerValue?this.playerValue="x":this.playerValue="o"}}}},ce=ie,ue=(n("6158"),Object(u["a"])(ce,ae,se,!1,null,null,null)),fe=ue.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cell",on:{click:function(t){return e.$emit("click")}}},[""!==e.value?n("span",[e._v(e._s(e.value))]):e._e()])},he=[],pe={props:{value:String}},de=pe,be=(n("1e2e"),Object(u["a"])(de,ve,he,!1,null,null,null)),me=be.exports;r["default"].component("tic-tac-toe-Multi",fe),r["default"].component("cell",me);var ye={data:function(){return{componentKey:0}},methods:{forceRerender:function(){this.componentKey+=1}}},ge=ye,_e=(n("f56d"),Object(u["a"])(ge,re,oe,!1,null,"54fcbbca",null)),xe=_e.exports;r["default"].use(w["a"]);var Oe=[{path:"/",name:"home",component:S},{path:"/scores",name:"scores",component:T},{path:"/singleplayer",name:"singleplayer",component:ne},{path:"/multiplayer",name:"multiplayer",component:xe}],we=new w["a"]({mode:"history",base:"/",routes:Oe}),ke=we,Me=n("2f62");r["default"].use(Me["a"]);var je=new Me["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ce=n("5f5b");r["default"].use(Ce["a"]),r["default"].config.productionTip=!1,new r["default"]({router:ke,store:je,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6158:function(e,t,n){"use strict";var r=n("6a05"),o=n.n(r);o.a},6444:function(e,t,n){"use strict";var r=n("ab26"),o=n.n(r);o.a},"6a05":function(e,t,n){},"72ee":function(e,t,n){"use strict";var r=n("1ba6"),o=n.n(r);o.a},7937:function(e,t,n){},"823b":function(e,t,n){},"86dd":function(e,t,n){},"9c0c":function(e,t,n){},ab26:function(e,t,n){},ac77:function(e,t,n){e.exports=n.p+"img/ttt.a176f092.gif"},b76a:function(e,t,n){},f545:function(e,t,n){"use strict";var r=n("46f9"),o=n.n(r);o.a},f56d:function(e,t,n){"use strict";var r=n("823b"),o=n.n(r);o.a}});
//# sourceMappingURL=app.316af40a.js.map