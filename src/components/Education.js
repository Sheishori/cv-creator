import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Education.css';

function Education(props) {
	const [education, setEducation] = useState([
		{
			school: 'Technological University',
			title: "Master's Degree in IT",
			startDate: '2012',
			endDate: '2016',
			id: 789,
		},
	]);

	const [newEdu, setNewEdu] = useState({
		school: '',
		title: '',
		startDate: '',
		endDate: '',
		id: uniqid(),
	});

	const [editingEdu, setEditingEdu] = useState(false);

	function newEducation() {
		setEditingEdu(true);
	}

	function handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setNewEdu({ ...newEdu, [name]: value });
	}

	function saveEducation(event) {
		event.preventDefault();
		let edu = [];

		{
			/* Check whether to edit or add a new element to the experience array */
		}
		if (education.find((element) => element.id === newEdu.id)) {
			edu = education.reduce((all, current) => {
				if (current.id === newEdu.id) return all.concat(newEdu);
				else return all.concat(current);
			}, []);
		} else edu = education.concat(newEdu);

		setEducation(edu);
		setNewEdu({
			school: '',
			title: '',
			startDate: '',
			endDate: '',
			id: uniqid(),
		});
		setEditingEdu(false);
	}

	function cancel(event) {
		event.preventDefault();
		setNewEdu({
			school: '',
			title: '',
			startDate: '',
			endDate: '',
			id: uniqid(),
		});
		setEditingEdu(false);
	}

	function editEducation(id) {
		let edit = education.find((element) => element.id === id);
		setNewEdu(edit);
		setEditingEdu(true);
	}

	function delEducation(id) {
		setEducation(education.filter((element) => element.id !== id));
	}

	let editing = '';
	const newForm = (
		<form>
			<ul>
				<li>
					<label htmlFor='school'>School name:</label>
					<input
						type='text'
						name='school'
						value={newEdu.school}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='title'>Title of study:</label>
					<input
						type='text'
						name='title'
						value={newEdu.title}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='startDate'>Start date:</label>
					<input
						type='text'
						name='startDate'
						value={newEdu.startDate}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='endDate'>End date:</label>
					<input
						type='text'
						name='endDate'
						value={newEdu.endDate}
						onChange={handleChange}
					/>
				</li>
			</ul>
			<button onClick={saveEducation}>Save</button>
			<button onClick={cancel}>Cancel</button>
		</form>
	);

	const addButton = <button onClick={newEducation}>Add</button>;
	let button = addButton;

	if (editingEdu) {
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
			<ul className='all'>
				{education.map((element) => {
					return (
						<li key={element.id}>
							<div className='education-info'>
								<div className='date'>
									{element.startDate} - {element.endDate}
								</div>
								<div className='school-info'>
									<div className='school-name'>{element.school}</div>
									<div className='title'>{element.title}</div>
								</div>
							</div>
							<div className={'buttons ' + active}>
								<button onClick={() => editEducation(element.id)}>Edit</button>
								<button onClick={() => delEducation(element.id)}>Delete</button>
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

export default Education;
