import React ,{ Component } from 'react';
import { postIt, getIt, putIt, deleteIt } from "../Modules/fetchIt";

class NewPost extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			changes: [],
			form: [],
			formData: [],
			showPopup: false,
		};
	}
	componentDidMount() {
		if ( Object.prototype.toString.call(this.props.form).indexOf('Object') === -1 ) return;
		this.setState({
			isLoading: true,
			form: this.defaultFormValues(),
		});
		this.getUsers();
		this.getFormData();
	}
	togglePopup() {
		this.setState({
		  showPopup: !this.state.showPopup
		});
	}
	getUsers() {
		this.getData(this.props.dataRoute, (users) => {
			const b1 = new Set(users);
			const changes = [...new Set([...this.state.users].filter(x => !b1.has(x)))];
			this.setState({
				isLoading: false,
				changes: changes,
				users: users,
		});});
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
	onFocus(event) {
		const defaultValue = this.props.form[event.target.name].props.value;
		if ( event.target.value === defaultValue ) {
			let form = {};
			Object.keys(this.state.form).forEach( (key) => {
				if ( key === event.target.name ) {
					form[key] = '';
				} else {
					form[key] = this.state.form[key];
				}
			});
			this.setState({form: form});
		}
	}
	onBlur(event) {
		if ( event.target.value === '' ) {
			let form = {};
			Object.keys(this.state.form).forEach( (key) => {
				if ( key === event.target.name ) {
					form[key] = this.props.form[key].props.value;
				} else {
					form[key] = this.state.form[key];
				}
			});
			this.setState({form: form});
		}
	}
	onChange(event) {
		let { form } = this.state;
		form[event.target.name] = event.target.value
		this.setState(form);
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
	performAction(event, whatAction = 'get') {
		const action = {
			'post' : _ => {
				postIt(this.props.dataRoute, this.state.formData);
				const formData = this.parseNewData(this.state.formData);
				return [formData].concat(this.state.changes);
			},
			'put' : _ => {
				putIt(this.props.dataRoute, this.state.formData);
			},
			'delete' : _ => {
				deleteIt(this.props.dataRoute, this.state.formData);
			},
			'clear' : _ => {
				return this.state.changes;
			},
		}[whatAction];
		if ( !action ) return;
		const changes = action();
		this.setState({
			formData: whatAction === 'clear' ? this.defaultFormValues() : this.state.formData,
			changes: changes,
		});
	}
	drawElement(column, i) {
		const { form } = this.props;
		const { Tag } = form[column];
		const formProps = form[column].props;
		let props = {};
		let eventHandlers = {};
		let children;
		children = form[column].children;
		['onChange', 'onFocus', 'onBlur'].forEach( (eventType) => {
			const checkFormProps = formProps === undefined || formProps[eventType] === undefined;
			if ( checkFormProps && eventType === 'onChange' && Tag === 'select' ) {
				eventHandlers[eventType] = this[eventType] ? this[eventType].bind(this) : undefined;
			} else if ( formProps && formProps[eventType] === undefined && formProps.value )
			{
				eventHandlers[eventType] = this[eventType] ? this[eventType].bind(this) : undefined;
			}
		});
		if ( formProps ) Object.keys(formProps).forEach( (prop) => {
			if ( prop === 'value') {
				props[prop] = this.state.form[column] || '';
			} else if ( formProps[prop] ) {
				props[prop] = formProps[prop];
			}
		});
		if ( !children ) {
			// use data route
			if ( Tag === 'select') {
				const { header } = form[column];
				const options = this.state.formData[column]
				children = options
					? [
						(<option key={`${column}`}>{header}</option>),
						...(options.map( (option, i) =>  {
							return (<option key={`${column}-${i}`} value={option[this.props.form[column].value]}>{option[this.props.form[column].label]}</option>)
						}))
					]
					: undefined;
			}
		}
		return Array.isArray(children)
			? (<Tag name={column} {...eventHandlers} {...props}>{children}</Tag>)
			: (<Tag name={column} {...eventHandlers} {...props} />);
	}
	getFormData() {
		Object.keys(this.props.form).forEach( (column, i) =>
			this.getData(this.props.form[column].dataRoute, (options) =>
				{
					let newState = this.state;
					newState.formData[column] = options
					this.setState(newState);
				}
			)
		);
	}
	render() {
		return (
		  <div className="post">
		  	<input type="text" name='title' value={this.state.formData.title} className="h3" />
		    <h5>{this.state.formData.date}</h5>
		    <textarea className="p" name="content">{this.state.formData.content}</textarea>
		    <hr />
		    <button onClick={(e) => this.performAction(e, 'post')}>Save</button>
		  </div>
		);
	}
}
export default NewPost;