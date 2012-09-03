if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return {
        then: function (callback) {
          callback && callback(value);
        }
      }
    },

    manipulateRemoteData : function(url) {
      return {
        then: function (callback) {
          $.get(url, function (data) {
            var result = data.people.map(function (item) {
              return item["name"];
            });

            callback && callback(result.sort());
          });
        }
      };
    }
  };
});
