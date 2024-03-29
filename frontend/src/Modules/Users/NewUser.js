import React from 'react';
import Form from "../Main/Form";
import DrawElement from "../Element/DrawElement";

class NewPost extends Form {
	constructor() {
		super();
		this.state = {
			formData: {
				alias: '',
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				memberSince: '',
			},
		};
	}
	render() {
		return (
		  <form className="registration">
		  	<div>
			  	<DrawElement newstate={this.newState} element={this.props.form.firstName} name='firstName' data={this.state.formData.firstName} className="p" />
			  	<DrawElement newstate={this.newState}  element={this.props.form.lastName} name='lastName' data={this.state.formData.lastName} className="p" />
			  	<DrawElement newstate={this.newState}  element={this.props.form.alias} name='alias' data={this.state.formData.alias} className="p" />
			  	<DrawElement newstate={this.newState}  element={this.props.form.email} name='email' data={this.state.formData.email} className="p" />
			  	<DrawElement newstate={this.newState}  element={this.props.form.password} name='password' data={this.state.formData.password} className="p" />
			    <hr />
			    <button onClick={(e) => this.performAction(e, 'post')}>Register</button>
			   </div>
		  </form>
		);
	}
}
export default NewPost;