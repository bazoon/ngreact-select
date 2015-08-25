

angular.module('page', [])
	.controller('pageController', pageController);

pageController.$inject = ["$scope", 'selectedFactory', 'authorsStore', 'booksStore'];

function pageController ($scope, selectedFactory, authorsStore, booksStore) {
  var page = this;
  var bookCallback;
  page.hint = selectedFactory.hint;
  page.state = selectedFactory.getState();
  
  
  activate();
  
  

 ///////////

  function activate () {
    page.authorsProps = {};
    page.booksProps = {};

    page.authorsProps.authors = [];
    page.booksProps.books = [];
    page.authorsProps.onAuthorChange = onAuthorChange;
    page.booksProps.onBookChange = onBookChange;
    getAuthors();
  }

  function onAuthorChange (authorValue) {
    // console.log(authorValue);
    selectedFactory.changeAuthorById(authorValue);

    selectedFactory.getCurrentBooks().then(function (books) {
      var booksOptions = books.map(function (book) {
        return {
          label: book.name,
          value: book.id
        }
      });
      console.log(booksOptions);
      page.booksProps.books = booksOptions;
    });

  }

  function onBookChange (bookValue) {
    console.log('onBookChange',bookValue);
    selectedFactory.changeBookById(bookValue);
  }

  function getAuthors () {
    return authorsStore.getAuthors().then(getAuthorsSuccess, getAuthorsFailed);

    function getAuthorsSuccess (authors) {

      if (authors instanceof Array) {
        selectedFactory.setAuthors(authors);
        selectedFactory.setCurrentAuthor(authors[0]);
       
        var authorsOptions = authors.map(function (author) {
          return {
            value: author.id,
            label: author.name
          };
        });

        page.authorsProps.authors = authorsOptions;

      }
    }

    function getAuthorsFailed () {
      page.error = "Ошибка загрузки авторов";
    }

  }

  page.randomSelect = function () {
    selectedFactory.randomSelect();
  };



}
