import React , { Component } from 'react';
import Post from './Post'
import { getIt } from '../Modules/fetchIt'

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
		}
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		this.getPosts();
	}
	updateWithNewData(newData) {
		this.setState({ isLoading: false, ...newData });
		//this.setState({ isLoading: false, worksheetData: worksheetData });
	}
	getPosts() {
		const posts = [getIt('http://127.0.0.1:5000/Api/Posts')];
	
		Promise.all(posts)
		.then((posts) => {
			this.updateWithNewData({posts: posts});
		});
		return posts;
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
		const { posts } = this.state;
		console.log(posts)
		const htmlPosts = posts ? posts.map( ( post, i ) => (<Post key={i} post={post}/>) ) : undefined;
		return htmlPosts;
	}
}
export default Posts;