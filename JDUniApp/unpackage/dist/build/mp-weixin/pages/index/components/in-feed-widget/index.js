(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/in-feed-widget/index"],{"09b2":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var a={jdImage:function(){return Promise.all([t.e("common/vendor"),t.e("components/jd-image/jd-image")]).then(t.bind(null,"78b9"))}},o=function(){var e=this.$createElement;this._self._c},c=[]},"457b":function(e,n,t){"use strict";var a=t("ed80"),o=t.n(a);o.a},"57cf":function(e,n,t){"use strict";t.r(n);var a=t("6162"),o=t.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=o.a},6162:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"FEED_WIDGET",props:{fdata:{type:Object,default:{}}},data:function(){return{selectTabId:-1,lists:["A","B","C","D","E"]}},mounted:function(){console.log("FEED_WIDGET onLoad",this.fdata)},methods:{splitArray:function(e,n){for(var t=[],a=0;a<e.length;a+=n)t.push(e.slice(a,a+n));return t},handleClickTabItem:function(e){this.selectTabId=e.tabId,console.log("handleClickTabItem",this.selectTabId)}},computed:{}};n.default=a},bec7:function(e,n,t){"use strict";t.r(n);var a=t("09b2"),o=t("57cf");for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("457b");var i=t("f0c5"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"7864126c",null,!1,a["a"],void 0);n["default"]=u.exports},ed80:function(e,n,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/in-feed-widget/index-create-component',
    {
        'pages/index/components/in-feed-widget/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bec7"))
        })
    },
    [['pages/index/components/in-feed-widget/index-create-component']]
]);
