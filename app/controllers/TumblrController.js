function TumblrController($scope, $http, TumblrFactory) {

    // define events
    $scope.sketchUrls = [];

    // and call init
    init();

    // get the data from the factory
    function init() {
        $scope.sketchUrls = TumblrFactory.getSketches($scope, $http);
    }
}

// add the controller to the app
aszelApp.controller('TumblrController', TumblrController);