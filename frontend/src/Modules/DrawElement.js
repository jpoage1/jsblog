import React from 'react';
import Form from "./Form"

class DrawElement extends Form {
	onFocus(event) {
		if ( event.target.value === this.props.formdata ) {
			this.props.newstate(this.props.name, this.props.formdata)

		}
	}
	onBlur(event) {
		if ( event.target.value === "" ) {
			this.props.newstate(this.props.name, this.props.formdata)
		}
	}
	onChange(event) {
		this.props.newstate(this.props.name, event.target.value)
	}
	render () {
		const { element } = this.props
		const elementName = element.name;
		const { Tag } = element;
		const formProps = element.props;
		let props = {};
		let eventHandlers = {};
		let children;
		children = element.children;
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
			if ( prop === 'value' ) {
				props[prop] = this.props.formdata;
			} else {
				props[prop] = formProps[prop];
			}
		});
		if ( !children ) {
			// use data route
			if ( Tag === 'select') {
				const { header } = element;
				const options = this.props.formdata[elementName]
				children = options
					? [
						(<option key={`${elementName}`}>{header}</option>),
						...(options.map( (option, i) =>  {
							return (<option key={`${elementName}-${i}`} value={option[element.value]}>{option[element.label]}</option>)
						}))
					]
					: undefined;
			}
		}
		const excludedProps = ['element','formdata','newstate'];
		let passProps = {};
		Object.keys(this.props).forEach( ( prop ) => {
			if ( excludedProps.indexOf(prop) === -1 ) {
				passProps[prop] = this.props[prop];
			}
		});
		return Array.isArray(children)
			? (<Tag name={elementName} {...eventHandlers} {...props} {...passProps}>{children}</Tag>)
			: (<Tag name={elementName} {...eventHandlers} {...props} {...passProps} />);
	}
}
export default DrawElement;