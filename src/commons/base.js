const encrypt = function(plaintext) {
  return window.btoa(plaintext)
}

const decrypt = function(ciphertext) {
  return window.atob(ciphertext)
}

export { encrypt, decrypt }
