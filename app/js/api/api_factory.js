(function() {
  'use strict';


  module.exports = angular
    .module('api.services')
    .factory('apiFactory', apiFactory);

  apiFactory.$inject = ['$q', '$http'];

  function apiFactory ($q, $http) {

    var service = {
      get: get
    };

    return service;

    function get (apiPath) {
      return $http.get(apiPath);
    }

  }

})();
