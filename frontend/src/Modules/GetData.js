import { Component } from 'react';
import { getIt } from '../Modules/fetchIt'

class GetData extends Component {
	constructor() {
		super();
		this.state = {
			data: [[{}]],
		}
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