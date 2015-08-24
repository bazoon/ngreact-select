(function() {
  'use strict';


  module.exports = angular
    .module('books')
    .factory('booksStore', booksStore);

  booksStore.$inject = ['$q', 'booksApiFactory', '$cacheFactory'];


  function booksStore ($q, booksApiFactory, $cacheFactory) {

    var cache = $cacheFactory('mycache');

    var service = {
      getBooks: getBooks
    };

    return service;

    // ////////////

    function getBooks (authorId) {

      var books = cache.get('books' + authorId);
      if (books) {
        return $q.when(books);
      } else {
        return booksApiFactory.getBooks(authorId).then(getBooksSuccess);
      }

      function getBooksSuccess (response) {
        cache.put('books' + authorId, response.data);
        return response.data;
      }

    }




  }

}
)();
