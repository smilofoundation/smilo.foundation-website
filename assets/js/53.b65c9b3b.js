(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{187:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"generating-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Generating keys")]),e._v(" "),t("h3",{attrs:{id:"file-stored-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-stored-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" File-stored keys")]),e._v(" "),t("p",[e._v("Generate a key pair and save in new files "),t("code",[e._v("new.pub")]),e._v(" and "),t("code",[e._v("new.key")]),e._v(" (will start an interactive prompt to provide passwords):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -filename new\n")])])]),t("p",[e._v("Multiple key pairs can be generated at the same time by providing a comma-separated list of values:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -filename /path/to/key1,/path/to/key2\n")])])]),t("p",[e._v("To generate an unlocked key, the following can be used to tell Blackbox to not expect any input:")]),e._v(" "),e._v('" extra-class">'),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" /dev/null\n")])]),e._v(" "),e._v('" extra-class">'),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("printf")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[e._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[e._v("\\n")]),e._v('"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" Blackbox -keygen\n")])]),e._v(" "),t("h3",{attrs:{id:"azure-key-vault-stored-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-key-vault-stored-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Azure Key Vault-stored keys")]),e._v(" "),t("p",[e._v("Generate a key pair as secrets with IDs "),t("code",[e._v("Pub")]),e._v(" and "),t("code",[e._v("Key")]),e._v(" and save to an Azure Key Vault with DNS name "),t("code",[e._v("<url>")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype AZURE -keygenvaulturl <url>\n")])])]),t("p",[e._v("The "),t("code",[e._v("-filename")]),e._v(" option can be used to specify alternate IDs.  Multiple key pairs can be generated at the same time by providing a comma-separated list of values:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype AZURE -keygenvaulturl <url> -filename id1,id2\n")])])]),t("p",[e._v("!!! warning\nIf saving new keys with the same ID as keys that already exist in the vault, the existing keys will be replaced by the newer version.  When doing this, make sure to "),t("router-link",{attrs:{to:"/Privacy/Configuration/Keys/#azure-key-vault-key-pairs"}},[e._v("specify the correct secret version in your Blackbox configuration")])],1),e._v(" "),t("p",[e._v("!!! note\nEnvironment variables must be set if using an Azure Key Vault, for more information see "),t("a",{attrs:{href:"../Setting%20up%20an%20Azure%20Key%20Vault"}},[e._v("Setting up an Azure key vault")])]),e._v(" "),t("h3",{attrs:{id:"hashicorp-vault-stored-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashicorp-vault-stored-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Hashicorp Vault-stored keys")]),e._v(" "),t("p",[e._v("Generate a key pair and save to a Hashicorp Vault at the secret path "),t("code",[e._v("secretEngine/secretName")]),e._v(" with IDs "),t("code",[e._v("publicKey")]),e._v(" and "),t("code",[e._v("privateKey")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   -keygenvaultsecretengine secretEngine -filename secretName \n")])])]),t("p",[e._v("Options exist for configuring TLS and AppRole authentication (by default the AppRole path is set to "),t("code",[e._v("approle")]),e._v("):")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   -keygenvaultsecretengine "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("secretEngineName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -filename "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("secretName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   -keygenvaultkeystore "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("JKS file"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -keygenvaulttruststore "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("JKS file"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   -keygenvaultapprole "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("authpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("-filename")]),e._v(" option can be used to generate and store multiple key pairs at the same time:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   -keygenvaultsecretengine secretEngine -filename myNode/keypairA,myNode/keypairB \n")])])]),t("p",[e._v("!!! warning\nSaving a new key pair to an existing secret will overwrite the values stored at that secret.  Previous versions of secrets may be retained and be retrievable by Blackbox depending on how the K/V secrets engine is configured.  When doing this, make sure to "),t("router-link",{attrs:{to:"/Privacy/Configuration/Keys/#hashicorp-vault-key-pairs"}},[e._v("specify the correct secret version in your Blackbox configuration")])],1),e._v(" "),t("p",[e._v("!!! note\nEnvironment variables must be set if using a Hashicorp Vault, and a version 2 K/V secret engine must be enabled.  For more information see "),t("a",{attrs:{href:"../Setting%20up%20a%20Hashicorp%20Vault"}},[e._v("Setting up a Hashicorp Vault")])]),e._v(" "),t("h3",{attrs:{id:"aws-secrets-manager-stored-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-secrets-manager-stored-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" AWS Secrets Manager-stored keys")]),e._v(" "),t("p",[e._v("Generate a key pair and save to an AWS Secrets Manager, with endpoint "),t("code",[e._v("<url>")]),e._v(", as secrets with IDs "),t("code",[e._v("Pub")]),e._v(" and "),t("code",[e._v("Key")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype AWS -keygenvaulturl "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("-filename")]),e._v(" option can be used to specify alternate IDs.  Multiple key pairs can be generated at the same time by providing a comma-separated list of values:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Blackbox -keygen -keygenvaulttype AWS -keygenvaulturl "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -filename id1,id2\n")])])]),t("p",[e._v("!!! note\nEnvironment variables must be set if using an AWS Secrets Manager, for more information see "),t("a",{attrs:{href:"../Setting%20up%20an%20AWS%20Secrets%20Manager"}},[e._v("Setting up an AWS Secrets Manager")])]),e._v(" "),t("h3",{attrs:{id:"updating-a-configfile-with-newly-generated-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-configfile-with-newly-generated-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Updating a configfile with newly generated keys")]),e._v(" "),t("p",[e._v("Any newly generated keys must be added to a Blackbox "),t("code",[e._v(".json")]),e._v(" configfile.  Often it is easiest to do this manually.")]),e._v(" "),t("p",[e._v("However, the "),t("code",[e._v("Blackbox keygen")]),e._v(" "),t("code",[e._v("-configfile")]),e._v(" option can be used to automatically update a configfile after key generation.  This is particularly useful when scripting.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -filename key1 -configfile /path/to/config.json --configout /path/to/new.json --pwdout /path/to/new.pwds\n")])])]),t("p",[e._v("The above command will prompt for a password and generate the "),t("code",[e._v("key1")]),e._v(" pair as usual.  The Blackbox configuration from "),t("code",[e._v("/path/to/config.json")]),e._v(" will be read, updated and saved to "),t("code",[e._v("/path/to/new.json")]),e._v(".  New passwords will be appended to the existing password file as defined in "),t("code",[e._v("/path/to/config.json")]),e._v(" and written to "),t("code",[e._v("/path/to/new.pwds")]),e._v(".")]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v("--configout")]),e._v(" and "),t("code",[e._v("--pwdout")]),e._v(" options are not provided, the updated "),t("code",[e._v(".json")]),e._v(" config will be printed to the terminal.")]),e._v(" "),t("p",[e._v('!!! note "Note: Differences between v0.10.3 and earlier versions"\nBefore Blackbox version 0.10.3 the node would start after updating the configfile.')]),e._v(" "),t("pre",[t("code",[e._v("In v0.10.3, this behaviour was removed to ensure clearer distinction of responsibilities between each Blackbox command.  The same behaviour can be achieved in v0.10.3 onwards by running:\n ```\n Blackbox keygen ... -output /path/to/new.json\n Blackbox -configfile /path/to/new.json\n ```  \n")])]),e._v(" "),t("h2",{attrs:{id:"securing-private-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securing-private-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Securing private keys")]),e._v(" "),t("p",[e._v("Generated private keys can be encrypted with a password.  This is prompted for on the console during key generation.  After generating password-protected keys, the password must be added to your configuration to ensure Blackbox can read the keys.  The password is not saved anywhere but must be added to the configuration else the key will not be able to be decrypted.")]),e._v(" "),t("p",[e._v("Passwords can be added to the json config either inline using "),t("code",[e._v('"passwords":[]')]),e._v(", or stored in an external file that is referenced by "),t("code",[e._v('"passwordFile": "Path"')]),e._v(".  Note that the number of arguments/file-lines provided must equal the total number of private keys.  For example, if there are 3 total keys and the second is not password secured, the 2nd argument/line must be blank or contain dummy data.")]),e._v(" "),t("p",[e._v("Blackbox uses Argon2 in the process of encrypting private keys.  By default, Argon2 is configured as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "variant": "id",\n    "memory": 1048576,\n    "iterations": 10,\n    "parallelism": 4\n}\n')])])]),t("p",[e._v("The Argon2 configuration can be altered by using the "),t("code",[e._v("-keygenconfig")]),e._v(" option.  Any override file must have the same format as the default configuration above and all options must be provided.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -keygen -filename /path/to/key1 -keygenconfig /path/to/argonoptions.json\n")])])]),t("p",[e._v("For more information on Argon2 see the "),t("a",{attrs:{href:"https://github.com/P-H-C/phc-winner-argon2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Argon2 Github page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"updating-password-protected-private-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-password-protected-private-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Updating password protected private keys")]),e._v(" "),t("p",[e._v("The password of a private key stored in a file can be updated.  Password update uses the "),t("code",[e._v("--keys.keyData.privateKeyPath")]),e._v(" CLI option to get the path to the file.")]),e._v(" "),t("p",[e._v("Password update can be used in multiple ways.  Running any of these commands will start a CLI prompt to allow you to set a new password.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Add a password to an unlocked key")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Change the password of a locked key.  This requires providing the current password for the key (either inline or as a file)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwords <password>\n")])])]),t("p",[e._v("or")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwordFile /path/to/pwds\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Use different Argon2 options from the defaults when updating the password")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blackbox --keys.keyData.privateKeyPath <path to keyfile> --keys.keyData.config.data.aopts.algorithm <algorithm> --keys.keyData.config.data.aopts.iterations <iterations> --keys.keyData.config.data.aopts.memory <memory> --keys.keyData.config.data.aopts.parallelism <parallelism>\n")])])]),t("p",[e._v("All options have been overriden here but only the options you wish to alter from their defaults need to be provided.")])])]),e._v(" "),t("h3",{attrs:{id:"password-protection-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password-protection-algorithm","aria-hidden":"true"}},[e._v("↳")]),e._v(" Password-protection algorithm")]),e._v(" "),t("p",[e._v("The following steps detail the process of password-protecting a private key:")]),e._v(" "),t("ol",[t("li",[e._v("Given private key "),t("code",[e._v("K")]),e._v(" and password "),t("code",[e._v("P")])]),e._v(" "),t("li",[e._v("Generate random Argon2i nonce")]),e._v(" "),t("li",[e._v("Generate random encryption nonce")]),e._v(" "),t("li",[e._v("Stretch "),t("code",[e._v("P")]),e._v(" using Argon2i (with the Argon2i nonce and custom or default "),t("a",{attrs:{href:"#securing-private-keys"}},[e._v("ArgonOptions")]),e._v(") into a 32-byte master key ("),t("code",[e._v("MK")]),e._v(")")]),e._v(" "),t("li",[e._v("Symmetrically encrypt "),t("code",[e._v("K")]),e._v(" with "),t("code",[e._v("MK")]),e._v(" and the encryption nonce")])]),e._v(" "),t("h2",{attrs:{id:"using-alternative-curve-key-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-alternative-curve-key-types","aria-hidden":"true"}},[e._v("↳")]),e._v(" Using alternative curve key types")]),e._v(" "),t("p",[e._v("By default the "),t("code",[e._v("-keygen")]),e._v(" and "),t("code",[e._v("-updatepassword")]),e._v(" commands generate and update "),t("a",{attrs:{href:"https://nacl.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NaCl"),t("OutboundLink")],1),e._v(" compatible keys.")]),e._v(" "),t("p",[e._v("As of Blackbox v0.10.2, the "),t("code",[e._v("--encryptor.type=EC")]),e._v(" CLI option can be provided to generate/update keys of different types.  See [encryptor config](../../../Configuration/Configuration Overview/#encryptor-supporting-alternative-curves-in-Blackbox) for more details.")]),e._v(" "),t("h2",{attrs:{id:"rotation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rotation","aria-hidden":"true"}},[e._v("↳")]),e._v(" Rotation")]),e._v(" "),t("p",[e._v("Blackbox is built to support rotation trivially, by allowing counterparties to advertise multiple keys at once. The tooling to make rotation seamless and automatic is on our Roadmap.")])])}),[],!1,null,null,null);a.default=r.exports}}]);