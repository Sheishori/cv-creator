import React from 'react';

class Education extends React.Component {
	constructor() {
		super();

		this.state = {
			editing: false,
		};

		this.newEducation = this.newEducation.bind(this);
	}

	newEducation() {
		this.setState({
			editing: true,
		});
	}

	render() {
		let editing = '';
		const newForm = (
			<form>
				<ul>
					<li>
						<label htmlFor='school-name'>School name:</label>
						<input type='text' name='school-name' />
					</li>
					<li>
						<label htmlFor='title'>Title of study:</label>
						<input type='text' name='title' />
					</li>
					<li>
						<label htmlFor='date'>Date of study:</label>
						<input type='text' name='date' />
					</li>
				</ul>
				<button>Save</button>
			</form>
		);

		if (this.state.editing) {
			editing = newForm;
		}

		return (
			<div id='Education'>
				<p>Education</p>
				{editing}
				<button onClick={this.newEducation}>Add</button>
			</div>
		);
	}
}

export default Education;
