# bip38-decrypt
A small node module that accepts a Base58, Bip38 encrypted private key and a password and returns the decrypted results
after verifing that the decoded private key is the one we expected (which dosn't exist in the standart bitcoin libs in node).

```nodejs
var bip38Decrypt = require('bip38Decrypt');

bip38Decrypt(encryptedPrivKey,password, function(err,decryptedPrivateWif) {
  if (err)
    console.log(err.msg);
    return err;
  else {
    console.log(decryptedPrivateWif);
    return decryptedPrivateWif;
  }
});
```
