import React from 'react';

const imagesType = {
	'airplane.png': {
		type: 'url',
		image: `${ process.env.PUBLIC_URL }/fighterJet.png`,
	},
	'animate.svg': {
		type: 'url',
		image: `${ process.env.PUBLIC_URL }/SvgImage.svg`,
	},
	'animatedWolf.png': {
		type: 'url',
		image: `${ process.env.PUBLIC_URL }/wolf.png`,
	},
	'semiTransparent.png': {
		type: 'url',
		image: `${ process.env.PUBLIC_URL }/semiTransparent.png`,
	},
	'linear-gradient': {
		type: 'linear-gradient',
		image: '270deg, transparent 25%, black 75%',
	},
};

const Mask = ({ image }) =>
	<div
		className="mask"
		style={ { WebkitMaskImage:
			`${ imagesType[image].type }(${ imagesType[image].image })` } }
	>
		<div className="backgroundMask"/>
	</div>;

export default Mask;
