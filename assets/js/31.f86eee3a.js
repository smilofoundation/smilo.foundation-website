(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{270:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"smilo-graphql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smilo-graphql","aria-hidden":"true"}},[a._v("↳")]),a._v(" Smilo GraphQL")]),a._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[a._v("↳")]),a._v(" Overview")]),a._v(" "),s("p",[a._v("Ethereum has defined a GraphQL schema as part of\n"),s("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1767.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("EIP 1767"),s("OutboundLink")],1),a._v(". To support Smilo's private transaction data,\na supplement schema and implementation has been added on top of the default.")]),a._v(" "),s("h4",{attrs:{id:"new-supplement-schema-for-smilo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-supplement-schema-for-smilo","aria-hidden":"true"}},[a._v("↳")]),a._v(" New Supplement Schema for Smilo")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("# Transaction is an Ethereum transaction.\ntype Transaction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    ...\n    # IsPrivate is an indicator of Smilo private transaction\n    isPrivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Boolean\n    # PrivateInputData is the actual payload of Smilo private transaction\n    privateInputData"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Bytes\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[a._v("↳")]),a._v(" Example")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://localhost:8547/graphql -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{ "query": "{ transaction(hash:'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("0x58462fa0b6074a8feb5d9b8cd0e6bb7ef4d1528471396070d9ae617c5dee40a8"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(") { isPrivate inputData privateInputData } }\" }'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data"')]),a._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"transaction"')]),a._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"isPrivate"')]),a._v(":true,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"inputData"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0xe9394a3620f2ef52a2001b08a79363dd467de866ab825877234ee66af5cac620877fdb88633114dd63c3c7a8048fc623e25eaa5914f5dc8004738dc0a52b62a3"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"privateInputData"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0x608060405234801561001057600080fd5b506040516020806101a18339810180604052602081101561003057600080fd5b81019080805190602001909291905050508060008190555050610149806100586000396000f3fe608060405234801561001057600080fd5b506004361061005e576000357c0100000000000000000000000000000000000000000000000000000000900480632a1afcd91461006357806360fe47b1146100815780636d4ce63c146100af575b600080fd5b61006b6100cd565b6040518082815260200191505060405180910390f35b6100ad6004803603602081101561009757600080fd5b81019080803590602001909291905050506100d3565b005b6100b7610114565b6040518082815260200191505060405180910390f35b60005481565b806000819055507fefe5cb8d23d632b5d2cdd9f0a151c4b1a84ccb7afa1c57331009aa922d5e4f36816040518082815260200191505060405180910390a150565b6000805490509056fea165627a7a7230582061f6956b053dbf99873b363ab3ba7bca70853ba5efbaff898cd840d71c54fc1d0029000000000000000000000000000000000000000000000000000000000000002a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);