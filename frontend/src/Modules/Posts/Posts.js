import React from 'react';
import Post from './Post'
import GetData from '../Main/GetData';

class Posts extends GetData {
	componentDidMount() {
		this.setState({ isLoading: true });
		this.validateDataRoute();
		this.getData(this.dataRoute);
	}
	render() {
		/*
		const posts = [{
			title: 'Post Title',
			author: 'Author',
			date: 'Date',
			content: 'Content',
		},{
			title: 'Post Title',
			author: 'Author',
			date: 'Date',
			content: 'Content',
		}] */
		const posts = this.state.data;
		const htmlPosts = posts ? posts.map( ( post, i ) => {
			return (<Post key={i} post={post} />)
		} ) : (<Post post={this.props.route.default} />);
		return htmlPosts;
	}
}
export default Posts;