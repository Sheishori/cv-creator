import React, { useState } from 'react';
import '../styles/PersonalInfo.css';

function PersonalInfo(props) {
	const [info, setInfo] = useState({
		name: 'John John',
		currentTitle: 'Web Developer',
		email: 'john.john@gmail.com',
		phone: '123456789',
	});

	const [editingInfo, setEditingInfo] = useState(true);

	function handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setInfo({ ...info, [name]: value });
	}

	function saveInfo(event) {
		event.preventDefault();
		setEditingInfo(false);
	}

	function editInfo(event) {
		event.preventDefault();
		setEditingInfo(true);
	}

	const nameInput = (
		<div>
			<label htmlFor='name'>Name:</label>
			<input
				type='text'
				name='name'
				value={info.name}
				onChange={handleChange}
			/>
		</div>
	);
	const titleInput = (
		<div>
			<label htmlFor='title'>Title:</label>
			<input
				type='title'
				name='currentTitle'
				value={info.currentTitle}
				onChange={handleChange}
			/>
		</div>
	);
	const emailInput = (
		<input
			type='text'
			name='email'
			value={info.email}
			onChange={handleChange}
		/>
	);
	const phoneInput = (
		<input
			type='text'
			name='phone'
			value={info.phone}
			onChange={handleChange}
		/>
	);

	const nameDiv = <span>{info.name}</span>;
	const titleDiv = <span>{info.currentTitle}</span>;
	const emailDiv = <span>{info.email}</span>;
	const phoneDiv = <span>{info.phone}</span>;
	const submitButton = <button onClick={saveInfo}>Save</button>;
	const editButton = <button onClick={editInfo}>Edit</button>;

	let nameField = nameInput;
	let titleField = titleInput;
	let emailField = emailInput;
	let phoneField = phoneInput;
	let button = submitButton;

	if (editingInfo === false || props.editing === false) {
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

export default PersonalInfo;
