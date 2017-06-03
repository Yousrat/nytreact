var React = require("react");

var Header = require("./Header");
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
var Helper = require("./Helpers");

var Main = React.createClass({

    getInitialState: function() {
        return {
            searchTerm: "",
            results: [],
            saved: ""
        };
    },

    componentDidUpdate: function(prevProps,prevState) {
      if(prevState.searchTerm !== this.state.searchTerm){
        Helper.runQuery(this.state.searchTerm).then((data) => {
            this.setState({ results: data });
        });
      }
    },

    setTerm: function(term) {
        this.setState({ searchTerm: term });
        console.log(term);
    },

    render: function() {
        return ( 
            <div className = "fluid-container" >
                <Header />
                <Search setTerm = { this.setTerm } /> 
                <Results results = { this.state.results } /> 
                <Saved />
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
