var aszelApp = angular.module('aszelApp', ['ngRoute', 'ngAnimate']);
    
// Routing
aszelApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/partials/home.html'
        })
        .when('/projects', {
            templateUrl: '/app/partials/projects.html'
        })
        .when('/writing', {
            templateUrl: '/app/partials/writing.html'
        })
        .when('/beer', {
            controller: 'EventController',
            templateUrl: '/app/partials/beer.html'
        })
        .when('/sketches', {
            controller: 'TumblrController',
            templateUrl: '/app/partials/sketches.html'
        })
        .when('/disclaimer', {
            templateUrl: '/app/partials/impressum.html'
        })
        .when('/games', {
            templateUrl: '/app/partials/games.html'
        })
        .when('/links', {
            templateUrl: '/app/partials/links.html'
        })
        .otherwise({
            templateUrl: '/app/partials/404.html'
        });
});