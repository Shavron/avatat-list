import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="tc navbar navbar-light bg-light">
        <a className="tc navbar-brand" href="#">
          {this.props.title}
        </a>
      </nav>
    );
  }
}

export default Navbar;

// const Navbar = () => {
//   return (
//     <nav class="tc navbar navbar-light bg-light">
//       <a class="tc navbar-brand" href="#">
//         Hi This is Avtar Dashboard
//       </a>
//     </nav>
//   );
// };
