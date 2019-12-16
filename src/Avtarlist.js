import React, { Component } from "react";

class Avtarlist extends Component {
  state = {};

  render() {
    //  console.log(this.props);

    return (
      <div className="avatar">
        <img
          src={`https://joeschmoe.io/api/v1/${this.props.listobj.name}`}
          alt="Avtar"
        />
        <h1>{this.props.listobj.name}</h1>
        <p>{this.props.listobj.work}</p>
        <button
          type="button"
          className="tc btn btn-secondary"
          onClick={() => this.props.nav(this.props.listobj.name)}
          id={this.props.listobj.name}
          data-obj={JSON.stringify(this.props.listobj)}
        >
          click to subscribe
        </button>
      </div>
    );
  }
}

export default Avtarlist;
