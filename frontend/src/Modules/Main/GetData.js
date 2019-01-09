import { Component } from 'react';
import { getIt } from './fetchIt'
import server from './../../server'

class GetData extends Component {
	constructor() {
		super();
		this.state = {
			data: [[{}]],
		}
		this.dataRoute = undefined;
	}
	validateDataRoute() {	
		// Just a little url validation
		const path = this.props.match.path.split('/');
		const url = this.props.match.url.split('/');
		let newPath;
		if ( Object.keys(this.props.match.params).length === 0 ) {
			this.dataRoute = this.props.route.dataRoute;
			return;
		} else if ( path.length === url.length ) {
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
				newPath = p.concat( x).join('/');
			}
			if ( newPath !== this.props.match.url ) {
				newPath = undefined;
			}
		}
		this.dataRoute = [server,newPath].join('');
	}
	updateWithNewData(newData) {
		this.setState({ isLoading: false, ...newData });
		//this.setState({ isLoading: false, worksheetData: worksheetData });
	}
	getData(dataRoute, queryVars = []) {
		const data = getIt(dataRoute);
		data.then((data) => {
			this.updateWithNewData({data: data});
		});
		return data;
	}
}
export default GetData;