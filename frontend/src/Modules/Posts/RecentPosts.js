import React from 'react';
import server from './../../server'
import GetData from '../Main/GetData';
import DrawElement from "../Element/DrawElement";

class Card extends GetData {
	constructor() {
		super();
		this.state = {
			data: [{
				id: '',
				title: '',
			}],
		};
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		// this.props.route.dataRoute doesn't exist, because its not configured in routes.js
		// perhaps later there will be a config for modules that exist outside of the standard routes.js
		this.getData(`${server}/Posts/Sidebar`);
	}
	render() {
		const { data } = this.state;
		const htmlData = data ? data.map( ( data, i ) => {
			const element = {
    			Tag: 'a',
    			props: {
	    			href: `http://localhost:3000/Post/${data.id}`,
    			},
    			label: data.title,
			};
			return (<p key={i}><DrawElement element={element} /></p>);
		}) : undefined;
		return (
			<div className="menu">
				<h3><a href="/Posts">Recent Posts</a></h3>
		    	<p> -> <a href="/Post/New">New Post</a></p>
				{htmlData}
			</div>
		);
	}
}
export default Card;