(this["webpackJsonpweather-api-app"]=this["webpackJsonpweather-api-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(7),o=n(4),j=n.n(o),l=n(0),u=function(e){var t=Object(a.useRef)();return Object(l.jsxs)("form",{className:j.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value;e.InputClick(a)},children:[Object(l.jsx)("label",{children:"Search"}),Object(l.jsx)("input",{type:"text",minLength:"4",ref:t}),Object(l.jsx)("input",{className:j.a.actions,type:"reset",value:"Reset"}),Object(l.jsx)("button",{className:j.a.actions,children:"go"})]})},h=n(5),m=n.n(h),d=function(e){var t=e.apiData;return Object(l.jsx)("div",{className:m.a.container,children:t.map((function(e){return Object(l.jsxs)("section",{className:m.a.card,children:[Object(l.jsx)("div",{className:m.a.image,children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:e.name})}),Object(l.jsx)("h1",{children:e.name}),Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["Temperature is : ",e.temp]})}),Object(l.jsxs)("h1",{children:[Object(l.jsxs)("span",{children:["Weather is : ",e.weather]}),Object(l.jsxs)("span",{children:["Wind speed is : ",e.wind," ms"]})]})]},e.id)}))})};var b=function(){var e,t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),j=Object(i.a)(o,2),h=j[0],m=j[1],b=Object(a.useState)([]),p=Object(i.a)(b,2),f=p[0],O=p[1],x=Object(a.useState)([]),_=Object(i.a)(x,2),g=_[0],v=_[1];if(Object(a.useEffect)((function(){m(!0),function(e){try{fetch("https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=".concat("155da7ad5355e7cf3b6b93017697eec2")).then((function(e){return e.json()})).then((function(e){for(var t=[],n=0;n<e.list.length;n++){var a={name:e.list[n].name,id:e.list[n].id,temp:e.list[n].main.temp,weather:e.list[n].weather[0].main,icon:e.list[n].weather[0].icon,wind:e.list[n].wind.speed};t.push(a)}O(t)}))}catch(r){m(!1),c(r)}}()}),[]),r)return Object(l.jsxs)("div",{children:["Erorr: ",r.message]});0===g.length&&(e=Object(l.jsx)(s.a,{in:h,timeout:2e3,children:function(e){return Object(l.jsxs)("div",{style:{margin:"0 auto",transition:"all 1s ease-out",transform:"entering"===e?"translateY(0)":"translateY(3.5rem)"},children:[Object(l.jsx)(d,{apiData:f}),";"]})}})),g.length>0&&(e=Object(l.jsx)(d,{apiData:g}));var w=function(e){var t=f.filter((function(t){return t.name===e}));v(t),m((function(e){return!0})),setTimeout((function(){m(!1)}),2e3)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(s.a,{in:h,timeout:2e3,children:function(e){return Object(l.jsx)("div",{style:{margin:"0 auto",transition:"all 1s ease-in",transform:"entering"===e?"translateY(0.5rem)":"translateY(1.5rem)"},children:Object(l.jsx)(u,{InputClick:w})})}}),e]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"SearchForm_form__B2ChN",formOpen:"SearchForm_formOpen__1FaBL",formClosed:"SearchForm_formClosed__7h-X-",actions:"SearchForm_actions__qg6OS"}},5:function(e,t,n){e.exports={container:"Weather_container__2Hl-s",card:"Weather_card__13MhA",image:"Weather_image__3wq2N"}}},[[14,1,2]]]);
//# sourceMappingURL=main.bd8673d7.chunk.js.map