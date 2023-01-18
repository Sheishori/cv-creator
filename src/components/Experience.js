import React from 'react';

class Experience extends React.Component {
	constructor() {
		super();

		this.state = {
			experience: [],
			new: {
				company: '',
				position: '',
				tasks: '',
				startDate: '',
				endDate: '',
			},
			editing: false,
		};

		this.newExperience = this.newExperience.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveExperience = this.saveExperience.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	newExperience() {
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

	saveExperience(event) {
		event.preventDefault();
		this.setState({
			experience: this.state.experience.concat(this.state.new),
			new: {
				company: '',
				position: '',
				tasks: '',
				startDate: '',
				endDate: '',
			},
			editing: false,
		});
	}

	cancel(event) {
		event.preventDefault();
		this.setState({
			new: {
				company: '',
				position: '',
				tasks: '',
				startDate: '',
				endDate: '',
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
						<label htmlFor='company'>Company name:</label>
						<input
							type='text'
							name='company'
							value={state.new.company}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='position'>Position title:</label>
						<input
							type='text'
							name='position'
							value={state.new.position}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='tasks'>Main tasks:</label>
						<input
							type='text'
							name='tasks'
							value={state.new.tasks}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='startDate'>Start date:</label>
						<input
							type='text'
							name='startDate'
							value={state.new.startDate}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='endDate'>End date:</label>
						<input
							type='text'
							name='endDate'
							value={state.new.endDate}
							onChange={this.handleChange}
						/>
					</li>
				</ul>
				<button onClick={this.saveExperience}>Save</button>
				<button onClick={this.cancel}>Cancel</button>
			</form>
		);

		if (this.state.editing) {
			editing = newForm;
		}

		return (
			<div id='Experience'>
				<p>Experience</p>
				<ul>
					{state.experience.map((element) => {
						return (
							<li key={element.company}>
								<div>
									{element.startDate}-{element.endDate} - {element.company},{' '}
									{element.position}
								</div>
								<div>{element.tasks}</div>
							</li>
						);
					})}
				</ul>
				{editing}
				<button onClick={this.newExperience}>Add</button>
			</div>
		);
	}
}

export default Experience;
