import React from 'react';
import Form from "../Modules/Form";
import DrawElement from "../Modules/DrawElement";

class NewPost extends Form {
	constructor() {
		super();
		this.state = {
			formData: {
				title: '',
				date: '',
				content: '',
			},
		};
	}
	render() {
		return (
		  <div className="post">
		  	<DrawElement newstate={this.newState} element={this.props.form.title} name='title' formdata={this.state.formData.title} className="h3" />
		  	<DrawElement newstate={this.newState}  element={this.props.form.date} name='date' formdata={this.state.formData.date} className="h5" />
		  	<DrawElement newstate={this.newState}  element={this.props.form.content} name='content' formdata={this.state.formData.content} className="p" />
		    <hr />
		    <button onClick={(e) => this.performAction(e, 'post')}>Save</button>
		  </div>
		);
	}
}
export default NewPost;