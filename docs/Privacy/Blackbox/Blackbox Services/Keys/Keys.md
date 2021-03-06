## Generating keys

### File-stored keys
Generate a key pair and save in new files `new.pub` and `new.key` (will start an interactive prompt to provide passwords):   
```
Blackbox -keygen -filename new
```
Multiple key pairs can be generated at the same time by providing a comma-separated list of values:
```
Blackbox -keygen -filename /path/to/key1,/path/to/key2
```

To generate an unlocked key, the following can be used to tell Blackbox to not expect any input:

```bash tab="v0.8.x onwards"
Blackbox -keygen < /dev/null
```

```bash tab="v0.7.x and earlier"
printf "\n\n" | Blackbox -keygen
```

### Azure Key Vault-stored keys
Generate a key pair as secrets with IDs `Pub` and `Key` and save to an Azure Key Vault with DNS name `<url>`:
```
Blackbox -keygen -keygenvaulttype AZURE -keygenvaulturl <url>
```

The `-filename` option can be used to specify alternate IDs.  Multiple key pairs can be generated at the same time by providing a comma-separated list of values:
```
Blackbox -keygen -keygenvaulttype AZURE -keygenvaulturl <url> -filename id1,id2
```

!!! warning
    If saving new keys with the same ID as keys that already exist in the vault, the existing keys will be replaced by the newer version.  When doing this, make sure to [specify the correct secret version in your Blackbox configuration](../../../Configuration/Keys/#azure-key-vault-key-pairs) 

!!! note
    Environment variables must be set if using an Azure Key Vault, for more information see [Setting up an Azure key vault](../Setting%20up%20an%20Azure%20Key%20Vault)

### Hashicorp Vault-stored keys
Generate a key pair and save to a Hashicorp Vault at the secret path `secretEngine/secretName` with IDs `publicKey` and `privateKey`:
```bash
Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename secretName 
```
Options exist for configuring TLS and AppRole authentication (by default the AppRole path is set to `approle`):
```bash
Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine <secretEngineName> -filename <secretName> \
   -keygenvaultkeystore <JKS file> -keygenvaulttruststore <JKS file> \
   -keygenvaultapprole <authpath>
```
The `-filename` option can be used to generate and store multiple key pairs at the same time:
```bash
Blackbox -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename myNode/keypairA,myNode/keypairB 
```

!!! warning 
    Saving a new key pair to an existing secret will overwrite the values stored at that secret.  Previous versions of secrets may be retained and be retrievable by Blackbox depending on how the K/V secrets engine is configured.  When doing this, make sure to [specify the correct secret version in your Blackbox configuration](../../../Configuration/Keys/#hashicorp-vault-key-pairs)

!!! note
    Environment variables must be set if using a Hashicorp Vault, and a version 2 K/V secret engine must be enabled.  For more information see [Setting up a Hashicorp Vault](../Setting%20up%20a%20Hashicorp%20Vault)
    
    
### AWS Secrets Manager-stored keys
Generate a key pair and save to an AWS Secrets Manager, with endpoint `<url>`, as secrets with IDs `Pub` and `Key`:

```bash
Blackbox -keygen -keygenvaulttype AWS -keygenvaulturl <url>
```

The `-filename` option can be used to specify alternate IDs.  Multiple key pairs can be generated at the same time by providing a comma-separated list of values:

```bash
Blackbox -keygen -keygenvaulttype AWS -keygenvaulturl <url> -filename id1,id2
```

!!! note
    Environment variables must be set if using an AWS Secrets Manager, for more information see [Setting up an AWS Secrets Manager](../Setting%20up%20an%20AWS%20Secrets%20Manager)

### Updating a configfile with newly generated keys 
Any newly generated keys must be added to a Blackbox `.json` configfile.  Often it is easiest to do this manually.  

However, the `Blackbox keygen` `-configfile` option can be used to automatically update a configfile after key generation.  This is particularly useful when scripting.

```
Blackbox -keygen -filename key1 -configfile /path/to/config.json --configout /path/to/new.json --pwdout /path/to/new.pwds
```

The above command will prompt for a password and generate the `key1` pair as usual.  The Blackbox configuration from `/path/to/config.json` will be read, updated and saved to `/path/to/new.json`.  New passwords will be appended to the existing password file as defined in `/path/to/config.json` and written to `/path/to/new.pwds`.

If the `--configout` and `--pwdout` options are not provided, the updated `.json` config will be printed to the terminal.

!!! note "Note: Differences between v0.10.3 and earlier versions"
    Before Blackbox version 0.10.3 the node would start after updating the configfile.  
    
    In v0.10.3, this behaviour was removed to ensure clearer distinction of responsibilities between each Blackbox command.  The same behaviour can be achieved in v0.10.3 onwards by running:
     ```
     Blackbox keygen ... -output /path/to/new.json
     Blackbox -configfile /path/to/new.json
     ```  

## Securing private keys
Generated private keys can be encrypted with a password.  This is prompted for on the console during key generation.  After generating password-protected keys, the password must be added to your configuration to ensure Blackbox can read the keys.  The password is not saved anywhere but must be added to the configuration else the key will not be able to be decrypted.  

Passwords can be added to the json config either inline using `"passwords":[]`, or stored in an external file that is referenced by `"passwordFile": "Path"`.  Note that the number of arguments/file-lines provided must equal the total number of private keys.  For example, if there are 3 total keys and the second is not password secured, the 2nd argument/line must be blank or contain dummy data.

Blackbox uses Argon2 in the process of encrypting private keys.  By default, Argon2 is configured as follows:
```
{
    "variant": "id",
    "memory": 1048576,
    "iterations": 10,
    "parallelism": 4
}
```
The Argon2 configuration can be altered by using the `-keygenconfig` option.  Any override file must have the same format as the default configuration above and all options must be provided.
```
Blackbox -keygen -filename /path/to/key1 -keygenconfig /path/to/argonoptions.json
```

For more information on Argon2 see the [Argon2 Github page](https://github.com/P-H-C/phc-winner-argon2).

### Updating password protected private keys
The password of a private key stored in a file can be updated.  Password update uses the `--keys.keyData.privateKeyPath` CLI option to get the path to the file. 

Password update can be used in multiple ways.  Running any of these commands will start a CLI prompt to allow you to set a new password.

1. Add a password to an unlocked key
    ```
    Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key
    ```
    
1. Change the password of a locked key.  This requires providing the current password for the key (either inline or as a file)
    ```
    Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwords <password>
    ```
    or
    ```
    Blackbox -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwordFile /path/to/pwds
    ```

1. Use different Argon2 options from the defaults when updating the password
    ```
    Blackbox --keys.keyData.privateKeyPath <path to keyfile> --keys.keyData.config.data.aopts.algorithm <algorithm> --keys.keyData.config.data.aopts.iterations <iterations> --keys.keyData.config.data.aopts.memory <memory> --keys.keyData.config.data.aopts.parallelism <parallelism>
    ```
    All options have been overriden here but only the options you wish to alter from their defaults need to be provided.

### Password-protection algorithm
The following steps detail the process of password-protecting a private key:

 1. Given private key `K` and password `P` 
 2. Generate random Argon2i nonce
 3. Generate random encryption nonce
 4. Stretch `P` using Argon2i (with the Argon2i nonce and custom or default [ArgonOptions](#securing-private-keys)) into a 32-byte master key (`MK`)
 5. Symmetrically encrypt `K` with `MK` and the encryption nonce

## Using alternative curve key types
By default the `-keygen` and `-updatepassword` commands generate and update [NaCl](https://nacl.cr.yp.to/) compatible keys.  

As of Blackbox v0.10.2, the `--encryptor.type=EC` CLI option can be provided to generate/update keys of different types.  See [encryptor config](../../../Configuration/Configuration Overview/#encryptor-supporting-alternative-curves-in-Blackbox) for more details.

## Rotation
Blackbox is built to support rotation trivially, by allowing counterparties to advertise multiple keys at once. The tooling to make rotation seamless and automatic is on our Roadmap.
