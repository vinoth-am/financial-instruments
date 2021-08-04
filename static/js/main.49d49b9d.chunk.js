(this["webpackJsonpfinancial-instruments"]=this["webpackJsonpfinancial-instruments"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(17),i=n.n(s),a=(n(26),n(3)),u=n.n(a),o=n(5),l=n(7),d=n(21),j=(n(28),n(29),["ticker","price","assetClass"]),f=["Equities","Macro","Credit"],b={Select:"",Ticker:"ticker",Price:"price",AssetClass:"assetClass"},h=n(0),v=function(e,t,n){switch(e.target.value){case b.Ticker:n(function(e){return e.sort((function(e,t){return e.ticker>t.ticker?1:e.ticker<t.ticker?-1:0}))}(t));break;case b.Price:n(function(e){return e.sort((function(e,t){return t.price-e.price}))}(t));break;case b.AssetClass:n(function(e){return e.sort((function(e,t){return f.indexOf(e.assetClass)-f.indexOf(t.assetClass)}))}(t))}},O=function(e){var t=e.sortBy,n=e.source;return Object(h.jsx)("select",{className:"filter",onChange:function(e){return v(e,n,t)},children:Object.keys(b).map((function(e){return Object(h.jsx)("option",{value:b[e],children:e},e)}))})},p=function(e){var t=e.data,n=e.heading,c=e.tableHeader,s=e.sorting,i=e.width,a=Object(r.useState)([]),u=Object(l.a)(a,2),o=u[0],j=u[1],f=i||80;Object(r.useEffect)((function(){j(t)}),[t]);return Object(h.jsxs)("div",{className:"container",style:{width:f>100?"100%":"".concat(f,"%")},children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h3",{style:{paddingLeft:10},children:n}),s&&Object(h.jsxs)("div",{className:"header-right",children:[Object(h.jsx)("h4",{children:"Sortby"}),Object(h.jsx)(O,{source:o,sortBy:function(e){var t=Object(d.a)(e);j(t)}})]})]}),Object(h.jsx)("table",{className:"instruments-table",children:Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{children:c.map((function(e){return Object(h.jsx)("th",{children:(t=e,(null===t||void 0===t?void 0:t.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.substring(1)))});var t}))}),null===o||void 0===o?void 0:o.map((function(e,t){var n;return Object(h.jsxs)("tr",{className:"row-color-".concat(null===e||void 0===e||null===(n=e.assetClass)||void 0===n?void 0:n.toLowerCase()),children:[Object(h.jsx)("td",{children:e.ticker}),Object(h.jsx)("td",{className:(null===e||void 0===e?void 0:e.price)<0?"price-red":"price-blue",children:e.price}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.assetClass})]},t)}))]})})]})},x=n(18),m=n(19),g=n(20),k=n.n(g),C=function(){function e(){Object(x.a)(this,e)}return Object(m.a)(e,[{key:"get",value:function(){var e=this.getAxiosInstance();return new Promise(function(){var t=Object(o.a)(u.a.mark((function t(n,r){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.get("./sampleData.json");case 3:c=t.sent,n(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getAxiosInstance",value:function(){return k.a.create()}}]),e}(),w=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.get();case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(p,{data:n,heading:"Financial Instruments Data",sorting:!0,tableHeader:j,width:80})};var y=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)("h1",{style:{marginLeft:"150px"},children:"Welcome !"}),Object(h.jsx)(w,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),N()}},[[49,1,2]]]);
//# sourceMappingURL=main.49d49b9d.chunk.js.map