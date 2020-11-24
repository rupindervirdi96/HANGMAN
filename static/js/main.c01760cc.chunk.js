(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/hint.f6dd9a75.svg"},13:function(n,e,t){n.exports=t.p+"static/media/score.248d8ad5.png"},14:function(n,e,t){n.exports=t.p+"static/media/darkMode.f050bb95.svg"},21:function(n,e,t){n.exports=t(34)},26:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(8),o=t.n(i),l=t(1),p=(t(26),t(2)),c=t(12),d=t.n(c),u=t(13),s=t.n(u),m=t(14),f=t.n(m),x=t(3);function b(){var n=Object(l.a)(["\n  padding: 10px;\n  background-color: #ff8a31;\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  font-size: 16px;\n  transform: translate(-50%, 0%);\n  top: 100%;\n  color: #fff;\n  transition: 150ms all linear;\n  ","\n"]);return b=function(){return n},n}var g=p.a.div(b(),(function(n){}));var E=function(n){var e=n.type,t=n.message,a=n.show;return r.a.createElement(g,{type:e,show:a},t)};function h(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  margin: auto;\n  align-items: center;\n  padding: 10px 0px 0px 0px;\n\n  li {\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    display: flex;\n    background-color: #fff;\n    background-position: center;\n    background-size: cover;\n    transition: 100ms all linear;\n    :nth-child(even) {\n      height: 40px;\n      width: 40px;\n      img {\n        height: 28px;\n        width: 28px;\n        margin: auto;\n      }\n    }\n    :hover {\n      background-color: #fff;\n      transition: 100ms all linear;\n      transform: scale(1.2);\n    }\n    img {\n      height: 22px;\n      width: 22px;\n      margin: auto;\n    }\n  }\n"]);return h=function(){return n},n}function y(){var n=Object(l.a)(["\n  height: 25px;\n  width: 22px;\n  margin: 3px;\n  display: inline-block;\n  color: White;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 2px;\n  ","\n"]);return y=function(){return n},n}function v(){var n=Object(l.a)(["\n  text-align: center;\n  width: 60%;\n  margin: auto;\n  border-radius: 5px;\n  div {\n    display: inline-block;\n    margin: 0px 10px;\n  }\n"]);return v=function(){return n},n}function O(){var n=Object(l.a)(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  padding: 20px 0px;\n  border-radius: 10px;\n  margin: 10px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  .puzzle-navBar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0px 10px;\n    h2 {\n      flex: 1;\n      font-family: "Itim", monospace;\n      font-size: 25px;\n      font-weight: normal;\n      text-align: center;\n    }\n    span {\n      color: white;\n      font-size: 12px;\n    }\n  }\n']);return O=function(){return n},n}function w(){var n=Object(l.a)(["\n  min-width: 100%;\n  margin: 10px 0px;\n  display: grid;\n  grid-template-rows: 2fr max-content;\n"]);return w=function(){return n},n}function R(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  margin: auto;\n  text-align: center;\n  display: none;\n  ",";\n  div {\n    display: inline-block;\n    color: #ff8a31;\n    background: white;\n    padding: 6px 10px;\n    margin: 10px;\n    border-radius: 3px;\n  }\n"]);return R=function(){return n},n}var k=p.a.div(R(),(function(n){return n.hide?"display:none":"display:block"})),j=p.a.div(w()),N=p.a.div(O()),T=p.a.div(v()),C=p.a.span(y(),(function(n){return" "===n.text?"border:none":"border-bottom: 2px solid rgba(255, 255, 255, 1)"})),A=p.a.ul(h()),S=function(){var n,e=Object(x.c)((function(n){return{game:n.game,app:n.app}})),t=e.game,a=e.app,i=Object(x.b)();return r.a.createElement(j,null,r.a.createElement(N,null,r.a.createElement(E,null),r.a.createElement("div",{className:"puzzle-navBar"},r.a.createElement("span",null,"Question: ",t.questionCount+1,"/10"),r.a.createElement("h2",null,t.currCat?t.currCat:"Select a category to begin.."),r.a.createElement("span",null,"Attempts left: ",t.attemptsRemaining)),r.a.createElement("div",{style:{position:"relative",margin:"auto",width:"90%"}},r.a.createElement(k,{hide:a.begin},t.puzzles.map((function(n){return r.a.createElement("div",{onClick:function(){i({type:"SET_CURR_CAT",payload:n}),i({type:"BEGIN_GAME",payload:!0})}},n.category)}))),r.a.createElement(T,{hide:a.begin},null===(n=t.questions[t.questionCount])||void 0===n?void 0:n.trim().split(" ").map((function(n){return r.a.createElement("div",null,n.split("").map((function(e,t){return r.a.createElement(C,{key:t,text:n.toUpperCase()},e.toUpperCase())})))}))))),r.a.createElement(A,null,r.a.createElement("li",null,r.a.createElement("img",{src:d.a,alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:s.a,alt:"",onClick:function(){return t.attemptsRemaining>0?i({type:"CORRECT_GUESS"}):""}})),r.a.createElement("li",null,r.a.createElement("img",{src:f.a,alt:"",onClick:function(){return i({type:"APP_MODE"})}}))))};function M(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0px;\n  margin: 0 auto;\n  justify-content: center;\n  transition: 150ms all linear;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  @media (max-width: 350px) {\n    width: 300px;\n    transition: 150ms all linear;\n  }\n  .top,\n  .middle,\n  .bottom {\n    display: flex;\n    justify-content: center;\n    .key {\n      height: 30px;\n      width: 30px;\n      display: flex;\n      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);\n      margin: 5px;\n      transition: 150ms all linear;\n      border-radius: 2px;\n      background-color: #ff8a31;\n      :hover {\n        transform: scale(1.1);\n      }\n      @media (max-width: 460px) {\n        height: 20px;\n        width: 20px;\n        transition: 150ms all linear;\n      }\n      span {\n        margin: auto;\n        font-size: 14px;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return M=function(){return n},n}var I=p.a.div(M()),z=function(n){var e=Object(x.c)((function(n){return{keys:n.app.keys}})).keys;return r.a.createElement(I,{className:"keyboard",onKeyDown:function(){console.log("hello")}},r.a.createElement("div",{className:"top"},e.top.map((function(n,e){return r.a.createElement("div",{onClick:function(){return alert(n)},key:e,className:"key"},r.a.createElement("span",null,n))}))),r.a.createElement("div",{className:"middle"},e.middle.map((function(n,e){return r.a.createElement("div",{onClick:function(){return alert(n)},key:e,className:"key"},r.a.createElement("span",null,n))}))),r.a.createElement("div",{className:"bottom"},e.bottom.map((function(n,e){return r.a.createElement("div",{onClick:function(){return alert(n)},key:e,className:"key"},r.a.createElement("span",null,n))}))))};function G(){var n=Object(l.a)(["\n  position: absolute;\n  width: 200px;\n  background-color: #fdfdfd;\n  z-index: -1;\n  overflow: hidden;\n  top: 100%;\n  left: 100%;\n  transform: translateX(-100%);\n  ",';\n  border-radius: 5px;\n  h3 {\n    color: #0099ac;\n    padding: 12px 0px 13px 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  input {\n    padding: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    outline: none;\n    margin: 10px 0;\n  }\n  input[type="submit"] {\n    margin: 0px;\n    padding: 5px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    background-color: #fff;\n    color: #2d2d2d;\n  }\n']);return G=function(){return n},n}function _(){var n=Object(l.a)(["\n  position: absolute;\n  width: 200px;\n  background-color: #fdfdfd;\n  z-index: -1;\n  overflow: hidden;\n  top: 100%;\n  ",";\n  border-radius: 5px;\n  transition: 150ms all linear;\n\n  h3 {\n    color: #0099ac;\n    padding: 12px 0px 13px 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  ul {\n    padding: 10px 0px;\n  }\n  ul li {\n    padding: 5px;\n    border-radius: 3px;\n    transition: 150ms all linear;\n    font-size: 14px;\n    :hover {\n      transition: 150ms all linear;\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n"]);return _=function(){return n},n}function U(){var n=Object(l.a)(['\n  display: grid;\n  grid-template-columns: max-content 1fr max-content;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0px;\n  position: relative;\n  border-radius: 5px 5px 0px 0px;\n  z-index: 1;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  button {\n    padding: 10px;\n    font-size: 12px;\n    color: #fff;\n    background-color: #ff8a31;\n    border: none;\n    border-radius: 2px;\n    transition: 100ms all linear;\n    outline: none;\n    :hover {\n      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);\n      transition: 100ms all linear;\n    }\n    @media (max-width: 460px) {\n      padding: 6px;\n      font-size: 8px;\n    }\n  }\n  h1 {\n    text-align: center;\n    display: inline;\n    color: white;\n    font-family: "Roboto", monospace;\n    letter-spacing: 5px;\n    @media (max-width: 460px) {\n      font-size: 16px;\n    }\n  }\n']);return U=function(){return n},n}var P=p.a.div(U()),H=(p.a.div(_(),(function(n){return n.hide?"height: 0;padding: 0;border: none;opacity:0; transition: 150ms all linear;":"transition: 150ms all linear;  padding: 10px 10px 0px 10px;  border: 1px solid rgba(0, 0, 0, 0.1);"})),p.a.div(G(),(function(n){return n.hide?"height: 0;padding: 0;border: none;transition: 150ms all linear;":"transition: 150ms all linear;padding: 10px;border: 1px solid rgba(0, 0, 0, 0.1);"})),function(){var n=Object(x.c)((function(n){return{app:n.app}})).app,e=Object(x.b)();return r.a.createElement(P,null,r.a.createElement("button",{onClick:function(){"cat"===n.type?e({type:"TYPE_OF_MENU",payload:""}):e({type:"TYPE_OF_MENU",payload:"cat"})}},"CHANGE CATEGORY"),r.a.createElement("h1",null,"HANGMAN"),r.a.createElement("button",{onClick:function(){"register"===n.type?e({type:"TYPE_OF_MENU",payload:""}):e({type:"TYPE_OF_MENU",payload:"register"})}},"REGISTER SCORE"))});function D(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 10px;\n  span {\n    margin: auto;\n    color: rgba(255, 255, 255, 0.6);\n    font-size: 12px;\n    text-align: center;\n  }\n"]);return D=function(){return n},n}var Y=p.a.div(D()),F=function(n){return r.a.createElement(Y,null,r.a.createElement("span",null,"\xa9 2020 rupindervirdi. All rights reserved."))};function L(){var n=Object(l.a)(["\n  ",';\n  h3 {\n    color: #fff;\n    padding: 12px 0px 12px 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  input {\n    padding: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    outline: none;\n    color: black;\n    margin: 10px 0;\n  }\n  input[type="submit"] {\n    margin: 0px;\n    padding: 5px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    background-color: #0091ff;\n    color: white;\n  }\n']);return L=function(){return n},n}function q(){var n=Object(l.a)(["\n  ",";\n  h3 {\n    color: #fff;\n    padding: 12px 0px 13px 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  ul {\n    padding: 10px 0px 0px 0px;\n  }\n  ul li {\n    padding: 5px;\n    border-radius: 3px;\n    transition: 150ms all linear;\n    font-size: 14px;\n    :hover {\n      transition: 150ms all linear;\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n"]);return q=function(){return n},n}function B(){var n=Object(l.a)(["\n  height: auto;\n  position: absolute;\n  width: 200px;\n  background-color: #ff8a31;\n  z-index: -10;\n  border-radius: 5px;\n  padding: 10px;\n  overflow: hidden;\n  ",";\n"]);return B=function(){return n},n}var W=p.a.div(B(),(function(n){return"cat"===n.type?"left: 0%;transform:translateX(-100%);transition:250ms all linear;":"register"===n.type?"left:100%;transition:250ms all linear;":"left:50%;transition:250ms all linear;"})),K=p.a.div(q(),(function(n){return""===n.type?"display:block":"register"===n.type?"display:none; transition-delay:50ms":""})),X=p.a.div(L(),(function(n){return""==n.type?"display:block":"cat"===n.type?"display:none;transition-delay:150ms":""})),J=function(n){var e=Object(x.c)((function(n){return{app:n.app,game:n.game}})),t=e.app,a=e.game,i=Object(x.b)();return r.a.createElement(W,{type:t.type},r.a.createElement(K,{type:t.type},r.a.createElement("h3",null,"Categories"),r.a.createElement("ul",{type:"none"},a.puzzles.map((function(n,e){return r.a.createElement("li",{key:e,onClick:function(){i({type:"SET_CURR_CAT",payload:n}),i({type:"TYPE_OF_MENU",payload:""}),i({type:"BEGIN_GAME",payload:!0})}},n.category)})))),r.a.createElement(X,{type:t.type},r.a.createElement("h3",null,"Your Score: ",a.score),r.a.createElement("form",{action:""},r.a.createElement("input",{type:"text",placeholder:"your name here"}),r.a.createElement("input",{type:"submit",value:"ENTER"}))))};function V(){var n=Object(l.a)(["\n\n"]);return V=function(){return n},n}p.a.div(V());var Q=function(n){return r.a.createElement("div",null)};function Z(){var n=Object(l.a)(["\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  z-index: -1;\n  border-radius: 10px;\n  background-color: ",";\n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  height: 80vh;\n  margin: auto;\n  width: 700px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);\n  display: grid;\n  position: relative;\n  z-index: 1;\n  padding: 0px 10px;\n  grid-template-rows: max-content 2fr 1fr;\n  @media (max-width: 460px) {\n    width: 400px;\n  }\n"]);return $=function(){return n},n}var nn=p.a.div($()),en=p.a.div(Z(),(function(n){return"bright"===n.mode?"#0091ff":"#000000"})),tn=function(n){var e=Object(x.c)((function(n){return{app:n.app}})).app;return r.a.createElement(nn,null,r.a.createElement(en,{mode:e.mode}),r.a.createElement(J,null),r.a.createElement(H,null),r.a.createElement(S,null),r.a.createElement(z,null),r.a.createElement(F,null),r.a.createElement(Q,null))};function an(){var n=Object(l.a)(["\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  background-color: ",";\n"]);return an=function(){return n},n}var rn=p.a.div(an(),(function(n){return"bright"===n.mode?"#e9e9e9":"#666666"})),on=function(){var n=Object(x.c)((function(n){return{app:n.app}})).app;return Object(a.useEffect)((function(){document.querySelector(".keyboard").focus()})),r.a.createElement(rn,{mode:n.mode},r.a.createElement(tn,null))},ln=t(5),pn=t(19),cn=t(20),dn=t(4),un={puzzles:[{category:"MOVIES",questions:["MATRIX","WANTED","LORD OF THE RINGS","TRANSFORMERS","THE SHAWSHANK REDEMPTION","THE FORREST GUMP","DUMB AND DUMBER","PAPILLON","CATCH ME IF YOU CAN","THE HUNGER GAMES"]},{category:"TV SERIES",questions:["PEAKY BLINDERS","LUCIFER","EMILY IN PARIS","FRIENDS","TWO AND A HALF MEN","STRANGER THINGS","PUNISHER","GOTHAM","MONEY HEIST","MIRZAPUR"]},{category:"DAILY",questions:["TOOTHPASTE","SUNLIGHT","MOBILE PHONE","MILK","BEDROOM","GROCERY","KEYS","REFRIGERATOR","METRO","LAPTOP"]}],currCat:"",questions:[],guessedLetters:[],correctGuess:[],questionCount:0,attemptsRemaining:7,score:0},sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case"SET_CURR_CAT":return Object(dn.a)(Object(dn.a)({},n),{},{currCat:a.category,questions:a.questions,questionCount:0});case"CORRECT_GUESS":case"WRONG_GUESS":return Object(dn.a)(Object(dn.a)({},n),{},{attemptsRemaining:n.attemptsRemaining-1});default:return n}},mn={type:"",keys:{top:["Q","W","E","R","T","Y","U","I","O","P"],middle:["A","S","D","F","G","H","J","K","L"],bottom:["Z","X","C","V","B","N","M"]},begin:!1,mode:"bright"},fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case"TYPE_OF_MENU":return Object(dn.a)(Object(dn.a)({},n),{},{type:a});case"BEGIN_GAME":return Object(dn.a)(Object(dn.a)({},n),{},{begin:a});case"APP_MODE":return"bright"===n.mode?Object(dn.a)(Object(dn.a)({},n),{},{mode:"dark"}):Object(dn.a)(Object(dn.a)({},n),{},{mode:"bright"});default:return n}},xn=Object(ln.combineReducers)({app:fn,game:sn}),bn=[cn.a],gn=Object(pn.composeWithDevTools)({trace:!0,traceLimit:25}),En=Object(ln.createStore)(xn,{},gn(ln.applyMiddleware.apply(void 0,bn)));o.a.render(r.a.createElement(x.a,{store:En},r.a.createElement(on,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c01760cc.chunk.js.map