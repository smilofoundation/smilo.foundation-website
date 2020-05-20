(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{228:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cli-config-overrides-v0-10-2-and-earlier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-config-overrides-v0-10-2-and-earlier","aria-hidden":"true"}},[t._v("↳")]),t._v(" CLI config overrides (v0.10.2 and earlier)")]),t._v(" "),s("p",[t._v("Standard Tessera CLI options are prefixed with a single hyphen (e.g. "),s("code",[t._v("-configfile <PATH>")]),t._v("), whilst the config override options are prefixed with a double hyphen (e.g. "),s("code",[t._v("--alwaysSendTo <STRING[]...>")]),t._v(").  Use "),s("code",[t._v("tessera help")]),t._v(" to see a complete list of CLI options.")]),t._v(" "),s("p",[t._v("If a config value is included in both the "),s("code",[t._v("configfile")]),t._v(" and the CLI, then the CLI value will take precedence. The exceptions to this rule are the "),s("code",[t._v("--peer.url <STRING>")]),t._v(" and "),s("code",[t._v("--alwaysSendTo <STRING[]...>")]),t._v(" options.  Instead of overriding, these CLI options append to any peer or alwaysSendTo urls in the provided "),s("code",[t._v("configfile")]),t._v(".  For example, if the following was provided in a "),s("code",[t._v("configfile")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9001"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysSendTo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"giizjhZQM6peq52O7icVFxdTmTYinQSUsvyhXzgZqkE="')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("and Tessera was run with the following overrides:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tessera -configfile path/to/file --peer.url http://localhost:9002 --peer.url http://localhost:9003 --alwaysSendTo /+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" --alwaysSendTo UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),s("p",[t._v("then Tessera will be started with the following equivalent configuration:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9001"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9002"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9003"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysSendTo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"giizjhZQM6peq52O7icVFxdTmTYinQSUsvyhXzgZqkE="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y="')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("As demonstrated in this example, in certain cases multiple values can be provided by repeating the CLI option.  This is supported for the "),s("code",[t._v("peer.url")]),t._v(", "),s("code",[t._v("alwaysSendTo")]),t._v(", "),s("code",[t._v("server.sslConfig.serverTrustCertificates")]),t._v(" and "),s("code",[t._v("server.sslConfig.clientTrustCertificates")]),t._v(" options.")]),t._v(" "),s("p",[t._v("!!! info\nThe only "),s("code",[t._v("encryptor")]),t._v(" field that can be overriden is "),s("code",[t._v("encryptor.type")]),t._v(".  All other "),s("code",[t._v("encryptor")]),t._v(" fields can only be set in the configfile.  See [encryptor config](../../../Configuration/Configuration Overview/#encryptor-supporting-alternative-curves-in-tessera) for more details.")])])}),[],!1,null,null,null);e.default=n.exports}}]);