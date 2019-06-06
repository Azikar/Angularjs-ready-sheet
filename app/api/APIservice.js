angular
    .module('main-app')
    .factory('APIservice', APIservice);

APIservice.$inject = ['$http'];

function APIservice() {
    var urlBase = '';
    var config = {
        headers: {
            'Authorization': window.localStorage.getItem("_token"),
            'Access-Control-Allow-Origin': '*',

        }

    }
    var service = {
        config: config,
        urlBase: urlBase,
        example: example
    };
    return service;

    function example() {

    }
};