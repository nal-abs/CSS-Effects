/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';
import React, { useState } from 'react';

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for(let i = 0; i < 6; i++)
		color += letters[Math.floor(Math.random() * 16)];

	return color;
};

const Input = ({ setColumns, columns }) =>
	<input
		type="number"
		value={ columns }
		onChange={ (evt) => setColumns(evt.target.value) }
	/>;

const SiblingHeightMatcher = () => {
	const [columns, setColumns] = useState(0);

	return (
		<div>
			<Input { ...{ columns, setColumns } }/>
			<div className="parent">{range(0, columns).map((column) =>
				<div
					key={ column }
					style={ { backgroundColor: getRandomColor() } }
				>
					The justify-content property aligns the flexible container
					items when the items do not use
					all available space on the main-axis
				</div>)}
			</div></div>);
};

export default SiblingHeightMatcher;
