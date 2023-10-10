import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { render } = this.props;
    return (
      <div>
        <h2>{render(true)}</h2>
      </div>
    );
  }
}

export default User;
