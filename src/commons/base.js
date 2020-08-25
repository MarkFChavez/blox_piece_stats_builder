import CryptoJS from 'crypto-js'

const key = process.env.REACT_APP_ENCRYPTION_KEY

const encrypt = function(plaintext) {
  let ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString()
  return ciphertext
}

const decrypt = function(ciphertext) {
  let bytes = CryptoJS.AES.decrypt(ciphertext, key)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export { encrypt, decrypt }
