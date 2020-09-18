import React from 'react';
import Header from './component/Header';
import Container from './component/Container';

class App extends React.Component {
	render(){
        return (
			<div>
				<Header/>
				<Container/>
			</div>
		);
	}
}

export default App;