import React from 'react';

class PersonalInfo extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			phone: '',
		};

		this.handleChange = this.handleChange.bind(this);
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

		return (
			<form id='PersonalInfo'>
				<p>Personal Information</p>
				<ul>
					<li>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							value={state.name}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='email'>E-mail:</label>
						<input
							type='text'
							name='email'
							value={state.email}
							onChange={this.handleChange}
						/>
					</li>
					<li>
						<label htmlFor='phone'>Phone:</label>
						<input
							type='text'
							name='phone'
							value={state.phone}
							onChange={this.handleChange}
						/>
					</li>
				</ul>
			</form>
		);
	}
}

export default PersonalInfo;
