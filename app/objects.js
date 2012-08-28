if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      // apply the desired context
      return fn.apply(obj, arguments);
    },

    alterObjects : function(constructor, greeting) {
      // mutate shared prototype
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      // shield inherited properties from iteration
      var result = [], key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          result.push(key + ": " + obj[key]);
        }
      }
      return result;
    }
  };
});
