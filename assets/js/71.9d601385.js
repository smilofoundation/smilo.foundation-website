(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{250:function(e,n,t){"use strict";t.r(n);var i=t(0),o=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"constellation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constellation","aria-hidden":"true"}},[e._v("↳")]),e._v(" Constellation")]),e._v(" "),t("p",[e._v("Constellation is a self-managing, peer-to-peer system in which each\nnode:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Hosts a number of NaCl (Curve25519) public/private key pairs.")])]),e._v(" "),t("li",[t("p",[e._v("Automatically discovers other nodes on the network after\nsynchronizing with as little as one other host.")])]),e._v(" "),t("li",[t("p",[e._v("Synchronizes a directory of public keys mapped to recipient hosts\nwith other nodes on the network.")])]),e._v(" "),t("li",[t("p",[e._v("Exposes a public API which allows other nodes to send encrypted\nbytestrings to your node, and to synchronize, retrieving\ninformation about the nodes that your node knows about.")])]),e._v(" "),t("li",[t("p",[e._v("Exposes a private API which:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Allows you to send a bytestring to one or more  public keys,\nreturning a content-addressable identifier. This bytestring is\nencrypted transparently and efficiently (at symmetric\nencryption speeds) before being transmitted over the wire to\nthe correct recipient nodes (and only those nodes.) The\nidentifier is a hash digest of the encrypted payload that\nevery receipient node receives. Each recipient node also\nreceives a small blob encrypted for their public key which\ncontains the Master Key for the encrypted payload.")])]),e._v(" "),t("li",[t("p",[e._v("Allows you to receive a decrypted bytestring\nbased on an identifier. Payloads which your node has sent or\nreceived can be decrypted and retrieved in this way.")])]),e._v(" "),t("li",[t("p",[e._v("Exposes methods for deletion, resynchronization, and other\nmanagement functions.")])])])]),e._v(" "),t("li",[t("p",[e._v("Supports a number of storage backends including LevelDB,\nBerkeleyDB, SQLite, and Directory/Maildir-style file storage\nsuitable for use with any FUSE adapter, e.g. for AWS S3.")])]),e._v(" "),t("li",[t("p",[e._v("Uses mutually-authenticated TLS with modern settings and various trust\nmodels including hybrid CA/tofu (default), tofu (think OpenSSH), and\nwhitelist (only some set of public keys can connect.)")])]),e._v(" "),t("li",[t("p",[e._v("Supports access controls like an IP whitelist.")])])]),e._v(" "),t("p",[e._v("Conceptually, one can think of Constellation as an amalgamation of a\ndistributed key server, PGP encryption (using modern cryptography,)\nand Mail Transfer Agents (MTAs.)")]),e._v(" "),t("p",[e._v("Constellation's current primary application is to implement the\n\"privacy engine\" of Smilo, a fork of Ethereum with support for\nprivate transactions that function exactly as described in this\nREADME. Private transactions in Smilo contain only a flag indicating\nthat they're private and the content-addressable identifier described\nhere.")]),e._v(" "),t("p",[e._v("Constellation can be run stand-alone as a daemon via\n"),t("code",[e._v("constellation-node")]),e._v(", or imported as a Haskell library, which allows\nyou to implement custom storage and encryption logic.")])])}),[],!1,null,null,null);n.default=o.exports}}]);