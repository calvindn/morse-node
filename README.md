Morse Node
==========

A very tiny, dependency-free Morse code encoder and decoder.
Currently supports the [ITU standard](https://en.wikipedia.org/wiki/Morse_code#International_Morse_Code).

Install
-------

```javascript
npm install morse-node
```

Getting Started
---------------

### Setup API
```javascript
 var morse = require('morse-node').create("ITU");
```

### Encoding

 - All alphanumeric characters are accepted, available symbols includes everything inside the brackets [ **. , ? ' ! / ( ) & : ; = + - _ " $ @** ].

```javascript
var msg = morse.encode('The quick brown fox jumped over the lazy dog.');
```

### Decoding

 - Letters are seperated by a single space.
 - Words are seperated by a forward slash " **/** ".

```javascript
var msg = morse.decode("- .... ./--.- ..- .. -.-. -.-/-... .-. --- .-- -./..-. --- -..-/.--- ..- -- .--. . -../--- ...- . .-./- .... ./.-.. .- --.. -.--/-.. --- --. .-.-.-");
```

### isValid

 - Check validity of a string by using the isValid function.
 - Encoding and decoding functions do not make this check and will attempt to translate your string regardless of undefined characters.

Example
-------

### example.js

```javascript
var morse = require('morse-node').create();

var encoded = morse.encode('Pack my box with five dozen liquor jugs!');
console.log(encoded);

var decoded = morse.decode(encoded);
console.log(decoded);

console.log(morse.isValid(encoded, "morse"));
console.log(morse.isValid(encoded += "asdf", "morse"));
console.log(morse.isValid(decoded, "chars"));
console.log(morse.isValid(decoded += "~", "chars"));
```

### Output

```
.--. .- -.-. -.- / -- -.-- / -... --- -..- / .-- .. - .... / ..-. .. ...- . / -.. --- --.. . -. / .-.. .. --.- ..- --- .-. / .--- ..- --. ... -.-.--
pack my box with five dozen liquor jugs!
true
false
true
false
```

Author
------
[Calvin Nichols](https://github.com/calvindn)