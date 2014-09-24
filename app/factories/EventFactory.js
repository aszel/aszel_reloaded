aszelApp.factory('EventFactory', function(){

    var factory = {};

    /**
     * Function gets events from Google spreadsheet
     */
    factory.getEvents = function ($scope, $http) {

        var sourceDocId = "1IXhweO516ri1aKhJAU7iWgE0ke8fJK4h-V_88nebGFM";
        var url = 'https://spreadsheets.google.com/feeds/list/' + sourceDocId + '/od6/public/values?alt=json';

        // all events
        var events = [];

        // events per day
        var eventsPerDay = [];
        var dayCounter = 0;
        var currentDate = getCurrentDate();
        console.log(year +''+ month +''+ day);

        $http.get(url)
        .success(function(data, status, headers, config) {

            console.log(data);

            for (var i = 0; i < data.feed.entry.length; i++) {

                eventsPerDay[dayCounter] =
                {
                    date: data.feed.entry[i]['gsx$date']['$t'],
                    time: data.feed.entry[i]['gsx$time']['$t'],
                    place: data.feed.entry[i]['gsx$place']['$t'],
                    title: data.feed.entry[i]['gsx$title']['$t'],
                    description: data.feed.entry[i]['gsx$description']['$t'],
                    entryfee: data.feed.entry[i]['gsx$entryfee']['$t'],
                    tags: data.feed.entry[i]['gsx$tags']['$t'],
                    end: data.feed.entry[i]['gsx$end']['$t'],
                    artists: data.feed.entry[i]['gsx$artists']['$t']
                };
            }

            $scope.events = eventsPerDay;
        })
        .error(function(data, status, headers, config) {
            console.log("Cannot retrieve data from spreadsheet. " + status);
        });

        return events;
    };

    /**
     * Function returns the current date in format 141212
     * @return {String}
     */
    function getCurrentDate() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var day = d.getDate();
        return year +''+ month +''+ day;
    }

    return factory;
});