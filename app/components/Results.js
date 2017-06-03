// Include React
var React = require("react");

var Results = React.createClass({
  render: function() {
    
    return (
    	<div className="panel panel-default" id="Results">
      <div className="panel-heading">Results</div>
	   		<div className="panel-body">
	   		<h1>Articles:</h1>
          <p>{this.props.results}</p>
	</div>
	  </div>  
	 
	  		
		);
  }
});

module.exports = Results;