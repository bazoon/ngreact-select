(function() {
  'use strict';

  angular
      .module('page')
      .controller('PopularAuthorsController', PopularAuthorsController);

  PopularAuthorsController.$inject = ['authorsStore', 'selectedFactory'];


  function PopularAuthorsController(authorsStore, selectedFactory) {
      var vm = this;
      vm.authorSelected = authorSelected;
      activate();

      ////////////////

      function activate() {
        getPopularAuthors();
      }


      function getPopularAuthors () {
        authorsStore.getPopularAuthors().then(getPopularAuthorsSuccess);


        function getPopularAuthorsSuccess (response) {
          vm.popularAuthors = response;
        }


      }


      function authorSelected (author) {
        selectedFactory.changeAuthorById(author.id);
      }
  }
})();
