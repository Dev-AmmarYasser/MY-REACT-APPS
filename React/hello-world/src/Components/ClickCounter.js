import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increamentCounter } = this.props;
    return (
      <div>
        <button onClick={increamentCounter}>
          {this.props.name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 2);
