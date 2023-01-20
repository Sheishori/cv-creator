import React from 'react';
import uniqid from 'uniqid';
import '../styles/Education.css';

class Education extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			education: [
				{
					school: 'Technological University',
					title: "Master's Degree in IT",
					startDate: '2012',
					endDate: '2016',
					id: 789,
				},
			],
			new: {
				school: '',
				title: '',
				startDate: '',
				endDate: '',
				id: uniqid(),
			},
			editing: false,
		};

		this.newEducation = this.newEducation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveEducation = this.saveEducation.bind(this);
		this.editEducation = this.editEducation.bind(this);
		this.delEducation = this.delEducation.bind(this);
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
		let edu = [];

		{
			/* Check whether to edit or add a new element to the experience array */
		}
		if (
			this.state.education.find((element) => element.id === this.state.new.id)
		) {
			edu = this.state.education.reduce((all, current) => {
				if (current.id === this.state.new.id) return all.concat(this.state.new);
				else return all.concat(current);
			}, []);
		} else edu = this.state.education.concat(this.state.new);

		this.setState({
			education: edu,
			new: {
				school: '',
				title: '',
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
				school: '',
				title: '',
				startDate: '',
				endDate: '',
				id: uniqid(),
			},
			editing: false,
		});
	}

	editEducation(id) {
		let edit = this.state.education.find((element) => element.id === id);
		this.setState({
			new: edit,
			editing: true,
		});
	}

	delEducation(id) {
		this.setState({
			education: this.state.education.filter((element) => element.id !== id),
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
				<button onClick={this.saveEducation}>Save</button>
				<button onClick={this.cancel}>Cancel</button>
			</form>
		);

		const addButton = <button onClick={this.newEducation}>Add</button>;
		let button = addButton;

		if (state.editing) {
			editing = newForm;
			button = '';
		}

		if (props.editing === false) {
			editing = '';
			button = '';
		}

		let active = '';
		if (props.editing === false) {
			active = 'hidden';
		}

		return (
			<div id='Education'>
				<h3>Education</h3>
				<ul>
					{state.education.map((element) => {
						return (
							<li key={element.id}>
								<div className='education-info'>
									<div className='date'>
										{element.startDate}-{element.endDate}
									</div>
									<div className='school-info'>
										<div className='school-name'>{element.school}</div>
										<div className='title'>{element.title}</div>
									</div>
								</div>
								<div className='buttons'>
									<button
										className={active}
										onClick={() => this.editEducation(element.id)}
									>
										Edit
									</button>
									<button
										className={active}
										onClick={() => this.delEducation(element.id)}
									>
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

export default Education;
