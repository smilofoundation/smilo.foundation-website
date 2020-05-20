(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{253:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Administrators of a Blackbox node can use the "),n("code",[e._v("admin")]),e._v(" CLI command to make changes to the node.  These changes are made while the node is running and do not require a node restart.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("admin")]),e._v(" CLI makes use of the "),n("a",{attrs:{href:"../Interface%20%26%20API"}},[e._v("ADMIN server API")]),e._v(" and provides some additional features.  An ADMIN server must have been configured at startup (see "),n("a",{attrs:{href:"../../Configuration/Configuration%20Overview"}},[e._v("Configuration Overview")]),e._v(").")]),e._v(" "),n("p",[e._v("After starting a node with "),n("code",[e._v("Blackbox -configfile /path/to/node-config.json")]),e._v(", the admin CLI can be used.  Currently supported admin commands are:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("addpeer")]),e._v(": Add a new peer to a running node")])]),e._v(" "),n("h3",{attrs:{id:"addpeer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addpeer","aria-hidden":"true"}},[e._v("↳")]),e._v(" "),n("code",[e._v("addpeer")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Blackbox admin -configfile /path/to/node-config.json -addpeer <new-peer-url>\n")])])]),n("p",[e._v("The provided configfile is the same configfile used to start the Blackbox node.")]),e._v(" "),n("p",[e._v("This will do two things:")]),e._v(" "),n("ol",[n("li",[e._v("Add "),n("code",[e._v("<new-peer-url>")]),e._v(" to the node's list of peers, by using the ADMIN API")]),e._v(" "),n("li",[e._v("Update the configfile "),n("code",[e._v("/path/to/node-config.json")]),e._v(" to include "),n("code",[e._v("<new-peer-url>")]),e._v(" in the "),n("code",[e._v("peer")]),e._v(" list.  Updating the configfile in this way means that if the node is stopped and started again, the admin changes will still be present.")])]),e._v(" "),n("p",[e._v("If the configfile should not be updated, use the ADMIN API directly.")])])}),[],!1,null,null,null);t.default=o.exports}}]);