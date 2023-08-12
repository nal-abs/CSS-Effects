import { React } from 'react';
import './App.scss';
import Layout from './stories/css/Layout';

const children = ['Hi all welcome to react-web-components', 'B', 'C', 'D'];

const App = () =>
	<div className="App">
		<Layout>
			{children.map((child, i) =>
				<div
					key={ i }
				>{child}</div>)}
		</Layout>
	</div>;

export default App;
