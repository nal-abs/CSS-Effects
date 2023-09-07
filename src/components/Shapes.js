import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const getStyle = ({ x, y, size, radius, rotate }) => ({
	rotate: `${ rotate }deg`,
	left: `${ x }%`,
	top: `${ y }%`,
	transform: `scale(${ size })`,
	borderRadius: `${ radius }%`,
});

const Shapes = ({ config: { shapes }}) => shapes.map((shape, i) =>
	<ParallaxLayer
		key={ i }
		offset={ shape.offset }
		speed={ shape.speed }
		style={ { zIndex: `${ shape.position }` } }
	>
		<div
			className="spring-shape"
			style={ getStyle(shape) }
		/></ParallaxLayer>);

export default Shapes;
