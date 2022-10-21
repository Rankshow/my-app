import React, { Component } from "react";
import ReactDOM from "react-dom";

// Nested Component, React tool
function Greeting() {
      return( 
          <div>
              <Header />
              < Parahragh />
              <Time />
          </div>
        );
      };

      // implicit return
 const Header = () => <h1>Church website will be ready soon</h1>;
 const Time = () => <input type="text" name="" id="" />
//  explicit return
const Parahragh = () => {
  return <p>Garbage is the word of the wise never look behind</p>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
