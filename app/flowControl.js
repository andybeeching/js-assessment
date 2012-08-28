if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // early exclusion
      if (!num) { return false; }

      // Move along, nothing to see...
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible the 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided
      var result = "";

      if (!(num % 3)) { result += "fizz"; }

      if (!(num % 5)) { result += "buzz"; }

      return result || num;
    }
  };
});
