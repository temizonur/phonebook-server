(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),l=(t(20),t(14)),u=t(2),i=(t(21),t(3)),d=t.n(i),s="/api/persons",m=function(){return d.a.get(s)},f=function(e){return d.a.post(s,e)},h=function(e){return d.a.delete("".concat(s,"/").concat(e.id))},v=function(e,n){return d.a.put("".concat(s,"/").concat(e),n)},p=function(e){var n=e.message;if(0===n.length)return null;return r.a.createElement("div",{className:"error",style:{color:"red",border:"solid 3px red",backgroundColor:"grey",fontSize:20}},n)},b=function(e){var n=e.message;if(0===n.length)return null;return r.a.createElement("div",{className:"sucess",style:{color:"green",border:"solid 3px green",backgroundColor:"grey",fontSize:20}},n)},g=function(e){var n=e.searchKeyword,t=e.handleKeywordChange;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.addPerson,t=e.newName,a=e.handlePersonChange,o=e.newPhone,c=e.handlePhoneChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"phone: ",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.persons,t=(e.keyword,e.handler);return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number," ",r.a.createElement(y,{handler:t,person:e}))})))},y=function(e){var n=e.handler,t=e.person;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(t)}},"delete"))},j=function(e){var n=e.title;return r.a.createElement("div",null,r.a.createElement("h2",null,n))},C=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),d=i[0],s=i[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),O=C[0],k=C[1],P=Object(a.useState)(""),S=Object(u.a)(P,2),N=S[0],K=S[1],x=Object(a.useState)(""),z=Object(u.a)(x,2),A=z[0],B=z[1],D=Object(a.useState)(""),J=Object(u.a)(D,2),T=J[0],U=J[1];Object(a.useEffect)((function(){m().then((function(e){o(e.data)}))}),[]);var W=t.filter((function(e){return e.name.toUpperCase().includes(N.toUpperCase())}));return r.a.createElement("div",null,r.a.createElement(j,{title:"Phonebook"}),r.a.createElement(p,{message:T}),r.a.createElement(b,{message:A}),r.a.createElement(g,{searchKeyword:N,handleKeywordChange:function(e){K(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(E,{addPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name===d}))){if(window.confirm("".concat(d," is already on the list, replace the old one with a new one?"))){var n=t.find((function(e){return e.name===d})),a=Object(l.a)({},n,{number:O});v(n.id,a).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e.data})))}))}}else{var r={name:d,number:O};f(r).then((function(e){r.id=e.data.id,o(t.concat(r)),B("Added ".concat(r.name)),setTimeout((function(){B("")}),5e3)}))}s(""),k("")},handlePersonChange:function(e){s(e.target.value)},newName:d,newPhone:O,handlePhoneChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(w,{persons:W,keyword:N,handler:function(e){window.confirm("Delete ".concat(e.name))&&h(e).then((function(n){o(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){U("Person ".concat(e.name," was already removed from the server")),setTimeout((function(){U("")}),5e3),o(t.filter((function(n){return n.id!==e.id})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9b20f93f.chunk.js.map