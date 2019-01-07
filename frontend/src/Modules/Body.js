import React , { Component } from 'react';

import Content from './Content'
import Sidebar from './Sidebar'

class Body extends Component {
	constructor() {
		super();
		this.state = { isConnected: undefined };
	}
	componentDidMount() {
		this.testConnection();
	}
	testConnection() {
		return fetch('http://128.0.0.1:5000/').then( (response) => {
			if ( response.ok ) {
				return this.setState( {isConnected: true} );
			}
			return this.setState( {isConnected: false} );
		})
		.catch( (error) => {
			console.log(error)
			return this.setState( {isConnected: false} );
		});
	}
	showContent() {
		if ( this.state.isConnected === true ) {
			return ([<Content />,
		    <Sidebar />]);
		} else if ( this.state.isConnected === false ) {
			return 'Error: Server is offline.';

		} else if ( this.state.isConnected === undefined ) {
			return 'Loading... Please wait.';
		}
	}
	render() {
		const showContent = this.showContent();
		return (
		  <div className="body">
		    {showContent}
		  </div>
		);
	}
}
export default Body;