(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/in-channel-widget/index"],{2248:function(n,t,e){},"7ee3":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"CHANNEL_WIDGET",props:{fdata:{type:Object,default:{}}},data:function(){return{scroll_list:["1","2","3","4","5","6"]}},mounted:function(){console.log("AD_BANNER onLoad",this.fdata)},methods:{splitArray:function(n,t){for(var e=[],r=0;r<n.length;r+=t)e.push(n.slice(r,r+t));return e}},computed:{groups:function(){var n=this.fdata.channelFloor.channels;return this.splitArray(n,10)}}};t.default=r},"875b":function(n,t,e){"use strict";e.r(t);var r=e("7ee3"),o=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=o.a},"8bfc":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}));var r={jdImage:function(){return Promise.all([e.e("common/vendor"),e.e("components/jd-image/jd-image")]).then(e.bind(null,"78b9"))}},o=function(){var n=this.$createElement;this._self._c},a=[]},efb2:function(n,t,e){"use strict";var r=e("2248"),o=e.n(r);o.a},f826:function(n,t,e){"use strict";e.r(t);var r=e("8bfc"),o=e("875b");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("efb2");var u=e("f0c5"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"4211fa7e",null,!1,r["a"],void 0);t["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/in-channel-widget/index-create-component',
    {
        'pages/index/components/in-channel-widget/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f826"))
        })
    },
    [['pages/index/components/in-channel-widget/index-create-component']]
]);
