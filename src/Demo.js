import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Demo.css";

// class Demo extends Component {
//   render() {
//     return (
//       <div className="main">
//         <h1>Hello {this.props.name}</h1>
//         <p>Welcom to My Page</p>
//       </div>
//     );
//   }
// }

const Demo = ({ name }) => {
  return (
    <div className="main">
      <h1>Hello {name}</h1>
      <p>Welcom to My Page</p>
    </div>
  );
};

export default Demo;
