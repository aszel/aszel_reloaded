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
        var dayCounter = 0;

        var currentDate = getCurrentDate();

        $http.get(url)
        .success(function(data, status, headers, config) {

            // console.log(data);
            var lastDate = "";

            var eventsOfDay = [];

            // loop over all events from spreadsheet
            for (var i = 0; i < data.feed.entry.length; i++) {

                // compare date of event with date of event before
                var dateOfCurEvent = data.feed.entry[i]['gsx$date']['$t'];
                var weekday = getWeekDayAsWord(dateOfCurEvent);

                console.log("date of current event: " + dateOfCurEvent);
                // TODO - dayCounter hochzählen entsprechend der Anzahl der Tage zwischen den events wenn sie nicht an einem Tag stattfinden
                events[i] =
                {
                    weekday: weekday,
                    date: dateOfCurEvent,
                    time: data.feed.entry[i]['gsx$time']['$t'],
                    place: data.feed.entry[i]['gsx$place']['$t'],
                    title: data.feed.entry[i]['gsx$title']['$t'],
                    description: data.feed.entry[i]['gsx$description']['$t'],
                    entryfee: data.feed.entry[i]['gsx$entryfee']['$t'],
                    tags: data.feed.entry[i]['gsx$tags']['$t'],
                    end: data.feed.entry[i]['gsx$end']['$t'],
                    artists: data.feed.entry[i]['gsx$artists']['$t'],
                    link: data.feed.entry[i]['gsx$link']['$t'],
                };
                //events.push(eventsOfDay);
                dayCounter++;
            }

            $scope.events = events;
        })
        .error(function(data, status, headers, config) {
            console.log("Cannot retrieve data from spreadsheet. " + status);
        });

        return events;
    };

    /**
     * Function returns the current date in format 20141212
     * @return {String}
     */
    function getCurrentDate() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var day = d.getUTCDate();
        day = day < 10 ? '0' + day : day;
        var result = year +''+ month +''+ day;
        //console.log(result);
        return result;
    }

    /**
     * Function returns the name of the weekday
     * @param  {String} datestring Format: 20141212
     * @return {String}
     */
    function getWeekDayAsWord(datestring) {

        // split datestring into year, month and day
        // keep in mind that month is in range between 0 and 11
        var year = datestring.substring(0, 4);
        var month = datestring.substring(4, 6);
        month = month-1;
        var day = datestring.substring(6, 8);

        var d = new Date(year, month, day);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        //console.log("Name of day " + datestring + " : " + weekday[d.getDay()]);
        return weekday[d.getDay()];
    }

    return factory;
});