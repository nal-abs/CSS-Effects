import { React } from 'react';
import './App.scss';
import SpringParallax from './components/SpringParallax';

const App = (context) =>
	<div className="App">
		<SpringParallax { ...context }/>
	</div>;

export default App;
