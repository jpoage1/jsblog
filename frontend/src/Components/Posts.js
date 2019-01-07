import React from 'react';
import Post from './Post'
import GetData from '../Modules/GetData';

class Posts extends GetData {
	componentDidMount() {
		this.setState({ isLoading: true });
		this.getData('http://127.0.0.1:5000/Api/Posts');
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
		const htmlPosts = posts ? posts.map( ( post, i ) => (<Post key={i} post={post}/>) ) : undefined;
		return htmlPosts;
	}
}
export default Posts;