import React from 'react';
import '../styles/Description.css';

class Description extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada accumsan ligula, sed bibendum tortor elementum sit amet. Aliquam lacus nunc, finibus mattis feugiat a, tristique a tortor. Aliquam suscipit non tortor a molestie. In hac habitasse platea dictumst. Praesent quis aliquam enim. Nulla sit amet erat vitae orci posuere ultrices. Cras gravida diam arcu, posuere molestie lectus pellentesque a. Aliquam ultricies hendrerit ex. Nam urna diam, vestibulum sed eleifend vel, euismod id libero.',
			editing: true,
		};

		this.handleChange = this.handleChange.bind(this);
		this.saveInfo = this.saveInfo.bind(this);
		this.editInfo = this.editInfo.bind(this);
	}

	handleChange(event) {
		this.setState({
			desc: event.target.value,
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

		const descInput = (
			<textarea name='desc' value={state.desc} onChange={this.handleChange} />
		);

		const descDiv = <div>{state.desc}</div>;
		const submitButton = <button onClick={this.saveInfo}>Save</button>;
		const editButton = <button onClick={this.editInfo}>Edit</button>;

		let descField = descInput;
		let button = submitButton;

		if (state.editing === false || props.editing === false) {
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
}

export default Description;
