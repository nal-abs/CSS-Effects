import React from 'react';
import tile from './helper/tile';

const columnCount = {
	singleColumn: 1,
	twoColumn: 2,
	threeColumn: 3,
};

const layout = {
	singleColumn: [{
		flex: '1 0 0',
		overflow: 'auto',
	}],
	twoColumn: [{
		flex: '1 0 0',
		overflow: 'auto',
	}],
	threeColumn: [{
		flex: '1 0 0',
		overflow: 'auto',
	},
	{
		flex: '2 0 0',
		overflow: 'auto',
	}],
};

const Layout = ({ children, config = layout.twoColumn }) => {
	const tiledConfig = tile(layout[config], children.length);
	const slicedChildren = children.slice(0, columnCount[config]);

	return <div className="layout">
		{slicedChildren.map((child, i) =>
			<div
				key={ i }
				style={ { ...tiledConfig[i] } }
			>{child}</div>)}</div>;
};

export default Layout;
