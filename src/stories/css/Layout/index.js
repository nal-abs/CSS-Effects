import React from 'react';
import tile from './helper/tile';

const Layout = ({ children, config }) => <div className="parent">
	{children.map((child, i) => React.cloneElement(child, {
		style: { ...tile(config, children.length)[i], ...child.props.style },
		key: i,
	}))}</div>;

export default Layout;
