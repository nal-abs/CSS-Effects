import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GlassLayer from './GlassLayer';
import Shapes from './Shapes';

const SpringParallax = (context) =>
	<div className="spring-parallax">
		<Parallax pages={ 1 }>
			<ParallaxLayer
				className="center"
				sticky={ { start: 0, end: 1 } }
			>
				<GlassLayer/>
				<Shapes { ...context }/>
			</ParallaxLayer>
		</Parallax></div>;

export default SpringParallax;
