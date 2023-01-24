import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Experience.css';

function Experience(props) {
	const [experience, setExperience] = useState([
		{
			company: 'Great Web Company',
			position: 'Web Developer',
			tasks:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nisl urna. Morbi sed posuere velit. Pellentesque ac dui congue, venenatis lorem ut, posuere purus.',
			startDate: '2020',
			endDate: 'Present',
			id: 123,
		},
		{
			company: 'Neat Web Company',
			position: 'Junior Web Developer',
			tasks:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nisl urna. Morbi sed posuere velit. Pellentesque ac dui congue, venenatis lorem ut, posuere purus.',
			startDate: '2016',
			endDate: '2020',
			id: 456,
		},
	]);

	const [newExp, setNewExp] = useState({
		company: '',
		position: '',
		tasks: '',
		startDate: '',
		endDate: '',
		id: uniqid(),
	});

	const [editingExp, setEditingExp] = useState(false);

	function newExperience() {
		setEditingExp(true);
	}

	function handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setNewExp({ ...newExp, [name]: value });
	}

	function saveExperience(event) {
		event.preventDefault();
		let exp = [];

		{
			/* Check whether to edit or add a new element to the experience array */
		}
		if (experience.find((element) => element.id === newExp.id)) {
			exp = experience.reduce((all, current) => {
				if (current.id === newExp.id) return all.concat(newExp);
				else return all.concat(current);
			}, []);
		} else exp = experience.concat(newExp);

		setExperience(exp);
		setNewExp({
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
			id: uniqid(),
		});
		setEditingExp(false);
	}

	function cancel(event) {
		event.preventDefault();
		setNewExp({
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
			id: uniqid(),
		});
		setEditingExp(false);
	}

	function editExperience(id) {
		let edit = experience.find((element) => element.id === id);
		setNewExp(edit);
		setEditingExp(true);
	}

	function delExperience(id) {
		setExperience(experience.filter((element) => element.id !== id));
	}

	let editing = '';
	const newForm = (
		<form>
			<ul>
				<li>
					<label htmlFor='company'>Company name:</label>
					<input
						type='text'
						name='company'
						value={newExp.company}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='position'>Position title:</label>
					<input
						type='text'
						name='position'
						value={newExp.position}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='tasks'>Main tasks:</label>
					<input
						type='text'
						name='tasks'
						value={newExp.tasks}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='startDate'>Start date:</label>
					<input
						type='text'
						name='startDate'
						value={newExp.startDate}
						onChange={handleChange}
					/>
				</li>
				<li>
					<label htmlFor='endDate'>End date:</label>
					<input
						type='text'
						name='endDate'
						value={newExp.endDate}
						onChange={handleChange}
					/>
				</li>
			</ul>
			<button onClick={saveExperience}>Save</button>
			<button onClick={cancel}>Cancel</button>
		</form>
	);

	const addButton = <button onClick={newExperience}>Add</button>;
	let button = addButton;

	if (editingExp) {
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
		<div id='Experience'>
			<h3>Experience</h3>
			<ul className='all'>
				{experience.map((element) => {
					return (
						<li key={element.id}>
							<div className='experience-info'>
								<div className='date'>
									{element.startDate} - {element.endDate}
								</div>
								<div className='company-info'>
									<div className='company-name'>{element.company}</div>
									<div className='position'>{element.position}</div>
									<div className='tasks'>{element.tasks}</div>
								</div>
							</div>
							<div className={'buttons ' + active}>
								<button onClick={() => editExperience(element.id)}>Edit</button>
								<button onClick={() => delExperience(element.id)}>
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

export default Experience;
