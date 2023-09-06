import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
			className="spring-square"
			style={ getStyle(shape) }
		/></ParallaxLayer>);

const SpringParallax = (context) =>
	<div className="spring-parallax">
		<Parallax pages={ 2 }>
			<ParallaxLayer
				offset={ 0 }
				speed={ 0.06 }
				className="center"
			>
				<div className="glass-effect"/>
			</ParallaxLayer>
			<Shapes { ...context }/>
		</Parallax></div>;

export default SpringParallax;
