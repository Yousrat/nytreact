// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//var Search = require("./components/Search");
var Main = require("./components/Main");
//var Header = require("./components/Header");

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  
<div className="container">
    <Main/>
 </div>,
  document.getElementById("app")
);
