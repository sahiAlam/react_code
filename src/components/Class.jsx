import React, { Component } from "react";

class Class extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          Class {this.props.dept} / Batch {this.props.batch}
        </h1>
      </div>
    );
  }
}

export default Class;
