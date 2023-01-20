import React from 'react';
import '../styles/PersonalInfo.css';

class PersonalInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'John John',
			currentTitle: 'Web Developer',
			email: 'john.john@gmail.com',
			phone: '123456789',
			editing: true,
		};

		this.handleChange = this.handleChange.bind(this);
		this.saveInfo = this.saveInfo.bind(this);
		this.editInfo = this.editInfo.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	saveInfo(event) {
		event.preventDefault();
		this.setState({
			editing: false,
		});
	}

	editInfo(event) {
		event.preventDefault();
		this.setState({
			editing: true,
		});
	}

	render() {
		const { state, props } = this;

		const nameInput = (
			<div>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					value={state.name}
					onChange={this.handleChange}
				/>
			</div>
		);
		const titleInput = (
			<div>
				<label htmlFor='title'>Title:</label>
				<input
					type='title'
					name='currentTitle'
					value={state.currentTitle}
					onChange={this.handleChange}
				/>
			</div>
		);
		const emailInput = (
			<input
				type='text'
				name='email'
				value={state.email}
				onChange={this.handleChange}
			/>
		);
		const phoneInput = (
			<input
				type='text'
				name='phone'
				value={state.phone}
				onChange={this.handleChange}
			/>
		);

		const nameDiv = <span>{state.name}</span>;
		const titleDiv = <span>{state.currentTitle}</span>;
		const emailDiv = <span>{state.email}</span>;
		const phoneDiv = <span>{state.phone}</span>;
		const submitButton = <button onClick={this.saveInfo}>Save</button>;
		const editButton = <button onClick={this.editInfo}>Edit</button>;

		let nameField = nameInput;
		let titleField = titleInput;
		let emailField = emailInput;
		let phoneField = phoneInput;
		let button = submitButton;

		if (state.editing === false || props.editing === false) {
			nameField = nameDiv;
			titleField = titleDiv;
			emailField = emailDiv;
			phoneField = phoneDiv;
			button = editButton;
		}

		if (props.editing === false) {
			button = '';
		}

		return (
			<form id='PersonalInfo'>
				<ul>
					<div className='left'>
						<li className='name'>{nameField}</li>
						<li className='current-title'>{titleField}</li>
					</div>
					<div className='right'>
						<li className='email'>
							<label htmlFor='email'>E-mail:</label>
							{emailField}
						</li>
						<li className='phone'>
							<label htmlFor='phone'>Phone:</label>
							{phoneField}
						</li>
					</div>
				</ul>
				{button}
			</form>
		);
	}
}

export default PersonalInfo;
