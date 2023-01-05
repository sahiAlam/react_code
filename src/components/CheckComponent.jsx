import React, { PureComponent } from "react";

export default class CheckComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        <h4>Count is: {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({ count: 2 });
          }}
        >
          Update count
        </button>
      </>
    );
  }
}
