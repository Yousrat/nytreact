var React = require("react");

var Header = require("./Header");
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");


var Main = React.createClass({
  render: function() {
    return (
    	<div className= "fluid-container">
          <Header/>
          <Search/>
          <Results/> <Saved/>
         </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;