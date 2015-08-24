(function() {
  'use strict';

  var config = require("./api_config");

  module.exports = {
    authorsPath: authorsPath,
    booksPath: booksPath,
    popularAuthorsPath: popularAuthorsPath
   };

   // /////////

  function authorsPath () {
    return apiPoint("authors");
  }

  function booksPath (authorId) {
    return apiPoint("books", authorId);
  }

  function popularAuthorsPath () {
    return apiPoint("authors", "popular");
  }

  function apiPoint () {
    var args = Array.prototype.slice.call(arguments);
    return config.apiServer + args.join("/");
  }


})();
