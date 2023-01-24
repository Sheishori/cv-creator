import React, { useState } from 'react';
import '../styles/Description.css';

function Description(props) {
	const [desc, setDesc] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada accumsan ligula, sed bibendum tortor elementum sit amet. Aliquam lacus nunc, finibus mattis feugiat a, tristique a tortor. Aliquam suscipit non tortor a molestie. In hac habitasse platea dictumst. Praesent quis aliquam enim. Nulla sit amet erat vitae orci posuere ultrices. Cras gravida diam arcu, posuere molestie lectus pellentesque a. Aliquam ultricies hendrerit ex. Nam urna diam, vestibulum sed eleifend vel, euismod id libero.'
	);
	function handleChange(event) {
		setDesc(event.target.value);
	}

	const [editing, setEditing] = useState(true);
	function saveInfo(event) {
		event.preventDefault();
		setEditing(false);
	}

	function editInfo(event) {
		event.preventDefault();
		setEditing(true);
	}

	const descInput = (
		<textarea name='desc' value={desc} onChange={handleChange} />
	);
	const descDiv = <div>{desc}</div>;
	const submitButton = <button onClick={saveInfo}>Save</button>;
	const editButton = <button onClick={editInfo}>Edit</button>;

	let descField = descInput;
	let button = submitButton;

	if (editing === false || props.editing === false) {
		descField = descDiv;
		button = editButton;
	}

	if (props.editing === false) {
		button = '';
	}

	return (
		<div id='Description'>
			<label htmlFor='desc'>Description</label>
			{descField}
			{button}
		</div>
	);
}

export default Description;
