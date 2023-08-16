(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/in-channel-widget/index"],{"05fb":function(n,t,e){},"5d32":function(n,t,e){"use strict";var r=e("05fb"),u=e.n(r);u.a},"7ee3":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"CHANNEL_WIDGET",props:{fdata:{type:Object,default:{}}},data:function(){return{scroll_list:["1","2","3","4","5","6"]}},mounted:function(){console.log("AD_BANNER mounted",this.fdata)},methods:{splitArray:function(n,t){for(var e=[],r=0;r<n.length;r+=t)e.push(n.slice(r,r+t));return e}},computed:{groups:function(){var n=this.fdata.channelFloor.channels;return this.splitArray(n,10)}}};t.default=r},"875b":function(n,t,e){"use strict";e.r(t);var r=e("7ee3"),u=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(o);t["default"]=u.a},c076:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return r}));var r={jdImage:function(){return Promise.all([e.e("common/vendor"),e.e("components/jd-image/jd-image")]).then(e.bind(null,"78b9"))}},u=function(){var n=this.$createElement;this._self._c},o=[]},f826:function(n,t,e){"use strict";e.r(t);var r=e("c076"),u=e("875b");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("5d32");var a=e("f0c5"),i=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"06719519",null,!1,r["a"],void 0);t["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/in-channel-widget/index-create-component',
    {
        'pages/index/components/in-channel-widget/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f826"))
        })
    },
    [['pages/index/components/in-channel-widget/index-create-component']]
]);
