var assert = require('assert')
var bip38Decrypt = require(__dirname + '/../lib/bip38-decrypt.js')

var encryptedPrivKey = '6PYUpKnHqAAzWSbjJCPwgB5wWnyYipmhqMysLDstE7H2gn9Pp8vtZrvNeS'
var password = 'mozqswji00'
var wrongPassword = '1234'

describe('Torrent Creation', function () {
  this.timeout(0)

  it('should return a Decrypted Private Key', function (done) {
    bip38Decrypt(encryptedPrivKey, password, function (err, decryptedPrivateWif) {
      console.log(decryptedPrivateWif)
      assert(!err, err)
      assert(decryptedPrivateWif === 'KwgWqrB6URob8jdFtaWYowH1gXtrxM5mnaEkr6WCDU2aJ1FUUvzC', 'Dosen\'t Works when password is right')
      done()
    })
  })

  it('should return a Wrong Password err', function (done) {
    bip38Decrypt(encryptedPrivKey, wrongPassword, function (err, decryptedPrivateWif) {
      console.log(err.message)
      assert(err, err)
      assert(err.message === 'Wrong Password', 'Dosen\'t Works when password is wrong')
      done()
    })
  })

  it('should return an Invalid checksum err', function (done) {
    encryptedPrivKey = '6PYUpKnyYipmhqMysLDstE7H2gn9Pp8vtZrvNeS'
    bip38Decrypt(encryptedPrivKey, password, function (err, decryptedPrivateWif) {
      console.log(err.message)
      assert(err, err)
      assert(err.message === 'Invalid checksum', 'Should have failed since key is broken')
      done()
    })
  })

  it('should return an Invalid checksum err', function (done) {
    bip38Decrypt(encryptedPrivKey, wrongPassword, function (err, decryptedPrivateWif) {
      console.log(err.message)
      assert(err, err)
      assert(err.message === 'Invalid checksum', 'Should have failed since key is broken')
      done()
    })
  })

  it('should return an Invalid checksum err', function (done) {
    encryptedPrivKey = '6HYUpKnHqAAzWSbjJCPwgB5wWnyYipmhqMysLDstE7H2gn9Pp8vtZrvNeS'
    bip38Decrypt(encryptedPrivKey, password, function (err, decryptedPrivateWif) {
      console.log(err.message)
      assert(err, err)
      assert(err.message === 'Invalid checksum', 'Should have failed since key is broken')
      done()
    })
  })

  it('should return an Invalid checksum err', function (done) {
    bip38Decrypt(encryptedPrivKey, wrongPassword, function (err, decryptedPrivateWif) {
      console.log(err.message)
      assert(err, err)
      assert(err.message === 'Invalid checksum', 'Should have failed since key is broken')
      done()
    })
  })

})
