import React from 'react';
import tile from './helper/tile';

const defaultConfig = [
	{
		flex: '1 1 0',
		border: '2px solid black',
		boxSizing: 'border-box',
	},
];

const Layout = ({ children, config = defaultConfig }) => {
	const tiledConfig = tile(config, children.length);

	return <div className="layout">
		{children.map((child, i) =>
			<div
				key={ i }
				style={ { ...tiledConfig[i] } }
			>{child}</div>)}</div>;
};

export default Layout;
