var assert = require('assert')

var bip38Decrypt = require(__dirname +  "/../lib/bip38-decrypt.js")

var encryptedPrivKey = '6PYUpKnHqAAzWSbjJCPwgB5wWnyYipmhqMysLDstE7H2gn9Pp8vtZrvNeS'
var password = 'mozqswji00'
var wrongPassword = '1234'

bip38Decrypt(encryptedPrivKey,password, function(err,decryptedPrivateWif) {
  console.log(decryptedPrivateWif)
  assert(decryptedPrivateWif === 'KwgWqrB6URob8jdFtaWYowH1gXtrxM5mnaEkr6WCDU2aJ1FUUvzC', 'Dosen\'t Works when password is right')
});
bip38Decrypt(encryptedPrivKey,wrongPassword, function(err,decryptedPrivateWif) {
  console.log(err.message)
  assert(err.message === "Wrong Password", 'Dosen\'t Works when password is wrong')
});
