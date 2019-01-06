import React , { Component } from 'react';


class RecentPosts extends Component {
  render() {
    return (
    	<div className="menu">
    		<a href="/" className="h3">Recent Posts</a>
        -> <a href="/newpost">New Post</a>
    	</div>
    );
  }
}
export default RecentPosts;