var React = require("react");

var Header = require("./Header");
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
//var Helpers = require("./Helpers");

var Main = React.createClass({
  
getInitialState: function() {
    return { searchTerm: "", results: "", saved: "" };
  },

// componentDidUpdate: function() {

//     // Run the query for the address
//     Helpers.runQuery(this.state.searchTerm).then(function(data) {
//       if (data !== this.state.results) {
//         console.log("article header:", data);
//         this.setState({ results: data });

//         // After we've received the result... then post the search term to our history.
//         // Helpers.postHistory(this.state.searchTerm).then(function() {
//         //   console.log("Updated!");

//         //   // After we've done the post... then get the updated history
//         //   helpers.getHistory().then(function(response) {
//         //     console.log("Current History", response.data);

//         //     console.log("History", response.data);

//         //     this.setState({ history: response.data });

//          // }.bind(this));
//         //}.bind(this));
//       }
//     }.bind(this));
//   },


setTerm: function(term) {
    this.setState({ searchTerm: term });
    console.log(term);
  },



  render: function() {
    return (
    	<div className= "fluid-container">
          <Header/>
          <Search setTerm={this.setTerm} />
          <Results results={this.state.results}/> <Saved/>
         </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;