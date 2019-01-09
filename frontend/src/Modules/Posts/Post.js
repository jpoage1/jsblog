import React from 'react';
import GetData from '../Main/GetData';

class Post extends GetData {
	constructor() {
		super();
		this.state = {
			data: [[{}]],
		}
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		if ( this.props.component === Post ) {
			this.validateDataRoute();
			this.getData(this.dataRoute);
		}
	}
	isSelf() {
		return this.props.component === Post;
	}
	render() {
		const post = this.isSelf() ? this.state.data[0] : this.props.post;
		const x = [post.author,post.date].join(', ');
		return (
		  <article className="post">
		    <h2>{post.title}</h2>
		  	<h5>{x}</h5>
		    <p>{post.content}</p>
		  </article>
		);
	}
}
export default Post;
/*
 		    */