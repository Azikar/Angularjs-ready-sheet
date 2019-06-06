angular.
module('main-app').
config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
        when('/', {
            template: '<example-user></example-user>'
        }).
        otherwise('/phones');
    }
]);