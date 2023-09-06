/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const SpringParallax = () =>
	<div className="spring-parallax">
		<Parallax pages={ 2 }>
			<ParallaxLayer
				offset={ 0 }
				speed={ -0.6 }
				style={ {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				} }
			>
				<div className="glass-effect"/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 0.3 } speed={ -0.8 }>
				<div className="spring-square" style={ { marginLeft: '25%' } }/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 0.4 } speed={ -0.2 }>
				<div className="spring-square" style={ { marginLeft: '70%', transform: 'scale(0.5)' } }/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 0.7 } speed={ 0.3 }>
				<div
					className="spring-square"
					style={ { marginLeft: '50%', transform: 'scale(1.8)',
						borderRadius: '50%' } }
				/>
			</ParallaxLayer>
		</Parallax></div>;

export default SpringParallax;
