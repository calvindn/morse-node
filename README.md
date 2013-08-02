Morse Node
==========

A very tiny, dependency-free Morse code encoder and decoder.
Currently supports the [ITU standard](https://en.wikipedia.org/wiki/Morse_code#International_Morse_Code).

Install
-------

 - Not yet available.

 ```javascript
 npm install morse-node
 ```

Getting Started
---------------

### Setup API
 ```javascript
 var morse = require('./morse-node').create("ITU");
 ```

### Encoding

 - All alphanumeric characters are accepted, available punctuation includes everything inside the brackets [ **. , ? ' ! / ( ) & : ; = + - _ " $ @** ].

 ```javascript
var msg = morse.encode('The quick brown fox jumped over the lazy dog.');
 ```

### Decoding

 - Letters are seperated by a single space.
 - Words are seperated by a forward slash " **/** ".

 ```javascript
var msg = morse.decode("- .... ./--.- ..- .. -.-. -.-/-... .-. --- .-- -./..-. --- -..-/.--- ..- -- .--. . -../--- ...- . .-./- .... ./.-.. .- --.. -.--/-.. --- --. .-.-.-");
 ```

Example
-------

### Example.js

 ```javascript
var morse = require('./morse-node').create();

var msg = morse.encode('Pack my box with five dozen liquor jugs!');
console.log(msg);
console.log(morse.decode(msg));
 ```

### Output

 ```
.--. .- -.-. -.- / -- -.-- / -... --- -..- / .-- .. - .... / ..-. .. ...- . / -.. --- --.. . -. / .-.. .. --.- ..- --- .-. / .--- ..- --. ... -.-.--
pack my box with five dozen liquor jugs!
 ```

Author
------
[Calvin Nichols](https://github.com/calvindn)