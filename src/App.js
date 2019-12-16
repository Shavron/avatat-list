import React, { Component } from "react";
import "./App.css";
import Avtar from "./Avtar";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    title: "Hi Welcome to React Dashboard, Please Click To Subscribe!!"
  };
  navtitleChange = name => {
    console.log(name);
    this.setState({ title: "Welcome " + name + ", Hope You are enjoying.." });
    var self = this;
    setInterval(function() {
      self.setState({
        title: "Hi Welcome to React Dashboard, Please Click To Subscribe!!"
      });
    }, 3000);
  };

  render() {
    return (
      <>
        <Navbar title={this.state.title} />
        <Avtar className="pd4" onChange={this.navtitleChange} />
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Avtar className="pd4" />
//     </>
//   );
// }

// export default App;
