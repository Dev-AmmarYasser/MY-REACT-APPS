import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class withCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      // console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCounter={this.increamentCounter}
          {...this.props}
        />
      );
    }
  }

  return withCounter;
};

export default withCounter;
