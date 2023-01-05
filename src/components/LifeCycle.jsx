import React, { PureComponent } from "react";
import Test from "./Test";

export default class LifeCycle extends PureComponent {
  // constructor
  constructor() {
    super();
    this.state = {
      count: 0,
      isAppend: true,
    };

    console.warn("constructor..");
  }
  // component mounted
  componentDidMount() {
    console.warn("component did mount...");
  }
  // component updated
  componentDidUpdate(prevProps, prevState, snapshort) {
    console.warn("component updated", prevState.count, this.state.count);

    // if (prevState.count === this.state.count) {
    //   alert("Both count are same");
    // }

    // update state here only by condition, otherwise it will go to infinite loop
    // if (this.state.count < 10) {
    //   this.setState({ count: this.state.count + 1 });
    // }
  }
  // should component update
  // shouldComponentUpdate() {
  //   console.warn("should component update...", this.state.count);
  //   return true;
  // }

  // component will unmount
  componentWillUnmount() {
    console.warn("component unmount ...");
  }
  // DOM rendered
  render() {
    console.warn("render...");
    return (
      <>
        <h1>Life Cycle Method - {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update name
        </button>
        <button
          onClick={() => this.setState({ isAppend: !this.state.isAppend })}
        >
          Toggle Div
        </button>
        {this.state.isAppend ? <Test /> : <h1>Component not found</h1>}
      </>
    );
  }
}
