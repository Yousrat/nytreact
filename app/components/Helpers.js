// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

//Helper functions for making API Calls
var Helper = {

    // This function serves our purpose of running the query to geolocate.
    runQuery: function(searchTerm) {
        var queryURL = queryURLBase + searchTerm;
        return axios.get(queryURL).then(function(NYTdata) {

            var data = NYTdata.data.response;
            var NYTresult = [];
            for (var i = 0; i < data.docs.length; i++) {
                NYTresult.push(data.docs[i].headline.main);

            }
            return NYTresult;
        });
    }
};

// // We export the API helper
module.exports = Helper;
