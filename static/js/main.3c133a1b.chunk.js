(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(22),a=n.n(s),i=(n(89),n(90),n(13)),o=n(27),l=n(71),u=n.n(l).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),d=function(){return u.get("users")},j=[],h=function(){return function(e){d().then((function(t){e({type:"GET-USER",users:t.data})})).catch((function(e){return console.log(e)}))}},b=n(163),O=n(44),m=n.n(O),f=n(167),p=n(169),x=n(170),g=n(171),v=n(172),C=n(168),y=n(173),T=n(159),E=n(164),w=n(165),S=n(160),k=n(2),L=function(e){var t,n,r,c;return Object(k.jsx)("div",{children:Object(k.jsx)(S.a,{open:e.modal,onClose:e.handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(k.jsxs)(E.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"30%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[Object(k.jsx)(w.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"User information"}),Object(k.jsxs)(w.a,{id:"modal-modal-description",sx:{mt:2},children:["I live in: ",(null===(t=e.user)||void 0===t?void 0:t.address.city)+" "+(null===(n=e.user)||void 0===n?void 0:n.address.street)+" "+(null===(r=e.user)||void 0===r?void 0:r.address.suite)," and I work at: ",null===(c=e.user)||void 0===c?void 0:c.company.name]})]})})})},R=n(166),U=function(e){if(!e.searchTerm)return e.str;var t=new RegExp(e.searchTerm,"ig"),n=e.str.match(t);return n?e.str.split(t).map((function(e,t,r){if(t<r.length-1){var c=n.shift();return Object(k.jsxs)("span",{children:[e,Object(k.jsx)("span",{className:m.a.highlight,children:c})]},t)}return e})):e.str};function _(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(!1),l=Object(i.a)(a,2),u=l[0],d=l[1],j=Object(o.b)(),h=Object(r.useCallback)((function(t){return Object(k.jsx)(U,{searchTerm:e.searchTerm,str:t})}),[e.searchTerm]),b=function(e){s(e),d(!0)};return Object(k.jsx)("div",{children:Object(k.jsxs)(R.a,{component:f.a,children:[Object(k.jsxs)(C.a,{size:"small","aria-label":"a dense table",children:[Object(k.jsx)(p.a,{children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)(g.a,{align:"center",children:"Name"}),Object(k.jsx)(g.a,{align:"center",children:"Username"}),Object(k.jsx)(g.a,{align:"center",children:"email"}),Object(k.jsx)(g.a,{align:"center",children:"delete"})]})}),Object(k.jsx)(v.a,{children:e.users.filter((function(t){return""===e.searchTerm||t.name.toLowerCase().includes(e.searchTerm.toLowerCase())||t.email.toLowerCase().includes(e.searchTerm.toLowerCase())||t.username.toLowerCase().includes(e.searchTerm.toLowerCase())?t:void 0})).map((function(t){return Object(k.jsxs)(x.a,{children:[Object(k.jsx)(g.a,{align:"center",onClick:function(){b(t)},children:h(t.name)}),Object(k.jsx)(g.a,{align:"center",onClick:function(){b(t)},children:h(t.username)}),Object(k.jsxs)(g.a,{align:"center",onClick:function(){b(t)},children:[h(t.email)," "]}),Object(k.jsx)(g.a,{align:"center",children:Object(k.jsx)(y.a,{onClick:function(){var n,r;n=t.id,r=e.users,j(function(e,t){return{type:"REMOVE-USER",userId:e,users:t}}(n,r))},children:Object(k.jsx)(T.a,{})})})]},t.id)}))})]}),u&&Object(k.jsx)(L,{user:c,handleClose:function(){d(!1)},modal:u})]})})}var I=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(o.b)(),a=Object(o.c)((function(e){return e.users}));Object(r.useEffect)((function(){s(h())}),[s]);return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{value:n,className:m.a.input,type:"text",placeholder:"Search...",onChange:function(e){c(e.currentTarget.value)}}),Object(k.jsx)(b.a,{style:{backgroundColor:"greenyellow"},variant:"contained",onClick:function(){s(h()),c("")},children:"RESET"}),Object(k.jsx)(_,{users:a,searchTerm:n})]})};var F=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(I,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},M=n(49),B=n(75),G=Object(M.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-USER":return t.users;case"REMOVE-USER":return t.users.filter((function(e){return e.id!==t.userId}));default:return e}}}),J=Object(M.c)(G,Object(M.a)(B.a));a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(o.a,{store:J,children:Object(k.jsx)(F,{})})}),document.getElementById("root")),N()},44:function(e,t,n){e.exports={input:"styles_input__imdaW",highlight:"styles_highlight__1yd6_"}},89:function(e,t,n){},90:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.3c133a1b.chunk.js.map