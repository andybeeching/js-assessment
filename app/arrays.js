if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var count = 0,
          result = false;

      // Iterate through and increment counter and whether item is found
      // Note: more efficient than iterator as prevent redundant invocations
      for (var i = 0, len = arr.length; i < len; i++) {
        if ( arr[i] !== item ) {
          count++;
        } else {
          result = true;
          break;
        }
      }
      return result ? count : -1 ;
    },

    sum : function(arr) {
      var result = 0;
      // Use iterator this time
      arr.forEach(function (item) {
        result += item;
      });
      return result;
    },

    remove : function(arr, item) {
      // Use another iterator to get them all...
      arr.forEach(function (num, i, ar) {
        if (num === item) {
          ar.splice(i, 1)
        }
      })
      return arr;
    },

    append : function(arr, item) {
      // I like mutator methods
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var result = 0;
      arr.forEach(function (num, i, ar) {
        if (num == item) { result++; }
      });
      return result;
    },

    duplicates : function(arr) {
      var result = [],
          dupes  = [];;
      arr.forEach(function (num, i, ar) {
        ( result.indexOf(num) != -1 ? dupes : result ).push(num);
      });
      return dupes;
    },

    square : function(arr) {
      arr.forEach(function (num, i , ar) {
        ar[i] = num * num;
      });
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      arr.forEach(function (item, i, ar) {
        if (item === target) { result.push(i); }
      });
      return result;
    }
  };
});
