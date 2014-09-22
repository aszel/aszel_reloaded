// define controller and pass scope, http and the factory
function EventController($scope, $http, EventFactory) {

    // define events
    $scope.events = [];

    // and call init
    init();

    // get the data from the factory
    function init() {
        $scope.events = EventFactory.getEvents($scope, $http);
    }
}

// add the controller to the app
aszelApp.controller('EventController', EventController);