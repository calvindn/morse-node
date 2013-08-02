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
    " " :  "/"
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
    " "      : "",
    "/"      : " "
};

MorseNode.prototype = {
    version: "0.0.1",

    encode: function(str) {
        var encoding = "";

        for (var i=0; i<str.length; i++) {
            encoding += ITU[str.charAt(i).toLowerCase()];
            encoding += " ";
        }
        return encoding;
    },

    decode: function(str) {
        var decoding = "";
        var words = str.split("/");

        // each word
        for (var i=0; i<words.length; i++) {
            // each character
            var character = words[i].split(" ");
            for (var j=0; j<character.length; j++) {
                if (chars[character[j]])
                    decoding += chars[character[j]];
            }
            decoding += " ";
        }
        return decoding;
    },

    isValid: function(str, type) { // type = chars, morse

    }

};

exports.create = function(version) {
    version = typeof version !== 'undefined' ? version : 'ITU';
    if (version != "ITU") // currently no other morse code versions available
        return null;
    return new MorseNode();
};