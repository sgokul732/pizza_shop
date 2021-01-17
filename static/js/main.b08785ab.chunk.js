(this.webpackJsonppizza_shop=this.webpackJsonppizza_shop||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),r=n.n(a),i=n(12),s=n.n(i),o=(n(58),n(59),n(31)),j=n(8),l=n(27),d=n(48),u=n(17),O=n(49),b=n.n(O),h=Object(u.combineReducers)({PizzaListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PIZZAS":return{loading:!0,data:[],error:""};case"GET_PIZZAS_SUCCESS":return{loading:!1,data:t.payload,error:""};case"GET_PIZZAS_FAILURE":return{loading:!1,data:[],error:"error"};default:return e}}}),p=n(50),g=Object(u.createStore)(h,Object(p.composeWithDevTools)(Object(u.applyMiddleware)(d.a,b.a))),m=n(9),x=n(101),f=n(102),S=n(103),y=n(104),v=n(105),C=n(106),z=n(107),N=n(108),I=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],i=n[1],s=Object(j.e)();return Object(c.jsxs)(x.a,{color:"light",light:!0,expand:"md",children:[Object(c.jsx)(f.a,{href:"/",children:"Dominos Pizza"}),Object(c.jsx)(S.a,{onClick:function(){return i(!r)}}),Object(c.jsxs)(y.a,{isOpen:r,navbar:!0,children:[Object(c.jsx)(v.a,{className:"mr-auto",navbar:!0}),Object(c.jsx)(C.a,{children:Object(c.jsxs)(z.a,{variant:"primary",onClick:function(){s.push("/cart")},children:["Cart ",Object(c.jsx)(N.a,{variant:"light",children:e.cartSize}),Object(c.jsx)("span",{className:"sr-only",children:"unread messages"})]})})]})]})},A=n(19),k=n(14),T=(n(72),n(128)),q=n(113),F=n(114),R=n(115),L=n(116),U=n(117),J=n(118),V=n(119),B=n(120),K=n(121),P=n(122),H=n(123),W=n(126),D=n(127),G=n(109),M=n(110),Q=n(111),E=n(112),Y=function(e){var t=e.sizeList,n=e.toppingsList,a=e.handleSubmit,r=e.handleChange;return Object(c.jsxs)(W.a,{show:e.show,onHide:e.handleClose,children:[Object(c.jsx)(W.a.Header,{closeButton:!0,children:Object(c.jsx)(W.a.Title,{children:e.name})}),Object(c.jsx)(W.a.Body,{children:Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(M.a,{children:[Object(c.jsx)(Q.a,{for:"addon",children:"Add-Ons"}),Object(c.jsx)(E.a,{type:"select",name:"addon",id:"addon",multiple:!0,onChange:function(e){return r(e)},children:t&&t.map((function(e,t){return Object(c.jsx)("option",{children:e},t)}))})]}),Object(c.jsxs)(M.a,{children:[Object(c.jsx)(Q.a,{for:"top",children:"Toppings"}),Object(c.jsx)(E.a,{type:"select",name:"top",id:"top",multiple:!0,onChange:function(e){return r(e)},children:n&&n.map((function(e,t){return Object(c.jsx)("option",{children:e},t)}))})]})]})}),Object(c.jsx)(W.a.Footer,{children:Object(c.jsx)(D.a,{variant:"primary",onClick:a,children:"OK"})})]})},Z=function(e){var t=e.name,n=e.description,r=e.img_url,i=e.rating,s=e.price,o=e.type,j=e.toppings,l=e.size,d=e.id,u=e.getFromCart,O=e.setCartSize,b=Object(a.useState)(!1),h=Object(m.a)(b,2),p=h[0],g=h[1],x=function(){return g(!1)},f=Object(a.useState)(!1),S=Object(m.a)(f,2),y=S[0],v=S[1],C=Object(a.useState)(!1),z=Object(m.a)(C,2),N=z[0],I=z[1],A=l&&l[0].items.map((function(e){return e.size})),W=j&&j[0].items.map((function(e){return e.name})),D=Object(a.useState)({toppings:[],addons:[]}),G=Object(m.a)(D,2),M=G[0],Q=G[1];Object(a.useEffect)((function(){var e=E(d);_(e)}),[d]);var E=function(e){var t=JSON.parse(localStorage.getItem("cart"));return!!t&&t.findIndex((function(t){return parseInt(t.id)===parseInt(e)}))>=0},Z=Object(a.useState)(E(d)),w=Object(m.a)(Z,2),X=w[0],_=w[1];return Object(c.jsxs)(c.Fragment,{children:[y&&Object(c.jsxs)(T.a,{children:[Object(c.jsx)(q.a,{icon:"success",children:t}),Object(c.jsx)(F.a,{children:"One Pizza added to the Cart Successfully"})]}),N&&Object(c.jsxs)(T.a,{children:[Object(c.jsx)(q.a,{icon:"danger",children:t}),Object(c.jsx)(F.a,{children:"One Pizza Removed from the Cart Successfully"})]}),Object(c.jsx)(R.a,{children:Object(c.jsx)(L.a,{children:Object(c.jsx)(U.a,{children:Object(c.jsxs)(R.a,{children:[Object(c.jsx)(L.a,{md:"4",children:Object(c.jsx)(J.a,{top:!0,src:r,alt:"Card image cap"})}),Object(c.jsx)(L.a,{md:"8",children:Object(c.jsxs)(V.a,{children:[Object(c.jsx)(B.a,{tag:"h5",children:t}),Object(c.jsxs)(K.a,{tag:"h6",className:"mb-2 text-muted",children:["Rating : ",i]}),o?Object(c.jsx)("div",{className:"veg",children:" Veg "}):Object(c.jsx)("div",{className:"nv",children:"Non-Veg"}),Object(c.jsxs)(P.a,{children:["Price : ",s]}),Object(c.jsx)(P.a,{children:n}),Object(c.jsx)(H.a,{onClick:function(){return g(!0)},children:"Add to Cart"}),X&&Object(c.jsx)(H.a,{onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("cart")),n=t&&t.findIndex((function(t){return parseInt(t.id)===parseInt(e)})),c=t&&t.find((function(t){return parseInt(t.id)===parseInt(e)}));c&&(c.quantity>1?c.quantity-=1:(t.splice(n,1),_(!1)),localStorage.setItem("cart",JSON.stringify(t)),O(u()),I(!0),setTimeout((function(){I(!1)}),2e3))}(d)},children:"Remove"})]})})]})})})}),Object(c.jsx)(Y,Object(k.a)(Object(k.a)({},e),{},{handleChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));0===e.target.name.localeCompare("addon")&&Q(Object(k.a)(Object(k.a)({},M),{},{addons:t})),0===e.target.name.localeCompare("top")&&Q(Object(k.a)(Object(k.a)({},M),{},{toppings:t}))},handleSubmit:function(){var e={id:d,name:t,price:s,details:M,quantity:1},n=JSON.parse(localStorage.getItem("cart")),c=n&&n.findIndex((function(e){return parseInt(e.id)===parseInt(d)})),a=n&&n.find((function(e){return parseInt(e.id)===parseInt(d)}));if(n)if(c>-1){var r=Object(k.a)(Object(k.a)({},a),{},{quantity:a.quantity+1,price:a.price+a.price});n[c]=r}else n.push(e);else{var i=[];i.push(e),n=i}localStorage.setItem("cart",JSON.stringify(n)),_(!0),x(),O(u()),v(!0),setTimeout((function(){v(!1)}),2e3)},toppingsList:W,sizeList:A,name:t,handleClose:x,show:p}))]})},w=(n(74),n(52)),X=n.n(w),_=n.p+"static/media/no-data.e2cb97bb.png",$=n(124),ee=(n(93),function(e){var t=e.sortByRanking,n=e.sortByPrice,a=e.filterByNonVeg,r=e.filterByVeg;return Object(c.jsxs)("div",{className:"sortBy",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:" Sort By "})," ",Object(c.jsx)("br",{}),Object(c.jsxs)($.a,{children:[Object(c.jsx)(z.a,{onClick:t,children:"Rating"}),Object(c.jsx)(z.a,{onClick:n,children:"Price"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:" Filter By "})," ",Object(c.jsx)("br",{}),Object(c.jsxs)($.a,{children:[Object(c.jsx)(z.a,{onClick:a,children:"Non-Veg"}),Object(c.jsx)(z.a,{onClick:r,children:"Veg"})]})]})]})}),te=Object(l.b)((function(e){return{pizzaList:e.PizzaListReducer.data,loading:e.PizzaListReducer.loading,error:e.PizzaListReducer.error}}),(function(e){return{getPizzaList:function(){return e((function(e){e({type:"GET_PIZZAS"}),X.a.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").then((function(t){var n=t.data;e({type:"GET_PIZZAS_SUCCESS",payload:n})})).catch((function(t){var n=t.data;e({type:"GET_PIZZAS_FAILURE",payload:n})}))}))}}}))((function e(t){var n=t.pizzaList,r=t.getPizzaList,i=t.loading,s=t.error,o=t.getFromCart,j=t.setCartSize,l=Object(a.useState)([]),d=Object(m.a)(l,2),u=d[0],O=d[1];Object(a.useEffect)((function(){r()}),[]),Object(a.useEffect)((function(){n&&e.length&&O(Object(A.a)(n))}),[n]);return i?Object(c.jsx)("img",{className:"invalid",src:"data:image/png;base64,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",alt:"Loading"}):s?Object(c.jsx)("img",{className:"invalid",src:_,alt:"No Data Available"}):u&&u.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ee,{sortByRanking:function(){var e=(n&&Object(A.a)(n)).sort((function(e,t){return e.rating-t.rating}));O(e)},sortByPrice:function(){var e=n&&Object(A.a)(n),t=e&&e.sort((function(e,t){return e.price-t.price}));O(t)},filterByVeg:function(){var e=n&&Object(A.a)(n),t=e&&e.filter((function(e){return e.isVeg}));O(t)},filterByNonVeg:function(){var e=n&&Object(A.a)(n),t=e&&e.filter((function(e){return!e.isVeg}));O(t)}}),u.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(Z,{id:e.id,name:e.name,description:e.description,img_url:e.img_url,rating:e.rating,price:e.price,type:e.isVeg,size:e.size,toppings:e.toppings,getFromCart:o,setCartSize:j})},t)}))]}):null})),ne=function(e){var t=function(){var e=JSON.parse(localStorage.getItem("cart"));return e?e.length:0},n=Object(a.useState)(t()),r=Object(m.a)(n,2),i=r[0],s=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(I,{cartSize:i}),Object(c.jsx)(te,{getFromCart:t,setCartSize:s})]})},ce=n(125),ae=(n(94),function(e){var t=e.setCartSize,n=e.getFromCart,r=Object(a.useState)(JSON.parse(localStorage.getItem("cart"))),i=Object(m.a)(r,2),s=i[0],o=i[1],j=s&&s.reduce((function(e,t){return e+parseInt(t.price)}),0);if(!s||0===s.length)return Object(c.jsx)("img",{className:"invalid",src:_,alt:"No Data Available"});var l=s&&s.map((function(e,a){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.details.addons&&e.details.addons.join(",")}),Object(c.jsx)("td",{children:e.details.toppings&&e.details.toppings.join(",")}),Object(c.jsx)("td",{children:e.quantity}),Object(c.jsx)("td",{children:Object(c.jsxs)($.a,{size:"sm",children:[Object(c.jsx)(z.a,{color:"success",onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("cart")),n=t.findIndex((function(t){return t.id===e})),c=t.find((function(t){return t.id===e})),a=Object(k.a)({},c),r=a.price/a.quantity;a.price+=r,a.quantity+=1,t[n]=a,localStorage.setItem("cart",JSON.stringify(t)),o(t)}(e.id)},children:"Add"}),Object(c.jsx)(z.a,{color:"danger",onClick:function(){return function(e){var c=JSON.parse(localStorage.getItem("cart")),a=c.findIndex((function(t){return t.id===e})),r=c.find((function(t){return t.id===e}));if(r.quantity>1){var i=Object(k.a)({},r),s=i.price/i.quantity;i.price-=s,i.quantity-=1,c[a]=i,localStorage.setItem("cart",JSON.stringify(c)),o(c)}else{var j=Object(A.a)(c);j.splice(a,1),localStorage.setItem("cart",JSON.stringify(j)),o(j),t(n)}}(e.id)},children:"Remove"})]})}),Object(c.jsx)("td",{children:e.price})]},a)}));return s&&s.length?Object(c.jsxs)("div",{className:"cart",children:[Object(c.jsx)("h3",{className:"hero",children:"My Cart"}),Object(c.jsxs)(ce.a,{centered:!0,striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Add-Ons"}),Object(c.jsx)("th",{children:"Toppings"}),Object(c.jsx)("th",{children:"Quantity"}),Object(c.jsx)("th",{children:"Change Quantity"}),Object(c.jsx)("th",{children:"Price"})]})}),Object(c.jsx)("tbody",{children:l})]}),Object(c.jsxs)("h3",{children:["Total ",j]})]}):Object(c.jsx)("img",{className:"invalid",src:_,alt:"No Data Available"})}),re=function(e){var t=function(){var e=JSON.parse(localStorage.getItem("cart"));return e?e.length:0},n=Object(a.useState)(t()),r=Object(m.a)(n,2),i=r[0],s=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(I,{cartSize:i}),Object(c.jsx)(ae,{getFromCart:t,setCartSize:s})]})},ie=function(){return Object(c.jsx)(l.a,{store:g,children:Object(c.jsxs)(o.a,{basename:"/pizza_shop",children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:ne}),Object(c.jsx)(j.a,{exact:!0,path:"/dashboard",component:ne}),Object(c.jsx)(j.a,{exact:!0,path:"/cart",component:re})]})})};var se=function(){return Object(c.jsx)(ie,{})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(95),n(96);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(se,{})}),document.getElementById("root")),oe()}},[[98,1,2]]]);
//# sourceMappingURL=main.b08785ab.chunk.js.map