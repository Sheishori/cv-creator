import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<PersonalInfo />
				<Education />
				<Experience />
			</div>
		);
	}
}

export default App;
