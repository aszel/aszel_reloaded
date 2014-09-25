var aszelApp = angular.module('aszelApp', ['ngRoute', 'ngAnimate']);
    
// Routing
aszelApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/partials/projects.html'
        })
        .when('/clowns', {
            templateUrl: '/app/partials/clowns.html'
        })
        .when('/beer', {
            controller: 'EventController',
            templateUrl: '/app/partials/beer.html'
        })
        .when('/blog', {
            controller: 'TumblrController',
            templateUrl: '/app/partials/blog.html'
        })
        .when('/disclaimer', {
            templateUrl: '/app/partials/impressum.html'
        })
        .otherwise({
            templateUrl: '/app/partials/404.html'
        });
});