import React from 'react';
import Post from './Post'
import GetData from '../Modules/GetData';

class Posts extends GetData {
	componentDidMount() {
		this.setState({ isLoading: true });

		// Just a little url validation
		const path = this.props.match.path.split('/');
		const url = this.props.match.url.split('/');
		let newPath;
		if ( path.length === url.length ) {
			let i = 0;  // iterator
			let p = []; // path
			while ( path[i] === url[i] && i <= path.length ) {
					p[i] = path[i];
					i++;
			}
			const d = path.length-i; //difference
			const params = this.props.match.params;
			const keys = Object.keys(params);
			if ( p.length-d === keys.length ) {
				const x = keys.map( (param, i) => params[param])
				console.log(x)
				newPath = p.concat( x).join('/');
			}
			console.log(newPath)
			console.log(url)
			if ( newPath !== this.props.match.url ) {
				newPath = undefined;
			}
		}
		console.log(newPath)
		const dataRoute = [this.props.route.dataRoute,newPath].join('');
		this.getData(dataRoute);
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
		const htmlPosts = posts ? posts.map( ( post, i ) => (<Post key={i} post={post} />) ) : (<Post post={this.props.route.default} />);
		return htmlPosts;
	}
}
export default Posts;