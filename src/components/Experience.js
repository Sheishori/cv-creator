import React from 'react';
import uniqid from 'uniqid';
import '../styles/Experience.css';

class Experience extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			experience: [],
			new: {
				company: '',
				position: '',
				tasks: '',
				startDate: '',
				endDate: '',
				id: uniqid(),
			},
			editing: false,
		};

		this.newExperience = this.newExperience.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveExperience = this.saveExperience.bind(this);
		this.editExperience = this.editExperience.bind(this);
		this.delExperience = this.delExperience.bind(this);
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
		let exp = [];

		{
			/* Check whether to edit or add a new element to the experience array */
		}
		if (
			this.state.experience.find((element) => element.id === this.state.new.id)
		) {
			exp = this.state.experience.reduce((all, current) => {
				if (current.id === this.state.new.id) return all.concat(this.state.new);
				else return all.concat(current);
			}, []);
		} else exp = this.state.experience.concat(this.state.new);

		this.setState({
			experience: exp,
			new: {
				company: '',
				position: '',
				tasks: '',
				startDate: '',
				endDate: '',
				id: uniqid(),
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
				id: uniqid(),
			},
			editing: false,
		});
	}

	editExperience(id) {
		let edit = this.state.experience.find((element) => element.id === id);
		this.setState({
			new: edit,
			editing: true,
		});
	}

	delExperience(id) {
		this.setState({
			experience: this.state.experience.filter((element) => element.id !== id),
		});
	}

	render() {
		const { state, props } = this;

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

		const addButton = <button onClick={this.newExperience}>Add</button>;
		let button = addButton;

		if (state.editing) {
			editing = newForm;
			button = '';
		}

		if (props.editing === false) {
			editing = '';
			button = '';
		}

		return (
			<div id='Experience'>
				<h3>Experience</h3>
				<ul>
					{state.experience.map((element) => {
						return (
							<li key={element.id}>
								<div className='experience-info'>
									<div className='date'>
										{element.startDate}-{element.endDate}
									</div>
									<div className='company-info'>
										<div className='company-name'>{element.company}</div>
										<div className='position'>{element.position}</div>
										<div className='tasks'>{element.tasks}</div>
									</div>
								</div>
								<div className='buttons'>
									<button onClick={() => this.editExperience(element.id)}>
										Edit
									</button>
									<button onClick={() => this.delExperience(element.id)}>
										Delete
									</button>
								</div>
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

export default Experience;
