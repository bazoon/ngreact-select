(function() {
  'use strict';

  require("../api/api_factory");
  var routes = require("../api/api_routes_module");


  module.exports = angular
    .module('authors')
    .factory('authorsApiFactory', authorsApiFactory);

  authorsApiFactory.$inject = ['apiFactory'];


  function authorsApiFactory (apiFactory) {

    var service = {
      getAuthors: getAuthors,
      getPopularAuthors: getPopularAuthors
    };

    return service;

    // //////////

    function getAuthors () {
      return apiFactory.get(routes.authorsPath());
    }

    function getPopularAuthors () {
      return apiFactory.get(routes.popularAuthorsPath());
    }

  }

}
)();
