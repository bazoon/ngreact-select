(function() {
  'use strict';


  module.exports = angular
    .module('authors')
    .factory('authorsStore', authorsStore);

  authorsStore.$inject = ['$q', 'authorsApiFactory', '$cacheFactory'];


  function authorsStore ($q, authorsApiFactory, $cacheFactory) {

    var cache = $cacheFactory('cache');

    var service = {
      getAuthors: getAuthors,
      getPopularAuthors: getPopularAuthors
    };

    return service;

    // //////////

    function getAuthors () {
      var authors = cache.get('authors');

      if (authors) {
        return $q.when(authors);
      } else {
        return authorsApiFactory.getAuthors().then(getAuthorsSuccess);
      }

      function getAuthorsSuccess (response) {
        cache.put('authors', response.data);
        return response.data;
      }

    }

    function getPopularAuthors () {
      var popularAuthors = cache.get('popular_authors');

      if (popularAuthors) {
        return $q.when(popularAuthors);
      } else {
        return authorsApiFactory.getPopularAuthors().then(getPopularAuthorsSuccess);
      }

      function getPopularAuthorsSuccess (response) {
        cache.put('popular_authors', response.data);
        return response.data;
      }

    }

  }

}
)();
