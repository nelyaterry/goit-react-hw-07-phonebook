(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{39:function(n,t,e){},84:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"getItems",(function(){return y})),e.d(r,"getFilter",(function(){return C})),e.d(r,"isLoading",(function(){return k})),e.d(r,"getVisibleContacts",(function(){return z}));var c={};e.r(c),e.d(c,"changeFilter",(function(){return L}));var a={};e.r(a),e.d(a,"fetchContact",(function(){return tn})),e.d(a,"addContact",(function(){return en})),e.d(a,"deleteContact",(function(){return rn}));var o,i,u,s,b=e(0),d=e.n(b),l=e(19),p=e.n(l),j=(e(39),e(2)),f=e(3),x=f.a.h1(o||(o=Object(j.a)(["\n  font-size: 64px;\n  margin: 24px 24px;\n  color: rgb(93 203 152);\n"]))),O=f.a.h2(i||(i=Object(j.a)(["\n  color: rgb(75, 75, 75);\n  margin: 0;\n"]))),h=f.a.div(u||(u=Object(j.a)(["\n  display: flex;\n"]))),g=f.a.div(s||(s=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgba(165, 230, 250, 0.3);\n  width: 65%;\n"]))),m=e(23),w=e(11),v=e(13),y=function(n){return n.contacts.items},C=function(n){return n.contacts.filter},k=function(n){return n.contacts.loading},z=Object(v.a)([y,C],(function(n,t){var e=t.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),F=e(9),L=Object(F.b)("contacts/UpdateFilter"),A=e(7),B=e.n(A),D=e(12),S=e(16),I=e.n(S);function J(){return Z.apply(this,arguments)}function Z(){return(Z=Object(D.a)(B.a.mark((function n(){var t,e;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.get("/contacts");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(n){return E.apply(this,arguments)}function E(){return(E=Object(D.a)(B.a.mark((function n(t){var e,r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.post("/contacts",t);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(n){return N.apply(this,arguments)}function N(){return(N=Object(D.a)(B.a.mark((function n(t){var e,r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.delete("/contacts/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}I.a.defaults.baseURL="https://617e719b2ff7e600174bd7d5.mockapi.io/api/v1";var T,U,V,P,R,$,G,H,K,Q,W,X,Y,_,nn,tn=Object(F.c)("contacts/fetchContact",Object(D.a)(B.a.mark((function n(){var t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J();case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))),en=Object(F.c)("contacts/addContact",function(){var n=Object(D.a)(B.a.mark((function n(t){var e;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q(t);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),rn=Object(F.c)("contacts/deleteContact",function(){var n=Object(D.a)(B.a.mark((function n(t){return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(t);case 2:return n.abrupt("return",t);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),cn=f.a.button(T||(T=Object(j.a)(["\n  height: 50px;\n  padding: 12px 24px;\n  font-size: 18px;\n  color: white;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: #5DCB98;\n  outline: none;\n  cursor: pointer;\n  border: none;\n"]))),an=e(1),on=function(n){var t=n.children,e=n.onClick;return Object(an.jsx)(cn,{onClick:e,children:t})},un=f.a.form(U||(U=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  padding: 24px 32px;\n  background-color: rgba(67, 67, 67, 0.3);\n\n  & > button {\n    margin-top: 40px;\n  }\n"]))),sn=f.a.label(V||(V=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 24px;\n"]))),bn=f.a.span(P||(P=Object(j.a)(["\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),dn=f.a.input(R||(R=Object(j.a)(["\n  height: 40px;\n  padding: 8px 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n  outline: none;\n  border: none;\n"]))),ln=function(){var n=Object(b.useState)(""),t=Object(m.a)(n,2),e=t[0],c=t[1],o=Object(b.useState)(""),i=Object(m.a)(o,2),u=i[0],s=i[1],d={name:e,number:u},l=Object(w.c)(r.getItems),p=Object(w.b)(),j=function(n){var t=n.currentTarget,e=t.name,r=t.value;"name"===e&&c(r),"number"===e&&s(r)},f=function(){c(""),s("")};return Object(an.jsxs)(un,{onSubmit:function(n){n.preventDefault(),l.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is alredy in the contacts list")):(p(a.addContact(d)),f())},children:[Object(an.jsxs)(sn,{children:[Object(an.jsx)(bn,{children:"Name"}),Object(an.jsx)(dn,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:j})]}),Object(an.jsxs)(sn,{children:[Object(an.jsx)(bn,{children:"Number"}),Object(an.jsx)(dn,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:j})]}),Object(an.jsx)(on,{type:"submit",children:"Add Contact"})]})},pn=e(33),jn=e.n(pn),fn=f.a.ul($||($=Object(j.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 600px;\n"]))),xn=f.a.li(G||(G=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152 / 20%);\n"]))),On=f.a.span(H||(H=Object(j.a)(["\n  width: 40%;\n  margin-right: 12px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),hn=f.a.span(K||(K=Object(j.a)(["\n  margin-right: 12px;\n  font-weight: 500;\n  font-size: 20px;\n  color: rgb(75 75 75);\n"]))),gn=f.a.p(Q||(Q=Object(j.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),mn=function(){var n=Object(w.c)(r.getVisibleContacts),t=Object(w.c)(r.isLoading),e=Object(w.b)();return Object(b.useEffect)((function(){return e(a.fetchContact())}),[e]),Object(an.jsx)(an.Fragment,{children:n.length>0?Object(an.jsxs)(fn,{children:[n.map((function(n){var t=n.name,r=n.number,c=n.id;return Object(an.jsxs)(xn,{children:[Object(an.jsx)(On,{children:t}),Object(an.jsx)(hn,{children:r}),Object(an.jsx)(on,{type:"button",onClick:function(){return function(n){return e(a.deleteContact(n))}(c)},children:"Delete"})]},c)})),t&&Object(an.jsx)(jn.a,{type:"Oval",color:"#5DCB98",height:40,width:40})]}):Object(an.jsx)(gn,{children:"Contact not found"})})},wn=f.a.h3(W||(W=Object(j.a)(["\n  color: rgb(93 203 152);\n  font-weight: 600;\n"]))),vn=f.a.input(X||(X=Object(j.a)(["\n  width: 400px;\n  /* height: 40px; */\n  padding: 8px 24px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  /* background-color: rgba(228, 228, 228, 0.5); */\n  outline: none;\n  border: none;\n"]))),yn=function(){var n=Object(w.c)(r.getFilter),t=Object(w.b)();return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(wn,{children:"Find contact by name"}),Object(an.jsx)(vn,{type:"text",name:"filter",value:n,onChange:function(n){return t(c.changeFilter(n.target.value.trim()))}})]})},Cn=function(){return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(x,{children:"Phonebook"}),Object(an.jsxs)(h,{children:[Object(an.jsx)(ln,{}),Object(an.jsxs)(g,{children:[Object(an.jsx)(O,{children:"Contacts"}),Object(an.jsx)(yn,{}),Object(an.jsx)(mn,{})]})]})]})},kn=e(21),zn=e(4),Fn=e(10),Ln=Object(F.d)("",Object(zn.a)({},L,(function(n,t){return t.payload}))),An=Object(F.d)([],(Y={},Object(zn.a)(Y,tn.fulfilled,(function(n,t){return t.payload})),Object(zn.a)(Y,en.fulfilled,(function(n,t){var e=t.payload;return[].concat(Object(kn.a)(n),[e])})),Object(zn.a)(Y,rn.fulfilled,(function(n,t){var e=t.payload;return n.filter((function(n){return n.id!==e}))})),Y)),Bn=Object(F.d)(!1,(_={},Object(zn.a)(_,tn.pending,(function(){return!0})),Object(zn.a)(_,tn.fulfilled,(function(){return!1})),Object(zn.a)(_,tn.rejected,(function(){return!1})),Object(zn.a)(_,en.pending,(function(){return!0})),Object(zn.a)(_,en.fulfilled,(function(){return!1})),Object(zn.a)(_,en.rejected,(function(){return!1})),Object(zn.a)(_,rn.pending,(function(){return!0})),Object(zn.a)(_,rn.fulfilled,(function(){return!1})),Object(zn.a)(_,rn.rejected,(function(){return!1})),_)),Dn=Object(F.d)(null,(nn={},Object(zn.a)(nn,tn.rejected,(function(n,t){return t.payload.message})),Object(zn.a)(nn,tn.pending,(function(){return null})),Object(zn.a)(nn,en.rejected,(function(n,t){return t.payload.message})),Object(zn.a)(nn,en.pending,(function(){return null})),Object(zn.a)(nn,rn.rejected,(function(n,t){return t.payload.message})),Object(zn.a)(nn,rn.pending,(function(){return null})),nn)),Sn=Object(Fn.b)({items:An,filter:Ln,loading:Bn,error:Dn}),In=Object(F.a)({reducer:{contacts:Sn},middleware:function(n){return Object(kn.a)(n())},devTools:!1});p.a.render(Object(an.jsx)(d.a.StrictMode,{children:Object(an.jsx)(w.a,{store:In,children:Object(an.jsx)(Cn,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.44fdde85.chunk.js.map