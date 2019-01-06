import React , { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2>{this.props.post.title}</h2>
        <h5>{this.props.post.author}, {this.props.post.date}</h5>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}
export default Post;