import React from "react";
import ReactDOM from "react-dom";

/* stateless functional component*/
// always return jsx

function Greeting() {
    return( 
      <div>
       <h1>hello world</h1>
      </div>)
    };
    
  // Uising arrow fuction to perform similar task
    const Greeting = () => {
      return React.createElement(
        'div', {}, React.createElement('blockqoute', {}, 'Welcome back to grace'));
    };
ReactDOM.render(<Greeting />, document.getElementById("root"));
