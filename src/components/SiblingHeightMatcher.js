import { range } from '@laufire/utils/collection';
import React, { useState } from 'react';
import getRandomColor from './Layout/helper/getRandomColor';

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
			<div className="layout">{range(0, columns).map((column) =>
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
