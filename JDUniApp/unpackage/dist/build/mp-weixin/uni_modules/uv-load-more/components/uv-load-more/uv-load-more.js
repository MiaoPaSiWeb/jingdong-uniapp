(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-load-more/components/uv-load-more/uv-load-more"],{"135e":function(t,n,o){"use strict";var e=o("dead"),i=o.n(e);i.a},"43f3":function(t,n,o){"use strict";var e=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(o("5074")),u=e(o("096f")),a=e(o("96d8")),d={name:"uv-loadmore",mixins:[i.default,u.default,a.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};n.default=d},5806:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var e={uvLine:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uv-line/components/uv-line/uv-line")]).then(o.bind(null,"4393"))},uvLoadingIcon:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon")]).then(o.bind(null,"f25d"))}},i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.__get_style([{backgroundColor:t.bgColor,marginBottom:t.$uv.addUnit(t.marginBottom),marginTop:t.$uv.addUnit(t.marginTop),height:t.$uv.addUnit(t.height)},t.$uv.addStyle(t.customStyle)])),e=t.__get_style([t.loadTextStyle]);t.$mp.data=Object.assign({},{$root:{s0:o,s1:e}})},u=[]},"7de9":function(t,n,o){"use strict";o.r(n);var e=o("43f3"),i=o.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},"9e11":function(t,n,o){"use strict";o.r(n);var e=o("5806"),i=o("7de9");for(var u in i)["default"].indexOf(u)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(u);o("135e");var a=o("f0c5"),d=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"5a97ab20",null,!1,e["a"],void 0);n["default"]=d.exports},dead:function(t,n,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-load-more/components/uv-load-more/uv-load-more-create-component',
    {
        'uni_modules/uv-load-more/components/uv-load-more/uv-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9e11"))
        })
    },
    [['uni_modules/uv-load-more/components/uv-load-more/uv-load-more-create-component']]
]);