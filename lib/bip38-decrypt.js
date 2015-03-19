var CoinKey = require('coinkey');
var Bip38 = require('bip38');
var bip38 = new Bip38;
var cs = require('coinstring');
var hash = require('crypto-hashing');

module.exports = function (encryptedPrivKey, password, cb) {
  
  try {
    var decrypedPrivKey = bip38.decrypt(encryptedPrivKey,password);
    var decryptedAddress = new CoinKey.fromWif(decrypedPrivKey).publicAddress;
    var checksum = hash.sha256(hash.sha256(decryptedAddress));
    var hex = cs.decode(encryptedPrivKey);
  }
  catch(err) {
    return cb(err);
  }
  
  if (
      checksum[0] === hex[3] && 
      checksum[1] === hex[4] && 
      checksum[2] === hex[5] && 
      checksum[3] === hex[6]
     ) {
    return cb(null,decrypedPrivKey);
  }
  return cb(new Error("Wrong Password"));
}
      