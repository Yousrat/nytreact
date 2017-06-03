// Include React
var React = require("react");

var Results = React.createClass({
    render: function() {
    	var  articles = this.props.results.map(function(article, index){
    		return(
    			<li key={index}>
    				{article} 
    			</li>
    			);
    		
    	console.log(article);


    	}.bind(this));

        return ( 
        	<div className = "panel panel-default"
            id = "Results">
	            <div className = "panel-heading" >Results </div> 
	            <div className = "panel-body" >
	            	<h1> Articles: </h1> 
	            	<ul>{articles} </ul> 
	            </div> 
            </div>  
        );
    }
});

module.exports = Results;
