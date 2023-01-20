import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			editing: true,
		};

		this.submit = this.submit.bind(this);
		this.edit = this.edit.bind(this);
	}

	submit() {
		this.setState({
			editing: false,
		});
	}

	edit() {
		this.setState({
			editing: true,
		});
	}

	render() {
		const { editing } = this.state;
		const submitButton = <button onClick={this.submit}>Submit</button>;
		const editButton = <button onClick={this.edit}>Edit</button>;
		let button = submitButton;

		if (editing === false) button = editButton;

		return (
			<div className='App'>
				<header>
					<h1>CV Creator</h1>
					<div>
						by <a href='https://github.com/Sheishori'>Sheishori</a>
					</div>
				</header>
				<main>
					<PersonalInfo editing={editing} />
					<Experience editing={editing} />
					<Education editing={editing} />
				</main>
				{button}
			</div>
		);
	}
}

export default App;
