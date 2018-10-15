(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{270:function(e,i,t){"use strict";t.r(i);var o=t(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"deploying-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-versions","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying Versions")]),e._v(" "),t("ol",[t("li",[e._v("Clone repo fresh (or remove any previous configs from an existing copy)")]),e._v(" "),t("li",[e._v("Update the version number in "),t("code",[e._v("package.json")]),e._v(" and "),t("code",[e._v("src/core/Directus/Application/Application.php")]),e._v(" ("),t("code",[e._v("DIRECTUS_VERSION")]),e._v(" constant)")]),e._v(" "),t("li",[e._v("Install vendor dependencies using optimization flag")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("composer install -a")])])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Install and build extensions")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("cd extensions && npm install && npm run build")])])]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Remove everything that's not needed in production. Things that need to stay:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("bin")])]),e._v(" "),t("li",[t("code",[e._v("docker")])]),e._v(" "),t("li",[t("code",[e._v("config")])]),e._v(" "),t("li",[t("code",[e._v("logs")])]),e._v(" "),t("li",[t("code",[e._v("migrations")])]),e._v(" "),t("li",[t("code",[e._v("public")])]),e._v(" "),t("li",[t("code",[e._v("src")])]),e._v(" "),t("li",[t("code",[e._v("vendor")])]),e._v(" "),t("li",[t("code",[e._v("README.md")])]),e._v(" "),t("li",[t("code",[e._v("LICENSE")])])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Clone the build branch of the API\n"),t("code",[e._v("$ git clone -b build git@github.com:directus/api.git build")])]),e._v(" "),t("li",[e._v("Remove everything (except the "),t("code",[e._v(".git")]),e._v(" folder) from the build directory")]),e._v(" "),t("li",[e._v("Copy everything (except the "),t("code",[e._v(".git")]),e._v(" folder) from the main api directory into the build directory")]),e._v(" "),t("li",[e._v("Commit the new release on the "),t("code",[e._v("build")]),e._v(" folder")]),e._v(" "),t("li",[e._v("Push the changes on the build folder to the build branch\n`$ git push git@github.com:directus/api.git build:build")]),e._v(" "),t("li",[e._v("Delete both directories")])])])}],!1,null,null,null);n.options.__file="deploying-versions.md";i.default=n.exports}}]);