import { Component } from 'react';
import { postIt, getIt, putIt, deleteIt } from "./fetchIt";
//import Popup from "./Popup"

class Form extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			changes: [],
			form: [],
			formData: [],
			formDataAction: [],
			//showPopup: false,
		};
		this.newState = this.newState.bind(this)
	}
	newState (elementName, newValue)
	{
		let newState = this.state;
		newState.formData[elementName] = newValue;
		this.setState(newState);
	}
	componentDidMount() {
		if ( Object.prototype.toString.call(this.props.form).indexOf('Object') === -1 ) return;
		this.setState({
			isLoading: true,
			formData: this.defaultFormValues(),
		});
	}
	parseNewData(newData) {
		let changes = {};
		Object.keys(this.props.form).forEach((key, i) => {
			const val = newData[key];
			changes[key] = val;
		});
		return changes;
	}
	defaultFormValues() {
		let form = {};
		Object.keys(this.props.form).forEach( (column) => {
			if ( this.props.form[column].props )
				form[column] = this.props.form[column].props.value
		});
		return form;
	}
	performAction(event, whatAction = undefined ) {
		const actions = {
			//create
			'post' : _ => {
				console.log(this.state.formData)
				postIt(this.props.dataRoute, this.state.formData);
				const formData = this.parseNewData(this.state.formData);
				return [formData].concat(this.state.changes);
			},
			'clear' : _ => {
				return this.state.changes;
			},
			//update
			'put' : _ => {
				putIt(this.props.dataRoute, );
			},
			'delete' : _ => {
				deleteIt(this.props.dataRoute, );
			},
		}
		const action = actions[whatAction];
		if ( !action ) return;
		const changes = action();
		this.setState({
			formData: whatAction === 'clear' ? this.defaultFormValues() : this.state.formData,
			changes: changes,
		});
		event.target.value = "0";
	}
	formAction(event, id = '0') {
		let { formDataAction } = this.state
		formDataAction[id] = event.target.value;
		this.setState({formDataAction: formDataAction});
	}
	getData(dataRoute, callback) {
		const data = Array.isArray(dataRoute)
			? dataRoute.map( (dataRoute) => {
				return getIt(dataRoute);
			})
			: [getIt(dataRoute)];
	
		Promise.all(data)
		.then((data) => {
			callback(data[0]);
		});
		return data;
	}
	// set data for viewing/GET requests, and log any changes
	// Useful for when editing several rows of data at one time
	setData() {
		this.getData(this.props.dataRoute, ( data ) => {
			const b1 = new Set(data);
			const changes = [...new Set([...this.state.data].filter(x => !b1.has(x)))];
			this.setState({
				isLoading: false,
				changes: changes,
				data: data,
			});
		});
	}
	// set form data for editing/PUT requests
	getFormData(dataRoute) {
		Object.keys(this.props.form).forEach( (column, i) =>
			this.getData(this.props.dataRoute, (options) =>
				this.newState(column, options)
			)
		);
	}
}
export default Form;