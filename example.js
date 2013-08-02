var morse = require('./morse-node').create();

var msg = morse.encode('Pack my box with five dozen liquor jugs!');
console.log(msg);
console.log(morse.decode(msg));
