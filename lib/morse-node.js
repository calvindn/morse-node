// . = 1 unit
// _ = 3 units
// space between parts of the same letter is one unit.
// space between letters is three units.
// space between words is seven units.

function MorseNode(){
    return this;
};

var ITU = {
    // letters
    "a" :  ".-",
    "b" :  "-...",
    "c" :  "-.-.",
    "d" :  "-..",
    "e" :  ".",
    "f" :  "..-.",
    "g" :  "--.",
    "h" :  "....",
    "i" :  "..",
    "j" :  ".---",
    "k" :  "-.-",
    "l" :  ".-..",
    "m" :  "--",
    "n" :  "-.",
    "o" :  "---",
    "p" :  ".--.",
    "q" :  "--.-",
    "r" :  ".-.",
    "s" :  "...",
    "t" :  "-",
    "u" :  "..-",
    "v" :  "...-",
    "w" :  ".--",
    "x" :  "-..-",
    "y" :  "-.--",
    "z" :  "--..",
    // numbers
    "1" :  ".----",
    "2" :  "..---",
    "3" :  "...--",
    "4" :  "....-",
    "5" :  ".....",
    "6" :  "-....",
    "7" :  "--...",
    "8" :  "---..",
    "9" :  "----.",
    "0" :  "-----",
    // punctuation
    "." :  ".-.-.-",
    "," :  "--..--",
    "?" :  "..--..",
    "\'": ".----.",
    "!" :  "-.-.--",
    "/" :  "-..-.",
    "(" :  "-.--.",
    ")" :  "-.--.-",
    "&" :  ".-...",
    ":" :  "---...",
    ";" :  "-.-.-.",
    "=" :  "-...-",
    "+" :  ".-.-.",
    "-" :  "-....-",
    "_" :  "..--.-",
    "\"": ".-..-.",
    "$" :  "...-..-",
    "@" :  ".--.-.",
    " " :  " "
};

var chars = {
    // letters
    ".-"  : "a",
    "-...": "b",
    "-.-.": "c",
    "-.." : "d",
    "."   : "e",
    "..-.": "f",
    "--." : "g",
    "....": "h",
    ".."  : "i",
    ".---": "j",
    "-.-" : "k",
    ".-..": "l",
    "--"  : "m",
    "-."  : "n",
    "---" : "o",
    ".--.": "p",
    "--.-": "q",
    ".-." : "r",
    "..." : "s",
    "-"   : "t",
    "..-" : "u",
    "...-": "v",
    ".--" : "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    // numbers
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    // punctuation
    ".-.-.-" : ".",
    "--..--" : ",",
    "..--.." : "?",
    ".----." : "\'",
    "-.-.--" : "!",
    "-..-."  : "/",
    "-.--."  : "(",
    "-.--.-" : ")",
    ".-..."  : "&",
    "---..." : ":",
    "-.-.-." : ";",
    "-...-"  : "=",
    ".-.-."  : "+",
    "-....-" : "-",
    "..--.-" : "_",
    ".-..-." : "\"",
    "...-..-": "$",
    ".--.-." : "@",
    " "      : "       "
};

MorseNode.prototype = {
    version: "0.0.1",

    encode: function(string) {
        var encoding = "";
        var lower = string.toLowerCase();
        if (!this.isValid(string)) {
            // return error
        }
        for (var i=0; i<lower.length; i++) {
            encoding += ITU[lower.charAt(i)];
            encoding += " ";
        }
        //console.log(encoding);
        return encoding;
    },

    decode: function(string) {
        var decoding = "";
        var array = string.split(" ");
        // each word
        for (var i=0; i<array.length; i++) {

            // each character
            //for (var j=0; j<array[i].length; j++) {
                decoding += chars[array[i]];
            //}
        }

        return decoding;
    },

    isValid: function(string, set) {
        var lower = string.toLowerCase();
        for (var i=0; i<lower.length; i++) {
            if (!ITU.hasOwnProperty(lower.charAt(i))) {
                console.log(lower.charAt(i));
                return false;
            }
        }
        return true;
    }

};

exports.create = function(version) {
    version = typeof version !== 'undefined' ? version : 'ITU';

    return new MorseNode();
};