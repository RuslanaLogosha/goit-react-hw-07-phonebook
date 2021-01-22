(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={container:"app_container__2YjB3",main_header:"app_main_header__2DUAd",contacts_header:"app_contacts_header__2sqp2"}},25:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__1hYoT",filterInput:"filter_filterInput__KcP-x"}},43:function(t,e,n){},6:function(t,e,n){t.exports={form:"contactForm_form__D142y",label:"contactForm_label__2foz_",input:"contactForm_input__21S1_",button:"contactForm_button__B04hb"}},76:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),s=n(14),o=n.n(s),i=(n(43),n(26)),u=n(22),l=n.n(u),b=n(6),j=n.n(b),f=n(5),d=n(7),p=n.n(d),m=n(18),O=n(11),h=n.n(O),_=n(2),x=Object(_.b)("contacts/fetchContactsRequest"),v=Object(_.b)("contacts/fetchContactsSuccess"),C=Object(_.b)("contacts/fetchContactsError"),N=Object(_.b)("contacts/addContactRequest"),y=Object(_.b)("contacts/addContactSuccess"),k=Object(_.b)("contacts/addContactError"),w=Object(_.b)("contacts/deleteContactRequest"),g=Object(_.b)("contacts/deleteContactSuccess"),I=Object(_.b)("contacts/deleteContactError"),L=Object(_.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:4040";var F={fetchContacts:function(){return function(){var t=Object(m.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(m.a)(p.a.mark((function n(c){var a,r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(N()),n.prev=2,n.next=5,h.a.post("/contacts",a);case 5:r=n.sent,s=r.data,c(y(s)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(k(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,h.a.delete("/contacts/".concat(t));case 4:n(g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(I(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},S=n(15),T=function(t){return t.contacts.items},E=function(t){return t.contacts.filter},q=Object(S.a)([T,E],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)}));function B(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],b=o[1],d=l.a.generate(),p=l.a.generate(),m=Object(f.b)(),O=Object(f.c)(T),h=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":b(c);break;default:return}},_=function(){r(""),b("")};return Object(c.jsxs)("form",{className:j.a.form,onSubmit:function(t){if(t.preventDefault(),""!==n)if(""!==u){if(O.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void _();m(F.addContact(n,u)),_()}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.")},children:[Object(c.jsxs)("label",{className:j.a.label,htmlFor:d,children:["Name",Object(c.jsx)("input",{className:j.a.input,type:"text",name:"name",value:n,onChange:h,id:d})]}),Object(c.jsxs)("label",{className:j.a.label,htmlFor:p,children:["Number",Object(c.jsx)("input",{className:j.a.input,type:"text",name:"number",value:u,onChange:h,id:p})]}),Object(c.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}var D=n(9),P=n.n(D);function R(){var t=Object(f.b)();Object(a.useEffect)((function(){t(F.fetchContacts())}),[t]);var e=Object(f.c)(q);return Object(c.jsx)("ul",{className:P.a.list,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(c.jsxs)("li",{className:P.a.listItem,children:[Object(c.jsxs)("span",{className:P.a.listItemText,children:[a,":"]}),Object(c.jsx)("span",{className:P.a.listItemText,children:r}),Object(c.jsx)("button",{className:P.a.button,type:"button",onClick:function(){return function(e){return t(F.deleteContact(e))}(n)},children:"Delete"})]},n)}))})}var A=n(25),z=n.n(A),J=function(){var t=Object(f.c)(E),e=Object(f.b)();return Object(c.jsxs)("label",{className:z.a.filterLabel,children:["Find contacts by name",Object(c.jsx)("input",{className:z.a.filterInput,type:"text",value:t,onChange:function(t){return e(L(t.target.value))}})]})},M=n(19),U=n.n(M);function Y(){return Object(c.jsxs)("div",{className:U.a.container,children:[Object(c.jsx)("h1",{className:U.a.main_header,children:"Phonebook"}),Object(c.jsx)(B,{}),Object(c.jsx)("h2",{className:U.a.contacts_header,children:"Contacts"}),Object(c.jsx)(J,{}),Object(c.jsx)(R,{})]})}var K,V=n(17),G=n(8),H=n(37),Q=n.n(H),W=n(12),X=n(3),Z=Object(_.c)([],(K={},Object(W.a)(K,v,(function(t,e){return e.payload})),Object(W.a)(K,y,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(W.a)(K,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),K)),$=Object(_.c)("",Object(W.a)({},L,(function(t,e){return e.payload}))),tt=Object(X.c)({items:Z,filter:$}),et=[].concat(Object(V.a)(Object(_.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),[Q.a]),nt=Object(_.a)({reducer:{contacts:tt},middleware:et,devTools:!1});o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f.a,{store:nt,children:Object(c.jsx)(Y,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"contactList_list__30VP1",listItem:"contactList_listItem__3TdBf",listItemText:"contactList_listItemText__3wcxP",button:"contactList_button__18MOL"}}},[[76,1,2]]]);
//# sourceMappingURL=main.43f9a76a.chunk.js.map