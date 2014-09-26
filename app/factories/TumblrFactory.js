aszelApp.factory('TumblrFactory', function(){

    var factory = {};

    var tumblrApiUrl = "http://api.tumblr.com/v2/blog/";
    var blog = "aszel.tumblr.com/posts/";
    var oauthKey = "?api_key=aK2nb1M0bhu4HvsBxxh2X330LyrftXHJXEuLoYz7cLWCX58dYU";
    var params = "&tag=sketch&callback=JSON_CALLBACK";
    var url = tumblrApiUrl + blog + oauthKey + params;
    // http://api.tumblr.com/v2/blog/aszel.tumblr.com/posts?api_key=aK2nb1M0bhu4HvsBxxh2X330LyrftXHJXEuLoYz7cLWCX58dYU&tag=sketch

    /**
     * Function gets links to images from tumblr blog
     */
    factory.getSketches = function ($scope, $http) {

        var sketchUrls = [];

        $http.jsonp(url)
        .success(function(data, status, headers, config) {

            //console.log("tumblr data: " + JSON.stringify(data.response.posts));
            var posts = data.response.posts;
            $scope.sketchUrls = getPhotoUrls(posts);
        })
        .error(function(data, status, headers, config) {
            console.log("Cannot retrieve data from tumblr api. " + status);
        });

        return sketchUrls;
    };

    /**
     * Function gets urls for each size of each photo of all posts.
     * @param  {json}
     * @return {array}
     */
    function getPhotoUrls(posts) {
        var counter = 0;
        var photoUrlSets = [];

        for (var i = 0; i < posts.length; i++) {
            var photos = posts[i].photos;

            for (var j = 0; j < photos.length; j++) {
                photoUrlSets[counter] =  {
                    xxl: photos[j].alt_sizes[0].url,
                    xl: photos[j].alt_sizes[1].url,
                    l: photos[j].alt_sizes[2].url,
                    m: photos[j].alt_sizes[3].url,
                    s: photos[j].alt_sizes[4].url,
                    xs: photos[j].alt_sizes[5].url
                };
                counter++;
            }
        }
        return photoUrlSets;
    }

    return factory;
});