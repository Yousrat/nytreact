// Include React
var React = require("react");

var Search = React.createClass({
  
getInitialState: function() {
    return { term: "" };
  },


handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },
  
  render: function() {
    
    return (
    	<div className="panel panel-default">
      <div className="panel-heading">Search</div>
	   		<div className="panel-body">

     <form onSubmit={this.handleSubmit}> 

	   		Search Term:<br></br>
				<input value={this.state.term} type="text" name="" id="searchTerm" onChange={this.handleChange}
                required/><br></br>
			
				<div id="buttons">
		<button type="submit" id="searchBtn">Search</button>
	</div>
	</form>
	  </div>  
	  </div>

		);
  }
});

module.exports = Search;