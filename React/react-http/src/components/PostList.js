import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      err: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: "Err Retreiving Data",
        });
      });
  }

  render() {
    const { posts, err } = this.state;
    return (
      <div>
        List Of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {err ? <div>{err}</div> : null}
      </div>
    );
  }
}

export default PostList;
