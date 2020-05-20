(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{186:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file","aria-hidden":"true"}},[e._v("↳")]),e._v(" Configuration file")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v(".json")]),e._v(" file including required configuration details must be provided using the "),a("code",[e._v("-configfile")]),e._v(" command-line property when starting Blackbox.")]),e._v(" "),a("p",[e._v("Many configuration options can be overridden using the command-line.  See the "),a("a",{attrs:{href:"../Using%20CLI%20to%20override%20config"}},[e._v("Using CLI to override config")]),e._v(" page for more information.")]),e._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options","aria-hidden":"true"}},[e._v("↳")]),e._v(" Configuration options")]),e._v(" "),a("p",[e._v("The configuration options are explained in more detail in this section.  Configuration options that require more than a brief explanation are covered in separate pages.")]),e._v(" "),a("h3",{attrs:{id:"cryptographic-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Cryptographic Keys")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"../Keys"}},[e._v("Keys page")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"whitelist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitelist","aria-hidden":"true"}},[e._v("↳")]),e._v(" Whitelist")]),e._v(" "),a("p",[e._v("If set to true, the "),a("code",[e._v("peers")]),e._v(" list will be used as the whitelisted urls for the Blackbox node:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"useWhiteList": true,\n')])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[e._v("↳")]),e._v(" Database")]),e._v(" "),a("p",[e._v("Blackbox's database uses JDBC to connect to an external database. Any valid JDBC URL may be specified, refer to your providers details to construct a valid JDBC URL.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"jdbc": {\n  "url": "[JDBC URL]",\n  "username": "[JDBC Username]",\n  "password": "[JDBC Password]"\n}\n')])])]),a("h4",{attrs:{id:"obfuscate-database-password-in-config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obfuscate-database-password-in-config-file","aria-hidden":"true"}},[e._v("↳")]),e._v(" Obfuscate database password in config file")]),e._v(" "),a("p",[e._v("Certain entries in the Blackbox config file must be obfuscated in order to prevent any attempts from attackers to gain access to critical parts of the application (e.g. database). The database password can be encrypted using "),a("a",{attrs:{href:"http://www.jasypt.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasypt"),a("OutboundLink")],1),e._v(" to avoid it being exposed as plain text in the configuration file.")]),e._v(" "),a("p",[e._v("To enable this feature, simply replace your plain-text database password with its encrypted value and wrap it inside an "),a("code",[e._v("ENC()")]),e._v(" function.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"jdbc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ENC(ujMeokIQ9UFHSuBYetfRjQTpZASgaua3)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jdbc:h2:/qdata/c1/db1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"autoCreateTables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Being a Password-Based Encryptor, Jasypt requires a secret key (password) and a configured algorithm to encrypt/decrypt this config entry. This password can either be loaded into Blackbox from file system or user input. For file system input, the location of this secret file needs to be set in Environment Variable "),a("code",[e._v("Blackbox_CONFIG_SECRET")])]),e._v(" "),a("p",[e._v("If the database password is not wrapped inside "),a("code",[e._v("ENC()")]),e._v(", Blackbox will simply treat it as a plain-text password however this approach is not recommended for production environments.")]),e._v(" "),a("p",[e._v("!!! note"),a("br"),e._v("\nJasypt encryption is currently only available for the "),a("code",[e._v("jdbc.password")]),e._v(" field")]),e._v(" "),a("h5",{attrs:{id:"how-to-encrypt-database-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-encrypt-database-password","aria-hidden":"true"}},[e._v("↳")]),e._v(" How to encrypt database password")]),e._v(" "),a("ol",[a("li",[e._v("Download and unzip "),a("a",{attrs:{href:"http://www.jasypt.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasypt"),a("OutboundLink")],1),e._v(" and redirect to the "),a("code",[e._v("bin")]),e._v(" directory")]),e._v(" "),a("li",[e._v("Encrypt the password"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ./encrypt.sh "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("input")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dbpassword "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Smilo\n\n----ENVIRONMENT-----------------\n\nRuntime: Oracle Corporation Java HotSpot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("TM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("-Bit Server VM "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25.171")]),e._v("-b11 \n\n\n\n----ARGUMENTS-------------------\n\ninput: dbpassword\npassword: Smilo\n\n\n\n----OUTPUT----------------------\n\nrJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb\n")])])])]),e._v(" "),a("li",[e._v("Place the wrapped output, "),a("code",[e._v("ENC(rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb)")]),e._v(", in the config json file")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[e._v("↳")]),e._v(" Server")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("For Blackbox versions prior to 0.8:")]),e._v(" See "),a("a",{attrs:{href:"../Legacy%20server%20settings"}},[e._v("Legacy Server Settings")]),e._v(".")])]),e._v(" "),a("p",[e._v("To allow for a greater level of control, Blackbox's API has been separated into distinct groups.  Each group is only accessible over a specific server type.  Blackbox can be started with different combinations of these servers depending on the functionality required.  This is defined in the configuration and determines the APIs that are available and how they are accessed.")]),e._v(" "),a("p",[e._v("The possible server types are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("P2P")]),e._v(" - Blackbox uses this server to communicate with other Transaction Managers (the URI for this server can be shared with other nodes to be used in their "),a("code",[e._v("peer")]),e._v(" list - see below)")]),e._v(" "),a("li",[a("code",[e._v("Q2T")]),e._v(" - This server is used for communications between Blackbox and its corresponding Smilo node")]),e._v(" "),a("li",[a("code",[e._v("ENCLAVE")]),e._v(" - If using a remote enclave, this defines the connection details for the remote enclave server (see the "),a("a",{attrs:{href:"../../Blackbox%20Services/Enclave#types-of-enclave"}},[e._v("Enclave docs")]),e._v(" for more info)")]),e._v(" "),a("li",[a("code",[e._v("ThirdParty")]),e._v(" - This server is used to expose certain Transaction Manager functionality to external services such as Smilo.js")])]),e._v(" "),a("p",[e._v("The servers to be started are provided as a list:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"serverConfigs": [\n   ...<server settings>...\n]\n')])])]),a("p",[e._v("Each server is individually configurable and can advertise over HTTP, HTTPS or a Unix Socket.  The format of an individual server config is slightly different between Blackbox v0.9 and v0.8:")]),e._v(" "),a("h4",{attrs:{id:"server-configuration-v0-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-v0-9","aria-hidden":"true"}},[e._v("↳")]),e._v(" Server configuration (v0.9)")]),e._v(" "),a("p",[e._v("HTTP:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",\n    "enabled": <boolean>,\n    "serverAddress":"http://[host]:[port]/[path]\n    "communicationType" : <enum>, // "REST" or "GRPC"\n}\n')])])]),a("p",[e._v("HTTPS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",\n    "enabled": <boolean>,\n    "serverAddress":"https://[host]:[port]/[path]\n    "communicationType" : <enum>, // "REST" or "GRPC"\n    "sslConfig": {\n        ...<SSL settings, see below>...\n    }\n}\n')])])]),a("p",[e._v("Unix Socket:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",\n    "enabled": <boolean>,\n    "serverAddress":"unix://[path],\n    "communicationType" : "REST"\n}\n')])])]),a("h4",{attrs:{id:"server-configuration-v0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-v0-8","aria-hidden":"true"}},[e._v("↳")]),e._v(" Server configuration (v0.8)")]),e._v(" "),a("p",[e._v("HTTP:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",\n    "enabled": <boolean>,\n    "serverSocket":{\n        "type": "INET",\n        "port": <int>, //The port to advertise and bind on (if binding address not set)\n        "hostName": <string> // The hostname to advertise and bind on (if binding address not set)\n    },\n    "communicationType" : <enum>, // "REST" or "GRPC"\n    "bindingAddress": <string> //An address to bind the server to that overrides the one defined above\n}\n')])])]),a("p",[e._v("HTTPS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",\n    "enabled": <boolean>,\n    "serverSocket":{\n        "type": "INET",\n        "port": <int>, //The port to advertise and bind on (if binding address not set)\n        "hostName": <string> // The hostname to advertise and bind on (if binding address not set)\n    },\n    "communicationType" : <enum>, // "REST" or "GRPC"\n    "bindingAddress": <string>, //An address to bind the server to that overrides the one defined above\n    "sslConfig": {\n       ...<SSL settings, see below>...\n    }\n}\n')])])]),a("p",[e._v("Unix Socket:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app": "<app type>",  \n    "enabled": <boolean>, \n    "serverSocket":{\n        "type":"UNIX",\n        "path": <string> //the path of the unix socket to create\n    },\n    "communicationType" : "UNIX_SOCKET"\n}\n')])])]),a("h3",{attrs:{id:"tls-ssl-server-sub-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-ssl-server-sub-config","aria-hidden":"true"}},[e._v("↳")]),e._v(" TLS/SSL: server sub-config")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"../TLS"}},[e._v("TLS/SSL")]),e._v(" page.")]),e._v(" "),a("h3",{attrs:{id:"cors-server-sub-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-server-sub-config","aria-hidden":"true"}},[e._v("↳")]),e._v(" CORS: server sub-config")]),e._v(" "),a("p",[e._v("For the ThirdParty server type it may be relevant to configure CORS.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "app":"ThirdParty",\n    "enabled": true,\n    "serverAddress": "http://localhost:9081",\n    "communicationType" : "REST",\n    "cors" : {\n        "allowedMethods" : ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],\n        "allowedOrigins" : ["http://localhost:63342"],\n        "allowedHeaders" : ["content-type"],\n        "allowCredentials" : true\n    }\n},\n')])])]),a("p",[e._v("The configurable fields are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("allowedMethods")]),e._v(" - the list of allowed HTTP methods. If omitted the default list containing "),a("code",[e._v('"GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"')]),e._v(" is used.")]),e._v(" "),a("li",[a("code",[e._v("allowedOrigins")]),e._v(' - the list of domains from which to accept cross origin requests (browser enforced). Each entry in the list can contain the "*" (wildcard) character which matches any sequence of characters. Ex: "*locahost" would match "http://localhost" or "https://localhost". There is no default for this field.')]),e._v(" "),a("li",[a("code",[e._v("allowedHeaders")]),e._v(" - the list of allowed headers. If omitted the request "),a("code",[e._v("Access-Control-Request-Headers")]),e._v(" are copied into the response as "),a("code",[e._v("Access-Control-Allow-Headers")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("allowCredentials")]),e._v(" - the value for the "),a("code",[e._v("Access-Control-Allow-Credentials")]),e._v(" response header. If omitted the default "),a("code",[e._v("true")]),e._v(" value would be used.")])]),e._v(" "),a("h3",{attrs:{id:"influxdb-config-server-sub-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#influxdb-config-server-sub-config","aria-hidden":"true"}},[e._v("↳")]),e._v(" InfluxDB Config: server sub-config")]),e._v(" "),a("p",[e._v("Configuration details to allow Blackbox to record monitoring data to a running InfluxDB instance.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"influxConfig": {\n  "hostName": "[Hostname of Influx instance]",\n  "port": "[Port of Influx instance]",\n  "pushIntervalInSecs": "[How often to push data to InfluxDB]",\n  "dbName": "[Name of InfluxDB]"\n}\n')])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peers","aria-hidden":"true"}},[e._v("↳")]),e._v(" Peers")]),e._v(" "),a("p",[e._v("A list of URLs used by Blackbox to communicate with other nodes.  Peer info is shared between nodes during runtime (however, please note the section on "),a("code",[e._v("Peer Discovery")]),e._v(" below).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"peer": [\n  {\n    "url": "http://myhost.com:9000"\n  },\n  {\n    "url": "http://myhost.com:9001"\n  },\n  {\n    "url": "http://myhost.com:9002"\n  }\n]\n')])])]),a("h3",{attrs:{id:"disabling-peer-discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-peer-discovery","aria-hidden":"true"}},[e._v("↳")]),e._v(" Disabling peer discovery")]),e._v(" "),a("p",[e._v("If peer discovery is disabled, then "),a("strong",[e._v("only")]),e._v(" peers defined in the configuration file will be communicated with; any peers notified by other nodes will be ignored. This allows nodes to be 'locked down' if desired.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"disablePeerDiscovery": true\n')])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"always-send-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#always-send-to","aria-hidden":"true"}},[e._v("↳")]),e._v(" Always-send-to")]),e._v(" "),a("p",[e._v("It is possible to configure a node that will be sent a copy of every transaction, even if it is not specified as a party to the transaction. This could be used, for example, to send a copy of every transaction to a node for audit purposes. Specify the public keys to forward transactions onto, and these will be included as if you had specified them on the "),a("code",[e._v("privateFor")]),e._v(" field to start with.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"alwaysSendTo":["<public key 1>", "<public key 2>"]\n')])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"remote-key-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-key-validation","aria-hidden":"true"}},[e._v("↳")]),e._v(" Remote-Key-Validation")]),e._v(" "),a("p",[e._v("Blackbox provides an API "),a("code",[e._v("/partyinfo")]),e._v(" on Blackbox P2P server to discover all the peers in the network. In order to prevent attackers trying to inject malicious addresses against public keys, where they will try to assign the address to direct private transactions to them instead of the real owner of the key, we have added a feature to enable node level validation on the remote key that checks the remote node does in fact own the keys that were advertised. Only after the keys are validated with the remote node to ensure they own them, the keys are added to the local network info (partyinfo) store.")]),e._v(" "),a("p",[e._v("Default configuration for this is "),a("code",[e._v("false")]),e._v(" as this is BREAKABLE change to lower versions to Blackbox 0.10.0. To enable this, simple set below parameter to true in the configuration:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' "features": {\n    "enableRemoteKeyValidation": true\n  }\n')])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"alternative-cryptographic-elliptic-curves"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-cryptographic-elliptic-curves","aria-hidden":"true"}},[e._v("↳")]),e._v(" Alternative cryptographic elliptic curves")]),e._v(" "),a("p",[e._v("By default Blackbox's Enclave uses the "),a("a",{attrs:{href:"https://github.com/neilalexander/jnacl",target:"_blank",rel:"noopener noreferrer"}},[e._v("jnacl"),a("OutboundLink")],1),e._v(" implementation of the "),a("a",{attrs:{href:"https://nacl.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NaCl"),a("OutboundLink")],1),e._v(" library to encrypt/decrypt private payloads.")]),e._v(" "),a("p",[e._v("NaCl provides public-key authenticated encryption by using "),a("code",[e._v("curve25519xsalsa20poly1305")]),e._v(", a combination of the:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Curve25519 Diffie-Hellman key-exchange function")]),e._v(": based on fast arithmetic on a strong elliptic curve")]),e._v(" "),a("li",[a("strong",[e._v("Salsa20 stream cipher")]),e._v(": encrypts a message using the shared secret")]),e._v(" "),a("li",[a("strong",[e._v("Poly1305 message-authentication code")]),e._v(": authenticates the encrypted message using a shared secret")])]),e._v(" "),a("p",[e._v("The NaCl primitives provide good security and speed and should be sufficient in most circumstances.")]),e._v(" "),a("p",[e._v("However, the Enclave also supports the JCA (Java Cryptography Architecture) framework.  Supplying a compatible JCA provider (e.g. "),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC",target:"_blank",rel:"noopener noreferrer"}},[e._v("SunEC provider"),a("OutboundLink")],1),e._v(") and the necessary Blackbox config allows the NaCl primitives to be replaced with alternative curves and symmetric ciphers.")]),e._v(" "),a("p",[e._v("The same Enclave encryption process as described in "),a("a",{attrs:{href:"../../../Lifecycle-of-a-private-transaction"}},[e._v("Lifecycle of a private transaction")]),e._v(" is used regardless of whether the NaCl or JCA Encryptor are configured.")]),e._v(" "),a("p",[e._v("This is a feature introduced in Blackbox v0.10.2.  Providing no "),a("code",[e._v("encryptor")]),e._v(" configuration means the default NaCl encryptor is used.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"encryptor": {\n    "type":"EC",\n    "properties":{\n        "symmetricCipher":"AES/GCM/NoPadding",\n        "ellipticCurve":"secp256r1",\n        "nonceLength":"24",\n        "sharedKeyLength":"32"\n    }\n}\n')])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("Field")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("type")])]),e._v(" "),a("td",[a("code",[e._v("NACL")])]),e._v(" "),a("td",[e._v("The encryptor type. Possible values are "),a("code",[e._v("EC")]),e._v(" or "),a("code",[e._v("NACL")]),e._v(".")])])])]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("type")]),e._v(" is set to "),a("code",[e._v("EC")]),e._v(", the following "),a("code",[e._v("properties")]),e._v(" fields can also be configured:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Field")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("ellipticCurve")])])]),e._v(" "),a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("secp256r1")])])]),e._v(" "),a("td",[e._v("The elliptic curve to use. See "),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC",target:"_blank",rel:"noopener noreferrer"}},[e._v("SunEC provider"),a("OutboundLink")],1),e._v(" for other options. Depending on the JCE provider you are using there may be additional curves available.")])]),e._v(" "),a("tr",[a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("symmetricCipher")])])]),e._v(" "),a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("AES/GCM/NoPadding")])])]),e._v(" "),a("td",[e._v("The symmetric cipher to use for encrypting data (GCM IS MANDATORY as an initialisation vector is supplied during encryption).")])]),e._v(" "),a("tr",[a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("nonceLength")])])]),e._v(" "),a("td",[a("code",[e._v("24")])]),e._v(" "),a("td",[e._v("The nonce length (used as the initialization vector - IV - for symmetric encryption).")])]),e._v(" "),a("tr",[a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[a("code",[e._v("sharedKeyLength")])])]),e._v(" "),a("td",[a("code",[e._v("32")])]),e._v(" "),a("td",[e._v("The key length used for symmetric encryption (keep in mind the key derivation operation always produces 32 byte keys - so the encryption algorithm must support it).")])])])]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=r.exports}}]);