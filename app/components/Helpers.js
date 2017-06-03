// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=074c30265e97430c96c6dd9b6e7688df&q=";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(searchTerm) {

    console.log(searchTerm);

    // Figure out the geolocation
    var queryURL = queryURLBase + searchTerm;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if(NTdata.response.docs[0].headline !== 'null'){

        return response.docs[0].headline.main;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
//   getHistory: function() {
//     return axios.get("/api");
//   },

//   // This function posts new searches to our database.
//   postHistory: function(location) {
//     return axios.post("/api", { location: location });
//   }
// };

// We export the API helper
module.exports = helper;
