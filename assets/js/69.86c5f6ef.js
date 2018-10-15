(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{175:function(t,e,s){t.exports=s.p+"e71b529786f719a98175e4c3672c5375.png"},214:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" Store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"about-mutation-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-mutation-types","aria-hidden":"true"}},[this._v("#")]),this._v(" About mutation types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We chose to put all the different mutation types as constants in "),e("code",[this._v("/store/mutation-types.js")]),this._v(". That way, we have a single source of all the available mutations that can happen in the store. If you're adding new mutations, please put your mutation type definition in that file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(175),alt:"Store Mutations"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"action-and-mutation-naming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-and-mutation-naming","aria-hidden":"true"}},[this._v("#")]),this._v(" Action and Mutation Naming")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the Vuex store, actions that are going to retrieve data are always called "),e("code",[this._v("get<data>")]),this._v(", f.e. "),e("code",[this._v("getItems")]),this._v(" or "),e("code",[this._v("getUserInfo")]),this._v(". These actions will always fire two out of three possible mutations:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Using "),e("code",[this._v("getUserInfo")]),this._v(" action as example")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("USER_PENDING")]),t._v(" — Start fetching the data")]),t._v(" "),s("li",[s("code",[t._v("USER_SUCCESS")]),t._v(" — Got the user info")]),t._v(" "),s("li",[s("code",[t._v("USER_FAILED")]),t._v(" — Fetching user error failed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"promises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promises","aria-hidden":"true"}},[this._v("#")]),this._v(" Promises")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Every store action that fetches data should return a promise so the caller can know when the request is done. The promise will resolve "),e("em",[this._v("without")]),this._v(' any data, since that data will be in the store. This limitation forces the implementation to rely on the store as single source of truth. The promise will also resolve on a "failed" request, since a response with an api error is also a "successful" request response.')])}],a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Directus heavily uses "),s("a",{attrs:{href:"https://vuex.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),s("OutboundLink")],1),t._v(" for global application state management. You can inspect the Vuex Store using the "),s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue DevTools"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Please refer to the official "),s("a",{attrs:{href:"https://vuex.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex documentation"),s("OutboundLink")],1),t._v(" for more information on how to use the store.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("If you're wondering why there's emoji's in the mutation types: it's just to make the devtools "),s("a",{attrs:{href:"https://medium.com/@rijk/make-your-vuex-mutation-names-friendly-7e4b53597cd0",target:"_blank",rel:"noopener noreferrer"}},[t._v("a little more friendly"),s("OutboundLink")],1),t._v(" ☺️")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},r,!1,null,null,null);i.options.__file="store.md";e.default=i.exports}}]);