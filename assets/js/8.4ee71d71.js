(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{243:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"configure-with-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-with-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure with Script")]),t._v(" "),e("h2",{attrs:{id:"create-config-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-config-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Config File")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ bin/directus install:config -n "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database-name"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -u "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("mysql-user"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("mysql-password"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("-h")])]),t._v(" "),e("td",[t._v("Hostname or IP address of the database server (Default: "),e("code",[t._v("localhost")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-P")])]),t._v(" "),e("td",[t._v("Port of the database server (Default: "),e("code",[t._v("3306")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-t")])]),t._v(" "),e("td",[t._v("Type of the database (Default: "),e("code",[t._v("mysql")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-n")])]),t._v(" "),e("td",[t._v("Name of the database")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-u")])]),t._v(" "),e("td",[t._v("Username for the database connection")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-p")])]),t._v(" "),e("td",[t._v("Password for the database connection")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-c")])]),t._v(" "),e("td",[t._v("Tell to enable or disable CORS (Default: "),e("code",[t._v("false")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-e")])]),t._v(" "),e("td",[t._v("Email used by the Mailer as From/Sender (Default: "),e("code",[t._v("admin@example.com")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-N")])]),t._v(" "),e("td",[t._v("Name of the project (Default: "),e("code",[t._v("_")]),t._v(")")])])])]),t._v(" "),e("h2",{attrs:{id:"add-system-schema-and-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-system-schema-and-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Add System Schema and Data")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ bin/directus install:database\n")])])]),e("h2",{attrs:{id:"create-admin-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-admin-user","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Admin User")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ bin/directus install:install -e "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("admin-email"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("admin-password"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -t "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("project-title"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h3",{attrs:{id:"options-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("-e")])]),t._v(" "),e("td",[t._v("Email of the Directus user (Default: "),e("code",[t._v("admin@example.com")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-p")])]),t._v(" "),e("td",[t._v("Password of the Directus user (Default: "),e("code",[t._v("password")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-t")])]),t._v(" "),e("td",[t._v("Token of the Directus user (Default: "),e("code",[t._v("admin_token")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-T")])]),t._v(" "),e("td",[t._v("Title of the project (Default: "),e("code",[t._v("Directus")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-N")])]),t._v(" "),e("td",[t._v("Name of the project (Default: "),e("code",[t._v("_")]),t._v(")")])])])]),t._v(" "),e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),e("p",[t._v("Test that everything is working by making a request to the "),e("code",[t._v("users")]),t._v(" endpoint using the "),e("code",[t._v("access_token")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET http://localhost/_/users?access_token=admin_token\n")])])])])}],!1,null,null,null);r.options.__file="configure-with-script.md";a.default=r.exports}}]);