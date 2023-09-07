import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GlassLayer from './GlassLayer';
import Shapes from './Shapes';

const SpringParallax = (context) =>
	<div className="spring-parallax">
		<Parallax pages={ 2 }>
			<ParallaxLayer
				className="center"
				sticky={ { start: 0, end: 1 } }
				style={ { zIndex: 2 } }
			>
				<GlassLayer/>
			</ParallaxLayer>
			<Shapes { ...context }/>
		</Parallax></div>;

export default SpringParallax;
