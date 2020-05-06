(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t){},108:function(e,t){},117:function(e,t){},153:function(e,t,n){},155:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Se}));var a=n(0),o=n.n(a),c=n(24),l=n.n(c),r=n(12),s=n(13),i=(n(82),n(1)),u=n(4),m=Object(u.b)({name:"userSlice",initialState:{currentUser:null,users:[]},reducers:{setUsers:function(e,t){e.users=t.payload},setUser:function(e,t){e.currentUser=t.payload},resetUser:function(e,t){e.currentUser=null}}}),d=m.actions,p=d.setUser,h=d.setUsers,b=d.resetUser,f=m.reducer,v=Object(u.b)({name:"codeSlice",initialState:{componentName:"Untitled",codeState:!1,mode:"html",css:"",html:"",js:""},reducers:{updateCSS:function(e,t){e.css=t.payload},updateHTML:function(e,t){e.html=t.payload},updateJS:function(e,t){e.js=t.payload},toggleCode:function(e,t){e.codeState=!e.codeState},setMode:function(e,t){e.mode=t.payload},setName:function(e,t){e.componentName=t.payload},resetCode:function(e,t){e.codeState=!1,e.css="",e.html="",e.js=""}}}),g=v.actions,E=g.toggleCode,w=g.setMode,N=g.updateCSS,y=g.updateHTML,C=g.updateJS,j=g.resetCode,S=g.setName,k=v.reducer,x=Object(u.b)({name:"loadSlice",initialState:{loadState:!1,mode:"lib",query:"",components:[]},reducers:{toggleLoad:function(e,t){e.loadState=!e.loadState},setComponents:function(e,t){e.components=t.payload},setMode:function(e,t){e.mode=t.payload},removeComponent:function(e,t){e.components=e.components.filter((function(e){return e.id!==t.payload}))},resetComponents:function(e,t){e.components=[]},filterComponents:function(e,t){e.query=t.payload}}}),O=x.actions,R=O.toggleLoad,z=O.setComponents,M=O.setMode,_=O.resetComponents,L=O.removeComponent,U=O.filterComponents,A=x.reducer,B=(n(87),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e}));return o.a.createElement("div",{className:"nav-bar"},o.a.createElement(r.b,{to:"/"},o.a.createElement("button",{className:"nav-brand",type:"button"},"Quicksilver")),t.user.currentUser?[o.a.createElement(r.b,{to:"/"},o.a.createElement("button",{className:"nav-link",onClick:function(){return e(b()),e(j()),e(_()),e(R())},type:"button"},"Logout"))]:null,t.user.currentUser?null:[o.a.createElement(r.b,{to:"/login"},o.a.createElement("button",{className:"nav-link",type:"button"},"Login"))],t.user.currentUser?null:[o.a.createElement(r.b,{to:"/sign_up"},o.a.createElement("button",{className:"nav-link",type:"button"},"Register"))])}),T=(n(47),Object(u.b)({name:"canvasSlice",initialState:{width:"1000px",height:"600px"},reducers:{resizeCanvas:function(e,t){switch(t.payload){case"lg":e.height="600px",e.width="1000px";break;case"md":e.height="500px",e.width="800px";break;case"sm":e.height="400px",e.width="640px";break;case"mb":e.height="500px",e.width="300px"}}}})),H=T.actions.resizeCanvas,I=T.reducer,V=(n(90),function(){var e=Object(i.c)((function(e){return e})),t=function(e){var t=e.html,n=e.css,a=e.js,o=function(e,t){var n=new Blob([e],{type:t});return URL.createObjectURL(n)},c=o(n,"text/css"),l=o(a,"text/javascript");return o("\n      <html>\n        <head>\n          ".concat(n&&'<link rel="stylesheet" type="text/css" href="'.concat(c,'" />'),"\n          ").concat(a&&'<script src="'.concat(l,'"><\/script>'),"\n        </head>\n        <body>\n          ").concat(t||"","\n        </body>\n      </html>\n    "),"text/html")}({html:e.code.html,css:e.code.css,js:e.code.js});return o.a.createElement("div",null,o.a.createElement("iframe",{className:"main-canvas",src:t,style:{width:e.canvas.width,height:e.canvas.height}}),o.a.createElement("div",{className:"iframe-shield",style:{width:e.canvas.width,height:e.canvas.height}}))}),F=Object(u.b)({name:"menuSlice",initialState:{menuState:!1},reducers:{toggleMenu:function(e,t){e.menuState=!e.menuState}}}),P=F.actions.toggleMenu,J=F.reducer,q=n(45),D=n.n(q),W=n(72),Q=n.n(W),$=(n(153),Object(u.b)({name:"saveSlice",initialState:{saveFormState:!1},reducers:{toggleSaveForm:function(e,t){e.saveFormState=!e.saveFormState}}})),G=$.actions.toggleSaveForm,K=$.reducer,X=Object(u.b)({name:"importSlice",initialState:{importState:!1},reducers:{toggleImport:function(e,t){e.importState=!e.importState}}}),Y=X.actions.toggleImport,Z=X.reducer,ee=n(154),te=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),n="import React from 'react';\nimport 'CSS_FILE_PATH';\n\nexport default const ".concat(t.code.componentName," = () => {\n\treturn (\n").concat(D()(t.code.html).replace(/^/gm,"\t\t"),"\n\t)\n};");return o.a.createElement("div",{className:"menu-bar"},o.a.createElement("button",{className:"action-btn coding-btn",key:"2",title:"Code",onClick:function(){return e(E())}},o.a.createElement("svg",{className:"bi bi-code-slash",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z","clip-rule":"evenodd"}))),o.a.createElement("button",{className:"action-btn load-btn",key:"4",title:"Components",onClick:function(){return e(R())}},o.a.createElement("svg",{className:"bi bi-card-list",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",clipRule:"evenodd"}),o.a.createElement("circle",{cx:"3.5",cy:"5.5",r:".5"}),o.a.createElement("circle",{cx:"3.5",cy:"8",r:".5"}),o.a.createElement("circle",{cx:"3.5",cy:"10.5",r:".5"}))),o.a.createElement("button",{className:"action-btn export-btn",key:"5",title:"Export Component",onClick:function(){return function(){var e=new ee;e.file("".concat(t.code.componentName,"HTML.html"),t.code.html),e.file("".concat(t.code.componentName,"CSS.css"),t.code.css),e.file("".concat(t.code.componentName,"JS.js"),t.code.js),e.file("".concat(t.code.componentName,".js"),D()(n)),e.generateAsync({type:"blob"}).then((function(e){Q.a.saveAs(e,"Quicksilver_".concat(t.code.componentName,".zip"))}))}()}},o.a.createElement("svg",{className:"bi bi-upload",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z",clipRule:"evenodd"}))),o.a.createElement("button",{className:"action-btn import-btn",key:"6",title:"Import Component",onClick:function(){return e(Y())}},o.a.createElement("svg",{className:"bi bi-download",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z",clipRule:"evenodd"}))),t.user.currentUser?[o.a.createElement("button",{className:"action-btn save-btn",key:"7",title:"Save Component",onClick:function(){return e(G())}},o.a.createElement("svg",{className:"bi bi-box-arrow-in-down",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M4.646 8.146a.5.5 0 01.708 0L8 10.793l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 01.5.5v9a.5.5 0 01-1 0v-9A.5.5 0 018 1z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13.5A1.5 1.5 0 003 15h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013 4h-1.5a.5.5 0 000 1H13a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-8A.5.5 0 013 5h1.5a.5.5 0 000-1H3a1.5 1.5 0 00-1.5 1.5v8z",clipRule:"evenodd"})))]:null,o.a.createElement("button",{className:"action-btn clear-btn",key:"3",title:"Clear All Code",onClick:function(){return e(C("")),e(N("")),void e(y(""))}},o.a.createElement("svg",{className:"bi bi-x",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z","clip-rule":"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z","clip-rule":"evenodd"}))),o.a.createElement("button",{className:"action-btn close-btn",key:"1",title:"Close Menu",onClick:function(){return e(P())}},o.a.createElement("svg",{className:"bi bi-caret-down-fill",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"}))))},ne=(n(155),function(){var e=Object(i.b)();return o.a.createElement("button",{className:"menu-btn",onClick:function(){return e(P())}},o.a.createElement("svg",{class:"menu-arrow bi bi-caret-up-fill",width:"4em",height:"4em",viewBox:"0 0 16 16",fill:"rgba(0, 0, 0, 0.6)",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"})))}),ae=function(){var e=Object(i.c)((function(e){return e.menu.menuState}));Object(i.b)();return o.a.createElement("div",{className:"menu-container"},e?o.a.createElement(te,null):o.a.createElement(ne,null))},oe=n(32),ce=(n(65),n(158),n(159),n(66),n(67),n(160),n(33)),le=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.code}));document.getElementsByClassName("main-canvas");return o.a.createElement("div",{className:"code-box"},"css"===t.mode?[o.a.createElement(ce.UnControlled,{value:t.css,options:{mode:"css",theme:"material",lineNumbers:!0},onChange:function(t,n,a){var o=t.getCursor();e(N(t.getValue())),t.setCursor(o)}})]:null,"html"===t.mode?[o.a.createElement(ce.UnControlled,{value:t.html,options:{mode:"htmlmixed",theme:"material",lineNumbers:!0},onChange:function(t,n,a){var o=t.getCursor();e(y(t.getValue())),t.setCursor(o)}})]:null,"js"===t.mode?[o.a.createElement(ce.UnControlled,{value:t.js,options:{mode:"javascript",theme:"material",lineNumbers:!0},onChange:function(t,n,a){var o=t.getCursor();e(C(t.getValue())),t.setCursor(o)}})]:null)},re=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),n=function(t){e(w(t))};return Object(a.useEffect)((function(){var e=document.querySelector(".html-btn"),n=document.querySelector(".css-btn"),a=document.querySelector(".js-btn");switch(t.code.mode){case"html":a.style.backgroundColor="#162228",e.style.backgroundColor="#263238",n.style.backgroundColor="#162228";break;case"css":a.style.backgroundColor="#162228",e.style.backgroundColor="#162228",n.style.backgroundColor="#263238";break;case"js":a.style.backgroundColor="#263238",e.style.backgroundColor="#162228",n.style.backgroundColor="#162228"}})),o.a.createElement(oe.a,{className:"code-box-container",default:{height:400,x:50,y:window.innerHeight/3},bounds:".main-container",cancel:".code-box"},o.a.createElement("button",{className:"code-btn html-btn",onClick:function(){return n("html")}},"HTML"),o.a.createElement("button",{className:"code-btn css-btn",onClick:function(){return n("css")}},"CSS"),o.a.createElement("button",{className:"code-btn js-btn",onClick:function(){return n("js")}},"JavaScript"),o.a.createElement(le,null))},se=n(46),ie=(n(68),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),n=function(n,a){if(n.preventDefault(),-1!==t.code.componentName.indexOf(" ")||""===t.code.componentName)alert("Name mustn't be empty or contain any spaces!");else{var o=localStorage.getItem("token");a?fetch("http://localhost:8080/library_components",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},body:JSON.stringify({name:t.code.componentName,js_code:t.code.js,css_code:t.code.css,html_code:t.code.html,img_src:"https://pics.me.me/thumb_pepehands-emote-pepe-t-shirt-teepublic-51219604.png"})}).then((function(e){return e.json()})).then((function(n){e(G()),e(z([].concat(Object(se.a)(t.load.components),[n])))})):fetch("http://localhost:8080/user_components",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},body:JSON.stringify({name:t.code.componentName,user_id:t.user.currentUser.id,js_code:t.code.js,css_code:t.code.css,html_code:t.code.html,img_src:"https://pics.me.me/thumb_pepehands-emote-pepe-t-shirt-teepublic-51219604.png"})}).then((function(e){return e.json()})).then((function(n){e(G()),e(z([].concat(Object(se.a)(t.load.components),[n])))}))}};return o.a.createElement("div",null,o.a.createElement("label",{className:"save-label"},"Do you wish to save this component as ",o.a.createElement("br",null),t.code.componentName,"?"),o.a.createElement("br",null),o.a.createElement("button",{className:"yes-btn",onClick:function(e){return n(e,!1)}},o.a.createElement("svg",{className:"bi bi-check",width:"2em",height:"2em",viewBox:"0 0 16 16",stroke:"green",fill:"green",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}))),o.a.createElement("button",{className:"no-btn",onClick:function(){return e(G())}},o.a.createElement("svg",{className:"bi bi-x",width:"2em",height:"2em",viewBox:"0 0 16 16",stroke:"red",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))),o.a.createElement("button",{onClick:function(e){return n(e,!0)}},"Save To Library"))}),ue=function(){return o.a.createElement("div",{className:"save-component-container"},o.a.createElement(ie,null))},me=n(171),de=(n(162),function(e){var t=Object(i.b)(),n=e.component.user_id?"user_components":"library_components";return o.a.createElement("div",{style:{height:"40px"}},o.a.createElement("div",{className:"component-item",onClick:function(){var a=localStorage.getItem("token");fetch("http://localhost:8080/".concat(n,"/").concat(e.component.id),{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).then((function(e){e&&(t(N(e.css_code)),t(y(e.html_code)),t(C(e.js_code)))}))}},e.component.name),e.component.user_id?[o.a.createElement("button",{className:"delete-btn",onClick:function(){var n=localStorage.getItem("token");fetch("http://localhost:8080/user_components/".concat(e.component.id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(n){console.log("Deleted!"),console.log(n),t(L(e.component.id)),t(j())}))}},o.a.createElement("svg",{className:"delete-icon bi bi-x",width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z","clip-rule":"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z","clip-rule":"evenodd"})))]:null)}),pe=(n(69),function(){var e=Object(i.b)();return o.a.createElement("div",{className:"search-container"},o.a.createElement("input",{className:"search-bar",onChange:function(t){return e(U(t.target.value))},type:"text"}))}),he=function(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)(),n=function(n){var a=localStorage.getItem("token"),o="";o=n?"library_components":"user_components",fetch("http://localhost:8080/"+o,{headers:{Authorization:"Bearer: ".concat(a)}}).then((function(e){return e.json()})).then((function(a){var o=a;t(_()),n||(o=a.filter((function(t){return t.user_id===e.user.currentUser.id}))),t(z(o))}))};Object(a.useEffect)((function(){e.user.currentUser?(n(!1),t(M("user"))):(n(!0),t(M("lib")))}),[]),Object(a.useEffect)((function(){var t=document.querySelector("#libTab"),n=document.querySelector("#userTab");e.user.currentUser&&("lib"===e.load.mode?(n.style.backgroundColor="#162228",t.style.backgroundColor="#263238"):(t.style.backgroundColor="#162228",n.style.backgroundColor="#263238"))}));var c=function(e){switch(e){case"lib":n(!0),t(M("lib"));break;case"user":n(!1),t(M("user"))}};return o.a.createElement(oe.a,{className:"component-container",bounds:".main-container",default:{x:window.innerWidth/1.02-320,y:window.innerHeight/2.88-250,width:320,height:500},enableResizing:{bottom:!0,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1}},o.a.createElement("p",{className:"component-label"},"Components"),e.user.currentUser?[o.a.createElement("button",{id:"userTab",className:"component-tab",onClick:function(){return c("user")}},"My Components")]:null,o.a.createElement("button",{id:"libTab",className:"component-tab",onClick:function(){return c("lib")}},"Library"),o.a.createElement("div",{className:"component-list"},o.a.createElement(pe,null),e.load.components.filter((function(t){return t.name.includes(e.load.query)})).map((function(e){return o.a.createElement(de,{component:e,key:Object(me.a)()})}))))},be=n(76),fe=(n(163),function(){var e=Object(i.b)();return o.a.createElement("div",{className:"import-container"},o.a.createElement(be.a,{onDrop:function(t){return function(t){var n=new FileReader;n.readAsText(t,"UTF-8"),n.onload=function(a){switch(t.type){case"text/css":e(N(a.target.result));break;case"text/html":e(y(a.target.result));break;case"text/javascript":e(C(a.target.result));break;default:alert("File Type Not Supported")}n.onerror=function(e){alert("File not loaded!")}}}(t[0])}},(function(e){var t=e.getRootProps,n=e.getInputProps;return o.a.createElement("div",Object.assign({className:"dropzone"},t()),o.a.createElement("input",n()),o.a.createElement("p",null,"Drag 'n' drop files here, or click to Browse"))})))}),ve=(n(164),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e}));return Object(a.useEffect)((function(){fetch("http://localhost:8080/users").then((function(e){return e.json()})).then((function(t){e(h(t))}))}),[]),o.a.createElement("div",{className:"main-container",style:{height:window.innerHeight-37}},o.a.createElement("input",{type:"text",className:"component-name",value:t.code.componentName,onChange:function(t){return e(S(t.target.value))}}),o.a.createElement(V,null),t.code.codeState?o.a.createElement(re,null):null,t.save.saveFormState?o.a.createElement(ue,null):null,t.load.loadState?o.a.createElement(he,null):null,t.import.importState?o.a.createElement(fe,null):null,o.a.createElement("br",null),o.a.createElement("div",{className:"resize-container"},o.a.createElement("button",{className:"lg-btn",onClick:function(){return e(H("lg"))}},o.a.createElement("svg",{className:"bi bi-window",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M15 6H1V5h14v1z",clipRule:"evenodd"}),o.a.createElement("path",{d:"M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"}))),o.a.createElement("button",{className:"mb-btn",onClick:function(){return e(H("mb"))}},o.a.createElement("svg",{className:"bi bi-phone",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z",clipRule:"evenodd"}),o.a.createElement("path",{fillRule:"evenodd",d:"M8 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})))),o.a.createElement(ae,null))}),ge=(n(165),function(){var e=Object(i.b)(),t=Object(s.e)(),n=function(n){fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:n.username,password:n.password})}).then((function(e){return e.json()})).then((function(n){n.jwt?(localStorage.setItem("username",n.user.username),localStorage.setItem("password",n.user.password),localStorage.setItem("token",n.jwt),t.push("/"),console.log("Welcome back ".concat(n.user.username,"!")),e(p(n.user))):(alert("Login Invalid! Username or Password is Incorrect."),console.log("Invalid Login"))}))};return o.a.createElement("div",{className:"login-form"},o.a.createElement("h2",{className:"form-header"},"Login"),o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={username:e.target[0].value,password:e.target[1].value};n(t)}(e)}},o.a.createElement("label",{className:"form-label"},"Username"),o.a.createElement("br",null),o.a.createElement("input",{className:"form-input",type:"text"}),o.a.createElement("br",null),o.a.createElement("label",{className:"form-label"},"Password"),o.a.createElement("br",null),o.a.createElement("input",{className:"form-input",type:"text"}),o.a.createElement("br",null),o.a.createElement("button",{className:"form-btn"},"Login")))}),Ee=(n(166),function(){return o.a.createElement("div",{className:"login-container"},o.a.createElement(ge,null))}),we=(n(167),function(){var e=Object(i.b)(),t=Object(s.e)(),n=function(n){fetch("http://localhost:8080/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:n.username,password:n.password,password_confirmation:n.password_confirmation})}).then((function(e){return e.json()})).then((function(n){n.jwt?(localStorage.username=n.user.username,localStorage.password=n.user.password,localStorage.token=n.jwt,t.push("/"),console.log("Welcome ".concat(n.user.username,"!")),e(p(n.user))):(alert(n.error),console.log("Invalid signup!"))}))};return o.a.createElement("div",{className:"register-form"},o.a.createElement("h2",{className:"form-header"},"Register"),o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={username:e.target[0].value,password:e.target[1].value,password_confirmation:e.target[2].value};n(t)}(e)}},o.a.createElement("label",{className:"form-label"},"Username"),o.a.createElement("br",null),o.a.createElement("input",{className:"form-input",type:"text"}),o.a.createElement("br",null),o.a.createElement("label",{className:"form-label"},"Password"),o.a.createElement("br",null),o.a.createElement("input",{className:"form-input",type:"text"}),o.a.createElement("br",null),o.a.createElement("label",{className:"form-label"},"Confirm Password"),o.a.createElement("br",null),o.a.createElement("input",{className:"form-input",type:"text"}),o.a.createElement("br",null),o.a.createElement("button",{className:"form-btn"},"Register")))}),Ne=(n(168),function(){return o.a.createElement("div",{className:"register-container"},o.a.createElement(we,null))}),ye=function(){return o.a.createElement(r.a,null,o.a.createElement(B,null),o.a.createElement(s.a,{exact:!0,path:"/",component:ve}),o.a.createElement(s.a,{path:"/login",component:Ee}),o.a.createElement(s.a,{path:"/sign_up",component:Ne}))},Ce=n(6),je=Object(Ce.c)({user:f,menu:J,code:k,save:K,load:A,canvas:I,import:Z});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=Object(u.a)({reducer:je});l.a.render(o.a.createElement(i.a,{store:Se},o.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},77:function(e,t,n){e.exports=n(169)},82:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.30da46d9.chunk.js.map