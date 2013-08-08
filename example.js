var morse = require('morse-node').create();

var encoded = morse.encode('Pack my box with five dozen liquor jugs!');
console.log(encoded);

var decoded = morse.decode(encoded);
console.log(decoded);

console.log(morse.isValid(encoded, "morse"));
console.log(morse.isValid(encoded += "asdf", "morse"));
console.log(morse.isValid(decoded, "chars"));
console.log(morse.isValid(decoded += "~", "chars"));