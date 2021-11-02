(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{39:function(t,n,e){},84:function(t,n,e){"use strict";e.r(n);var c={};e.r(c),e.d(c,"getItems",(function(){return w})),e.d(c,"getFilter",(function(){return y})),e.d(c,"isLoading",(function(){return k})),e.d(c,"getVisibleContacts",(function(){return S}));var r={};e.r(r),e.d(r,"fetchContactsRequest",(function(){return q})),e.d(r,"fetchContactsSuccess",(function(){return E})),e.d(r,"fetchContactsError",(function(){return R})),e.d(r,"addContactsRequest",(function(){return F})),e.d(r,"addContactsSuccess",(function(){return L})),e.d(r,"addContactsError",(function(){return A})),e.d(r,"deleteContactsRequest",(function(){return B})),e.d(r,"deleteContactsSuccess",(function(){return D})),e.d(r,"deleteContactsError",(function(){return I})),e.d(r,"changeFilter",(function(){return J}));var a={};e.r(a),e.d(a,"fetchContact",(function(){return bt})),e.d(a,"addContact",(function(){return dt})),e.d(a,"deleteContact",(function(){return lt}));var o,u,i,s,b=e(0),d=e.n(b),l=e(19),p=e.n(l),f=(e(39),e(2)),j=e(3),x=j.a.h1(o||(o=Object(f.a)(["\n  font-size: 64px;\n  margin: 24px 24px;\n  color: rgb(93 203 152);\n"]))),O=j.a.h2(u||(u=Object(f.a)(["\n  color: rgb(75, 75, 75);\n  margin: 0;\n"]))),h=j.a.div(i||(i=Object(f.a)(["\n  display: flex;\n"]))),g=j.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgba(165, 230, 250, 0.3);\n  width: 65%;\n"]))),m=e(23),C=e(11),v=e(13),w=function(t){return t.contacts.items},y=function(t){return t.contacts.filter},k=function(t){return t.contacts.loading},S=Object(v.a)([w,y],(function(t,n){var e=n.toLowerCase().trim();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),z=e(6),q=Object(z.b)("contacts/fetchContactRequest"),E=Object(z.b)("contacts/fetchContactSuccess"),R=Object(z.b)("contacts/fetchContactError"),F=Object(z.b)("contacts/addContactRequest"),L=Object(z.b)("contacts/addContactSuccess"),A=Object(z.b)("contacts/addContactError"),B=Object(z.b)("contacts/deleteContactRequest"),D=Object(z.b)("contacts/deleteContactSuccess"),I=Object(z.b)("contacts/deleteContactError"),J=Object(z.b)("contacts/UpdateFilter"),Z=e(8),M=e.n(Z),N=e(12),T=e(16),U=e.n(T);function V(){return P.apply(this,arguments)}function P(){return(P=Object(N.a)(M.a.mark((function t(){var n,e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("/contacts");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t){return G.apply(this,arguments)}function G(){return(G=Object(N.a)(M.a.mark((function t(n){var e,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.post("/contacts",n);case 2:return e=t.sent,c=e.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(t){return K.apply(this,arguments)}function K(){return(K=Object(N.a)(M.a.mark((function t(n){var e,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.delete("/contacts/".concat(n));case 2:return e=t.sent,c=e.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}U.a.defaults.baseURL="https://617e719b2ff7e600174bd7d5.mockapi.io/api/v1";var Q,W,X,Y,_,tt,nt,et,ct,rt,at,ot,ut,it,st,bt=function(){return function(){var t=Object(N.a)(M.a.mark((function t(n){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(r.fetchContactsRequest()),t.prev=1,t.next=4,V();case 4:e=t.sent,n(r.fetchContactsSuccess(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(r.fetchContactsError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},dt=function(t){return function(){var n=Object(N.a)(M.a.mark((function n(e){var c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(r.addContactsRequest()),n.prev=1,n.next=4,$(t);case 4:c=n.sent,console.log(c),e(r.addContactsSuccess(c)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e(r.addContactsError(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}()},lt=function(t){return function(){var n=Object(N.a)(M.a.mark((function n(e){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(r.deleteContactsRequest()),n.prev=1,n.next=4,H(t);case 4:e(r.deleteContactsSuccess(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),e(r.deleteContactsError(n.t0));case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t){return n.apply(this,arguments)}}()},pt=j.a.button(Q||(Q=Object(f.a)(["\n  height: 50px;\n  padding: 12px 24px;\n  font-size: 18px;\n  color: white;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: #5DCB98;\n  outline: none;\n  cursor: pointer;\n  border: none;\n"]))),ft=e(1),jt=function(t){var n=t.children,e=t.onClick;return Object(ft.jsx)(pt,{onClick:e,children:n})},xt=j.a.form(W||(W=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  padding: 24px 32px;\n  background-color: rgba(67, 67, 67, 0.3);\n\n  & > button {\n    margin-top: 40px;\n  }\n"]))),Ot=j.a.label(X||(X=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 24px;\n"]))),ht=j.a.span(Y||(Y=Object(f.a)(["\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),gt=j.a.input(_||(_=Object(f.a)(["\n  height: 40px;\n  padding: 8px 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n  outline: none;\n  border: none;\n"]))),mt=function(){var t=Object(b.useState)(""),n=Object(m.a)(t,2),e=n[0],r=n[1],o=Object(b.useState)(""),u=Object(m.a)(o,2),i=u[0],s=u[1],d={name:e,number:i},l=Object(C.c)(c.getItems),p=Object(C.b)(),f=function(t){var n=t.currentTarget,e=n.name,c=n.value;"name"===e&&r(c),"number"===e&&s(c)},j=function(){r(""),s("")};return Object(ft.jsxs)(xt,{onSubmit:function(t){t.preventDefault(),l.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is alredy in the contacts list")):(p(a.addContact(d)),j())},children:[Object(ft.jsxs)(Ot,{children:[Object(ft.jsx)(ht,{children:"Name"}),Object(ft.jsx)(gt,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:f})]}),Object(ft.jsxs)(Ot,{children:[Object(ft.jsx)(ht,{children:"Number"}),Object(ft.jsx)(gt,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:f})]}),Object(ft.jsx)(jt,{type:"submit",children:"Add Contact"})]})},Ct=e(33),vt=e.n(Ct),wt=j.a.ul(tt||(tt=Object(f.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 600px;\n"]))),yt=j.a.li(nt||(nt=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152 / 20%);\n"]))),kt=j.a.span(et||(et=Object(f.a)(["\n  width: 40%;\n  margin-right: 12px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),St=j.a.span(ct||(ct=Object(f.a)(["\n  margin-right: 12px;\n  font-weight: 500;\n  font-size: 20px;\n  color: rgb(75 75 75);\n"]))),zt=j.a.p(rt||(rt=Object(f.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),qt=function(){var t=Object(C.c)(c.getVisibleContacts),n=Object(C.c)(c.isLoading),e=Object(C.b)();return Object(b.useEffect)((function(){return e(a.fetchContact())}),[e]),Object(ft.jsx)(ft.Fragment,{children:t.length>0?Object(ft.jsxs)(wt,{children:[t.map((function(t){var n=t.name,c=t.number,r=t.id;return Object(ft.jsxs)(yt,{children:[Object(ft.jsx)(kt,{children:n}),Object(ft.jsx)(St,{children:c}),Object(ft.jsx)(jt,{type:"button",onClick:function(){return function(t){return e(a.deleteContact(t))}(r)},children:"Delete"})]},r)})),n&&Object(ft.jsx)(vt.a,{type:"Oval",color:"#5DCB98",height:40,width:40})]}):Object(ft.jsx)(zt,{children:"Contact not found"})})},Et=j.a.h3(at||(at=Object(f.a)(["\n  color: rgb(93 203 152);\n  font-weight: 600;\n"]))),Rt=j.a.input(ot||(ot=Object(f.a)(["\n  width: 400px;\n  /* height: 40px; */\n  padding: 8px 24px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  /* background-color: rgba(228, 228, 228, 0.5); */\n  outline: none;\n  border: none;\n"]))),Ft=function(){var t=Object(C.c)(c.getFilter),n=Object(C.b)();return Object(ft.jsxs)(ft.Fragment,{children:[Object(ft.jsx)(Et,{children:"Find contact by name"}),Object(ft.jsx)(Rt,{type:"text",name:"filter",value:t,onChange:function(t){return n(r.changeFilter(t.target.value.trim()))}})]})},Lt=function(){return Object(ft.jsxs)(ft.Fragment,{children:[Object(ft.jsx)(x,{children:"Phonebook"}),Object(ft.jsxs)(h,{children:[Object(ft.jsx)(mt,{}),Object(ft.jsxs)(g,{children:[Object(ft.jsx)(O,{children:"Contacts"}),Object(ft.jsx)(Ft,{}),Object(ft.jsx)(qt,{})]})]})]})},At=e(21),Bt=e(4),Dt=e(10),It=Object(z.c)("",Object(Bt.a)({},J,(function(t,n){return n.payload}))),Jt=Object(z.c)([],(ut={},Object(Bt.a)(ut,E,(function(t,n){return n.payload})),Object(Bt.a)(ut,L,(function(t,n){var e=n.payload;return[].concat(Object(At.a)(t),[e])})),Object(Bt.a)(ut,D,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),ut)),Zt=Object(z.c)(!1,(it={},Object(Bt.a)(it,q,(function(){return!0})),Object(Bt.a)(it,E,(function(){return!1})),Object(Bt.a)(it,R,(function(){return!1})),Object(Bt.a)(it,F,(function(){return!0})),Object(Bt.a)(it,L,(function(){return!1})),Object(Bt.a)(it,A,(function(){return!1})),Object(Bt.a)(it,B,(function(){return!0})),Object(Bt.a)(it,D,(function(){return!1})),Object(Bt.a)(it,I,(function(){return!1})),it)),Mt=Object(z.c)(null,(st={},Object(Bt.a)(st,R,(function(t,n){return n.payload.message})),Object(Bt.a)(st,q,(function(){return null})),Object(Bt.a)(st,A,(function(t,n){return n.payload.message})),Object(Bt.a)(st,F,(function(){return null})),Object(Bt.a)(st,I,(function(t,n){return n.payload.message})),Object(Bt.a)(st,B,(function(){return null})),st)),Nt=Object(Dt.b)({items:Jt,filter:It,loading:Zt,error:Mt}),Tt=Object(z.a)({reducer:{contacts:Nt},middleware:function(t){return Object(At.a)(t())},devTools:!1});p.a.render(Object(ft.jsx)(d.a.StrictMode,{children:Object(ft.jsx)(C.a,{store:Tt,children:Object(ft.jsx)(Lt,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.91f9bdb6.chunk.js.map