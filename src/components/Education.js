import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);

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
		this.cancel = this.cancel.bind(this);
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

	cancel(event) {
		event.preventDefault();
		this.setState({
			new: {
				school: '',
				title: '',
				date: '',
			},
			editing: false,
		});
	}

	render() {
		const { state, props } = this;

		let editing = '';
		const newForm = (
			<form>
				<ul>
					<li>
						<label htmlFor='school'>School name:</label>
						<input
							type='text'
							name='school'
							value={state.new.school}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='title'>Title of study:</label>
						<input
							type='text'
							name='title'
							value={state.new.title}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='date'>Date of study:</label>
						<input
							type='text'
							name='date'
							value={state.new.date}
							onChange={this.handleChange}
						/>
					</li>
				</ul>
				<button onClick={this.saveEducation}>Save</button>
				<button onClick={this.cancel}>Cancel</button>
			</form>
		);

		const AddButton = <button onClick={this.newEducation}>Add</button>;
		let button = AddButton;

		if (state.editing) {
			editing = newForm;
			button = '';
		}

		if (props.editing === false) {
			editing = '';
			button = '';
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
				{button}
			</div>
		);
	}
}

export default Education;
