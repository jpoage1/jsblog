import { Component } from 'react';
import { getIt } from './fetchIt'

class GetData extends Component {
	constructor() {
		super();
		this.state = {
			data: [[{}]],
		}
	}
	componentDidMount() {
		console.log(this.props)
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