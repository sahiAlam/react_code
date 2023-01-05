import React, { Component } from "react";

export default class Test extends Component {
  componentWillUnmount() {
    console.warn("component removed..");
  }
  render() {
    return (
      <>
        <div
          style={{
            display: "block",
            margin: "10px auto",
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            borderRadius: "50%",
            textAlign: "center",
          }}
        ></div>
      </>
    );
  }
}
