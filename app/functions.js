if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      // Track invocations
      var count = 0;

      // Invoke the first pass manually and return reference for next call
      return (function inception () {
        if (count) {
          return str + ", " + arguments[0];
        } else {
          str = arguments[0];
          count++;
        }
        return inception;
      })(str);
    },

    makeClosures : function(arr, fn) {
      // Need to return a function bound to each item in the array
      var fns = [];
      arr.forEach(function (item) {
        fns.push(function () {
          return fn(item);
        })
      });
      return fns;
    },

    partial : function(fn, str1, str2) {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 1);

      // Return closure-bound function with ref to partial args
      return function () {
        return fn.apply(null, args.concat(slice.call(arguments)));
      };
    },

    useArguments : function() {
      var result = 0,
          i = arguments.length;
      while (i--) {
        result = result + arguments[i];
      }
      return result;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    curryIt : function(fn) {
      // Return a function that partials the initial set of arguments from a function
      var slice = Array.prototype.slice,
          args = slice.call(arguments, 1);

      return function curry () {
        args = args.concat(slice.call(arguments));
        return args.length === fn.length
          ? fn.apply(null, args)
          : curry;
      };
    }
  };
});
