import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class Education extends React.Component {
	constructor() {
		super();

		this.state = {
			education: [],
			new: {
				school: '',
				title: '',
				date: '',
			},
			editing: false,
		};

		this.newEducation = this.newEducation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveEducation = this.saveEducation.bind(this);
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
			new: {
				...this.state.new,
				[name]: value,
			},
		});
	}

	saveEducation(event) {
		event.preventDefault();
		this.setState({
			education: this.state.education.concat(this.state.new),
			new: {
				school: '',
				title: '',
				date: '',
			},
			editing: false,
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
				<button onClick={this.saveEducation}>Save</button>
			</form>
		);

		if (this.state.editing) {
			editing = newForm;
		}

		return (
			<div id='Education'>
				<p>Education</p>
				<ul>
					{state.education.map((element) => {
						return (
							<li key={element.school}>
								{element.date} - {element.school}, Title: {element.title}
							</li>
						);
					})}
				</ul>
				{editing}
				<button onClick={this.newEducation}>Add</button>
			</div>
		);
	}
}

export default Education;
