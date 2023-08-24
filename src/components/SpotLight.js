import React, { useState } from 'react';

const percentage = 100;

const getPosition = (evt) => ({
	x: (evt.clientX / evt.view.innerWidth * percentage).toFixed(),
	y: (evt.clientY / evt.view.innerHeight * percentage).toFixed(),
});

const SpotLight = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	return (
		<div
			onMouseMove={ (evt) => setPosition(getPosition(evt)) }
			className="spotLight-background"
		>
			<div
				style={ {
					webkitMask: `radial-gradient(circle at ${ position.x }% ${ position.y }%, transparent 40px, black 150px)`,
				} }
				className="spotLight"
			/></div>);
};

export default SpotLight;
