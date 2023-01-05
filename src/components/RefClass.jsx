import React, { Component, createRef } from "react";

export default class RefClass extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.backgroundColor = "Black";
    this.inputRef.current.style.color = "#fff";
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Check Ref</button>
      </>
    );
  }
}
