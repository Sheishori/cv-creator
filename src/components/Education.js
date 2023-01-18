import React from 'react';

class Education extends React.Component {
	render() {
		const newForm = (
			<form>
				<ul>
					<li>
						<label htmlFor='school-name'>School name:</label>
						<input type='text' name='school-name' />
					</li>
					<li>
						<label htmlFor='title'>Title of study:</label>
						<input type='text' name='title' />
					</li>
					<li>
						<label htmlFor='date'>Date of study:</label>
						<input type='text' name='date' />
					</li>
				</ul>
				<button>Save</button>
			</form>
		);

		return (
			<div id='Education'>
				<p>Education</p>
				<button>Add</button>
			</div>
		);
	}
}

export default Education;
