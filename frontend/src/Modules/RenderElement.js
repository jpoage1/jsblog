import React from 'react';
import Form from "./Form"
import DrawElement from "./DrawElement"

class RenderElement extends Form {
	render() {
		const elementName = this.props.name;
	  	return (<DrawElement element={this.props.form[elementName]} name={elementName} formdata={this.state.formData[elementName]} />)
	}
}
export default RenderElement;