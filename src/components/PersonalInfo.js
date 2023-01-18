import React from 'react';

class PersonalInfo extends React.Component {
	render() {
		return (
			<form id='PersonalInfo'>
				<p>Personal Information</p>
				<ul>
					<li>
						<label htmlFor='name'>Name:</label>
						<input type='text' name='name' />
					</li>
					<li>
						<label htmlFor='email'>E-mail:</label>
						<input type='text' name='email' />
					</li>
					<li>
						<label htmlFor='phone'>Phone:</label>
						<input type='text' name='phone' />
					</li>
				</ul>
			</form>
		);
	}
}

export default PersonalInfo;
