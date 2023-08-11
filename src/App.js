import { React } from 'react';
import './App.scss';
import Layout from './stories/css/Layout';

const config = [
	{
		backgroundColor: 'red',
		flexGrow: 1,
		color: 'black',
	},
	{
		backgroundColor: 'pink',
	},
	{
		backgroundColor: 'blue',
	},
];

const App = () =>
	<div className="App">
		<Layout config={ config }>
			<span style={ { color: 'white' } }>A</span>
			<span>B</span>
			<span>C</span>
			<span>D</span>
			<span>E</span>
		</Layout>
	</div>;

export default App;
