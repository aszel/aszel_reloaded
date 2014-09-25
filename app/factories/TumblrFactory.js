aszelApp.factory('TumblrFactory', function(){

    var factory = {};

    /**
     * Function gets links to images from tumblr blog
     */
    factory.getSketches = function ($scope, $http) {

        var blog = '';
        var url = '';

        var sketches = [];

        $http.get(url)
        .success(function(data, status, headers, config) {


            $scope.sketches = [];
        })
        .error(function(data, status, headers, config) {
            console.log("Cannot retrieve data from tumblr api. " + status);
        });

        return sketches;
    };

    return factory;
});