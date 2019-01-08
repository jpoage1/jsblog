import React , { Component } from 'react';

class Post extends Component {
	componentDidMount() {
		this.setState({ isLoading: true });
//		this.getData(this.props.route.dataRoute);
	}
	render() {
		const x = [this.props.post.author,this.props.post.date].join(', ');
	return (
	  <article className="post">
	    <h2>{this.props.post.title}</h2>
	    <h5>{x}</h5>
	    <p>{this.props.post.content}</p>
	  </article>
	);
	}
}
export default Post;