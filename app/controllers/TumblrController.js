function TumblrController($scope, $http, TumblrFactory) {

    // define events
    $scope.sketches = [];

    // and call init
    init();

    // get the data from the factory
    function init() {
        $scope.sketches = TumblrFactory.getSketches($scope, $http);
    }
}

// add the controller to the app
aszelApp.controller('TumblrController', TumblrController);