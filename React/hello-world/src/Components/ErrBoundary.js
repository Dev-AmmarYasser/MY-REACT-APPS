import React, { Component } from "react";

class ErrBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(Error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>There Is An Err!</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrBoundary;
