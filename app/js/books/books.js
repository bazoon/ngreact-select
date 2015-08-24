(function() {
    'use strict';

    require("../api/api_services_module");

    angular
        .module('books', ['api.services']);


    require('./books_api_factory');
    require('./books_store_factory');
})();
