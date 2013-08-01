var morse = require('./lib/morse-node').create();

var msg = morse.encode('The quick brown fox jumped over the lazy dog.');
console.log(msg);
console.log(morse.decode(msg));
