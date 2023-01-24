import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Description from './components/Description';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
	const [editing, setEditing] = useState(true);

	function submit() {
		setEditing(false);
	}

	function edit() {
		setEditing(true);
	}

	const submitButton = <button onClick={submit}>Submit</button>;
	const editButton = <button onClick={edit}>Edit</button>;
	let button = submitButton;

	if (editing === false) button = editButton;

	return (
		<div className='App'>
			<header>
				<h1>CV Creator</h1>
				<div>
					by <a href='https://github.com/Sheishori'>Sheishori</a>
				</div>
				{button}
			</header>
			<main>
				<PersonalInfo editing={editing} />
				<Description editing={editing} />
				<Experience editing={editing} />
				<Education editing={editing} />
			</main>
		</div>
	);
}

export default App;
