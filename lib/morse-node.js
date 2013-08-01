// . = 1 unit
// _ = 3 units
// space between parts of the same letter is one unit.
// space between letters is three units.
// space between words is seven units.

function MorseNode(){
    return this;
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
            encoding += this.ITU[lower.charAt(i)];
        }
        console.log(encoding);
    },

    decode: function() {

    },

    isValid: function(string) {
        var lower = string.toLowerCase();
        for (var i=0; i<lower.length; i++) {
            if (!this.ITU.hasOwnProperty(lower.charAt(i))) {
                console.log(lower.charAt(i));
                return false;
            }
        }
        return true;
    },

    ITU: {
        // letters
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        // numbers
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",
        // punctuation
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "\'": ".----.",
        "!": "-.-.--",
        "/": "-..-.",
        "(": "-.--.",
        ")": "-.--.-",
        "&": ".-...",
        ":": "---...",
        ";": "-.-.-.",
        "=": "-...-",
        "+": ".-.-.",
        "-": "-....-",
        "_": "..--.-",
        "\"": ".-..-.",
        "$": "...-..-",
        "@": ".--.-.",
        " ": "   "
    }
};


exports.create = function(version) {
    version = typeof version !== 'undefined' ? version : 'ITU';

    return new MorseNode();
};