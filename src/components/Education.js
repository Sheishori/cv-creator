import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class Education extends React.Component {
	constructor() {
		super();

		this.state = {
			school: '',
			title: '',
			date: '',
			editing: false,
		};

		this.newEducation = this.newEducation.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	newEducation() {
		this.setState({
			editing: true,
		});
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	render() {
		const { state } = this;

		let editing = '';
		const newForm = (
			<form>
				<ul>
					<li>
						<label htmlFor='school'>School name:</label>
						<input
							type='text'
							name='school'
							value={state.school}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='title'>Title of study:</label>
						<input
							type='text'
							name='title'
							value={state.title}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='date'>Date of study:</label>
						<input
							type='text'
							name='date'
							value={state.date}
							onChange={this.handleChange}
						/>
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
