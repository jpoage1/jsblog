import React from 'react';
import GetData from '../Modules/GetData';
import DrawElement from "../Modules/DrawElement";

class RecentPosts extends GetData {
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
		this.getData('http://127.0.0.1:5000/Api/RecentPosts');
	}
	render() {
		const { data } = this.state;
		const htmlData = data ? data.map( ( data, i ) => {
			const element = {
    			Tag: 'a',
    			props: {
	    			href: `http://jasonpoage.com/Post/${data.id}`,
    			},
    			label: data.title,
			};
			return (<DrawElement key={i} element={element} />);
		}) : undefined;
		return (
			<div className="menu">
				<a href="/" className="h3">Recent Posts</a>
		    -> <a href="/newpost">New Post</a>
		    {htmlData}
			</div>
		);
	}
}
export default RecentPosts;