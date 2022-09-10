var CryptoJS = require("crypto-js");
var Base64 = require("js-base64");

let password = "lazydog";
let salt = "salt";
let iterations = 128;
let bytes = CryptoJS.PBKDF2(password, salt, {
  keySize: 48,
  iterations: iterations,
});
let iv = CryptoJS.enc.Hex.parse(bytes.toString().slice(0, 32));
let key = CryptoJS.enc.Hex.parse(bytes.toString().slice(32, 96));

let ciphertext = CryptoJS.AES.encrypt("Aditya", key, { iv: iv });
console.log(ciphertext.toString());
