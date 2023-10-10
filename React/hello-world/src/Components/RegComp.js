import React, { Component } from "react";

class RegComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("*******************Regular Comp render**********************");

    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;
