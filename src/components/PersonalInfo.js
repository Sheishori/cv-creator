import React from 'react';
import '../styles/PersonalInfo.css';

class PersonalInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phone: '',
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

		const nameDiv = <div>{state.name}</div>;
		const emailDiv = <div>{state.email}</div>;
		const phoneDiv = <div>{state.phone}</div>;
		const submitButton = <button onClick={this.saveInfo}>Save</button>;
		const editButton = <button onClick={this.editInfo}>Edit</button>;

		let nameField = nameInput;
		let emailField = emailInput;
		let phoneField = phoneInput;
		let button = submitButton;

		if (state.editing === false || props.editing === false) {
			nameField = nameDiv;
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
					<li>{nameField}</li>
					<li>
						<label htmlFor='email'>E-mail:</label>
						{emailField}
					</li>
					<li>
						<label htmlFor='phone'>Phone:</label>
						{phoneField}
					</li>
				</ul>
				{button}
			</form>
		);
	}
}

export default PersonalInfo;
