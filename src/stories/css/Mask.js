import React from 'react';

const imagesType = {
	'airplane.png': {
		type: 'url',
		image: '/fighterJet.png',
	},
	'animate.svg': {
		type: 'url',
		image: '/SvgImage.svg',
	},
	'animatedWolf.png': {
		type: 'url',
		image: '/wolf.png',
	},
	'semiTransparent.png': {
		type: 'url',
		image: '/semiTransparent.png',
	},
	'linear-gradient': {
		type: 'linear-gradient',
		image: 'to bottom, transparent 25%, black 75%',
	},
};

const Mask = ({ image }) =>
	<div
		className="mask"
		style={ { WebkitMaskImage:
			`${ imagesType[image].type }(${ process.env.PUBLIC_URL }${ imagesType[image].image })` } }
	>
		<div className="backgroundMask"/>
	</div>;

export default Mask;
