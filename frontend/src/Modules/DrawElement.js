import React from 'react';
import Form from "./Form"

class DrawElement extends Form {
	newState(x,y) {
		return this.props.newState(x,y)
	}
	onFocus(event) {
		if ( event.target.value === this.props.data ) {
			this.newState(this.props.name, this.props.data)
		}
	}
	onBlur(event) {
		if ( event.target.value === "" ) {
			this.newState(this.props.name, this.props.data)
		}
	}
	onChange(event) {
		this.newState(this.props.name, event.target.value)
	}
	setEventHandlers() {
		const { Tag } = this.props.element;
		const elementProps = this.props.element.props;
		let eventHandlers = {};
		['onChange', 'onFocus', 'onBlur'].forEach( (eventType) => {
			const checkElementProps = elementProps === undefined || elementProps[eventType] === undefined;
			if ( checkElementProps && eventType === 'onChange' && Tag === 'select' ) {
				eventHandlers[eventType] = this[eventType] ? this[eventType].bind(this) : undefined;
			} else if ( elementProps && elementProps[eventType] === undefined && elementProps.value ) {
				eventHandlers[eventType] = this[eventType] ? this[eventType].bind(this) : undefined;
			}
		});
		return eventHandlers;
	}
	render () {
		const { element } = this.props
		const elementName = this.props.name;
		const { Tag } = element;
		const elementProps = element.props;
		let props = {};
		let children;
		children = element.children;
		const eventHandlers = this.newState ? this.setEventHandlers() : undefined;
		if ( elementProps ) Object.keys(elementProps).forEach( (prop) => {
			if ( prop === 'value' ) {
				props[prop] = this.props.data;
			} else {
				props[prop] = elementProps[prop];
			}
		});
		if ( !children ) {
			// use data route
			if ( Tag === 'select') {
				const { header } = element;
				const options = this.props.data[elementName]
				children = options
					? [
						(<option key={`${elementName}`}>{header}</option>),
						...(options.map( (option, i) =>  {
							return (<option key={`${elementName}-${i}`} value={option[element.value]}>{option[element.label]}</option>)
						}))
					]
					: undefined;
			} else if ( element.label ) {
				children = element.label;
			}
		}
		const excludedProps = ['element','data','newstate'];
		let passProps = {};
		Object.keys(this.props).forEach( ( prop ) => {
			if ( excludedProps.indexOf(prop) === -1 ) {
				passProps[prop] = this.props[prop];
			}
		});
		if ( Array.isArray(children) || children ) {
			return (<Tag name={elementName} {...eventHandlers} {...props} {...passProps}>{children}</Tag>);
		} else {
			return (<Tag name={elementName} {...eventHandlers} {...props} {...passProps} />)
		}
	}
}
export default DrawElement;