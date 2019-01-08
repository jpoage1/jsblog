import React , { Component } from 'react';

import server from './../server'
import Content from './Content'
import Sidebar from './Sidebar'

class Body extends Component {
	constructor() {
		super();
		this.state = {
			connected: false,
			checking: true,
			seconds: undefined,
		};
		this.seconds = 10;
	}
	componentDidMount() {
		this.testConnection();
	}
	testConnection() {
		//setTimeout(this.setCountDown.bind(this), 2000);return;
		return fetch(`${server}/status`).then( (response) => {
			if ( response.ok ) {
				return this.setState( {connected: true, checking: false} );
			}
			return this.setCountDown();
		})
		.catch( (error) => {
			this.setCountDown(error);
			return ;
		});
	}
	setCountDown(error) {
		if (error) {
			console.log(error);
		}
		this.setState( {checking: false, seconds: this.seconds} );
		this.countDownTimer = setInterval(this.countDown.bind(this), 1000);
	}
	countDown() {
		const seconds = this.state.seconds-1;
		if (seconds === 0) {
			clearInterval(this.countDownTimer);
			this.setState({checking: true})
			this.testConnection();
		}
		if ( seconds >= 0 ) {
			this.setState({seconds: seconds});
		}
	}
	showContent() {
		if ( this.state.connected === true ) {
			return ([<Content key='content' />, <Sidebar key='sidebar' />]);
		} else if ( this.state.connected === false ) {
			if ( this.state.checking === true ) {
				return 'Connecting to server... Please wait.';
			} else {
				return `Error: Server is offline. Trying again in ${this.state.seconds} seconds.`;
			}
		}
	}
	render() {
		const showContent = this.showContent();
		return (
		  <main className="body">
		    {showContent}
		  </main>
		);
	}
}
export default Body;