(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{208:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"tessera"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tessera","aria-hidden":"true"}},[e._v("↳")]),e._v(" Tessera")]),e._v(" "),t("p",[t("router-link",{attrs:{to:"/Privacy/Tessera/Tessera/"}},[e._v("Tessera")]),e._v(" is Smilo's Transaction Manager.  Smilo privacy features depends on Tessera to Encrypt/Decrypt, and broadcast the orchestrations of a private transaction payload.\nTessera uses an enclave to perform the encryption/decryption of private transactions payload. The encryption keys should be stored in high secure environments such a hardware security module (HSM).\nTessera communication with its dependencies (Enclave, Smilo node, Payload Storage Database, Secret Storage Service) must be secured. To ensure the privacy and authentication of the communication between Tessera the network must be configured to Certificate Based Mutual Authentication (MTLS).")],1),e._v(" "),t("h3",{attrs:{id:"encryption-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encryption-keys","aria-hidden":"true"}},[e._v("↳")]),e._v(" Encryption Keys")]),e._v(" "),t("p",[e._v("Encryption keys is the most critical element of the privacy model, if the encryption key is compromised the network loses its privacy. Tessera support integration with Trusted Platform Modules (TPM) and Hardware Security Modules (HSM) to reduce surface attack and provide highly secure environment.")]),e._v(" "),t("h3",{attrs:{id:"security-checklist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-checklist","aria-hidden":"true"}},[e._v("↳")]),e._v(" Security Checklist")]),e._v(" "),t("p",[e._v('!!! success "Tessera should run in independent network segment in production"')]),e._v(" "),t("p",[e._v('!!! success "Tessera must leverage certificate based mutual authentication with its dependencies"')]),e._v(" "),t("p",[e._v('!!! success "Secret storage services must support key rotation."')]),e._v(" "),t("p",[e._v('!!! success "Depending on the deployment model Encryption Keys must be backed-up in offline secured locations."')]),e._v(" "),t("p",[e._v('!!! success "Secret storage service  must be in complete isolation of external network."')]),e._v(" "),t("p",[e._v('!!! success "Tessera connection strings must not be stored in clear text in configuration files. "')]),e._v(" "),t("p",[e._v('!!! success "Secret storage in cloud deployment should run under a single tenancy model."')]),e._v(" "),t("p",[e._v('!!! success "Host firewall should be enabled, inbound and outbound traffic should be limited to only vault services and restricted to consumers of those services. This includes essential host services like DNS, and NTP."')]),e._v(" "),t("p",[e._v('!!! success "Restrict remote access to Secret Storage instance to whitelisted IP addresses and enable MFA."')]),e._v(" "),t("p",[e._v('!!! success "Disable remote root access to Tessera/Secret storage hosts."')]),e._v(" "),t("p",[e._v('!!! success "Enable remote centralized logging for tessera and its dependencies."')]),e._v(" "),t("p",[e._v('!!! success "Disable core dumps in tessera host."')]),e._v(" "),t("p",[e._v('!!! success "Tessera upgrades should be using immutable strategy and frequent."')])])}),[],!1,null,null,null);s.default=a.exports}}]);