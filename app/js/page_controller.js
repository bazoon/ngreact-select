

angular.module('page', [])
	.controller('pageController', pageController);

pageController.$inject = ["$scope", 'selectedFactory', 'authorsStore'];

function pageController ($scope, selectedFactory, authorsStore) {
  var page = this;
  page.hint = selectedFactory.hint;
  page.state = selectedFactory.getState();

  activate();

 ///////////

  function activate () {
    getAuthors();
  }

  function getAuthors () {
    return authorsStore.getAuthors().then(getAuthorsSuccess, getAuthorsFailed);

    function getAuthorsSuccess (authors) {

      if (authors instanceof Array) {
        selectedFactory.setAuthors(authors);
        selectedFactory.setCurrentAuthor(authors[0]);
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
