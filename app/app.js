var aszelApp = angular.module('aszelApp', ['ngRoute', 'ngAnimate']);
    
// Routing
aszelApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'AszelController',
            templateUrl: '/app/partials/projects.html'
        })
        .when('/clowns', {
            controller: 'AszelController',
            templateUrl: '/app/partials/clowns.html'
        })
        .otherwise({
            templateUrl: '/app/partials/404.html'
        });
});