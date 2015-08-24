(function() {
    'use strict';

    require("../api/api_services_module");

    angular
        .module('authors', ['api.services']);


    require('./authors_api_factory');
    require('./authors_store_factory');
})();
