import React , { Component } from 'react';

class Post extends Component {
  render() {
  	const x = [this.props.post.author,this.props.post.date].join(', ');
    return (
      <div className="post">
        <h2>{this.props.post.title}</h2>
        <h5>{x}</h5>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}
export default Post;