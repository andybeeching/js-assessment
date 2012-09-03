if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
      // The one matches whatever was captured by the letter char class 1 or more times
      return /([a-zA-Z])(\1+)/.test(str);
    },

    endsWithVowel : function(str) {
      // The dollar sign anchors the regexp to the end of the string
      return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
      // The RegExp#exec method returns a capture rather than a boolean
      var result = /\d{3}/.exec(str);
      return result ? result[0] : false
    },

    matchesPattern : function(str) {
      // The caret and dollar ensure the string is the right length
      return /^(\d{3})+-(\d{3})+-(\d{4})$/.test(str);
    },
    isUSD : function(str) {
      // Escaped dollar matches dollar sign, the *| repeats the match on three
      // numbers 0 or more times before the decimal point, the line should finish
      // there (after whitespace also)
      return /^\$(\d{1,3}(\,\d{3})*|)(\.\d{2})?$/.test(str);
    }
  };
});
