/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { range } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';
import React, { useState } from 'react';

const Height = () => {
	const [childOne, setChildOne] = useState(0);
	const [childTwo, setChildTwo] = useState(0);
	const ListOne = range(0, childOne).map(() => rndString(5));
	const ListTwo = range(0, childTwo).map(() => rndString(5));

	return (
		<div className="parent">
			<div className="child1">
				<input
					type="number"
					value={ childOne }
					onChange={ (evt) => setChildOne(evt.target.value) }
				/>
				{ListOne.map((list) => <div key={ list }>{list}</div>)}
			</div>
			<div className="child2">
				<input
					type="number"
					value={ childTwo }
					onChange={ (evt) => setChildTwo(evt.target.value) }
				/>
				{ListTwo.map((list) => <div key={ list }>{list}</div>)}
			</div>
		</div>);
};

export default Height;
