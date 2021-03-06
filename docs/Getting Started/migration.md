    # Upgrade to Smilo 2.6.0

Smilo 2.6.0 upgrades the base `geth` version from 1.8.18 to 1.9.7 
See [ethereum 1.9.0](https://blog.ethereum.org/2019/07/10/geth-v1-9-0/) for the complete list if new features added as a part of `geth` 1.9.7. 

**Note**  `geth` 1.9.7 has several enhancements at the database layer which are part of Smilo 2.6.0. Hence, once migrates to 2.6.0, it cannot rollback to older version of Quourm. The recommendation is to keep the back of the data directory before upgrading to 2.6.0 which can be used to revert back to older version if necessary. 

A node running on Smilo 2.6.0 can coexist on a network where other nodes are running on lower version of Smilo and thus supports node by node upgrade to Smilo 2.6.0. The suggested upgrade process is as described below:
* Bring down the node which needs to be upgraded to Smilo 2.6.0. Modify the `genesis.json` file to include `istanbulBlock` and `petersburgBlock`. The values for this should be set to an appropriate value in future by when the entire network would have upgraded to Smilo 2.6.0. This is important as the gas calculation logic has changed in `geth` 1.9.7. Not setting this value properly can result in `Bad block error`
* Execute `geth --datadir path/to/datadir init genesis.json` with the modified `genesis.json`
* Bring up the node in Smilo 2.6.0

### !!! Note
* freezerdb - `geth` 1.9.7 brings in the feature of freezer db where in block data beyond certain threshold is moved to a different file based storage area. The location for freezerdb can be provided by geth command lines arguments as shown below:
```
--datadir.ancient value             Data directory for ancient chain segments (default = inside chaindata)
```

* When a node is migrated to this version, `geth` by default will create the `ancient` data folder and start moving blocks below the immutability threshold (default: 3162240) into the ancient data. If you do not want this movement to happen, use `--immutabilitythreshold` to set the immutability threshold to an appropriate value while bringing up `geth`

* `geth 1.9.7` by default does not allow keystore based accounts to be unlocked in the start up process. `geth` will crash if the unlock is attempted as a part of start up. To enable account unlocking explicitly use `--allow-insecure-unlock`
```
--allow-insecure-unlock             Allow insecure account unlocking when account-related RPCs are exposed by http
```
