import React from 'react';

class Description extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada accumsan ligula, sed bibendum tortor elementum sit amet. Aliquam lacus nunc, finibus mattis feugiat a, tristique a tortor. Aliquam suscipit non tortor a molestie. In hac habitasse platea dictumst. Praesent quis aliquam enim. Nulla sit amet erat vitae orci posuere ultrices. Cras gravida diam arcu, posuere molestie lectus pellentesque a. Aliquam ultricies hendrerit ex. Nam urna diam, vestibulum sed eleifend vel, euismod id libero.',
			editing: true,
		};
	}

	render() {
		const { state, props } = this;

		return (
			<form id='Description'>
				<h3>Description</h3>
			</form>
		);
	}
}

export default Description;
