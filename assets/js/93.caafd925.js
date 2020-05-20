(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{224:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"migration-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-utilities","aria-hidden":"true"}},[e._v("↳")]),e._v(" Migration Utilities")]),e._v(" "),a("p",[e._v("Two utilities are included to help with migrating existing Constellation configurations and datastores for use with Tessera.  These utilites are included in the Tessera project and are available for use after building Tessera with Maven.")]),e._v(" "),a("p",[e._v("A full migration workflow would be as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Shut down the Constellation/Smilo nodes")]),e._v(" "),a("li",[e._v("Perform "),a("a",{attrs:{href:"#data-migration"}},[e._v("database migration")])]),e._v(" "),a("li",[e._v("Perform "),a("a",{attrs:{href:"#configuration-migration"}},[e._v("configuration migration")])]),e._v(" "),a("li",[e._v("Start Tessera/Smilo nodes")])]),e._v(" "),a("h2",{attrs:{id:"data-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-migration","aria-hidden":"true"}},[e._v("↳")]),e._v(" Data Migration")]),e._v(" "),a("p",[e._v("This utility migrates a Constellation datastore (BerkeleyDB or directory/file storage) to a Tessera compatible one (H2, SQLITE).  By default Tessera uses an H2 database, however alternatives can be configured.  Refer "),a("a",{attrs:{href:"https://github.com/smilofoundation/tessera/tree/master/ddls/create-table",target:"_blank",rel:"noopener noreferrer"}},[e._v("DDLs"),a("OutboundLink")],1),e._v(" for help with defining with other databases.")]),e._v(" "),a("p",[e._v("To make running the utility commands simpler, you can first create an "),a("code",[e._v("alias")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('alias tessera-data-migration="java -jar /path/to/tessera/data-migration/target/data-migration-${version}-cli.jar"\n')])])]),a("p",[e._v("CLI help can be accessed by running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tessera-data-migration help\n\nusage: tessera-data-migration\n-exporttype <TYPE>   Export DB type i.e. h2, sqlite\n-inputpath <PATH>    Path to input file or directory\n-outputfile <PATH>   Path to output file\n-storetype <TYPE>    Store type i.e. bdb, dir\n-dbuser              Set a username on the migrated database (only applies to H2)\n-dbpass              Set a password for the specified user (only applies to H2)\n")])])]),a("h4",{attrs:{id:"migrating-berkeleydb-bdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-berkeleydb-bdb","aria-hidden":"true"}},[e._v("↳")]),e._v(" Migrating BerkeleyDB (bdb)")]),e._v(" "),a("p",[e._v("To migrate a BerkeleyDB (bdb) database for use with Tessera you must first export your existing store using "),a("code",[e._v("db_dump")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("db_dump -f exported.txt c1/cn§.db/payload.db\n")])])]),a("p",[e._v("Then run the following command to perform the migration:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tessera-data-migration -storetype bdb -inputpath exported.txt -dbuser <username> -dbpass <password> -outputfile <PATH> -exporttype <TYPE>\n")])])]),a("h4",{attrs:{id:"migrating-directory-file-dir-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-directory-file-dir-storage","aria-hidden":"true"}},[e._v("↳")]),e._v(" Migrating Directory/File (dir) storage")]),e._v(" "),a("p",[e._v("For dir storage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tessera-data-migration -storetype dir -inputpath /path/to/dir -dbuser <username> -dbpass <password> -outputfile <PATH> -exporttype <TYPE>\n")])])]),a("h3",{attrs:{id:"output-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-types","aria-hidden":"true"}},[e._v("↳")]),e._v(" Output types")]),e._v(" "),a("p",[e._v("To use H2 as the output storage, specify:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-exporttype h2 -outputfile /path/to/h2database\n")])])]),a("p",[e._v("To use SQLite as the output storage, specify:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-exporttype sqlite -outputfile /path/to/sqlitedb\n")])])]),a("h4",{attrs:{id:"database-usernames-and-passwords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-usernames-and-passwords","aria-hidden":"true"}},[e._v("↳")]),e._v(" Database usernames and passwords")]),e._v(" "),a("p",[e._v("If you want to set a username and password on the migrated database, you must specify this using the following options:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-dbuser <username> -dbpass <password>\n")])])]),a("p",[e._v("If you do not wish to set a username and password on the migrated database, you must explicitly say so by specifying the arguments without parameters, i.e.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-dbuser -dbpass\n")])])]),a("p",[e._v("Note also that even though SQLite does not have the concept of usernames and passwords, you must still specify at least the empty configuration.")]),e._v(" "),a("h4",{attrs:{id:"after-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-migration","aria-hidden":"true"}},[e._v("↳")]),e._v(" After migration")]),e._v(" "),a("p",[e._v("The output file should then be placed in a location of your choosing that corresponds to the location specified in the configuration file (without any file extension), i.e.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"jdbc": {\n    "url": "jdbc:h2:./c1/migratedfile;MODE=Oracle;TRACE_LEVEL_SYSTEM_OUT=0"\n}\n')])])]),a("p",[e._v("Note: the migrated database is migrated without user credentials, so if using the file directly then the username and password should not be specified in the configuration.")]),e._v(" "),a("p",[e._v("The Constellation files are no longer used, and can be cleaned up or left alone.")]),e._v(" "),a("h2",{attrs:{id:"configuration-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-migration","aria-hidden":"true"}},[e._v("↳")]),e._v(" Configuration Migration")]),e._v(" "),a("p",[e._v("This utility will generate a Tessera compatible "),a("code",[e._v(".json")]),e._v(" format configuration file from an existing Constellation "),a("code",[e._v(".toml")]),e._v(" configuration file.  The "),a("code",[e._v(".json")]),e._v(" file will be saved locally to be used when running Tessera.  Individual configuration parameters can be overridden during the migration process if required.")]),e._v(" "),a("p",[e._v("To make running the utility commands simpler, you can first create an "),a("code",[e._v("alias")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('alias tessera-config-migration="java -jar /path/to/tessera/config-migration/target/config-migration-${version}-cli.jar"\n')])])]),a("p",[e._v("Most of the Constellation configuration command line parameters are supported.  For details of the Constellation configuration see the "),a("a",{attrs:{href:"../../Constellation/Constellation"}},[e._v("Constellation documentation")]),e._v(".")]),e._v(" "),a("p",[e._v("To see the CLI help which provides details on overriding specific configuration items from a "),a("code",[e._v(".toml")]),e._v(" file, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tessera-config-migration help\n")])])]),a("p",[e._v("To migrate a "),a("code",[e._v(".toml")]),e._v(" file to "),a("code",[e._v(".json")]),e._v(" with no overrides, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('tessera-config-migration --tomlfile="/path/to/constellation-config.toml"\n')])])]),a("p",[e._v("By default, the generated "),a("code",[e._v(".json")]),e._v(" config will be printed to the console and saved to "),a("code",[e._v("./tessera-config.json")]),e._v(".  To save to another location/with a different filename use the "),a("code",[e._v("--outputfile <PATH>")]),e._v(" CLI option.")]),e._v(" "),a("h4",{attrs:{id:"note-about-ipwhitelist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-about-ipwhitelist","aria-hidden":"true"}},[e._v("↳")]),e._v(" Note about "),a("code",[e._v("ipwhitelist")])]),e._v(" "),a("p",[e._v("Unlike Constellation, Tessera does not use a separate "),a("code",[e._v("ipwhitelist")]),e._v(".  If "),a("code",[e._v("useWhiteList")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(" in the "),a("code",[e._v(".json")]),e._v(" config then the "),a("code",[e._v("peers")]),e._v(" list will be used as the whitelist.")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("ipwhitelist")]),e._v(" is provided in an existing "),a("code",[e._v(".toml")]),e._v(" config file then this will only be used to set "),a("code",[e._v("useWhiteList: true")]),e._v("; any nodes included in this list will not be added by default to the Tessera config.  Make sure to add any nodes that were only included in "),a("code",[e._v("ipwhitelist")]),e._v(" to "),a("code",[e._v("peers")]),e._v(" after using the utility.")]),e._v(" "),a("h4",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation","aria-hidden":"true"}},[e._v("↳")]),e._v(" Validation")]),e._v(" "),a("p",[e._v("Validation is applied to the generated config. Messages will be printed to the terminal if the validation identifies issues.  For example, if a "),a("code",[e._v("hostname")]),e._v(" is not provided then the following message will be printed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Warning: may not be null on property serverConfig.hostName\n")])])]),a("p",[e._v("Any validation violations will have to be addressed before the config can be used with Tessera.")])])}),[],!1,null,null,null);t.default=i.exports}}]);