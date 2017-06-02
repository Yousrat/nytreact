// Include React
var React = require("react");

var Search = React.createClass({
  render: function() {
    
    return (
    	<div className="panel panel-default">
      <div className="panel-heading">Search</div>
	   		<div className="panel-body">
	   		Search Term:<br></br>
				<input type="text" name="" id="searchTerm"/><br></br>
			Start Year :<br></br>
				<input type="text" name="" id="startYear"/><br></br>
			End Year :<br></br>
				<input type="text" name="" id="endYear"/><br></br>

				<div id="buttons">
		<button id="searchBtn">Search</button>
	</div>
	  </div>  
	  </div>

		);
  }
});

module.exports = Search;